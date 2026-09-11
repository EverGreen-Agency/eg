import type { Metadata } from 'next'
import SobreClient from './SobreClient'

export const metadata: Metadata = {
  title: 'Sobre a EverGreen | Consultoria Boutique de Previsibilidade Comercial',
  description: 'Boutique de estrutura comercial e tecnologia: poucos clientes certos, método visível (Sistema Raiz EG) e execução medida. Conheça origem, valores e time.',
  alternates: { canonical: '/sobre' },
}

export default function Page() {
  return <SobreClient />
}
