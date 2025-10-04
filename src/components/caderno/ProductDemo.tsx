'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductMockup from './ProductMockup';
import { cadernoImages, floatingElements } from '@/config/caderno-images';

const productPages = [
  {
    id: 1,
    title: "Minha Árvore Genealógica",
    description: "Espaço para desenhar e colar fotos da família, incluindo avós, tios e primos",
    image: cadernoImages.pages.arvoreGenealogica,
    features: ["Desenho da árvore", "Fotos da família", "Nomes e idades"],
    icon: "tree",
    color: "from-[#C1E8C5] to-[#A5D8F3]"
  },
  {
    id: 2,
    title: "Meus Sonhos",
    description: "Página especial para a criança expressar seus maiores sonhos e aspirações",
    image: cadernoImages.pages.sonhos,
    features: ["Desenho do sonho", "Texto explicativo", "Como realizar"],
    icon: "dream",
    color: "from-[#FFF0B5] to-[#F5B6C1]"
  },
  {
    id: 3,
    title: "Minhas Conquistas",
    description: "Registro das principais conquistas e momentos de orgulho da criança",
    image: cadernoImages.pages.conquistas,
    features: ["Certificados", "Medalhas", "Desenhos especiais"],
    icon: "trophy",
    color: "from-[#F5B6C1] to-[#F8C4B4]"
  },
  {
    id: 4,
    title: "Uma Mensagem dos Meus Pais",
    description: "Espaço dedicado para os pais escreverem uma mensagem especial para o filho",
    image: cadernoImages.pages.mensagemPais,
    features: ["Mensagem dos pais", "Data especial", "Foto da família"],
    icon: "message",
    color: "from-[#A5D8F3] to-[#D4C1E8]"
  }
];

// Função para renderizar ícones SVG
const renderIcon = (iconType: string) => {
  switch (iconType) {
    case 'tree':
      return (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.91.66.95-2.3c.48.17.98.3 1.32.3.39 0 .63-.33.47-.8L7.5 15.5c.5-.5 1.5-1.5 1.5-3.5 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.73.6-.35 1-.99 1-1.73 0-1.1-.9-2-2-2s-2 .9-2 2c0 2 1 3 1.5 3.5L5.5 20.5c-.16.47.08.8.47.8.34 0 .84-.13 1.32-.3l.95 2.3 1.91-.66C8.1 16.17 6 10 17 8z"/>
        </svg>
      );
    case 'dream':
      return (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
    case 'trophy':
      return (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V7C19 8.1 18.1 9 17 9H15V10.59C15.84 10.93 16.5 11.5 17 12.2V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15V12.2C7.5 11.5 8.16 10.93 9 10.59V9H7C5.9 9 5 8.1 5 7V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V7C7 7.55 7.45 8 8 8H16C16.55 8 17 7.55 17 7V6H7Z"/>
        </svg>
      );
    case 'message':
      return (
        <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
        </svg>
      );
    default:
      return <div className="w-8 h-8 bg-gray-300 rounded"></div>;
  }
};

export default function ProductDemo() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF0B5] to-[#A5D8F3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#F5B6C1] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#C1E8C5] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#D4C1E8] opacity-20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Veja como funciona o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              seu caderno
            </span>
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Mais de 45 páginas cuidadosamente elaboradas para capturar cada momento especial da infância
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Page Navigation */}
          <div className="space-y-6">
            {productPages.map((page, index) => (
              <div
                key={page.id}
                className={`group cursor-pointer transition-all duration-500 ease-out ${
                  activePage === index
                    ? 'transform scale-[1.02]'
                    : 'hover:transform hover:scale-[1.01]'
                }`}
                onClick={() => setActivePage(index)}
              >
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 transition-all duration-500 ease-out overflow-hidden ${
                  activePage === index
                    ? 'border-[#F5B6C1] shadow-2xl shadow-[#F5B6C1]/20'
                    : 'border-transparent hover:border-[#A5D8F3]/50 hover:shadow-xl hover:shadow-[#A5D8F3]/10'
                }`}>
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    activePage === index
                      ? 'opacity-10'
                      : 'opacity-0 group-hover:opacity-5'
                  }`} style={{
                    background: `linear-gradient(135deg, ${page.color.includes('C1E8C5') ? '#C1E8C5' : page.color.includes('FFF0B5') ? '#FFF0B5' : page.color.includes('F5B6C1') ? '#F5B6C1' : '#A5D8F3'}, ${page.color.includes('A5D8F3') ? '#A5D8F3' : page.color.includes('F5B6C1') ? '#F5B6C1' : page.color.includes('F8C4B4') ? '#F8C4B4' : '#D4C1E8'})`
                  }}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center p-3 rounded-2xl transition-all duration-500 ${
                        activePage === index
                          ? 'bg-gradient-to-br from-[#F5B6C1]/20 to-[#A5D8F3]/20 scale-110'
                          : 'bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#F5B6C1]/10 group-hover:to-[#A5D8F3]/10 group-hover:scale-105'
                      }`}>
                        <div className={`transition-all duration-500 ${
                          activePage === index
                            ? 'scale-110'
                            : 'group-hover:scale-105'
                        }`}>
                          {renderIcon(page.icon)}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 transition-all duration-500 ${
                          activePage === index
                            ? 'text-[#2C3E50]'
                            : 'text-[#2C3E50] group-hover:text-[#34495E]'
                        }`}>
                          {page.title}
                        </h3>
                        <p className={`leading-relaxed mb-4 transition-all duration-500 ${
                          activePage === index
                            ? 'text-[#34495E]'
                            : 'text-[#7F8C8D] group-hover:text-[#34495E]'
                        }`}>
                          {page.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {page.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className={`text-white text-sm px-4 py-2 rounded-full transition-all duration-500 transform ${
                                activePage === index
                                  ? 'scale-105 shadow-lg'
                                  : 'group-hover:scale-105 group-hover:shadow-md'
                              }`}
                              style={{
                                background: `linear-gradient(135deg, ${page.color.includes('C1E8C5') ? '#C1E8C5' : page.color.includes('FFF0B5') ? '#FFF0B5' : page.color.includes('F5B6C1') ? '#F5B6C1' : '#A5D8F3'}, ${page.color.includes('A5D8F3') ? '#A5D8F3' : page.color.includes('F5B6C1') ? '#F5B6C1' : page.color.includes('F8C4B4') ? '#F8C4B4' : '#D4C1E8'})`
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activePage === index && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#F5B6C1] rounded-full animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Product Preview */}
          <div className="relative group">
            <div className="relative transform transition-all duration-700 ease-out hover:scale-[1.02]">
              <ProductMockup
                src={productPages[activePage].image}
                alt={productPages[activePage].title}
                width={400}
                height={500}
                className="drop-shadow-2xl rounded-2xl transition-all duration-700 ease-out"
                showFloatingElements={true}
                floatingElements={floatingElements.demo}
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#F5B6C1] to-[#F8C4B4] rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#A5D8F3] to-[#C1E8C5] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-[#FFF0B5] to-[#F5B6C1] rounded-full opacity-40 animate-bounce delay-300"></div>
            </div>

            {/* Enhanced Page indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {productPages.map((page, index) => (
                <button
                  key={index}
                  className={`group relative transition-all duration-500 ease-out ${
                    activePage === index
                      ? 'scale-125'
                      : 'hover:scale-110'
                  }`}
                  onClick={() => setActivePage(index)}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    activePage === index
                      ? 'bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] shadow-lg shadow-[#F5B6C1]/30'
                      : 'bg-gradient-to-r from-[#A5D8F3] to-[#C1E8C5] hover:from-[#F5B6C1] hover:to-[#F8C4B4] hover:shadow-md hover:shadow-[#F5B6C1]/20'
                  }`}>
                    {activePage === index && (
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#2C3E50] text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                    activePage === index ? 'hidden' : ''
                  }`}>
                    {page.title}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#2C3E50]"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Montagem de páginas removida - foco apenas na demonstração interativa */}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto border border-white/50 overflow-hidden group">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#F5B6C1] to-[#F8C4B4] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-[#A5D8F3] to-[#C1E8C5] rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-br from-[#FFF0B5] to-[#F5B6C1] rounded-full opacity-30 animate-pulse delay-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-6 leading-tight">
                Pronto para começar a criar{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
                  memórias?
                </span>
              </h3>
              <p className="text-xl text-[#34495E] mb-8 leading-relaxed max-w-2xl mx-auto">
                Mais de 45 páginas únicas esperando para serem preenchidas com amor e criatividade
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-[#7F8C8D]">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Entrega digital imediata</span>
                </div>
                <div className="flex items-center gap-2 text-[#7F8C8D]">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2 text-[#7F8C8D]">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Mais de 1000 famílias satisfeitas</span>
                </div>
              </div>
              
              <a 
                href="https://pay.cakto.com.br/xfhutrz_595670" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-6 px-12 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#F5B6C1]/30 transform hover:scale-105 transition-all duration-500 ease-out inline-flex items-center gap-3"
              >
                <span>Quero meu Caderno agora!</span>
                <svg className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}