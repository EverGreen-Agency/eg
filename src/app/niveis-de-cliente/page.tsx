import type { Metadata } from 'next'
import NiveisDeClienteClient from './NiveisDeClienteClient'

export const metadata: Metadata = {
  title: 'Níveis de Cliente | EverGreen MKT',
  description: 'Entenda os níveis de relacionamento e evolução dos clientes EverGreen.',
}

export default function Page() {
  return <NiveisDeClienteClient />
}
