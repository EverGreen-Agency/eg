'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { BlogPost, BlogCategory } from '@/types/blog'
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
  HashtagIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

// Categorias do blog
const CATEGORIAS: { id: string; nome: string; icon: JSX.Element }[] = [
  { id: 'todos', nome: 'Todos', icon: <HashtagIcon className="h-5 w-5" /> },
  { id: 'comercial', nome: 'Estratégia Comercial', icon: <BriefcaseIcon className="h-5 w-5" /> },
  { id: 'ia', nome: 'IA Aplicada', icon: <CpuChipIcon className="h-5 w-5" /> },
  { id: 'growth', nome: 'Growth & Aquisição', icon: <RocketLaunchIcon className="h-5 w-5" /> },
  { id: 'funis', nome: 'Funis & Conversão', icon: <ChartBarIcon className="h-5 w-5" /> },
  { id: 'bastidores', nome: 'Bastidores EG', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
  { id: 'ferramentas', nome: 'Ferramentas & Templates', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> },
  { id: 'educacao', nome: 'Educação & Mercado', icon: <AcademicCapIcon className="h-5 w-5" /> }
]

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos')
  const [ordenacao, setOrdenacao] = useState<'recentes' | 'populares' | 'favoritos'>('recentes')
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [busca, setBusca] = useState('')

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

  // Filtragem reativa
  const postsFiltrados = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchCategoria = categoriaAtiva === 'todos' || post.category === categoriaAtiva
      const matchBusca =
        busca.trim() === '' ||
        post.title.toLowerCase().includes(busca.toLowerCase()) ||
        post.description.toLowerCase().includes(busca.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(busca.toLowerCase()))
      return matchCategoria && matchBusca
    })
  }, [initialPosts, categoriaAtiva, busca])

  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="bg-[#09231B] py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3AC97B]/10 border border-[#3AC97B]/20 text-[#3AC97B] text-sm font-mono mb-6"
          >
            <span>EverGreen Brain</span>
            <span>·</span>
            <span>Engenharia & Previsibilidade B2B</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-[#FFF4C7] tracking-tight"
          >
            Conteúdo técnico que gera <span className="text-[#3AC97B]">crescimento real</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#FFF4C7]/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Frameworks de engenharia comercial, arquiteturas de CRM, agentes de IA e análises táticas que usamos todos os dias em operações B2B.
          </motion.p>

          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg italic text-[#3AC97B] max-w-xl mx-auto mb-10"
          >
            "Não escrevemos para parecer inteligentes. Escrevemos para a sua empresa crescer com previsibilidade."
          </motion.blockquote>

          {/* Campo de Busca Rápida */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto relative mb-6"
          >
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por tema (ex: Kommo, Previsibilidade, IA, SLA, Gargalos)..."
              className="w-full px-6 py-3.5 rounded-full bg-[#05130E] border border-[#3AC97B]/30 text-[#FFF4C7] placeholder-[#FFF4C7]/40 focus:outline-none focus:ring-2 focus:ring-[#3AC97B] text-sm md:text-base"
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FFF4C7]/40 hover:text-[#FFF4C7]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-6 px-6 bg-[#071D16] sticky top-0 z-20 shadow-md border-t border-b border-[#3AC97B]/20 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORIAS.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaAtiva(categoria.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-2 ${
                  categoriaAtiva === categoria.id
                    ? 'bg-[#3AC97B] text-[#09231B] shadow-md shadow-[#3AC97B]/20 scale-105'
                    : 'bg-[#09231B] text-[#FFF4C7]/80 border border-[#3AC97B]/20 hover:bg-[#09231B]/90 hover:text-[#FFF4C7]'
                }`}
              >
                <span>{categoria.icon}</span>
                <span>{categoria.nome}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-16 px-6 md:px-8 bg-[#09231B]">
        <div className="max-w-6xl mx-auto">
          {postsFiltrados.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[#3AC97B]/20 rounded-2xl p-12">
              <p className="text-xl text-[#FFF4C7]/60 mb-4">Nenhum artigo encontrado para os critérios selecionados.</p>
              <button
                onClick={() => { setCategoriaAtiva('todos'); setBusca('') }}
                className="px-6 py-2.5 rounded-full bg-[#3AC97B] text-[#09231B] font-semibold text-sm hover:bg-[#3AC97B]/90 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsFiltrados.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group bg-[#071D16] rounded-2xl overflow-hidden border border-[#3AC97B]/20 hover:border-[#3AC97B]/50 transition-all duration-300 flex flex-col h-full shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    {/* Imagem de Capa */}
                    <div className="relative h-52 w-full overflow-hidden bg-[#05130E]">
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071D16] via-transparent to-transparent opacity-80" />
                      
                      {/* Badge de Categoria */}
                      <span className="absolute top-4 left-4 bg-[#09231B]/90 backdrop-blur-md text-[#3AC97B] text-xs font-semibold px-3 py-1 rounded-full border border-[#3AC97B]/30 shadow-sm">
                        {post.categoryLabel}
                      </span>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta de leitura e data */}
                      <div className="flex items-center gap-3 text-xs text-[#FFF4C7]/50 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date + 'T00:00:00').toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <ClockIcon className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-[#FFF4C7] mb-3 group-hover:text-[#3AC97B] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-[#FFF4C7]/70 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-[#3AC97B]/10 flex items-center justify-between text-sm">
                        <span className="text-xs text-[#FFF4C7]/60 font-medium">
                          {post.author.name}
                        </span>
                        <span className="text-[#3AC97B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Ler Artigo →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popup de Newsletter */}
      {showNewsletter && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-[#071D16] p-6 rounded-2xl shadow-2xl max-w-md z-50 border border-[#3AC97B]/40 backdrop-blur-lg"
        >
          <button 
            onClick={() => setShowNewsletter(false)}
            className="absolute top-4 right-4 text-[#FFF4C7]/50 hover:text-[#FFF4C7] transition-colors"
            aria-label="Fechar"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <GiftIcon className="h-6 w-6 text-[#3AC97B]" />
            <h3 className="text-lg font-bold text-[#3AC97B]">EverGreen Weekly</h3>
          </div>
          <p className="text-sm text-[#FFF4C7]/80 mb-4 leading-relaxed">
            Receba frameworks inéditos, bastidores de automação comercial e análises de mercado direto da nossa mesa de operação.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              alert('Obrigado por assinar! Você receberá nossos próximos artigos em primeira mão.')
              setShowNewsletter(false)
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail corporativo"
              className="flex-1 px-4 py-2 rounded-full bg-[#05130E] border border-[#3AC97B]/30 text-sm text-[#FFF4C7] placeholder-[#FFF4C7]/40 focus:outline-none focus:ring-2 focus:ring-[#3AC97B]"
            />
            <button 
              type="submit"
              className="bg-[#3AC97B] text-[#09231B] text-xs font-bold px-5 py-2 rounded-full hover:bg-[#3AC97B]/90 transition-colors"
            >
              Assinar
            </button>
          </form>
        </motion.div>
      )}

      {/* CTA Final */}
      <section className="py-20 px-8 bg-[#071D16] border-t border-[#3AC97B]/20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#3AC97B]/10 text-[#3AC97B] mb-6 border border-[#3AC97B]/20">
            <RocketLaunchIcon className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFF4C7] mb-4 tracking-tight">
            Pronto para transformar conteúdo em <span className="text-[#3AC97B]">previsibilidade comercial</span>?
          </h2>
          <p className="text-base md:text-lg mb-8 text-[#FFF4C7]/80 leading-relaxed">
            Conheça o Sistema Raiz e descubra como organizamos cadência, tecnologia e processos para empresas B2B.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/autoridade"
              className="bg-[#09231B] text-[#3AC97B] px-8 py-3.5 rounded-full border border-[#3AC97B]/30 hover:bg-[#3AC97B]/10 transition-colors font-semibold text-sm"
            >
              Ver Casos de Sucesso
            </Link>
            <Link 
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-bold text-sm shadow-lg shadow-[#3AC97B]/20"
            >
              Agendar Diagnóstico Gratuito
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}