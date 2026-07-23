'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-eg-offwhite to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-eg-green/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforme seu Negócio com{' '}
              <motion.span 
                className="text-gradient"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Growth
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Autoridade em growth, tecnologia e IA para escalar resultados reais
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Agendar Diagnóstico
            </motion.button>
            <motion.button 
              className="btn-secondary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Ver Cases de Sucesso
            </motion.button>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            <motion.div 
              variants={fadeInUp} 
              className="glass-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-4xl font-bold text-gradient">300%</h3>
              <p className="text-gray-600">Crescimento Médio</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="glass-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-4xl font-bold text-gradient">50+</h3>
              <p className="text-gray-600">Clientes Atendidos</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="glass-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-4xl font-bold text-gradient">24/7</h3>
              <p className="text-gray-600">Suporte Dedicado</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="glass-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-4xl font-bold text-gradient">100%</h3>
              <p className="text-gray-600">Satisfação</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 1, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-eg-green rounded-full p-1"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-eg-green rounded-full mx-auto"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 