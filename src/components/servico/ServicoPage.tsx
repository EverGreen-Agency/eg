'use client'

import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'
import type { PaginaServico } from '@/config/paginas-servico'

/**
 * Layout único das páginas de serviço.
 *
 * Um componente, três rotas: `/consultoria-comercial`, `/estruturacao-comercial`
 * e `/processo-comercial` diferem só no conteúdo (`src/config/paginas-servico.ts`).
 * Triplicar markup aqui garantiria que as três divergissem na primeira edição —
 * e daria ao CTO três lugares para restilizar em vez de um.
 *
 * Usa o `PageHeader` compartilhado de propósito, mesmo ele carregando o
 * `mono-label` e as cantoneiras que foram rejeitadas na revisão visual. Introduzir
 * um cabeçalho diferente em três páginas novas atrapalharia o restyle do site em
 * vez de ajudar: o certo é trocar o PageHeader uma vez e as 10 páginas seguirem.
 */
export default function ServicoPage({ dados }: { dados: PaginaServico }) {
  return (
    <main className="bg-musgo text-baunilha">
      <PageHeader
        eyebrow={dados.eyebrow}
        title={dados.titulo}
        accent={dados.acento}
        subtitle={dados.subtitulo}
      />

      {/* o pedido, o sintoma e a causa — o mesmo enquadramento das apresentações */}
      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold text-baunilha max-w-2xl mb-10 text-balance">
            O pedido quase nunca é o problema.
          </h2>
          <div className="grid gap-4 md:gap-5 md:grid-cols-3">
            {dados.sintoma.map(linha => (
              <article key={linha.pedido} className="border hairline p-6 md:p-7 flex flex-col gap-4">
                <p className="text-baunilha/90 text-lg leading-snug">{linha.pedido}</p>
                <div>
                  <p className="text-[11px] tracking-[.14em] uppercase text-baunilha/40 mb-1">
                    Sintoma real
                  </p>
                  <p className="text-baunilha/70 text-sm leading-relaxed">{linha.sintoma}</p>
                </div>
                <div className="mt-auto">
                  <p className="text-[11px] tracking-[.14em] uppercase text-menta/70 mb-1">
                    Causa raiz
                  </p>
                  <p className="text-baunilha text-sm leading-relaxed">{linha.causa}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* o que a EG entrega */}
      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold text-baunilha max-w-2xl mb-10 text-balance">
            {dados.entregaTitulo}
          </h2>
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 max-w-5xl">
            {dados.entrega.map(item => (
              <div key={item.titulo}>
                <h3 className="text-xl md:text-2xl font-bold text-baunilha mb-3 tracking-tight text-balance">
                  {item.titulo}
                </h3>
                <p className="text-baunilha/70 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* a coluna que diferencia */}
      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold text-baunilha mb-4 text-balance">
            {dados.naoServeTitulo}
          </h2>
          <p className="text-baunilha/60 mb-8 leading-relaxed">
            Dizer isso custa negócio no curto prazo. É o que sustenta a promessa de sermos a
            decisão mais segura em vez da opção mais barata.
          </p>
          <ul className="space-y-5">
            {dados.naoServe.map(item => (
              <li key={item} className="flex gap-4 text-baunilha/75 leading-relaxed">
                <span className="text-menta/60 shrink-0 select-none" aria-hidden>
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* onde entra no método */}
      <section className="py-16 md:py-20 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="text-[11px] tracking-[.14em] uppercase text-menta mb-3">
            Sistema Raiz EG · {dados.metodo.fase}
          </p>
          <p className="text-baunilha/80 text-lg leading-relaxed">{dados.metodo.texto}</p>
          <Link
            href="/servicos"
            className="inline-block mt-6 text-menta text-sm underline underline-offset-4 hover:text-menta/80 transition"
          >
            Ver a escada de ofertas completa
          </Link>
        </div>
      </section>

      {/* perguntas — também é o que alimenta o schema de FAQ */}
      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold text-baunilha mb-10 text-balance">
            Perguntas frequentes
          </h2>
          <div className="divide-y divide-baunilha/10 border-y border-baunilha/10">
            {dados.faq.map(item => (
              <details key={item.pergunta} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 text-baunilha font-medium text-lg leading-snug">
                  <span className="text-balance">{item.pergunta}</span>
                  <span
                    className="text-menta shrink-0 transition-transform group-open:rotate-45 select-none"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-baunilha/70 leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] leading-[1.1] tracking-tight font-bold text-baunilha mb-5 text-balance">
            {dados.cta.titulo}
          </h2>
          <p className="text-baunilha/70 text-lg mb-9">{dados.cta.texto}</p>
          <Link
            href="/contato"
            className="inline-block px-8 py-4 bg-menta text-musgo font-bold rounded-lg hover:bg-menta/90 transition"
          >
            {dados.cta.botao}
          </Link>
        </div>
      </section>
    </main>
  )
}
