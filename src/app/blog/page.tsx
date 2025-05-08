'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { wordpressService, type Post } from '@/services/wordpress'
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  BuildingOfficeIcon, 
  BriefcaseIcon, 
  WrenchScrewdriverIcon, 
  ChartBarIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  VideoCameraIcon,
  WrenchIcon,
  ArrowDownTrayIcon,
  MicrophoneIcon,
  XMarkIcon,
  GiftIcon,
  HashtagIcon
} from '@heroicons/react/24/outline'

// Categorias do blog
const CATEGORIAS = [
  { id: 'todos', nome: 'Todos', icon: <HashtagIcon className="h-5 w-5" /> },
  { id: 'growth', nome: 'Growth & Aquisição', icon: <RocketLaunchIcon className="h-5 w-5" /> },
  { id: 'ia', nome: 'IA Aplicada', icon: <CpuChipIcon className="h-5 w-5" /> },
  { id: 'bastidores', nome: 'Bastidores EG', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
  { id: 'comercial', nome: 'Estratégia Comercial', icon: <BriefcaseIcon className="h-5 w-5" /> },
  { id: 'ferramentas', nome: 'Ferramentas & Templates', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> },
  { id: 'funis', nome: 'Funis & Conversão', icon: <ChartBarIcon className="h-5 w-5" /> },
  { id: 'educacao', nome: 'Educação & Mercado', icon: <AcademicCapIcon className="h-5 w-5" /> }
]

// Tipos de conteúdo
const TIPOS_CONTEUDO = [
  { id: 'framework', nome: 'Framework', icon: <DocumentTextIcon className="h-5 w-5" /> },
  { id: 'video', nome: 'Vídeo', icon: <VideoCameraIcon className="h-5 w-5" /> },
  { id: 'ferramenta', nome: 'Ferramenta', icon: <WrenchIcon className="h-5 w-5" /> },
  { id: 'download', nome: 'Download', icon: <ArrowDownTrayIcon className="h-5 w-5" /> },
  { id: 'bastidores', nome: 'Bastidores', icon: <MicrophoneIcon className="h-5 w-5" /> }
]

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [ordenacao, setOrdenacao] = useState<'recentes' | 'populares' | 'favoritos'>('recentes')
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true)
        const data = await wordpressService.getPosts(1, 12)
        setPosts(data)
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

  // Monitora o scroll para exibir o popup da newsletter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollPosition > pageHeight * 0.5 && !showNewsletter) {
        setShowNewsletter(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showNewsletter])

  if (loading) {
    return (
      <div className="min-h-screen p-8 bg-[#09231B]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-[#3AC97B]/20 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-[#3AC97B]/20 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 bg-[#09231B]">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Erro</h1>
        <p className="text-[#FFF4C7]">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="bg-[#09231B] py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 text-[#3AC97B]"
          >
            Evergreen Brain
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-semibold mb-6 text-[#FFF4C7]"
          >
            Conteúdo que gera crescimento real.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#FFF4C7]/80 mb-8"
          >
            Aqui você encontra frameworks, bastidores, guias e provocações que usamos todos os dias 
            pra crescer empresas com tecnologia, IA e estratégia.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl italic text-[#FFF4C7] mb-8"
          >
            "Não escrevemos pra parecer inteligentes. Escrevemos pra fazer você crescer."
          </motion.blockquote>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => setShowNewsletter(true)}
              className="bg-[#3AC97B] text-[#09231B] px-6 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors"
            >
              Assinar Newsletter
            </button>
            <button 
              onClick={() => {
                setOrdenacao('populares');
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              className="bg-[#09231B] text-[#3AC97B] px-6 py-3 rounded-full border border-[#3AC97B]/20 hover:bg-[#09231B]/80 transition-colors"
            >
              Ver Artigos Mais Lidos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-8 bg-[#09231B] sticky top-0 z-10 shadow-sm border-t border-b border-[#3AC97B]/20">
        <div className="max-w-6xl mx-auto">
          {/* Categorias */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
                  categoriaAtiva === categoria.id
                    ? 'bg-[#3AC97B] text-[#09231B]'
                    : 'bg-[#09231B] text-[#FFF4C7] border border-[#3AC97B]/20 hover:bg-[#09231B]/80'
                }`}
              >
                <span>{categoria.icon}</span>
                <span>{categoria.nome}</span>
              </button>
            ))}
          </div>
          
          {/* Ordenação */}
          <div className="flex justify-center gap-4">
            {[
              { id: 'recentes', nome: 'Mais Recentes' },
              { id: 'populares', nome: 'Mais Lidos' },
              { id: 'favoritos', nome: 'Favoritos da Equipe' }
            ].map((tipo) => (
              <button
                key={tipo.id}
                onClick={() => setOrdenacao(tipo.id as any)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  ordenacao === tipo.id
                    ? 'bg-[#3AC97B] text-[#09231B]'
                    : 'bg-[#09231B] text-[#FFF4C7] border border-[#3AC97B]/20 hover:bg-[#09231B]/80'
                }`}
              >
                {tipo.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-12 px-8 bg-[#09231B]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-[#09231B] rounded-xl shadow-lg overflow-hidden border border-[#3AC97B]/20"
              >
                <Link href={`/blog/${post.id}`}>
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
                    {/* Tag de tipo de conteúdo */}
                    <div className="flex gap-2 mb-3">
                      <span className="bg-[#3AC97B]/10 text-[#3AC97B] px-3 py-1 rounded-full text-sm border border-[#3AC97B]/20">
                        📘 Framework
                      </span>
                    </div>
                    
                    <h2 
                      className="text-xl font-bold mb-2 text-[#FFF4C7]"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-[#FFF4C7]/80 line-clamp-2 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#FFF4C7]/60">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
                      <span className="text-[#3AC97B] font-medium">Ler Agora →</span>
                </div>
              </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Popup */}
      {showNewsletter && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-[#09231B] p-6 rounded-xl shadow-2xl max-w-md z-50 border border-[#3AC97B]/20"
        >
          <button 
            onClick={() => setShowNewsletter(false)}
            className="absolute top-4 right-4 text-[#FFF4C7]/60 hover:text-[#FFF4C7]"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-4">
            <GiftIcon className="h-6 w-6 text-[#3AC97B]" />
            <h3 className="text-xl font-bold text-[#3AC97B]">Receba conteúdos inéditos antes de todo mundo</h3>
          </div>
          <p className="text-[#FFF4C7]/80 mb-4">
            Assine a Evergreen Weekly e receba insights táticos direto da nossa mesa de operação.
            Sem enrolação. Só coisa aplicável.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-2 rounded-full bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] placeholder-[#FFF4C7]/50 focus:outline-none focus:ring-2 focus:ring-[#3AC97B]"
            />
            <button 
              type="submit"
              className="bg-[#3AC97B] text-[#09231B] px-6 py-2 rounded-full hover:bg-[#3AC97B]/90 transition-colors"
            >
              Quero Receber
            </button>
          </form>
        </motion.div>
      )}

      {/* CTA Final */}
      <section className="py-16 px-8 bg-[#09231B] border-t border-[#3AC97B]/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <RocketLaunchIcon className="h-8 w-8 text-[#3AC97B]" />
            <h2 className="text-3xl font-bold text-[#3AC97B]">Pronto pra aplicar o que aprendeu?</h2>
          </div>
          <p className="text-lg mb-8 text-[#FFF4C7]/80">
            Transforme ideias em execução com os sistemas da Evergreen.<br />
            Descubra como levamos o conteúdo à prática — com crescimento real.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/autoridade"
              className="bg-[#09231B] text-[#3AC97B] px-8 py-3 rounded-full border border-[#3AC97B]/20 hover:bg-[#09231B]/80 transition-colors"
            >
              Ver Casos de Sucesso
            </Link>
            <Link 
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors"
            >
              Agendar Diagnóstico
            </Link>
          </div>
      </div>
    </section>
    </div>
  )
} 