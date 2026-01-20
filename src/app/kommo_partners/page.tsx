import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { MessageCircle, Bot, BarChart3 } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Consultoria Kommo CRM | Parceiro Oficial - Evergreen MKT',
  description: 'Maximize suas vendas com a implementação e gestão do Kommo CRM. Somos parceiros oficiais especializados em automação e growth.',
}

export default function KommoPage() {
  return (
    <main className="min-h-screen bg-[#0D221B]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#09231B] via-[#0D221B] to-[#3AC97B]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-[#3AC97B]/10 text-[#3AC97B] text-sm font-semibold mb-6">
              Parceiro Oficial Kommo
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFF4C7] mb-6 leading-tight">
              Transforme seu WhatsApp em uma Máquina de Vendas com <span className="text-[#3AC97B]">Kommo CRM</span>
            </h1>
            <p className="text-xl text-[#E6E3B1]/80 mb-8 max-w-2xl mx-auto">
              Centralize conversas, automatize follow-ups e gerencie seu funil de vendas em um só lugar. Implementação profissional por especialistas certificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contato"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-[#3AC97B] text-[#09231B] hover:bg-[#3AC97B]/90 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
              >
                Solicitar Consultoria
              </Link>
              <Link
                href="https://www.kommo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-transparent border border-[#3AC97B] text-[#FFF4C7] hover:bg-[#3AC97B]/10 transition-colors duration-300"
              >
                Conheça a Kommo
              </Link>
              <Link
                href="https://wa.me/5511989966989"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
              >
                <FaWhatsapp className="text-2xl mr-2" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Badge Section */}
      <section className="py-12 border-y border-[#3AC97B]/10 bg-[#09231B]/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#E6E3B1]/60 text-sm uppercase tracking-wider mb-8">Reconhecido Oficialmente</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="relative w-48 h-24 transition-all duration-500">
              <Image
                src="/images/logo_kommo.webp"
                alt="Logo Kommo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-32">
              <Image
                src="/images/kommopartner.png"
                alt="Selo Parceiro Kommo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0D221B]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFF4C7] mb-4">Por que escolher o Kommo CRM?</h2>
            <p className="text-[#E6E3B1]/70 max-w-2xl mx-auto">A primeira plataforma de CRM baseada em mensagens do mundo, projetada para ajudar pequenas empresas e startups a aumentarem suas vendas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'WhatsApp Integrado',
                description: 'Gerencie todas as conversas do WhatsApp Business API diretamente no CRM, sem perder histórico.',
                icon: <MessageCircle className="w-12 h-12 text-[#3AC97B]" />
              },
              {
                title: 'Automação de Vendas',
                description: 'Crie chatbots e fluxos automatizados para qualificar leads e agendar reuniões 24/7.',
                icon: <Bot className="w-12 h-12 text-[#3AC97B]" />
              },
              {
                title: 'Gestão Visual',
                description: 'Pipeline intuitivo que mostra exatamente onde cada lead está no processo de venda.',
                icon: <BarChart3 className="w-12 h-12 text-[#3AC97B]" />
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#09231B] p-8 rounded-2xl border border-[#3AC97B]/10 hover:border-[#3AC97B]/30 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#FFF4C7] mb-3">{feature.title}</h3>
                <p className="text-[#E6E3B1]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#09231B] to-[#0D221B]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFF4C7] mb-6">
                Como podemos ajudar sua empresa
              </h2>
              <ul className="space-y-6">
                {[
                  'Implementação e Configuração do zero',
                  'Migração de dados de outros CRMs',
                  'Criação de Chatbots e Automações',
                  'Treinamento da equipe comercial',
                  'Integração com outras ferramentas (Ads, Email, etc)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-[#E6E3B1]">
                    <span className="w-6 h-6 rounded-full bg-[#3AC97B]/20 text-[#3AC97B] flex items-center justify-center mr-4 text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="#contato"
                  className="text-[#3AC97B] font-medium hover:text-[#3AC97B]/80 inline-flex items-center"
                >
                  Falar com especialista Kommo
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden bg-[#09231B] border border-[#3AC97B]/20 flex items-center justify-center">
              {/* Placeholder for interface image or similar */}
              <div className="absolute inset-0 bg-[url('/images/certificadoKommo.jpeg')] bg-cover bg-center opacity-40 hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative z-10 bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <p className="text-white font-bold text-lg text-center">Especialistas Certificados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-[#0D221B]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FFF4C7] mb-4">Pronto para modernizar suas vendas?</h2>
            <p className="text-[#E6E3B1]/70">Agende uma demonstração e veja como o Kommo pode transformar seu negócio.</p>
          </div>
          <div className="glass-card p-8 bg-[#09231B]/50 border border-[#3AC97B]/20 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
