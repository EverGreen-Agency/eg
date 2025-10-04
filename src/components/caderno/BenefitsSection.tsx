'use client';

import React from 'react';

// Função para renderizar ícones SVG modernos
const renderIcon = (iconType: string) => {
  switch (iconType) {
    case 'heart':
      return (
        <svg className="w-16 h-16 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      );
    case 'pencil':
      return (
        <svg className="w-16 h-16 text-[#A5D8F3]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      );
    case 'palette':
      return (
        <svg className="w-16 h-16 text-[#C1E8C5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2zm6.442 5.125c-.437 0-.746.309-.746.746s.309.746.746.746.746-.309.746-.746-.309-.746-.746-.746z"/>
        </svg>
      );
    case 'star':
      return (
        <svg className="w-16 h-16 text-[#FFF0B5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    default:
      return <div className="w-16 h-16 bg-gray-300 rounded"></div>;
  }
};

const benefits = [
  {
    icon: 'heart',
    title: 'Estimula a criatividade das crianças',
    description: 'Desenvolve habilidades artísticas e de expressão através de atividades lúdicas e interativas.'
  },
  {
    icon: 'pencil',
    title: 'Fortalece o vínculo entre pais e filhos',
    description: 'Cria momentos especiais de conexão e conversa, fortalecendo os laços familiares.'
  },
  {
    icon: 'palette',
    title: 'Cria lembranças que nunca se perdem',
    description: 'Registra momentos únicos da infância que ficarão guardados para sempre no coração.'
  },
  {
    icon: 'star',
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
                <div className="mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(benefit.icon)}
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
            <svg className="w-6 h-6 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="text-lg font-semibold text-[#2C3E50]">
              Transforme momentos simples em memórias eternas
            </span>
            <svg className="w-6 h-6 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
