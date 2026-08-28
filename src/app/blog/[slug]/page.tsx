import type { Metadata } from 'next'
import { wordpressService } from '@/services/wordpress'
import BlogPostDetail from '@/components/blog/BlogPostDetail'

const SITE = 'https://www.evergreenmkt.com.br'

/** Tira tags e entidades do HTML que o WordPress devolve em title/excerpt. */
function texto(html: string, max = 300) {
  const limpo = html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&#039;|&rsquo;/g, '\u2019')
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&hellip;/g, '\u2026')
    .replace(/\s+/g, ' ')
    .trim()
  return limpo.length > max ? limpo.slice(0, max - 1).trimEnd() + '\u2026' : limpo
}

export async function generateStaticParams() {
  try {
    const posts = await wordpressService.getPosts(1, 100)
    return posts.map(post => ({ slug: post.slug }))
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error)
    return []
  }
}

/**
 * Ate 28/08/2026 nenhum post do blog tinha title ou description proprios: a rota
 * so renderizava um componente de cliente, entao todos herdavam a metadata do
 * layout raiz. Post sem title proprio nao ranqueia por assunto nenhum — e o blog
 * e o eixo do plano editorial de 12 posts.
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await wordpressService.getPostBySlug(params.slug)
    if (!post) return { title: 'Post não encontrado | EverGreen MKT' }

    const title = texto(post.title.rendered, 70)
    const description = texto(post.excerpt.rendered, 160)
    const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url

    return {
      title: `${title} | EverGreen MKT`,
      description,
      alternates: { canonical: `/blog/${params.slug}` },
      openGraph: {
        title,
        description,
        url: `/blog/${params.slug}`,
        type: 'article',
        siteName: 'EverGreen MKT',
        locale: 'pt_BR',
        publishedTime: post.date,
        ...(image ? { images: [{ url: image }] } : {}),
      },
      twitter: { card: 'summary_large_image', title, description },
    }
  } catch {
    return {}
  }
}

/**
 * Schema de artigo. Serve ao SEO classico e ao GEO pelo mesmo motivo: modelo de
 * linguagem cita o que consegue atribuir — a autoria e a data declaradas sao o
 * que tornam a afirmacao atribuivel.
 */
async function articleSchema(slug: string) {
  const post = await wordpressService.getPostBySlug(slug).catch(() => null)
  if (!post) return null
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: texto(post.title.rendered, 110),
    description: texto(post.excerpt.rendered, 300),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'pt-BR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${slug}` },
    author: { '@type': 'Organization', name: 'EverGreen', url: SITE },
    publisher: { '@id': `${SITE}/#organization` },
    isPartOf: { '@id': `${SITE}/#website` },
    ...(image ? { image: [image] } : {}),
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const schema = await articleSchema(params.slug)
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <BlogPostDetail slug={params.slug} />
    </>
  )
}
