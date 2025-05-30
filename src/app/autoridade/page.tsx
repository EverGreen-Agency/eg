'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wordpressService, type AutoridadePost } from '@/services/wordpress'
import { motion } from 'framer-motion'
import { 
  TrophyIcon, 
  AcademicCapIcon, 
  StarIcon,
  BuildingOffice2Icon,
  ShoppingCartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

// Categorias para filtro de Cases
const CATEGORIAS_CASES = ['Todos', 'B2B', 'B2C', 'E-commerce']

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
        
        console.log('Posts de autoridade recebidos:', data.length)
        console.log('Primeiro post:', data[0])
        
        // Filtrar apenas posts da categoria "cases"
        const casePosts = data.filter(post => {
          const categories = post._embedded?.['wp:term']?.[0] || []
          console.log(`Post "${post.title.rendered}" categorias:`, categories.map(cat => cat.slug))
          return categories.some(cat => cat.slug === 'cases')
        })
        
        console.log('Posts filtrados como cases:', casePosts.length)
        
        const sortedData = casePosts.sort((a, b) => 
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

  const filteredPosts = categoriaAtiva === 'Todos' 
    ? posts 
    : posts.filter(post => {
        const categories = post._embedded?.['wp:term']?.[0] || []
        return categories.some(cat => cat.name === categoriaAtiva)
      })

  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#FFF4C7]"
          >
            Evergreen Authority
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-[#FFF4C7]"
          >
            Confiança não se compra. Se constrói.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-[#FFF4C7]/80 mb-6 max-w-6xl mx-auto leading-relaxed px-4"
          >
            Aqui estão os cases, reconhecimentos e certificações que validam nossa visão, técnica e execução. Cada resultado representa compromisso com excelência e obsessão por crescimento real.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl italic text-[#FFF4C7]/80 mt-4"
          >
            "A gente não coleciona PDFs. A gente constrói reputação."
          </motion.blockquote>
        </div>
      </section>

      {/* 1. CASES DE SUCESSO */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7] flex items-center justify-center gap-3">
              <TrophyIcon className="h-8 w-8 text-[#3AC97B]" />
              Cases de Sucesso
            </h2>
            <p className="text-lg text-[#FFF4C7]/80">
              Resultados reais e mensuráveis que transformaram o crescimento de nossos clientes
            </p>
          </div>

          {/* Filtros de Cases */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {CATEGORIAS_CASES.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-6 py-2 rounded-full transition-colors flex items-center gap-2 ${
                  categoriaAtiva === categoria
                    ? 'bg-[#3AC97B] text-[#09231B] font-medium'
                    : 'bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] hover:bg-[#3AC97B]/10'
                }`}
              >
                {categoria === 'B2B' && <BuildingOffice2Icon className="h-4 w-4" />}
                {categoria === 'B2C' && <UserGroupIcon className="h-4 w-4" />}
                {categoria === 'E-commerce' && <ShoppingCartIcon className="h-4 w-4" />}
                {categoria}
              </button>
            ))}
          </div>

          {/* Cases do WordPress */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-[#3AC97B]/20 h-64 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          )}

          {/* Cases Destacados (Hardcoded) */}
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
                <div className="grid lg:grid-cols-3 gap-8">
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

                  <div className="lg:col-span-2 bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6">
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
        </div>
      </section>

      {/* 2. PRÊMIOS E RECONHECIMENTOS */}
      <section className="py-16 px-4 md:px-8 bg-[#0A1A14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7] flex items-center justify-center gap-3">
              <StarIcon className="h-8 w-8 text-[#3AC97B]" />
              Prêmios e Reconhecimentos
            </h2>
            <p className="text-lg text-[#FFF4C7]/80">
              Validação externa da nossa excelência em execução e inovação
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 max-w-4xl">
              {[
                {
                  title: 'Hackathon Mackenzie 2023',
                  category: '1º Lugar - Projeto DarBot',
                  description: 'Inovação em IA aplicada a soluções de atendimento e vendas.',
                  date: '2023',
                  icon: '🏆'
                },
                {
                  title: 'Hackathon Mackenzie 2025',
                  category: '1º Lugar - Projeto Portfel',
                  description: 'Solução inovadora para gestão de portfólio e projetos.',
                  date: '2025',
                  icon: '🏆'
                }
              ].map((premio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(58, 201, 123, 0.1), 0 10px 10px -5px rgba(58, 201, 123, 0.04)'
                  }}
                  className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8 text-center hover:border-[#3AC97B] transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{premio.icon}</div>
                  <h3 className="text-xl font-bold text-[#FFF4C7] mb-3">{premio.title}</h3>
                  <p className="text-[#3AC97B] font-medium mb-3 text-lg">{premio.category}</p>
                  <p className="text-[#FFF4C7]/80 mb-4 leading-relaxed">{premio.description}</p>
                  <span className="inline-block bg-[#3AC97B]/10 text-[#3AC97B] px-3 py-1 rounded-full text-sm font-medium">{premio.date}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELOS E CERTIFICAÇÕES */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7] flex items-center justify-center gap-3">
              <AcademicCapIcon className="h-8 w-8 text-[#3AC97B]" />
              Selos e Certificações
            </h2>
            <p className="text-lg text-[#FFF4C7]/80">
              Conhecimento técnico validado e frameworks proprietários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {[
              { 
                title: 'EG Growth Expert', 
                image: '/images/seloGrowth.png',
                alt: 'Selo EG Growth Expert',
                description: 'Framework proprietário de crescimento acelerado'
              },
              { 
                title: 'EG IA Architect', 
                image: '/images/seloArchiet.png',
                alt: 'Selo EG IA Architect',
                description: 'Especialização em arquitetura de IA para negócios'
              },
              { 
                title: 'Sistema Evergreen Certificado', 
                image: '/images/seloCertificado.png',
                alt: 'Selo Sistema Evergreen Certificado',
                description: 'Metodologia completa de transformação digital'
              }
            ].map((selo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                className="bg-[#09231B] border border-[#3AC97B]/20 rounded-2xl p-8 transition-all duration-300 transform text-center"
              >
                <div className="relative w-full flex justify-center items-center mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3AC97B] to-[#3AC97B]/60 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                      src={selo.image}
                      alt={selo.alt}
                      width={200}
                      height={200}
                      className="object-contain relative transform transition duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#FFF4C7] mb-2">{selo.title}</h3>
                <p className="text-[#FFF4C7]/80">{selo.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#FFF4C7]/80 mb-8">
              Criamos selos próprios baseados em frameworks internos validados com clientes e projetos reais.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 md:px-8 bg-[#0A1A14]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#FFF4C7]">Quer ser o próximo case de sucesso?</h2>
          <p className="text-lg mb-8 text-[#FFF4C7]/80">
            Transforme seu negócio com metodologias comprovadas e tecnologia de ponta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium"
            >
              Agendar Diagnóstico
            </Link>
            <Link 
              href="/newsletter"
              className="bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-medium"
            >
              Assinar Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 