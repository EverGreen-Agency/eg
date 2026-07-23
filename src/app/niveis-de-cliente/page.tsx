import type { Metadata } from 'next'
import NiveisDeClienteClient from './NiveisDeClienteClient'

export const metadata: Metadata = {
  title: 'Níveis de Cliente: Semente, Muda, Árvore e Floresta | EverGreen',
  description: 'Nível de cliente na EverGreen reflete profundidade de relação, não tempo de casa: Semente (diagnóstico), Muda (sprint ou início de retainer), Árvore (retainer maduro) e Floresta (parceria de alta profundidade).',
}

export default function Page() {
  return <NiveisDeClienteClient />
}
