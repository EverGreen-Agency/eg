import type { Metadata } from 'next'
import TechExperience from './TechExperience'

const title = 'Raio-X Tecnológico e prontidão AI-First | EverGreen'
const description =
  'A frente de tecnologia da EverGreen: o Raio-X Tecnológico que mede prontidão AI-First em 7 dimensões, a Sprint de Estruturação e o Retainer de Operação — pelo mesmo Sistema Raiz.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'raio-x tecnológico',
    'prontidão AI-First',
    'auditoria de maturidade tecnológica',
    'automação de processos',
    'software sob medida',
    'Sistema Raiz EG',
    'EverGreen',
  ],
  alternates: {
    canonical: '/tech',
    languages: {
      'pt-BR': '/tech',
      en: '/tech?lang=en',
      es: '/tech?lang=es',
      it: '/tech?lang=it',
      fr: '/tech?lang=fr',
      de: '/tech?lang=de',
    },
  },
  openGraph: {
    title,
    description,
    url: '/tech',
    type: 'website',
    siteName: 'EverGreen',
    locale: 'pt_BR',
    images: [{ url: '/images/tech.jpg', width: 1200, height: 630, alt: 'EverGreen Tecnologia — Raio-X Tecnológico e prontidão AI-First' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/tech.jpg'],
  },
}

export default function TechPage() {
  return <TechExperience />
}
