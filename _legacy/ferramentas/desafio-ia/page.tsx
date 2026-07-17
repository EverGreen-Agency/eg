'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import LeadForm from '@/components/LeadForm'

const programContent = [
  {
    day: 1,
    title: 'Fundamentos da IA',
    description: 'Entenda os conceitos básicos e como a IA está transformando os negócios',
    tools: ['ChatGPT', 'Claude', 'Bard'],
    icon: '🤖'
  },
  {
    day: 2,
    title: 'IA na Produtividade',
    description: 'Aumente sua produtividade com assistentes virtuais e automação',
    tools: ['Notion AI', 'Otter.ai', 'Motion'],
    icon: '⚡'
  },
  {
    day: 3,
    title: 'IA no Marketing',
    description: 'Crie conteúdo e campanhas otimizadas com inteligência artificial',
    tools: ['Copy.ai', 'Jasper', 'Midjourney'],
    icon: '📢'
  },
  {
    day: 4,
    title: 'IA nas Vendas',
    description: 'Automatize processos e potencialize suas conversões',
    tools: ['SalesGPT', 'Drift', 'Gong'],
    icon: '💰'
  },
  {
    day: 5,
    title: 'IA na Análise de Dados',
    description: 'Extraia insights valiosos com análise preditiva',
    tools: ['Obviously AI', 'DataRobot', 'RapidMiner'],
    icon: '📊'
  },
  {
    day: 6,
    title: 'IA no Atendimento',
    description: 'Implemente chatbots e automação de suporte',
    tools: ['Intercom', 'MobileMonkey', 'ManyChat'],
    icon: '💬'
  },
  {
    day: 7,
    title: 'Projeto Final',
    description: 'Integre múltiplas ferramentas em um caso real',
    tools: ['Zapier', 'Make', 'n8n'],
    icon: '🎯'
  }
]

const benefits = [
  {
    title: 'Mentoria Especializada',
    description: 'Acompanhamento diário com especialistas em IA',
    icon: '👨‍🏫'
  },
  {
    title: 'Casos Práticos',
    description: 'Aprenda com exemplos reais de implementação',
    icon: '📚'
  },
  {
    title: 'Comunidade Exclusiva',
    description: 'Networking com outros profissionais',
    icon: '👥'
  },
  {
    title: 'Certificado',
    description: 'Receba um certificado de conclusão',
    icon: '🎓'
  }
]

export default function DesafioIAPage() {
  const handleSubmit = async (formData: any) => {
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block bg-eg-green/10 text-eg-green px-4 py-2 rounded-full text-sm font-medium mb-4">
              Programa Gratuito
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Desafio 7 Dias de <span className="text-gradient">IA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Domine as principais ferramentas de IA do mercado e transforme
              sua produtividade em apenas uma semana
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-bold">
                O que você vai aprender
              </h2>
              <div className="space-y-6">
                {programContent.map((day) => (
                  <div
                    key={day.day}
                    className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-eg-green/20 to-blue-500/20 flex items-center justify-center text-2xl">
                        {day.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">
                          Dia {day.day}: {day.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.tools.map((tool) => (
                            <span
                              key={tool}
                              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="sticky top-8">
                <LeadForm
                  title="Inscreva-se Gratuitamente"
                  subtitle="Vagas limitadas para a próxima turma"
                  buttonText="Garantir Minha Vaga"
                  onSubmit={handleSubmit}
                />

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="bg-white p-4 rounded-xl shadow-sm"
                    >
                      <div className="text-2xl mb-2">{benefit.icon}</div>
                      <h3 className="font-medium mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              Perguntas Frequentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                {
                  q: 'Preciso ter experiência prévia com IA?',
                  a: 'Não, o programa foi desenhado para iniciantes até avançados'
                },
                {
                  q: 'Quanto tempo preciso dedicar por dia?',
                  a: 'Recomendamos 1-2 horas por dia para melhor aproveitamento'
                },
                {
                  q: 'Recebo certificado ao final?',
                  a: 'Sim, após concluir todas as atividades do desafio'
                },
                {
                  q: 'O conteúdo fica disponível após o desafio?',
                  a: 'Sim, você terá acesso vitalício a todo o material'
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 