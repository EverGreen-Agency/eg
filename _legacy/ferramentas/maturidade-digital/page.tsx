'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'

interface Question {
  id: number
  text: string
  options: {
    value: number
    label: string
  }[]
  category: 'estrategia' | 'processos' | 'tecnologia' | 'cultura'
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Como sua empresa utiliza dados para tomada de decisão?',
    category: 'estrategia',
    options: [
      { value: 1, label: 'Não utilizamos dados de forma estruturada' },
      { value: 2, label: 'Utilizamos dados básicos de vendas e financeiro' },
      { value: 3, label: 'Temos dashboards e KPIs definidos' },
      { value: 4, label: 'Utilizamos análise preditiva e machine learning' }
    ]
  },
  {
    id: 2,
    text: 'Qual o nível de automação dos processos de marketing?',
    category: 'processos',
    options: [
      { value: 1, label: 'Processos majoritariamente manuais' },
      { value: 2, label: 'Algumas automações básicas' },
      { value: 3, label: 'Automação em diversos canais' },
      { value: 4, label: 'Automação avançada com IA' }
    ]
  },
  {
    id: 3,
    text: 'Como é a presença digital da sua empresa?',
    category: 'tecnologia',
    options: [
      { value: 1, label: 'Apenas redes sociais básicas' },
      { value: 2, label: 'Website e redes sociais ativos' },
      { value: 3, label: 'Presença omnichannel integrada' },
      { value: 4, label: 'Ecossistema digital completo' }
    ]
  },
  {
    id: 4,
    text: 'Qual o nível de adoção de novas tecnologias pela equipe?',
    category: 'cultura',
    options: [
      { value: 1, label: 'Resistência a mudanças' },
      { value: 2, label: 'Adoção lenta mas progressiva' },
      { value: 3, label: 'Boa aceitação de novidades' },
      { value: 4, label: 'Cultura de inovação ativa' }
    ]
  },
  {
    id: 5,
    text: 'Como é o processo de vendas digital?',
    category: 'processos',
    options: [
      { value: 1, label: 'Vendas principalmente offline' },
      { value: 2, label: 'Alguns canais digitais' },
      { value: 3, label: 'Funil de vendas digital estruturado' },
      { value: 4, label: 'Vendas digitais automatizadas e escaláveis' }
    ]
  }
]

interface Results {
  estrategia: number
  processos: number
  tecnologia: number
  cultura: number
  total: number
}

export default function MaturidadeDigitalPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<Results>({
    estrategia: 0,
    processos: 0,
    tecnologia: 0,
    cultura: 0,
    total: 0
  })

  const handleAnswer = (value: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    const newResults: Results = {
      estrategia: 0,
      processos: 0,
      tecnologia: 0,
      cultura: 0,
      total: 0
    }

    let totalQuestions = {
      estrategia: 0,
      processos: 0,
      tecnologia: 0,
      cultura: 0
    }

    questions.forEach(q => {
      const answer = answers[q.id] || 0
      newResults[q.category] += answer
      totalQuestions[q.category]++
    })

    // Calcular médias
    Object.keys(newResults).forEach(key => {
      if (key !== 'total') {
        newResults[key as keyof typeof newResults] = 
          (newResults[key as keyof typeof newResults] / totalQuestions[key as keyof typeof totalQuestions]) * 25
      }
    })

    newResults.total = (Object.values(newResults).reduce((a, b) => a + b, 0) - newResults.total) / 4

    setResults(newResults)
    setShowResults(true)
  }

  const getMaturityLevel = (score: number) => {
    if (score >= 90) return 'Referência Digital'
    if (score >= 70) return 'Avançado'
    if (score >= 50) return 'Intermediário'
    if (score >= 30) return 'Básico'
    return 'Iniciante'
  }

  const getRecommendation = (category: keyof Results, score: number) => {
    if (score < 50) {
      switch(category) {
        case 'estrategia':
          return 'Desenvolva um plano estratégico digital claro'
        case 'processos':
          return 'Comece a automatizar processos básicos'
        case 'tecnologia':
          return 'Invista em ferramentas digitais essenciais'
        case 'cultura':
          return 'Promova treinamentos e capacitação digital'
        default:
          return ''
      }
    }
    return 'Continue evoluindo e inovando'
  }

  return (
    <main className="min-h-screen bg-[#09231B] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Teste de <span className="text-[#3AC97B]">Maturidade Digital</span>
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 max-w-3xl mx-auto">
              Descubra o nível de maturidade digital da sua empresa e receba recomendações personalizadas
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8">
            {!showResults ? (
              <div className="space-y-8">
                <div className="flex justify-between text-sm text-[#FFF4C7]/60">
                  <span>Questão {currentQuestion + 1} de {questions.length}</span>
                  <span>{((currentQuestion + 1) / questions.length * 100).toFixed(0)}% completo</span>
                </div>

                <div className="h-2 bg-[#3AC97B]/10 rounded-full">
                  <div
                    className="h-full bg-[#3AC97B] rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length * 100)}%` }}
                  />
                </div>

                <h2 className="text-2xl font-bold mb-8 text-[#FFF4C7]">
                  {questions[currentQuestion].text}
                </h2>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-lg border border-[#3AC97B]/20 text-[#FFF4C7]/80 hover:border-[#3AC97B] hover:bg-[#3AC97B]/5 transition-colors duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-[#FFF4C7]">
                    Seu Nível de Maturidade Digital
                  </h2>
                  <div className="inline-block bg-[#3AC97B] text-[#09231B] px-6 py-3 rounded-xl text-xl font-bold">
                    {getMaturityLevel(75)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(results).map(([category, score]) => {
                    if (category === 'total') return null
                    return (
                      <div key={category} className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold capitalize mb-2 text-[#FFF4C7]">
                          {category}
                        </h3>
                        <div className="h-2 bg-[#3AC97B]/10 rounded-full mb-4">
                          <div
                            className="h-full bg-[#3AC97B] rounded-full"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                        <p className="text-sm text-[#FFF4C7]/60">
                          {getRecommendation(category as keyof Results, score)}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="text-center">
                  <Link href="/contato">
                    <button className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium">
                      Receber Plano de Evolução Digital
                    </button>
                  </Link>
                  <p className="mt-4 text-sm text-[#FFF4C7]/60">
                    Agende uma consultoria gratuita para descobrir como acelerar sua transformação digital
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 