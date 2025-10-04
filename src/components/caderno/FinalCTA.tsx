'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f7f1] to-[#FFF0B5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#F5B6C1] opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#A5D8F3] opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#C1E8C5] opacity-10 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 text-4xl opacity-30 animate-bounce">💖</div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-30 animate-pulse">⭐</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl opacity-30 animate-bounce delay-300">🎨</div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl opacity-30 animate-pulse delay-500">🌟</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-30">✨</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-30">💖</div>
            <div className="absolute top-1/2 left-4 text-2xl opacity-30">🎨</div>
            <div className="absolute top-1/2 right-4 text-2xl opacity-30">⭐</div>
            
            <div className="relative z-10">
              {/* Main Headline */}
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Um presente que seu filho{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFF0B5]">
                  nunca vai esquecer
                </span>
              </h2>
              
              {/* Sub-headline */}
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Transforme momentos simples em memórias eternas com o Caderno de Memórias da Infância
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="text-6xl font-bold text-white mb-2">
                  R$ 19,90
                </div>
                <div className="text-2xl text-white/80 line-through mb-2">
                  De R$ 49,90
                </div>
                <div className="text-lg text-white/90">
                  Economia de R$ 30,00 + Bônus exclusivos
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-white text-[#2C3E50] text-2xl font-bold py-6 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-8">
                Garantir agora por apenas R$ 19,90! ✨
              </button>

              {/* Trust indicators */}
              <div className="grid md:grid-cols-3 gap-6 text-white/90">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-sm">Compra segura</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm">Entrega imediata</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-sm">Garantia 7 dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Presente Perfeito
              </h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Ideal para o Dia das Crianças, aniversários ou qualquer ocasião especial.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Conecta Famílias
              </h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Cria momentos especiais de conexão entre pais, filhos e avós.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Memórias Eternas
              </h3>
              <p className="text-[#7F8C8D] leading-relaxed">
                Registra momentos únicos que ficarão guardados para sempre.
              </p>
            </div>
          </div>

        {/* Final Message */}
        <div className="mt-16">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-[#2C3E50] mb-4">
              Não deixe essa oportunidade passar
            </h3>
            <p className="text-xl text-[#7F8C8D] mb-6">
              A infância passa rápido demais. Comece hoje a criar o tesouro de memórias que seu filho vai guardar para sempre.
            </p>
            <button className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Quero meu Caderno agora! ✨
            </button>
          </div>
        </div>

        {/* Footer simples da landing page */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">
                Caderno de Memórias da Infância
              </h3>
              <p className="text-[#7F8C8D] text-lg">
                Cultive histórias, fortaleça laços
              </p>
            </div>
            
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">💖</div>
                <div className="text-sm text-[#7F8C8D]">Feito com amor</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm text-[#7F8C8D]">Design aquarela</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📚</div>
                <div className="text-sm text-[#7F8C8D]">45+ páginas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✨</div>
                <div className="text-sm text-[#7F8C8D]">Memórias eternas</div>
              </div>
            </div>

            <div className="text-sm text-[#7F8C8D] mb-4">
              © 2025 Evergreen MKT. Todos os direitos reservados.
            </div>
            
            <div className="text-xs text-[#7F8C8D]">
              Transformando momentos simples em tesouros eternos
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
