'use client'

import AnimatedSection from './AnimatedSection'
import GradientBackground from './interactive/GradientBackground'
import ParticlesBackground from './interactive/ParticlesBackground'

const services = [
  {
    title: "Growth Hacking",
    description: "Estratégias data-driven para crescimento acelerado e sustentável do seu negócio.",
  },
  {
    title: "Marketing Digital",
    description: "Planejamento e execução de campanhas digitais com foco em resultados.",
  },
  {
    title: "Inteligência Artificial",
    description: "Implementação de soluções de IA para otimizar processos e decisões.",
  },
  {
    title: "Análise de Dados",
    description: "Transformação de dados em insights acionáveis para seu negócio.",
  }
]

export default function ServicesSection() {
  return (
    <ParticlesBackground className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Nossos <span className="text-eg-green">Serviços</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={200 + index * 100}>
              <GradientBackground className="h-full backdrop-blur-sm bg-white/80">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </GradientBackground>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </ParticlesBackground>
  )
} 