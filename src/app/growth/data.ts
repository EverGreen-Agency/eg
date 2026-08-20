export type MethodKey = 'diagnostico' | 'arquitetura' | 'implementacao' | 'operacao' | 'evolucao'

export type Language = 'pt' | 'en'

export const sectionsPt = [
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

export const sectionsEn = [
  { id: 'inicio', label: 'Home' },
  { id: 'gargalo', label: 'The Bottleneck' },
  { id: 'sistema', label: 'Our Thinking' },
  { id: 'metodo', label: 'EG Method' },
  { id: 'tempo', label: 'Over Time' },
  { id: 'capacidades', label: 'Capabilities' },
  { id: 'equipe', label: 'Team' },
  { id: 'evidencias', label: 'Evidence' },
  { id: 'padrao', label: 'Our Standard' },
  { id: 'contato', label: 'Contact' },
]

export const problemsPt = [
  { request: '“Quero Google Ads.”', symptom: 'Leads entram, mas o atendimento demora.', cause: 'Jornada e processo.' },
  { request: '“Quero CRM.”', symptom: 'Não existe cadência nem critério comercial.', cause: 'Operação comercial.' },
  { request: '“Quero automação.”', symptom: 'O fluxo já nasce confuso.', cause: 'Arquitetura do processo.' },
]

export const problemsEn = [
  { request: '“I need Google Ads.”', symptom: 'Leads come in, but sales response is delayed.', cause: 'Journey and process.' },
  { request: '“I need a CRM.”', symptom: 'No sales cadence or qualification criteria.', cause: 'Sales operation.' },
  { request: '“I need automation.”', symptom: 'The workflow is flawed from inception.', cause: 'Process architecture.' },
]

export const systemLeversPt = [
  { name: 'Oferta', note: 'Clareza de valor e aderência ao mercado.' },
  { name: 'Aquisição', note: 'Demanda mensurável, não volume vazio.' },
  { name: 'Experiência', note: 'Uma jornada sem atritos desnecessários.' },
  { name: 'Dados', note: 'Evidência para decidir o próximo movimento.' },
  { name: 'Tecnologia', note: 'Infraestrutura que sustenta o processo.' },
  { name: 'Pessoas', note: 'Papéis, contexto e responsabilidade claros.' },
  { name: 'Processo', note: 'Cadência que transforma intenção em receita.' },
]

export const systemLeversEn = [
  { name: 'Offer', note: 'Value clarity and market fit.' },
  { name: 'Acquisition', note: 'Measurable demand, not empty volume.' },
  { name: 'Experience', note: 'A journey without unnecessary friction.' },
  { name: 'Data', note: 'Evidence to decide the next move.' },
  { name: 'Technology', note: 'Infrastructure sustaining the process.' },
  { name: 'People', note: 'Clear roles, context, and ownership.' },
  { name: 'Process', note: 'Cadence turning intent into revenue.' },
]

export type MethodModule = {
  number: string
  title: string
  short: string
  headline: string
  groups: { title: string; items: string[] }[]
}

export const methodModulesPt: Record<MethodKey, MethodModule> = {
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

export const methodModulesEn: Record<MethodKey, MethodModule> = {
  diagnostico: {
    number: '01', title: 'Diagnostic', short: 'Locating where revenue leaks.',
    headline: 'Before deciding what to build, we uncover where revenue is leaking.',
    groups: [
      { title: 'What we analyze', items: ['Offer', 'Acquisition', 'Customer Journey', 'Sales Response', 'Sales Process', 'Data'] },
      { title: 'What we look for', items: ['Bottlenecks', 'Leaks', 'Friction', 'Lack of cadence', 'Inconsistent data'] },
      { title: 'Outputs', items: ['Baseline', 'Bottleneck Map', 'Initial Score', 'Priority Hypotheses', 'Action Plan'] },
    ],
  },
  arquitetura: {
    number: '02', title: 'Architecture', short: 'Designing the blueprint system.',
    headline: 'We connect journey, process, data, and tech before accelerating.',
    groups: [
      { title: 'System', items: ['Lead source', 'Landing page', 'CRM', 'Pipeline', 'Sales Response', 'Follow-up'] },
      { title: 'Decisions', items: ['Roles', 'SLA', 'Criteria', 'Cadence', 'Tracking'] },
      { title: 'Outputs', items: ['Funnel Map', 'Sales Process', 'Data Architecture', 'Priorities'] },
    ],
  },
  implementacao: {
    number: '03', title: 'Implementation', short: 'Activating priority levers.',
    headline: 'Great implementation is also choosing what NOT to do now.',
    groups: [
      { title: 'Priority 01', items: ['Tracking', 'High impact', 'Low complexity'] },
      { title: 'Priority 02', items: ['Sales Pipeline', 'High impact', 'Medium complexity'] },
      { title: 'Priority 03', items: ['Campaigns', 'Medium impact', 'Medium complexity'] },
    ],
  },
  operacao: {
    number: '04', title: 'Operation', short: 'Measure, learn, and decide.',
    headline: 'Metrics only deliver value when driving concrete decisions.',
    groups: [
      { title: 'Scorecard', items: ['Leads', 'Qualification', 'Pipeline', 'Conversion', 'CAC', 'Revenue'] },
      { title: 'Rhythm', items: ['Routines', 'Tests', 'Hypotheses', 'Next Actions'] },
      { title: 'Learning', items: ['Trend', 'Context', 'Decision', 'Owner'] },
    ],
  },
  evolucao: {
    number: '05', title: 'Evolution', short: 'Turning learning into scale.',
    headline: 'The system never ends: it gains new capabilities.',
    groups: [
      { title: 'Now', items: ['Remove bottlenecks', 'Build baseline'] },
      { title: '90 Days', items: ['Validate hypotheses', 'Consolidate cadence'] },
      { title: 'Horizon', items: ['Automation', 'New modules', 'Sustainable scale'] },
    ],
  },
}

export const capabilitiesPt = [
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

export const capabilitiesEn = [
  { name: 'CRM', use: 'Pipeline, cadence, and next step.', yes: 'When commercial visibility and process are missing.', no: 'When expecting software to fix an unowned operation.' },
  { name: 'Media', use: 'Measurable and qualified demand.', yes: 'With validated offer and sales capacity.', no: 'When more demand would amplify an existing bottleneck.' },
  { name: 'CRO', use: 'Reduce friction in critical user journeys.', yes: 'When there is traffic and a measurable hypothesis.', no: 'When the main issue lies post-conversion.' },
  { name: 'Web', use: 'Decision-oriented digital experiences.', yes: 'When UI must clarify, prove, or convert.', no: 'When a new page merely masks a confusing offer.' },
  { name: 'Data', use: 'Transform signals into decisions.', yes: 'When recurring decisions lack reliable evidence.', no: 'When measuring everything replaces key actionable KPIs.' },
  { name: 'Automation', use: 'Reduce friction and manual labor.', yes: 'When the process is already clear and repeatable.', no: 'When automating a workflow that is still fundamentally flawed.' },
  { name: 'AI', use: 'Scale capacity with context and control.', yes: 'When task, data, and quality criteria are well-defined.', no: 'When AI is treated as a standalone strategy.' },
  { name: 'RevOps', use: 'Align marketing, sales, and revenue.', yes: 'When departments optimize disconnected metrics.', no: 'When executive commitment to process is absent.' },
  { name: 'Product', use: 'Build bespoke digital infrastructure.', yes: 'When software creates genuine operational advantage.', no: 'When off-the-shelf software solves it better and faster.' },
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

export const casesPt: CaseStudy[] = [
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

export const casesEn: CaseStudy[] = [
  {
    id: 'sara',
    name: 'Dr. Sara Michelon',
    category: 'Performance & Growth · Healthcare',
    headline: 'From a stalled ad account to steady high-ticket patient acquisition.',
    metric: '16 → 8 → 4 → 2',
    evidence: 'WhatsApp clicks → conversations → qualified patients → closed treatments',
    highlights: ['~R$ 350/week media budget', 'R$ 564 media cost per closed patient', 'Target tickets from R$ 1.9k to R$ 55k'],
    sections: [
      {
        label: 'The Challenge',
        title: 'Performance in one of the most competitive healthcare markets.',
        blocks: [
          { type: 'paragraph', text: 'Dr. Sara operates in aesthetic dentistry, implants, and facial procedures — high-value services with sensitive decisions and heavy local competition in Florianópolis.' },
          { type: 'paragraph', text: 'Beyond media costs, healthcare advertising faces strict platform policy restrictions.' },
          { type: 'paragraph', text: 'When we stepped in, the ad account suffered from delivery issues, policy flags, unreliable tracking, and zero post-click visibility.' },
          { type: 'lead', text: 'The goal was not just to launch ads, but to turn Google Ads into a measurable revenue channel.' },
        ],
      },
      {
        label: 'What EG Did',
        blocks: [
          { type: 'paragraph', text: 'First, we rebuilt the foundations:' },
          { type: 'points', items: ['Fixed policy and messaging issues', 'Overhauled website experience and copy', 'Implemented clean WhatsApp tracking', 'New search campaign architecture', 'Exact search intent targeting', 'Negative keyword management', 'Separated Dental vs Aesthetics streams', 'Weekly joint operational review'] },
          { type: 'paragraph', text: 'We looked far beyond Google Ads metrics, building full-funnel tracking:' },
          { type: 'flow', items: ['Click', 'Conversation', 'Lead', 'Qualification', 'Booking', 'Attendance', 'Close'] },
          { type: 'lead', text: 'Because at EG: a Google conversion is not revenue.' },
        ],
      },
      {
        label: 'The Impact',
        blocks: [
          { type: 'paragraph', text: 'In the first validated commercial funnel:' },
          { type: 'flow', items: ['16 people clicked to WhatsApp', '8 initiated conversation', '8 were new leads', '4 were qualified', '4 booked appointments', '4 attended', '2 closed treatments'] },
          { type: 'lead', text: 'Blended media acquisition cost per closed treatment stood at ~R$ 564.' },
          { type: 'quote', text: 'Acquiring high-ticket patients with a lean ad spend by connecting digital acquisition to real revenue.' },
        ],
      },
      {
        label: 'Next Bottleneck',
        title: 'Value creation does not end at acquisition.',
        blocks: [
          { type: 'paragraph', text: 'Full funnel measurement revealed the next bottleneck: half of WhatsApp clicks had drop-offs before initiating conversation. Identifying this shifted focus.' },
          { type: 'group', title: 'The question moved from', text: '“How do we get more clicks?”' },
          { type: 'group', title: 'To', text: '“How do we better convert the demand we generate?”' },
          { type: 'lead', text: 'That is the difference between media buying and growth management.' },
        ],
      },
      {
        label: 'What It Proves',
        blocks: [
          { type: 'quote', text: 'EG does not optimize ad accounts for vanity metrics. We align media, sales response, and revenue to uncover true acquisition costs and unlock growth.' },
        ],
      },
    ],
  },
  {
    id: 'kontes',
    name: 'Kontes Express',
    category: 'Integrated Growth · B2B & Retail',
    headline: 'From fragmented campaigns to an acquisition ecosystem.',
    metric: '2 sites + Google Ads + Meta Ads + Social + Local',
    evidence: 'A multi-touchpoint growth operation.',
    highlights: ['2 digital properties', 'Meta + Google Media', 'Acquisition + Content + Reputation'],
    sections: [
      {
        label: 'The Challenge',
        title: 'Multiple business lines competing within the same brand.',
        blocks: [
          { type: 'paragraph', text: 'Kontes operates diverse units with distinct audiences, order values, and buyer journeys.' },
          { type: 'group', title: 'Corporate Uniforms', text: 'High-volume B2B sales.' },
          { type: 'group', title: 'DTF Express', text: 'Technical printing services for apparel brands.' },
          { type: 'group', title: 'Kontes Store', text: 'Resale products and opportunities.' },
          { type: 'lead', text: 'The challenge shifted from managing ads to architecting how the company is found, perceived, and converted across all channels.' },
        ],
      },
      {
        label: 'Google Ads',
        blocks: [
          { type: 'paragraph', text: 'Restructured search campaigns to capture high-intent active demand.' },
          { type: 'metrics', items: ['52.9% of budget was wasted on a single broad keyword', '93% of spend concentrated in 5 broad terms', '110 non-converting display clicks eliminated'] },
          { type: 'lead', text: 'We did not raise budget. First, we regained control.' },
        ],
      },
      {
        label: 'Meta Ads & Web',
        blocks: [
          { type: 'paragraph', text: 'Meta ads drive demand creation and discovery, while Google captures active searches. Two dedicated web properties deliver tailored landing experiences.' },
        ],
      },
      {
        label: 'What It Proves',
        blocks: [
          { type: 'quote', text: 'Growth is not choosing between Google, Meta, or Content. It is orchestrating each channel to power the exact same buyer journey.' },
        ],
      },
    ],
  },
  {
    id: 'univet',
    name: 'Univet',
    category: 'Growth + Product + Engineering',
    headline: 'From growth marketing to mission-critical custom software.',
    metric: '2 Operations. 1 Partner.',
    evidence: 'Growth for consultative sales. Software for enterprise logistics.',
    highlights: ['R$ 8k–20k products', 'Site + CRM + Growth', 'Web & Mobile app delivered'],
    sections: [
      {
        label: 'Two Problems',
        title: 'One client. Two completely different challenges.',
        blocks: [
          { type: 'paragraph', text: 'Our engagement with Univet demonstrates the depth of EG.' },
          { type: 'lead', text: 'We do not sell pre-packaged tools; we enter the business problem and build strategy, growth, and custom software to solve it.' },
        ],
      },
    ],
  },
]

export const caseSummaryPt = {
  title: 'O que nossos cases têm em comum?',
  items: [
    ['Sara', 'Transformamos mídia em pacientes e aprendizado comercial.'],
    ['Kontes', 'Construímos e operamos um ecossistema de aquisição em múltiplos canais.'],
    ['Univet', 'Conectamos crescimento, jornada comercial e tecnologia sob medida.'],
  ],
  closing: ['Diferentes problemas.', 'Diferentes soluções.', 'O mesmo método para encontrar o que realmente move o negócio.'],
}

export const caseSummaryEn = {
  title: 'What do our case studies share in common?',
  items: [
    ['Sara', 'Transformed ad spend into qualified patients and commercial clarity.'],
    ['Kontes', 'Architected and operated an integrated multi-channel acquisition engine.'],
    ['Univet', 'Connected growth, consultative buyer journeys, and custom software.'],
  ],
  closing: ['Different problems.', 'Different solutions.', 'The exact same methodology to unlock business revenue.'],
}

export const manifestoPt = [
  ['Clareza', 'antes de execução.'],
  ['Escopo', 'antes de entusiasmo.'],
  ['Método', 'antes de improviso.'],
  ['Cadência', 'antes de feeling.'],
  ['Documentação', 'antes de opinião.'],
  ['Evidência', 'antes de escala.'],
]

export const manifestoEn = [
  ['Clarity', 'before execution.'],
  ['Scope', 'before hype.'],
  ['Method', 'before guesswork.'],
  ['Cadence', 'before gut feeling.'],
  ['Documentation', 'before opinion.'],
  ['Evidence', 'before scale.'],
]

export const uiStrings = {
  pt: {
    brandAlt: 'EverGreen — Crescimento previsível, escalável e tecnológico',
    navMapTitle: 'Mapa da experiência',
    heroEyebrow: 'MÉTODO & EVIDÊNCIAS DE CRESCIMENTO',
    heroTitle: 'A força por trás de crescimentos previsíveis, escaláveis e tecnológicos.',
    heroSubtitle: 'Não vendemos horas, ferramentas nem relatórios bonitos. Construímos a infraestrutura de dados, processo e aquisição que transforma operações B2B.',
    ctaPrimary: 'Agendar diagnóstico estratégico',
    ctaSecondary: 'Entender o método',
    bottleneckEyebrow: 'O SINTOMA VS A CAUSA',
    bottleneckTitle: 'Toda empresa tentando crescer esbarra no mesmo problema:',
    bottleneckSubtitle: 'Achar que o problema é mídia quando na verdade é processo, mensagem ou jornada.',
    reqLabel: 'PEDIDO COMUM',
    sympLabel: 'SINTOMA REAL',
    causeLabel: 'CAUSA RAIZ',
    systemEyebrow: 'SISTEMA DE CRESCIMENTO',
    systemTitle: 'Crescimento não é sorte. É um sistema de 7 alavancas interligadas.',
    systemInstruction: 'Clique ou passe o cursor sobre as alavancas para ver como elas se conectam.',
    methodEyebrow: 'EXAGERO DE EXECUÇÃO',
    methodTitle: 'Como a EverGreen atua na sua operação',
    methodInstruction: 'Clique para explorar o módulo em detalhes',
    timeEyebrow: 'EVOLUÇÃO CONTÍNUA',
    timeTitle: 'O tempo a favor do seu crescimento',
    capEyebrow: 'CAPACIDADES TÉCNICAS',
    capTitle: 'Nossas competências a serviço do seu sistema',
    teamEyebrow: 'QUEM EXECUTA',
    teamTitle: 'Liderança técnica e estratégica em cada projeto',
    evidEyebrow: 'RESULTADOS REAIS',
    evidTitle: 'Casos de estudo e evidências de impacto',
    patternEyebrow: 'CULTURA & PRINCÍPIOS',
    patternTitle: 'Nosso padrão de atuação',
    contactEyebrow: 'PRÓXIMO PASSO',
    contactTitle: 'Pronto para transformar sua operação comercial?',
    contactSubtitle: 'Agende um diagnóstico com nossos especialistas.',
    exploreMap: 'Explorar',
    openCase: 'Ver estudo completo',
    officialPartner: 'PARCERIA OFICIAL',
    googleCert: 'CERTIFICAÇÃO GOOGLE',
  },
  en: {
    brandAlt: 'EverGreen — Predictable, scalable, and tech-driven growth',
    navMapTitle: 'Experience map',
    heroEyebrow: 'GROWTH METHOD & EVIDENCE',
    heroTitle: 'The force behind predictable, scalable, and tech-driven growth.',
    heroSubtitle: 'We do not sell hours, tools, or vanity reports. We build the data, process, and acquisition infrastructure that transforms B2B operations.',
    ctaPrimary: 'Schedule strategic diagnostic',
    ctaSecondary: 'Understand our method',
    bottleneckEyebrow: 'SYMPTOM VS ROOT CAUSE',
    bottleneckTitle: 'Every growing business hits the exact same roadblock:',
    bottleneckSubtitle: 'Believing the problem is ad spend when it is actually process, messaging, or journey.',
    reqLabel: 'COMMON REQUEST',
    sympLabel: 'REAL SYMPTOM',
    causeLabel: 'ROOT CAUSE',
    systemEyebrow: 'GROWTH SYSTEM',
    systemTitle: 'Growth is not luck. It is a system of 7 interconnected levers.',
    systemInstruction: 'Click or hover over levers to explore how they connect.',
    methodEyebrow: 'EXECUTION RIGOR',
    methodTitle: 'How EverGreen operates in your company',
    methodInstruction: 'Click to explore module in detail',
    timeEyebrow: 'CONTINUOUS EVOLUTION',
    timeTitle: 'Time working for your compounding growth',
    capEyebrow: 'TECHNICAL CAPABILITIES',
    capTitle: 'Our capabilities powering your growth engine',
    teamEyebrow: 'WHO EXECUTES',
    teamTitle: 'Technical and strategic leadership in every project',
    evidEyebrow: 'REAL RESULTS',
    evidTitle: 'Case studies and proven evidence of impact',
    patternEyebrow: 'CULTURE & PRINCIPLES',
    patternTitle: 'Our operating standard',
    contactEyebrow: 'NEXT STEP',
    contactTitle: 'Ready to transform your commercial operation?',
    contactSubtitle: 'Schedule a diagnostic session with our specialists.',
    exploreMap: 'Explore',
    openCase: 'View full case study',
    officialPartner: 'OFFICIAL PARTNER',
    googleCert: 'GOOGLE CERTIFICATION',
  },
}

export function getGrowthData(lang: Language = 'pt') {
  const isEn = lang === 'en'
  return {
    sections: isEn ? sectionsEn : sectionsPt,
    problems: isEn ? problemsEn : problemsPt,
    systemLevers: isEn ? systemLeversEn : systemLeversPt,
    methodModules: isEn ? methodModulesEn : methodModulesPt,
    capabilities: isEn ? capabilitiesEn : capabilitiesPt,
    cases: isEn ? casesEn : casesPt,
    caseSummary: isEn ? caseSummaryEn : caseSummaryPt,
    manifesto: isEn ? manifestoEn : manifestoPt,
    t: isEn ? uiStrings.en : uiStrings.pt,
  }
}

// Backward compatibility exports
export const sections = sectionsPt
export const problems = problemsPt
export const systemLevers = systemLeversPt
export const methodModules = methodModulesPt
export const capabilities = capabilitiesPt
export const cases = casesPt
export const caseSummary = caseSummaryPt
export const manifesto = manifestoPt
