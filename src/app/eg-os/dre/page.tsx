"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle, 
  PieChart, 
  TrendingUp, 
  Zap, 
  Wallet,
  BarChart3,
  FileText,
  MessageSquare,
  Clock,
  Gift,
  ChevronRight,
  AlertCircle,
  DollarSign,
  LineChart,
  Smartphone,
  Mail,
  MessageCircle,
  ChevronDown,
  ShieldCheck,
  Brain,
  Target,
  HelpCircle,
  Plus,
  Minus,
  Check,
  AreaChart
} from 'lucide-react';
import { useState } from 'react';
import PricePackages from '@/components/EgFinance';

// Cores da marca
const verdeMusgo = '#092B1B';
const verdeMenta = '#3AC97B';
const amareloBaunilha = '#FFF4C7';
const cinzaClaro = '#F6F8F7';
const sombraCard = '0 4px 24px 0 rgba(9,43,27,0.10)';
const bordaCard = `1.5px solid ${verdeMenta}22`;
const bgIcone = `${verdeMenta}22`;

// FAQ data
const faqList = [
  {
    question: 'Preciso entender de finanças pra usar o DRE?',
    answer: 'De jeito nenhum. Nosso formulário é simples e adaptado pro seu perfil. A entrega vem com explicação fácil e visual.'
  },
  {
    question: 'Isso substitui meu contador?',
    answer: 'Não. O DRE é gerencial — te ajuda a tomar decisão, não a declarar imposto. Muitos contadores inclusive usam junto com clientes.'
  },
  {
    question: 'Em quanto tempo recebo meu DRE?',
    answer: 'Em até 24h úteis após o preenchimento do formulário.'
  },
  {
    question: 'E se eu errar algum dado no preenchimento?',
    answer: 'Você pode corrigir e reenviar. Nosso time de suporte também tá à disposição pra revisar com você.'
  },
  {
    question: 'Vai ter acompanhamento mensal?',
    answer: 'Sim! Se quiser, você pode assinar a versão recorrente do DRE mensal. Mais controle, menos estresse.'
  },
];

export default function DreLanding() {  
  const [isAnnual, setIsAnnual] = useState(false);  
  
  // Add scroll function with offset
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
  
  // Stripe checkout URLs for DRE-only plans
  const stripeCheckoutUrls = {
    mei: {
      monthly: "https://buy.stripe.com/eVq9ATgHf8r27GKgMx08g0a",
      annual: "https://buy.stripe.com/9B6bJ1fDbaza6CG3ZL08g0b"
    },
    pme: {
      monthly: "https://buy.stripe.com/fZu14naiR4aMd149k508g09",
      annual: "https://buy.stripe.com/cNieVd62BgXyf9c67T08g08"
    },
    media: {
      monthly: "https://buy.stripe.com/14k3cednyaAqa7S5kl",
      annual: "https://buy.stripe.com/8x2aEXaiR8r22mq3ZL08g02"
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
    <div style={{ background: verdeMusgo }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#fff' }}>
            Nunca mais trabalhe um mês inteiro pra no fim perguntar:
          </h1>
          <p className="text-2xl font-medium mb-8" style={{ color: amareloBaunilha }}>
            "Cadê o dinheiro que entrou?"
          </p>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo }}>
            <p className="text-xl mb-6 font-semibold">
              EverGreen DRE mostra, de forma clara e sem planilhas quebradas:
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6" style={{ color: verdeMenta, marginRight: 12 }} />
                Quanto você lucrou
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6" style={{ color: verdeMenta, marginRight: 12 }} />
                Onde você gastou demais
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6" style={{ color: verdeMenta, marginRight: 12 }} />
                O que precisa ajustar pra melhorar já no próximo mês
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} 
              className="hover:brightness-90 border-none shadow-md"
              onClick={() => scrollToSection('price-packages')}
            >
              Quero Meu Relatório Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              style={{ color: verdeMenta, borderColor: verdeMenta }} 
              className="hover:bg-[#0e3a27] border-2"
              onClick={() => scrollToSection('exemplo-resultado')}
            >
              Ver um Exemplo Real
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
            Você sente que vende bem… mas não vê dinheiro no fim do mês?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <TrendingUp className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: verdeMusgo }}>Vende mais → lucra menos</h3>
              <p style={{ opacity: 0.8, color: verdeMusgo }}>Volume não é sinônimo de lucro</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: verdeMusgo }}>Sabe quanto fatura → não sabe quanto sobra</h3>
              <p style={{ opacity: 0.8, color: verdeMusgo }}>Faturamento não é resultado</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Wallet className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: verdeMusgo }}>Paga tudo no débito → esquece o custo real</h3>
              <p style={{ opacity: 0.8, color: verdeMusgo }}>Dinheiro na conta não é lucro</p>
            </div>
          </div>
          <p className="text-center text-xl font-medium mt-12" style={{ color: amareloBaunilha }}>
            Você não precisa de um contador.<br />
            Você precisa de <span style={{ color: verdeMenta }}>visão de dono.</span>
          </p>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            O que muda quando você começa a usar o EverGreen DRE:
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead style={{ background: amareloBaunilha }}>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: verdeMusgo }}>Antes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: verdeMusgo }}>Depois</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm" style={{ color: verdeMusgo, opacity: 0.8 }} >"Acho que tô no lucro"</td>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: verdeMenta }}>Lucro exato, margem exata</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm" style={{ color: verdeMusgo, opacity: 0.8 }} >"Tô com dinheiro, mas devo"</td>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: verdeMenta }}>Controle de entrada e saída claro</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm" style={{ color: verdeMusgo, opacity: 0.8 }} >"Não sei de onde vem o rombo"</td>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: verdeMenta }}>Diagnóstico visual com gráfico</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm" style={{ color: verdeMusgo, opacity: 0.8 }} >"Fiz mais de R$10k esse mês"</td>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: verdeMenta }} >"Sobraram R$2.400 e sei pra onde foram"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: amareloBaunilha }}>
            Como funciona:
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <div className="p-6 rounded-full inline-block mb-4" style={{ background: verdeMenta }}>
                <FileText className="h-8 w-8" style={{ color: verdeMusgo }} />
              </div>
              <h3 className="text-lg font-medium" style={{ color: '#fff' }}>1. Preenche um formulário rápido</h3>
              <p className="mt-2" style={{ color: amareloBaunilha, opacity: 0.8 }}>Adaptado ao seu negócio</p>
            </div>
            <ChevronRight className="h-8 w-8" style={{ color: verdeMenta, opacity: 0.5, display: 'none' }} />
            <div className="flex-1 text-center">
              <div className="p-6 rounded-full inline-block mb-4" style={{ background: verdeMenta }}>
                <Zap className="h-8 w-8" style={{ color: verdeMusgo }} />
              </div>
              <h3 className="text-lg font-medium" style={{ color: '#fff' }}>2. IA processa seus dados</h3>
              <p className="mt-2" style={{ color: amareloBaunilha, opacity: 0.8 }}>Análise inteligente</p>
            </div>
            <ChevronRight className="h-8 w-8" style={{ color: verdeMenta, opacity: 0.5, display: 'none' }} />
            <div className="flex-1 text-center">
              <div className="p-6 rounded-full inline-block mb-4" style={{ background: verdeMenta }}>
                <PieChart className="h-8 w-8" style={{ color: verdeMusgo }} />
              </div>
              <h3 className="text-lg font-medium" style={{ color: '#fff' }}>3. Recebe seu DRE visual</h3>
              <p className="mt-2" style={{ color: amareloBaunilha, opacity: 0.8 }}>PDF + resumo mensal</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <FileText className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>PDF bonito</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <LineChart className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>Gráficos de evolução</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="h-6 w-6" style={{ color: verdeMenta }} />
              <span style={{ color: amareloBaunilha }}>Entregue por e-mail e WhatsApp</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: verdeMenta }}>
              <Clock className="h-5 w-5" style={{ color: verdeMusgo }} />
              <span style={{ color: verdeMusgo }}>Em até 24h úteis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            A gente fala a sua língua — não importa o tamanho do seu negócio:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">MEI/Autônomo</h3>
              <p style={{ opacity: 0.8 }}>Relatório simples com lucros reais</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 81 mil/ano
              </span>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">PME</h3>
              <p style={{ opacity: 0.8 }}>DRE por canal, margem, custo fixo</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Até R$ 4,8 mi/ano
              </span>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <TrendingUp className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Média</h3>
              <p style={{ opacity: 0.8 }}>Análise gerencial com centro de custo</p>
              <span className="absolute right-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: verdeMenta, color: '#fff' }}>
                Acima de R$ 4,8 mi/ano
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="exemplo-resultado" className="text-3xl font-bold mb-8 text-center" style={{ color: amareloBaunilha }}>
            Exemplo de resumo:
          </h2>
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="border-l-4 p-4 mb-6" style={{ borderColor: verdeMenta, background: amareloBaunilha }}>
              <p>
                "Você teve lucro de R$3.150, com 25% de margem.<br />
                Seu maior custo foi energia elétrica (R$600), acima da média mensal.<br />
                Considere rever uso de equipamentos ou horários de pico."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl shadow" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 12, display: 'inline-flex' }}>
                  <LineChart className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
                <p className="text-2xl font-bold mt-2">R$3.150</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>Lucro</p>
              </div>
              <div className="p-4 rounded-xl shadow" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 12, display: 'inline-flex' }}>
                  <PieChart className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
                <p className="text-2xl font-bold mt-2">25%</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>Margem</p>
              </div>
              <div className="p-4 rounded-xl shadow" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 12, display: 'inline-flex' }}>
                  <AlertCircle className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
                <p className="text-2xl font-bold mt-2">R$600</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>Maior gasto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            Quem já usa, diz:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <MessageSquare className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
              </div>
              <p className="mb-4">"Eu achava que tava no lucro. Descobri que tava pagando pra trabalhar."</p>
              <p className="font-medium">Fernanda</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Confeiteira</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <MessageSquare className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
              </div>
              <p className="mb-4">"Fiquei com vergonha de ver como gastava. Mas agora tá tudo claro."</p>
              <p className="font-medium">Lucas</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Oficina de bikes</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <MessageSquare className="h-6 w-6 mb-2" style={{ color: verdeMenta }} />
                </span>
              </div>
              <p className="mb-4">"Meu contador não me dava isso. Agora sei até o lucro por delivery."</p>
              <p className="font-medium">André</p>
              <p className="text-sm" style={{ opacity: 0.7 }}>Hamburgueria artesanal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Seu EverGreen DRE inclui:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6" style={{ color: verdeMenta }} />
                <span>DRE + gráficos PDF</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="h-6 w-6" style={{ color: verdeMenta }} />
                <span>Acesso via link</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6" style={{ color: verdeMenta }} />
                <span>Resumo mensal com alertas</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" style={{ color: verdeMenta }} />
                <span>Canal de suporte via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Package Section - MOVED UP */}
      <section id="price-packages" className="pt-4">
        <PricePackages />
      </section>

      {/* Card de Transição - Posicionado na fronteira entre seções */}
      <div className="relative z-10" style={{ marginTop: "-1.5rem", marginBottom: "-4rem" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: verdeMusgo }}>
              Ainda não quer tudo? Sem problemas.
            </h3>
            <p className="text-lg mb-3">
              Você também pode contratar só o que precisa — por enquanto.
            </p>
            <p className="text-lg">
              A seguir, veja as opções de planos <strong>individuais</strong> para DRE.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section - NOVO LAYOUT */}
      <section className="py-6 pt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            EVERGREEN DRE
          </h2>
          <p className="text-center mb-12" style={{ color: amareloBaunilha }}>
            Análise de Resultados e Lucro para sua empresa
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
            {/* Plano MEI */}
            <div className="p-8 pb-20 rounded-2xl flex flex-col h-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 bg-white relative" style={{ color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">MEI</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$1.470' : 'R$147'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$294</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>DRE mensal simplificado</span>
                </li>
                <li className="flex items-start gap-2">
                  <AreaChart className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Cálculo de lucro líquido e margem</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Análise de maiores gastos</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Upload de dados via formulário ou WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <Brain className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico IA com 1 insight por mês</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('mei')}>
                  {isAnnual ? 'Assinar Anual MEI' : 'Sou MEI!'}
                </Button>
              </div>
            </div>

            {/* Plano PME */}
            <div className="p-8 pb-20 rounded-2xl flex flex-col h-full shadow-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 bg-[#104027] scale-105 relative" style={{ color: '#fff', boxShadow: sombraCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: verdeMenta, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMusgo }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">PME</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$1.970' : 'R$197'}</p>
                <p className="text-sm" style={{ opacity: 0.8, color: amareloBaunilha }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$394</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Tudo do MEI</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Comparativo entre meses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Margem por produto/serviço (input manual)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Classificação automática de categorias (IA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Exportação em PDF e compartilhamento por link</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Análise setorial (benchmark)</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('pme')}>
                  {isAnnual ? 'Assinar Anual PME' : 'Escolher PME'}
                </Button>
              </div>
            </div>

            {/* Plano Média Empresa */}
            <div className="p-8 pb-20 rounded-2xl flex flex-col h-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 bg-white relative" style={{ color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Brain className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Média</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold" style={{ color: verdeMenta }}>{isAnnual ? 'R$2.970' : 'R$297'}</p>
                <p className="text-sm" style={{ opacity: 0.8 }}>{isAnnual ? 'por ano' : 'por mês'}</p>
                {isAnnual && (
                  <p className="text-xs mt-1" style={{ color: verdeMenta }}>Economia de R$594</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Tudo do PME</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>DRE multiunidade ou multicentro de custo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Histórico acumulado anual</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Dashboards em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Diagnóstico mensal com especialista</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plus className="h-5 w-5 mt-0.5 min-w-5" style={{ color: verdeMenta }} />
                  <span>Recomendações práticas baseadas em margem e ROI</span>
                </li>
              </ul>
              <div className="absolute bottom-8 left-8 right-8">
                <Button className="w-full" style={{ background: verdeMenta, color: verdeMusgo }} onClick={() => handleCheckout('media')}>
                  {isAnnual ? 'Assinar Anual Média' : 'Escolher Média'}
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
              Aqui entendemos que você pode estar com o orçamento apertado. Por isso, oferecemos uma garantia de satisfação de 7 dias após a compra. É exclusiva para arrpendimento. 
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, index) => {
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
                      <h3 className="text-lg font-medium" style={{ color: verdeMusgo }}>{faq.question}</h3>
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
                      <p style={{ opacity: 0.8, color: verdeMusgo }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Garantia Visão de Dono
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
          </div>
        </div>
      </section>
    </div>
  );
} 