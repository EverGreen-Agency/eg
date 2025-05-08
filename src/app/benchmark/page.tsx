'use client'

import { motion } from 'framer-motion'
import ParticlesBackground from '@/components/interactive/ParticlesBackground'
import { useState } from 'react'

export default function BenchmarkPage() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount >= 4) {
      setShowEasterEgg(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#0D221B] text-[#E6E3B1]">
      <ParticlesBackground className="py-32" variant="green">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-6">
              Benchmark
            </h1>
            <p className="text-2xl mb-8 text-emerald-400">
              Em desenvolvimento...
            </p>
            <div 
              className="cursor-pointer select-none"
              onClick={handleClick}
            >
              <motion.p 
                className="text-lg opacity-50 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clique aqui {clickCount > 0 && `${clickCount} vezes`}
              </motion.p>
            </div>

            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-6 bg-emerald-900/30 rounded-xl border border-emerald-400/20"
              >
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">
                  🎉 Easter Egg Encontrado! 🎉
                </h2>
                <p className="text-lg mb-4">
                  Você descobriu uma funcionalidade secreta! 
                </p>
                <p className="text-sm opacity-70">
                  Esta página está em desenvolvimento e será lançada em breve com métricas e benchmarks incríveis.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </ParticlesBackground>
    </main>
  )
} 