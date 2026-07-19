'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { SparklesIcon, GlobeAltIcon, AcademicCapIcon, CheckCircleIcon, StarIcon, BuildingLibraryIcon, LockOpenIcon, GiftIcon } from '@heroicons/react/24/outline'
import CTASection from '@/components/CTASection'

export default function NiveisDeCliente() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, -300, -600, -900, -1200])

  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-[#3AC97B] mb-6"
          >
            EverGreen Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#FFF4C7] mb-8"
          >
            Crescimento é jornada. E cada jornada tem níveis.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#FFF4C7]/80 mb-12"
          >
            Na EverGreen, acreditamos que cada cliente é único — mas todos percorrem um caminho em comum: a jornada de evolução.
            Quanto mais você avança, mais ferramentas, suporte e poder de execução você desbloqueia.
          </motion.p>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl italic text-[#3AC97B] mb-12"
          >
            "Não se trata de onde você começa. Se trata de até onde está disposto a crescer."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Quero começar minha jornada
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]/80">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#3AC97B] mb-12 text-center"
          >
            Como funciona
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <div className="mb-4 flex justify-center"><SparklesIcon className="h-8 w-8 text-[#3AC97B]" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFF4C7]">Semente</h3>
              <p className="text-[#FFF4C7]/80">Implantando os primeiros sistemas de crescimento e tecnologia.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <div className="mb-4 flex justify-center"><GlobeAltIcon className="h-8 w-8 text-[#3AC97B]" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFF4C7]">Floresta Jovem</h3>
              <p className="text-[#FFF4C7]/80">Processos maduros, receita previsível e execução alinhada.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <div className="mb-4 flex justify-center"><AcademicCapIcon className="h-8 w-8 text-[#3AC97B]" /></div>
              <h3 className="text-xl font-semibold mb-2 text-[#FFF4C7]">Floresta Milenar</h3>
              <p className="text-[#FFF4C7]/80">Dominando aquisição, retenção e expansão com inteligência e escala.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Níveis Detalhados */}
      <section 
        ref={containerRef} 
        className="h-[400vh] relative"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#09231B]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#3AC97B] mb-12 text-center"
            >
              A Jornada EG
            </motion.h2>

            {/* Container de Scroll Horizontal */}
            <div className="relative">
              {/* Scroll Container */}
              <motion.div 
                style={{ x }}
                className="flex gap-16 pb-8"
              >
                {/* Nível 1 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-[#09231B] rounded-xl shadow-lg p-8 h-full border border-[#3AC97B]/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <SparklesIcon className="h-8 w-8 text-[#3AC97B]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7]">Cliente Semente</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#3AC97B] mb-4">Entrada no ecossistema EG</h4>
                    <p className="text-[#FFF4C7]/80 mb-4">Começou com um infoproduto, newsletter ou primeiro contato.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🔓 Gatilho</h5>
                      <p className="text-[#FFF4C7]/80">Compra ou inscrição</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-[#FFF4C7]/80">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Canal fechado no Discord
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Cupons exclusivos
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Acesso à newsletter
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 2 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-[#09231B] rounded-xl shadow-lg p-8 h-full border border-[#3AC97B]/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircleIcon className="h-8 w-8 text-[#3AC97B]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7]">Cliente Raiz</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#3AC97B] mb-4">Começou a aplicar</h4>
                    <p className="text-[#FFF4C7]/80 mb-4">Comprou consultoria ou diagnóstico, deu feedback, participou ativamente.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🔓 Gatilho</h5>
                      <p className="text-[#FFF4C7]/80">Feedback, aplicação, envio de case</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-[#FFF4C7]/80">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Diagnóstico gratuito
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Convite a eventos
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Bônus secretos
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 3 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-[#09231B] rounded-xl shadow-lg p-8 h-full border border-[#3AC97B]/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <GlobeAltIcon className="h-8 w-8 text-[#3AC97B]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7]">Cliente Floresta</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#3AC97B] mb-4">Crescimento ativo</h4>
                    <p className="text-[#FFF4C7]/80 mb-4">Contratou serviços recorrentes, tem resultados comprovados.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🔓 Gatilho</h5>
                      <p className="text-[#FFF4C7]/80">Contrato ativo + case de sucesso</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-[#FFF4C7]/80">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Acesso a produtos beta
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Mentoria exclusiva
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Prioridade no suporte
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 4 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-[#09231B] rounded-xl shadow-lg p-8 h-full border border-[#3AC97B]/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <StarIcon className="h-8 w-8 text-[#3AC97B]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7]">Cliente Estratégico</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#3AC97B] mb-4">Virou promotor da marca</h4>
                    <p className="text-[#FFF4C7]/80 mb-4">Indicou, deu depoimento, participou de case oficial.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🔓 Gatilho</h5>
                      <p className="text-[#FFF4C7]/80">Indicação, NPS alto, depoimento</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-[#FFF4C7]/80">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Mastermind fechado
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Badge oficial
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          Destaque no site
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Nível 5 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-[400px] flex-shrink-0"
                >
                  <div className="bg-[#09231B] rounded-xl shadow-lg p-8 h-full border border-[#3AC97B]/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="text-4xl mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <BuildingLibraryIcon className="h-8 w-8 text-[#3AC97B]" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#FFF4C7]">Cliente Legacy</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-[#3AC97B] mb-4">Faz parte do jogo de longo prazo</h4>
                    <p className="text-[#FFF4C7]/80 mb-4">Tem contrato de equity ou participa de co-criação com a EG.</p>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🔓 Gatilho</h5>
                      <p className="text-[#FFF4C7]/80">Contrato de longo prazo ou equity</p>
                    </div>
                    <div className="mb-6">
                      <h5 className="font-semibold text-[#FFF4C7] mb-2">🎁 Benefícios</h5>
                      <ul className="space-y-2 text-[#FFF4C7]/80">
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Acesso vitalício a produtos
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Posição como insider
                        </li>
                        <li className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                          Co-criação
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Indicador de Progresso */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-emerald-500"
                  style={{ 
                    scaleX: scrollYProgress,
                    transformOrigin: "left"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#3AC97B] mb-12 text-center"
          >
            Benefícios de Subir de Nível
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#FFF4C7]">Prioridade em Novos Projetos</h3>
              <p className="text-[#FFF4C7]/80">Acesso antecipado a novas soluções e frameworks exclusivos da EverGreen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#FFF4C7]">Eventos Exclusivos</h3>
              <p className="text-[#FFF4C7]/80">Convites para workshops, eventos e masterminds fechados com a equipe EG.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#FFF4C7]">Consultoria Estratégica</h3>
              <p className="text-[#FFF4C7]/80">Acesso direto à consultoria estratégica com os founders da EverGreen.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#09231B] border border-[#3AC97B]/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#FFF4C7]">Comunidade Premium</h3>
              <p className="text-[#FFF4C7]/80">Acesso a uma rede exclusiva de clientes avançados para troca de experiências.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#3AC97B] mb-6"
          >
            Vamos plantar sua semente?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#FFF4C7]/80 mb-12"
          >
            Cada cliente começa pequeno. O que importa é o quanto está disposto a crescer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-[#09231B] bg-[#3AC97B] hover:bg-[#3AC97B]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3AC97B]"
            >
              Agendar Diagnóstico
            </Link>
            <Link 
              href="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-[#3AC97B] bg-[#09231B] border border-[#3AC97B]/20 hover:bg-[#09231B]/80 transition-colors"
            >
              Ver Serviços
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 