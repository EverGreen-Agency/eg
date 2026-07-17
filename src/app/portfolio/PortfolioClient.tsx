'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { PORTFOLIO_CATEGORY_LABELS, portfolioItems, type PortfolioCategory } from '@/config/portfolio'

const CATEGORY_ORDER: PortfolioCategory[] = ['autoral', 'poc-lead', 'estudo-de-caso']

export default function PortfolioClient() {
  return (
    <div className="min-h-screen bg-[#09231B]">
      <section className="relative pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFF4C7]">Portfólio</h1>
            <p className="text-xl text-[#FFF4C7]/80 leading-relaxed">
              Prova de execução, não promessa de resultado: projetos autorais, protótipos de avaliação e estudos de caso construídos pela EG.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {CATEGORY_ORDER.map((category) => {
        const items = portfolioItems.filter((item) => item.category === category)
        const label = PORTFOLIO_CATEGORY_LABELS[category]

        return (
          <section key={category} className="py-12 border-t border-[#3AC97B]/10">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-2xl font-bold text-[#3AC97B] mb-2">{label.title}</h2>
              <p className="text-[#FFF4C7]/60 mb-8">{label.description}</p>

              {items.length === 0 ? (
                <div className="rounded-xl border border-dashed border-[#3AC97B]/20 p-8 text-[#FFF4C7]/50">
                  Nenhum projeto publicado nesta categoria ainda.
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <a
                      key={item.slug}
                      href={item.liveUrl ?? '#'}
                      target={item.liveUrl ? '_blank' : undefined}
                      rel={item.liveUrl ? 'noopener noreferrer' : undefined}
                      className="block rounded-xl border border-[#3AC97B]/20 p-6 hover:border-[#3AC97B]/50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-[#FFF4C7] mb-2">{item.title}</h3>
                      <p className="text-[#FFF4C7]/70 text-sm">{item.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
