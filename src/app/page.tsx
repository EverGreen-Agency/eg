import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Evergreen MKT | Consultoria de Crescimento Comercial e Tecnologia para Empresas B2B',
  description: 'Diagnóstico, estruturação e acompanhamento comercial e tecnológico para empresas B2B com potencial real de crescimento.',
}

export default function Page() {
  return <HomeClient />
}
