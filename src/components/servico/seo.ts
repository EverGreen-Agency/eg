import type { Metadata } from 'next'
import { getPaginaServico } from '@/config/paginas-servico'

const SITE = 'https://www.evergreenmkt.com.br'

/** Metadata das páginas de serviço, montada do mesmo config que renderiza a página. */
export function servicoMetadata(slug: string): Metadata {
  const p = getPaginaServico(slug)
  if (!p) return {}
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: [p.keyword, 'Sistema Raiz EG', 'Raio-X Comercial', 'EverGreen'],
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `/${p.slug}`,
      type: 'website',
      siteName: 'EverGreen MKT',
      locale: 'pt_BR',
    },
    twitter: { card: 'summary_large_image', title: p.metaTitle, description: p.metaDescription },
  }
}

/**
 * Schema de serviço + FAQ.
 *
 * O FAQPage é o item de GEO com melhor relação esforço/retorno do site: pergunta
 * e resposta marcadas são o formato que um modelo de linguagem consegue citar
 * inteiro e atribuir. As perguntas são as mesmas que aparecem na tela — marcar
 * FAQ que o visitante não vê é violação de diretriz e não vale o risco.
 */
export function servicoSchema(slug: string) {
  const p = getPaginaServico(slug)
  if (!p) return null
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: p.metaTitle.split('|')[0].trim(),
      description: p.metaDescription,
      serviceType: p.keyword,
      areaServed: { '@type': 'Country', name: 'Brasil' },
      provider: { '@id': `${SITE}/#organization` },
      url: `${SITE}/${p.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faq.map(f => ({
        '@type': 'Question',
        name: f.pergunta,
        acceptedAnswer: { '@type': 'Answer', text: f.resposta },
      })),
    },
  ]
}
