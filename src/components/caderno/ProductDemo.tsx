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
                className={`cursor-pointer transition-all duration-300 ${
                  activePage === index
                    ? 'transform scale-105'
                    : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setActivePage(index)}
              >
                <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activePage === index
                    ? 'border-[#F5B6C1] shadow-xl'
                    : 'border-transparent hover:border-[#A5D8F3]'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center">{renderIcon(page.icon)}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                        {page.title}
                      </h3>
                      <p className="text-[#7F8C8D] leading-relaxed mb-3">
                        {page.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {page.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-gradient-to-r text-white text-sm px-3 py-1 rounded-full"
                            style={{
                              background: `linear-gradient(45deg, ${page.color.includes('C1E8C5') ? '#C1E8C5' : page.color.includes('FFF0B5') ? '#FFF0B5' : page.color.includes('F5B6C1') ? '#F5B6C1' : '#A5D8F3'}, ${page.color.includes('A5D8F3') ? '#A5D8F3' : page.color.includes('F5B6C1') ? '#F5B6C1' : page.color.includes('F8C4B4') ? '#F8C4B4' : '#D4C1E8'})`
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Product Preview */}
          <div className="relative">
            <ProductMockup
              src={productPages[activePage].image}
              alt={productPages[activePage].title}
              width={400}
              height={500}
              className="drop-shadow-2xl rounded-2xl"
              showFloatingElements={true}
              floatingElements={floatingElements.demo}
            />

            {/* Page indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {productPages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activePage === index
                      ? 'bg-[#F5B6C1] scale-125'
                      : 'bg-[#A5D8F3] hover:bg-[#F5B6C1]'
                  }`}
                  onClick={() => setActivePage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Montagem de páginas removida - foco apenas na demonstração interativa */}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
              Pronto para começar a criar memórias?
            </h3>
            <p className="text-lg text-[#7F8C8D] mb-6">
              Mais de 45 páginas únicas esperando para serem preenchidas com amor e criatividade
            </p>
            <a 
              href="https://pay.cakto.com.br/xfhutrz_595670" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Quero meu Caderno agora! ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}