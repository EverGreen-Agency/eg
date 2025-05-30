import { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot,
  CheckCircle,
  AlertTriangle,
  Clock,
  MessageCircle,
  Users,
  User,
  CalendarCheck,
  Mail,
  ShieldCheck,
  PhoneCall,
  BarChart2,
  FileText,
  Building2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Evergreen WhatsBot - Atendimento inteligente 24h',
  description: 'Transforme o WhatsApp em canal de vendas e atendimento 24h com IA treinada no seu tom. Nunca mais perca lead por falta de resposta.',
};

export default function WhatsBotPage() {
  const verdeMusgo = '#09231B';
  const verdeMenta = '#3AC97B';
  const amareloBaunilha = '#FFF4C7';

  return (
    <main style={{ background: amareloBaunilha }} className="min-h-screen">
      {/* HERO */}
      <section style={{ background: verdeMusgo }} className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: amareloBaunilha }}>
              Seu próximo atendente é um bot — e seus clientes nem vão perceber.
            </h1>
            <p className="text-xl mb-8 mt-4" style={{ color: verdeMenta }}>
              <Bot className="inline h-6 w-6 mr-2 align-middle" style={{ color: verdeMenta }} />
              O Evergreen WhatsBot conversa como gente, responde com precisão<br />
              e transforma WhatsApp em canal de vendas e atendimento 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contato" 
                className="px-8 py-4 rounded-lg font-semibold border-none shadow-md"
                style={{ background: verdeMenta, color: verdeMusgo }}
              >
                Quero meu atendente com IA
              </Link>
              <Link 
                href="#exemplo" 
                className="px-8 py-4 rounded-lg font-semibold border-2"
                style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent' }}
              >
                Ver exemplo de conversa real
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: verdeMusgo }}>
              O que acontece quando seu atendimento depende de você?
            </h2>
            <div className="p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />Cliente pergunta e ninguém responde</li>
                <li className="flex items-center gap-3"><Clock className="h-6 w-6" style={{ color: verdeMenta }} />Lead engajado cai no limbo</li>
                <li className="flex items-center gap-3"><PhoneCall className="h-6 w-6" style={{ color: verdeMenta }} />Você tá focado, mas o celular toca</li>
                <li className="flex items-center gap-3"><BarChart2 className="h-6 w-6" style={{ color: verdeMenta }} />Atendimento só funciona em horário comercial</li>
              </ul>
              <div className="text-lg font-bold mt-6 text-center" style={{ color: '#e53e3e' }}>
                Resultado: perde venda, perde tempo, perde confiança.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: verdeMusgo }}>
              Com o Evergreen WhatsBot, você:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Clock className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Atendimento 24/7 no WhatsApp</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <MessageCircle className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Responde dúvidas frequentes automaticamente</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <CalendarCheck className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Agenda reuniões ou coleta dados de lead</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Mail className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Integra com formulário, CRM ou Calendly</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Bot className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">IA treinada com seu conteúdo, tom e estilo</span>
              </div>
            </div>
            <div className="text-center mt-10 text-base" style={{ color: verdeMusgo }}>
              Tudo configurado pra parecer que é você falando.
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20" style={{ background: amareloBaunilha }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Como Funciona
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>1</div>
                <MessageCircle className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Você envia 10 dúvidas mais frequentes dos seus clientes</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>2</div>
                <Bot className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">A IA aprende o conteúdo e cria respostas claras e naturais</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>3</div>
                <PhoneCall className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Configuramos o bot em seu WhatsApp (via N8N ou API)</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <div className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: verdeMenta + '33', color: verdeMusgo }}>4</div>
                <BarChart2 className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <span className="text-center">Você recebe um painel e um tutorial de uso</span>
              </div>
            </div>
            <div className="mt-10 text-center" style={{ color: verdeMusgo }}>
              <CheckCircle className="h-6 w-6 mx-auto mb-2" style={{ color: verdeMenta }} />
              <span>Pode redirecionar pra pessoa real quando necessário. Coleta e envia os dados do lead automaticamente.</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLO DE CONVERSA */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: verdeMusgo }}>
              Exemplo real de conversa
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4" style={{ border: `1.5px solid ${verdeMenta}22` }}>
              <div className="flex gap-2 items-end">
                <Bot className="h-6 w-6" style={{ color: verdeMenta }} />
                <div className="rounded-2xl px-4 py-2" style={{ background: verdeMenta + '22', color: verdeMusgo, maxWidth: 320 }}>
                  Oi! Posso te ajudar com dúvidas sobre nossos serviços.
                </div>
              </div>
              <div className="flex gap-2 items-end justify-end">
                <div className="rounded-2xl px-4 py-2" style={{ background: amareloBaunilha, color: verdeMusgo, maxWidth: 320 }}>
                  Vocês fazem automação de funil?
                </div>
                <User className="h-6 w-6" style={{ color: verdeMenta }} />
              </div>
              <div className="flex gap-2 items-end">
                <Bot className="h-6 w-6" style={{ color: verdeMenta }} />
                <div className="rounded-2xl px-4 py-2" style={{ background: verdeMenta + '22', color: verdeMusgo, maxWidth: 320 }}>
                  Sim! Temos o serviço Evergreen Flow, que mapeia entradas, saídas e previsões de caixa. Quer que eu te mande o link com mais informações?
                </div>
              </div>
              <div className="flex gap-2 items-end justify-end">
                <div className="rounded-2xl px-4 py-2" style={{ background: amareloBaunilha, color: verdeMusgo, maxWidth: 320 }}>
                  Pode ser.
                </div>
                <User className="h-6 w-6" style={{ color: verdeMenta }} />
              </div>
              <div className="flex gap-2 items-end">
                <Bot className="h-6 w-6" style={{ color: verdeMenta }} />
                <div className="rounded-2xl px-4 py-2" style={{ background: verdeMenta + '22', color: verdeMusgo, maxWidth: 320 }}>
                  Aqui está: [link]. Posso agendar um bate-papo com nosso time também?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONALIZAÇÃO POR PORTE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: verdeMusgo }}>
              Seu WhatsBot escala junto com você:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <User className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">MEI / Autônomo</span>
                <span className="text-sm text-center">WhatsApp com respostas fixas e agendamento simples</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Users className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">PME</span>
                <span className="text-sm text-center">Multi-canal (Whats, e-mail), coleta de lead e redirecionamento</span>
              </div>
              <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
                <Building2 className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
                <span className="font-bold mb-2">Média Empresa</span>
                <span className="text-sm text-center">Treinamento com histórico + chatbot ativo no site</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Depoimentos / Resultados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Eu perdi MUITA venda por não conseguir responder rápido. Agora tenho cliente novo todo dia pelo Whats.”</p>
                <p className="font-semibold text-gray-900">— Rafa, consultora de imagem</p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Atendia no improviso, agora tenho um bot treinado com meu jeito de falar.”</p>
                <p className="font-semibold text-gray-900">— Luana, personal trainer</p>
              </div>
              <div className="bg-white p-6 rounded-lg flex flex-col items-center">
                <User className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                <p className="text-gray-700 mb-4">“Economizei 2h por dia e ainda aumentei as reuniões agendadas.”</p>
                <p className="font-semibold text-gray-900">— Diego, agência digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURANÇA E CONTROLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Segurança e Controle
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Você pode aprovar todas as respostas</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <User className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Bot redireciona pra humano quando necessário</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FileText className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Toda conversa fica registrada</span>
                </div>
              </div>
              <blockquote className="italic border-l-4 pl-4 mb-4" style={{ borderColor: verdeMenta }}>
                Você mantém o controle. O bot faz o trabalho chato.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Dúvidas Frequentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <Bot className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">O bot substitui meu atendimento humano?</h3>
                <p className="text-gray-600">Não. Ele automatiza o primeiro contato e redireciona quando necessário.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <MessageCircle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Dá pra treinar com meu conteúdo específico?</h3>
                <p className="text-gray-600">Sim. A IA aprende com seus textos, PDFs, áudios, até vídeo se quiser.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <PhoneCall className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Funciona com qualquer WhatsApp?</h3>
                <p className="text-gray-600">Sim! Com Business funciona direto. Com número comum, adaptamos com N8N ou API.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm" style={{ border: `1.5px solid ${verdeMenta}22` }}>
                <CheckCircle className="h-5 w-5 mb-1" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-semibold mb-3">Posso testar antes?</h3>
                <p className="text-gray-600">Claro. Podemos te mostrar um bot funcionando com conteúdo genérico, e depois adaptar o seu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Planos & Oferta
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">WhatsBot Basic</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$97/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />WhatsApp com 10 respostas fixas + agendamento simples</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" style={{ background: verdeMenta, color: verdeMusgo, padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600 }}>
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">WhatsBot Pro</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$197/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />Respostas treinadas por IA + integração + formulário de lead</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4">WhatsBot Enterprise</h3>
                <p className="text-4xl font-bold" style={{ color: verdeMenta }}>R$397/mês</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" style={{ color: verdeMenta }} />Chat multi-canal + treinamento com histórico + site + suporte full</li>
                </ul>
                <Link 
                  href="#contato" 
                  className="block w-full py-3 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Começar Agora
                </Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="font-semibold">Combo Evergreen: integre com LegalBot, PitchBuilder e Evergreen Flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20" style={{ background: verdeMusgo }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6" style={{ background: '#fff', color: verdeMusgo, border: `1.5px solid ${verdeMenta}22` }}>
              <h2 className="text-2xl font-bold mb-2" style={{ color: verdeMenta }}>
                Quantas vendas você já perdeu por não responder a tempo?
              </h2>
              <p className="mb-4 text-lg" style={{ color: verdeMusgo, opacity: 0.85 }}>
                Com o WhatsBot, seu atendimento nunca mais dorme.
              </p>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <Link 
                  href="#contato" 
                  className="px-8 py-4 rounded-lg font-bold text-center transition shadow-md hover:brightness-90"
                  style={{ background: verdeMenta, color: verdeMusgo, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px 0 rgba(58,201,123,0.10)' }}
                >
                  Quero meu WhatsBot agora
                </Link>
                <Link 
                  href="#exemplo" 
                  className="px-8 py-4 rounded-lg font-bold text-center border-2 transition hover:bg-[#0e3a27]"
                  style={{ color: verdeMenta, borderColor: verdeMenta, background: 'transparent', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  Ver exemplo funcionando
                </Link>
              </div>
              <div className="mt-4 p-4 rounded-lg" style={{ background: amareloBaunilha }}>
                <p className="font-bold" style={{ color: verdeMenta }}>
                  Bônus: Treinamento gratuito com IA no seu estilo até sexta-feira!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="py-20" style={{ background: verdeMenta + '22' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: verdeMusgo }}>
              Soluções Completas para seu Negócio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/eg-os/pitchbuilder" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <FileText className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">PitchBuilder</h3>
                  <p className="text-gray-600 text-center">Gera script e alimenta o bot</p>
                </div>
              </Link>
              <Link href="/eg-os/legalbot" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <CheckCircle className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">Evergreen LegalBot</h3>
                  <p className="text-gray-600 text-center">Envio de propostas ou contratos via Whats</p>
                </div>
              </Link>
              <Link href="/eg-os/flow" className="block">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <BarChart2 className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
                  <h3 className="text-xl font-semibold mb-3">Evergreen Flow</h3>
                  <p className="text-gray-600 text-center">Automatize agendamento financeiro</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 