import type { Metadata } from 'next'
import ServicosClient from './ServicosClient'

export const metadata: Metadata = {
  title: 'Serviços | Diagnóstico, Estruturação e Acompanhamento Comercial — EverGreen',
  description: 'Conheça a escada de serviços da EverGreen: diagnóstico comercial, sprint de estruturação e acompanhamento contínuo.',
}

export default function Page() {
  return <ServicosClient />
}
