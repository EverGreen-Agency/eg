import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogClient from './BlogClient'

const SITE = 'https://www.evergreenmkt.com.br'

export const metadata: Metadata = {
  title: 'Blog & Artigos Técnicos | Previsibilidade Comercial e IA — EverGreen',
  description:
    'Artigos aprofundados, frameworks e análises técnicas sobre previsibilidade comercial, Kommo CRM, inteligência artificial aplicada e governança de vendas B2B.',
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: 'Blog & Artigos Técnicos | EverGreen',
    description:
      'Artigos aprofundados sobre processos comerciais previsíveis, CRM conversacional e IA aplicada.',
    url: `${SITE}/blog`,
    siteName: 'EverGreen',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE}/images/blog/sistema-vendas-vs-funil.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Artigos Técnicos | EverGreen',
    description: 'Frameworks e artigos técnicos sobre crescimento comercial previsível e IA.',
  },
}

export default function Page() {
  const posts = getAllPosts()

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog & Artigos Técnicos — EverGreen',
    description:
      'Acervo de artigos técnicos e frameworks de engenharia comercial e IA aplicada para empresas B2B.',
    url: `${SITE}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'EverGreen',
      url: SITE,
      logo: `${SITE}/images/evergreen-horizontal.png`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE}/blog/${post.slug}`,
        name: post.title,
        description: post.excerpt,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogClient initialPosts={posts} />
    </>
  )
}
