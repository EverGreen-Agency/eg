/**
 * Contrato do Benchmark público — servido pelo Bioma, já agregado e anonimizado.
 *
 * O site NÃO calcula nada: só lê este payload de um endpoint público read-only do
 * Bioma. Enquanto `status !== 'ao_vivo'` (ou o fetch falha / vem vazio), o site
 * mostra o estado "Em Breve" — sem hardcode, o toggle vive no Bioma.
 *
 * Anonimização é responsabilidade do Bioma: cada segmento só é publicado com
 * `sampleSize >= MIN_SAMPLE` (k-anonimato) e nunca expõe cliente individual.
 */

export const BENCHMARK_ENDPOINT =
  process.env.NEXT_PUBLIC_BIOMA_BENCHMARK_URL ||
  'https://api.bioma.evergreenmkt.com.br/public/benchmark'

/** Mínimo de clientes por segmento para o dado poder aparecer (k-anonimato). */
export const MIN_SAMPLE = 3

export type PillarKey = 'oferta' | 'demanda' | 'conversao'

export const PILLAR_LABELS: Record<PillarKey, string> = {
  oferta: 'Oferta',
  demanda: 'Demanda',
  conversao: 'Conversão',
}

export interface BenchmarkPillar {
  key: PillarKey
  /** notas de 0 a 10 */
  median: number
  min: number
  max: number
}

export interface BenchmarkSegment {
  segment: string
  sampleSize: number
  overallMedian: number
  pillars: BenchmarkPillar[]
}

export interface BenchmarkPayload {
  status: 'em_breve' | 'ao_vivo'
  updatedAt?: string
  segments: BenchmarkSegment[]
}

/** Normaliza a resposta e decide se há dado publicável de fato. */
export function isBenchmarkLive(p: BenchmarkPayload | null): p is BenchmarkPayload {
  return (
    !!p &&
    p.status === 'ao_vivo' &&
    Array.isArray(p.segments) &&
    p.segments.some((s) => s.sampleSize >= MIN_SAMPLE)
  )
}
