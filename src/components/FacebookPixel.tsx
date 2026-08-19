'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState, Suspense } from 'react';
import * as fbq from '../lib/fpixel';

// Componente interno que usa useSearchParams
function FacebookPixelInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loaded, setLoaded] = useState(false);
  const disabledForImmersiveExperience = pathname === '/growth' || pathname.startsWith('/growth/');

  useEffect(() => {
    // Quando o componente for montado, carregue o script do Facebook Pixel
    if (!disabledForImmersiveExperience && !loaded && fbq.FB_PIXEL_ID) {
      setLoaded(true);
    }
  }, [disabledForImmersiveExperience, loaded]);

  useEffect(() => {
    // Registrar uma pageview sempre que a URL mudar
    if (!disabledForImmersiveExperience && fbq.FB_PIXEL_ID) {
      fbq.pageview();
    }
  }, [disabledForImmersiveExperience, pathname, searchParams]);

  if (disabledForImmersiveExperience || !fbq.FB_PIXEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbq.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Componente wrapper com Suspense
export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelInner />
    </Suspense>
  );
} 
