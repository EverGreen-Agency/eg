'use client';

import React from 'react';
import Image from 'next/image';
import ProductMockup from './ProductMockup';
import { cadernoImages, floatingElements } from '@/config/caderno-images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Watercolor splashes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A5D8F3] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#F5B6C1] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-[#FFF0B5] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#C1E8C5] opacity-20 rounded-full blur-xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-30">
          <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-30">
          <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-30">
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-30">
          <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src={cadernoImages.logo}
                  alt="Caderno de Memórias da Infância"
                  width={200}
                  height={200}
                  className="drop-shadow-lg"
                />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-[#2C3E50] mb-6 leading-tight">
              Mais que um presente, um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] font-extrabold">
                tesouro de memórias
              </span>{' '}
              para toda a vida!
            </h1>

            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl text-[#34495E] mb-8 leading-relaxed">
              Neste Dia das Crianças, surpreenda seu filho com um diário digital interativo para guardar sonhos, desenhos e lembranças inesquecíveis.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://pay.cakto.com.br/xfhutrz_595670" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
              >
                Quero meu Caderno agora! ✨
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-[#7F8C8D]">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Entrega digital imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Mais de 1000 famílias satisfeitas</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Mockup */}
          <div className="relative">
            <ProductMockup
              src={cadernoImages.mainMockup}
              alt="Caderno de Memórias da Infância - Mockup"
              width={400}
              height={500}
              className="drop-shadow-2xl"
              showFloatingElements={true}
              floatingElements={floatingElements.hero}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#A5D8F3] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#A5D8F3] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
