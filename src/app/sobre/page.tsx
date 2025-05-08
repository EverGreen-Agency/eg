'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import Link from 'next/link'
import { SparklesIcon, ClockIcon, PresentationChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function SobrePage() {
  return (
    <section className="min-h-screen py-20 bg-[#09231B] text-[#FFF4C7]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Seção Hero */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-[#3AC97B]">Evergreen MKT</span>
            </h1>
            <p className="text-xl text-[#FFF4C7]/80 mb-6">
              Somos a força por trás do crescimento previsível das empresas mais ambiciosas do mercado B2B. Unimos Tecnologia, IA, estratégia e execução pra transformar silos em máquinas de receita.
            </p>
            <p className="text-xl font-medium text-[#FFF4C7] mb-8 italic">
              "Acreditamos que previsibilidade não é uma promessa — é uma arquitetura. E cada bloco começa com intenção, tecnologia e gente boa."
            </p>
            <Link 
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Quero conversar com a EG
            </Link>
          </motion.div>

          {/* Missão e Visão */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="glass-card p-8 bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#3AC97B]">Nossa Missão</h3>
              <p className="text-[#FFF4C7]/80">
                Transformar empresas em ecossistemas de crescimento sustentável, unindo estratégia, automação e inteligência artificial para escalar resultados com previsibilidade.
              </p>
            </div>
            <div className="glass-card p-8 bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-[#3AC97B]">Nossa Visão</h3>
              <p className="text-[#FFF4C7]/80">
                Ser a referência global em soluções integradas de growth, IA e operações de receita para empresas B2B.
              </p>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-[#3AC97B]">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Inovação',
                  description: 'Fazemos o que ninguém fez, antes que todos queiram.',
                },
                {
                  title: 'Resultados',
                  description: 'Se não gera ROI, não tem espaço aqui.',
                },
                {
                  title: 'Transparência',
                  description: 'Comunicação real. Sem enrolação. Sem bullshit.',
                },
              ].map((valor, index) => (
                <div key={index} className="glass-card p-6 hover-lift bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-[#3AC97B]">{valor.title}</h3>
                  <p className="text-[#FFF4C7]/80">{valor.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Semente Evergreen */}
          <motion.div variants={fadeInUp} className="mt-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-[#3AC97B]">
              <SparklesIcon className="h-7 w-7 text-[#3AC97B]" /> Semente Evergreen
            </h2>
            <div className="glass-card p-8 bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
              <p className="text-xl font-medium text-[#FFF4C7] mb-6">
                Toda floresta começa com uma semente.<br />
                A nossa é feita de convicção, execução e ambição sem freio.
              </p>
              <p className="text-[#FFF4C7]/80 mb-8">
                Mesmo sendo uma equipe enxuta, já criamos soluções que melhoraram performance comercial, automatizaram processos críticos e aumentaram a previsibilidade de receita de quem confia na gente.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#3AC97B]">Nosso plano é simples:</h3>
                <ol className="list-decimal list-inside space-y-2 text-[#FFF4C7]/80">
                  <li>Escolher os primeiros clientes certos</li>
                  <li>Entregar absurdamente bem</li>
                  <li>Tornar cada projeto uma prova viva do que somos capazes</li>
                  <li>Crescer junto. Com consistência. Com visão.</li>
                </ol>
              </div>
              <p className="text-lg font-medium text-[#FFF4C7]">
                Porque autoridade não é comprada.<br />
                É construída. E a gente já começou.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp} className="mt-24">
            <h2 className="text-3xl font-bold mb-16 flex items-center gap-2 text-[#3AC97B]">
              <ClockIcon className="h-7 w-7 text-[#3AC97B]" /> Nossa jornada até aqui
            </h2>
            <div className="relative">
              {/* Linha em Z */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#3AC97B]/20 hidden md:block" />
              
              <div className="space-y-16">
                {[
                  { periodo: 'Q1 2024', evento: 'Fundação da Evergreen MKT' },
                  { periodo: 'Q2 2024', evento: 'Primeiros projetos com IA aplicada em funil de vendas' },
                  { periodo: 'Q3 2024', evento: 'Sistema EG Systems validado com PMEs em expansão' },
                  { periodo: 'Q4 2024', evento: 'Início da construção da marca como autoridade digital' },
                  { periodo: 'Q1 2025', evento: 'Busca de expansão de mercados' },
                ].map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                    {/* Linha diagonal conectora (visível apenas em desktop) */}
                    <div className={`absolute hidden md:block h-0.5 bg-gradient-to-r from-[#3AC97B]/20 to-[#3AC97B]/30 w-8 top-1/2 transform -translate-y-1/2 
                      ${index % 2 === 0 ? 'left-[calc(50%-4rem)]' : 'right-[calc(50%-4rem)]'}`} />
                    
                    {/* Círculo central */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#3AC97B] border-4 border-[#09231B] 
                      hidden md:block transition-transform hover:scale-150 z-10`} />
                    
                    {/* Conteúdo */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} text-center`}>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div className="glass-card p-6 hover-lift transition-all duration-300 inline-block bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
                          <span className="text-[#3AC97B] font-bold block mb-2">{item.periodo}</span>
                          <span className="text-[#FFF4C7]/80">{item.evento}</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Espaço vazio do outro lado para manter o layout em Z */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action Final */}
          <motion.div variants={fadeInUp} className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2 text-[#3AC97B]">
              <GlobeAltIcon className="h-7 w-7 text-[#3AC97B]" /> Faça parte desse florestamento
            </h2>
            <div className="glass-card p-8 bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-xl">
              <p className="text-xl text-[#FFF4C7] mb-8">
                Se você está lendo isso, ainda dá tempo de entrar na base.<br />
                Estamos escolhendo os parceiros certos para crescer junto.<br />
                Aqui, cada cliente é co-criador da floresta que estamos construindo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contato"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Quero ser parte da floresta
                </Link>
                <Link 
                  href="/autoridade"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#FFF4C7] bg-[#09231B] hover:bg-[#09231B]/80 border border-[#3AC97B]/20 transition-colors shadow-lg hover:shadow-xl"
                >
                  Ver Casos
                </Link>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
} 