"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BarChart3,
  LineChart,
  Zap,
  Calendar,
  Brain,
  ShieldCheck,
  MessageSquare,
  Wallet,
  Smartphone,
  Mail,
  AlertTriangle,
  Bell,
  Clock,
  Shield,
  Check,
  PieChart,
  PhoneCall,
  ChevronDown,
  MessageCircle,
  BrainCircuit
} from 'lucide-react';
import { motion } from 'framer-motion';
import './page.css';
import * as fbq from '@/lib/fpixel';

// Cores da marca
const verdeMusgo = '#0b3a26';
const verdeMenta = '#30c77b';
const amareloBaunilha = '#FFF4C7';
const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.15)';
const bordaCard = `1.5px solid ${verdeMenta}22`;
const bgIcone = `${verdeMenta}22`;

export default function EgFinanceLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  
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
    // Determinar valores com base no plano e período
    let value = 0;
    
    if (planType === 'mei') {
      value = isAnnual ? 2970 : 297;
    } else if (planType === 'pme') {
      value = isAnnual ? 4970 : 497;
    } else if (planType === 'media') {
      value = isAnnual ? 6970 : 697;
    }
    
    // Rastrear evento de início de checkout
    fbq.trackInitiateCheckout('BRL', value);
    
    const planUrl = isAnnual 
      ? stripeCheckoutUrls[planType].annual 
      : stripeCheckoutUrls[planType].monthly;
    
    window.location.href = planUrl;
  };

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 100;
      
      // Rastreando o evento de visualização de seção de preços
      if (id === 'pricing') {
        fbq.event('ViewContent', { content_name: 'pricing_section' });
      }
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="min-h-screen finance-landing" style={{ background: verdeMusgo }}>
      {/* HERO */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Você sabe quanto pode gastar amanhã sem quebrar sua empresa?
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-8 text-amarelo-baunilha">
            Evite o colapso financeiro com uma plataforma que mostra onde o dinheiro vai — e o que fazer com ele.
            <br />Tudo em tempo real, direto no WhatsApp.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <div className="flex justify-center mb-8">
              {/* Placeholder for mockup image */}
              <div className="w-64 h-64 bg-gradient-to-br from-verde-menta/20 to-verde-menta/5 rounded-xl flex items-center justify-center">
                <PieChart className="w-20 h-20 text-verde-menta" />
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-verde-menta hover:bg-verde-menta/90 text-verde-musgo text-lg font-bold py-6 px-8 rounded-xl shadow-lg cta-btn"
            onClick={() => scrollToSection('pricing')}
          >
            Quero começar agora — {isAnnual ? 'R$2.970/ano' : 'R$297/mês'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-white mt-4 text-sm">
            ✅ 7 dias grátis · Sem cartão de crédito
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS VISUAIS */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card"
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <MessageCircle className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold">Alertas no WhatsApp antes do dinheiro acabar</span>
            </div>
            
            <div className="p-5 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card"
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <BarChart3 className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold">DRE e Fluxo de Caixa 100% automatizados</span>
            </div>
            
            <div className="p-5 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card"
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Brain className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold">Descubra se você tá pagando pra trabalhar</span>
            </div>
            
            <div className="p-5 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card"
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <BrainCircuit className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold">Diagnóstico mensal feito por IA — sem planilha quebrada</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLICAÇÃO SIMPLES */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: verdeMenta }}>
            Chega de adivinhar se dá pra contratar, investir ou pagar o aluguel.
          </h2>
          
          <div className="p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <p className="text-lg mb-6">
              A maioria das PMEs quebra por falta de clareza — não por falta de venda.
              Com o Evergreen Finance, você tem visão real do seu lucro, da sua margem e do fluxo de caixa futuro.
              Tudo interpretado e entregue de forma simples, direto no seu WhatsApp.
            </p>
            
            <div className="text-center p-4 rounded-xl font-bold text-lg" style={{ background: bgIcone, color: verdeMusgo }}>
              📌 É visão de dono. Sem contador. Sem complicação.
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center text-white">
            Como Funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" 
                style={{ background: bgIcone, color: verdeMenta }}>1</span>
              <Smartphone className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Você envia seus dados (formulário ou WhatsApp)</span>
            </div>
            
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" 
                style={{ background: bgIcone, color: verdeMenta }}>2</span>
              <Brain className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">A IA processa e gera DRE + Flow</span>
            </div>
            
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" 
                style={{ background: bgIcone, color: verdeMenta }}>3</span>
              <BarChart3 className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Você acessa um painel visual com tudo pronto</span>
            </div>
            
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" 
                style={{ background: bgIcone, color: verdeMenta }}>4</span>
              <Bell className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Recebe alertas e diagnósticos semanais e mensais</span>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ background: verdeMenta }}>
              <Clock className="h-5 w-5" style={{ color: verdeMusgo }} />
              <span style={{ color: verdeMusgo, fontWeight: 'bold' }}>Comece em menos de 5 minutos. Entrega em até 24h úteis.</span>
            </div>
          </div>
        </div>
      </section>

      {/* TABELA DE PLANOS */}
      <section id="pricing" className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center mb-4 text-amarelo-baunilha">
            Escolha seu pacote ideal — baseado no tamanho da sua empresa:
          </p>
          
          {/* Toggle Anual/Mensal */}
          <div className="flex justify-center items-center gap-4 mb-8">
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
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full" style={{ background: verdeMenta, color: verdeMusgo }}>
                Recomendado
              </span>
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pacote MEI */}
            <div className="p-8 pb-20 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col h-full relative card"
               style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-3">
                <Smartphone className="h-6 w-6" style={{ color: verdeMenta }} />
                Pacote MEI
              </h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$2.970' : 'R$297'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$594</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>DRE + Flow completos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico mensal por IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Suporte automatizado</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full cta-btn" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('mei')}>
                  {isAnnual ? 'Assinar Plano Anual MEI' : 'Escolher MEI'}
                </Button>
              </div>
            </div>

            {/* Pacote PME */}
            <div className="p-8 pb-20 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 scale-105 transition-all duration-200 flex flex-col h-full relative card"
               style={{ background: '#104027', color: '#fff', boxShadow: sombraCard }}>
              <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-3">
                <BarChart3 className="h-6 w-6" style={{ color: verdeMenta }} />
                Pacote PME
              </h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$4.970' : 'R$497'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$994</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Tudo do MEI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Benchmarks de mercado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Alertas proativos no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Painel 24/7</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full cta-btn" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('pme')}>
                  {isAnnual ? 'Assinar Plano Anual PME' : 'Escolher PME'}
                </Button>
              </div>
            </div>

            {/* Pacote Empresa */}
            <div className="p-8 pb-20 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 flex flex-col h-full relative card"
               style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <h3 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-3">
                <Brain className="h-6 w-6" style={{ color: verdeMenta }} />
                Pacote Empresa
              </h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$6.970' : 'R$697'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'a partir de'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$1.394</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Tudo do PME</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico com especialista ao vivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Histórico acumulado completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full cta-btn" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('media')}>
                  {isAnnual ? 'Assinar Plano Anual Empresa' : 'Escolher Empresa'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white">
              💡 Comece pelo plano que quiser — e mude a qualquer momento.
            </p>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-bold">A</span>
                </div>
                <div>
                  <p className="font-bold">Ana Paula</p>
                  <p className="text-sm" style={{ opacity: 0.7 }}>e-commerce de moda</p>
                </div>
              </div>
              <p className="italic">
                "Com o painel da Evergreen, consegui prever o caixa negativo com 12 dias de antecedência e evitei um rombo de R$14 mil."
              </p>
            </div>
            
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 card" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-bold">T</span>
                </div>
                <div>
                  <p className="font-bold">Tiago</p>
                  <p className="text-sm" style={{ opacity: 0.7 }}>dono de pizzaria</p>
                </div>
              </div>
              <p className="italic">
                "Antes da Evergreen, eu só via o saldo. Agora sei exatamente quanto sobra e onde tá o problema."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-verde-menta">
              💬 Mais de 300 PMEs usam a Evergreen todos os meses para crescer com clareza.
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA / RISCO ZERO */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center card" 
            style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-12 w-12" style={{ color: verdeMenta }} />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Teste sem medo. Sem cartão. Sem pegadinha.
            </h3>
            <p className="text-lg mb-4">
              Você tem 7 dias grátis pra testar tudo.<br />
              Se não fizer sentido, cancele com 2 cliques.<br />
              Sem letra miúda. Sem contrato.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 bg-gradient-to-br from-verde-musgo via-verde-musgo to-verde-musgo/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl bg-verde-musgo/60 backdrop-blur-sm border border-verde-menta/20">
            <div className="flex flex-col items-center mb-8">
              <ShieldCheck className="h-8 w-8 mb-4" style={{ color: verdeMenta }} />
              <p className="text-white mb-2">🔒 Checkout 100% seguro com Stripe</p>
              <p className="text-white">📦 Sem contrato. Sem complicação.</p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-verde-menta hover:bg-verde-menta/90 text-verde-musgo text-lg font-bold py-6 px-8 rounded-xl shadow-lg cta-btn"
              onClick={() => handleCheckout('mei')}
            >
              Quero começar agora — Teste Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer minimalista */}
      <footer className="py-8 text-center text-sm text-gray-400">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2023 Evergreen Finance. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-3">
            <Link href="/politicas-de-reembolso" target="_blank" className="hover:text-verde-menta transition-colors">Política de Reembolso</Link>
            <span>·</span>
            <Link href="/legal/privacidade" target="_blank" className="hover:text-verde-menta transition-colors">Política de Privacidade</Link>
            <span>·</span>
            <Link href="/legal/termos-de-uso" target="_blank" className="hover:text-verde-menta transition-colors">Termos de Uso</Link>
            <span>·</span>
            <Link href="/legal/cookies" target="_blank" className="hover:text-verde-menta transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 