'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Question {
  id: number
  text: string
  options: {
    text: string
    points: number
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "Você responde novos leads em quanto tempo?",
    options: [
      { text: "Menos de 1 hora", points: 3 },
      { text: "Entre 1h e 6h", points: 2 },
      { text: "Mais de 6 horas", points: 1 },
      { text: "Não sei/Não acompanho", points: 0 }
    ]
  },
  {
    id: 2,
    text: "Seu CRM está atualizado diariamente?",
    options: [
      { text: "Sim, sempre atualizado", points: 3 },
      { text: "Atualizo de vez em quando", points: 2 },
      { text: "Nem usamos CRM direito", points: 0 }
    ]
  },
  {
    id: 3,
    text: "Qual percentual dos seus leads são realmente qualificados?",
    options: [
      { text: "Mais de 60%", points: 3 },
      { text: "Entre 30% e 60%", points: 2 },
      { text: "Menos de 30%", points: 1 },
      { text: "Não sei medir isso", points: 0 }
    ]
  },
  {
    id: 4,
    text: "Você tem scripts e playbooks padronizados para vendas?",
    options: [
      { text: "Sim, todo o time usa", points: 3 },
      { text: "Tenho, mas poucos usam", points: 1 },
      { text: "Não temos scripts", points: 0 }
    ]
  },
  {
    id: 5,
    text: "Existem automações conectadas no seu processo comercial?",
    options: [
      { text: "Sim, para prospecção e follow-up", points: 3 },
      { text: "Só para e-mail marketing", points: 1 },
      { text: "Nenhuma automação", points: 0 }
    ]
  },
  {
    id: 6,
    text: "Seus vendedores seguem cadências de contato estruturadas?",
    options: [
      { text: "Sim, todos seguem processos", points: 3 },
      { text: "Mais ou menos, cada um faz de um jeito", points: 1 },
      { text: "Não temos cadência estruturada", points: 0 }
    ]
  }
]

interface DiagnosticResult {
  type: 'saudavel' | 'risco' | 'critico'
  title: string
  message: string
  icon: string
  color: string
  cta: string
}

const diagnosticResults: Record<DiagnosticResult['type'], DiagnosticResult> = {
  saudavel: {
    type: 'saudavel',
    title: 'Funil Saudável',
    message: 'Seu funil está no caminho certo! Você já opera com boas práticas de vendas e automação. Podemos te ajudar a acelerar ainda mais com inteligência artificial aplicada.',
    icon: '🚀',
    color: 'green',
    cta: 'Agendar Diagnóstico Avançado'
  },
  risco: {
    type: 'risco',
    title: 'Funil em Risco',
    message: 'Seu funil apresenta brechas que estão limitando sua escalabilidade. Pequenas correções podem gerar grandes ganhos de conversão.',
    icon: '⚠️',
    color: 'yellow',
    cta: 'Solicitar Análise Profunda da EG'
  },
  critico: {
    type: 'critico',
    title: 'Funil Crítico',
    message: 'Seu funil está deixando dinheiro na mesa — e seus concorrentes estão aproveitando. Hora de reestruturar antes que o custo de aquisição fique insustentável.',
    icon: '🚨',
    color: 'red',
    cta: 'Agendar Sessão de Diagnóstico'
  }
}

export default function ScannerFunilPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (points: number) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: points
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateResult = (): DiagnosticResult => {
    const totalPoints = Object.values(answers).reduce((a, b) => a + b, 0)
    const maxPoints = questions.length * 3
    const score = (totalPoints / maxPoints) * 100

    if (score >= 70) return diagnosticResults.saudavel
    if (score >= 40) return diagnosticResults.risco
    return diagnosticResults.critico
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <main className="min-h-screen bg-[#09231B] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3AC97B]">
              Scanner de Funil EG
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 max-w-3xl mx-auto">
              Quer descobrir onde seu funil de vendas está vazando leads e dinheiro?<br />
              Responda 6 perguntas rápidas — e receba um diagnóstico imediato.
            </p>
          </div>

          {/* Quiz Section */}
          {!showResults ? (
            <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-[#FFF4C7]/60">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm font-medium text-[#FFF4C7]/60">
                    {Math.round((currentQuestion / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-[#3AC97B]/10 rounded-full h-2">
                  <div
                    className="bg-[#3AC97B] h-2 rounded-full transition-all"
                    style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-8 text-[#FFF4C7]">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full text-left p-4 rounded-xl border border-[#3AC97B]/20 text-[#FFF4C7]/80 hover:border-[#3AC97B] hover:bg-[#3AC97B]/5 transition-all"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8"
            >
              {(() => {
                const result = calculateResult()
                return (
                  <div className="text-center">
                    <div className="text-6xl mb-6">{result.icon}</div>
                    <h2 className="text-3xl font-bold mb-4 text-[#3AC97B]">
                      {result.title}
                    </h2>
                    <p className="text-lg text-[#FFF4C7]/80 mb-8 max-w-2xl mx-auto">
                      {result.message}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Link
                        href="/contato"
                        className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium"
                      >
                        {result.cta}
                      </Link>
                      <button
                        onClick={resetQuiz}
                        className="bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/5 hover:border-[#3AC97B]/40 transition-colors"
                      >
                        Refazer Diagnóstico
                      </button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
