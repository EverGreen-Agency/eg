'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import LeadForm from '@/components/LeadForm'

const templates = [
  {
    id: 'ai-prompts',
    title: 'Biblioteca de Prompts de IA',
    description: 'Coleção curada dos melhores prompts para ChatGPT, Claude e outros LLMs',
    category: 'Produtividade',
    difficulty: 'Iniciante',
    icon: '🤖',
    color: 'from-blue-500/20 to-cyan-500/20',
    features: [
      '200+ prompts testados',
      'Categorias organizadas',
      'Exemplos de uso',
      'Dicas de otimização'
    ]
  },
  {
    id: 'content-ai',
    title: 'Content Creation com IA',
    description: 'Sistema completo para criar e gerenciar conteúdo com ajuda de IA',
    category: 'Marketing',
    difficulty: 'Intermediário',
    icon: '📝',
    color: 'from-purple-500/20 to-pink-500/20',
    features: [
      'Calendário editorial',
      'Workflows de criação',
      'Templates de posts',
      'Análise de performance'
    ]
  },
  {
    id: 'ai-sales',
    title: 'Sales Copilot IA',
    description: 'Automatize e otimize seu processo de vendas com inteligência artificial',
    category: 'Vendas',
    difficulty: 'Avançado',
    icon: '💰',
    color: 'from-green-500/20 to-teal-500/20',
    features: [
      'Scripts de vendas',
      'Follow-up automático',
      'Análise de objeções',
      'Dashboard de métricas'
    ]
  },
  {
    id: 'ai-research',
    title: 'Research Lab IA',
    description: 'Conduza pesquisas de mercado e análise de concorrentes com IA',
    category: 'Estratégia',
    difficulty: 'Intermediário',
    icon: '🔍',
    color: 'from-orange-500/20 to-yellow-500/20',
    features: [
      'Templates de pesquisa',
      'Frameworks de análise',
      'Banco de dados competitivo',
      'Relatórios automáticos'
    ]
  }
]

export default function TemplatesNotionPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Templates <span className="text-gradient">Notion</span> de IA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collection dos melhores templates para otimizar seu workflow com inteligência artificial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="grid gap-6">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${template.color} flex items-center justify-center text-3xl`}>
                        {template.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-xl">{template.title}</h3>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            {template.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{template.description}</p>
                        <div className="space-y-2">
                          {template.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg className="w-5 h-5 text-eg-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Nível: {template.difficulty}
                          </span>
                          <button className="btn-primary text-sm">
                            Baixar Template
                          </button>
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
                  title="Receba Todos os Templates"
                  subtitle="Acesso imediato a todos os templates + atualizações futuras"
                  buttonText="Baixar Templates"
                  onSubmit={handleSubmit}
                />

                <div className="mt-8 glass-card p-6">
                  <h3 className="font-bold text-xl mb-4">
                    O que está incluído?
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Acesso vitalício a todos os templates',
                      'Atualizações gratuitas',
                      'Suporte via comunidade',
                      'Vídeos tutoriais de uso',
                      'Bônus: Guia de Prompts de IA'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-eg-green/10 text-eg-green flex items-center justify-center">
                          ✓
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              Como Usar os Templates
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '1. Faça o Download',
                  description: 'Após preencher o formulário, você receberá acesso imediato',
                  icon: '⬇️'
                },
                {
                  title: '2. Duplique no Notion',
                  description: 'Clique em "Duplicate" para adicionar à sua workspace',
                  icon: '📋'
                },
                {
                  title: '3. Personalize',
                  description: 'Adapte os templates ao seu workflow e comece a usar',
                  icon: '✨'
                }
              ].map((step, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 