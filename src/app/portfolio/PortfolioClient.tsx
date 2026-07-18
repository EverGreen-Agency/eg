'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'
import { PORTFOLIO_CATEGORY_LABELS, portfolioItems, type PortfolioCategory } from '@/config/portfolio'

const CATEGORY_ORDER: PortfolioCategory[] = ['autoral', 'poc-lead', 'estudo-de-caso']

export default function PortfolioClient() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Portfólio"
        title="Prova de execução, "
        accent="não promessa."
        subtitle="Projetos autorais, protótipos de avaliação e estudos de caso construídos pela EverGreen. O que mostramos é capacidade técnica — não resultado financeiro de cliente."
      />

      {CATEGORY_ORDER.map((category, ci) => {
        const items = portfolioItems.filter((item) => item.category === category)
        const label = PORTFOLIO_CATEGORY_LABELS[category]

        return (
          <section key={category} className="py-16 md:py-20 border-b hairline last:border-b-0">
            <div className="container mx-auto px-6 md:px-12">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="mono-label text-menta">{String(ci + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-baunilha tracking-tight">{label.title}</h2>
                  <p className="text-baunilha/55 mt-1 max-w-2xl">{label.description}</p>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="border border-dashed hairline rounded-xl p-10 text-center">
                  <p className="mono-label text-baunilha/40">Em breve</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-menta/15 border hairline">
                  {items.map((item, i) => {
                    const Card = item.liveUrl ? 'a' : 'div'
                    return (
                      <motion.div
                        key={item.slug}
                        initial={reduce ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.06 }}
                      >
                        <Card
                          {...(item.liveUrl
                            ? { href: item.liveUrl, target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="group flex flex-col h-full bg-musgo p-8 hover:bg-musgo-deep transition-colors duration-300"
                        >
                          <span className="mono-label text-baunilha/40 mb-6">
                            {PORTFOLIO_CATEGORY_LABELS[item.category].title}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-baunilha mb-3 group-hover:text-menta transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-baunilha/65 text-sm leading-relaxed flex-1">{item.description}</p>
                          {item.liveUrl && (
                            <span className="mono-label text-menta mt-6 inline-flex items-center gap-2">
                              Ver projeto <span aria-hidden>→</span>
                            </span>
                          )}
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold text-baunilha tracking-tight mb-6 max-w-2xl mx-auto text-balance">
            Quer um projeto desses para o seu negócio?
          </h2>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
          >
            Agendar Diagnóstico
          </Link>
        </div>
      </section>
    </main>
  )
}
