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
  Mail
} from 'lucide-react';

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
              Ver exemplo de relatório
            </Button>
          </div>
        </div>
      </section>

      {/* DOR REAL + TENSÃO */}
      <section className="py-16">
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
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: verdeMenta }}>
            Com o Evergreen Flow você...
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
      <section className="py-16">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS / PROVA SOCIAL */}
      <section className="py-16">
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
            </h2>
            <ul className="mb-8 space-y-2 text-lg">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} /> Previsão de saldo 30 a 90 dias</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-5 w-5" style={{ color: '#e53e3e' }} /> Alerta de risco de caixa</li>
              <li className="flex items-center gap-2"><Brain className="h-5 w-5" style={{ color: verdeMenta }} /> Insight gerado por IA</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-5 w-5" style={{ color: verdeMenta }} /> Dashboard de entrada e saída</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5" style={{ color: verdeMenta }} /> Suporte via WhatsApp</li>
            </ul>
            <div className="mt-6 text-base">
              Quer visão completa? Combine com o <span className="underline font-semibold">Evergreen DRE</span> ou o <span className="underline font-semibold">BI Starter</span> para gestão total.
            </div>
          </div>
        </div>
      </section>

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
          </div>
        </div>
      </section>
    </div>
  );
} 