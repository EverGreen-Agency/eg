'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import ParticlesBackground from '@/components/interactive/ParticlesBackground'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { 
  FaChartLine, 
  FaMoneyBillWave, 
  FaRobot, 
  FaFileContract, 
  FaFileAlt, 
  FaWhatsapp, 
  FaFileInvoice, 
  FaChartBar,
  FaBriefcase,
  FaBalanceScale,
  FaComments,
  FaChartPie,
  FaClipboardList,
  FaBrain,
  FaChartArea
} from 'react-icons/fa'

const financeServices = [
  {
    title: 'Evergreen DRE',
    desc: 'Relatórios financeiros claros e visuais',
    icon: <FaChartLine className="text-3xl" />,
    color: 'border-emerald-400',
  },
  {
    title: 'Evergreen Flow',
    desc: 'Fluxo de caixa previsto para 90 dias',
    icon: <FaMoneyBillWave className="text-3xl" />,
    color: 'border-emerald-400',
  },
  {
    title: 'Evergreen CobrAI',
    desc: 'Cobrança automática via IA (Whats, SMS, Email)',
    icon: <FaRobot className="text-3xl" />,
    color: 'border-emerald-400',
  },
]

const legalServices = [
  {
    title: 'Evergreen LegalBot',
    desc: 'Geração de contratos automatizados com IA',
    icon: <FaFileContract className="text-3xl" />,
    color: 'border-yellow-400',
  },
  {
    title: 'Evergreen DocFast',
    desc: 'Registro de empresa, marca e documentos expressos',
    icon: <FaFileAlt className="text-3xl" />,
    color: 'border-yellow-400',
  },
]

const salesServices = [
  {
    title: 'Evergreen WhatsBot',
    desc: 'Atendimento automático 24h via WhatsApp',
    icon: <FaWhatsapp className="text-3xl" />,
    color: 'border-blue-400',
  },
  {
    title: 'Evergreen PitchBuilder',
    desc: 'Scripts de venda prontos em 24h com IA',
    icon: <FaFileInvoice className="text-3xl" />,
    color: 'border-blue-400',
  },
]

const biServices = [
  {
    title: 'Evergreen BI Starter',
    desc: 'Dashboard de vendas, gastos e conversão visualizados',
    icon: <FaChartBar className="text-3xl" />,
    color: 'border-red-400',
  },
]

const allServices = [
  ...financeServices,
  ...legalServices,
  ...salesServices,
  ...biServices,
]

// Mapear o título para o slug da rota
const serviceSlug = {
  'Evergreen DRE': 'dre',
  'Evergreen Flow': 'flow',
  'Evergreen CobrAI': 'cobrai',
  'Evergreen LegalBot': 'legalbot',
  'Evergreen DocFast': 'docfast',
  'Evergreen WhatsBot': 'whatsbot',
  'Evergreen PitchBuilder': 'pitchbuilder',
  'Evergreen BI Starter': 'bi-starter',
};

const starterPack = [
  'DRE Automática',
  'Cobrança Automatizada',
  'WhatsBot de Atendimento',
]

const growthPack = [
  'DRE + Fluxo de Caixa',
  'Contratos Automáticos',
  'WhatsBot + Scripts de Venda',
  'Dashboard de BI',
]

const problems = [
  {
    problem: 'Falta de tempo',
    solution: 'Automatizamos e padronizamos o operacional',
  },
  {
    problem: 'Falta de equipe',
    solution: 'IA + playbooks = operação enxuta',
  },
  {
    problem: 'Falta de conhecimento técnico',
    solution: 'Você não precisa aprender, só delegar',
  },
  {
    problem: 'Custo de estrutura',
    solution: 'Preço fixo e acessível sem folha de pagamento',
  },
]

export default function EGOSPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const CARD_WIDTH = 360 // largura do card + gap
  const totalCards = allServices.length
  const visibleCards = 3 // quantos cards aparecem na tela
  const maxX = -CARD_WIDTH * (totalCards - visibleCards)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, maxX])

  return (
    <main className="min-h-screen bg-[#0D221B] text-[#E6E3B1]">
      {/* HERO */}
      <ParticlesBackground className="py-32" variant="green">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <h1 className="text-6xl font-bold mb-6 text-[#E6E3B1]">
                EG.OS
              </h1>
              <h2 className="text-3xl font-bold mb-8 text-emerald-500">
                Terceirize o que te atrasa. Acelere o que te dá lucro.
              </h2>
              <p className="text-xl text-[#E6E3B1] mb-8">
                Automatizamos, estruturamos e mantemos o seu backoffice —<br />
                pra que você foque no que realmente importa: crescer, vender e lucrar.
              </p>
              <blockquote className="text-2xl italic text-emerald-400 bg-emerald-950/30 p-6 rounded-2xl max-w-3xl mx-auto">
                "Seus processos. Só que automáticos, inteligentes e mais rápidos."
              </blockquote>
              <div className="mt-10">
                <Link href="#cta" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                  Quero delegar agora
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ParticlesBackground>

      {/* O QUE É */}
      <section className="py-24 bg-[#0D221B]">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 text-[#E6E3B1]">
                O que é o EG.OS?
              </h2>
              <p className="text-xl text-emerald-400 mb-12">
                EG.OS é o seu backoffice completo — enxuto, inteligente e operado por IA.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="text-3xl mb-4 text-emerald-400"><FaBriefcase /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Operação Financeira e Cobrança
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="text-3xl mb-4 text-emerald-400"><FaBalanceScale /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Jurídico e Contratos
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="text-3xl mb-4 text-emerald-400"><FaComments /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    Comercial e Atendimento
                  </h3>
                </div>
                <div className="glass-card p-6 bg-emerald-950/30">
                  <div className="text-3xl mb-4 text-emerald-400"><FaChartPie /></div>
                  <h3 className="text-xl font-bold text-emerald-500 mb-2">
                    BI e Relatórios
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16 text-[#E6E3B1]">
              Como o EG.OS funciona
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className="glass-card p-8 bg-emerald-900/30 text-center flex flex-col items-center">
                <span className="text-3xl mb-2 text-emerald-400"><FaClipboardList /></span>
                <h3 className="font-bold mb-2 text-emerald-400">1. Onboarding Digital</h3>
                <p className="text-[#E6E3B1] text-sm">Preencha um formulário rápido e pronto. Sem reuniões chatas.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-card p-8 bg-emerald-900/30 text-center flex flex-col items-center">
                <span className="text-3xl mb-2 text-emerald-400"><FaRobot /></span>
                <h3 className="font-bold mb-2 text-emerald-400">2. Automatizamos com IA</h3>
                <p className="text-[#E6E3B1] text-sm">Configuramos agentes para executar tarefas recorrentes.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-card p-8 bg-emerald-900/30 text-center flex flex-col items-center">
                <span className="text-3xl mb-2 text-emerald-400"><FaBrain /></span>
                <h3 className="font-bold mb-2 text-emerald-400">3. Operação Playbook</h3>
                <p className="text-[#E6E3B1] text-sm">Aplicamos processos padrão baseados em frameworks EG.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-card p-8 bg-emerald-900/30 text-center flex flex-col items-center">
                <span className="text-3xl mb-2 text-emerald-400"><FaChartArea /></span>
                <h3 className="font-bold mb-2 text-emerald-400">4. Relatórios & Insights</h3>
                <p className="text-[#E6E3B1] text-sm">Você recebe dashboards e acompanhamentos para crescer com inteligência.</p>
              </motion.div>
            </div>
            <div className="text-center mt-10">
              <Link href="#cta" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                Começar Agora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20 bg-[#0D221B]">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6 text-[#E6E3B1] text-center">
              Para quem o EG.OS foi criado
            </motion.h2>
            <ul className="space-y-4 text-lg text-emerald-400 list-disc list-inside">
              <li>MEIs, PMEs e autônomos com até R$50k/mês</li>
              <li>Quem precisa focar no negócio, não na operação</li>
              <li>Quem quer sistema, mas sem custo de estrutura gigante</li>
              <li>Quem quer tecnologia acessível, prática e pronta</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS POR BLOCOS - SCROLL HORIZONTAL */}
      <section ref={containerRef} className="h-[350vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-emerald-950">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.h2 className="text-4xl font-bold mb-12 text-[#E6E3B1] text-center">
              Serviços do EG.OS
            </motion.h2>
            <div className="relative">
              <motion.div style={{ x }} className="flex gap-8 pb-8">
                {allServices.map((s, i) => (
                  <div
                    key={s.title}
                    className={`glass-card min-w-[340px] max-w-xs bg-emerald-900/30 border-t-4 ${s.color} p-6 flex-shrink-0 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="text-3xl mb-4">{s.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-400 mb-2">{s.title}</h3>
                      <p className="text-[#E6E3B1] text-sm mb-4">{s.desc}</p>
                      <Link href={`/eg-os/${serviceSlug[s.title as keyof typeof serviceSlug] || ''}`} className="text-emerald-300 font-semibold text-base mt-2 hover:underline focus:underline transition-colors">
                        Ver mais
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="text-center mt-8">
              <Link href="#cta" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                Ver todos os serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section className="py-24 bg-[#0D221B]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-10 text-[#E6E3B1] text-center">
              Pacotes EG.OS
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Starter Pack */}
              <motion.div variants={fadeInUp} className="glass-card bg-emerald-900/30 rounded-2xl p-8 shadow-md border-2 border-emerald-400 relative">
                <span className="absolute top-4 right-4 bg-emerald-400 text-white text-xs px-3 py-1 rounded-full font-bold">Recomendado</span>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Starter Pack</h3>
                <ul className="space-y-3 mb-6">
                  {starterPack.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#E6E3B1]"><span>✓</span> {item}</li>
                  ))}
                </ul>
                <Link href="#cta" className="inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">Quero o Starter Pack</Link>
              </motion.div>
              {/* Growth Pack */}
              <motion.div variants={fadeInUp} className="glass-card bg-emerald-900/30 rounded-2xl p-8 shadow-md border-2 border-blue-400">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Growth Pack</h3>
                <ul className="space-y-3 mb-6">
                  {growthPack.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#E6E3B1]"><span>✓</span> {item}</li>
                  ))}
                </ul>
                <Link href="#cta" className="inline-block px-8 py-3 rounded-xl bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors">Quero o Growth Pack</Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POR QUE TERCEIRIZAR */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-10 text-[#E6E3B1] text-center">
              Por que terceirizar com o EG.OS?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass-card bg-emerald-900/30 rounded-2xl p-6 shadow-sm border-l-4 border-emerald-400">
                  <div className="font-bold text-lg text-emerald-400 mb-2">{item.problem}</div>
                  <div className="text-[#E6E3B1]">{item.solution}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-[#E6E3B1]">
              Pronto pra delegar o operacional e focar no que importa?
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contato" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
                Agendar Diagnóstico Gratuito
              </Link>
              <Link href="/contato" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-white text-emerald-700 border-2 border-emerald-100 hover:bg-emerald-100 transition-colors duration-300">
                Contratar Agora
              </Link>
            </div>
            <p className="text-emerald-200 text-lg">Missão: Tirar o peso do operacional dos ombros dos pequenos empreendedores — usando tecnologia, playbooks e IA.</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 