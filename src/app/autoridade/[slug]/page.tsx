import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import casesData from '@/data/cases.json'
import type { CaseStudy } from '@/types/case'
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, TrophyIcon } from '@heroicons/react/24/outline'

const SITE = 'https://www.evergreenmkt.com.br'

export async function generateStaticParams() {
  const cases = (casesData as unknown) as CaseStudy[]
  return cases.map((c) => ({
    slug: c.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cases = (casesData as unknown) as CaseStudy[]
  const caseItem = cases.find((c) => c.slug === params.slug)
  if (!caseItem) {
    return { title: 'Case Não Encontrado | EverGreen' }
  }

  const title = `Estudo de Caso: ${caseItem.client} | EverGreen`
  const description = `Como a EverGreen estruturou a operação da ${caseItem.client} (${caseItem.industry}) com foco em previsibilidade comercial.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/autoridade/${caseItem.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/autoridade/${caseItem.slug}`,
      type: 'article',
      siteName: 'EverGreen',
      locale: 'pt_BR',
    },
  }
}

export default function AutoridadeSlugPage({ params }: { params: { slug: string } }) {
  const cases = (casesData as unknown) as CaseStudy[]
  const caseItem = cases.find((c) => c.slug === params.slug)

  if (!caseItem) {
    notFound()
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Estudo de Caso: ${caseItem.client}`,
    description: caseItem.solution,
    author: {
      '@type': 'Organization',
      name: 'EverGreen',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'EverGreen',
      url: SITE,
    },
    mainEntityOfPage: `${SITE}/autoridade/${caseItem.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-[#09231B] text-[#FFF4C7] pb-24">
        <header className="border-b border-[#3AC97B]/20 bg-[#071D16]/80 backdrop-blur-md sticky top-0 z-30 py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs md:text-sm">
            <Link
              href="/autoridade"
              className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Voltar aos Cases de Autoridade</span>
            </Link>
            <span className="font-mono text-[#3AC97B] text-xs uppercase">{caseItem.industry}</span>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-6 pt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="bg-[#3AC97B]/10 text-[#3AC97B] px-3.5 py-1 rounded-full text-xs font-semibold border border-[#3AC97B]/20 font-mono">
              {caseItem.category}
            </span>
            <span className="text-xs text-[#FFF4C7]/50">Duração: {caseItem.projectDuration}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FFF4C7] mb-6 tracking-tight leading-tight">
            {caseItem.client}
          </h1>

          <div className="p-6 md:p-8 bg-[#071D16] border border-[#3AC97B]/25 rounded-2xl mb-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#3AC97B] mb-2">Desafio</h2>
                <p className="text-sm md:text-base text-[#FFF4C7]/80 leading-relaxed mb-6">{caseItem.challenge}</p>

                <h2 className="text-xs font-mono uppercase tracking-wider text-[#3AC97B] mb-2">Solução Arquitetada</h2>
                <p className="text-sm md:text-base text-[#FFF4C7]/80 leading-relaxed">{caseItem.solution}</p>
              </div>

              <div className="bg-[#05130E] p-6 rounded-xl border border-[#3AC97B]/20">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#3AC97B] mb-4 border-b border-[#3AC97B]/15 pb-2">
                  Métricas de Eficiência
                </h3>
                <div className="space-y-3.5">
                  {Object.entries(caseItem.metrics).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-xs md:text-sm border-b border-[#3AC97B]/10 pb-2 last:border-b-0">
                      <span className="text-[#FFF4C7]/70 capitalize">{key.replace(/_/g, ' ')}</span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-[#FFF4C7]/40 line-through">{val.before}</span>
                        <span className="text-[#3AC97B] font-bold text-sm">{val.after}</span>
                        {val.improvement && (
                          <span className="text-[10px] bg-[#3AC97B]/20 text-[#3AC97B] px-1 rounded">
                            {val.improvement}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {caseItem.implementation && caseItem.implementation.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#FFF4C7] mb-6 flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-[#3AC97B]" />
                <span>Etapas de Implementação</span>
              </h2>
              <ul className="space-y-3">
                {caseItem.implementation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#FFF4C7]/85 leading-relaxed bg-[#071D16] p-4 rounded-xl border border-[#3AC97B]/15">
                    <span className="text-[#3AC97B] font-bold font-mono">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {caseItem.testimonial && (
            <div className="mb-12 border-l-4 border-[#3AC97B] p-6 bg-[#071D16] rounded-r-2xl">
              <p className="text-base md:text-lg italic text-[#FFF4C7]/90 mb-3 leading-relaxed">
                "{caseItem.testimonial.quote}"
              </p>
              <span className="text-sm font-bold text-[#3AC97B] block">{caseItem.testimonial.author}</span>
              <span className="text-xs text-[#FFF4C7]/50 block">{caseItem.testimonial.position}</span>
            </div>
          )}

          <section className="p-8 md:p-12 bg-gradient-to-br from-[#071D16] to-[#05130E] border border-[#3AC97B]/30 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFF4C7] mb-3">
              Quer resultados semelhantes para sua operação?
            </h3>
            <p className="text-sm text-[#FFF4C7]/80 mb-6 max-w-md mx-auto">
              Realize um Raio-X Comercial com nossos especialistas em processo e tecnologia.
            </p>
            <Link
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-bold text-sm shadow-lg shadow-[#3AC97B]/20 inline-block"
            >
              Agendar Diagnóstico Gratuito
            </Link>
          </section>
        </article>
      </main>
    </>
  )
}