'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { CaseStudy } from '@/types/case'
import {
  TrophyIcon,
  AcademicCapIcon,
  StarIcon,
  BuildingOffice2Icon,
  ShoppingCartIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const CATEGORIAS_CASES = ['Todos', 'B2B', 'B2C', 'Autoral']

export default function AutoridadeClient({ initialCases }: { initialCases: CaseStudy[] }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  const casesFiltrados = useMemo(() => {
    if (categoriaAtiva === 'Todos') return initialCases
    return initialCases.filter((c) => c.category === categoriaAtiva)
  }, [initialCases, categoriaAtiva])

  return (
    <div className="min-h-screen bg-[#09231B] text-[#FFF4C7]">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8 border-b border-[#3AC97B]/20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3AC97B]/10 border border-[#3AC97B]/20 text-[#3AC97B] text-sm font-mono mb-6"
          >
            <span>EverGreen Authority</span>
            <span>·</span>
            <span>Evidência de Execução</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-[#FFF4C7] tracking-tight"
          >
            Confiança não se promete. <span className="text-[#3AC97B]">Se comprova</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#FFF4C7]/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Casos reais, métricas auditadas e reconhecimentos técnicos que comprovam nossa capacidade de arquitetar previsibilidade comercial e tecnologia para empresas B2B.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg italic text-[#3AC97B]"
          >
            "A gente não coleciona slides conceituais. A gente constrói reputação com engenharia de processos."
          </motion.blockquote>
        </div>
      </section>

      {/* 1. CASES DE SUCESSO ESTRUTURADOS */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#3AC97B] font-bold text-lg mb-3">
              <TrophyIcon className="h-6 w-6" />
              <span>Estudos de Caso Auditados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFF4C7] tracking-tight">
              Resultados Reais de Clientes
            </h2>
            <p className="text-base text-[#FFF4C7]/70 mt-2 max-w-xl mx-auto">
              Transformações práticas de esteira comercial, tempo de resposta e integração com IA.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIAS_CASES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${
                  categoriaAtiva === cat
                    ? 'bg-[#3AC97B] text-[#09231B] shadow-md shadow-[#3AC97B]/20 scale-105'
                    : 'bg-[#071D16] border border-[#3AC97B]/20 text-[#FFF4C7]/80 hover:bg-[#09231B] hover:text-[#FFF4C7]'
                }`}
              >
                {cat === 'B2B' && <BuildingOffice2Icon className="h-4 w-4" />}
                {cat === 'B2C' && <UserGroupIcon className="h-4 w-4" />}
                {cat === 'Autoral' && <SparklesIcon className="h-4 w-4" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Lista de Cards Ricos de Cases */}
          <div className="space-y-12">
            {casesFiltrados.map((caseItem, idx) => (
              <motion.article
                key={caseItem.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#071D16] border border-[#3AC97B]/25 rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[#3AC97B]/15 pb-6">
                  <div>
                    <span className="text-xs font-mono text-[#3AC97B] uppercase tracking-wider block mb-1">
                      {caseItem.industry} · {caseItem.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FFF4C7]">
                      {caseItem.client}
                    </h3>
                  </div>
                  {caseItem.roi && (
                    <div className="bg-[#3AC97B]/15 border border-[#3AC97B]/30 px-4 py-2 rounded-xl text-center">
                      <span className="text-[10px] uppercase font-mono text-[#FFF4C7]/60 block">Impacto</span>
                      <span className="text-xl md:text-2xl font-extrabold text-[#3AC97B] font-mono">{caseItem.roi}</span>
                    </div>
                  )}
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Coluna 1: Desafio e Solução */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-[#3AC97B] uppercase tracking-wider mb-2">Desafio Encontrado</h4>
                      <p className="text-sm md:text-base text-[#FFF4C7]/80 leading-relaxed">{caseItem.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-mono text-[#3AC97B] uppercase tracking-wider mb-2">Solução Arquitetada</h4>
                      <p className="text-sm md:text-base text-[#FFF4C7]/80 leading-relaxed">{caseItem.solution}</p>
                    </div>

                    {/* Tecnologias */}
                    {caseItem.technologies && (
                      <div>
                        <h4 className="text-xs font-mono text-[#FFF4C7]/60 uppercase tracking-wider mb-2">Tecnologias & Ferramentas</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 rounded-full bg-[#09231B] border border-[#3AC97B]/25 text-[#3AC97B] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Depoimento */}
                    {caseItem.testimonial && (
                      <div className="border-l-2 border-[#3AC97B] pl-4 py-2 mt-4 bg-[#3AC97B]/5 rounded-r-xl">
                        <p className="text-sm italic text-[#FFF4C7]/90 mb-2">"{caseItem.testimonial.quote}"</p>
                        <span className="text-xs font-bold text-[#3AC97B] block">{caseItem.testimonial.author}</span>
                        <span className="text-xs text-[#FFF4C7]/50 block">{caseItem.testimonial.position}</span>
                      </div>
                    )}
                  </div>

                  {/* Coluna 2: Tabela de Métricas Antes vs Depois */}
                  <div className="lg:col-span-5 bg-[#05130E] border border-[#3AC97B]/20 rounded-xl p-5 md:p-6">
                    <h4 className="text-xs font-mono text-[#3AC97B] uppercase tracking-wider mb-4 border-b border-[#3AC97B]/15 pb-2">
                      Métricas de Eficiência (Antes vs Depois)
                    </h4>
                    
                    <div className="space-y-4">
                      {Object.entries(caseItem.metrics).map(([metricKey, metricVal]) => (
                        <div key={metricKey} className="flex items-center justify-between text-xs md:text-sm border-b border-[#3AC97B]/10 pb-2.5 last:border-b-0">
                          <span className="text-[#FFF4C7]/80 capitalize font-medium">
                            {metricKey.replace(/_/g, ' ')}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-[#FFF4C7]/50 line-through font-mono">{metricVal.before}</span>
                            <span className="text-[#3AC97B] font-bold font-mono text-sm md:text-base">{metricVal.after}</span>
                            {metricVal.improvement && (
                              <span className="bg-[#3AC97B]/20 text-[#3AC97B] text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                                {metricVal.improvement}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#3AC97B]/20 text-center">
                      <Link
                        href="/contato"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors"
                      >
                        <span>Quero resultados similares na minha empresa</span>
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. RECONHECIMENTOS E PREMIAÇÕES */}
      <section className="py-16 px-6 md:px-8 bg-[#071D16] border-t border-b border-[#3AC97B]/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#3AC97B] font-bold text-sm mb-3">
            <StarIcon className="h-5 w-5" />
            <span>Validação Técnica</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#FFF4C7] mb-10 tracking-tight">
            Prêmios e Reconhecimentos
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#09231B] border border-[#3AC97B]/25 rounded-2xl p-8 text-center hover:border-[#3AC97B] transition-colors">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#FFF4C7] mb-1">Hackathon Mackenzie 2023</h3>
              <p className="text-[#3AC97B] font-mono text-sm font-semibold mb-3">1º Lugar — Projeto DarBot</p>
              <p className="text-xs text-[#FFF4C7]/70 leading-relaxed">
                Inovação em agentes de IA e automação inteligente aplicada a soluções de vendas e atendimento corporativo.
              </p>
            </div>

            <div className="bg-[#09231B] border border-[#3AC97B]/25 rounded-2xl p-8 text-center hover:border-[#3AC97B] transition-colors">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-[#FFF4C7] mb-1">Hackathon Mackenzie 2025</h3>
              <p className="text-[#3AC97B] font-mono text-sm font-semibold mb-3">1º Lugar — Projeto Portfel</p>
              <p className="text-xs text-[#FFF4C7]/70 leading-relaxed">
                Arquitetura de microsserviços e software para gestão ágil de portfólio de projetos e processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELOS E CERTIFICAÇÕES */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#3AC97B] font-bold text-sm mb-3">
            <AcademicCapIcon className="h-5 w-5" />
            <span>Capacitação Oficial</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#FFF4C7] mb-12 tracking-tight">
            Certificações & Parcerias
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Google Conversion Mobile',
                image: '/images/google_certification.png',
                description: 'Certificação oficial do Google Marketing Platform em CRO e experiência mobile.',
                link: 'https://skillshop.credential.net/dada6b71-4bff-467f-a775-ea559be3de45#acc.omjPgL9M'
              },
              {
                title: 'Kommo Partners Oficial',
                image: '/images/kommopartner.png',
                description: 'Integradores certificados em implantação de CRM conversacional e Salesbots no Brasil.',
                link: '/kommo_partners'
              },
              {
                title: 'EG IA Architect',
                image: '/images/seloArchiet.png',
                description: 'Framework proprietário de arquitetura de inteligência artificial para processos comerciais.'
              },
              {
                title: 'Sistema Raiz Certificado',
                image: '/images/seloCertificado.png',
                description: 'Metodologia auditada de engenharia e previsibilidade de vendas B2B.'
              }
            ].map((selo, index) => (
              <div
                key={index}
                className="bg-[#071D16] border border-[#3AC97B]/20 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#3AC97B]/50 transition-colors"
              >
                <div className="relative h-28 w-28 mb-4 flex items-center justify-center">
                  <Image
                    src={selo.image}
                    alt={selo.title}
                    width={112}
                    height={112}
                    className="object-contain max-h-24"
                  />
                </div>
                <h3 className="font-bold text-[#FFF4C7] text-base mb-2">{selo.title}</h3>
                <p className="text-xs text-[#FFF4C7]/70 leading-relaxed mb-4 flex-1">{selo.description}</p>
                {selo.link && (
                  <Link
                    href={selo.link}
                    target={selo.link.startsWith('http') ? '_blank' : '_self'}
                    rel={selo.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-xs font-semibold text-[#3AC97B] hover:underline"
                  >
                    Verificar Credencial →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-8 bg-[#071D16] border-t border-[#3AC97B]/20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FFF4C7] mb-4">
            Quer ser o próximo case de sucesso da EverGreen?
          </h2>
          <p className="text-base text-[#FFF4C7]/80 mb-8 max-w-xl mx-auto">
            Construa uma operação comercial com processos auditados, governança e tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-bold text-sm shadow-lg shadow-[#3AC97B]/20"
            >
              Agendar Diagnóstico Gratuito
            </Link>
            <Link
              href="/blog"
              className="bg-[#09231B] border border-[#3AC97B]/30 text-[#3AC97B] px-8 py-3.5 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-semibold text-sm"
            >
              Acessar Artigos Técnicos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}