'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/**
 * GTM carregado somente apos consentimento explicito.
 *
 * Fica inerte enquanto NEXT_PUBLIC_GTM_ID nao estiver definida — assim o repo
 * pode ser publicado sem container e sem quebrar. Os eventos da /growth
 * (presentation_started, section_viewed, case_viewed, whatsapp_clicked...) ja
 * empurram para window.dataLayer; sem este componente eles nao chegavam a
 * lugar nenhum.
 */
export const CONSENT_EVENT = 'eg:cookie-consent';

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setAllowed(localStorage.getItem('cookie_consent') === 'accepted');
      } catch {
        setAllowed(false);
      }
    };
    read();
    window.addEventListener(CONSENT_EVENT, read);
    return () => window.removeEventListener(CONSENT_EVENT, read);
  }, []);

  if (!gtmId || !allowed) return null;

  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
