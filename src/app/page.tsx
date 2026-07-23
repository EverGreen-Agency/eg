import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'EverGreen | Consultoria de Previsibilidade Comercial e Tecnológica para B2B',
  description: 'Consultoria boutique que transforma operação em previsibilidade. Pelo Sistema Raiz EG: diagnosticamos onde a receita vaza (Raio-X Comercial), priorizamos o gargalo de maior impacto e estruturamos a operação que sustenta o crescimento.',
}

export default function Page() {
  return <HomeClient />
}
