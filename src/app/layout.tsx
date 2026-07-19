import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import CookieConsent from "@/components/CookieConsent";
import FacebookPixel from '@/components/FacebookPixel';
import ConditionalLayout from '@/components/ConditionalLayout';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

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
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
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