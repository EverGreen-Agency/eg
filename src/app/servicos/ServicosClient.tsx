'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'

const sistemas = [
  {
    tag: 'Sistema 01',
    title: 'Máquina de Vendas Evergreen',
    lead: 'Transformamos caos comercial em previsibilidade de receita.',
    image: '/images/maquinadeVendas.jpg',
    cta: 'Ver como funciona',
    features: [
      'Consultoria em construção de máquina de vendas',
      'Definição de ICP e jornada',
      'Criação de scripts, CRM e automações',
      'Treinamento e terceirização de time comercial (BDR/SDR)',
      'Prospecção ativa com tecnologia e cold outreach',
    ],
  },
  {
    tag: 'Sistema 02',
    title: 'Growth Engine',
    lead: 'De zero a tração com estratégias de aquisição full-stack.',
    image: '/images/growthEngine.jpg',
    cta: 'Quero atrair leads agora',
    features: [
      'Tráfego pago, SEO e growth hacking',
      'Copywriting e CRO (conversão)',
      'Ghostwriting e autoridade em LinkedIn',
      'Produção de conteúdo, webinars e UGC',
      'Social media + campanhas de engajamento',
    ],
  },
  {
    tag: 'Sistema 03',
    title: 'EG.Tech',
    lead: 'IA, automações e tecnologia para escalar o que você já faz.',
    image: '/images/tech.jpg',
    cta: 'Ver soluções em Tech',
    features: [
      'Desenvolvimento de automações e bots',
      'Projetos de análise de dados e BI',
      'Construção de clones AI e avatares digitais',
      'Machine learning, IOT e soluções sob demanda',
      'Suporte técnico e treinamento personalizado',
    ],
  },
]

export default function ServicosPage() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Soluções"
        title="Você não contrata serviços. Você ativa "
        accent="sistemas."
        subtitle="Sistemas integrados de crescimento, tecnologia e execução — feitos sob medida para destravar o próximo nível da sua empresa. Nós não empilhamos tarefas; construímos motores de receita."
      >
        <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </PageHeader>

      {/* Sistemas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
          {sistemas.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <p className="mono-label text-menta mb-4">{s.tag}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-4">{s.title}</h2>
                <p className="text-lg text-baunilha/75 mb-8">{s.lead}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-baunilha/80">
                      <span className="mono-label text-menta mt-1">{String(i + 1).padStart(2, '0')}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-menta text-musgo font-semibold hover:bg-baunilha transition-colors duration-300"
                >
                  {s.cta}
                </Link>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative aspect-square border hairline overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover opacity-90" sizes="(max-width: 768px) 100vw, 50vw" />
                  <span className="absolute top-4 left-4 mono-label text-baunilha bg-musgo/70 px-3 py-1 backdrop-blur-sm">
                    {s.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 md:py-32 border-t hairline overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(58,201,123,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative z-[2] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-menta mb-6">Próximo passo</p>
          <h2 className="text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.06] tracking-tight font-bold text-baunilha max-w-3xl mx-auto mb-6 text-balance">
            Vamos montar seu sistema sob medida?
          </h2>
          <p className="text-baunilha/70 text-lg mb-10 max-w-xl mx-auto">
            Empresas em estágios diferentes precisam de sistemas diferentes. Montamos seu roadmap de
            crescimento e tech — 100% personalizado.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-baunilha text-musgo text-lg font-semibold hover:bg-menta transition-colors duration-300"
          >
            Agendar Diagnóstico
          </Link>
        </div>
      </section>
    </main>
  )
}
