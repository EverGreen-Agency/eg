'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import EStaircaseMark from '@/components/brand/EStaircaseMark'

/* Cantoneiras de instrumento (moldura técnica) */
function CornerBrackets() {
  const corner = 'absolute w-6 h-6 md:w-8 md:h-8 border-menta/30'
  return (
    <div className="absolute inset-4 md:inset-8 pointer-events-none z-[1]" aria-hidden>
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  )
}

const marqueeItems = [
  'Consultoria comercial',
  'Automação',
  'IA aplicada',
  'CRM & cadência',
  'Dashboards',
  'Previsibilidade',
]

const pillars = [
  {
    num: '01',
    title: 'Estratégias de Growth',
    desc: 'Aceleração de vendas B2B previsível — demanda, conversão e jornada tratadas como sistema.',
  },
  {
    num: '02',
    title: 'Automação Comercial',
    desc: 'Redução de CAC e aumento de conversão com processo, CRM e cadência estruturada.',
  },
  {
    num: '03',
    title: 'Inteligência Artificial aplicada',
    desc: 'IA em marketing, vendas e atendimento — invisível no processo, visível no resultado.',
  },
  {
    num: '04',
    title: 'Desenvolvimento de Ferramentas',
    desc: 'Plataformas digitais, protótipos e MVPs que provam a tese antes de escalar.',
  },
]

const heroLines = [
  { text: 'Cresça de forma inteligente.', accent: false },
  { text: 'Venda com tecnologia.', accent: false },
  { text: 'Escale com IA.', accent: true },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const markY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fadeOut = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <main className="bg-musgo grain">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[radial-gradient(60%_55%_at_80%_30%,rgba(58,201,123,0.10),transparent_72%)]"
      >
        {/* Marca E em escada, sangrando a direita, com parallax */}
        <motion.div
          style={reduce ? undefined : { y: markY }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[52vw] max-w-[720px] h-[70vh] pointer-events-none opacity-90"
        >
          <EStaircaseMark className="w-full h-full" />
        </motion.div>

        <CornerBrackets />

        {/* Conteúdo — centralizado verticalmente, cabe em uma tela */}
        <motion.div
          style={reduce ? undefined : { opacity: fadeOut }}
          className="container relative z-[2] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pt-24 pb-14"
        >
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mono-label text-menta mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-menta/50" aria-hidden />
            <span className="hidden sm:inline">Crescimento previsível, escalável e tecnológico</span>
            <span className="sm:hidden">Crescimento previsível</span>
          </motion.p>

          <h1 className="max-w-4xl mb-7">
            {heroLines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden py-[0.06em]">
                <motion.span
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block text-[clamp(2rem,5.2vw,4.6rem)] leading-[1.03] tracking-tight font-bold ${
                    line.accent ? 'text-menta' : 'text-baunilha'
                  }`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-lg text-base md:text-lg text-baunilha/70 mb-9"
          >
            Somos a força por trás do crescimento previsível de negócios B2B. Sistemas de
            marketing, vendas e tecnologia — com inteligência artificial e automação.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
            >
              Agendar Diagnóstico
            </Link>
            <Link
              href="/portfolio"
              className="mono-label inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
            >
              Ver Portfólio <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Rodapé do instrumento — em fluxo, não sobrepõe */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="container relative z-[2] mx-auto px-6 md:px-12 pb-6 flex items-center justify-between"
        >
          <p className="mono-label text-baunilha/40 hidden md:flex items-center gap-5">
            <span>Consultoria</span>
            <span className="text-menta/60" aria-hidden>▪</span>
            <span>Tecnologia</span>
            <span className="text-menta/60" aria-hidden>▪</span>
            <span>B2B</span>
          </p>
          <p className="mono-label text-baunilha/40 flex items-center gap-2">
            Scroll
            <motion.span
              animate={reduce ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              ↓
            </motion.span>
          </p>
        </motion.div>
      </section>

      {/* MARQUEE de capacidades */}
      <section className="border-y hairline py-5 overflow-hidden" aria-label="Capacidades">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
              {marqueeItems.map((item) => (
                <span key={`${half}-${item}`} className="mono-label text-baunilha/50 flex items-center">
                  <span className="px-8">{item}</span>
                  <span className="text-menta" aria-hidden>▪</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* O QUE FAZEMOS — cards numerados */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="mono-label text-menta mb-4">01 — O que fazemos</p>
              <h2 className="text-3xl md:text-5xl font-bold text-baunilha tracking-tight max-w-2xl">
                Da aquisição ao crescimento, com inteligência.
              </h2>
            </div>
            <Link
              href="/servicos"
              className="mono-label text-baunilha/60 hover:text-menta transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Todos os serviços <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-menta/15 border hairline">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.num}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group bg-musgo p-8 md:p-12 hover:bg-musgo-deep transition-colors duration-300"
              >
                <p className="mono-label text-menta mb-6">{pillar.num}</p>
                <h3 className="text-xl md:text-2xl font-bold text-baunilha mb-3 group-hover:text-menta transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-baunilha/65 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mono-label text-baunilha/40 text-center mt-10">
            Tudo integrado. Tudo focado em gerar receita real.
          </p>
        </div>
      </section>

      {/* PARCEIRO KOMMO */}
      <section className="py-20 border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 border hairline p-8 md:p-14 relative">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-musgo px-3">
              <span className="mono-label text-menta">Parceiro oficial</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-baunilha mb-4 tracking-tight">
                Especialistas em Kommo CRM
              </h2>
              <p className="text-baunilha/70 text-lg mb-6 leading-relaxed max-w-xl">
                Como parceiros certificados, implementamos o primeiro CRM do mundo baseado em
                mensagens. WhatsApp, Instagram e Facebook centralizados em um só lugar.
              </p>
              <Link
                href="/kommo_partners"
                className="mono-label inline-flex items-center gap-2 text-menta hover:text-baunilha transition-colors"
              >
                Conheça os serviços Kommo <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-56 h-28 md:w-64 md:h-32">
                <Image
                  src="/images/logo_kommo.webp"
                  alt="Kommo CRM"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-28 md:py-40 overflow-hidden border-t hairline">
        <div
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(58,201,123,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative z-[2] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-menta mb-6">02 — Próximo passo</p>
          <h2 className="text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.06] tracking-tight font-bold text-baunilha max-w-4xl mx-auto mb-8">
            Pronto para escalar sua receita de forma{' '}
            <span className="text-menta">inteligente?</span>
          </h2>
          <p className="text-baunilha/70 text-lg mb-10 max-w-xl mx-auto">
            Vamos desenhar o sistema que vai destravar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-baunilha text-musgo text-lg font-semibold hover:bg-menta transition-colors duration-300"
            >
              Agendar Diagnóstico
            </Link>
            <Link
              href="/contato"
              className="mono-label inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
