import type { Metadata } from 'next'
import AutoridadeClient from './AutoridadeClient'

export const metadata: Metadata = {
  title: 'Autoridade | Certificações e Selos — Evergreen MKT',
  description: 'Certificações, prêmios e selos de autoridade da Evergreen MKT.',
}

export default function Page() {
  return <AutoridadeClient />
}
