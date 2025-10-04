'use client';

import React from 'react';
import Image from 'next/image';
import { cadernoImages } from '@/config/caderno-images';

const pagesData = [
  {
    id: 1,
    title: "Minha Árvore Genealógica",
    image: cadernoImages.pages.arvoreGenealogica,
    icon: "🌳",
    description: "Desenhe sua família completa",
    color: "from-[#C1E8C5] to-[#A5D8F3]"
  },
  {
    id: 2,
    title: "Meus Sonhos",
    image: cadernoImages.pages.sonhos,
    icon: "💭",
    description: "Registre seus maiores sonhos",
    color: "from-[#FFF0B5] to-[#F5B6C1]"
  },
  {
    id: 3,
    title: "Minhas Conquistas",
    image: cadernoImages.pages.conquistas,
    icon: "🏆",
    description: "Celebre suas vitórias",
    color: "from-[#F5B6C1] to-[#F8C4B4]"
  },
  {
    id: 4,
    title: "Mensagem dos Pais",
    image: cadernoImages.pages.mensagemPais,
    icon: "💌",
    description: "Mensagens de amor",
    color: "from-[#A5D8F3] to-[#D4C1E8]"
  }
];

export default function PagesMontage() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f7f1] to-[#FFF0B5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A5D8F3] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C1E8C5] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            Cada página é uma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              nova aventura
            </span>
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Explore as páginas mais especiais do seu caderno de memórias
          </p>
        </div>

        {/* Montagem Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pagesData.map((page, index) => (
            <div
              key={page.id}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Imagem da página */}
                <div className="relative">
                  <Image
                    src={page.image}
                    alt={page.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${page.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Ícone flutuante */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{page.icon}</span>
                  </div>
                  
                  {/* Informações no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{page.title}</h3>
                      <p className="text-sm opacity-90">{page.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Destaque */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#2C3E50] mb-6">
              Mais de 45 páginas únicas esperando por você
            </h3>
            <p className="text-lg text-[#7F8C8D] mb-8 leading-relaxed">
              Cada página foi cuidadosamente desenhada para capturar momentos especiais da infância, 
              criando um tesouro de memórias que durará para sempre.
            </p>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5B6C1] mb-2">45+</div>
                <div className="text-sm text-[#7F8C8D]">Páginas únicas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#A5D8F3] mb-2">10</div>
                <div className="text-sm text-[#7F8C8D]">Seções temáticas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C1E8C5] mb-2">100%</div>
                <div className="text-sm text-[#7F8C8D]">Personalizável</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFF0B5] mb-2">∞</div>
                <div className="text-sm text-[#7F8C8D]">Memórias eternas</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Quero meu Caderno agora! ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
