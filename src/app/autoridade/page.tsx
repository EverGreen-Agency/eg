'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wordpressService, type AutoridadePost } from '@/services/wordpress'
import { motion } from 'framer-motion'

interface Metrics {
  agendamentos?: string
  tempo_resposta?: string
  taxa_qualificacao?: string
  leads?: string
  cac?: string
  vagas?: string
}

interface CaseStudy {
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    before: Metrics
    after: Metrics
  }
}

// Categorias para filtro
const CATEGORIAS = ['Todos', 'IA', 'Growth', 'Vendas', 'Técnica']

export default function AutoridadePage() {
  const [posts, setPosts] = useState<AutoridadePost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const data = await wordpressService.getAutoridadePosts()
        // Ordenar por data mais recente
        const sortedData = data.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setPosts(sortedData)
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar posts:', err)
        setError('Falha ao carregar os posts. Por favor, tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Erro</h1>
        <p>{error}</p>
      </div>
    )
  }

  const filteredPosts = categoriaAtiva === 'Todos' 
    ? posts 
    : posts.filter(post => {
        const categories = post._embedded?.['wp:term']?.[0] || []
        return categories.some(cat => cat.name === categoriaAtiva)
      })

  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-[#FFF4C7]"
          >
            Evergreen Authority
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-[#FFF4C7]"
          >
            Confiança não se compra. Se constrói.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#FFF4C7]/80 mb-8 max-w-3xl mx-auto"
          >
            Aqui estão as certificações, reconhecimentos e selos que validam nossa visão, técnica e execução.
            Cada um desses troféus representa compromisso com excelência e obsessão por resultados reais.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl italic text-[#FFF4C7]/80"
          >
            "A gente não coleciona PDFs. A gente constrói reputação."
          </motion.blockquote>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  categoriaAtiva === categoria
                    ? 'bg-[#3AC97B] text-[#09231B] font-medium'
                    : 'bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] hover:bg-[#3AC97B]/10'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Certificações */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl overflow-hidden hover:border-[#3AC97B] transition-colors"
              >
                <Link href={`/autoridade/${post.slug}`} className="block h-full">
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold mb-2 text-[#FFF4C7]"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-[#FFF4C7]/80 line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ 
                        __html: post.yoast_head_json?.description || post.content.rendered 
                      }}
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#FFF4C7]/60">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      {post._embedded?.['wp:term']?.[0] && (
                        <span className="bg-[#3AC97B] text-[#09231B] px-3 py-1 rounded-full font-medium">
                          {post._embedded['wp:term'][0][0]?.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Cases */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7]">Cases de Sucesso</h2>
            <p className="text-lg text-[#FFF4C7]/80">
              Resultados reais e mensuráveis que transformaram o crescimento de nossos clientes
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                client: 'Grupo Casa Fatilli + Casa & Conforto',
                industry: 'Móveis Planejados (B2C, multimarcas)',
                challenge: 'Time comercial sobrecarregado, resposta lenta e baixa conversão no WhatsApp.',
                solution: 'Desenvolvimento de sistema de SDR automatizado com IA generativa + integração ao CRM. Criação de fluxo de nutrição com pré-qualificação automática de leads por canal.',
                results: [
                  'Redução de 70% no tempo de resposta',
                  'Aumento de 5x na taxa de agendamento',
                  'Padronização do atendimento comercial com IA'
                ],
                metrics: {
                  before: {
                    agendamentos: '10/semana',
                    tempo_resposta: '18h',
                    taxa_qualificacao: '25%'
                  },
                  after: {
                    agendamentos: '55/semana',
                    tempo_resposta: '2h',
                    taxa_qualificacao: '60%'
                  }
                }
              },
              {
                client: 'IW Tour – Viagens Iniciáticas',
                industry: 'Turismo transformacional (B2C nichado)',
                challenge: 'Falta de previsibilidade em geração de leads, dependência de indicações e mídia orgânica fraca.',
                solution: 'Criação de campanhas de aquisição com tráfego pago, landing pages com CRO, segmentação por arquétipos e automação de nutrição com storytelling emocional.',
                results: [
                  '+350% em geração de leads qualificados',
                  'ROI positivo na 2ª campanha',
                  'Primeira fila de lançamento esgotada em 48h'
                ],
                metrics: {
                  before: {
                    leads: '60/mês',
                    cac: 'R$ 200',
                    vagas: '8 preenchidas'
                  },
                  after: {
                    leads: '270/mês',
                    cac: 'R$ 92',
                    vagas: '20 preenchidas'
                  }
                }
              }
            ].map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7] mb-2">{case_.client}</h3>
                      <p className="text-[#FFF4C7]/80">{case_.industry}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#FFF4C7] mb-2">Desafio:</h4>
                      <p className="text-[#FFF4C7]/80">{case_.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#FFF4C7] mb-2">Solução:</h4>
                      <p className="text-[#FFF4C7]/80">{case_.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#FFF4C7] mb-2">Resultados:</h4>
                      <ul className="space-y-2">
                        {case_.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-center space-x-3 text-[#FFF4C7]/80">
                            <svg className="h-5 w-5 text-[#3AC97B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-[#FFF4C7] mb-6">Métricas</h4>
                    <div className="space-y-6">
                      {Object.entries(case_.metrics.before).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-3 gap-4 items-center">
                          <div className="font-medium text-[#FFF4C7]/90 capitalize">{key.replace('_', ' ')}</div>
                          <div className="text-center text-[#FFF4C7]/80">{value}</div>
                          <div className="text-center text-[#3AC97B]">{case_.metrics.after[key as keyof Metrics]}</div>
                        </div>
                      ))}
                      <div className="grid grid-cols-3 gap-4 text-sm text-[#FFF4C7]/60 border-t border-[#3AC97B]/20 pt-4">
                        <div>Métrica</div>
                        <div className="text-center">Antes</div>
                        <div className="text-center">Depois</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contato">
              <button className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium">
                Quero Ser o Próximo Case de Sucesso
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Selos Exclusivos */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#FFF4C7]">Selos Exclusivos EG</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              { 
                title: 'EG Growth Expert', 
                image: '/images/seloGrowth.png',
                alt: 'Selo EG Growth Expert',
                width: 300,
                height: 300
              },
              { 
                title: 'EG IA Architect', 
                image: '/images/seloArchiet.png',
                alt: 'Selo EG IA Architect',
                width: 300,
                height: 300
              },
              { 
                title: 'Sistema Evergreen Certificado', 
                image: '/images/seloCertificado.png',
                alt: 'Selo Sistema Evergreen Certificado',
                width: 300,
                height: 300
              }
            ].map((selo) => (
              <motion.div
                key={selo.title}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="bg-[#09231B] border border-[#3AC97B]/20 rounded-2xl p-8 transition-all duration-300 transform"
              >
                <div className="relative w-full flex justify-center items-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3AC97B] to-[#3AC97B]/60 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                      src={selo.image}
                      alt={selo.alt}
                      width={selo.width}
                      height={selo.height}
                      className="object-contain relative transform transition duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#FFF4C7] mt-6 mb-2">{selo.title}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-[#FFF4C7]/80">
            Criamos selos próprios baseados em frameworks internos validados com clientes e projetos reais.
          </p>
        </div>
      </section>

      {/* Bloco de Aplicação */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7]">Autoridade que gera resultado</h2>
          <p className="text-lg text-[#FFF4C7]/80 mb-8">
            Certificação sem aplicação não vale nada.<br />
            Por isso, cada aprendizado nosso vira um framework, uma automação, um sistema — e vai direto pro campo.
          </p>
          <Link 
            href="/autoridade"
            className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium"
          >
            Veja como aplicamos isso na prática
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7]">Quer aprender com quem aplica?</h2>
          <p className="text-lg mb-8 text-[#FFF4C7]/80">
            A gente compartilha frameworks, guias e ferramentas com quem quer subir de nível.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/newsletter"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium"
            >
              Assinar a Evergreen Weekly
            </Link>
            <Link 
              href="/ferramentas"
              className="bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-medium"
            >
              Ver Materiais Exclusivos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 