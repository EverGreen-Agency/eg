'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Maria",
    role: "Avó da Clara (6 anos)",
    content: "Como avó, adoro poder participar desses momentos especiais. O caderno nos conecta de uma forma única e cria memórias que vou guardar para sempre.",
    rating: 5,
    image: "/images/vo_maria.jpg"
  },
  {
    id: 2,
    name: "Carlos",
    role: "Pai da Sofia (8 anos)",
    content: "Vale cada centavo! Minha filha fica ansiosa para preencher uma nova página. É um presente que realmente importa e fortalece nosso vínculo.",
    rating: 5,
    image: "/images/carlos_daSilva.png"
  },
  {
    id: 3,
    name: "Andreia",
    role: "Mãe do Miguel (5 anos)",
    content: "O caderno trouxe nossa família mais próxima. Miguel adora me contar suas histórias enquanto preenchemos juntos. É mágico!",
    rating: 5,
    image: "/images/andreia-silva.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f7f1] to-[#C1E8C5] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A5D8F3] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#F5B6C1] opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FFF0B5] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6">
            O que as famílias estão{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B6C1] to-[#A5D8F3]">
              dizendo
            </span>
          </h2>
          <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
            Mais de 1000 famílias já transformaram seus momentos em memórias eternas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-[#34495E] leading-relaxed mb-6 text-center italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-[#2C3E50]">{testimonial.name}</div>
                    <div className="text-sm text-[#7F8C8D]">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F5B6C1] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A5D8F3] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#F5B6C1] mb-2">1000+</div>
                <div className="text-[#7F8C8D]">Famílias satisfeitas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#A5D8F3] mb-2">4.9</div>
                <div className="text-[#7F8C8D]">Avaliação média</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#C1E8C5] mb-2">98%</div>
                <div className="text-[#7F8C8D]">Recomendariam</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
            <svg className="w-6 h-6 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-lg font-semibold text-[#2C3E50]">
              Junte-se a essas famílias felizes
            </span>
            <svg className="w-6 h-6 text-[#F5B6C1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
