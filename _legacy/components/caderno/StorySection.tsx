'use client';

import React from 'react';

export default function StorySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#A5D8F3] to-[#f8f7f1] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FFF0B5] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C1E8C5] opacity-5 rounded-full blur-3xl"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-20">
          <svg className="w-8 h-8 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-20">
          <svg className="w-6 h-6 text-[#FFF0B5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-20">
          <svg className="w-6 h-6 text-[#C1E8C5]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2zm6.442 5.125c-.437 0-.746.309-.746.746s.309.746.746.746.746-.309.746-.746-.309-.746-.746-.746z"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-20">
          <svg className="w-8 h-8 text-[#A5D8F3]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Story */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
            <div className="mb-8">
              <svg className="w-16 h-16 text-[#A5D8F3] opacity-30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"/>
              </svg>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-8 leading-tight">
              A infância passa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
                voando
              </span>
            </h2>
            
            <div className="text-xl lg:text-2xl text-[#34495E] leading-relaxed space-y-6">
              <p className="font-medium">
                Brinquedos quebram, roupas deixam de servir… mas as memórias ficam para sempre.
              </p>
              
              <p>
                O <strong className="text-[#F5B6C1]">Caderno de Memórias da Infância</strong> foi criado para que você possa registrar esses momentos e, no futuro, reviver junto com seu filho cada detalhe dessa fase mágica.
              </p>
              
              <p className="text-lg italic text-[#7F8C8D]">
                "Cada memória é uma pincelada no quadro da vida."
              </p>
            </div>
          </div>

          {/* Story Elements */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#A5D8F3] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Tempo que voa
                </h3>
                <p className="text-[#7F8C8D] leading-relaxed">
                  Os anos passam rápido demais. Hoje seu filho está aprendendo a andar, amanhã já está indo para a escola.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#F5B6C1] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Presentes que duram
                </h3>
                <p className="text-[#7F8C8D] leading-relaxed">
                  Brinquedos se quebram, mas as memórias registradas no caderno ficam para sempre.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#C1E8C5] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.91.66.95-2.3c.48.17.98.3 1.32.3.39 0 .63-.33.47-.8L7.5 15.5c.5-.5 1.5-1.5 1.5-3.5 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.73.6-.35 1-.99 1-1.73 0-1.1-.9-2-2-2s-2 .9-2 2c0 2 1 3 1.5 3.5L5.5 20.5c-.16.47.08.8.47.8.34 0 .84-.13 1.32-.3l.95 2.3 1.91-.66C8.1 16.17 6 10 17 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                  Crescimento juntos
                </h3>
                <p className="text-[#7F8C8D] leading-relaxed">
                  Cada página preenchida é um momento de conexão entre você e seu filho.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Não deixe esses momentos passarem em branco
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Comece hoje a criar o tesouro de memórias que seu filho vai guardar para sempre
              </p>
              <button className="bg-white text-[#2C3E50] text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Quero começar agora! 
                <svg className="w-5 h-5 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
