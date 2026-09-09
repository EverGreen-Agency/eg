import type { Metadata } from 'next'
import KommoClient from './KommoClient'
import { kommoFaq } from './faq'

const SITE = 'https://www.evergreenmkt.com.br'

const title = 'Kommo CRM: o que resolve e quando não vale | Parceiro oficial EverGreen'
const description =
  'Leitura honesta do Kommo CRM por um parceiro oficial: onde ele é a escolha certa, onde é a escolha errada, o que nenhum CRM resolve e como decidir em cinco minutos.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'kommo crm',
    'kommo parceiros',
    'kommo partners',
    'parceiro kommo',
    'implantação de CRM',
    'CRM para WhatsApp',
    'EverGreen',
  ],
  alternates: { canonical: '/kommo_partners' },
  openGraph: { title, description, url: '/kommo_partners', type: 'website', siteName: 'EverGreen', locale: 'pt_BR' },
  twitter: { card: 'summary_large_image', title, description },
}

/**
 * O FAQ marcado é o mesmo que aparece na tela — marcar pergunta que o visitante
 * não vê é violação de diretriz e não vale o risco.
 */
const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Implantação e consultoria de Kommo CRM',
    description,
    serviceType: 'implantação de CRM',
    areaServed: { '@type': 'Country', name: 'Brasil' },
    provider: { '@id': `${SITE}/#organization` },
    url: `${SITE}/kommo_partners`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kommoFaq.map(f => ({
      '@type': 'Question',
      name: f.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: f.resposta },
    })),
  },
]

export default function KommoPage() {
  return (
    <>
      {schema.map((bloco, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bloco) }} />
      ))}
      <KommoClient />
    </>
  )
}
