'use client';

import React from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface UrgencySectionProps {
  timeLeft: TimeLeft;
}

export default function UrgencySection({ timeLeft }: UrgencySectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#A5D8F3] to-[#F5B6C1] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFF0B5] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#C1E8C5] opacity-20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#D4C1E8] opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Urgency Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-[#F5B6C1] relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] opacity-20 animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Clock Icon */}
              <div className="text-6xl mb-6 animate-pulse">⏰</div>
              
              {/* Main Message */}
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
                Oferta especial válida só até o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
                  Dia das Crianças!
                </span>
              </h2>
              
              <p className="text-xl text-[#34495E] mb-8 leading-relaxed">
                Depois o valor volta ao preço original de R$ 49,90
              </p>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3] rounded-2xl p-8 mb-8">
                <div className="text-white text-2xl font-bold mb-4">
                  Tempo restante:
                </div>
                <div className="flex justify-center gap-4">
                  <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80">Horas</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80">Minutos</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl font-bold text-white">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80">Segundos</div>
                  </div>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <div className="text-red-600 font-bold text-lg mb-2">Depois do Dia das Crianças</div>
                  <div className="text-3xl font-bold text-red-600">R$ 49,90</div>
                  <div className="text-red-500 text-sm">Preço normal</div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <div className="text-green-600 font-bold text-lg mb-2">Hoje - Oferta Especial</div>
                  <div className="text-3xl font-bold text-green-600">R$ 19,90</div>
                  <div className="text-green-500 text-sm">Economia de R$ 30,00</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-[#F5B6C1] to-[#F8C4B4] hover:from-[#F8C4B4] hover:to-[#F5B6C1] text-white text-2xl font-bold py-6 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6">
                Garantir agora por apenas R$ 19,90! ✨
              </button>

              {/* Security Message */}
              <div className="text-sm text-[#7F8C8D]">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span>🔒</span>
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>⚡</span>
                  <span>Entrega digital imediata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Urgency Elements */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Oferta Limitada
              </h3>
              <p className="text-[#7F8C8D]">
                Apenas até o Dia das Crianças. Depois volta ao preço normal.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Entrega Imediata
              </h3>
              <p className="text-[#7F8C8D]">
                Receba seu caderno por e-mail em até 5 minutos após a compra.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Garantia Total
              </h3>
              <p className="text-[#7F8C8D]">
                7 dias para testar. Se não gostar, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
