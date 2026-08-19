'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import EStaircaseMark from '@/components/brand/EStaircaseMark'

const marqueeItems = [
  'Consultoria comercial',
  'Automação',
  'IA aplicada',
  'CRM & cadência',
  'Dashboards',
  'Previsibilidade',
]

/**
 * Sistema Raiz EG — as quatro fases da analogia com a árvore (Documento-Mestre §9).
 * Raiz -> Tronco -> Ramos -> Copa
 */
const pillars = [
  {
    num: '01',
    phase: 'Raiz',
    action: 'Diagnosticar',
    desc: 'Ler a operação e achar onde a receita vaza. É o Raio-X Comercial: Oferta, Demanda e Conversão medidos, com nota e mapa de gargalos.',
  },
  {
    num: '02',
    phase: 'Tronco',
    action: 'Priorizar',
    desc: 'Atacar primeiro o gargalo de maior impacto. Não fazemos tudo ao mesmo tempo — fazemos o que destrava a sustentação da empresa.',
  },
  {
    num: '03',
    phase: 'Ramos',
    action: 'Estruturar',
    desc: 'Construir o que sustenta o crescimento: processo comercial, CRM, cadência, follow-up e os ritos de gestão.',
  },
  {
    num: '04',
    phase: 'Copa',
    action: 'Evoluir',
    desc: 'Otimizar e escalar o que já funciona. A Copa não termina: é melhoria contínua, revisão e composição ao longo do tempo.',
  },
]

const heroLines = [
  { text: 'Achamos onde a receita vaza.', accent: false },
  { text: 'Priorizamos o que trava.', accent: false },
  { text: 'Estruturamos o que sustenta.', accent: true },
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
        className="relative min-h-[100svh] lg:min-h-[calc(100svh-5rem)] flex flex-col overflow-hidden"
      >
        {/* Contêiner Principal dividido em Texto e Visual */}
        <div className="container relative z-[2] mx-auto px-6 md:px-12 flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.95fr_1.05fr] lg:items-center gap-8 lg:gap-12 pt-28 lg:pt-8 pb-10">
          
          {/* Conteúdo — Coluna da Esquerda */}
          <motion.div
            style={reduce ? undefined : { opacity: fadeOut }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-menta/60" aria-hidden />
              <span className="text-xs uppercase tracking-widest font-semibold text-menta">
                Crescimento previsível, escalável e tecnológico
              </span>
            </motion.div>

            <h1 className="max-w-[17rem] sm:max-w-2xl lg:max-w-4xl mb-6 relative z-10">
              {heroLines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden py-[0.06em]">
                  <motion.span
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={`block text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.03] tracking-tight font-bold ${
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
              className="max-w-lg text-base md:text-lg text-baunilha/75 mb-8 leading-relaxed"
            >
              Consultoria boutique de estrutura comercial e tecnológica. Entramos com método,
              cadência e tecnologia aplicada para transformar operação em previsibilidade — não
              em promessa.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-all duration-300 shadow-sm"
              >
                Agendar Diagnóstico
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-menta/30 text-baunilha text-base font-medium hover:border-menta hover:text-menta transition-all duration-300"
              >
                Ver Portfólio <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Marca E em escada (Neon) — Coluna da Direita */}
          <motion.div
            style={reduce ? undefined : { y: markY }}
            className="relative flex items-center justify-center lg:justify-end w-full min-h-[350px] lg:min-h-[500px]"
          >
            <EStaircaseMark className="w-full max-w-[420px] lg:max-w-[750px] lg:translate-x-8 aspect-square" />
          </motion.div>

        </div>

        {/* Rodapé institucional */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="container relative z-[2] mx-auto px-6 md:px-12 pb-6 flex items-center justify-between mt-auto"
        >
          <div className="text-xs uppercase tracking-widest text-baunilha/40 hidden md:flex items-center gap-4 font-medium">
            <span>Consultoria</span>
            <span className="text-menta/50" aria-hidden>▪</span>
            <span>Tecnologia</span>
            <span className="text-menta/50" aria-hidden>▪</span>
            <span>B2B</span>
          </div>
          <div className="text-xs uppercase tracking-widest text-baunilha/40 flex items-center gap-2 ml-auto font-medium">
            Scroll
            <motion.span
              animate={reduce ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE de capacidades */}
      <section className="border-y border-menta/15 py-5 overflow-hidden" aria-label="Capacidades">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
              {marqueeItems.map((item) => (
                <span key={`${half}-${item}`} className="text-xs uppercase tracking-wider font-medium text-baunilha/60 flex items-center">
                  <span className="px-8">{item}</span>
                  <span className="text-menta/70" aria-hidden>▪</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SISTEMA RAIZ — Analogia com Árvore (Visual Lateral + Zonas de Profundidade) */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Cabeçalho da Seção */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-menta block mb-3">
                Sistema Raiz EG
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-baunilha tracking-tight max-w-2xl leading-tight">
                A raiz sustenta o que floresce. Trabalhamos sob a superfície primeiro.
              </h2>
            </div>
            <Link
              href="/servicos"
              className="text-sm font-medium text-baunilha/70 hover:text-menta transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Todos os serviços <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Grid Principal: Painel 3D à Esquerda + Zonas de Profundidade à Direita */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-stretch">
            
            {/* Painel Visual Lateral de Alta Presença (Esquerda) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-menta/25 bg-musgo-deep flex flex-col justify-between min-h-[480px] lg:min-h-[640px] shadow-2xl group"
            >
              {/* Imagem do Conceito Árvore 3D */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/sistema_raiz_tree.png"
                  alt="Conceito Sistema Raiz EverGreen"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-musgo-deep via-musgo-deep/30 to-transparent" />
              </div>

              {/* Tag Superior */}
              <div className="relative z-10 p-6 md:p-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-musgo-deep/80 border border-menta/30 backdrop-blur-md text-xs font-semibold text-menta tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-menta animate-pulse" />
                  Arquitetura do Método
                </span>
              </div>

              {/* Legenda Inferior */}
              <div className="relative z-10 p-6 md:p-8 backdrop-blur-sm bg-musgo-deep/65 border-t border-menta/15">
                <h4 className="text-xl font-bold text-baunilha mb-2">
                  Da Raiz à Copa
                </h4>
                <p className="text-sm text-baunilha/70 leading-relaxed">
                  Não existe topo forte sem sustentação profunda. O Raio-X Comercial atua onde a maioria das agências não enxerga: na fundação.
                </p>
              </div>
            </motion.div>

            {/* Coluna da Direita — 4 Níveis em 2 Zonas de Profundidade */}
            <div className="flex flex-col justify-between space-y-8">
              
              {/* ZONA 1: NA SUPERFÍCIE (O que floresce / Resultado Visível) */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-menta/20">
                  <span className="text-xs uppercase tracking-widest font-semibold text-baunilha/80 flex items-center gap-2">
                    <span className="text-menta">▲</span> NA SUPERFÍCIE — O que floresce
                  </span>
                  <span className="text-[10px] text-baunilha/40 font-mono ml-auto">Fases 03 & 04</span>
                </div>

                {/* Card 04 - Copa */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group bg-musgo-deep/50 border border-menta/15 rounded-xl p-6 md:p-7 hover:border-menta/40 hover:bg-musgo-deep/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-baunilha bg-baunilha/10 px-3 py-1 rounded border border-baunilha/20">
                      04. Copa — Evoluir
                    </span>
                    <span className="text-xs font-mono text-baunilha/50">Acima do solo</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-baunilha mb-2 group-hover:text-menta transition-colors">
                    Otimização & Expansão Contínua
                  </h3>
                  <p className="text-sm text-baunilha/70 leading-relaxed">
                    {pillars[3].desc}
                  </p>
                </motion.div>

                {/* Card 03 - Ramos */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group bg-musgo-deep/50 border border-menta/15 rounded-xl p-6 md:p-7 hover:border-menta/40 hover:bg-musgo-deep/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-baunilha bg-baunilha/10 px-3 py-1 rounded border border-baunilha/20">
                      03. Ramos — Estruturar
                    </span>
                    <span className="text-xs font-mono text-baunilha/50">Acima do solo</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-baunilha mb-2 group-hover:text-menta transition-colors">
                    Processo Comercial, CRM & Ritos
                  </h3>
                  <p className="text-sm text-baunilha/70 leading-relaxed">
                    {pillars[2].desc}
                  </p>
                </motion.div>
              </div>

              {/* DIVISOR FÍSICO — LINHA DO SOLO / SUPERFÍCIE */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center" aria-hidden>
                  <div className="w-full border-t-2 border-dashed border-menta/40" />
                </div>
                <div className="relative bg-musgo px-4 text-[11px] font-mono uppercase tracking-widest text-menta font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-menta" />
                  LINHA DA SUPERFÍCIE — DIVISÃO DA OPERAÇÃO
                </div>
              </div>

              {/* ZONA 2: SOB A SUPERFÍCIE (Trabalho Subterrâneo - Diagnóstico & Sustentação) */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-menta/30">
                  <span className="text-xs uppercase tracking-widest font-semibold text-menta flex items-center gap-2">
                    <span className="text-menta">▼</span> SOB A SUPERFÍCIE — Onde a receita vaza
                  </span>
                  <span className="text-[10px] text-menta/70 font-mono ml-auto">Fases 01 & 02</span>
                </div>

                {/* Card 02 - Tronco */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group bg-musgo-deep border border-menta/30 rounded-xl p-6 md:p-7 hover:border-menta/60 transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-menta bg-menta/15 px-3 py-1 rounded border border-menta/30">
                      02. Tronco — Priorizar
                    </span>
                    <span className="text-xs font-mono text-menta/70">Subterrâneo</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-baunilha mb-2 group-hover:text-menta transition-colors">
                    Ataque ao Gargalo Principal
                  </h3>
                  <p className="text-sm text-baunilha/75 leading-relaxed">
                    {pillars[1].desc}
                  </p>
                </motion.div>

                {/* Card 01 - Raiz */}
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group bg-musgo-deep border border-menta/30 rounded-xl p-6 md:p-7 hover:border-menta/60 transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-menta bg-menta/15 px-3 py-1 rounded border border-menta/30">
                      01. Raiz — Diagnosticar
                    </span>
                    <span className="text-xs font-mono text-menta/70">Fundação</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-baunilha mb-2 group-hover:text-menta transition-colors">
                    Raio-X Comercial & Vazamento de Receita
                  </h3>
                  <p className="text-sm text-baunilha/75 leading-relaxed">
                    {pillars[0].desc}
                  </p>
                </motion.div>
              </div>

            </div>

          </div>

          <p className="text-xs uppercase tracking-widest text-baunilha/40 text-center mt-16 font-medium">
            O improviso levou você até aqui. Ele não leva além.
          </p>
        </div>
      </section>

      {/* PARCEIRO KOMMO */}
      <section className="py-20 border-t border-menta/15">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-musgo-deep/60 border border-menta/15 rounded-2xl p-8 md:p-14 relative">
            <div className="flex-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-menta block mb-3">
                Parceria Oficial
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-baunilha mb-4 tracking-tight">
                Especialistas em Kommo CRM
              </h2>
              <p className="text-baunilha/75 text-lg mb-6 leading-relaxed max-w-xl">
                Como parceiros certificados, implementamos o primeiro CRM do mundo baseado em
                mensagens. WhatsApp, Instagram e Facebook centralizados em um só lugar.
              </p>
              <Link
                href="/kommo_partners"
                className="inline-flex items-center gap-2 text-sm font-medium text-menta hover:text-baunilha transition-colors"
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
      <section className="relative py-28 md:py-36 border-t border-menta/15">
        <div className="container relative z-[2] mx-auto px-6 md:px-12 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-menta block mb-4">
            Começa pela Raiz
          </span>
          <h2 className="text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.06] tracking-tight font-bold text-baunilha max-w-4xl mx-auto mb-8">
            Pronto para tirar o crescimento do{' '}
            <span className="text-menta">improviso?</span>
          </h2>
          <p className="text-baunilha/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Começa com um diagnóstico da sua operação comercial — onde a receita vaza e o que
            atacar primeiro.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-9 py-4 rounded-lg bg-baunilha text-musgo text-lg font-semibold hover:bg-menta transition-all duration-300 shadow-md"
            >
              Falar com a EverGreen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

