/**
 * Dados estruturados de entidade.
 *
 * Motivo concreto: a auditoria de busca de 28/08/2026 mostrou que 7 das 16
 * keywords do dominio sao confusao de marca — gente procurando a "Ever Green
 * Industria e Comercio", a "Evergreen do Nordeste", a "Evermont Capital". O site
 * aparece como resultado errado da busca de outra pessoa.
 *
 * Schema de organizacao e a forma padrao de dizer a buscadores e a modelos de
 * linguagem QUAL EverGreen e esta: consultoria comercial e tecnologica, no
 * Brasil, com estes fundadores e este endereco na web. Serve tanto ao SEO
 * classico quanto ao GEO — modelo cita o que consegue atribuir.
 *
 * Renderizado no layout raiz, entao vale para todas as rotas, inclusive os decks.
 */

const SITE = 'https://www.evergreenmkt.com.br'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#organization`,
  name: 'EverGreen',
  alternateName: 'EverGreen MKT',
  url: SITE,
  logo: `${SITE}/images/evergreen-horizontal.png`,
  image: `${SITE}/images/evergreen-icon.png`,
  slogan: 'Crescimento previsível, escalável e tecnológico.',
  description:
    'Consultoria boutique de estrutura comercial e tecnológica. Diagnostica onde a receita vaza pelo Raio-X Comercial, prioriza o gargalo de maior impacto e estrutura a operação que sustenta o crescimento.',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsLanguage: ['pt-BR', 'en'],
  founder: [
    { '@type': 'Person', name: 'Eduardo Ferreira de Mattos', jobTitle: 'Founder & CEO' },
    { '@type': 'Person', name: 'Gustavo Fugulin Soares da Silva', jobTitle: 'Founder & CTO' },
  ],
  knowsAbout: [
    'consultoria comercial',
    'estruturação comercial',
    'processo comercial',
    'diagnóstico comercial',
    'funil de vendas B2B',
    'CRM',
    'Kommo CRM',
    'automação comercial',
    'RevOps',
    'desenvolvimento de software sob medida',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Raio-X Comercial',
        description:
          'Diagnóstico que mede Oferta, Demanda e Conversão de 0 a 10, entrega o mapa de gargalos e um plano de 90 dias focado no gargalo de maior impacto.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sprint de Estruturação',
        description:
          'Sprint de 6 a 8 semanas com escopo fechado para implantar pipeline, cadência comercial, CRM e scorecard.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Retainer de Previsibilidade',
        description:
          'Acompanhamento contínuo com ritos de gestão, revisão de indicadores e evolução da operação comercial.',
      },
    },
  ],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'EverGreen',
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE}/#organization` },
}

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
