"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  Brain,
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  Target,
  FileSignature,
  Scale,
  Zap,
  Mail,
  Lock
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
    question: 'Preciso ser empresa pra usar?',
    answer: 'Não. Autônomos, freelancers, startups e MEIs também usam.'
  },
  {
    question: 'Serve pra fechar contrato com cliente grande?',
    answer: 'Sim. Você pode adaptar os termos e assinar online.'
  },
  {
    question: 'Vai substituir meu advogado?',
    answer: 'Não. Serve pra documentos simples e operacionais. Pra casos complexos, indicamos parceiros.'
  },
  {
    question: 'Tem limite de uso?',
    answer: 'Você pode contratar por documento (R$49) ou plano mensal (R$89 com até 5 contratos).'
  },
  {
    question: 'Posso testar antes?',
    answer: 'Sim! Você pode gerar uma proposta comercial gratuita.'
  }
];

export default function LegalBotLanding() {
  return (
    <div style={{ background: verdeMusgo }} className="min-h-screen">
      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#fff' }}>
            Gerar um contrato não precisa mais ser<br />
            <span style={{ color: verdeMenta }}>caro, demorado ou complicado.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-8 mt-4" style={{ color: amareloBaunilha }}>
            Com o EverGreen LegalBot, você cria contratos, propostas e termos profissionais em minutos — com ajuda da IA e modelos testados.
          </p>
          <p className="text-lg mb-8" style={{ color: '#fff', opacity: 0.85 }}>
            Tudo pronto pra assinar, enviar ou adaptar.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
              Quero meu contrato agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
              Ver exemplo completo
            </Button>
          </div>
        </div>
      </section>

      {/* DOR REAL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: amareloBaunilha }}>
            O que acontece com quem não formaliza?
          </h2>
          <div className="p-8 rounded-2xl shadow-lg mb-8" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 mt-1" style={{ color: '#e53e3e' }} />
                <div>
                  <span className="font-semibold">Toma calote e não pode cobrar</span>
                  <p className="text-sm mt-1" style={{ opacity: 0.8 }}>Sem contrato, sem prova, sem direito.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 mt-1" style={{ color: '#e53e3e' }} />
                <div>
                  <span className="font-semibold">Perde a venda por falta de proposta</span>
                  <p className="text-sm mt-1" style={{ opacity: 0.8 }}>Cliente grande pede documento e você trava.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 mt-1" style={{ color: '#e53e3e' }} />
                <div>
                  <span className="font-semibold">Confia na palavra e se dá mal</span>
                  <p className="text-sm mt-1" style={{ opacity: 0.8 }}>Acordo verbal não tem valor legal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 mt-1" style={{ color: '#e53e3e' }} />
                <div>
                  <span className="font-semibold">Usa contrato genérico e toma processo</span>
                  <p className="text-sm mt-1" style={{ opacity: 0.8 }}>Modelo da internet não protege seu negócio.</p>
                </div>
              </div>
            </div>
            <div className="text-lg font-bold mt-6 text-center" style={{ color: '#e53e3e' }}>
              O nome disso é negligência jurídica. E custa caro.
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: verdeMenta }}>
            Com o EverGreen LegalBot você:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <FileText className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Gera documentos oficiais</span>
              <span className="text-sm text-center">Proposta, contrato, NDA e mais</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Brain className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Personaliza com seu negócio</span>
              <span className="text-sm text-center">Cliente, termos e condições</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <FileSignature className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Assina online</span>
              <span className="text-sm text-center">Clicksign, ZapSign e mais</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Clock className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Recebe em minutos</span>
              <span className="text-sm text-center">PDF e Google Docs</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Brain className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Tira dúvidas com IA</span>
              <span className="text-sm text-center">Ou fala com advogado parceiro</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Scale className="h-8 w-8 mb-3" style={{ color: verdeMenta }} />
              <span className="font-bold mb-2">Termos seguros</span>
              <span className="text-sm text-center">Modelos validados por especialistas</span>
            </div>
          </div>
          <div className="text-center mt-10 text-base" style={{ color: amareloBaunilha }}>
            Sem blá-blá-blá jurídico. Só o que você precisa, rápido.
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: amareloBaunilha }}>
            Como Funciona:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>1</span>
              <FileText className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Escolhe o tipo de documento</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>2</span>
              <Brain className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Responde perguntas simples</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>3</span>
              <Zap className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">IA monta automaticamente</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>4</span>
              <Mail className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Recebe por e-mail ou WhatsApp</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <span className="font-bold text-lg mb-2 flex items-center justify-center w-8 h-8 rounded-full" style={{ background: bgIcone, color: verdeMenta }}>5</span>
              <FileSignature className="h-8 w-8 mb-2" style={{ color: verdeMenta }} />
              <span className="text-center">Ajusta e assina online</span>
            </div>
          </div>
          <div className="mt-10 text-center" style={{ color: amareloBaunilha }}>
            <Brain className="h-6 w-6 mx-auto mb-2" style={{ color: verdeMenta }} />
            <span>Bônus: IA te ajuda a entender cláusulas e condições</span>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS DISPONÍVEIS */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            O que você pode gerar com 1 clique:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <FileText className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">Contrato de Prestação de Serviço</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Lock className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">NDA (Acordo de Confidencialidade)</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Target className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">Termo de Parceria ou Cooperação</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <FileText className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">Proposta Comercial</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Scale className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">Termos e Condições de Serviço</span>
            </div>
            <div className="p-6 rounded-2xl shadow-lg flex items-center gap-4" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <Mail className="h-6 w-6" style={{ color: verdeMenta }} />
              <span className="font-semibold">Carta de Cobrança</span>
            </div>
          </div>
          <div className="text-center mt-6" style={{ color: amareloBaunilha }}>
            E tudo com linguagem simples, clara e profissional.
          </div>
        </div>
      </section>

      {/* O QUE NÃO FAZ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: amareloBaunilha }}>
            O que o LegalBot <span style={{ color: '#e53e3e' }}>não</span> faz:
          </h2>
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />
                <span>Contrato de sociedade</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />
                <span>Petição jurídica</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />
                <span>Defesa judicial</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />
                <span>Contrato CLT</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" style={{ color: '#e53e3e' }} />
                <span>Alteração de contrato social</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="font-semibold">Pra isso, indicamos um advogado parceiro.</p>
              <p className="mt-2" style={{ color: verdeMenta }}>Nosso foco é o operacional do dia a dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: verdeMenta }}>
            Qual a diferença entre LegalBot e DocFast?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-bold">LegalBot</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Gera contrato, proposta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Automatiza documento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Foco em operacional rápido</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl shadow-lg" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8" style={{ color: verdeMenta }} />
                <h3 className="text-xl font-bold">DocFast</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Abre empresa, registra marca</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Formaliza no cartório, junta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: verdeMenta }} />
                  <span>Foco em regularização oficial</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
              Ver combos do EG.OS
            </Button>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg text-center" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <ShieldCheck className="h-7 w-7" style={{ color: verdeMenta }} /> Garantia Legal EverGreen
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" style={{ color: verdeMenta }} />
                <span>Todo documento vem com aviso de uso padrão</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Scale className="h-5 w-5" style={{ color: verdeMenta }} />
                <span>Modelo validado por especialistas</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Brain className="h-5 w-5" style={{ color: verdeMenta }} />
                <span>Termos de uso que protegem você e seu negócio</span>
              </div>
            </div>
            <blockquote className="italic border-l-4 pl-4 mb-4" style={{ borderColor: verdeMenta }}>
              Se não entender, a IA te explica.<br />
              Se for um caso complexo, oferecemos validação com advogado parceiro.
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

      {/* OFERTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl shadow-lg" style={{ background: amareloBaunilha, color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-8 text-center">
              Planos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl shadow-lg" style={{ background: '#fff', boxShadow: sombraCard, border: bordaCard }}>
                <div className="text-center mb-4">
                  <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: verdeMenta }} />
                  <h3 className="font-bold text-lg">Documento avulso</h3>
                  <p className="text-2xl font-bold mt-2">R$49</p>
                  <p className="text-sm">cada</p>
                </div>
              </div>
              <div className="p-6 rounded-xl shadow-lg" style={{ background: '#fff', boxShadow: sombraCard, border: bordaCard }}>
                <div className="text-center mb-4">
                  <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: verdeMenta }} />
                  <h3 className="font-bold text-lg">Plano Mensal</h3>
                  <p className="text-2xl font-bold mt-2">R$89</p>
                  <p className="text-sm">5 docs/mês</p>
                </div>
              </div>
              <div className="p-6 rounded-xl shadow-lg" style={{ background: '#fff', boxShadow: sombraCard, border: bordaCard }}>
                <div className="text-center mb-4">
                  <ShieldCheck className="h-8 w-8 mx-auto mb-2" style={{ color: verdeMenta }} />
                  <h3 className="font-bold text-lg">Plano Pro</h3>
                  <p className="text-2xl font-bold mt-2">R$189</p>
                  <p className="text-sm">10 docs + validação + assinatura</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="font-semibold">Combine com o DocFast ou EG.Flow para gestão completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6" style={{ background: '#fff', color: verdeMusgo, boxShadow: sombraCard, border: bordaCard }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: verdeMenta }}>
              Pronto pra parar de adiar o contrato que te protege?
            </h2>
            <p className="mb-4 text-lg" style={{ color: verdeMusgo, opacity: 0.85 }}>
              A formalização que você precisa. No tempo que você tem.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <Button size="lg" style={{ background: verdeMenta, color: verdeMusgo, fontWeight: 700 }} className="hover:brightness-90 border-none shadow-md">
                Gerar meu primeiro contrato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" style={{ color: verdeMenta, borderColor: verdeMenta }} className="hover:bg-[#0e3a27] border-2">
                Ver modelos disponíveis
              </Button>
            </div>
            <div className="mt-4 p-4 rounded-lg" style={{ background: amareloBaunilha }}>
              <p className="font-bold" style={{ color: '#e53e3e' }}>
                🚨 BÔNUS: Até sexta, seu primeiro contrato com assinatura digital grátis!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 