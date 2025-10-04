'use client';

import React from 'react';

const benefits = [
  {
    icon: '💖',
    title: 'Estimula a criatividade das crianças',
    description: 'Desenvolve habilidades artísticas e de expressão através de atividades lúdicas e interativas.'
  },
  {
    icon: '✏️',
    title: 'Fortalece o vínculo entre pais e filhos',
    description: 'Cria momentos especiais de conexão e conversa, fortalecendo os laços familiares.'
  },
  {
    icon: '🎨',
    title: 'Cria lembranças que nunca se perdem',
    description: 'Registra momentos únicos da infância que ficarão guardados para sempre no coração.'
  },
  {
    icon: '🌟',
    title: 'Presente instantâneo, entregue na hora',
    description: 'Receba imediatamente por e-mail após a compra, sem espera ou frete.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f7f1] to-[#FFF0B5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#A5D8F3] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C1E8C5] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Por que escolher o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              Caderno de Memórias
            </span>
            ?
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Mais que um presente, é uma ferramenta de conexão que transforma momentos simples em memórias eternas
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                {/* Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[#7F8C8D] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F5B6C1] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A5D8F3] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <span className="text-2xl">✨</span>
            <span className="text-lg font-semibold text-[#2C3E50]">
              Transforme momentos simples em memórias eternas
            </span>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
