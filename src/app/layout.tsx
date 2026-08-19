import './globals.css'
import CookieConsent from "@/components/CookieConsent";
import FacebookPixel from '@/components/FacebookPixel';
import ConditionalLayout from '@/components/ConditionalLayout';

export const metadata = {
  metadataBase: new URL('https://www.evergreenmkt.com.br'),
  title: 'EverGreen MKT | Growth, Tecnologia e Resultados',
  description: 'Hub de autoridade em growth, tecnologia, IA e execução de resultados reais.',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon.ico', type: 'image/ico' },
    ],
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
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
        <FacebookPixel />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <CookieConsent />
      </body>
    </html>
  )
}
