'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'

interface ROIData {
  investimento: number
  receitaMensal: number
  custosMensais: number
  periodoMeses: number
}

export default function CalculadoraROIPage() {
  const [formData, setFormData] = useState<ROIData>({
    investimento: 0,
    receitaMensal: 0,
    custosMensais: 0,
    periodoMeses: 12
  })

  const [showResults, setShowResults] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }))
    setShowResults(false)
  }

  const calculateROI = () => {
    const lucroTotal = (formData.receitaMensal - formData.custosMensais) * formData.periodoMeses
    const roi = ((lucroTotal - formData.investimento) / formData.investimento) * 100
    const paybackMeses = formData.investimento / (formData.receitaMensal - formData.custosMensais)
    
    return {
      roi: roi.toFixed(2),
      lucroTotal: lucroTotal.toFixed(2),
      paybackMeses: paybackMeses.toFixed(1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const results = calculateROI()

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3AC97B]">
              Calculadora de <span className="text-[#FFF4C7]">ROI</span>
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 max-w-3xl mx-auto">
              Calcule o retorno sobre investimento das suas campanhas de marketing digital
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Investimento Inicial (R$)
                  </label>
                  <input
                    type="number"
                    name="investimento"
                    value={formData.investimento}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Receita Mensal Esperada (R$)
                  </label>
                  <input
                    type="number"
                    name="receitaMensal"
                    value={formData.receitaMensal}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Custos Mensais (R$)
                  </label>
                  <input
                    type="number"
                    name="custosMensais"
                    value={formData.custosMensais}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#FFF4C7] mb-2">
                    Período (meses)
                  </label>
                  <input
                    type="number"
                    name="periodoMeses"
                    value={formData.periodoMeses}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] focus:outline-none focus:ring-2 focus:ring-[#3AC97B] focus:border-transparent"
                    placeholder="12"
                    min="1"
                    max="60"
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium">
                  Calcular ROI
                </button>
              </div>
            </form>

            {showResults && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 grid md:grid-cols-3 gap-6"
                >
                  <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6 text-center">
                    <h3 className="text-lg font-medium text-[#FFF4C7] mb-2">ROI</h3>
                    <p className="text-3xl font-bold text-[#3AC97B]">{results.roi}%</p>
                  </div>

                  <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6 text-center">
                    <h3 className="text-lg font-medium text-[#FFF4C7] mb-2">Lucro Total</h3>
                    <p className="text-3xl font-bold text-[#3AC97B]">
                      R$ {results.lucroTotal}
                    </p>
                  </div>

                  <div className="bg-[#09231B] border border-[#3AC97B]/20 rounded-xl p-6 text-center">
                    <h3 className="text-lg font-medium text-[#FFF4C7] mb-2">Payback</h3>
                    <p className="text-3xl font-bold text-[#3AC97B]">
                      {results.paybackMeses} meses
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 text-center"
                >
                  <Link href="/contato">
                    <button className="inline-block bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors font-medium">
                      Quero maximizar meu ROI
                    </button>
                  </Link>
                  <p className="mt-4 text-sm text-[#FFF4C7]/60">
                    Agende uma consultoria gratuita para descobrir como podemos potencializar seus resultados
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center text-[#FFF4C7]/60">
            <p className="text-sm">
              * Esta é uma calculadora simplificada. Para uma análise mais detalhada,
              considere agendar uma consultoria gratuita com nossa equipe.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 