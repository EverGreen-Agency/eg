import type { Metadata } from 'next'
import NiveisDeClienteClient from './NiveisDeClienteClient'

export const metadata: Metadata = {
  title: 'Níveis de Cliente | Evergreen MKT',
  description: 'Entenda os níveis de relacionamento e evolução dos clientes Evergreen.',
}

export default function Page() {
  return <NiveisDeClienteClient />
}
