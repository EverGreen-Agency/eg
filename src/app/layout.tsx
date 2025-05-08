import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Evergreen MKT | Growth, Tecnologia e Resultados',
  description: 'Hub de autoridade em growth, tecnologia, IA e execução de resultados reais.',
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
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
} 