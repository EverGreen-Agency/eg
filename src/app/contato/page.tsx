import type { Metadata } from 'next'
import ContatoClient from './ContatoClient'

export const metadata: Metadata = {
  title: 'Contato | Fale com a EverGreen',
  description: 'Entre em contato com a EverGreen e agende uma conversa sobre o diagnóstico comercial da sua empresa.',
  alternates: { canonical: '/contato' },
}

export default function Page() {
  return <ContatoClient />
}
