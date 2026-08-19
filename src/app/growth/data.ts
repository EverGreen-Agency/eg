export type MethodKey = 'diagnostico' | 'arquitetura' | 'implementacao' | 'operacao' | 'evolucao'

export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'gargalo', label: 'O gargalo' },
  { id: 'sistema', label: 'Como pensamos' },
  { id: 'metodo', label: 'Método EG' },
  { id: 'tempo', label: 'No tempo' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'evidencias', label: 'Evidências' },
  { id: 'padrao', label: 'Nosso padrão' },
  { id: 'contato', label: 'Contato' },
]

export const problems = [
  { request: '“Quero Google Ads.”', symptom: 'Leads entram, mas o atendimento demora.', cause: 'Jornada e processo.' },
  { request: '“Quero CRM.”', symptom: 'Não existe cadência nem critério comercial.', cause: 'Operação comercial.' },
  { request: '“Quero automação.”', symptom: 'O fluxo já nasce confuso.', cause: 'Arquitetura do processo.' },
]

export const systemLevers = [
  { name: 'Oferta', note: 'Clareza de valor e aderência ao mercado.' },
  { name: 'Aquisição', note: 'Demanda mensurável, não volume vazio.' },
  { name: 'Experiência', note: 'Uma jornada sem atritos desnecessários.' },
  { name: 'Dados', note: 'Evidência para decidir o próximo movimento.' },
  { name: 'Tecnologia', note: 'Infraestrutura que sustenta o processo.' },
  { name: 'Pessoas', note: 'Papéis, contexto e responsabilidade claros.' },
  { name: 'Processo', note: 'Cadência que transforma intenção em receita.' },
]

export const methodModules: Record<MethodKey, {
  number: string
  title: string
  short: string
  headline: string
  groups: { title: string; items: string[] }[]
}> = {
  diagnostico: {
    number: '01', title: 'Diagnóstico', short: 'Encontrar onde a receita escapa.',
    headline: 'Antes de decidir o que fazer, descobrimos onde a receita está escapando.',
    groups: [
      { title: 'O que analisamos', items: ['Oferta', 'Aquisição', 'Jornada', 'Atendimento', 'Processo comercial', 'Dados'] },
      { title: 'O que procuramos', items: ['Gargalos', 'Vazamentos', 'Fricção', 'Falta de cadência', 'Dados inconsistentes'] },
      { title: 'O que sai', items: ['Baseline', 'Mapa de gargalos', 'Score inicial', 'Hipóteses prioritárias', 'Plano de ação'] },
    ],
  },
  arquitetura: {
    number: '02', title: 'Arquitetura', short: 'Desenhar o sistema que precisa funcionar.',
    headline: 'Conectamos jornada, processo, dados e tecnologia antes de acelerar.',
    groups: [
      { title: 'Sistema', items: ['Lead source', 'Landing page', 'CRM', 'Pipeline', 'Atendimento', 'Follow-up'] },
      { title: 'Decisões', items: ['Papéis', 'SLA', 'Critérios', 'Cadência', 'Tracking'] },
      { title: 'O que sai', items: ['Funil desenhado', 'Processo comercial', 'Mapa de dados', 'Prioridades'] },
    ],
  },
  implementacao: {
    number: '03', title: 'Implementação', short: 'Ativar as alavancas prioritárias.',
    headline: 'Implementar bem também é decidir o que não fazer agora.',
    groups: [
      { title: 'Prioridade 01', items: ['Tracking', 'Impacto alto', 'Complexidade baixa'] },
      { title: 'Prioridade 02', items: ['Pipeline comercial', 'Impacto alto', 'Complexidade média'] },
      { title: 'Prioridade 03', items: ['Campanhas', 'Impacto médio', 'Complexidade média'] },
    ],
  },
  operacao: {
    number: '04', title: 'Operação', short: 'Medir, aprender e tomar decisões.',
    headline: 'Indicadores só ganham valor quando levam a uma decisão.',
    groups: [
      { title: 'Scorecard', items: ['Leads', 'Qualificação', 'Pipeline', 'Conversão', 'CAC', 'Receita'] },
      { title: 'Ritmo', items: ['Ritos', 'Testes', 'Hipóteses', 'Próximas ações'] },
      { title: 'Aprendizado', items: ['Tendência', 'Contexto', 'Decisão', 'Responsável'] },
    ],
  },
  evolucao: {
    number: '05', title: 'Evolução', short: 'Transformar aprendizado em escala.',
    headline: 'O sistema não termina: ele ganha novas capacidades.',
    groups: [
      { title: 'Agora', items: ['Remover restrições', 'Criar baseline'] },
      { title: '90 dias', items: ['Validar hipóteses', 'Consolidar cadência'] },
      { title: 'Horizonte', items: ['Automação', 'Novos módulos', 'Escala sustentável'] },
    ],
  },
}

export const capabilities = [
  { name: 'CRM', use: 'Pipeline, cadência e próximo passo.', yes: 'Quando falta visibilidade e processo comercial.', no: 'Quando se espera que a ferramenta corrija uma operação sem dono.' },
  { name: 'Mídia', use: 'Demanda mensurável e qualificada.', yes: 'Com oferta validada e capacidade de atendimento.', no: 'Quando mais demanda ampliaria um gargalo existente.' },
  { name: 'CRO', use: 'Reduzir fricção em jornadas críticas.', yes: 'Quando há tráfego e uma hipótese mensurável.', no: 'Quando o problema principal está depois da conversão.' },
  { name: 'Web', use: 'Experiências digitais orientadas à decisão.', yes: 'Quando a interface precisa explicar, provar ou converter.', no: 'Quando uma nova página apenas mascara uma oferta confusa.' },
  { name: 'Dados', use: 'Transformar sinais em decisões.', yes: 'Quando existem decisões recorrentes sem evidência confiável.', no: 'Quando medir tudo substitui a escolha de poucos KPIs úteis.' },
  { name: 'Automação', use: 'Reduzir fricção e trabalho manual.', yes: 'Quando o processo já está claro e repetível.', no: 'Quando o fluxo que será automatizado ainda está errado.' },
  { name: 'IA', use: 'Ampliar capacidade com contexto e controle.', yes: 'Quando há tarefa, dado e critério de qualidade definidos.', no: 'Quando IA é tratada como estratégia por si só.' },
  { name: 'RevOps', use: 'Alinhar marketing, vendas e receita.', yes: 'Quando áreas otimizam métricas desconectadas.', no: 'Quando não há compromisso executivo com o processo.' },
  { name: 'Produto', use: 'Construir infraestrutura sob medida.', yes: 'Quando software cria vantagem operacional real.', no: 'Quando uma solução pronta resolve melhor e mais rápido.' },
]

export type CaseContentBlock =
  | { type: 'lead' | 'paragraph' | 'quote'; text: string }
  | { type: 'points' | 'metrics' | 'flow'; items: string[] }
  | { type: 'group'; title: string; text?: string; items?: string[] }

export type CaseContentSection = {
  label: string
  title?: string
  blocks: CaseContentBlock[]
}

export type CaseStudy = {
  id: string
  name: string
  category: string
  headline: string
  metric: string
  evidence: string
  highlights: string[]
  sections: CaseContentSection[]
}

export const cases: CaseStudy[] = [
  {
    id: 'sara',
    name: 'Dra. Sara Michelon',
    category: 'Performance & Growth · Saúde',
    headline: 'De uma conta travada a pacientes adquiridos pelo Google.',
    metric: '16 → 8 → 4 → 2',
    evidence: 'Cliques no WhatsApp → conversas → pacientes qualificados → tratamentos fechados',
    highlights: ['~R$ 350/semana em mídia', 'R$ 564 de mídia por tratamento fechado', 'Tickets-alvo de R$ 1,9 mil a R$ 55 mil'],
    sections: [
      {
        label: 'O desafio',
        title: 'Performance em um dos mercados mais difíceis de anunciar.',
        blocks: [
          { type: 'paragraph', text: 'A Dra. Sara atua em odontologia estética, implantes, reabilitação oral e procedimentos faciais — serviços de alto valor, decisão sensível e forte competição local em Florianópolis.' },
          { type: 'paragraph', text: 'Além do custo da mídia, o setor possui outro desafio: restrições publicitárias e políticas específicas das plataformas para saúde e estética.' },
          { type: 'paragraph', text: 'Quando entramos, a conta tinha histórico de campanhas sem entrega consistente, problemas de política, tracking pouco confiável e baixa clareza sobre o que acontecia depois do clique.' },
          { type: 'lead', text: 'O desafio não era simplesmente colocar anúncios no ar. Era transformar Google Ads em um canal de aquisição que pudesse ser medido até o resultado comercial.' },
        ],
      },
      {
        label: 'O que a EG fez',
        blocks: [
          { type: 'paragraph', text: 'Primeiro reconstruímos a base:' },
          { type: 'points', items: ['Correção de problemas de política e comunicação', 'Revisão da experiência e conteúdo do site', 'Novo tracking de WhatsApp e ações de contato', 'Nova arquitetura de campanhas', 'Segmentação por intenção de busca', 'Controle de palavras-chave e termos irrelevantes', 'Separação entre Odontologia e Estética', 'Acompanhamento conjunto com a clínica'] },
          { type: 'paragraph', text: 'Mas fomos além do painel do Google. Criamos uma lógica para acompanhar:' },
          { type: 'flow', items: ['Clique', 'Conversa', 'Lead', 'Qualificação', 'Agendamento', 'Comparecimento', 'Fechamento'] },
          { type: 'lead', text: 'Porque para a EG: conversão do Google não é receita.' },
        ],
      },
      {
        label: 'O impacto',
        blocks: [
          { type: 'paragraph', text: 'No primeiro funil comercial validado:' },
          { type: 'flow', items: ['16 pessoas abriram o WhatsApp pela campanha', '8 efetivamente iniciaram uma conversa', '8 eram novos leads', '4 foram considerados qualificados', '4 agendaram', '4 compareceram', '2 tratamentos foram fechados'] },
          { type: 'lead', text: 'O custo acumulado de mídia ficou em aproximadamente R$ 564 por tratamento fechado.' },
          { type: 'paragraph', text: 'Os tratamentos prioritários da clínica trabalham com faixas que podem partir de aproximadamente R$ 1,9 mil em implantes e chegar a R$ 55 mil em reabilitações estéticas mais complexas.' },
          { type: 'quote', text: 'Estamos adquirindo pacientes em um mercado de alto ticket com uma verba de mídia relativamente enxuta — e conseguindo conectar aquisição digital a fechamento real.' },
        ],
      },
      {
        label: 'Próximo gargalo',
        title: 'O valor não parou na aquisição.',
        blocks: [
          { type: 'paragraph', text: 'Ao medir o funil completo, encontramos o próximo gargalo. Metade dos cliques no WhatsApp ainda não virava conversa identificada. E parte dos leads abandonava a jornada depois de perguntar preço.' },
          { type: 'group', title: 'A pergunta deixou de ser', text: '“Como conseguimos mais cliques?”' },
          { type: 'group', title: 'E passou a ser', text: '“Como transformamos melhor a demanda que já conseguimos gerar?”' },
          { type: 'lead', text: 'Essa é a diferença entre gestão de tráfego e gestão de growth.' },
        ],
      },
      {
        label: 'O que prova',
        blocks: [
          { type: 'quote', text: 'A EG não otimiza uma conta para gerar números bonitos no Google Ads. Conectamos mídia, atendimento e resultado comercial para descobrir quanto custa efetivamente criar uma nova oportunidade — e onde está a próxima alavanca de crescimento.' },
        ],
      },
    ],
  },
  {
    id: 'kontes',
    name: 'Kontes Express',
    category: 'Growth Integrado · B2B & Varejo',
    headline: 'De campanhas isoladas a um ecossistema de aquisição.',
    metric: '2 sites + Google Ads + Meta Ads + Social + Google Local',
    evidence: 'Uma operação de growth atuando em múltiplos pontos da jornada.',
    highlights: ['2 propriedades digitais', 'Mídia Meta + Google', 'Aquisição + Conteúdo + Reputação'],
    sections: [
      {
        label: 'O desafio',
        title: 'Diferentes negócios disputando atenção dentro do mesmo ecossistema.',
        blocks: [
          { type: 'paragraph', text: 'A Kontes não possui apenas um produto. A operação reúne frentes com público, intenção, ticket e jornada diferentes.' },
          { type: 'group', title: 'Uniformes corporativos', text: 'Venda B2B em volume.' },
          { type: 'group', title: 'DTF Rápido', text: 'Serviço técnico para marcas, confecções e profissionais.' },
          { type: 'group', title: 'Kontes Store', text: 'Produtos e oportunidades para revenda.' },
          { type: 'lead', text: 'O desafio deixou de ser “gerenciar anúncios”. Precisávamos organizar como a empresa seria encontrada, percebida e convertida em diferentes canais.' },
        ],
      },
      {
        label: 'Google Ads',
        blocks: [
          { type: 'paragraph', text: 'Estruturamos e operamos campanhas para capturar demanda ativa em diferentes intenções.' },
          { type: 'metrics', items: ['52,9% do investimento estava concentrado em uma única palavra-chave ampla', 'Aproximadamente 93% do gasto estava concentrado nas cinco principais amplas', '110 cliques em Display sem conversão no recorte analisado'] },
          { type: 'lead', text: 'Não aumentamos orçamento. Primeiro recuperamos controle.' },
          { type: 'paragraph', text: 'Reestruturamos intenção, palavras, localização, sinais de conversão e qualificação.' },
          { type: 'group', title: 'O KPI deixou de ser', text: '“Conversão do Google”' },
          { type: 'flow', items: ['Lead qualificado', 'Orçamento', 'Venda', 'Receita'] },
        ],
      },
      {
        label: 'Meta Ads',
        blocks: [
          { type: 'paragraph', text: 'Na Meta, trabalhamos outra parte da jornada: geração de demanda, descoberta, criativos, ofertas e remarketing.' },
          { type: 'paragraph', text: 'Enquanto o Google captura quem já está procurando, o Meta permite colocar a Kontes diante de empresas e compradores antes da pesquisa acontecer.' },
          { type: 'lead', text: 'As duas plataformas passaram a cumprir papéis diferentes dentro da mesma estratégia.' },
        ],
      },
      {
        label: 'Dois sites',
        title: 'Dois sites. Duas jornadas.',
        blocks: [
          { type: 'group', title: 'kontes.com.br', text: 'A propriedade institucional e comercial da empresa. Estrutura para apresentar categorias, gerar confiança, receber tráfego, trabalhar SEO, direcionar contatos e apoiar campanhas.' },
          { type: 'group', title: 'dtfrapido.com.br', text: 'Uma experiência própria para o serviço de DTF. Mensagem mais técnica, público específico e jornada focada em quem já entende ou procura produção DTF.' },
          { type: 'lead', text: 'Em vez de obrigar ofertas diferentes a disputar a mesma página, criamos pontos de entrada compatíveis com a intenção de cada público.' },
        ],
      },
      {
        label: 'Presença local',
        title: 'Presença local e reputação.',
        blocks: [
          { type: 'paragraph', text: 'Otimizamos o Perfil da Empresa no Google para aumentar a qualidade da presença da unidade física nas buscas locais.' },
          { type: 'paragraph', text: 'Conectamos digital e loja física através de uma ação orgânica para estimular clientes reais a deixarem avaliações no Google.' },
          { type: 'lead', text: 'O objetivo: transformar experiência offline em prova social online. Uma avaliação obtida hoje continua ajudando a empresa a converter buscas locais amanhã.' },
        ],
      },
      {
        label: 'Social Media',
        blocks: [
          { type: 'paragraph', text: 'Estruturamos a lógica de conteúdo da operação, não como calendário de posts desconectado da venda, mas como uma frente para:' },
          { type: 'points', items: ['Atrair', 'Educar', 'Demonstrar produção', 'Construir autoridade', 'Nutrir', 'Alimentar remarketing'] },
          { type: 'lead', text: 'O conteúdo mostra visualmente aquilo que a mídia de pesquisa não consegue transmitir: capacidade produtiva, acabamento, velocidade, variedade e bastidores.' },
        ],
      },
      {
        label: 'Arquitetura',
        title: 'A arquitetura completa.',
        blocks: [
          { type: 'flow', items: ['Descoberta — Meta Ads + conteúdo', 'Intenção — Google Search', 'Conversão — Kontes.com.br + DTF Rápido', 'Prova — Conteúdo + Google + avaliações', 'Relacionamento — Social + remarketing', 'Negócio — Lead qualificado → orçamento → venda'] },
        ],
      },
      {
        label: 'O que prova',
        blocks: [
          { type: 'quote', text: 'Growth não é escolher entre Google, Meta, site ou conteúdo. É entender qual papel cada canal precisa desempenhar para que todos trabalhem sobre a mesma jornada.' },
          { type: 'lead', text: 'Na Kontes, a EG atua como parceira de crescimento do ecossistema, não como operadora de uma única plataforma.' },
        ],
      },
    ],
  },
  {
    id: 'univet',
    name: 'Univet',
    category: 'Growth + Produto + Tecnologia',
    headline: 'Do marketing ao software que sustenta a operação.',
    metric: '2 frentes. Um mesmo parceiro.',
    evidence: 'Growth para uma venda premium. Software para uma operação crítica.',
    highlights: ['Produtos de R$ 8–20 mil', 'Site + CRM + Growth', 'Plataforma web/mobile entregue'],
    sections: [
      {
        label: 'Dois problemas',
        title: 'Um cliente. Dois problemas completamente diferentes.',
        blocks: [
          { type: 'paragraph', text: 'A relação da EG com a Univet mostra talvez da forma mais clara aquilo que nos diferencia.' },
          { type: 'lead', text: 'Não entramos com uma ferramenta pré-definida. Entramos no problema. E isso nos levou a atuar em duas frentes diferentes da companhia.' },
        ],
      },
      {
        label: 'Univet Loupes',
        title: 'Estruturando a jornada digital de uma venda consultiva de alto valor.',
        blocks: [
          { type: 'paragraph', text: 'A Univet Loupes comercializa produtos premium para profissionais dos mercados Dental e Medical, com tickets na faixa de R$ 8 mil a R$ 20 mil.' },
          { type: 'paragraph', text: 'Não é uma compra por impulso. É uma venda consultiva, de baixo volume, ciclo mais longo e forte necessidade de confiança.' },
          { type: 'points', items: ['Instagram', 'Google', 'Site', 'Eventos', 'Indicações', 'Representantes'] },
          { type: 'lead', text: 'O desafio era fazer esses diferentes pontos começarem a compartilhar contexto.' },
        ],
      },
      {
        label: 'Site + CRM',
        title: 'Infraestrutura para a venda consultiva.',
        blocks: [
          { type: 'paragraph', text: 'Desenvolvemos uma nova experiência digital para a Univet Loupes. Não apenas uma vitrine: o site foi estruturado para funcionar como infraestrutura da venda consultiva.' },
          { type: 'points', items: ['Dental + Medical', 'Catálogo de produtos', 'Magnificações', 'Acessórios', 'Páginas de produto', 'Blog técnico', 'Formulários', 'Tracking', 'SEO técnico', 'Dados estruturados', 'Arquitetura preparada para GEO'] },
          { type: 'paragraph', text: 'Também estruturamos a arquitetura comercial no Kommo CRM. O lead deixa de ser apenas “alguém que chamou no WhatsApp”.' },
          { type: 'points', items: ['Origem', 'Produto', 'Tipo de interesse', 'Cidade / estado', 'Representante', 'Etapa da negociação', 'Próximo passo', 'Tarefas', 'Follow-ups', 'Motivo de perda'] },
          { type: 'paragraph', text: 'Além disso, desenhamos o roteamento por região para conectar cada oportunidade ao representante responsável.' },
          { type: 'flow', items: ['Aquisição', 'Experiência', 'CRM', 'Representante', 'Negociação', 'Dados'] },
        ],
      },
      {
        label: 'Univet Safety',
        title: 'De planilhas, e-mails e WhatsApp para uma plataforma própria.',
        blocks: [
          { type: 'paragraph', text: 'Em outra frente da Univet, o problema não era growth. Era operação.' },
          { type: 'paragraph', text: 'Pedidos de EPI estavam distribuídos entre planilhas, e-mails, WhatsApp e processos manuais.' },
          { type: 'lead', text: 'A EG participou do desenho e desenvolvimento de uma plataforma própria para centralizar essa operação.' },
        ],
      },
      {
        label: 'A plataforma',
        title: 'Uma solução multiplataforma.',
        blocks: [
          { type: 'paragraph', text: 'Entregamos uma solução Web e Mobile, com arquitetura preparada para diferentes ambientes de uso.' },
          { type: 'points', items: ['Cadastro de clientes e unidades', 'Usuários e permissões', 'Catálogo', 'Criação de pedidos', 'Status', 'Histórico', 'Aprovações', 'Documentos', 'Anexos', 'Notificações', 'Dashboards', 'Uso mobile offline', 'Sincronização entre dispositivos'] },
        ],
      },
      {
        label: 'Impacto',
        title: 'Impacto operacional.',
        blocks: [
          { type: 'paragraph', text: 'A solução substituiu um fluxo fragmentado por uma operação centralizada.' },
          { type: 'points', items: ['Menos informação espalhada', 'Padronização do processo de pedidos', 'Visibilidade em tempo real de status e pendências', 'Redução de retrabalho', 'Redução de erros operacionais', 'Uma base tecnológica própria para continuar evoluindo a operação'] },
        ],
      },
      {
        label: 'O que prova',
        title: 'Por que este case é importante para entender a EG.',
        blocks: [
          { type: 'group', title: 'Crescimento', items: ['Site', 'SEO/GEO', 'CRM', 'Aquisição', 'Dados', 'Jornada comercial'] },
          { type: 'group', title: 'Tecnologia', items: ['Produto', 'UX', 'Engenharia', 'Backend', 'Mobile', 'Integrações', 'Infraestrutura operacional'] },
          { type: 'quote', text: 'Não somos uma agência tentando vender tecnologia. Nem uma software house tentando entender marketing. Somos um parceiro capaz de entender o problema de negócio e mobilizar estratégia, growth e tecnologia na profundidade necessária para resolvê-lo.' },
        ],
      },
    ],
  },
]

export const caseSummary = {
  title: 'O que nossos cases têm em comum?',
  items: [
    ['Sara', 'Transformamos mídia em pacientes e aprendizado comercial.'],
    ['Kontes', 'Construímos e operamos um ecossistema de aquisição em múltiplos canais.'],
    ['Univet', 'Conectamos crescimento, jornada comercial e tecnologia sob medida.'],
  ],
  closing: ['Diferentes problemas.', 'Diferentes soluções.', 'O mesmo método para encontrar o que realmente move o negócio.'],
}

export const manifesto = [
  ['Clareza', 'antes de execução.'],
  ['Escopo', 'antes de entusiasmo.'],
  ['Método', 'antes de improviso.'],
  ['Cadência', 'antes de feeling.'],
  ['Documentação', 'antes de opinião.'],
  ['Evidência', 'antes de escala.'],
]
