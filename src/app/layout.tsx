import './globals.css'
import CookieConsent from "@/components/CookieConsent";
import GoogleTagManager from '@/components/GoogleTagManager';
import FacebookPixel from '@/components/FacebookPixel';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import StructuredData from '@/components/StructuredData';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata = {
  metadataBase: new URL('https://www.evergreenmkt.com.br'),
  title: 'EverGreen | Consultoria Comercial e Tecnologia',
  description: 'Estruturação comercial, implementação de tecnologia aplicada e previsibilidade de vendas para empresas B2B.',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon.ico', type: 'image/ico' },
    ],
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  openGraph: {
    siteName: 'EverGreen',
    locale: 'pt_BR',
    type: 'website' as const,
    images: [{ url: '/images/evergreen-horizontal.png', width: 600, height: 200, alt: 'EverGreen — Consultoria Comercial e Tecnologia' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    images: ['/images/evergreen-horizontal.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans min-h-screen bg-musgo antialiased">
        <StructuredData />
        <GoogleTagManager />
        <FacebookPixel />
        <MicrosoftClarity />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <CookieConsent />
      </body>
    </html>
  )
}
