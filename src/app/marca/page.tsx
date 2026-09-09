import type { Metadata } from 'next'
import MarcaClient from './MarcaClient'

export const metadata: Metadata = {
  title: 'BrandKit & Diretrizes de Marca | EverGreen',
  description:
    'Manual de identidade visual oficial da EverGreen Consultoria e Tecnologia. Logotipos vetoriais (SVG), paleta de cores cromática e regras de aplicação.',
  alternates: {
    canonical: 'https://www.evergreenmkt.com.br/marca',
  },
  openGraph: {
    title: 'BrandKit & Identidade Oficial | EverGreen',
    description:
      'Manual de identidade e diretrizes de marca oficial da EverGreen Consultoria e Tecnologia.',
    url: 'https://www.evergreenmkt.com.br/marca',
    siteName: 'EverGreen',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function MarcaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'EverGreen',
    legalName: 'EverGreen Consultoria e Tecnologia LTDA',
    url: 'https://www.evergreenmkt.com.br/marca',
    logo: 'https://www.evergreenmkt.com.br/brand/evergreen-logo.svg',
    slogan: 'Crescimento previsível, escalável e tecnológico.',
    description:
      'Identidade visual e diretrizes oficiais de marca da EverGreen Consultoria e Tecnologia.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarcaClient />
    </>
  )
}
