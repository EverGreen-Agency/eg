'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'

const founderCards = [
  {
    nome: 'Eduardo Ferreira de Mattos',
    cargo: 'CEO',
    foto: '/images/eduardo.jpg',
    tagline: 'Engenheiro por formação, executor por vocação.',
    bio: 'Eduardo lidera a EverGreen MKT com foco em crescimento previsível e cultura de resultado. Tem background em processos, vendas e marketing orientado a dados. Já passou por ambientes de alta exigência como o Fasano e agora aplica sua visão estratégica na construção da EG.',
    skills: [
      'Growth Strategy',
      'SPIN Selling',
      'Lean Six Sigma (White/Yellow Belt)',
      'Funis de Vendas com IA',
      'Prompt Engineering & Web Dev',
    ],
    frase: 'Se não mexe no gráfico, a gente nem começa.',
  },
  {
    nome: 'Gustavo Fugulin Soares da Silva',
    cargo: 'CTO',
    foto: '/images/gustavo.jpg',
    tagline: 'Cérebro técnico por trás da plataforma e das automações da EG.',
    bio: 'Gustavo é o responsável por transformar a visão em tecnologia real. Especialista em IA, automações e análise de dados, lidera o desenvolvimento das soluções que fazem a EG entregar resultado com escala.',
    skills: [
      'Machine Learning & Deep Learning',
      'Análise preditiva e projetos IOT',
      'Software Dev (Full-stack & Mobile)',
      'Automação de Processos',
      'Treinamento de Modelos',
    ],
    frase: 'Tecnologia boa é aquela que some — e só aparece no resultado final.',
  },
]

export default function EquipePage() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Equipe"
        title="Mais do que fundadores. Somos "
        accent="executores."
        subtitle="Criamos a EG para construir o tipo de empresa que queríamos contratar. Combinamos tecnologia, marketing e operação para transformar ambição em execução."
      />

      {/* Fundadores */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-px bg-menta/15 border hairline">
            {founderCards.map((founder, index) => (
              <motion.article
                key={founder.nome}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="bg-musgo p-8 md:p-10"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative w-20 h-20 overflow-hidden border hairline shrink-0">
                    <Image
                      src={founder.foto}
                      alt={founder.nome}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-baunilha leading-tight">{founder.nome}</h2>
                    <p className="mono-label text-menta mt-1">{founder.cargo}</p>
                  </div>
                </div>

                <p className="text-baunilha/80 italic mb-5">{founder.tagline}</p>
                <p className="text-baunilha/65 leading-relaxed mb-6">{founder.bio}</p>

                <p className="mono-label text-menta mb-3">Skills</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {founder.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-baunilha/75">
                      <span className="w-1 h-1 rounded-full bg-menta shrink-0" aria-hidden />
                      {skill}
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-2 border-menta/40 pl-4 text-baunilha italic">
                  “{founder.frase}”
                </blockquote>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura */}
      <section className="py-16 md:py-24 border-t hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <p className="mono-label text-menta mb-3">01 — Cultura</p>
          <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-4">
            Aqui, ideias valem. Mas execução vale mais.
          </h2>
          <p className="text-lg text-baunilha/70 mb-12 max-w-2xl">
            Valorizamos quem pensa grande, fala pouco e entrega muito. Autonomia com responsabilidade,
            inovação com propósito, crescimento com consistência.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-menta/15 border hairline">
            <div className="bg-musgo p-8">
              <p className="mono-label text-menta mb-5">Temos fome de</p>
              <ul className="space-y-3">
                {['Resolver o problema certo', 'Criar ferramentas que escalam', 'Ver clientes crescendo junto'].map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 text-baunilha/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-menta mt-2 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="bg-musgo p-8">
              <p className="mono-label text-baunilha/40 mb-5">Não temos tempo pra</p>
              <ul className="space-y-3">
                {['Ego', 'Complexidade desnecessária', 'Marketing vazio'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-baunilha/60 line-through decoration-baunilha/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-baunilha/30 mt-2 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold text-baunilha tracking-tight mb-6 max-w-2xl mx-auto text-balance">
            Faça parte desse florestamento
          </h2>
          <p className="text-baunilha/70 mb-10 max-w-xl mx-auto">
            Estamos escolhendo os parceiros certos para crescer junto. Aqui, cada cliente é co-criador da
            floresta que estamos construindo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
            >
              Quero ser parte da floresta
            </Link>
            <Link
              href="/portfolio"
              className="mono-label inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
            >
              Ver Portfólio <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
