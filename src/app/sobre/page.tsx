import type { Metadata } from 'next'
import SobreClient from './SobreClient'

export const metadata: Metadata = {
  title: 'Sobre a EverGreen | Consultoria Boutique de Crescimento Comercial e Tecnológico',
  description: 'Conheça a EverGreen: metodologia própria, cultura de execução e o time por trás da consultoria.',
}

export default function Page() {
  return <SobreClient />
}
