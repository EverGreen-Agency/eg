'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CpuChipIcon, Cog6ToothIcon, BeakerIcon, ChatBubbleLeftRightIcon, ChartBarIcon, GlobeAltIcon, WrenchScrewdriverIcon, MagnifyingGlassIcon, LightBulbIcon, BoltIcon, RocketLaunchIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Desenvolvimento Personalizado',
    icon: <Cog6ToothIcon className="h-8 w-8 text-blue-500" />,
    description: 'Plataformas, integrações e sistemas construídos do zero.',
    gradient: 'from-blue-400/10 via-cyan-400/10 to-blue-400/10'
  },
  {
    title: 'Automações de Processos',
    icon: <BoltIcon className="h-8 w-8 text-emerald-500" />,
    description: 'Redução de tarefas manuais com RPA, IA e fluxos inteligentes.',
    gradient: 'from-emerald-400/10 via-blue-400/10 to-emerald-400/10'
  },
  {
    title: 'IA e Machine Learning',
    icon: <CpuChipIcon className="h-8 w-8 text-purple-500" />,
    description: 'Implementação de modelos para análise, predição e decisão.',
    gradient: 'from-purple-400/10 via-violet-400/10 to-purple-400/10'
  },
  {
    title: 'Chatbots AI',
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-amber-500" />,
    description: 'Atendimento automático, SDR digital, vendas automáticas.',
    gradient: 'from-amber-400/10 via-yellow-400/10 to-amber-400/10'
  },
  {
    title: 'Análises Preditivas e BI',
    icon: <ChartBarIcon className="h-8 w-8 text-rose-500" />,
    description: 'De dados brutos a dashboards de decisão.',
    gradient: 'from-rose-400/10 via-pink-400/10 to-rose-400/10'
  },
  {
    title: 'IoT e Clones AI',
    icon: <GlobeAltIcon className="h-8 w-8 text-cyan-500" />,
    description: 'Integração de dispositivos e criação de avatares digitais.',
    gradient: 'from-cyan-400/10 via-blue-400/10 to-cyan-400/10'
  },
  {
    title: 'Suporte e Treinamento',
    icon: <WrenchScrewdriverIcon className="h-8 w-8 text-teal-500" />,
    description: 'Operação garantida e capacitação do seu time.',
    gradient: 'from-teal-400/10 via-emerald-400/10 to-teal-400/10'
  }
]

const steps = [
  {
    title: 'Diagnóstico Profundo',
    description: 'Mapeamos o processo real — antes de pensar em tecnologia.',
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-blue-200" />
  },
  {
    title: 'Design de Solução Inteligente',
    description: 'Construímos o projeto focado em resultado, não em feature desnecessária.',
    icon: <LightBulbIcon className="h-8 w-8 text-yellow-200" />
  },
  {
    title: 'Sprint de Implementação',
    description: 'Agilidade extrema pra colocar o sistema pra rodar o mais rápido possível.',
    icon: <BoltIcon className="h-8 w-8 text-blue-300" />
  },
  {
    title: 'Integração e Escala',
    description: 'Tecnologia viva: conecta, aprende e cresce junto com seu negócio.',
    icon: <RocketLaunchIcon className="h-8 w-8 text-emerald-200" />
  }
]

const applications = [
  'Automação de prospecção e qualificação de leads para vendas complexas',
  'Criação de bots inteligentes para suporte e atendimento comercial',
  'Plataformas de automação agrícola (controle de safra via IoT)',
  'Painéis de BI integrados ao CRM e ERPs para tomada de decisão em tempo real',
  'Desenvolvimento de clones AI para pré-venda em e-commerce e marketplaces'
]

const targetAudience = [
  'Empresas que querem escalar sem aumentar headcount',
  'Negócios que precisam tomar decisões mais rápidas e baseadas em dados',
  'Times de vendas, marketing e operação que querem automatizar processos sem complicação',
  'Fundadores que querem criar novas frentes digitais sem virar reféns de devs internos'
]

export default function EGTechPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 animate-gradient-slow overflow-hidden">
        {/* Fundo de partículas ou gradiente */}
        <div className="absolute inset-0 z-0">
          {/* Se usar partículas, coloque aqui */}
          {/* <ParticlesBackground variant="tech" /> */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,197,253,0.1),transparent_50%)]" />
        </div>
        {/* Conteúdo principal */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-6xl font-bold mb-6 text-blue-100">
                EG Tech
              </h1>
              <h2 className="text-3xl font-bold mb-8 text-blue-200">
                Automatizamos seu negócio. Do dado à decisão.
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Tecnologia que vende. IA que executa.<br />
                Conectamos, automatizamos e escalamos processos — sem frescura.
              </p>
              <blockquote className="text-2xl italic text-blue-200 bg-blue-900/30 p-6 rounded-2xl max-w-3xl mx-auto">
                "Seus processos. Só que automáticos, inteligentes e mais rápidos."
              </blockquote>
              <div className="mt-10">
                <Link
                  href="/contato"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors duration-300"
                >
                  Quero Automatizar Minha Empresa
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O que a EG Tech Faz */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-8 text-zinc-900">
                O que a EG Tech Faz
              </h2>
              <p className="text-xl text-zinc-600 mb-6">
                A EG Tech transforma operações manuais, lentas e caras em sistemas automáticos, inteligentes e escaláveis.
              </p>
              <p className="text-xl text-zinc-600">
                Seja marketing, vendas, suporte, financeiro ou campo — nós mapeamos, integramos e automatizamos com tecnologia sob medida.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 text-zinc-900">
                Nossos Serviços Tech
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{service.icon}</span>
                      <h3 className="text-xl font-bold text-zinc-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-zinc-600">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16 text-blue-100">
              Como Funciona a Entrega EG Tech
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="p-8 bg-blue-800/50 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-blue-200 mb-4">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aplicações Reais */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16 text-zinc-900">
              Exemplos de Aplicações Reais
            </motion.h2>
            <div className="space-y-4">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-6 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors duration-300"
                >
                  <CheckCircleIcon className="h-6 w-6 text-emerald-500" />
                  <p className="text-lg text-zinc-700">{app}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para Quem */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16 text-zinc-900">
              Para quem a EG Tech foi feita
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="text-lg text-zinc-700">{audience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-blue-100">
                Pronto pra construir o sistema que vai escalar seu negócio?
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Seus concorrentes ainda estão presos nos mesmos processos manuais.<br />
                Você pode operar mais rápido, mais inteligente e com mais resultado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors duration-300"
                >
                  Quero Diagnóstico Tech
                </Link>
                <Link
                  href="/autoridade"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-blue-100 text-blue-100 hover:bg-blue-800 transition-colors duration-300"
                >
                  Ver Soluções Aplicadas
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 