'use client';

import React from 'react';

const bonuses = [
  {
    icon: "🖨️",
    title: "Versão para Impressão",
    description: "Arquivo PDF otimizado para impressão em casa ou gráfica",
    value: "R$ 15,90"
  },
  {
    icon: "📚",
    title: "Guia de Uso em Família",
    description: "10 dicas práticas para aproveitar ao máximo o caderno",
    value: "R$ 12,90"
  },
  {
    icon: "🎨",
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
                  <div className="text-5xl mb-4">📖</div>
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
                <button className="w-full bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-2xl font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6">
                  Quero meu Caderno agora! ✨
                </button>

                {/* Security badges */}
                <div className="flex justify-center gap-4 text-sm text-[#7F8C8D]">
                  <div className="flex items-center gap-1">
                    <span>🔒</span>
                    <span>Compra segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⚡</span>
                    <span>Entrega imediata</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🛡️</span>
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
                    <div className="text-4xl">{bonus.icon}</div>
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
