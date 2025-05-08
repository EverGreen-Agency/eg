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
  Target
} from 'lucide-react';
import { useState } from 'react';

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
  return (
    <div style={{ background: verdeMusgo }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#fff' }}>
            Nunca mais trabalhe um mês inteiro pra no fim perguntar:
          </h1>
          <p className="text-2xl font-medium mb-8" style={{ color: amareloBaunilha }}>
            "Cadê o dinheiro que entrou?"
          </p>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo }}>
            <p className="text-xl mb-6 font-semibold">
              Evergreen DRE mostra, de forma clara e sem planilhas quebradas:
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
            <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
              Quero Meu Relatório Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
              Ver um Exemplo Real
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            O que muda quando você começa a usar o Evergreen DRE:
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
      <section className="py-16">
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
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMenta }}>
            A gente fala a sua língua — não importa o tamanho do seu negócio:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <Smartphone className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">MEI</h3>
              <p style={{ opacity: 0.8 }}>Relatório simples com lucros reais</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">PME</h3>
              <p style={{ opacity: 0.8 }}>DRE por canal, margem, custo fixo</p>
            </div>
            <div className="p-8 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center justify-center mb-4">
                <span style={{ background: bgIcone, borderRadius: '50%', padding: 16, display: 'inline-flex' }}>
                  <TrendingUp className="h-8 w-8" style={{ color: verdeMenta }} />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Indústria</h3>
              <p style={{ opacity: 0.8 }}>Análise gerencial com centro de custo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: amareloBaunilha }}>
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
      <section className="py-16">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Seu pacote Evergreen DRE inclui:
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
            <div className="p-6 rounded-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center gap-3 mb-4">
                <Gift className="h-6 w-6" style={{ color: verdeMenta }} />
                <h3 className="text-lg font-semibold">BÔNUS de lançamento:</h3>
              </div>
              <p>
                Vídeo-análise personalizada por um analista parceiro.
              </p>
              <p className="text-sm mt-2" style={{ opacity: 0.7 }}>
                Válido até sexta ou limite de 30 DREs por semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2" style={{ color: verdeMenta }}>
              Perguntas Frequentes sobre o Evergreen DRE
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

      {/* Garantia Section */}
      <section className="py-16">
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

      {/* Conclusão/CTA Final */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: verdeMenta }}>
              Feche com segurança e clareza
            </h2>
            <ul className="mb-4 space-y-3 text-lg text-left mx-auto max-w-md">
              <li className="flex items-center gap-2"><Target className="h-5 w-5" style={{ color: verdeMenta }} /> DRE visual com IA</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Personalizado pra seu nível</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" style={{ color: verdeMenta }} /> Garantia sem risco</li>
              <li className="flex items-center gap-2"><Brain className="h-5 w-5" style={{ color: verdeMenta }} /> Explicado como se fosse pra humano, não contador</li>
            </ul>
            <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
              Quero meu DRE agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 