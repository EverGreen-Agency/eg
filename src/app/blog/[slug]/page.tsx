import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getRelatedPosts, markdownToHtml } from '@/lib/blog'
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  CalendarIcon, 
  ShareIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

const SITE = 'https://www.evergreenmkt.com.br'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Artigo Não Encontrado | EverGreen',
      description: 'O artigo solicitado não foi localizado em nosso acervo técnico.',
    }
  }

  const title = `${post.title} | EverGreen`
  const description = post.description || post.excerpt
  const image = post.featuredImage.url.startsWith('http')
    ? post.featuredImage.url
    : `${SITE}${post.featuredImage.url}`

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `${SITE}/blog/${post.slug}`,
      type: 'article',
      siteName: 'EverGreen',
      locale: 'pt_BR',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const htmlContent = markdownToHtml(post.content)
  const relatedPosts = getRelatedPosts(post.slug, 3)

  const imageUrl = post.featuredImage.url.startsWith('http')
    ? post.featuredImage.url
    : `${SITE}${post.featuredImage.url}`

  // Schema 1: Artigo Técnico / BlogPosting
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'pt-BR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        '@type': 'Organization',
        name: 'EverGreen',
        url: SITE,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'EverGreen',
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/images/evergreen-horizontal.png`,
      },
    },
  }

  // Schema 2: Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE}/blog/${post.slug}`,
      },
    ],
  }

  // Schema 3: FAQPage (se houver perguntas frequentes)
  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-[#09231B] text-[#FFF4C7] pb-24">
        {/* Top Breadcrumb Nav */}
        <header className="border-b border-[#3AC97B]/20 bg-[#071D16]/80 backdrop-blur-md sticky top-0 z-30 py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs md:text-sm">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Voltar ao Blog</span>
            </Link>
            <div className="flex items-center gap-2 text-[#FFF4C7]/60">
              <span className="hidden sm:inline">Compartilhar:</span>
              <span className="font-mono text-[#3AC97B]">EverGreen Brain</span>
            </div>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-6 pt-12 md:pt-16">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#3AC97B]/10 text-[#3AC97B] px-3.5 py-1 rounded-full text-xs font-semibold border border-[#3AC97B]/20 font-mono">
              {post.categoryLabel}
            </span>
            <span className="text-xs text-[#FFF4C7]/50 flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              <time dateTime={post.date}>
                {new Date(post.date + 'T00:00:00').toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </span>
            <span className="text-xs text-[#FFF4C7]/50 flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FFF4C7] mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-[#FFF4C7]/80 leading-relaxed mb-8 border-l-2 border-[#3AC97B] pl-4">
            {post.description}
          </p>

          {/* Featured Image */}
          <div className="relative h-[280px] md:h-[480px] w-full rounded-2xl overflow-hidden mb-12 border border-[#3AC97B]/30 shadow-2xl bg-[#05130E]">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09231B] via-transparent to-transparent opacity-50" />
          </div>

          {/* Key Takeaways Box (GEO Citability Boost) */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <section className="bg-[#071D16] border border-[#3AC97B]/30 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
              <div className="flex items-center gap-2.5 text-[#3AC97B] font-bold text-base md:text-lg mb-4">
                <CheckCircleIcon className="h-6 w-6" />
                <h2>Principais Conclusões para Gestores e Líderes</h2>
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#FFF4C7]/90 leading-relaxed">
                    <span className="text-[#3AC97B] font-bold font-mono">0{idx + 1}.</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Body Content */}
          <div
            className="blog-content prose prose-invert prose-lg max-w-none text-[#FFF4C7]/85"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* FAQ Accordion Section (se houver) */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-16 pt-12 border-t border-[#3AC97B]/20">
              <div className="flex items-center gap-3 mb-8">
                <QuestionMarkCircleIcon className="h-7 w-7 text-[#3AC97B]" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFF4C7] tracking-tight">
                  Perguntas Frequentes (FAQ)
                </h2>
              </div>
              <div className="space-y-4">
                {post.faq.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-[#071D16] border border-[#3AC97B]/20 rounded-xl p-5 open:border-[#3AC97B]/50 transition-colors"
                  >
                    <summary className="font-semibold text-base md:text-lg text-[#FFF4C7] cursor-pointer list-none flex items-center justify-between">
                      <span>{item.question}</span>
                      <span className="text-[#3AC97B] group-open:rotate-180 transition-transform font-bold text-xl">
                        ↓
                      </span>
                    </summary>
                    <p className="mt-4 text-sm md:text-base text-[#FFF4C7]/80 leading-relaxed border-t border-[#3AC97B]/10 pt-4">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Author Box */}
          <section className="mt-16 p-6 md:p-8 bg-[#071D16] border border-[#3AC97B]/20 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-[#3AC97B]/40 shrink-0 bg-[#05130E]">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-[#3AC97B]">
                Publicado por
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#FFF4C7] mb-1">
                {post.author.name}
              </h3>
              <p className="text-xs md:text-sm text-[#3AC97B]/90 font-mono mb-2">
                {post.author.role}
              </p>
              <p className="text-xs md:text-sm text-[#FFF4C7]/70 leading-relaxed">
                A EverGreen é uma boutique de engenharia comercial e tecnologia sediada no Brasil, especializada no método Sistema Raiz para previsibilidade e escala B2B.
              </p>
            </div>
          </section>

          {/* Conversion CTA Box */}
          <section className="mt-16 p-8 md:p-12 bg-gradient-to-br from-[#071D16] to-[#05130E] border border-[#3AC97B]/30 rounded-2xl text-center shadow-2xl">
            <span className="mono-label text-[#3AC97B] mb-3 inline-block">
              Diagnóstico Estratégico
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-[#FFF4C7] mb-4 tracking-tight">
              Gostou da metodologia? Destrave seus gargalos de vendas.
            </h3>
            <p className="text-sm md:text-base text-[#FFF4C7]/80 max-w-xl mx-auto mb-8 leading-relaxed">
              Solicite um Raio-X Comercial com nossos especialistas e descubra onde a sua esteira de vendas está perdendo receita e cadência.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contato"
                className="bg-[#3AC97B] text-[#09231B] px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-bold text-sm shadow-lg shadow-[#3AC97B]/20"
              >
                Agendar Diagnóstico Gratuito
              </Link>
              <Link
                href="/servicos"
                className="bg-[#09231B] text-[#3AC97B] border border-[#3AC97B]/30 px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-semibold text-sm"
              >
                Conhecer Nossos Serviços
              </Link>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-12 border-t border-[#3AC97B]/20">
              <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#FFF4C7] mb-8">
                <BookOpenIcon className="h-6 w-6 text-[#3AC97B]" />
                <h2>Artigos Técnicos Recomendados</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group bg-[#071D16] border border-[#3AC97B]/20 hover:border-[#3AC97B]/50 p-5 rounded-xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-[#3AC97B] block mb-2">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="font-bold text-[#FFF4C7] text-base group-hover:text-[#3AC97B] transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs text-[#FFF4C7]/60 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-xs text-[#3AC97B] font-semibold mt-4 block">
                      Ler Artigo →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  )
}
