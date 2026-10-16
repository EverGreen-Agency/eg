import type { Metadata } from 'next'
import EquipeClient from './EquipeClient'

const SITE = 'https://www.evergreenmkt.com.br'

export const metadata: Metadata = {
  title: 'Equipe | EverGreen Consultoria e Tecnologia',
  description:
    'Conheça os fundadores e executores da EverGreen: liderança em previsibilidade comercial B2B, automação WhatsApp Cloud API e IA aplicada.',
  alternates: { canonical: '/equipe' },
  openGraph: {
    title: 'Equipe | EverGreen Consultoria e Tecnologia',
    description:
      'Engenharia de processos, automação conversacional e inteligência artificial para escala comercial.',
    url: '/equipe',
    type: 'website',
    siteName: 'EverGreen',
    locale: 'pt_BR',
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Equipe e Liderança — EverGreen Consultoria e Tecnologia',
    url: `${SITE}/equipe`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'Person',
          position: 1,
          name: 'Eduardo Ferreira de Mattos',
          jobTitle: 'Founder & CEO',
          worksFor: { '@id': `${SITE}/#organization` },
          image: `${SITE}/images/eduardo.jpg`,
          description:
            'Engenheiro, especialista em processos comerciais, metodologia Sistema Raiz, SPIN Selling e estruturação de cadência de vendas.',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Especialista em Automação WhatsApp Cloud API',
            credentialCategory: 'certification',
            recognizedBy: { '@type': 'Organization', name: 'Kommo' },
            identifier: '29045915',
            url: `${SITE}/images/certificados/kommo-especialista-whatsapp-eduardo-mattos.jpg`,
          },
        },
        {
          '@type': 'Person',
          position: 2,
          name: 'Gustavo Fugulin Soares da Silva',
          jobTitle: 'Founder & CTO',
          worksFor: { '@id': `${SITE}/#organization` },
          image: `${SITE}/images/gustavo.jpg`,
          description:
            'Líder técnico, especialista em inteligência artificial, automação de processos, integração de APIs e modelos de machine learning.',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Especialista em Automação WhatsApp Cloud API',
            credentialCategory: 'certification',
            recognizedBy: { '@type': 'Organization', name: 'Kommo' },
            identifier: '29045915',
            url: `${SITE}/images/certificados/kommo-especialista-whatsapp-gustavo-fugulin.jpg`,
          },
        },
      ],
    },
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EquipeClient />
    </>
  )
}
