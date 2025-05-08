'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { RocketLaunchIcon, Cog6ToothIcon, CpuChipIcon, WrenchScrewdriverIcon, ChartBarIcon, UsersIcon, BeakerIcon, ServerStackIcon } from '@heroicons/react/24/outline'

const authorityLogos = [
  // Substitua pelos logos reais dos clientes/cases
  { name: 'TechCorp', src: '/logos/techcorp.svg', result: '+300% conversão' },
  { name: 'GrowthCo', src: '/logos/growthco.svg', result: '+500% vendas' },
  { name: 'IW Tour', src: '/logos/iwtour.svg', result: '-40% CAC' },
]

const systemBlocks = [
  {
    icon: <UsersIcon className="h-10 w-10 text-emerald-400 mx-auto mb-4" />,
    title: 'EG Growth',
    desc: 'Estratégias de aquisição e nutrição de leads B2B',
    color: 'text-emerald-400',
  },
  {
    icon: <Cog6ToothIcon className="h-10 w-10 text-blue-400 mx-auto mb-4" />,
    title: 'EG Tech',
    desc: 'Automação de processos e aplicação de IA',
    color: 'text-blue-400',
  },
  {
    icon: <BeakerIcon className="h-10 w-10 text-purple-400 mx-auto mb-4" />,
    title: 'EG Lab',
    desc: 'Desenvolvimento de produtos digitais e MVPs',
    color: 'text-purple-400',
  },
  {
    icon: <ServerStackIcon className="h-10 w-10 text-green-400 mx-auto mb-4" />,
    title: 'EG OS',
    desc: 'Operação enxuta para PMEs via BPO automatizado',
    color: 'text-green-400',
  },
]

const services = [
  {
    title: 'Estratégias de Growth',
    desc: 'Aceleração de vendas B2B previsível',
    icon: <RocketLaunchIcon className="h-10 w-10 text-emerald-400 mx-auto mb-4" />,
  },
  {
    title: 'Automação Comercial',
    desc: 'Redução de CAC e aumento de conversão com tech',
    icon: <Cog6ToothIcon className="h-10 w-10 text-blue-400 mx-auto mb-4" />,
  },
  {
    title: 'Inteligência Artificial aplicada',
    desc: 'IA em marketing, vendas e atendimento',
    icon: <CpuChipIcon className="h-10 w-10 text-purple-400 mx-auto mb-4" />,
  },
  {
    title: 'Desenvolvimento de Ferramentas',
    desc: 'Plataformas digitais e MVPs validáveis',
    icon: <WrenchScrewdriverIcon className="h-10 w-10 text-emerald-400 mx-auto mb-4" />,
  },
  {
    title: 'Operação BPO Inteligente',
    desc: 'Backoffice finance, comercial e jurídico automatizado',
    icon: <ChartBarIcon className="h-10 w-10 text-green-400 mx-auto mb-4" />,
  },
]

const cases = [
  {
    logo: '/logos/techcorp.svg',
    client: 'TechCorp | SaaS',
    challenge: 'Baixa conversão',
    solution: 'Growth Engine + Automação Tech',
    result: '+300% em conversão | ROI positivo em 3 meses',
  },
  {
    logo: '/logos/growthco.svg',
    client: 'GrowthCo | Indústria',
    challenge: 'Vendas estagnadas',
    solution: 'EG Growth + EG Tech',
    result: '+500% em vendas',
  },
  {
    logo: '/logos/iwtour.svg',
    client: 'IW Tour | Turismo',
    challenge: 'CAC alto',
    solution: 'Automação Comercial + IA',
    result: '-40% no CAC',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#09231B] via-[#09231B] to-[#3AC97B]/10">
      {/* HERO */}
      <section className="relative py-32 bg-gradient-to-br from-[#09231B] via-[#09231B] to-[#3AC97B]/20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-[#FFF4C7]">
              Cresça de Forma Inteligente. Venda com Tecnologia. Escale com IA.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-[#FFF4C7]/80">
              Somos a força por trás do crescimento previsível de negócios B2B.<br />
              Implementamos sistemas de marketing, vendas e tecnologia que geram receita real — com inteligência artificial e automação.
            </motion.p>
            <motion.blockquote variants={fadeInUp} className="text-2xl italic text-[#3AC97B] bg-[#09231B]/80 p-6 rounded-2xl max-w-3xl mx-auto mb-8">
              Tecnologia que conecta. Growth que escala. IA que executa.
            </motion.blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-[#3AC97B] text-[#09231B] hover:bg-[#3AC97B]/90 transition-colors duration-300 shadow-lg">
                Agendar Diagnóstico de Receita
              </Link>
              <Link href="/autoridade" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-[#09231B] text-[#FFF4C7] border border-[#3AC97B] hover:bg-[#09231B]/80 transition-colors duration-300">
                Ver Casos Reais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCO DE AUTORIDADE 
      <section className="py-16 bg-[#0D221B] border-b border-emerald-900">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-2xl md:text-3xl font-bold mb-8 text-emerald-200">
            Trusted by Businesses Focused on Growth
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {authorityLogos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-center">
                <img src={logo.src} alt={logo.name} className="h-12 mb-2" />
                <span className="text-emerald-400 text-sm font-semibold">{logo.result}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-emerald-200 text-lg">
            <span>🔹 +300% em conversão para TechCorp</span>
            <span>🔹 +500% em vendas para GrowthCo</span>
            <span>🔹 -40% no CAC para IW Tour</span>
          </div>
        </div>
      </section>
        */}
      {/* SISTEMA EVERGREEN */}
      <section className="py-24 bg-gradient-to-br from-[#09231B] via-[#09231B] to-[#3AC97B]/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-[#FFF4C7] text-center">
            Nossa Metodologia:<br />Da Aquisição ao Crescimento com Inteligência.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemBlocks.map((block) => (
              <div key={block.title} className="glass-card p-8 bg-[#09231B]/80 border border-[#3AC97B]/20 text-center flex flex-col items-center">
                <div>{block.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#3AC97B]">{block.title}</h3>
                <p className="text-[#FFF4C7]/80 text-sm">{block.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#FFF4C7]/80 text-lg text-center mt-8">Tudo integrado. Tudo focado em gerar receita real.</p>
        </div>
      </section>

      {/* SERVIÇOS EM CARDS */}
      <section className="py-24 bg-[#09231B]">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-[#FFF4C7] text-center">
            Nossos Serviços
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-8 bg-[#09231B]/80 border border-[#3AC97B]/20 text-center flex flex-col items-center">
                <div className="text-4xl mb-4 text-[#3AC97B]">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#3AC97B]">{service.title}</h3>
                <p className="text-[#FFF4C7]/80 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/servicos" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-[#3AC97B] text-[#09231B] hover:bg-[#3AC97B]/90 transition-colors duration-300 shadow-lg">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCO DE PROVAS/CASES 
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-[#E6E3B1] text-center">
            Resultados Reais. Clientes Reais.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.client} className="glass-card p-8 bg-emerald-900/30 text-center flex flex-col items-center">
                <img src={c.logo} alt={c.client} className="h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-emerald-400">{c.client}</h3>
                <p className="text-[#E6E3B1] text-sm mb-2"><strong>Desafio:</strong> {c.challenge}</p>
                <p className="text-[#E6E3B1] text-sm mb-2"><strong>Solução:</strong> {c.solution}</p>
                <p className="text-2xl font-bold text-emerald-200 mt-2">{c.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/cases" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 shadow-lg">
              Ver Mais Cases
            </Link>
          </div>
        </div>
      </section>
        */}
      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-[#09231B] via-[#09231B] to-[#3AC97B]/20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl font-bold mb-6 text-[#FFF4C7]">
            Pronto para Escalar sua Receita de Forma Inteligente?
          </motion.h2>
          <p className="text-[#FFF4C7]/80 text-lg mb-8">
            Vamos desenhar o sistema que vai destravar seu crescimento.<br />Agende agora um Diagnóstico Estratégico gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href="/contato" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-[#3AC97B] text-[#09231B] hover:bg-[#3AC97B]/90 transition-colors duration-300 shadow-lg">
              Agendar Diagnóstico de Receita
            </Link>
            <Link href="/contato" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-[#09231B] text-[#FFF4C7] border border-[#3AC97B] hover:bg-[#09231B]/80 transition-colors duration-300">
              Falar com um Especialista
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 