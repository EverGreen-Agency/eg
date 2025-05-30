'use client'

import AnimatedSection from './AnimatedSection'
import StaggeredList from './interactive/StaggeredList'
import WavesBackground from './interactive/WavesBackground'

interface Testimonial {
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    role: 'CEO, TechStart',
    content: 'A Evergreen transformou completamente nossa estratégia digital. Os resultados superaram todas as expectativas.',
  },
  {
    name: 'Maria Santos',
    role: 'Diretora de Marketing, InnovaCorp',
    content: 'A expertise em growth e IA da equipe é impressionante. Conseguimos triplicar nossas conversões em 6 meses.',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Fundador, DataSmart',
    content: 'A melhor decisão que tomamos foi trabalhar com a Evergreen. Profissionais excepcionais e resultados reais.',
  },
]

export default function TestimonialsSection() {
  return (
    <WavesBackground className="py-24 bg-white">
      <div className="container mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O que nossos <span className="text-eg-green">clientes</span> dizem
          </h2>
        </AnimatedSection>

        <StaggeredList
          items={testimonials.map((testimonial, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-lg">
              <p className="text-lg mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        />
      </div>
    </WavesBackground>
  )
} 