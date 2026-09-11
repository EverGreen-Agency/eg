import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'EverGreen | Consultoria Comercial e Tecnologia para B2B',
  description: 'Consultoria boutique de previsibilidade comercial e tecnológica para B2B. Diagnosticamos gargalos e estruturamos a operação que sustenta o crescimento.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <HomeClient />
}
