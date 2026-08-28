'use client'

import Link from 'next/link'
import PageHeader from '@/components/brand/PageHeader'
import ContactForm from '@/components/ContactForm'
import { kommoFaq } from './faq'

/**
 * Página de autoridade do cluster Kommo.
 *
 * Por que ela foi reescrita: a auditoria de busca de 28/08/2026 mostrou que esta
 * rota já ranqueia sozinha em cinco keywords — kommo parceiros (260/mês),
 * kommo partners (210), parceiro kommo (170), kommo partner (110), parceiros
 * kommo (110) — todas em posição 20 a 30, sem ninguém nunca ter trabalhado a
 * página. Somando `kommo crm` (8.100/mês), é o maior ativo de busca do domínio.
 *
 * A versão anterior era uma landing genérica de conversão ("Transforme seu
 * WhatsApp em uma Máquina de Vendas"), com hex cravado em vez dos tokens da
 * marca. Página de conversão não ranqueia por termo informacional; página de
 * autoridade sim — e a seção "quando o Kommo é a escolha errada" é justamente o
 * que a diferencia do conteúdo de quem ganha comissão por assinatura.
 */

const ondeAcerta = [
  {
    titulo: 'Operação que vende por WhatsApp e perde conversa',
    texto:
      'Se as oportunidades chegam por mensagem e morrem porque ninguém respondeu, o ganho é imediato e mensurável. Aqui o Kommo bate concorrentes maiores, que tratam WhatsApp como integração de terceiro.',
  },
  {
    titulo: 'Times pequenos que precisam de adoção rápida',
    texto:
      'A curva de aprendizado é curta. Um time de três a dez vendedores opera em uma semana. CRMs corporativos exigem consultoria e meses.',
  },
  {
    titulo: 'Quando o valor está na cadência, não no relatório',
    texto:
      'O Kommo é forte em fazer a próxima ação acontecer. Se o seu problema é follow-up que não acontece, ele resolve.',
  },
]

const ondeErra = [
  {
    titulo: 'Se você precisa de relatório analítico profundo',
    texto:
      'O reporting é funcional e raso. Quem precisa cruzar coorte, atribuição multi-toque e receita recorrente bate no teto — e a saída costuma ser exportar para um BI, o que anula parte do motivo de ter escolhido um CRM simples.',
  },
  {
    titulo: 'Se o ciclo é longo e tem muitos decisores',
    texto:
      'Venda complexa com comitê, múltiplas propostas e ciclo de nove meses pede modelagem de conta e oportunidade que o Kommo trata de forma simplificada.',
  },
  {
    titulo: 'Se o peso está no pós-venda',
    texto:
      'Ele é um CRM de aquisição. Gestão de contrato, renovação e sucesso do cliente não são o ponto forte.',
  },
  {
    titulo: 'Se a empresa já vive em outro ecossistema',
    texto:
      'Quem já opera Microsoft ou Google de forma pesada e integrada às vezes ganha mais consolidando do que trazendo mais uma ferramenta.',
  },
]

const naoResolve = [
  ['CRM não gera demanda.', 'Se entram poucas oportunidades, ele organiza a escassez. O gargalo é anterior.'],
  ['CRM não cria processo.', 'Ele torna visível o processo que existe. Quando não existe, o time reage criando uma planilha paralela — que é o atestado de óbito de uma implantação.'],
  ['CRM não substitui dono.', 'Sem alguém responsável por cobrar cadência, qualquer configuração é abandonada em semanas.'],
  ['CRM não conserta oferta confusa.', 'Se o cliente não entende o que você vende, o funil mostra isso com mais precisão. Não conserta.'],
]


export default function KommoClient() {
  return (
    <main className="bg-musgo text-baunilha">
      <PageHeader
        eyebrow="PARCEIRO OFICIAL KOMMO"
        title="Kommo CRM: o que resolve, o que não resolve e "
        accent="quando não vale."
        subtitle="A maior parte do conteúdo sobre Kommo é escrita por quem ganha comissão se você assinar. Este também — somos parceiros oficiais. A diferença é que aqui está a lista de casos em que a resposta certa é não assinar."
      />

      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold mb-6 text-balance">
            O que o Kommo é, sem marketing
          </h2>
          <p className="text-baunilha/75 leading-relaxed mb-4">
            Um CRM construído em torno de conversa. A tese do produto é que, no Brasil e na
            América Latina, a venda B2B acontece majoritariamente por WhatsApp — e que um CRM
            deve tratar a conversa como objeto central, não como anexo.
          </p>
          <p className="text-baunilha/75 leading-relaxed mb-6">Isso se traduz em três coisas concretas:</p>
          <ul className="space-y-4">
            {[
              ['Caixa de entrada unificada', 'WhatsApp, Instagram, Facebook e e-mail no mesmo lugar, com a conversa colada ao card do negócio.'],
              ['Funil visual com automação por etapa', 'Mover o card dispara ações: mensagem, tarefa, notificação, atribuição.'],
              ['Bots sem código', 'Construtor de fluxo para qualificação inicial e resposta fora de horário.'],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="text-menta/60 shrink-0 select-none" aria-hidden>—</span>
                <span className="text-baunilha/80 leading-relaxed">
                  <strong className="text-baunilha font-semibold">{t}.</strong> {d}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-baunilha/75 leading-relaxed">É bom nisso. Genuinamente.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold mb-10 text-balance">
            Onde ele é a escolha certa
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            {ondeAcerta.map(item => (
              <div key={item.titulo}>
                <h3 className="text-lg font-bold mb-3 tracking-tight text-balance">{item.titulo}</h3>
                <p className="text-baunilha/70 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold mb-3 text-balance">
            Onde ele é a escolha errada
          </h2>
          <p className="text-baunilha/60 mb-10 max-w-2xl leading-relaxed">
            Aqui a maioria dos artigos para de ser útil.
          </p>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            {ondeErra.map(item => (
              <div key={item.titulo}>
                <h3 className="text-lg font-bold mb-3 tracking-tight text-balance">{item.titulo}</h3>
                <p className="text-baunilha/70 text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold mb-3 text-balance">
            O que nenhum CRM resolve
          </h2>
          <p className="text-baunilha/60 mb-8 leading-relaxed">
            Vale dizer com todas as letras, porque é a origem da maioria das implantações
            frustradas.
          </p>
          <div className="divide-y divide-baunilha/10 border-y border-baunilha/10">
            {naoResolve.map(([t, d]) => (
              <p key={t} className="py-5 text-baunilha/75 leading-relaxed">
                <strong className="text-baunilha font-semibold">{t}</strong> {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <p className="text-[11px] tracking-[.14em] uppercase text-menta mb-3">
            Sistema Raiz EG · Ramos — estruturar
          </p>
          <p className="text-baunilha/80 text-lg leading-relaxed mb-4">
            CRM é a terceira fase do método, não a primeira. Se o Raio-X Comercial aponta que o
            pilar crítico é Oferta, implantar CRM não move o ponteiro — vai organizar melhor uma
            conversa que continua sendo a errada.
          </p>
          <p className="text-baunilha/80 text-lg leading-relaxed">
            O CRM é o movimento certo quando o gargalo está em <strong>Conversão</strong>: existe
            demanda chegando, existe oferta clara, e o que se perde está entre o primeiro contato
            e o fechamento.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm">
            <Link href="/servicos" className="text-menta underline underline-offset-4 hover:text-menta/80 transition">
              Ver a escada de ofertas
            </Link>
            <Link href="/processo-comercial" className="text-menta underline underline-offset-4 hover:text-menta/80 transition">
              As sete etapas do processo comercial
            </Link>
            <a
              href="https://www.kommo.com/partners/evergreen-mkt/"
              target="_blank"
              rel="noreferrer"
              className="text-menta underline underline-offset-4 hover:text-menta/80 transition"
            >
              Verificar a parceria no site da Kommo
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b hairline">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12] tracking-tight font-bold mb-10 text-balance">
            Perguntas frequentes
          </h2>
          <div className="divide-y divide-baunilha/10 border-y border-baunilha/10">
            {kommoFaq.map(item => (
              <details key={item.pergunta} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-medium text-lg leading-snug">
                  <span className="text-balance">{item.pergunta}</span>
                  <span className="text-menta shrink-0 transition-transform group-open:rotate-45 select-none" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 text-baunilha/70 leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 max-w-2xl">
          <h2 className="text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.1] tracking-tight font-bold mb-4 text-balance">
            Se o gargalo for outro, a gente diz.
          </h2>
          <p className="text-baunilha/70 text-lg mb-10">
            Implantamos Kommo quando o diagnóstico aponta Conversão. Quando aponta Oferta ou
            Demanda, o CRM não move o ponteiro — e falamos isso antes, não depois.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
