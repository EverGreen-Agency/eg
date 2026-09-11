import type { Metadata } from 'next'
import AutoridadeClient from './AutoridadeClient'

export const metadata: Metadata = {
  title: 'Autoridade | Certificações e Selos — EverGreen',
  description: 'Certificações, prêmios e selos de autoridade da EverGreen Consultoria e Tecnologia.',
  alternates: { canonical: '/autoridade' },
}

export default function Page() {
  return <AutoridadeClient />
}
