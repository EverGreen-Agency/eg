'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'

/**
 * Escada de ofertas EG (Documento-Mestre §10 e §10.1).
 *
 * Todo cliente entra pelo mesmo lugar — o diagnóstico. O que ele recebe depois
 * depende do degrau que contratou, e a frente (comercial ou tecnológica) depende
 * do que o diagnóstico apontou. Ferramentas (tráfego, CRM, automação) são MEIOS
 * de entrega dentro da prescrição, nunca um cardápio à parte.
 *
 * A Oferta 4 (Growth Partnership, fixo + variável) existe no método mas ainda
 * não foi fechada comercialmente — por isso não aparece publicamente.
 */
const degraus = [
  {
    tag: 'Degrau 01 — Você faz',
    title: 'Raio-X Comercial',
    lead: 'O diagnóstico que mostra onde a receita vaza e o que atacar primeiro.',
    image: '/images/maquinadeVendas.jpg',
    cta: 'Quero meu Raio-X',
    features: [
      'Nota de 0 a 10 nos três pilares: Oferta, Demanda e Conversão',
      'Mapa de gargalos com o pilar crítico identificado',
      'Leitura da jornada comercial ponta a ponta',
      'Plano de 90 dias focado no gargalo de maior impacto',
      'Devolutiva executiva — você sai sabendo o que fazer, com ou sem a gente',
    ],
    garantia:
      'Se você não sair com clareza prática sobre gargalos, prioridades e próximos passos, revisamos o diagnóstico sem custo até ficar cristalino.',
  },
  {
    tag: 'Degrau 02 — Fazemos com você',
    title: 'Sprint de Estruturação',
    lead: 'Tirar a empresa do diagnóstico e colocá-la numa estrutura mínima que funciona.',
    image: '/images/growthEngine.jpg',
    cta: 'Falar sobre a Sprint',
    features: [
      'Pipeline e funil comercial desenhados e implantados',
      'Rotinas comerciais, cadência e follow-up estruturado',
      'Ajustes de CRM e scripts de abordagem',
      'Treinamento da liderança e scorecard de acompanhamento',
      'Sprint de 6 a 8 semanas com escopo fechado',
    ],
    garantia:
      'Se não implantarmos os entregáveis definidos no cronograma da sprint, o acompanhamento é estendido sem honorário adicional até concluir o combinado.',
  },
  {
    tag: 'Degrau 03 — Fazemos por você',
    title: 'Retainer de Previsibilidade',
    lead: 'Sustentar e evoluir a operação com cadência — a fase Copa, que não termina.',
    image: '/images/tech.jpg',
    cta: 'Falar sobre o Retainer',
    features: [
      'Acompanhamento mensal com ritos de gestão',
      'Gestão da jornada comercial e revisão de indicadores',
      'Otimização contínua de processo, comunicação e conversão',
      'Revisões estratégicas trimestrais',
      'Evolução da stack e das automações que sustentam a operação',
    ],
    garantia:
      'Se não mantivermos a cadência, o scorecard e o ciclo de otimização acordados, o período é estendido até a entrega completa do combinado.',
  },
]

/** Camada 1 — meios de entrega, não produtos avulsos (Documento-Mestre §12). */
const meios = [
  'Diagnóstico',
  'Oferta e posicionamento',
  'Jornada comercial',
  'CRM e processo',
  'Scripts e cadência',
  'Dashboards',
  'Tráfego e demanda',
  'Automação e IA aplicada',
  'Ritos de liderança',
]

export default function ServicosPage() {
  const reduce = useReducedMotion()

  return (
    <main className="bg-musgo grain min-h-screen">
      <PageHeader
        eyebrow="Como trabalhamos"
        title="Todo mundo entra pelo mesmo lugar: "
        accent="o diagnóstico."
        subtitle="Não vendemos pacote de serviço. Medimos a operação, achamos o gargalo e prescrevemos o degrau certo — comercial, tecnológico ou os dois. O que você contrata é a profundidade da nossa entrada, não uma lista de tarefas."
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-baunilha text-musgo text-base font-semibold hover:bg-menta transition-colors duration-300"
          >
            Começar pelo Raio-X
          </Link>
          <Link
            href="/portfolio"
            className="mono-label inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-menta/30 text-baunilha hover:border-menta hover:text-menta transition-colors duration-300"
          >
            Ver Portfólio <span aria-hidden>→</span>
          </Link>
        </div>
      </PageHeader>

      {/* Escada de ofertas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
          {degraus.map((d, idx) => (
            <motion.div
              key={d.title}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <p className="mono-label text-menta mb-4">{d.tag}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-baunilha tracking-tight mb-4">{d.title}</h2>
                <p className="text-lg text-baunilha/75 mb-8">{d.lead}</p>
                <ul className="space-y-3 mb-8">
                  {d.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-baunilha/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-menta mt-2.5 shrink-0" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-l-2 border-menta/40 pl-4 mb-8">
                  <p className="mono-label text-menta mb-2">Nossa garantia</p>
                  <p className="text-baunilha/70 text-sm leading-relaxed">{d.garantia}</p>
                </div>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-menta text-musgo font-semibold hover:bg-baunilha transition-colors duration-300"
                >
                  {d.cta}
                </Link>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative aspect-square border hairline overflow-hidden">
                  <Image src={d.image} alt={d.title} fill className="object-cover opacity-90" sizes="(max-width: 768px) 100vw, 50vw" />
                  <span className="absolute top-4 left-4 mono-label text-baunilha bg-musgo/70 px-3 py-1 backdrop-blur-sm">
                    {d.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meios de entrega */}
      <section className="py-16 md:py-20 border-t hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-baunilha tracking-tight mb-4 max-w-2xl">
            Ferramenta é meio, não oferta.
          </h2>
          <p className="text-baunilha/70 max-w-2xl mb-10">
            Tráfego pago, CRM, automação e IA não são produtos que vendemos avulsos — são como
            entregamos o que o diagnóstico prescreveu. Se o gargalo é demanda, trabalhamos demanda.
            Se é conversão, trabalhamos processo e CRM. A ferramenta segue o diagnóstico, nunca o
            contrário.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {meios.map((m) => (
              <li key={m} className="mono-label text-baunilha/55 flex items-center gap-2">
                <span className="text-menta" aria-hidden>▪</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Frente tecnológica */}
      <section className="py-16 md:py-20 border-t hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-baunilha tracking-tight mb-4">
            A frente tecnológica segue a mesma lógica.
          </h2>
          <p className="text-baunilha/70 mb-4">
            Quando o gargalo não é comercial e sim operacional — processo manual, dado espalhado,
            time refém de planilha — a entrada é a mesma: diagnóstico primeiro, estruturação depois,
            operação contínua no fim.
          </p>
          <p className="text-baunilha/70">
            A diferença honesta: o lado tecnológico ainda é mais aberto que o comercial. O Raio-X
            comercial tem régua fechada em três pilares; o diagnóstico tecnológico é mais amplo e
            desenhado caso a caso. Preferimos dizer isso a fingir uma régua que ainda não existe.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 md:py-32 border-t hairline overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(58,201,123,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative z-[2] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-menta mb-6">Começa pela Raiz</p>
          <h2 className="text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.06] tracking-tight font-bold text-baunilha max-w-3xl mx-auto mb-6 text-balance">
            Não dá para priorizar o que não foi medido.
          </h2>
          <p className="text-baunilha/70 text-lg mb-10 max-w-xl mx-auto">
            O Raio-X Comercial é o primeiro degrau — e o único pré-requisito para os outros.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-baunilha text-musgo text-lg font-semibold hover:bg-menta transition-colors duration-300"
          >
            Falar com a EverGreen
          </Link>
        </div>
      </section>
    </main>
  )
}
