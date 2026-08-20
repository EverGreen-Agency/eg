'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  Smartphone,
  Brain,
  Check,
  ShieldCheck,
  MessageCircle,
  AreaChart,
  Bot,
  Circle,
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.1
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function EgFinanceLanding() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Cores da marca
  const verdeMusgo = '#092B1B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';
  const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.10)';
  const bordaCard = `1.5px solid ${verdeMenta}22`;
  const bgIcone = `${verdeMenta}22`;
  
  // Stripe checkout URLs for Finance packages
  const stripeCheckoutUrls = {
    mei: {
      monthly: "https://buy.stripe.com/9B628rez7dLm7GK53P08g07",
      annual: "https://buy.stripe.com/cNicN50Ih0YA7GKdAl08g06"
    },
    pme: {
      monthly: "https://buy.stripe.com/00w4gzfDb9v6aSW0Nz08g05",
      annual: "https://buy.stripe.com/bJe8wPdv34aM4uyfIt08g04"
    },
    media: {
      monthly: "https://buy.stripe.com/cN2eUW5V6fUKeo8aEE",
      annual: "https://buy.stripe.com/7sY5kD76F4aM8KOao908g03"
    }
  };
  
  // Function to handle checkout
  const handleCheckout = (planType: 'mei' | 'pme' | 'media') => {
    const planUrl = isAnnual 
      ? stripeCheckoutUrls[planType].annual 
      : stripeCheckoutUrls[planType].monthly;
    
    window.location.href = planUrl;
  };
  
  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main style={{ background: verdeMusgo, color: '#fff' }}>
      {/* [1] HERO Section */}
      <motion.section 
        className="pt-12 pb-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="mb-6 flex flex-col items-center" variants={fadeInUp}>
            <Image 
              src="/images/evergreen-horizontal.png" 
              alt="EverGreen" 
              width={240} 
              height={60} 
              className="h-auto"
            />
            <motion.h3 className="text-xl font-bold mt-2" style={{ color: verdeMenta }} variants={fadeInUp}>Finance</motion.h3>
          </motion.div>
          
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            Você sabe quanto pode gastar amanhã sem quebrar sua empresa?
          </motion.h1>
          
          <motion.h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" variants={fadeInUp}>
            Evite o colapso financeiro com uma plataforma que mostra onde o dinheiro vai — e o que fazer com ele.
            <br className="hidden md:block" />
            Tudo em tempo real, direto no WhatsApp.
          </motion.h2>
          
          <motion.div variants={fadeInUp}>
            <Button 
              onClick={() => scrollToSection('pricing-section')}
              className="px-8 py-6 text-lg font-bold rounded-xl transition-all transform hover:scale-105"
              style={{ background: verdeMenta, color: verdeMusgo }}
            >
              Quero conhecer os Pacotes EG Finance
            </Button>
          </motion.div>
          
          <motion.p className="mt-4 text-sm" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            ✅ Apenas R$3 por dia · Acesso completo
          </motion.p>
          
          <motion.div className="mt-12 max-w-md mx-auto" variants={fadeInUp}>
            <div className="bg-white/10 rounded-lg p-4 overflow-hidden border border-white/20">
              <div 
                className="w-full aspect-video bg-cover bg-center rounded-md"
                style={{ 
                  backgroundImage: `url('/images/dashboard-preview-egFinanece.png')`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* [2] BENEFÍCIOS VISUAIS */}
      <motion.section 
        className="py-16 px-4"
        style={{ background: `${verdeMenta}22` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            <motion.div className="p-6 rounded-xl transition-all hover:transform hover:scale-105" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <MessageCircle className="h-10 w-10 mb-4" style={{ color: verdeMenta }} />
              <h3 className="text-xl font-bold mb-2">Alertas no WhatsApp antes do dinheiro acabar</h3>
              <p className="opacity-80">Receba avisos proativos sobre o seu fluxo de caixa antes dos problemas acontecerem</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl transition-all hover:transform hover:scale-105" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <AreaChart className="h-10 w-10 mb-4" style={{ color: verdeMenta }} />
              <h3 className="text-xl font-bold mb-2">DRE e Fluxo de Caixa 100% automatizados</h3>
              <p className="opacity-80">Relatórios prontos e fáceis de entender, sem precisar mexer em planilhas</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl transition-all hover:transform hover:scale-105" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <Brain className="h-10 w-10 mb-4" style={{ color: verdeMenta }} />
              <h3 className="text-xl font-bold mb-2">Descubra se você tá pagando pra trabalhar</h3>
              <p className="opacity-80">Análise clara da sua lucratividade real, sem manipulações ou incertezas</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl transition-all hover:transform hover:scale-105" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <Bot className="h-10 w-10 mb-4" style={{ color: verdeMenta }} />
              <h3 className="text-xl font-bold mb-2">Diagnóstico mensal feito por IA</h3>
              <p className="opacity-80">Uma análise profissional todo mês, sem erro humano ou planilha quebrada</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* [3] EXPLICAÇÃO SIMPLES */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            Chega de adivinhar se dá pra contratar, investir ou pagar o aluguel.
          </motion.h2>
          
          <motion.div className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
            <p className="mb-4">
              A maioria das PMEs quebra por falta de clareza — não por falta de venda.
            </p>
            <p className="mb-4">
              Com o EverGreen Finance, você tem visão real do seu lucro, da sua margem e do fluxo de caixa futuro.
            </p>
            <p className="mb-4">
              Tudo interpretado e entregue de forma simples, direto no WhatsApp.
            </p>
          </motion.div>
          
          <motion.p className="inline-block px-4 py-2 rounded-lg text-lg font-semibold" style={{ background: `${verdeMenta}22`, color: verdeMenta }} variants={fadeInUp}>
            📌 É visão de dono. Sem contador. Sem complicação.
          </motion.p>
        </div>
      </motion.section>
      
      {/* [4] COMO FUNCIONA */}
      <motion.section 
        className="py-16 px-4"
        style={{ background: `${verdeMenta}11` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            Como Funciona
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            <motion.div className="p-6 rounded-xl relative" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: verdeMenta, color: verdeMusgo }}>1</div>
              <h3 className="text-xl font-bold mb-3 mt-2">Você envia seus dados</h3>
              <p className="opacity-80">Envie suas informações por formulário ou WhatsApp de forma simples e segura</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl relative" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: verdeMenta, color: verdeMusgo }}>2</div>
              <h3 className="text-xl font-bold mb-3 mt-2">A IA processa e gera DRE + Flow</h3>
              <p className="opacity-80">Nossa tecnologia analisa seus dados e prepara relatórios precisos e fáceis de entender</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl relative" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: verdeMenta, color: verdeMusgo }}>3</div>
              <h3 className="text-xl font-bold mb-3 mt-2">Você acessa um painel visual</h3>
              <p className="opacity-80">Veja tudo pronto em um dashboard intuitivo com métricas claras e objetivas</p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl relative" variants={itemVariants}
              style={{ background: `${verdeMenta}22`, boxShadow: sombraCard }}>
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: verdeMenta, color: verdeMusgo }}>4</div>
              <h3 className="text-xl font-bold mb-3 mt-2">Recebe alertas e diagnósticos</h3>
              <p className="opacity-80">Acompanhe semanalmente e mensalmente com insights relevantes para o seu negócio</p>
            </motion.div>
          </motion.div>
          
          <motion.div className="mt-12 text-center" variants={fadeInUp}>
            <p className="inline-block px-6 py-3 rounded-lg text-base font-semibold" 
              style={{ background: `${verdeMenta}22`, color: verdeMenta }}>
              ⏱️ Comece em menos de 5 minutos. Entrega em até 24h úteis.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* [5] TABELA DE PLANOS */}
      <motion.section 
        id="pricing-section"
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-10" variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: amareloBaunilha }}>
              Escolha seu pacote ideal — baseado no tamanho da sua empresa:
            </h2>
            
            {/* Toggle Anual/Mensal */}
            <motion.div className="flex justify-center items-center gap-4 mb-8" variants={fadeInUp}>
              <span style={{ color: isAnnual ? `${amareloBaunilha}88` : amareloBaunilha }}>Mensal</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                style={{ background: isAnnual ? verdeMenta : `${verdeMenta}44` }}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span style={{ color: isAnnual ? amareloBaunilha : `${amareloBaunilha}88` }}>
                Anual <span className="text-sm" style={{ color: verdeMenta }}>(2 meses grátis)</span>
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
            {/* Pacote MEI */}
            <motion.div className="p-6 rounded-xl h-full flex flex-col border-2" variants={itemVariants}
              style={{ background: `${verdeMenta}11`, borderColor: `${verdeMenta}44` }}>
              <div className="flex items-center mb-4">
                <Smartphone className="h-6 w-6 mr-2" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-bold">Pacote MEI</h3>
              </div>
              
              <p className="text-2xl font-bold mb-1" style={{ color: verdeMenta }}>
                {isAnnual ? 'R$2.970' : 'R$297'}<span className="text-sm font-normal">{isAnnual ? '/ano' : '/mês'}</span>
              </p>
              
              {isAnnual && (
                <p className="text-sm mb-4" style={{ color: verdeMenta }}>Economia de R$594</p>
              )}
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>DRE + Flow completos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico mensal por IA</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Suporte automatizado</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handleCheckout('mei')}
                className="w-full"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                {isAnnual ? 'Assinar Plano Anual' : 'Escolher MEI'}
              </Button>
            </motion.div>
            
            {/* Pacote PME */}
            <motion.div className="p-6 rounded-xl h-full flex flex-col relative border-2 transform scale-105" variants={itemVariants}
              style={{ background: `${verdeMenta}11`, borderColor: verdeMenta, zIndex: 10 }}>
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 mr-2" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-bold">Pacote PME</h3>
              </div>
              
              <p className="text-2xl font-bold mb-1" style={{ color: verdeMenta }}>
                {isAnnual ? 'R$4.970' : 'R$497'}<span className="text-sm font-normal">{isAnnual ? '/ano' : '/mês'}</span>
              </p>
              
              {isAnnual && (
                <p className="text-sm mb-4" style={{ color: verdeMenta }}>Economia de R$994</p>
              )}
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Tudo do pacote MEI</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Benchmarks de mercado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Alertas proativos no WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Painel 24/7</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handleCheckout('pme')}
                className="w-full"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                {isAnnual ? 'Assinar Plano Anual' : 'Escolher PME'}
              </Button>
            </motion.div>
            
            {/* Pacote Média */}
            <motion.div className="p-6 rounded-xl h-full flex flex-col border-2" variants={itemVariants}
              style={{ background: `${verdeMenta}11`, borderColor: `${verdeMenta}44` }}>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 mr-2" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-bold">Pacote Média</h3>
              </div>
              
              <p className="text-2xl font-bold mb-1" style={{ color: verdeMenta }}>
                {isAnnual ? 'R$6.970' : 'R$697'}<span className="text-sm font-normal">{isAnnual ? '/ano' : '/mês'}</span>
              </p>
              
              {isAnnual && (
                <p className="text-sm mb-4" style={{ color: verdeMenta }}>Economia de R$1.394</p>
              )}
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Tudo do pacote PME</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico com especialista ao vivo</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Histórico acumulado completo</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 shrink-0 mt-0.5" style={{ color: verdeMenta }} />
                  <span>Suporte prioritário com SLA</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handleCheckout('media')}
                className="w-full"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                {isAnnual ? 'Assinar Plano Anual' : 'Escolher Média'}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="text-center mt-8" variants={fadeInUp}>
            <p className="mt-4" style={{ color: `${amareloBaunilha}dd` }}>
              🔄 Flexibilidade total: escale seu plano conforme seu negócio cresce
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* [5.5] Porte da Empresa Section - Adapted from DRE/Flow */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        style={{ background: verdeMusgo }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }} variants={fadeInUp}>
            A gente fala a sua língua — não importa o tamanho do seu negócio:
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            {/* Card MEI */}
            <motion.div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" variants={itemVariants} style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">MEI/Autônomo</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Relatórios e alertas personalizados para a sua realidade.</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 81 mil/ano
              </span>
            </motion.div>
            {/* Card PME */}
            <motion.div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" variants={itemVariants} style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">PME</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Visão de lucro, fluxo de caixa e inteligência para crescer.</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 4,8 mi/ano
              </span>
            </motion.div>
            {/* Card Média */}
            <motion.div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" variants={itemVariants} style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Brain className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Média</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Análise completa, suporte dedicado e histórico aprofundado.</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Acima de R$ 4,8 mi/ano
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* [5.7] Comparativo de Pacotes */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-4" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            🏷️ Por que escolher o Pacote Completo?
          </motion.h2>
          <motion.p className="text-xl mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Contratar DRE e Flow separados pode até parecer mais barato.<br />
            Mas na prática, você perde dinheiro, clareza e decisões melhores.
          </motion.p>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
            {/* Coluna 1: Comprar Separado */}
            <motion.div 
              className="p-6 rounded-xl bg-opacity-20 transition-all duration-200 flex flex-col h-full" 
              variants={itemVariants}
              style={{ background: `${verdeMenta}11`, boxShadow: sombraCard, border: bordaCard }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: verdeMenta }}>💸 Comprar Separado</h3>
              
              <ul className="text-left space-y-4 mb-6 flex-grow">
                <li className="flex flex-col">
                  <span className="font-medium">DRE mensal - MEI:</span>
                  <span className="text-lg">R$147/mês</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Flow semanal - MEI:</span>
                  <span className="text-lg">R$197/mês</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Sem diagnóstico integrado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Dados entregues, mas não cruzados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Suporte limitado em cada produto</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-4 border-t border-white/20">
                <p className="font-bold">→ Total: R$344/mês</p>
                <p className="font-bold">= R$4.128/ano</p>
              </div>
            </motion.div>
            
            {/* Coluna 2: Pacote Completo */}
            <motion.div 
              className="p-6 rounded-xl bg-opacity-20 transition-all duration-200 relative flex flex-col h-full transform scale-105 z-10" 
              variants={itemVariants}
              style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}
            >
              <div className="absolute -top-3 right-3 px-2 py-1 rounded text-xs font-bold"
                style={{ background: verdeMenta, color: verdeMusgo }}>
                Melhor custo-benefício
              </div>
              
              <h3 className="text-xl font-bold mb-6">🧠 Pacote Completo</h3>
              
              <ul className="text-left space-y-4 mb-6 flex-grow">
                <li className="flex flex-col">
                  <span className="font-medium">Pacote DRE + Flow - MEI:</span>
                  <span className="text-lg">R$297/mês</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" style={{ color: verdeMenta }} />
                  <span>DRE + Flow automatizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" style={{ color: verdeMenta }} />
                  <span>Diagnóstico cruzado por IA (mais profundo e acionável)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" style={{ color: verdeMenta }} />
                  <span>Alertas integrados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" style={{ color: verdeMenta }} />
                  <span>Painel único com visão 360°</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0" style={{ color: verdeMenta }} />
                  <span>Suporte centralizado</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-4 border-t border-verde-musgo/20">
                <p className="font-bold">→ R$297/mês</p>
                <p className="font-bold">= R$3.564/ano</p>
              </div>
            </motion.div>
            
            {/* Coluna 3: O que você perde */}
            <motion.div 
              className="p-6 rounded-xl bg-opacity-20 transition-all duration-200 flex flex-col h-full" 
              variants={itemVariants}
              style={{ background: `${verdeMenta}11`, boxShadow: sombraCard, border: bordaCard }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: verdeMenta }}>🤷‍♂️ O que você perde sem o pacote</h3>
              
              <ul className="text-left space-y-4 mb-6 flex-grow">
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Mais de R$500 por ano</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Diagnóstico desconectado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Decisões baseadas em pedaços de informação</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Maior risco de erro ou de agir tarde demais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Circle className="h-2 w-2 shrink-0" style={{ color: verdeMenta }} />
                  <span>Sem visão unificada = confusão financeira</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-4 border-t border-white/20">
                <p className="font-bold text-lg" style={{ color: verdeMenta }}>💰 Economia de R$564/ano</p>
                <p>+ decisões muito mais seguras</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="sticky bottom-4 z-20" variants={fadeInUp}>
            <Button 
              onClick={() => scrollToSection('pricing-section')}
              className="px-8 py-6 text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
              style={{ background: verdeMenta, color: verdeMusgo }}
            >
              Quero garantir o pacote completo
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* [6] PROVA SOCIAL */}
      <motion.section 
        className="py-16 px-4"
        style={{ background: `${verdeMenta}22` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            O que nossos clientes dizem
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            <motion.div className="p-6 rounded-xl" variants={itemVariants}
              style={{ background: `${verdeMenta}11`, boxShadow: sombraCard }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: verdeMenta }}>A</span>
                </div>
                <div>
                  <h4 className="font-bold">Ana Paula</h4>
                  <p className="text-sm opacity-80">E-commerce de moda</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                "Com o painel da EverGreen, consegui prever o caixa negativo com 12 dias de antecedência e evitei um rombo de R$14 mil."
              </p>
            </motion.div>
            
            <motion.div className="p-6 rounded-xl" variants={itemVariants}
              style={{ background: `${verdeMenta}11`, boxShadow: sombraCard }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: verdeMenta }}>T</span>
                </div>
                <div>
                  <h4 className="font-bold">Tiago</h4>
                  <p className="text-sm opacity-80">Dono de pizzaria</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                "Antes da EverGreen, eu só via o saldo. Agora sei exatamente quanto sobra e onde tá o problema."
              </p>
            </motion.div>
          </motion.div>
          
          <motion.p className="text-center mt-10" style={{ color: verdeMenta }} variants={fadeInUp}>
            💬 Mais de 300 PMEs usam a EverGreen todos os meses para crescer com clareza.
          </motion.p>
        </div>
      </motion.section>
      
      {/* [7-8] GARANTIA / CTA FINAL - Combined Sections */}
      <motion.section 
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        style={{ background: `${verdeMenta}11` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <ShieldCheck className="h-16 w-16 mx-auto mb-6" style={{ color: verdeMenta }} />
          </motion.div>
          
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: amareloBaunilha }} variants={fadeInUp}>
            Chegou a hora de ter controle real sobre suas finanças
          </motion.h2>
          
          <motion.p className="text-xl mb-8 max-w-2xl mx-auto" variants={fadeInUp}>
            Teste sem medo. Sem cartão. Sem pegadinha.<br />
            Se não fizer sentido, cancele com 2 cliques.
          </motion.p>
          
          <motion.div className="flex flex-col items-center gap-4 mb-8" variants={fadeInUp}>
            <motion.p className="flex items-center" variants={fadeInUp}>
              <ShieldCheck className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
              <span>Checkout 100% seguro com Stripe</span>
            </motion.p>
            <motion.p className="flex items-center" variants={fadeInUp}>
              <Check className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
              <span>Contratação simples e transparente. Sem burocracia.</span>
            </motion.p>
            <motion.p className="flex items-center" variants={fadeInUp}>
              <Check className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />
              <span>Sem fidelidade, cancele quando quiser.</span>
            </motion.p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Button 
              onClick={() => scrollToSection('pricing-section')}
              className="px-8 py-6 text-lg font-bold rounded-xl transition-all transform hover:scale-105"
              style={{ background: verdeMenta, color: verdeMusgo }}
            >
              Quero conhecer pacotes
            </Button>
            <p className="mt-2 text-sm opacity-80">Apenas R$3 por dia para testar</p>
          </motion.div>
          
          <motion.p className="mt-6 text-xs opacity-60 max-w-xl mx-auto" variants={fadeInUp}>
            Ao contratar, você concorda com nossos Termos de Serviço, Política de Cancelamento e LGPD.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Minimal Footer */}
      <footer className="py-8 px-4 text-center text-sm" style={{ color: '#999' }}>
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} EverGreen Finance. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link href="/legal/politicas-de-reembolso" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Política de Reembolso
            </Link>
            <Link href="/legal/termos-de-uso" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Termos de Uso
            </Link>
            <Link href="/legal/privacidade" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </Link>
            <Link href="/legal/cookies" className="hover:text-white" target="_blank" rel="noopener noreferrer">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 