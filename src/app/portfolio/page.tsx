import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfólio de Projetos | EverGreen',
  description: 'Projetos autorais, protótipos de avaliação e estudos de caso construídos pela EverGreen.',
}

export default function Page() {
  return <PortfolioClient />
}
