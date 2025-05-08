'use client'

import LeadForm from '@/components/LeadForm'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { LightBulbIcon, CpuChipIcon, MagnifyingGlassIcon, ChartBarIcon } from '@heroicons/react/24/outline'

// Benefícios da newsletter
const beneficios = [
  {
    icon: <LightBulbIcon className="h-8 w-8 text-[#3AC97B]" />,
    title: 'Ideias acionáveis',
    description: 'Growth hacks e estratégias de vendas testadas em campo'
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-[#3AC97B]" />,
    title: 'IA na prática',
    description: 'Ferramentas e prompts que realmente funcionam'
  },
  {
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-[#3AC97B]" />,
    title: 'Bastidores reais',
    description: 'Testes, métricas e operações sem filtro'
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-[#3AC97B]" />,
    title: 'Templates prontos',
    description: 'Frameworks e guias para aplicar hoje mesmo'
  }
]

export default function Newsletter() {
  const handleSubmit = async (formData: any) => {
    // Implementar integração com serviço de email
    console.log('Form submitted:', formData)
  }

  return (
    <main className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-6"
            >
              📬
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3AC97B] mb-6">
              Não Deixe para Terça
          </h1>
            <p className="text-xl text-[#FFF4C7]/80 mb-8 max-w-2xl mx-auto">
              A newsletter da Evergreen MKT que entrega crescimento real — hoje, não na semana que vem.
            </p>
            <p className="text-lg text-[#FFF4C7]/80 mb-8">
              Zero blá-blá-blá. Toda semana, direto da trincheira:<br />
              frameworks, bastidores, ferramentas e provocações táticas sobre growth, tech e IA.
            </p>
            <blockquote className="text-xl italic text-[#FFF4C7] mb-12">
              "Porque as melhores ideias não esperam o próximo sprint."
            </blockquote>
          </div>

          {/* Formulário Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto bg-[#09231B] rounded-2xl shadow-xl p-8 mb-16 border border-[#3AC97B]/20"
        >
            <h2 className="text-2xl font-bold text-[#3AC97B] mb-4">
              Receba insights toda semana
            </h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-full bg-[#09231B] border border-[#3AC97B]/20 text-[#FFF4C7] placeholder-[#FFF4C7]/50 focus:outline-none focus:ring-2 focus:ring-[#3AC97B]"
              />
              <button
                type="submit"
                className="w-full bg-[#3AC97B] text-[#09231B] px-6 py-3 rounded-full font-medium hover:bg-[#3AC97B]/90 transform hover:scale-105 transition-all"
              >
                Quero a newsletter agora
              </button>
              <p className="text-sm text-[#FFF4C7]/60 text-center italic">
                Prometemos não mandar spam. Só coisa aplicável. Com sorte, até engraçada.
              </p>
            </form>
        </motion.div>

          {/* Grid de Benefícios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-[#09231B] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#3AC97B]/20"
              >
                <div className="flex items-start space-x-4">
                  {beneficio.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFF4C7] mb-1">
                      {beneficio.title}
                    </h3>
                    <p className="text-[#FFF4C7]/80">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#3AC97B]">Não é pra todo mundo.</h2>
            <p className="text-lg text-[#FFF4C7]/80 mb-8">
              É pra quem quer aplicar, testar e crescer com consistência.<br />
              Quem lê, cresce. Quem ignora... deixa pra terça.
            </p>
            <button
              onClick={() => {
                const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                emailInput?.focus();
              }}
              className="bg-[#3AC97B] text-[#09231B] px-8 py-3 rounded-full font-medium hover:bg-[#3AC97B]/90 transform hover:scale-105 transition-all"
            >
              Inscrever com meu e-mail
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
} 