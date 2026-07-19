import type { Metadata } from 'next'
import BenchmarkClient from './BenchmarkClient'

export const metadata: Metadata = {
  title: 'Benchmark | EverGreen MKT',
  description: 'Benchmarks de previsibilidade comercial por segmento — dados agregados e anonimizados a partir da operação real dos clientes EverGreen.',
}

export default function Page() {
  return <BenchmarkClient />
}
