import './globals.css'
import { Inter } from 'next/font/google'
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

export const metadata = {
  metadataBase: new URL('https://evergreenmkt.com.br'),
  title: 'Evergreen MKT | Growth, Tecnologia e Resultados',
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
    <html lang="pt-BR" className={inter.variable}>
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <body className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900`}>
        <FacebookPixel />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <CookieConsent />
      </body>
    </html>
  )
} 