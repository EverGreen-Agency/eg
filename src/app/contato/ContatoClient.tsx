'use client'

import ContactForm from '@/components/ContactForm'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'
import PageHeader from '@/components/brand/PageHeader'

const bullets = [
  'Diagnóstico focado em crescimento B2B',
  'Resposta em até 24h úteis',
  'Time técnico + estratégico no primeiro contato',
]

export default function ContatoPage() {
  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre "
        accent="crescimento?"
        subtitle="Cada conversa começa com um diagnóstico real — e termina com um plano de ação. Nosso foco é encontrar o maior gargalo do seu funil e destravá-lo com estratégia, automação ou IA."
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Bullets em faixa técnica */}
          <div className="grid md:grid-cols-3 gap-px bg-menta/15 border hairline mb-16">
            {bullets.map((item, i) => (
              <div key={i} className="bg-musgo p-6 flex items-start gap-3">
                <span className="mono-label text-menta mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-baunilha/80">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Formulário */}
            <div className="border hairline p-8 order-2 md:order-1">
              <p className="mono-label text-menta mb-6">Envie uma mensagem</p>
              <ContactForm />
            </div>

            {/* Canais rápidos */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-baunilha mb-8">Prefere um canal mais rápido?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 border hairline p-6 bg-menta/5 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-baunilha mb-1">WhatsApp</h3>
                    <p className="text-baunilha/65 mb-4">Resposta em minutos no horário comercial</p>
                    <a
                      href="https://wa.me/5511989966989?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20EverGreen%20e%20o%20diagn%C3%B3stico%20comercial."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        try {
                          const target = window as typeof window & { dataLayer?: Record<string, unknown>[] }
                          target.dataLayer = target.dataLayer || []
                          target.dataLayer.push({ event: 'whatsapp_clicked', source: 'contact_page' })
                        } catch {}
                      }}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366]/15 text-[#FFF4C7] border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all duration-300 font-medium"
                    >
                      <FaWhatsapp className="text-xl text-[#25D366]" />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 border hairline p-6">
                  <div className="w-11 h-11 rounded-full bg-menta/10 flex items-center justify-center shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-menta" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-baunilha mb-1">Email</h3>
                    <p className="text-baunilha/65">contato@evergreenmkt.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
