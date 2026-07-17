import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfólio | Evergreen MKT',
  description: 'Projetos autorais, protótipos de avaliação e estudos de caso construídos pela Evergreen MKT.',
}

export default function Page() {
  return <PortfolioClient />
}
