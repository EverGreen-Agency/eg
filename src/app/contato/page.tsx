import type { Metadata } from 'next'
import ContatoClient from './ContatoClient'

export const metadata: Metadata = {
  title: 'Contato | Fale com a Evergreen MKT',
  description: 'Entre em contato com a Evergreen MKT e agende uma conversa sobre o diagnóstico comercial da sua empresa.',
}

export default function Page() {
  return <ContatoClient />
}
