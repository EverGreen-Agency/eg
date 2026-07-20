'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'
import {
  BENCHMARK_ENDPOINT,
  MIN_SAMPLE,
  PILLAR_LABELS,
  isBenchmarkLive,
  type BenchmarkPayload,
  type BenchmarkSegment,
} from '@/config/benchmark'

type State = { loading: true } | { loading: false; data: BenchmarkPayload | null }

export default function BenchmarkClient() {
  const [state, setState] = useState<State>({ loading: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    let active = true
    fetch(BENCHMARK_ENDPOINT, { headers: { Accept: 'application/json' } })
      .then((r) => (r.ok ? r.json() : null))
      .then((json: BenchmarkPayload | null) => active && setState({ loading: false, data: json }))
      .catch(() => active && setState({ loading: false, data: null }))
    return () => {
      active = false
    }
  }, [])

  const live = !state.loading && isBenchmarkLive(state.data)

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Benchmark"
        title="Onde você está frente ao "
        accent="seu mercado."
        subtitle="Benchmarks de previsibilidade comercial por segmento — agregados e anonimizados a partir da operação real dos clientes EverGreen. Nunca expomos empresa individual."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          {state.loading ? (
            <div className="border hairline rounded-xl p-12 text-center">
              <p className="mono-label text-baunilha/40">Carregando…</p>
            </div>
          ) : live ? (
            <BenchmarkGrid segments={(state.data as BenchmarkPayload).segments} reduce={!!reduce} />
          ) : (
            <ComingSoon />
          )}
        </div>
      </section>
    </main>
  )
}

function ComingSoon() {
  return (
    <div className="relative border hairline rounded-xl p-10 md:p-16 text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(58,201,123,0.08),transparent_70%)]"
        aria-hidden
      />
      <div className="relative">
        <p className="mono-label text-menta mb-5">Em breve</p>
        <h2 className="text-2xl md:text-4xl font-bold text-baunilha tracking-tight mb-5 max-w-2xl mx-auto text-balance">
          Consolidando dados do ecossistema B2B.
        </h2>
        <p className="text-baunilha/70 max-w-xl mx-auto mb-10">
          Nossa inteligência cruza dados reais de dezenas de operações de vendas e marketing. 
          O painel público está sendo atualizado para refletir o cenário mais recente de previsibilidade 
          (Oferta, Demanda e Conversão), aplicando regras estritas de k-anonimato para proteger o sigilo de nossos clientes.
        </p>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
        >
          Quero meu Raio-X Comercial
        </Link>
      </div>
    </div>
  )
}

function BenchmarkGrid({ segments, reduce }: { segments: BenchmarkSegment[]; reduce: boolean }) {
  const visible = segments.filter((s) => s.sampleSize >= MIN_SAMPLE)
  return (
    <div className="grid gap-px bg-menta/15 border hairline md:grid-cols-2">
      {visible.map((seg, i) => (
        <motion.article
          key={seg.segment}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.06 }}
          className="bg-musgo p-8 md:p-10"
        >
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="text-xl font-bold text-baunilha">{seg.segment}</h3>
            <span className="mono-label text-baunilha/40">n={seg.sampleSize}</span>
          </div>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-menta tabular-nums">
              {seg.overallMedian.toFixed(1)}
            </span>
            <span className="mono-label text-baunilha/40">mediana geral / 10</span>
          </div>

          <div className="space-y-5">
            {seg.pillars.map((p) => (
              <div key={p.key}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-baunilha/80">{PILLAR_LABELS[p.key]}</span>
                  <span className="mono-label text-menta tabular-nums">{p.median.toFixed(1)}</span>
                </div>
                {/* trilha com faixa min–max e marcador da mediana */}
                <div className="relative h-2 rounded-full bg-baunilha/10">
                  <div
                    className="absolute h-full rounded-full bg-menta/25"
                    style={{ left: `${p.min * 10}%`, right: `${100 - p.max * 10}%` }}
                    aria-hidden
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-menta"
                    style={{ left: `${p.median * 10}%` }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  )
}
