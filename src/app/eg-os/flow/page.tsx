"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  LineChart,
  Zap,
  Calendar,
  Brain,
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  Target,
  PieChart,
  Wallet,
  Smartphone,
<<<<<<< HEAD
  Mail,
  Check,
  Plus,
  HelpCircle,
  Minus
} from 'lucide-react';
import PricePackages from '@/components/EgFinance';
=======
  Mail
} from 'lucide-react';
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b

// Cores da marca
const verdeMusgo = '#092B1B';
const verdeMenta = '#3AC97B';
const amareloBaunilha = '#FFF4C7';
const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.10)';
const bordaCard = `1.5px solid ${verdeMenta}22`;
const bgIcone = `${verdeMenta}22`;

const faqList = [
  {
    question: 'Preciso preencher tudo toda semana?',
    answer: 'Não. Você pode atualizar apenas se algo mudar. A IA ajusta a previsão.'
  },
  {
    question: 'E se eu errar algum valor?',
    answer: 'Dá pra corrigir. A gente envia lembrete e suporte.'
  },
  {
    question: 'Isso substitui um ERP?',
    answer: 'Não. É uma camada visual + inteligência pra prever saldo — algo que ERPs não fazem.'
  },
  {
    question: 'Tem versão mensal ou contínua?',
    answer: 'Sim! Você pode contratar como produto único ou manter a assinatura e ter visão recorrente.'
  },
];

export default function FlowLanding() {
<<<<<<< HEAD
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Updated scroll function with offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this value to get the right positioning
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Stripe checkout URLs
  const stripeCheckoutUrls = {
    mei: {
      monthly: "https://buy.stripe.com/14AcN562B9v63quao908g0e",
      annual: "https://buy.stripe.com/aFaaEX8aJfTuf9c1RD08g0f"
    },
    pme: {
      monthly: "https://buy.stripe.com/6oU3cv8aJePq6CG1RD08g0g",
      annual: "https://buy.stripe.com/28E7sLez7gXygdg8g108g0h"
    },
    media: {
      monthly: "https://buy.stripe.com/5kQfZh62BcHie582VH08g0d",
      annual: "https://buy.stripe.com/14A28r62B9v68KOeEp08g0c"
    }
  };
  
  // Function to handle checkout
  const handleCheckout = (planType: 'mei' | 'pme' | 'media') => {
    const planUrl = isAnnual 
      ? stripeCheckoutUrls[planType].annual 
      : stripeCheckoutUrls[planType].monthly;
    
    window.location.href = planUrl;
  };
  
  return (
    <div className="min-h-screen bg-verde-musgo">
      {/* HERO */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">
            Saber o passado te dá história.<br />
            <span className="text-verde-menta">Prever o futuro te dá controle.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-8 mt-4 text-amarelo-baunilha">
            Com o EverGreen Flow, você sabe com exatidão <b>quanto dinheiro vai sobrar — ou faltar — nos próximos dias.</b>
          </p>
          <p className="text-lg mb-8 text-white opacity-85">
            Porque empreender no escuro é o que faz empresas quebrarem.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-verde-menta text-verde-musgo font-bold hover:brightness-90 border-none shadow-md"
              onClick={() => scrollToSection('price-packages')}
            >
              Quero prever meu saldo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-verde-menta border-verde-menta hover:bg-[#0e3a27] border-2"
              onClick={() => scrollToSection('exemplo-resultado')}
            >
=======
  return (
    <div style={{ background: verdeMusgo }} className="min-h-screen">
      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#fff' }}>
            Saber o passado te dá história.<br />
            <span style={{ color: verdeMenta }}>Prever o futuro te dá controle.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-8 mt-4" style={{ color: amareloBaunilha }}>
            Com o Evergreen Flow, você sabe com exatidão <b>quanto dinheiro vai sobrar — ou faltar — nos próximos dias.</b>
          </p>
          <p className="text-lg mb-8" style={{ color: '#fff', opacity: 0.85 }}>
            Porque empreender no escuro é o que faz empresas quebrarem.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
              Quero prever meu saldo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
              Ver exemplo de relatório
            </Button>
          </div>
        </div>
      </section>

      {/* DOR REAL + TENSÃO */}
<<<<<<< HEAD
      <section className="py-6">
=======
      <section className="py-16">
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: amareloBaunilha }}>
            Sabe qual o principal motivo de falência de pequenos negócios?
          </h2>
          <div className="p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-7 w-7" style={{ color: '#e53e3e' }} />
              <span className="font-semibold text-lg">Falta de controle de fluxo de caixa.</span>
            </div>
            <ul className="mb-4 space-y-2 text-base">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: '#e53e3e' }} /> esquece que tem imposto dia 20</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: '#e53e3e' }} /> parcela no fornecedor sem ver vencimento</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: '#e53e3e' }} /> adianta o recebível e se enrola no mês seguinte</li>
            </ul>
            <div className="text-lg font-bold mt-6" style={{ color: '#e53e3e' }}>
              E quando vê... <span className="font-extrabold">sem saldo, sem margem, sem respiro.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO FLOW */}
<<<<<<< HEAD
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: verdeMenta }}>
            Com o EverGreen Flow você...
=======
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: verdeMenta }}>
            Com o Evergreen Flow você...
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Wallet className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Organiza entradas e saídas previstas</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <AlertTriangle className="h-8 w-8 mb-3" style={{ color: '#e53e3e' }} />
              <span className="font-bold mb-2">Sabe quando vai faltar dinheiro</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <PieChart className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Sabe quando vai sobrar e pode reinvestir</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Zap className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Ganha um alerta automático se for entrar no vermelho</span>
            </div>
          </div>
          <div className="text-center mt-10 text-base" style={{ color: amareloBaunilha }}>
            Tudo isso num dashboard visual + análise feita com IA.
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
<<<<<<< HEAD
      <section className="py-6">
=======
      <section className="py-16">
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: amareloBaunilha }}>
            Como Funciona:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>1</span>
              <Calendar className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span>Você preenche um formulário simples com previsão do mês</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>2</span>
              <Brain className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span>A IA analisa tudo: entradas, saídas, picos, riscos</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>3</span>
              <BarChart3 className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span>Você recebe um relatório completo + gráfico + recomendação</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>4</span>
              <LineChart className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span>Toda semana você pode atualizar e acompanhar</span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>Previsão de 30 a 90 dias</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>Gráficos interativos</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Brain className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>Resumo gerado por IA com ação recomendada</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DE ENTREGA */}
<<<<<<< HEAD
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="exemplo-resultado" className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
=======
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
            Exemplo de Resultado:
          </h2>
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="mb-4 space-y-2 text-base">
                  <li className="flex items-center gap-2"><Wallet className="h-5 w-5" style={{ color: verdeMenta }} /> Saldo inicial: <b>R$3.500</b></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Entradas previstas: <b>R$9.800</b></li>
                  <li className="flex items-center gap-2"><AlertTriangle className="h-5 w-5" style={{ color: '#e53e3e' }} /> Saídas previstas: <b>R$10.700</b></li>
                  <li className="flex items-center gap-2"><AlertTriangle className="h-5 w-5" style={{ color: '#e53e3e' }} /> Saldo previsto: <b>-R$1.400 em 22/05</b></li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center">
                <LineChart className="h-16 w-16 mb-2" style={{ color: verdeMenta }} />
                <span className="text-sm" style={{ color: '#e53e3e' }}>Pico de gasto em 20/05</span>
              </div>
            </div>
            <div className="mt-6 bg-[#fff4f4] border-l-4 border-[#e53e3e] p-4 rounded-lg">
              <span className="font-bold" style={{ color: '#e53e3e' }}>Insight da IA:</span>
              <p className="mt-2" style={{ color: verdeMusgo }}>
                "O maior pico de gasto será no dia 20 com fornecedores (R$4.200).<br />
                Se antecipar parte da receita ou adiar essa compra, você evita ficar no vermelho."
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* PERSONALIZAÇÃO POR PORTE - Moved up and restyled to match DRE */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            A gente fala a sua língua — não importa o tamanho do seu negócio:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative min-h-[230px]" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">MEI/Autônomo</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Entradas e gastos básicos, planilha simples e alerta</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 81 mil/ano
              </span>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative min-h-[230px]" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">PME</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Vendas por canal, categorias e picos mapeados</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 4,8 mi/ano
              </span>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative min-h-[230px]" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <PieChart className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Média</h3>
              <p style={{ opacity: 0.8, paddingBottom: '2rem' }}>Simulação por linha e recorrência, projeção rolling</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Acima de R$ 4,8 mi/ano
              </span>
=======
      {/* PERSONALIZAÇÃO POR PORTE */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: amareloBaunilha }}>
            Você pode ser MEI, PME ou já ter estrutura — o Flow se adapta.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Smartphone className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">MEI / Autônomo</span>
              <span className="text-base mt-2">Entradas e gastos básicos<br />Planilha simples e alerta</span>
            </div>
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <BarChart3 className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">PME Local</span>
              <span className="text-base mt-2">Vendas por canal<br />Categorias e picos mapeados</span>
            </div>
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <PieChart className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Empresa Média</span>
              <span className="text-base mt-2">Simulação por linha e recorrência<br />Projeção rolling + recomendação</span>
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Complete Package Section with PricePackages component */}
      <section id="price-packages" className="pt-4">
        <PricePackages />
      </section>

      {/* Card de Transição - Posicionado na fronteira entre seções */}
      <div className="relative z-10" style={{ marginTop: "-1.5rem", marginBottom: "-3rem" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: verdeMusgo }}>
              Ainda não quer tudo? Sem problemas.
            </h3>
            <p className="text-lg mb-3">
              Você também pode contratar só o que precisa — por enquanto.
            </p>
            <p className="text-lg">
              A seguir, veja as opções de planos <strong>individuais</strong> para Flow.
            </p>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <section className="py-6 pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            EVERGREEN FLOW
          </h2>
          <p className="text-center mb-12" style={{ color: amareloBaunilha }}>
            Alertas + painel + previsões personalizadas para sua empresa
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
            {/* MEI Plan */}
            <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full relative" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">MEI</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$1.970' : 'R$197'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$394</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Previsão de saldo semanal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Alerta de risco de ficar negativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Painel simplificado (entrada e saída)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Upload de extrato via WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Dicas de organização e controle automatizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Mensagens da IA financeira 1x por semana</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('mei')}>
                  {isAnnual ? 'Assinar Anual MEI' : 'Sou MEI!'}
                </Button>
              </div>
            </div>

            {/* PME Plan */}
            <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-2xl hover:shadow-2xl hover:-translate-y-1 scale-105 flex flex-col h-full relative" 
              style={{ background: '#104027', color: '#fff', boxShadow: sombraCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: verdeMenta, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMusgo }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">PME</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$2.970' : 'R$297'}</p>
                <p className="text-sm" style={{ opacity: 0.8, color: amareloBaunilha }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$594</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Tudo do MEI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Previsão de 30 dias com variações sazonais</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Alerta de capacidade de investimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Simulação de cenários (ex: "se contratar X, o caixa dura até Y")</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Segmentação por canal de entrada (Pix, cartão, boleto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Exportação em PDF e Excel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Mensagens de alerta personalizadas</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('pme')}>
                  {isAnnual ? 'Assinar Anual PME' : 'Escolher PME'}
                </Button>
              </div>
            </div>

            {/* Média Plan */}
            <div className="p-8 pb-20 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full relative" 
              style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Brain className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Média</h3>
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
                  <span>Tudo do PME</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Previsões multi-cenário (normal, otimista, crítico)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Agendamento de pagamentos futuros (planejamento)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Integração via API com sistema financeiro (opcional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Suporte com especialista em fluxo de caixa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Canal de atendimento com SLA de 2h úteis</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('media')}>
                  {isAnnual ? 'Assinar Anual Média' : 'Falar com Consultor'}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl text-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6" style={{ color: verdeMenta }} />
              <p className="font-medium">Garantia de satisfação de 7 dias</p>
            </div>
            <p className="text-sm" style={{ opacity: 0.8 }}>
              Se em 7 dias você achar que o EverGreen Flow não te deu clareza,<br />
              te devolvemos 100% do valor. Sem burocracia e sem enrolação.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / PROVA SOCIAL */}
      <section className="py-6">
=======
      {/* DEPOIMENTOS / PROVA SOCIAL */}
      <section className="py-16">
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: verdeMenta }}>
            Clientes que viram o futuro — e evitaram o rombo.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <MessageSquare className="h-6 w-6 mb-3" style={{ color: verdeMenta }} />
              <p className="mb-4">"Eu não sabia que ia faltar no dia 12. Adiei um pagamento e me salvei."</p>
              <p className="font-medium">Rafael</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Dono de gráfica</p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <MessageSquare className="h-6 w-6 mb-3" style={{ color: verdeMenta }} />
              <p className="mb-4">"Era comum me enrolar com imposto. Agora ele me avisa antes."</p>
              <p className="font-medium">Simone</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Loja de roupas</p>
            </div>
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <MessageSquare className="h-6 w-6 mb-3" style={{ color: verdeMenta }} />
              <p className="mb-4">"Só com o primeiro relatório, economizei R$800 em multa bancária."</p>
              <p className="font-medium">Leandro</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Oficina</p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* OFERTA + CROSS-SELL */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-8 text-center">
              EverGreen Flow inclui:
=======
      {/* GARANTIA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Garantia Visão de Caixa
            </h2>
            <p className="text-lg mb-4">
              Se em 7 dias você achar que o Evergreen Flow não te deu clareza,<br />
              te devolvemos 100% do valor.
            </p>
            <blockquote className="italic border-l-4 pl-4 mb-4" style={{ borderColor: verdeMenta }}>
              Sem burocracia.<br />
              Sem enrolação.<br />
              É sua primeira projeção financeira com confiança.
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ color: verdeMenta }}>
              Dúvidas Frequentes
            </h2>
            <div className="divide-y divide-gray-200">
              {faqList.map((item, idx) => {
                const [open, setOpen] = useState(false);
                return (
                  <div key={item.question} className="py-4">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between text-lg font-semibold focus:outline-none transition-colors"
                      style={{ color: verdeMusgo }}
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: verdeMenta }} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 mt-2' : 'max-h-0'}`}
                      style={{ color: verdeMusgo, opacity: 0.9 }}
                    >
                      <p className="text-base leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA + CROSS-SELL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Evergreen Flow inclui:
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
            </h2>
            <ul className="mb-8 space-y-2 text-lg">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Previsão de saldo 30 a 90 dias</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-5 w-5" style={{ color: '#e53e3e' }} /> Alerta de risco de caixa</li>
              <li className="flex items-center gap-2"><Brain className="h-5 w-5" style={{ color: verdeMenta }} /> Insight gerado por IA</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-5 w-5" style={{ color: verdeMenta }} /> Dashboard de entrada e saída</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5" style={{ color: verdeMenta }} /> Suporte via WhatsApp</li>
            </ul>
            <div className="mt-6 text-base">
<<<<<<< HEAD
              Quer visão completa? Combine com o <span className="underline font-semibold">EverGreen DRE</span> ou o <span className="underline font-semibold">BI Starter</span> para gestão total.
=======
              Quer visão completa? Combine com o <span className="underline font-semibold">Evergreen DRE</span> ou o <span className="underline font-semibold">BI Starter</span> para gestão total.
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* FAQ Section - Updated to match DRE */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqList.map((item, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg transition-all duration-200" 
                  style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ background: bgIcone, borderRadius: '50%', padding: 8, display: 'inline-flex' }}>
                        <HelpCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                      </span>
                      <h3 className="text-lg font-medium" style={{ color: verdeMusgo }}>{item.question}</h3>
                    </div>
                    <span>
                      {isOpen ? 
                        <Minus className="h-5 w-5" style={{ color: verdeMenta }} /> : 
                        <Plus className="h-5 w-5" style={{ color: verdeMenta }} />
                      }
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <p style={{ opacity: 0.8, color: verdeMusgo }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GARANTIA - Move to the end like DRE */}
      <section className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Garantia Visão de Caixa
            </h2>
            <p className="text-lg mb-4">
              Acreditamos tanto que esse relatório vai te dar mais clareza<br />
              que oferecemos uma <strong>garantia simples:</strong>
            </p>
            <blockquote className="italic border-l-4 pl-4 mb-4" style={{ borderColor: verdeMenta }}>
              Se você não entender o relatório ou sentir que ele não te ajudou,<br />
              <strong>a gente refaz com você — ou devolve seu dinheiro.</strong>
            </blockquote>
            <p className="text-sm" style={{ opacity: 0.8 }}>Sem letra miúda. Sem burocracia.</p>
=======
      {/* CTA FINAL */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: verdeMenta }}>
              Pronto pra parar de ser surpreendido pelo seu próprio caixa?
            </h2>
            <p className="mb-4 text-lg" style={{ color: verdeMusgo, opacity: 0.85 }}>
              Chega de trabalhar no escuro.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
                Começar com o Evergreen Flow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
                Ver Exemplo Real de Previsão
              </Button>
            </div>
>>>>>>> 3b0c4f201385fd5d3f02f9cd9874e89373fb813b
          </div>
        </div>
      </section>
    </div>
  );
} 