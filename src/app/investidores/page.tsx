'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LightBulbIcon, UserGroupIcon, ChartBarIcon, RocketLaunchIcon, PuzzlePieceIcon, BanknotesIcon, UserIcon, ArrowTrendingUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import CTASection from '@/components/CTASection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function InvestidoresPage() {
  return (
    <div className="min-h-screen bg-[#09231B]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6 text-[#3AC97B]"
            >
              Evergreen Capital
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-medium mb-8 text-[#FFF4C7]"
            >
              Não buscamos dinheiro. Buscamos alinhamento.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="text-lg md:text-xl text-[#FFF4C7]/80 mb-12 max-w-3xl mx-auto space-y-4"
            >
              <p>
                A Evergreen MKT foi criada para escalar. E toda empresa que escala, precisa de alavancas.
              </p>
              <p>
                Aqui, equity não é moeda de troca.<br />
                É compromisso com a visão de longo prazo.
              </p>
            </motion.div>
            <motion.blockquote 
              variants={fadeIn}
              className="text-xl md:text-2xl italic text-[#3AC97B] mb-12"
            >
              "Capital sem cultura destrói. Capital com cultura constrói."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* O que estamos construindo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]/80">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-[#3AC97B] mb-8"
            >
              Visão de Ativo
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="text-lg text-[#FFF4C7]/80 mb-12"
            >
              <p className="mb-6">
                A Evergreen MKT é a primeira unidade de um grupo.<br />
                Hoje, é uma operação lean com alto poder de execução, receita crescente e diferenciais reais:
              </p>
              <ul className="space-y-4 list-none">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                  Posicionamento único em tech + growth + execução
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                  Time fundador técnico + estratégico
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                  Cultura forte e comunidade em formação
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#3AC97B] mr-2" />
                  Potencial de expansão horizontal por produtos e verticais
                </li>
              </ul>
              <p className="mt-6 font-medium text-[#3AC97B]">
                E o melhor: tudo ainda no começo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Tese de Captação */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-[#3AC97B] mb-8"
            >
              O que buscamos em capital
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <div className="space-y-4 text-[#FFF4C7]/80">
                <div className="flex items-center">
                  <LightBulbIcon className="h-6 w-6 text-[#3AC97B] mr-3" />
                  <p>Smart money com histórico de construção</p>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="h-6 w-6 text-[#3AC97B] mr-3" />
                  <p>Alinhamento com tese de crescimento sustentável</p>
                </div>
                <div className="flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-[#3AC97B] mr-3" />
                  <p>Capacidade de apoiar estrutura, talentos ou tração</p>
                </div>
                <div className="flex items-center">
                  <RocketLaunchIcon className="h-6 w-6 text-[#3AC97B] mr-3" />
                  <p>Participação ativa em produto, expansão ou operação</p>
                </div>
              </div>
              <div className="bg-[#09231B] p-6 rounded-xl border border-[#3AC97B]/20">
                <h3 className="font-bold text-xl mb-4 text-[#FFF4C7]">Modelo preferencial:</h3>
                <ul className="space-y-3 text-[#FFF4C7]/80">
                  <li>• Equity deal com vesting</li>
                  <li>• Acordo de partnership com contrapartida estratégica</li>
                  <li>• Participações minoritárias com papel tático</li>
                </ul>
                <p className="mt-6 font-medium text-[#3AC97B]">
                  Não queremos investidor-anjo. Queremos investidor arquiteto.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Deals que aceitamos explorar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09231B]/80">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-[#3AC97B] mb-8"
            >
              Formatos que estudamos
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><PuzzlePieceIcon className="h-8 w-8 text-[#3AC97B]" /></span>
                  <h3 className="text-xl font-bold text-[#FFF4C7]">Co-criação de vertical</h3>
                </div>
                <p className="text-[#FFF4C7]/80">ex: EG.Tech, EG.Lab</p>
              </div>
              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><BanknotesIcon className="h-8 w-8 text-[#3AC97B]" /></span>
                  <h3 className="text-xl font-bold text-[#FFF4C7]">Aporte com vesting</h3>
                </div>
                <p className="text-[#FFF4C7]/80">Ligado a entregas e milestones</p>
              </div>
              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><UserIcon className="h-8 w-8 text-[#3AC97B]" /></span>
                  <h3 className="text-xl font-bold text-[#FFF4C7]">Advisory estratégico</h3>
                </div>
                <p className="text-[#FFF4C7]/80">Em troca de participação minoritária</p>
              </div>
              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3"><ArrowTrendingUpIcon className="h-8 w-8 text-[#3AC97B]" /></span>
                  <h3 className="text-xl font-bold text-[#FFF4C7]">Captação focada</h3>
                </div>
                <p className="text-[#FFF4C7]/80">Para aceleração de equipe ou produtos</p>
              </div>
            </motion.div>
            <motion.p 
              variants={fadeIn}
              className="text-center mt-8 text-[#FFF4C7]/80"
            >
              Estamos abertos a estruturas criativas — mas só com gente que joga o jogo com skin in the game.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-[#3AC97B] mb-12 text-center"
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Qual é o modelo de negócio da Evergreen MKT?</h3>
                <p className="text-[#FFF4C7]/80">
                  A Evergreen opera como um sistema de crescimento full-stack para empresas B2B.
                  Trabalhamos com entregas recorrentes (consultorias + tech), produtos digitais e estruturas escaláveis de serviço com IA integrada.
                </p>
              </div>

              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Vocês têm receita? Já são lucrativos?</h3>
                <p className="text-[#FFF4C7]/80">
                  Sim. A operação é lean, validada e 100% autofinanciada até agora.
                  Já temos clientes ativos e contratos recorrentes.
                  Lucratividade ainda não é foco — <strong>crescimento com margem saudável é.</strong>
                </p>
              </div>

              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Existe um plano de captação oficial?</h3>
                <p className="text-[#FFF4C7]/80">
                  Sim. Estamos estruturando uma <strong>pré-rodada estratégica</strong> para Q3 de 2025, com foco em:
                </p>
                <ul className="mt-4 space-y-2 text-[#FFF4C7]/80">
                  <li>• Aceleração de equipe técnica e comercial</li>
                  <li>• Lançamento de novos produtos EG.Lab</li>
                  <li>• Estruturação do braço de tech EG.Tech</li>
                  <li>• Fundamento jurídico da holding EG Group</li>
                </ul>
                <p className="mt-4 text-[#FFF4C7]/80">
                  Estamos abertos a negociações táticas pontuais antes disso — com alinhamento.
                </p>
              </div>

              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Qual é o ticket mínimo para participar?</h3>
                <p className="text-[#FFF4C7]/80">
                  Depende da natureza da participação.
                  Para co-criação de verticais, o capital pode ser menor — desde que haja <strong>contribuição estratégica real</strong>.
                  <br /><br />
                  Para participação societária via equity, estudamos tickets entre <strong>R$100k a R$500k iniciais</strong>, com modelo de vesting atrelado a milestones.
                </p>
              </div>

              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Vocês têm um pitch deck?</h3>
                <p className="text-[#FFF4C7]/80 mb-4">
                  Sim, temos um one-pager e deck executivo sob demanda.
                  Envie um email com o assunto "Investor Access" ou clique abaixo para solicitar:
                </p>
                <button className="bg-[#3AC97B] text-[#09231B] px-6 py-3 rounded-xl hover:bg-[#3AC97B]/90 transition-colors">
                  Quero receber o pitch deck
                </button>
              </div>

              <div className="bg-[#09231B] rounded-xl shadow-lg p-6 border border-[#3AC97B]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FFF4C7]">Existe algum sócio/investidor atual?</h3>
                <p className="text-[#FFF4C7]/80">
                  Hoje operamos 100% founders.
                  O primeiro equity externo será concedido com base em <strong>parceria estratégica, não captação passiva.</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection 
        title="Tem capital e quer co-criar com a gente?"
        description="Se você leu até aqui, já entendeu o espírito.<br />A Evergreen não aceita qualquer investidor. Mas pra quem compartilha da mesma obsessão por construção — abrimos a porta."
        primaryButtonText="Falar com a Holding"
        primaryButtonLink="/contato"
        secondaryButtonText="Ver Estrutura do Grupo"
        secondaryButtonLink="/holding"
      />
    </div>
  );
} 