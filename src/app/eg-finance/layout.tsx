import { Inter } from 'next/font/google'
import '../globals.css'
import Head from 'next/head'
import CookieConsent from "@/components/CookieConsent";
import FacebookPixel from '@/components/FacebookPixel';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Evergreen Finance | DRE + Fluxo de Caixa + IA',
  description: 'Evite o colapso financeiro com uma plataforma que mostra onde o dinheiro vai e o que fazer com ele. Comece com 7 dias grátis.',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon.ico', type: 'image/ico' },
    ],
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
}

export default function EgFinanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>
      <body className={`${inter.className} min-h-screen bg-[#0b3a26]`}>
        <FacebookPixel />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
} 