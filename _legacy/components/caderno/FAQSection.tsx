'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "Como vou receber o caderno?",
    answer: "Você recebe imediatamente por e-mail após a compra. O arquivo PDF chega na sua caixa de entrada em até 5 minutos."
  },
  {
    question: "É físico ou digital?",
    answer: "É digital (PDF), mas você pode imprimir em casa ou em uma gráfica. Incluímos instruções de impressão no pacote."
  },
  {
    question: "Serve para qual idade?",
    answer: "Funciona perfeitamente para crianças de 4 a 12 anos, com a ajuda dos pais para as crianças menores."
  },
  {
    question: "Posso personalizar o caderno?",
    answer: "Sim! O caderno inclui espaços para colar fotos, desenhar e escrever. É totalmente personalizável para sua família."
  },
  {
    question: "E se eu não gostar?",
    answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Quanto tempo leva para preencher?",
    answer: "Não há pressa! O caderno pode ser preenchido ao longo de meses ou anos. Cada família no seu ritmo."
  },
  {
    question: "Funciona em qualquer impressora?",
    answer: "Sim! O PDF é otimizado para impressão caseira e gráfica. Incluímos instruções detalhadas de impressão."
  },
  {
    question: "Posso comprar mais de um?",
    answer: "Claro! Muitas famílias compram para presentear avós, tios ou outras crianças da família."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5B6C1] to-[#f8f7f1] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A5D8F3] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#C1E8C5] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FFF0B5] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Dúvidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              frequentes
            </span>
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas antes de garantir seu caderno
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/90 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-[#2C3E50] pr-4">
                    {faq.question}
                  </h3>
                  <div className={`text-2xl text-[#F5B6C1] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-[#7F8C8D] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA removido - foco apenas nas perguntas frequentes */}
      </div>
    </section>
  );
}
