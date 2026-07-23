'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'

/**
 * Níveis de cliente EG (Documento-Mestre §15.1).
 *
 * Nível reflete PROFUNDIDADE DE RELAÇÃO, não tempo de casa nem volume gasto.
 * São quatro — Semente, Muda, Árvore, Floresta.
 *
 * Importante: o eixo de cultura interna (Broto/Raiz/Tronco/Guardião) é de
 * funcionário e NÃO aparece aqui. "Raiz" fica reservado à primeira fase do
 * Sistema Raiz — por isso não existe nível "Cliente Raiz".
 *
 * Os benefícios por nível ainda estão em construção: descrevemos a direção,
 * sem prometer perk específico que não esteja operante.
 */
const niveis = [
  {
    nome: 'Semente',
    gatilho: 'Diagnóstico ou primeiro projeto',
    desc: 'O início da relação. Medimos a operação, entregamos o Raio-X e o plano de 90 dias. Daqui em diante, continuar é escolha — não obrigação contratual.',
  },
  {
    nome: 'Muda',
    gatilho: 'Sprint consolidada ou início de retainer',
    desc: 'A relação criou raiz. A estrutura mínima está de pé e começa a rodar com cadência. É onde a operação deixa de depender de esforço heroico.',
  },
  {
    nome: 'Árvore',
    gatilho: 'Retainer maduro, com dados fluindo',
    desc: 'Alta aderência, indicadores acompanhados de perto e resultados medidos. O trabalho migra de construir para compor — a fase Copa do Sistema Raiz.',
  },
  {
    nome: 'Floresta',
    gatilho: 'Parceria de alta profundidade',
    desc: 'Cliente-âncora, com relação de longo prazo e influência real sobre a operação. Integra o ecossistema da EG e costuma gerar indicações.',
  },
]

export default function NiveisDeCliente() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Níveis de cliente"
        title="Nível não é tempo de casa. É "
        accent="profundidade de relação."
        subtitle="Todo cliente começa no mesmo lugar e avança conforme a relação ganha profundidade — mais dados, mais aderência, mais influência da EG sobre a operação. Não é programa de fidelidade: é o retrato de quão fundo o trabalho chegou."
      />

      {/* Os quatro níveis */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <ol className="grid md:grid-cols-2 gap-px bg-menta/15 border hairline">
            {niveis.map((n, i) => (
              <motion.li
                key={n.nome}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group bg-musgo p-8 md:p-12 hover:bg-musgo-deep transition-colors duration-300"
              >
                <p className="mono-label text-menta mb-6">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-baunilha mb-2 group-hover:text-menta transition-colors duration-300">
                  {n.nome}
                </h2>
                <p className="mono-label text-baunilha/40 mb-4">{n.gatilho}</p>
                <p className="text-baunilha/70 leading-relaxed">{n.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* O que muda entre níveis */}
      <section className="py-16 md:py-20 border-t hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-baunilha tracking-tight mb-5">
            O que muda conforme se avança
          </h2>
          <p className="text-baunilha/70 mb-4">
            Quanto mais fundo a relação, mais a EG consegue operar com autonomia — e mais o cliente
            ganha em prioridade, condições e acesso antecipado ao que estamos construindo.
          </p>
          <p className="text-baunilha/70">
            Os benefícios formais de cada nível estão sendo desenhados conforme a EG cresce.
            Preferimos anunciar o que já está de pé a publicar uma tabela de vantagens que ainda não
            existe.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <p className="mono-label text-menta mb-6">Começa pela Raiz</p>
          <h2 className="text-2xl md:text-4xl font-bold text-baunilha tracking-tight mb-6 max-w-2xl mx-auto text-balance">
            Toda floresta começa com uma semente.
          </h2>
          <p className="text-baunilha/70 mb-10 max-w-xl mx-auto">
            O primeiro nível se abre com o diagnóstico — o Raio-X Comercial da sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
            >
              Falar com a EverGreen
            </Link>
            <Link
              href="/servicos"
              className="mono-label inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
            >
              Ver a escada de ofertas <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
