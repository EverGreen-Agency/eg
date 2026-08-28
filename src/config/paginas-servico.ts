/**
 * Conteúdo das páginas de serviço.
 *
 * Existem por um motivo medido: a auditoria de busca de 28/08/2026 mostrou o
 * domínio com 16 keywords, zero no top 10 e tráfego orgânico estimado zero — e
 * uma única `/servicos` disputando quatro intenções diferentes, perdendo as
 * quatro. Uma página por termo com demanda verificada resolve isso; a `/servicos`
 * continua como hub que aponta para elas.
 *
 * Cada página abre pelo termo que o mercado digita e fecha no vocabulário da
 * casa. Isso não é truque de SEO — é a mesma lógica de sintoma e causa que a
 * `/growth` já usa: ninguém procura a solução pelo nome que demos a ela.
 * "Previsibilidade" tem 40 buscas/mês; "consultoria comercial" tem 590.
 */

export type ServicoFaq = { pergunta: string; resposta: string }

export type PaginaServico = {
  slug: string
  /** keyword-alvo, com o volume e a dificuldade que justificaram a página */
  keyword: string
  volume: number
  kd: number

  metaTitle: string
  metaDescription: string

  eyebrow: string
  titulo: string
  /** trecho final do título, em menta */
  acento: string
  subtitulo: string

  /** o enquadramento de sintoma e causa que abre a página */
  sintoma: { pedido: string; sintoma: string; causa: string }[]

  /** o que a EG faz, na prática */
  entregaTitulo: string
  entrega: { titulo: string; texto: string }[]

  /** a coluna que diferencia: quando esse trabalho é o investimento errado */
  naoServeTitulo: string
  naoServe: string[]

  /** onde entra no Sistema Raiz e em qual degrau */
  metodo: { fase: string; texto: string }

  faq: ServicoFaq[]

  cta: { titulo: string; texto: string; botao: string }
}

export const paginasServico: PaginaServico[] = [
  // ------------------------------------------------------------------ 1
  {
    slug: 'consultoria-comercial',
    keyword: 'consultoria comercial',
    volume: 590,
    kd: 14,

    metaTitle: 'Consultoria comercial com garantia de execução | EverGreen',
    metaDescription:
      'Consultoria comercial que começa medindo: Raio-X de Oferta, Demanda e Conversão, prioridade defendida e garantia de execução escrita. Diagnóstico, Sprint e Retainer.',

    eyebrow: 'CONSULTORIA COMERCIAL',
    titulo: 'Consultoria que começa ',
    acento: 'medindo.',
    subtitulo:
      'A maior parte da consultoria comercial vende reunião. A nossa entrega uma nota de 0 a 10 em três pilares, uma prioridade defendida por escrito e uma garantia de execução que você pode cobrar.',

    sintoma: [
      {
        pedido: '“Preciso vender mais.”',
        sintoma: 'O time está ocupado e a receita não acompanha.',
        causa: 'Falta priorização — trabalha-se em tudo ao mesmo tempo.',
      },
      {
        pedido: '“Quero um consultor comercial.”',
        sintoma: 'Já houve consultoria antes e nada ficou de pé.',
        causa: 'O trabalho anterior não construiu capacidade interna.',
      },
      {
        pedido: '“Quero previsibilidade.”',
        sintoma: 'O faturamento cresce e a previsão erra cada vez mais.',
        causa: 'Não existe histórico de taxa de passagem por etapa.',
      },
    ],

    entregaTitulo: 'O que a consultoria entrega, em ordem',
    entrega: [
      {
        titulo: 'Um diagnóstico com número',
        texto:
          'O Raio-X Comercial mede Oferta, Demanda e Conversão com quinze perguntas, nota de 1 a 5 cada, convertida para uma escala de 0 a 10. O menor pilar é por onde se começa — e essa regra impede o erro mais caro do setor, que é investir em gerar demanda com a conversão quebrada.',
      },
      {
        titulo: 'Uma causa nomeada, não só um sintoma',
        texto:
          'O pilar diz onde a receita vaza. Não diz por quê. A causa está em uma de quatro sustentações: Dados, Tecnologia, Pessoas ou Processo. Conversão baixa por falta de Processo pede cadência; a mesma nota por falta de Pessoas pede dono e SLA. Consertos diferentes para o mesmo número.',
      },
      {
        titulo: 'Um plano de 90 dias com escopo fechado',
        texto:
          'O que será feito, em que ordem, e — a parte que quase ninguém escreve — o que fica de fora. Priorizar é escolher, e escolher implica recusar em voz alta.',
      },
      {
        titulo: 'Garantia de execução por escrito',
        texto:
          'Não garantimos faturamento: resultado depende dos dois lados, e quem promete receita está mentindo ou vai brigar com você depois. Garantimos entrega. Se você não sair do diagnóstico com clareza prática sobre gargalos e prioridades, revisamos sem custo até ficar cristalino.',
      },
    ],

    naoServeTitulo: 'Quando consultoria comercial é o investimento errado',
    naoServe: [
      'Quando o problema é produto. Se os clientes cancelam por insatisfação, vender melhor acelera a entrada e a saída ao mesmo tempo.',
      'Quando não existe demanda. Consultoria comercial organiza a escassez com mais precisão — o gargalo é anterior e mais barato de atacar.',
      'Quando a liderança não vai participar. Processo comercial exige decisões que só o dono toma: quem é ICP, o que se recusa, qual o teto de desconto. Sem isso o projeto morre no segundo mês, sem exceção conhecida.',
      'Quando a empresa está em crise de caixa aguda. Estruturação leva de três a seis meses para aparecer no resultado.',
    ],

    metodo: {
      fase: 'Raiz — diagnosticar',
      texto:
        'A consultoria entra pela primeira fase do Sistema Raiz. Nenhum cliente pula o diagnóstico: não dá para priorizar o que não foi medido, e estruturar antes de medir é construir no escuro.',
    },

    faq: [
      {
        pergunta: 'Quanto custa uma consultoria comercial?',
        resposta:
          'Depende do degrau. O diagnóstico é escopo curto e fechado; a Sprint de Estruturação é um projeto de seis a oito semanas com preço fechado; o Retainer é mensal. A ordem importa mais que o valor: diagnóstico, depois estruturação, depois acompanhamento. Quem oferece o retainer primeiro está vendendo previsibilidade de receita — a dele.',
      },
      {
        pergunta: 'O diagnóstico é gratuito?',
        resposta:
          'Não. Diagnóstico gratuito é isca comercial e tende a concluir, sem surpresa, que você precisa exatamente do que aquela empresa vende. O nosso é pago, tem entregável definido e tem garantia: se não sair claro, revisamos sem custo.',
      },
      {
        pergunta: 'Em quanto tempo aparece resultado?',
        resposta:
          'O diagnóstico leva de duas a três semanas. A primeira estruturação, de seis a doze semanas. O primeiro sinal no resultado, de três a seis meses, dependendo do ciclo de venda — um ciclo de quatro meses não dá sinal em sessenta dias, matematicamente não dá. Previsibilidade de fato leva de dois a quatro trimestres, porque exige histórico.',
      },
      {
        pergunta: 'Vocês vendem por nós?',
        resposta:
          'Não. Isso é terceirização comercial, é legítimo e é outro serviço. Consultoria constrói a capacidade dentro da sua casa — e tem plano de saída desde o começo. Se a operação não funciona sem o consultor depois de um ano, o que foi vendido não foi estruturação.',
      },
      {
        pergunta: 'Como escolher uma consultoria comercial?',
        resposta:
          'Faça cinco perguntas a todas as candidatas, inclusive a nós: como vocês medem onde está o problema; o que fazem primeiro e o que fica de fora; o que acontece se não funcionar, por escrito; quem vai executar; e como vocês saem. Se alguém responder melhor, contrate essa pessoa.',
      },
    ],

    cta: {
      titulo: 'Não dá para priorizar o que não foi medido.',
      texto: 'O Raio-X Comercial é o primeiro degrau — e o único pré-requisito para os outros.',
      botao: 'Falar sobre o diagnóstico',
    },
  },

  // ------------------------------------------------------------------ 2
  {
    slug: 'estruturacao-comercial',
    keyword: 'estruturação comercial',
    volume: 170,
    kd: 7,

    metaTitle: 'Estruturação comercial: por onde começar | EverGreen',
    metaDescription:
      'Estruturação comercial em ordem: medir onde a receita vaza, priorizar o gargalo, construir o mínimo que o time segue sem lembrete. Sprint de seis a oito semanas com escopo e garantia.',

    eyebrow: 'ESTRUTURAÇÃO COMERCIAL',
    titulo: 'O que funcionava com cinco clientes ',
    acento: 'para de funcionar com quarenta.',
    subtitulo:
      'Não é que alguém errou. O jeito informal de vender era genuinamente eficiente naquela escala — ele só não sobe. O sintoma é previsível: o faturamento cresce e a previsibilidade cai.',

    sintoma: [
      {
        pedido: '“Vamos colocar um CRM.”',
        sintoma: 'O CRM enche e o time cria uma planilha paralela.',
        causa: 'O processo não existia antes; o CRM só tornou isso visível.',
      },
      {
        pedido: '“Precisamos de mais vendedores.”',
        sintoma: 'O vendedor novo reproduz o problema com mais uma pessoa.',
        causa: 'Não há o que ensinar — a venda funciona por talento individual.',
      },
      {
        pedido: '“Vamos investir mais em mídia.”',
        sintoma: 'Mais leads entram e a receita não acompanha.',
        causa: 'O vazamento está no meio do funil, não no topo.',
      },
    ],

    entregaTitulo: 'A ordem que funciona',
    entrega: [
      {
        titulo: '1. Medir onde a receita vaza',
        texto:
          'Antes de mudar qualquer coisa, saber onde ela é perdida — medido, não impressão. Três pilares: Oferta, Demanda, Conversão. Ataca-se o menor primeiro. Investir em demanda com a conversão em 2 é encher de leads um funil furado.',
      },
      {
        titulo: '2. Perguntar por que o pilar está baixo',
        texto:
          'É a etapa que quase todo diagnóstico pula, e a que decide se o conserto dura. A causa está em Dados, Tecnologia, Pessoas ou Processo. Sem essa leitura, o plano ataca o sintoma e o pilar volta a cair no ciclo seguinte.',
      },
      {
        titulo: '3. Estruturar o mínimo que sustenta',
        texto:
          'O objetivo não é ter o processo mais completo — é ter o menor que o time segue sem lembrete. Na prática: etapas do funil que refletem a venda real, um critério verificável de passagem, cadência de follow-up, um dono por etapa e um scorecard de cinco ou seis números. Se a lista tem trinta itens, ela não vai ser adotada.',
      },
      {
        titulo: '4. Evoluir, que não termina',
        texto:
          'Quando um pilar chega a 7 ou 8, a régua endurece: a pergunta deixa de ser “existe follow-up?” e passa a ser “o follow-up é testado, medido e ajustado?”. É o que separa uma empresa estruturada de uma que foi estruturada uma vez.',
      },
    ],

    naoServeTitulo: 'Quando não estruturar agora',
    naoServe: [
      'Quando a oferta ainda não foi validada. Estruturar a venda de algo que o mercado ainda não quis é construir uma máquina para produzir a coisa errada com eficiência.',
      'Quando o volume não justifica. Uma operação com dez oportunidades por mês não precisa de scorecard semanal — precisa de mais demanda.',
      'Quando a liderança não vai participar. Processo comercial sem compromisso executivo morre no segundo mês.',
    ],

    metodo: {
      fase: 'Ramos — estruturar',
      texto:
        'A estruturação é a terceira fase do Sistema Raiz e vem depois de diagnosticar e priorizar. Comercialmente, é a Sprint de Estruturação: seis a oito semanas, escopo fechado, com garantia de que se não implantarmos no cronograma o acompanhamento se estende sem honorário adicional.',
    },

    faq: [
      {
        pergunta: 'Qual o sinal de que chegou a hora de estruturar?',
        resposta:
          'Não é faturamento nem número de vendedores. É este: você consegue explicar por que fechou os últimos cinco negócios — e por que perdeu os últimos cinco? Se a resposta depende da memória de quem estava lá, a operação funciona por talento individual. Talento não escala e vai embora quando a pessoa vai.',
      },
      {
        pergunta: 'Por onde começar a estruturação comercial?',
        resposta:
          'Por medir, nunca por comprar ferramenta. Ferramenta é consequência de processo, não substituto: instalar CRM numa operação sem critério de qualificação produz um CRM com critérios inventados por cada vendedor.',
      },
      {
        pergunta: 'Quanto tempo leva uma Sprint de Estruturação?',
        resposta:
          'De seis a oito semanas, com escopo fechado desde o início. Escopo aberto cresce para caber no orçamento e some na execução.',
      },
      {
        pergunta: 'O que fica pronto ao fim da estruturação?',
        resposta:
          'O mínimo operável: pipeline e funil desenhados e implantados, rotinas comerciais e cadência de follow-up, ajustes de CRM e scripts de abordagem, treinamento da liderança e um scorecard de acompanhamento.',
      },
    ],

    cta: {
      titulo: 'Estruturar é transformar o que funciona por talento em algo que funciona por desenho.',
      texto: 'Começa pela medição — o Raio-X Comercial é o pré-requisito.',
      botao: 'Falar sobre a Sprint',
    },
  },

  // ------------------------------------------------------------------ 3
  {
    slug: 'processo-comercial',
    keyword: 'processo comercial',
    volume: 260,
    kd: 12,

    metaTitle: 'Processo comercial: as sete etapas que precisam estar escritas | EverGreen',
    metaDescription:
      'Processo comercial escrito não é burocracia: são sete etapas com critério verificável de passagem e um dono. É pré-requisito de medição, e medição é pré-requisito de melhoria.',

    eyebrow: 'PROCESSO COMERCIAL',
    titulo: 'Sete etapas, um critério por etapa, ',
    acento: 'um dono.',
    subtitulo:
      'Processo comercial escrito tem má fama, e ela é merecida quando o documento é feito para agradar auditoria. O que serve cabe em uma página — e é o que permite diagnosticar por que um negócio foi perdido.',

    sintoma: [
      {
        pedido: '“Perdemos por preço.”',
        sintoma: 'A mesma explicação para negócios muito diferentes.',
        causa: 'Sem etapas escritas, ninguém sabe onde a coisa realmente parou.',
      },
      {
        pedido: '“O cliente sumiu.”',
        sintoma: 'Negócios param e ninguém percebe até a reunião de fechamento.',
        causa: 'Não existe prazo por etapa, então não existe sinal.',
      },
      {
        pedido: '“Nosso time é desorganizado.”',
        sintoma: 'Dois vendedores classificam o mesmo lead de formas diferentes.',
        causa: 'O critério de qualificação não está escrito, é sensação.',
      },
    ],

    entregaTitulo: 'O que fica escrito',
    entrega: [
      {
        titulo: 'As sete etapas, na ordem da venda real',
        texto:
          'Origem, contato iniciado, qualificação, diagnóstico, proposta, negociação, fechamento ou perda. Descobertas olhando negócios ganhos e perdidos dos últimos meses — perguntar ao time como deveria ser produz um mapa bonito de um território que não existe.',
      },
      {
        titulo: 'Um critério verificável por etapa',
        texto:
          'O que precisa ser verdade para avançar. “Lead quente” não é critério; “confirmou orçamento e tem prazo definido” é. O teste mais rápido de maturidade: se dois vendedores classificam o mesmo negócio de formas diferentes, o critério ainda não está escrito o suficiente.',
      },
      {
        titulo: 'Um prazo e um dono por etapa',
        texto:
          'O prazo não é para pressionar, é para detectar: um negócio parado há três semanas na proposta é um sinal, e sinal só aparece se existir a régua. Etapa sem dono é etapa onde as coisas param.',
      },
      {
        titulo: 'Motivo de perda em categoria fixa',
        texto:
          'Preço, prazo, escopo, concorrente, sem decisão, fora de perfil. Campo livre não vira análise — vira uma coleção de frases que ninguém agrega. Seis categorias viram gráfico, e gráfico vira decisão.',
      },
    ],

    naoServeTitulo: 'Quando o processo não é o problema',
    naoServe: [
      'Quando entram cinco oportunidades por mês. Escrever sete etapas organiza a escassez com mais precisão — o gargalo está em Demanda.',
      'Quando o cliente não entende o que você vende. O processo vai mostrar isso com clareza cirúrgica na etapa de diagnóstico, e não vai consertar. Oferta confusa se conserta na oferta.',
      'Quando a oferta muda toda semana. Processo de alvo móvel vira retrabalho permanente — estabilize antes.',
    ],

    metodo: {
      fase: 'Ramos — estruturar',
      texto:
        'Processo é uma das quatro sustentações do método: quando um pilar do Raio-X está baixo e a causa é ausência de cadência, escrever as sete etapas é a intervenção específica para esse diagnóstico — não tarefa administrativa.',
    },

    faq: [
      {
        pergunta: 'Quantas etapas um processo comercial deve ter?',
        resposta:
          'Sete é o limite prático. Abaixo de cinco você perde capacidade de diagnóstico; acima de oito perde adoção — doze etapas viram burocracia e ninguém atualiza.',
      },
      {
        pergunta: 'Por que escrever o processo comercial?',
        resposta:
          'Não por organização. Porque enquanto o processo existe só na cabeça das pessoas, a empresa não consegue diagnosticar o próprio problema: sem etapas escritas, ninguém sabe em qual ponto exato um negócio parou. Processo escrito é pré-requisito de medição, e medição é pré-requisito de melhoria.',
      },
      {
        pergunta: 'Como descobrir as etapas reais da minha venda?',
        resposta:
          'Olhando os últimos vinte negócios — dez ganhos e dez perdidos — um por um: em qual etapa parou, quanto tempo levou, qual foi a última interação. Dois dias de trabalho interno, e frequentemente o gargalo aparece sem consultor nenhum.',
      },
      {
        pergunta: 'Processo comercial e playbook de vendas são a mesma coisa?',
        resposta:
          'Não. O processo define as etapas e os critérios de passagem — a estrutura. O playbook define a conversa: quais perguntas fazer, em que ordem, e o que fazer com cada resposta. O processo vem primeiro.',
      },
    ],

    cta: {
      titulo: 'Sem etapas escritas, “perdemos por preço” é conclusão, não observação.',
      texto: 'O Raio-X Comercial mostra em qual pilar o processo está custando receita.',
      botao: 'Falar sobre o diagnóstico',
    },
  },
]

export function getPaginaServico(slug: string) {
  return paginasServico.find(p => p.slug === slug)
}
