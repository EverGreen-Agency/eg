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
    icon: "🌳",
    color: "from-[#C1E8C5] to-[#A5D8F3]"
  },
  {
    id: 2,
    title: "Meus Sonhos",
    description: "Página especial para a criança expressar seus maiores sonhos e aspirações",
    image: cadernoImages.pages.sonhos,
    features: ["Desenho do sonho", "Texto explicativo", "Como realizar"],
    icon: "💭",
    color: "from-[#FFF0B5] to-[#F5B6C1]"
  },
  {
    id: 3,
    title: "Minhas Conquistas",
    description: "Registro das principais conquistas e momentos de orgulho da criança",
    image: cadernoImages.pages.conquistas,
    features: ["Certificados", "Medalhas", "Desenhos especiais"],
    icon: "🏆",
    color: "from-[#F5B6C1] to-[#F8C4B4]"
  },
  {
    id: 4,
    title: "Uma Mensagem dos Meus Pais",
    description: "Espaço dedicado para os pais escreverem uma mensagem especial para o filho",
    image: cadernoImages.pages.mensagemPais,
    features: ["Mensagem dos pais", "Data especial", "Foto da família"],
    icon: "💌",
    color: "from-[#A5D8F3] to-[#D4C1E8]"
  }
];

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
                    <div className="text-4xl">{page.icon}</div>
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
            <button className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Quero meu Caderno agora! ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}