import type { Metadata } from 'next'
import GrowthExperience from './GrowthExperience'

export const metadata: Metadata = {
  title: 'Consultoria Executiva de Growth | EverGreen MKT',
  description: 'Estratégia, estrutura, tecnologia e previsibilidade para empresas que precisam crescer com método.',
  alternates: { canonical: '/growth' },
  openGraph: {
    title: 'Consultoria Executiva de Growth | EverGreen MKT',
    description: 'Estratégia, estrutura, tecnologia e previsibilidade para empresas que precisam crescer com método.',
    url: '/growth', type: 'website', siteName: 'EverGreen MKT',
  },
}

export default function GrowthPage() {
  return <GrowthExperience />
}
