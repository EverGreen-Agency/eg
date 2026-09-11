import type { Metadata } from 'next'
import NiveisDeClienteClient from './NiveisDeClienteClient'

export const metadata: Metadata = {
  title: 'Níveis de Cliente: Semente, Muda, Árvore e Floresta | EverGreen',
  description: 'Nível de cliente na EverGreen reflete profundidade de relação: Semente (diagnóstico), Muda (sprint), Árvore (retainer) e Floresta (parceria contínua).',
  alternates: { canonical: '/niveis-de-cliente' },
}

export default function Page() {
  return <NiveisDeClienteClient />
}
