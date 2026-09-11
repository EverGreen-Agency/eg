import type { Metadata } from 'next'
import casesData from '@/data/cases.json'
import type { CaseStudy } from '@/types/case'
import AutoridadeClient from './AutoridadeClient'

const SITE = 'https://www.evergreenmkt.com.br'

export const metadata: Metadata = {
  title: 'Autoridade & Cases de Sucesso | EverGreen',
  description:
    'Cases reais de crescimento comercial, estruturação de CRM, automação de WhatsApp com IA e premiações da EverGreen Consultoria.',
  alternates: { canonical: `${SITE}/autoridade` },
  openGraph: {
    title: 'Autoridade & Cases de Sucesso | EverGreen',
    description:
      'Resultados reais e mensuráveis que transformaram a governança e a previsibilidade de nossos clientes.',
    url: `${SITE}/autoridade`,
    siteName: 'EverGreen',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function Page() {
  const cases = (casesData as unknown) as CaseStudy[]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cases de Sucesso e Autoridade — EverGreen',
    description: 'Estudos de caso reais de estruturação comercial, Kommo CRM e IA aplicada.',
    url: `${SITE}/autoridade`,
    publisher: {
      '@type': 'Organization',
      name: 'EverGreen',
      url: SITE,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: cases.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE}/autoridade/${c.slug}`,
        name: `${c.client} — ${c.industry}`,
        description: c.solution,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AutoridadeClient initialCases={cases} />
    </>
  )
}
