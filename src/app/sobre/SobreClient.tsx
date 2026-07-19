'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'

const valores = [
  { title: 'Inovação', description: 'Fazemos o que ninguém fez, antes que todos queiram.' },
  { title: 'Resultados', description: 'Se não gera ROI, não tem espaço aqui.' },
  { title: 'Transparência', description: 'Comunicação real. Sem enrolação. Sem bullshit.' },
]

const jornada = [
  { periodo: 'Q1 2024', evento: 'Fundação da EverGreen MKT' },
  { periodo: 'Q2 2024', evento: 'Primeiros projetos com IA aplicada em funil de vendas' },
  { periodo: 'Q3 2024', evento: 'Sistema EG Systems validado com PMEs em expansão' },
  { periodo: 'Q4 2024', evento: 'Início da construção da marca como autoridade digital' },
  { periodo: 'Q1 2025', evento: 'Busca de expansão de mercados' },
]

export default function SobrePage() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Sobre a EverGreen"
        title="Previsibilidade não é promessa. É "
        accent="arquitetura."
        subtitle="Somos a força por trás do crescimento previsível das empresas mais ambiciosas do mercado B2B. Unimos tecnologia, IA, estratégia e execução para transformar silos em máquinas de receita."
      >
        <Link
          href="/contato"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
        >
          Quero conversar com a EG
        </Link>
      </PageHeader>

      {/* Missão e Visão */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-px bg-menta/15 border hairline">
            {[
              {
                titulo: 'Nossa Missão',
                texto:
                  'Transformar empresas em ecossistemas de crescimento sustentável, unindo estratégia, automação e inteligência artificial para escalar resultados com previsibilidade.',
              },
              {
                titulo: 'Nossa Visão',
                texto:
                  'Ser a referência global em soluções integradas de growth, IA e operações de receita para empresas B2B e B2C.',
              },
            ].map((item) => (
              <div key={item.titulo} className="bg-musgo p-8 md:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-menta mb-4">{item.titulo}</h3>
                <p className="text-baunilha/70 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-20 border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <p className="mono-label text-menta mb-3">01 — Valores</p>
          <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-12">Nossos valores</h2>
          <div className="grid md:grid-cols-3 gap-px bg-menta/15 border hairline">
            {valores.map((valor, i) => (
              <motion.div
                key={valor.title}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-musgo p-8 md:p-10 hover:bg-musgo-deep transition-colors duration-300"
              >
                <span className="mono-label text-menta">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-bold text-baunilha mt-5 mb-2 group-hover:text-menta transition-colors">
                  {valor.title}
                </h3>
                <p className="text-baunilha/65">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Semente EverGreen */}
      <section className="py-16 md:py-24 border-t hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="mono-label text-menta mb-3">02 — Origem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-8">Semente EverGreen</h2>
          <p className="text-xl text-baunilha mb-6 leading-relaxed">
            Toda floresta começa com uma semente.
            <br />A nossa é feita de convicção, execução e ambição sem freio.
          </p>
          <p className="text-baunilha/70 mb-10 leading-relaxed">
            Mesmo sendo uma equipe enxuta, já criamos soluções que melhoraram performance comercial,
            automatizaram processos críticos e aumentaram a previsibilidade de receita de quem confia na gente.
          </p>
          <div className="border-l-2 border-menta/40 pl-6 mb-10">
            <p className="mono-label text-menta mb-4">Nosso plano é simples</p>
            <ol className="space-y-3 text-baunilha/80">
              {[
                'Escolher os primeiros clientes certos',
                'Entregar absurdamente bem',
                'Tornar cada projeto uma prova viva do que somos capazes',
                'Crescer junto. Com consistência. Com visão.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mono-label text-menta mt-1">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-lg font-medium text-baunilha">
            Porque autoridade não é comprada.
            <br />É construída. E a gente já começou.
          </p>
        </div>
      </section>

      {/* Jornada */}
      <section className="py-16 md:py-24 border-t hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="mono-label text-menta mb-3">03 — Trajetória</p>
          <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-12">Nossa jornada até aqui</h2>
          <ol className="relative border-l hairline ml-2">
            {jornada.map((item, i) => (
              <motion.li
                key={item.periodo}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-8 pb-10 last:pb-0"
              >
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-menta" aria-hidden />
                <span className="mono-label text-menta block mb-2">{item.periodo}</span>
                <span className="text-baunilha/80">{item.evento}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 text-center border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold text-baunilha tracking-tight mb-6 max-w-2xl mx-auto text-balance">
            Faça parte desse florestamento
          </h2>
          <p className="text-baunilha/70 mb-10 max-w-xl mx-auto">
            Estamos escolhendo os parceiros certos para crescer junto. Aqui, cada cliente é co-criador da
            floresta que estamos construindo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
            >
              Quero ser parte da floresta
            </Link>
            <Link
              href="/portfolio"
              className="mono-label inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
            >
              Ver Portfólio <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
