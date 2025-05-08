'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Image from 'next/image'
import Link from 'next/link'
import { Cog6ToothIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, ArrowTrendingUpIcon, NoSymbolIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const founderCards = [
  {
    nome: 'Eduardo Ferreira de Mattos',
    cargo: 'CEO',
    foto: '/images/eduardo.jpg',
    tagline: 'Engenheiro por formação, executor por vocação.',
    bio: 'Eduardo lidera a Evergreen MKT com foco em crescimento previsível e cultura de resultado. Tem background em processos, vendas e marketing orientado a dados. Já passou por ambientes de alta exigência como o Fasano e agora aplica sua visão estratégica na construção da EG.',
    skills: [
      'Growth Strategy',
      'SPIN Selling',
      'Lean Six Sigma (White/Yellow Belt)',
      'Funis de Vendas com IA',
      'Prompt Engineering & Web Dev',
    ],
    frase: 'Se não mexe no gráfico, a gente nem começa.',
  },
  {
    nome: 'Gustavo Fugulin Soares da Silva',
    cargo: 'CTO',
    foto: '/images/gustavo.jpg',
    tagline: 'Cérebro técnico por trás da arquitetura EG Tech.',
    bio: 'Gustavo é o responsável por transformar a visão em tecnologia real. Especialista em IA, automações e análise de dados, lidera o desenvolvimento das soluções que fazem a EG entregar resultado com escala.',
    skills: [
      'Machine Learning & Deep Learning',
      'Análise preditiva e projetos IOT',
      'Software Dev (Full-stack & Mobile)',
      'Automação de Processos',
      'Treinamento de Modelos',
    ],
    frase: 'Tecnologia boa é aquela que some — e só aparece no resultado final.',
  },
]

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section com Gradiente e Blur */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3AC97B]/10 to-[#3AC97B]/20 pointer-events-none" />
        <div className="absolute inset-y-0 -left-[50%] w-[100%] bg-[#3AC97B]/10 rotate-12 transform origin-top-right" />
        
        <section className="relative pt-24 pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4"
          >
            <motion.div 
              variants={fadeInUp}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFF4C7]">
                Pessoas por trás da Evergreen
              </h1>
              <p className="text-2xl font-bold text-[#FFF4C7] mb-6">
                Mais do que fundadores. Somos executores.
              </p>
              <p className="text-xl text-[#FFF4C7]/80 leading-relaxed mb-8">
                Criamos a EG para construir o tipo de empresa que queríamos contratar.<br />
                Combinamos tecnologia, marketing e operação pra transformar ambição em execução.
              </p>
              <blockquote className="text-xl italic text-[#FFF4C7] bg-[#09231B]/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#3AC97B]/20">
                "Visão sem ação é só um sonho. A gente acordou pra fazer acontecer."
              </blockquote>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Founders Section com Cards Modernos */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {founderCards.map((founder, index) => (
              <motion.div
                key={founder.nome}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-[#09231B] rounded-2xl shadow-xl overflow-hidden border border-[#3AC97B]/20"
              >
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-[#3AC97B] to-[#3AC97B]/80 p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#09231B] shadow-lg">
                      <Image
                        src={founder.foto}
                        alt={founder.nome}
                        fill
                        sizes="(max-width: 768px) 96px, 96px"
                        className="object-cover"
                        priority={true}
                        quality={100}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#3AC97B] bg-[#09231B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {founder.nome.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-col mb-1">
                        <h3 className="text-2xl font-bold text-[#FFF4C7] leading-tight mb-1">
                          {founder.nome}
                        </h3>
                        <p className="text-[#FFF4C7]/80 font-medium text-lg">
                          {founder.cargo}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-[#FFF4C7] mt-6 italic">
                    {founder.tagline}
                  </p>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-8">
                  <p className="text-[#FFF4C7]/80 leading-relaxed mb-8">
                    {founder.bio}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#3AC97B]">
                        <Cog6ToothIcon className="h-6 w-6 text-[#3AC97B]" /> Skills
                      </h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {founder.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-[#FFF4C7]/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3AC97B] flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#3AC97B]/20">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#3AC97B]">
                        <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#3AC97B]" /> Frase de guerra
                      </h4>
                      <p className="text-[#FFF4C7] italic bg-[#09231B]/50 p-4 rounded-xl border border-[#3AC97B]/20">
                        "{founder.frase}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section com Visual Moderno */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#FFF4C7] inline-flex items-center gap-3">
                <MagnifyingGlassIcon className="h-7 w-7 text-[#3AC97B]" /> Nossa Cultura
              </h2>
              <p className="text-2xl font-bold text-[#FFF4C7] mb-4">
                Aqui, ideias valem. Mas execução vale mais.
              </p>
              <p className="text-xl text-[#FFF4C7]/80 leading-relaxed">
                Valorizamos quem pensa grande, fala pouco e entrega muito.<br />
                A gente acredita em autonomia com responsabilidade, inovação com propósito, e crescimento com consistência.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#09231B] rounded-2xl p-8 shadow-lg border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#3AC97B]">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-[#3AC97B]" /> Temos fome de:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Resolver o problema certo',
                    'Criar ferramentas que escalam',
                    'Ver clientes crescendo junto',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#FFF4C7]/80">
                      <span className="w-2 h-2 rounded-full bg-[#3AC97B] mt-2 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#09231B] rounded-2xl p-8 shadow-lg border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#3AC97B]">
                  <NoSymbolIcon className="h-6 w-6 text-[#3AC97B]" /> Não temos tempo pra:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Ego',
                    'Complexidade desnecessária',
                    'Marketing vazio',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#FFF4C7]/80">
                      <span className="w-2 h-2 rounded-full bg-[#3AC97B] mt-2 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action com Design Premium */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09231B] to-[#09231B]/90" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-[#09231B] rounded-2xl p-12 shadow-xl border border-[#3AC97B]/20"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#FFF4C7] flex items-center justify-center gap-3">
                <GlobeAltIcon className="h-7 w-7 text-[#3AC97B]" /> Faça parte desse florestamento
              </h2>
              <p className="text-xl text-[#FFF4C7]/80 leading-relaxed mb-8">
                Se você está lendo isso, ainda dá tempo de entrar na base.<br />
                Estamos escolhendo os parceiros certos para crescer junto.<br />
                Aqui, cada cliente é co-criador da floresta que estamos construindo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Quero ser parte da floresta
                </Link>
                <Link
                  href="/autoridade"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#FFF4C7] bg-[#09231B] hover:bg-[#09231B]/80 border border-[#3AC97B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Casos
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 