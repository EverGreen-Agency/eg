'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'
import ParticlesBackground from '@/components/interactive/ParticlesBackground'
import GradientBackground from '@/components/interactive/GradientBackground'
import { BeakerIcon, RocketLaunchIcon, WrenchScrewdriverIcon, Cog6ToothIcon, BoltIcon, LightBulbIcon, PuzzlePieceIcon, CheckCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const labProjects = [
  {
    title: 'Plataforma de Tradução de Documentos',
    category: 'Tech Corporativo',
    icon: '/icons/translate.svg',
    description: 'Velocidade e compliance de documentos multilíngues',
    stats: {
      label: 'Redução no tempo de tradução',
      value: '73%'
    },
    gradient: 'from-blue-400/10 via-cyan-400/10 to-blue-400/10'
  },
  {
    title: 'Solução Fitness',
    category: 'HealthTech',
    icon: '/icons/fitness.svg',
    description: 'Gestão eficiente de alunos e pagamentos',
    stats: {
      label: 'Aumento na retenção',
      value: '45%'
    },
    gradient: 'from-emerald-400/10 via-green-400/10 to-emerald-400/10'
  },
  {
    title: 'CRM para Venda Direta',
    category: 'CRM Leve',
    icon: '/icons/crm.svg',
    description: 'Controle e acompanhamento de vendas em campo',
    stats: {
      label: 'Aumento em vendas',
      value: '89%'
    },
    gradient: 'from-purple-400/10 via-violet-400/10 to-purple-400/10'
  },
  {
    title: 'Plataforma para Consultores Financeiros',
    category: 'FinTech',
    icon: '/icons/finance.svg',
    description: 'Controle inteligente de dados financeiros',
    stats: {
      label: 'Tempo economizado',
      value: '12h/dia'
    },
    gradient: 'from-amber-400/10 via-yellow-400/10 to-amber-400/10'
  },
  {
    title: 'Gestão de Despesas Pessoais',
    category: 'FinTech',
    icon: '/icons/expenses.svg',
    description: 'Domínio financeiro pessoal e fidelização',
    stats: {
      label: 'Usuários ativos',
      value: '10k+'
    },
    gradient: 'from-rose-400/10 via-pink-400/10 to-rose-400/10'
  },
  {
    title: 'Controle de Safra Agrícola',
    category: 'AgroTech',
    icon: '/icons/agro.svg',
    description: 'Gestão eficiente da produção e comercialização',
    stats: {
      label: 'Aumento na produtividade',
      value: '32%'
    },
    gradient: 'from-lime-400/10 via-green-400/10 to-lime-400/10'
  }
]

const steps = [
  {
    title: 'Imersão Rápida',
    description: 'Entendemos o problema real, a dor que precisa ser resolvida e os recursos disponíveis.',
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-emerald-300" />
  },
  {
    title: 'Ideação guiada',
    description: 'Geramos soluções viáveis em prazo curto — focadas em produto mínimo viável funcional.',
    icon: <LightBulbIcon className="h-8 w-8 text-yellow-200" />
  },
  {
    title: 'Sprint de Construção',
    description: 'Prototipagem e desenvolvimento acelerado: MVP → Teste → Iteração.',
    icon: <BoltIcon className="h-8 w-8 text-emerald-400" />
  },
  {
    title: 'Lançamento e Validação',
    description: 'Colocamos o produto para rodar rapidamente no mercado real — com feedback real.',
    icon: <RocketLaunchIcon className="h-8 w-8 text-emerald-200" />
  }
]

export default function EGLabPage() {
  return (
    <main className="min-h-screen bg-[#0D221B]">
      {/* Hero Section */}
      <ParticlesBackground className="py-32" variant="green">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-6xl font-bold mb-6 text-[#E6E3B1]">
                EG Lab
              </h1>
              <h2 className="text-3xl font-bold mb-8 text-emerald-500">
                Plataformas, produtos e MVPs feitos pra escalar.
              </h2>
              <p className="text-xl text-[#E6E3B1] mb-8">
                Transformamos ideias em produtos que funcionam — no campo de batalha.
              </p>
              <div className="space-y-2 mb-12 text-[#E6E3B1]">
                <p className="text-lg">Do insight à solução.</p>
                <p className="text-lg">Da conversa à primeira venda.</p>
                <p className="text-lg">Da tese à execução.</p>
              </div>
              <blockquote className="text-2xl italic text-emerald-400 bg-emerald-950/30 p-6 rounded-2xl max-w-3xl mx-auto">
                "Aceleramos sua ideia com tecnologia sob demanda."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </ParticlesBackground>

      {/* O que é o EG Lab */}
      <section className="py-24 bg-[#0D221B]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 text-[#E6E3B1]">
                O que é o EG Lab?
              </h2>
              <p className="text-xl text-emerald-400 mb-12">
                O EG Lab é o braço de inovação da Evergreen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="mb-4 flex justify-center"><PuzzlePieceIcon className="h-8 w-8 text-emerald-300" /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Produtos digitais validados
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="mb-4 flex justify-center"><RocketLaunchIcon className="h-8 w-8 text-emerald-300" /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    MVPs prontos pra testar
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="mb-4 flex justify-center"><WrenchScrewdriverIcon className="h-8 w-8 text-emerald-300" /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Plataformas de automação
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="mb-4 flex justify-center"><BeakerIcon className="h-8 w-8 text-emerald-300" /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Soluções growth tech
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16 text-[#E6E3B1]">
              Como Funciona o EG Lab
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="glass-card p-8 bg-[#0D221B]/50 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-4">{step.title}</h3>
                  <p className="text-[#E6E3B1]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-24 bg-[#0D221B]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-[#E6E3B1]">
                Casos Criados no EG Lab
              </h2>
              <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
                Transformamos desafios complexos em soluções escaláveis — com resultados mensuráveis.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {labProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-white/10`}
                >
                  {/* Card Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#E6E3B1]/10 flex items-center justify-center">
                        <img src={project.icon} alt={project.title} className="w-6 h-6" />
                      </div>
                      <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#E6E3B1]/10 text-[#E6E3B1]">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#E6E3B1] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-emerald-400/90 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer with Stats */}
                  <div className="p-8 pt-0">
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-sm text-emerald-400/70 mb-1">
                        {project.stats.label}
                      </p>
                      <p className="text-3xl font-bold text-[#E6E3B1]">
                        {project.stats.value}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quem Pode Usar */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-16 text-[#E6E3B1]">
              Quem Pode Usar o EG Lab?
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 bg-[#0D221B]/50">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">Fundadores</h3>
                <p className="text-[#E6E3B1]">Que querem validar uma ideia rápido</p>
              </div>
              <div className="glass-card p-6 bg-[#0D221B]/50">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">Times de Growth</h3>
                <p className="text-[#E6E3B1]">Que precisam de soluções sob medida</p>
              </div>
              <div className="glass-card p-6 bg-[#0D221B]/50">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">Empresas</h3>
                <p className="text-[#E6E3B1]">Que querem criar spin-offs digitais</p>
              </div>
              <div className="glass-card p-6 bg-[#0D221B]/50">
                <h3 className="text-xl font-bold text-emerald-500 mb-4">Negócios Tradicionais</h3>
                <p className="text-[#E6E3B1]">Que querem criar tech enablement interno</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#0D221B]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-[#E6E3B1]">
                Quer tirar sua ideia do papel em semanas — não anos?
              </h2>
              <p className="text-xl text-emerald-400 mb-12">
                O EG Lab foi feito pra quem entende que velocidade é a vantagem competitiva.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#0D221B] bg-[#E6E3B1] hover:bg-emerald-500 hover:text-white transition-colors duration-300"
              >
                Agendar Diagnóstico do Produto
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 