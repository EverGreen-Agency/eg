import type { Metadata } from 'next'
import AutoridadeClient from './AutoridadeClient'

export const metadata: Metadata = {
  title: 'Autoridade | Certificações e Selos — EverGreen MKT',
  description: 'Certificações, prêmios e selos de autoridade da EverGreen MKT.',
}

export default function Page() {
  return <AutoridadeClient />
}
