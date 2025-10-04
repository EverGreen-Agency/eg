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
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-20">💖</div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-20">⭐</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-20">🎨</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-20">🌟</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Story */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50">
            <div className="mb-8">
              <span className="text-6xl opacity-30">💭</span>
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
                <div className="text-5xl mb-4">⏰</div>
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
                <div className="text-5xl mb-4">💝</div>
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
                <div className="text-5xl mb-4">🌱</div>
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
                Quero começar agora! ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
