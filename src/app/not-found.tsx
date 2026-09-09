'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Home,
  ArrowRight,
  Search,
  Activity,
  Layers,
  Cpu,
  BookOpen,
  MessageSquare,
} from 'lucide-react'
import CornerBrackets from '@/components/brand/CornerBrackets'

const quickLinks = [
  {
    title: 'Diagnóstico & Serviços',
    desc: 'Raio-X Comercial, Sprint de Estruturação e Retainer.',
    href: '/servicos',
    icon: Activity,
  },
  {
    title: 'Consultoria CRM',
    desc: 'Parceria oficial Kommo e estruturação de cadência comercial.',
    href: '/consultoria-crm',
    icon: Layers,
  },
  {
    title: 'Tecnologia & Automação',
    desc: 'IA aplicada, integrações e infraestrutura para B2B.',
    href: '/tech',
    icon: Cpu,
  },
  {
    title: 'Artigos & Insights',
    desc: 'Publicações técnicas sobre previsibilidade e vendas.',
    href: '/blog',
    icon: BookOpen,
  },
]

export default function NotFound() {
  const reduce = useReducedMotion()

  return (
    <main className="relative min-h-[calc(100svh-5rem)] bg-musgo grain flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      {/* Glow e Iluminação de Fundo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] pointer-events-none opacity-40 blur-[120px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(58,201,123,0.18) 0%, rgba(9,35,27,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-[2] mx-auto px-6 md:px-12">
        <div className="relative max-w-4xl mx-auto border hairline rounded-3xl bg-musgo-deep/70 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
          <CornerBrackets />

          {/* Tag de Diagnóstico */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-menta/10 border border-menta/25 text-menta">
              <span className="w-2 h-2 rounded-full bg-menta animate-pulse" />
              Erro 404 • Rota Inexistente
            </span>
          </motion.div>

          {/* Numeral 404 e Título */}
          <div className="space-y-4">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-baunilha text-balance"
            >
              Encontramos um <span className="text-menta">gargalo</span> na sua
              navegação.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-baunilha/70 max-w-2xl text-balance leading-relaxed"
            >
              A página que você tentou acessar não existe, mudou de endereço ou
              foi descontinuada. Pelo Sistema Raiz, identificamos desvios e
              recolocamos sua rota nos trilhos de maior previsibilidade.
            </motion.p>
          </div>

          {/* CTAs Principais */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t hairline"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-musgo bg-menta hover:bg-[#4be691] transition-all shadow-[0_0_24px_rgba(58,201,123,0.3)] hover:shadow-[0_0_32px_rgba(58,201,123,0.5)] active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              Voltar para o Início
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-baunilha border border-menta/20 bg-musgo/50 hover:bg-menta/10 hover:border-menta/40 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-menta" />
              Falar com a EverGreen
            </Link>
          </motion.div>

          {/* Atalhos Rápidos Recomendados */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-4 h-4 text-menta/80" />
              <p className="text-xs uppercase font-mono tracking-widest text-menta/90">
                Rotas Recomendadas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quickLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative p-4 rounded-xl border hairline bg-musgo/40 hover:bg-musgo hover:border-menta/40 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-menta/10 text-menta group-hover:bg-menta group-hover:text-musgo transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm font-semibold text-baunilha group-hover:text-menta transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-baunilha/40 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                      <p className="text-xs text-baunilha/60 mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
