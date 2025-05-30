'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { wordpressService, type AutoridadePost } from '@/services/wordpress'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

// Interface expandida para cases estruturados
interface CaseMetrics {
  [key: string]: {
    before: string
    after: string
    improvement?: string
    unit?: string
  }
}

interface CaseData {
  client: string
  industry: string
  category: 'B2B' | 'B2C' | 'E-commerce'
  duration: string
  challenge: string
  solution: string
  implementation: string[]
  results: string[]
  metrics: CaseMetrics
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  technologies?: string[]
  roi?: string
  timeline?: {
    phase: string
    duration: string
    description: string
  }[]
}

export default function AutoridadeDetail({ slug }: { slug: string }) {
  const [post, setPost] = useState<AutoridadePost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [caseData, setCaseData] = useState<CaseData | null>(null)

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true)
        const posts = await wordpressService.getAutoridadePosts()
        const foundPost = posts.find(p => p.slug === slug)
        setPost(foundPost || null)
        
        // Tentar extrair dados estruturados do ACF ou meta fields
        if (foundPost?.meta) {
          try {
            const structuredData = extractCaseData(foundPost)
            setCaseData(structuredData)
          } catch (err) {
            console.log('Dados estruturados não encontrados, usando layout padrão')
          }
        }
        
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar post:', err)
        setError('Falha ao carregar o post. Por favor, tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  // Função para extrair dados estruturados do WordPress
  function extractCaseData(post: AutoridadePost): CaseData | null {
    // Aqui você pode implementar a lógica para extrair dados do ACF
    // Por exemplo, se você usar ACF (Advanced Custom Fields):
    const acf = (post as any).acf
    
    if (!acf) return null

    return {
      client: acf.client_name || '',
      industry: acf.industry || '',
      category: acf.category || 'B2B',
      duration: acf.project_duration || '',
      challenge: acf.challenge || '',
      solution: acf.solution || '',
      implementation: acf.implementation ? JSON.parse(acf.implementation) : [],
      results: acf.results ? JSON.parse(acf.results) : [],
      metrics: acf.metrics ? JSON.parse(acf.metrics) : {},
      testimonial: acf.testimonial ? JSON.parse(acf.testimonial) : null,
      technologies: acf.technologies ? JSON.parse(acf.technologies) : [],
      roi: acf.roi || '',
      timeline: acf.timeline ? JSON.parse(acf.timeline) : []
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09231B] p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-[#3AC97B]/20 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-[#3AC97B]/20 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-[#3AC97B]/20 rounded"></div>
              <div className="h-4 bg-[#3AC97B]/20 rounded w-5/6"></div>
              <div className="h-4 bg-[#3AC97B]/20 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#09231B] p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error || 'Post não encontrado'}
          </h1>
          <Link 
            href="/autoridade"
            className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar à Autoridade
          </Link>
        </div>
      </div>
    )
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]

  // Se temos dados estruturados, renderizar layout de case
  if (caseData) {
    return (
      <div className="min-h-screen bg-[#09231B]">
        <article className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/autoridade"
              className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Voltar à Autoridade
            </Link>
          </nav>

          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-[#3AC97B] text-[#09231B] px-4 py-2 rounded-full font-medium">
                {caseData.category}
              </span>
              <span className="text-[#FFF4C7]/60">{caseData.duration}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFF4C7]">
              {caseData.client}
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 mb-6">{caseData.industry}</p>
            {caseData.roi && (
              <div className="text-2xl font-bold text-[#3AC97B]">
                ROI: {caseData.roi}
              </div>
            )}
          </motion.header>

          {/* Featured Image */}
          {featuredImage?.source_url && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden"
            >
              <Image
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || post.title.rendered}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Case Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Challenge & Solution */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#FFF4C7] mb-4">Desafio</h2>
                <p className="text-[#FFF4C7]/80 text-lg leading-relaxed">{caseData.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#FFF4C7] mb-4">Solução</h2>
                <p className="text-[#FFF4C7]/80 text-lg leading-relaxed mb-6">{caseData.solution}</p>
                
                {caseData.implementation.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFF4C7] mb-3">Implementação:</h3>
                    <ul className="space-y-2">
                      {caseData.implementation.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#FFF4C7]/80">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {caseData.technologies && caseData.technologies.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#FFF4C7] mb-3">Tecnologias Utilizadas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseData.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#3AC97B]/10 text-[#3AC97B] px-3 py-1 rounded-full text-sm border border-[#3AC97B]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-[#FFF4C7] mb-6">Métricas de Impacto</h2>
              <div className="space-y-6">
                {Object.entries(caseData.metrics).map(([key, metric]) => (
                  <div key={key} className="border-b border-[#3AC97B]/20 pb-4 last:border-b-0">
                    <div className="text-sm text-[#FFF4C7]/60 mb-2 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="text-center">
                        <div className="text-sm text-[#FFF4C7]/60">Antes</div>
                        <div className="text-lg font-semibold text-[#FFF4C7]/80">{metric.before}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-[#FFF4C7]/60">Depois</div>
                        <div className="text-lg font-semibold text-[#3AC97B]">{metric.after}</div>
                      </div>
                      {metric.improvement && (
                        <div className="text-center">
                          <div className="text-sm text-[#FFF4C7]/60">Melhoria</div>
                          <div className="text-lg font-bold text-[#3AC97B]">{metric.improvement}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#FFF4C7] mb-6 text-center">Resultados Alcançados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {caseData.results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-[#09231B] border border-[#3AC97B]/20 rounded-lg p-4 text-center"
                >
                  <CheckCircleIcon className="h-8 w-8 text-[#3AC97B] mx-auto mb-2" />
                  <p className="text-[#FFF4C7]/80">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          {caseData.timeline && caseData.timeline.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#FFF4C7] mb-6 text-center">Timeline do Projeto</h2>
              <div className="space-y-4">
                {caseData.timeline.map((phase, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 bg-[#09231B] border border-[#3AC97B]/20 rounded-lg p-6"
                  >
                    <div className="bg-[#3AC97B] text-[#09231B] rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-[#FFF4C7]">{phase.phase}</h3>
                        <span className="text-sm text-[#FFF4C7]/60">{phase.duration}</span>
                      </div>
                      <p className="text-[#FFF4C7]/80">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Testimonial */}
          {caseData.testimonial && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8 text-center mb-12"
            >
              <blockquote className="text-xl italic text-[#FFF4C7] mb-6">
                "{caseData.testimonial.quote}"
              </blockquote>
              <div className="text-[#FFF4C7]/80">
                <div className="font-semibold">{caseData.testimonial.author}</div>
                <div className="text-sm">{caseData.testimonial.position}</div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[#FFF4C7] mb-4">
              Quer resultados similares?
            </h3>
            <p className="text-[#FFF4C7]/80 mb-6">
              Descubra como podemos transformar seu negócio com metodologias comprovadas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contato"
                className="bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium"
              >
                Agendar Diagnóstico
              </Link>
              <Link 
                href="/autoridade"
                className="bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-medium"
              >
                Ver Mais Cases
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    )
  }

  // Layout padrão para posts que não são cases estruturados
  return (
    <div className="min-h-screen bg-[#09231B]">
      <article className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/autoridade"
            className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar à Autoridade
          </Link>
        </nav>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#FFF4C7]"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="text-[#FFF4C7]/60 mb-6">
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </div>
        </motion.header>

        {/* Featured Image */}
        {featuredImage?.source_url && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden"
          >
            <Image
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none prose-invert prose-headings:text-[#FFF4C7] prose-p:text-[#FFF4C7]/90 prose-a:text-[#3AC97B] prose-strong:text-[#FFF4C7] prose-ul:text-[#FFF4C7]/90 prose-ol:text-[#FFF4C7]/90"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Schema */}
        {post.yoast_head_json?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(post.yoast_head_json.schema)
            }}
          />
        )}
      </article>
    </div>
  )
} 