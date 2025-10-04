'use client';

import React from 'react';

// Função para renderizar ícones SVG modernos
const renderIcon = (iconType: string) => {
  switch (iconType) {
    case 'printer':
      return (
        <svg className="w-8 h-8 text-[#A5D8F3]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h6v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
        </svg>
      );
    case 'book':
      return (
        <svg className="w-8 h-8 text-[#C1E8C5]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      );
    case 'palette':
      return (
        <svg className="w-8 h-8 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2zm6.442 5.125c-.437 0-.746.309-.746.746s.309.746.746.746.746-.309.746-.746-.309-.746-.746-.746z"/>
        </svg>
      );
    default:
      return <div className="w-8 h-8 bg-gray-300 rounded"></div>;
  }
};

const bonuses = [
  {
    icon: "printer",
    title: "Versão para Impressão",
    description: "Arquivo PDF otimizado para impressão em casa ou gráfica",
    value: "R$ 15,90"
  },
  {
    icon: "book",
    title: "Guia de Uso em Família",
    description: "10 dicas práticas para aproveitar ao máximo o caderno",
    value: "R$ 12,90"
  },
  {
    icon: "palette",
    title: "Kit de Atividades Extras",
    description: "Páginas adicionais com atividades criativas",
    value: "R$ 19,90"
  }
];

export default function OfferSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#C1E8C5] to-[#A5D8F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FFF0B5] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#D4C1E8] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Oferta especial do{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              Dia das Crianças
            </span>
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Aproveite esta oportunidade única e garante seu caderno com bônus exclusivos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Offer */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-[#F5B6C1] relative overflow-hidden">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                    OFERTA LIMITADA
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8 pt-4">
                  <div className="text-6xl font-bold text-[#2C3E50] mb-2">
                    R$ 19,90
                  </div>
                  <div className="text-2xl text-[#7F8C8D] line-through mb-2">
                    De R$ 49,90
                  </div>
                  <div className="text-lg text-[#F5B6C1] font-bold">
                    Economia de R$ 30,00
                  </div>
                </div>

                {/* Main Product */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16 text-[#A5D8F3]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                    Caderno de Memórias da Infância
                  </h3>
                  <ul className="text-[#34495E] space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>45+ páginas únicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Design aquarela exclusivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Entrega digital imediata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Garantia de 7 dias</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://pay.cakto.com.br/xfhutrz_595670" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-2xl font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6 inline-block text-center"
                >
                  Quero meu Caderno agora! ✨
                </a>

                {/* Security badges */}
                <div className="flex justify-center gap-4 text-sm text-[#7F8C8D]">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                    <span>Compra segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                    </svg>
                    <span>Entrega imediata</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    <span>Garantia 7 dias</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bonuses */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#2C3E50] mb-4">
                  Bônus Exclusivos
                </h3>
                <p className="text-lg text-[#34495E]">
                  Valor total dos bônus: <span className="line-through text-[#7F8C8D]">R$ 48,70</span>
                </p>
                <p className="text-2xl font-bold text-[#F5B6C1]">
                  Seus por R$ 0,00
                </p>
              </div>

              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center">{renderIcon(bonus.icon)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-[#2C3E50]">
                          {bonus.title}
                        </h4>
                        <span className="text-sm text-[#7F8C8D] line-through">
                          {bonus.value}
                        </span>
                      </div>
                      <p className="text-[#7F8C8D] leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Total Value */}
              <div className="bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] rounded-2xl p-6 text-center">
                <div className="text-white">
                  <div className="text-sm opacity-90 mb-1">Valor total</div>
                  <div className="text-3xl font-bold">
                    R$ 98,60
                  </div>
                  <div className="text-lg opacity-90 mt-2">
                    Por apenas R$ 19,90
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
