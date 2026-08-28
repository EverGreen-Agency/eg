import type { Metadata } from 'next'
import GrowthExperience from './GrowthExperience'

const title = 'Consultoria de Growth pelo Sistema Raiz | EverGreen MKT'
const description =
  'A frente de Growth da EverGreen: o Sistema Raiz (Raiz, Tronco, Ramos, Copa), o Raio-X Comercial que mede Oferta, Demanda e Conversão, e os cases que provam o método.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'consultoria de growth',
    'Sistema Raiz EG',
    'Raio-X Comercial',
    'diagnóstico comercial',
    'estruturação de operação comercial',
    'EverGreen',
  ],
  alternates: {
    canonical: '/growth',
    languages: {
      'pt-BR': '/growth',
      en: '/growth?lang=en',
      es: '/growth?lang=es',
      it: '/growth?lang=it',
      fr: '/growth?lang=fr',
      de: '/growth?lang=de',
    },
  },
  openGraph: {
    title,
    description,
    url: '/growth',
    type: 'website',
    siteName: 'EverGreen MKT',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function GrowthPage() {
  return <GrowthExperience />
}
