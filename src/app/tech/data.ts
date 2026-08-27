import type { CaseStudy, Language, RaizPhase } from '@/components/deck/types'

export type { CaseStudy, Language } from '@/components/deck/types'

export type TechModuleKey = 'diagnostico' | 'arquitetura' | 'implementacao' | 'operacao' | 'evolucao'

export const sectionsPt = [
  { id: 'inicio', label: 'Início' },
  { id: 'gargalo', label: 'O gargalo' },
  { id: 'maturidade', label: 'As 7 dimensões' },
  { id: 'metodo', label: 'Método EG' },
  { id: 'escada', label: 'Como entra' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'evidencias', label: 'Evidências' },
  { id: 'padrao', label: 'Nosso padrão' },
  { id: 'contato', label: 'Contato' },
]

export const sectionsEn = [
  { id: 'inicio', label: 'Home' },
  { id: 'gargalo', label: 'The Bottleneck' },
  { id: 'maturidade', label: 'The 7 Dimensions' },
  { id: 'metodo', label: 'EG Method' },
  { id: 'escada', label: 'How We Enter' },
  { id: 'capacidades', label: 'Capabilities' },
  { id: 'equipe', label: 'Team' },
  { id: 'evidencias', label: 'Evidence' },
  { id: 'padrao', label: 'Our Standard' },
  { id: 'contato', label: 'Contact' },
]

/**
 * O gargalo tecnologico espelha o comercial: o cliente pede a ferramenta, o
 * sintoma esta em outro lugar, e a causa e sempre a montante da ferramenta.
 */
export const problemsPt = [
  { request: '“Quero automatizar isso.”', symptom: 'O fluxo automatizado erra igual, só mais rápido.', cause: 'Desenho do processo.' },
  { request: '“Quero um dashboard.”', symptom: 'Cada fonte devolve um número diferente.', cause: 'Arquitetura de dados.' },
  { request: '“Quero usar IA.”', symptom: 'A saída é plausível e ninguém consegue conferir.', cause: 'Contexto e critério de qualidade.' },
]

export const problemsEn = [
  { request: '“I want to automate this.”', symptom: 'The automated flow makes the same mistakes, only faster.', cause: 'Process design.' },
  { request: '“I want a dashboard.”', symptom: 'Every source returns a different number.', cause: 'Data architecture.' },
  { request: '“I want to use AI.”', symptom: 'The output looks plausible and nobody can verify it.', cause: 'Context and quality criteria.' },
]

/**
 * As 7 dimensoes do Raio-X Tecnologico (Documento-Mestre §10.1: "score de
 * maturidade AI-First em 7 dimensoes"). O documento nomeia o entregavel mas nao
 * enumera as dimensoes; estas sao as sete de "Diferencial tecnologico da EG",
 * no mesmo documento. Confirmar com o Eduardo — ver DECISOES-ABERTAS.md.
 */
export type TechDimension = { name: string; note: string; asks: string }

export const dimensionsPt: TechDimension[] = [
  { name: 'Diagnóstico', note: 'A empresa consegue enxergar onde perde eficiência?', asks: 'Existe leitura da operação ou só percepção de quem está dentro dela?' },
  { name: 'Execução', note: 'Quanto tempo separa a decisão da entrega.', asks: 'O que hoje demora semanas por depender de uma pessoa específica?' },
  { name: 'Documentação', note: 'Processo escrito é processo que a IA consegue executar.', asks: 'O que só existe na cabeça de alguém?' },
  { name: 'Dados', note: 'Informação num lugar só, com um número só.', asks: 'Quantas planilhas respondem à mesma pergunta com respostas diferentes?' },
  { name: 'Automação', note: 'Rotina repetível não deveria consumir gente.', asks: 'Qual trabalho manual se repete toda semana sem variação?' },
  { name: 'Qualidade', note: 'Padrão que não depende de quem executou.', asks: 'O resultado muda conforme quem faz?' },
  { name: 'Margem', note: 'Crescer sem que o custo cresça junto.', asks: 'Atender o dobro exigiria o dobro de time?' },
]

export const dimensionsEn: TechDimension[] = [
  { name: 'Diagnosis', note: 'Can the company see where it loses efficiency?', asks: 'Is there a real reading of the operation, or only the perception of those inside it?' },
  { name: 'Execution', note: 'How much time sits between a decision and delivery.', asks: 'What takes weeks today because it depends on one specific person?' },
  { name: 'Documentation', note: 'A written process is a process AI can run.', asks: 'What exists only in someone’s head?' },
  { name: 'Data', note: 'Information in one place, with one number.', asks: 'How many spreadsheets answer the same question differently?' },
  { name: 'Automation', note: 'A repeatable routine should not consume people.', asks: 'Which manual work repeats every week without variation?' },
  { name: 'Quality', note: 'A standard that does not depend on who executed it.', asks: 'Does the result change depending on who does it?' },
  { name: 'Margin', note: 'Growing without cost growing alongside.', asks: 'Would serving twice as many clients require twice the team?' },
]

export type TechModule = {
  number: string
  phase: RaizPhase
  action: string
  title: string
  short: string
  headline: string
  groups: { title: string; items: string[] }[]
}

export const modulesPt: Record<TechModuleKey, TechModule> = {
  diagnostico: {
    number: '01', phase: 'Raiz', action: 'Diagnosticar', title: 'Raio-X Tecnológico',
    short: 'Medir a prontidão AI-First da operação.',
    headline: 'Antes de construir qualquer coisa, medimos onde a operação perde eficiência.',
    groups: [
      { title: 'O que auditamos', items: ['Stack atual', 'Integrações', 'Fluxo de dados', 'Rotinas manuais', 'Documentação', 'Permissões'] },
      { title: 'O que procuramos', items: ['Retrabalho', 'Dado divergente', 'Dependência de pessoa', 'Planilha crítica', 'Processo não escrito'] },
      { title: 'O que sai', items: ['Score nas 7 dimensões', 'Inventário da stack', 'Gargalos priorizados', 'Roadmap de implementação'] },
    ],
  },
  arquitetura: {
    number: '02', phase: 'Tronco', action: 'Priorizar', title: 'Arquitetura',
    short: 'Decidir o que construir e, principalmente, o que não construir.',
    headline: 'A decisão mais cara de software é construir o que já existe pronto.',
    groups: [
      { title: 'Decisões', items: ['Construir ou contratar', 'Fonte da verdade', 'Integrações', 'Permissões', 'Reversibilidade'] },
      { title: 'Desenho', items: ['Modelo de dados', 'Fluxo de trabalho', 'Estados', 'Quem aprova o quê'] },
      { title: 'O que sai', items: ['Arquitetura escrita', 'Escopo fechado', 'Riscos nomeados', 'Estimativa por fatia'] },
    ],
  },
  implementacao: {
    number: '03', phase: 'Ramos', action: 'Estruturar', title: 'Sprint de Estruturação',
    short: 'Construir a fatia que já entrega valor sozinha.',
    headline: 'Entregamos em corte vertical: uma fatia fina que funciona ponta a ponta.',
    groups: [
      { title: 'Como entregamos', items: ['Corte vertical', 'Sprint de 6 a 8 semanas', 'Escopo fechado', 'Ambiente de homologação'] },
      { title: 'O que vai junto', items: ['Integrações', 'Migração de dado', 'Treinamento do time', 'Documentação de uso'] },
      { title: 'Garantia', items: ['Não implantou no cronograma?', 'O acompanhamento estende', 'Sem honorário adicional'] },
    ],
  },
  operacao: {
    number: '04', phase: 'Copa', action: 'Evoluir', title: 'Operação',
    short: 'Manter de pé, medir e decidir.',
    headline: 'Software entregue e não operado vira dívida, não ativo.',
    groups: [
      { title: 'Sustentação', items: ['SLA de disponibilidade', 'Monitoramento', 'Correções', 'Backup e recuperação'] },
      { title: 'Ritmo', items: ['Revisão trimestral', 'Fila priorizada', 'Próximas fatias'] },
      { title: 'Evidência', items: ['Uso real', 'Tempo economizado', 'Erro operacional evitado'] },
    ],
  },
  evolucao: {
    number: '05', phase: 'Copa', action: 'Evoluir', title: 'Evolução',
    short: 'Ganhar capacidade nova sem refazer a base. A Copa não termina.',
    headline: 'A base boa é a que aceita o módulo que ninguém tinha previsto.',
    groups: [
      { title: 'Agora', items: ['Remover o gargalo medido', 'Fechar a base'] },
      { title: '90 dias', items: ['Segunda fatia', 'Automação do que virou repetitivo'] },
      { title: 'Horizonte', items: ['Novos módulos', 'IA sobre dado próprio', 'Escala com margem'] },
    ],
  },
}

export const modulesEn: Record<TechModuleKey, TechModule> = {
  diagnostico: {
    number: '01', phase: 'Raiz', action: 'Diagnose', title: 'Technology X-Ray',
    short: 'Measuring the operation’s AI-First readiness.',
    headline: 'Before building anything, we measure where the operation loses efficiency.',
    groups: [
      { title: 'What we audit', items: ['Current stack', 'Integrations', 'Data flow', 'Manual routines', 'Documentation', 'Permissions'] },
      { title: 'What we look for', items: ['Rework', 'Diverging data', 'Person dependency', 'Critical spreadsheet', 'Unwritten process'] },
      { title: 'Outputs', items: ['Score across the 7 dimensions', 'Stack inventory', 'Prioritised bottlenecks', 'Implementation roadmap'] },
    ],
  },
  arquitetura: {
    number: '02', phase: 'Tronco', action: 'Prioritise', title: 'Architecture',
    short: 'Deciding what to build and, above all, what not to build.',
    headline: 'The most expensive software decision is building what already exists.',
    groups: [
      { title: 'Decisions', items: ['Build or buy', 'Source of truth', 'Integrations', 'Permissions', 'Reversibility'] },
      { title: 'Design', items: ['Data model', 'Workflow', 'States', 'Who approves what'] },
      { title: 'Outputs', items: ['Written architecture', 'Closed scope', 'Named risks', 'Estimate per slice'] },
    ],
  },
  implementacao: {
    number: '03', phase: 'Ramos', action: 'Structure', title: 'Structuring Sprint',
    short: 'Building the slice that already delivers value on its own.',
    headline: 'We ship vertical slices: a thin cut that works end to end.',
    groups: [
      { title: 'How we deliver', items: ['Vertical slice', '6 to 8 week sprint', 'Closed scope', 'Staging environment'] },
      { title: 'What comes with it', items: ['Integrations', 'Data migration', 'Team training', 'Usage documentation'] },
      { title: 'Guarantee', items: ['Not deployed on schedule?', 'Support is extended', 'No additional fee'] },
    ],
  },
  operacao: {
    number: '04', phase: 'Copa', action: 'Evolve', title: 'Operation',
    short: 'Keeping it standing, measured and decided upon.',
    headline: 'Software delivered and not operated becomes debt, not an asset.',
    groups: [
      { title: 'Support', items: ['Availability SLA', 'Monitoring', 'Fixes', 'Backup and recovery'] },
      { title: 'Rhythm', items: ['Quarterly review', 'Prioritised queue', 'Next slices'] },
      { title: 'Evidence', items: ['Real usage', 'Time saved', 'Operational error avoided'] },
    ],
  },
  evolucao: {
    number: '05', phase: 'Copa', action: 'Evolve', title: 'Evolution',
    short: 'Gaining new capability without rebuilding the base. The Canopy never ends.',
    headline: 'A good base is one that accepts the module nobody had planned for.',
    groups: [
      { title: 'Now', items: ['Remove the measured bottleneck', 'Close the base'] },
      { title: '90 days', items: ['Second slice', 'Automate what became repetitive'] },
      { title: 'Horizon', items: ['New modules', 'AI over your own data', 'Scale with margin'] },
    ],
  },
}

/** Escada de Oferta de Tecnologia — Documento-Mestre §10.1. Tech 4 nao vai publico. */
export const ladderPt = [
  { tag: 'Tech 01 — Você faz', title: 'Raio-X Tecnológico', lead: 'Auditoria de prontidão AI-First. Score nas 7 dimensões, gargalos priorizados e roadmap.', garantia: 'Se você não sair com clareza prática sobre gargalos e prioridades, revisamos o diagnóstico sem custo até ficar cristalino.' },
  { tag: 'Tech 02 — Fazemos com você', title: 'Sprint de Estruturação Tecnológica', lead: 'Implantar as automações e integrações prioritárias que o diagnóstico apontou. 6 a 8 semanas, escopo fechado.', garantia: 'Se não implantarmos os entregáveis no cronograma da sprint, o acompanhamento é estendido sem honorário adicional.' },
  { tag: 'Tech 03 — Fazemos por você', title: 'Retainer de Operação Tecnológica', lead: 'Operar a infraestrutura continuamente: módulos, SLA de disponibilidade e revisão estratégica trimestral.', garantia: 'Se não mantivermos a cadência, o SLA e o ciclo de evolução acordados, o período é estendido até a entrega completa.' },
]

export const ladderEn = [
  { tag: 'Tech 01 — You do it', title: 'Technology X-Ray', lead: 'AI-First readiness audit. Score across the 7 dimensions, prioritised bottlenecks and a roadmap.', garantia: 'If you do not leave with practical clarity on bottlenecks and priorities, we revise the diagnosis at no cost until it is crystal clear.' },
  { tag: 'Tech 02 — We do it with you', title: 'Technology Structuring Sprint', lead: 'Deploy the priority automations and integrations the diagnosis pointed to. 6 to 8 weeks, closed scope.', garantia: 'If we do not deploy the agreed items on the sprint schedule, support is extended with no additional fee.' },
  { tag: 'Tech 03 — We do it for you', title: 'Technology Operation Retainer', lead: 'Continuously operate the infrastructure: modules, availability SLA and quarterly strategic review.', garantia: 'If we do not hold the cadence, the SLA and the agreed evolution cycle, the period is extended until full delivery.' },
]

export const capabilitiesPt = [
  { name: 'Produto', use: 'Construir infraestrutura sob medida.', yes: 'Quando software cria vantagem operacional real.', no: 'Quando uma solução pronta resolve melhor e mais rápido.' },
  { name: 'Web', use: 'Experiências digitais orientadas à decisão.', yes: 'Quando a interface precisa explicar, provar ou converter.', no: 'Quando uma nova página apenas mascara um processo confuso.' },
  { name: 'Dados', use: 'Transformar sinais em decisões.', yes: 'Quando existem decisões recorrentes sem evidência confiável.', no: 'Quando medir tudo substitui a escolha de poucos indicadores úteis.' },
  { name: 'Automação', use: 'Reduzir fricção e trabalho manual.', yes: 'Quando o processo já está claro e repetível.', no: 'Quando o fluxo que será automatizado ainda está errado.' },
  { name: 'IA', use: 'Ampliar capacidade com contexto e controle.', yes: 'Quando há tarefa, dado e critério de qualidade definidos.', no: 'Quando IA é tratada como estratégia por si só.' },
  { name: 'Integrações', use: 'Fazer os sistemas que já existem conversarem.', yes: 'Quando o dado existe mas não atravessa as ferramentas.', no: 'Quando integrar só adia a decisão de aposentar um sistema.' },
  { name: 'Infraestrutura', use: 'Sustentar o que foi construído.', yes: 'Quando a operação passa a depender do sistema para funcionar.', no: 'Quando não há quem assuma a operação do outro lado.' },
]

export const capabilitiesEn = [
  { name: 'Product', use: 'Build bespoke infrastructure.', yes: 'When software creates genuine operational advantage.', no: 'When off-the-shelf software solves it better and faster.' },
  { name: 'Web', use: 'Decision-oriented digital experiences.', yes: 'When the interface must clarify, prove or convert.', no: 'When a new page merely masks a confusing process.' },
  { name: 'Data', use: 'Turn signals into decisions.', yes: 'When recurring decisions lack reliable evidence.', no: 'When measuring everything replaces picking a few useful indicators.' },
  { name: 'Automation', use: 'Reduce friction and manual labour.', yes: 'When the process is already clear and repeatable.', no: 'When the workflow to be automated is still wrong.' },
  { name: 'AI', use: 'Extend capacity with context and control.', yes: 'When task, data and quality criteria are defined.', no: 'When AI is treated as a strategy in itself.' },
  { name: 'Integrations', use: 'Make the systems you already have talk.', yes: 'When the data exists but does not cross tools.', no: 'When integrating only postpones retiring a system.' },
  { name: 'Infrastructure', use: 'Sustain what was built.', yes: 'When the operation starts depending on the system to function.', no: 'When nobody on the other side owns running it.' },
]

export const casesPt: CaseStudy[] = [
  {
    id: 'univet-safety',
    name: 'Univet Safety',
    category: 'Produto sob medida · Operação de EPI',
    headline: 'De planilhas, e-mails e WhatsApp para uma plataforma própria.',
    metric: 'Web + Mobile, com uso offline',
    evidence: 'Um fluxo fragmentado substituído por uma operação centralizada.',
    highlights: ['Pedidos, aprovações e documentos', 'Uso mobile offline', 'Sincronização entre dispositivos'],
    sections: [
      {
        label: 'O problema',
        title: 'O gargalo não era comercial. Era operacional.',
        blocks: [
          { type: 'paragraph', text: 'Numa frente da Univet, os pedidos de EPI estavam distribuídos entre planilhas, e-mails, WhatsApp e processos manuais.' },
          { type: 'lead', text: 'Nada disso é um problema de ferramenta. É um problema de a operação não ter um lugar só.' },
        ],
      },
      {
        label: 'A plataforma',
        title: 'Uma solução multiplataforma.',
        blocks: [
          { type: 'paragraph', text: 'A EG participou do desenho e do desenvolvimento de uma plataforma própria para centralizar essa operação, com arquitetura preparada para diferentes ambientes de uso.' },
          { type: 'points', items: ['Cadastro de clientes e unidades', 'Usuários e permissões', 'Catálogo', 'Criação de pedidos', 'Status', 'Histórico', 'Aprovações', 'Documentos', 'Anexos', 'Notificações', 'Dashboards', 'Uso mobile offline', 'Sincronização entre dispositivos'] },
        ],
      },
      {
        label: 'O impacto',
        blocks: [
          { type: 'points', items: ['Menos informação espalhada', 'Padronização do processo de pedidos', 'Visibilidade em tempo real de status e pendências', 'Redução de retrabalho', 'Redução de erros operacionais', 'Uma base tecnológica própria para continuar evoluindo'] },
        ],
      },
      {
        label: 'O que prova',
        blocks: [
          { type: 'quote', text: 'Entramos no problema, não com uma ferramenta pré-definida. Na mesma empresa, a outra frente recebeu growth, site e CRM — porque o problema de lá era outro.' },
        ],
      },
    ],
  },
  {
    id: 'bioma',
    name: 'Bioma',
    category: 'Plataforma própria · A EG rodando na EG',
    headline: 'A prova mais honesta que temos: nossa operação roda no software que construímos.',
    metric: '5 frentes tecnológicas ativas',
    evidence: 'Prospecção, auditoria, propostas e analytics de CAC num sistema só.',
    highlights: ['17 plataformas varridas', 'Scoring de fit 0–100', 'ROI e CAC por canal'],
    sections: [
      {
        label: 'Por que isso importa',
        title: 'Ninguém deveria comprar software de quem não usa o próprio.',
        blocks: [
          { type: 'paragraph', text: 'O Bioma é a infraestrutura de atração e prospecção B2B da própria EG. Não é demo nem protótipo: é onde a operação comercial da agência acontece todos os dias.' },
          { type: 'lead', text: 'É também a razão de conseguirmos operar como boutique sem depender de volume de gente.' },
        ],
      },
      {
        label: 'As 5 frentes',
        blocks: [
          { type: 'group', title: 'Radar de oportunidades', text: 'Varredura em 17 plataformas B2B, com scoring de fit de 0 a 100 e geração de proposta nos três pilares.' },
          { type: 'group', title: 'Auditoria automática de perfil', text: 'Avalia autoridade por URL pública, diagnostica gaps e devolve copy.' },
          { type: 'group', title: 'Injeção de cases', text: 'Pareia requisito de vaga com o acervo de cases validados e injeta prova numérica na proposta.' },
          { type: 'group', title: 'Inventário de gaps do mercado', text: 'Mapeia tecnologia exigida pelo mercado e assimila ao portfólio em um clique.' },
          { type: 'group', title: 'Analytics de ROI e CAC', text: 'Win rate, custo por proposta, CAC e ROI por canal, integrando o custo das assinaturas SaaS.' },
        ],
      },
      {
        label: 'O que prova',
        blocks: [
          { type: 'quote', text: 'A política AI-First da EG não é slide. Antes de somar esforço humano a qualquer processo, a pergunta padrão é se aquilo pode ser feito, acelerado ou ampliado por IA — e o Bioma é o que sobra quando essa pergunta é levada a sério por tempo suficiente.' },
        ],
      },
    ],
  },
  {
    id: 'poc-pje',
    name: 'Automação de protocolo judicial',
    category: 'Prova de conceito · Jurídico',
    headline: 'Um protótipo clicável entregue junto da proposta.',
    metric: 'PoC funcional',
    evidence: 'Motor de modelos e lógica dinâmica de jurisdição e classe processual.',
    highlights: ['Entregue antes do contrato', 'Web app navegável', 'Escopo real, não mockup'],
    sections: [
      {
        label: 'O contexto',
        blocks: [
          { type: 'paragraph', text: 'Protótipo de web app para automatizar o protocolo de petições no PJe de um tribunal regional, reduzindo o tempo de preenchimento por processo.' },
          { type: 'lead', text: 'Foi construído e entregue junto com a proposta comercial — antes de qualquer contrato assinado.' },
        ],
      },
      {
        label: 'O que prova',
        blocks: [
          { type: 'paragraph', text: 'Um diagnóstico tecnológico honesto às vezes precisa mostrar, não descrever. Quando o escopo é incerto, um corte vertical navegável resolve mais discussão do que dez páginas de especificação.' },
          { type: 'quote', text: 'A pergunta que ele responde não é “vocês conseguem construir?”. É “nós entendemos o mesmo problema?”.' },
        ],
      },
    ],
  },
]

export const casesEn: CaseStudy[] = [
  {
    id: 'univet-safety',
    name: 'Univet Safety',
    category: 'Bespoke product · PPE operation',
    headline: 'From spreadsheets, email and WhatsApp to a platform of their own.',
    metric: 'Web + Mobile, with offline use',
    evidence: 'A fragmented flow replaced by a centralised operation.',
    highlights: ['Orders, approvals and documents', 'Offline mobile use', 'Sync across devices'],
    sections: [
      {
        label: 'The problem',
        title: 'The bottleneck was not commercial. It was operational.',
        blocks: [
          { type: 'paragraph', text: 'On one front of Univet, PPE orders were spread across spreadsheets, email, WhatsApp and manual processes.' },
          { type: 'lead', text: 'None of that is a tool problem. It is the problem of an operation without a single place to live.' },
        ],
      },
      {
        label: 'The platform',
        title: 'A multiplatform solution.',
        blocks: [
          { type: 'paragraph', text: 'EG took part in designing and building a dedicated platform to centralise the operation, with an architecture prepared for different usage environments.' },
          { type: 'points', items: ['Client and unit registration', 'Users and permissions', 'Catalogue', 'Order creation', 'Status', 'History', 'Approvals', 'Documents', 'Attachments', 'Notifications', 'Dashboards', 'Offline mobile use', 'Sync across devices'] },
        ],
      },
      {
        label: 'The impact',
        blocks: [
          { type: 'points', items: ['Less information scattered around', 'A standardised ordering process', 'Real-time visibility of status and pending items', 'Less rework', 'Fewer operational errors', 'A technology base of their own to keep evolving'] },
        ],
      },
      {
        label: 'What it proves',
        blocks: [
          { type: 'quote', text: 'We came into the problem, not with a predefined tool. In the same company, the other front received growth, site and CRM — because the problem there was a different one.' },
        ],
      },
    ],
  },
  {
    id: 'bioma',
    name: 'Bioma',
    category: 'Own platform · EG running on EG',
    headline: 'The most honest proof we have: our operation runs on the software we built.',
    metric: '5 active technology fronts',
    evidence: 'Prospecting, auditing, proposals and CAC analytics in a single system.',
    highlights: ['17 platforms scanned', 'Fit scoring 0–100', 'ROI and CAC per channel'],
    sections: [
      {
        label: 'Why this matters',
        title: 'Nobody should buy software from someone who does not use their own.',
        blocks: [
          { type: 'paragraph', text: 'Bioma is EG’s own B2B attraction and prospecting infrastructure. It is not a demo or a prototype: it is where the agency’s commercial operation happens every day.' },
          { type: 'lead', text: 'It is also the reason we can operate as a boutique without depending on headcount.' },
        ],
      },
      {
        label: 'The 5 fronts',
        blocks: [
          { type: 'group', title: 'Opportunity radar', text: 'Scanning across 17 B2B platforms, with 0–100 fit scoring and proposal generation across the three pillars.' },
          { type: 'group', title: 'Automatic profile audit', text: 'Assesses authority from a public URL, diagnoses gaps and returns copy.' },
          { type: 'group', title: 'Case injection', text: 'Matches role requirements against the validated case library and injects numeric proof into proposals.' },
          { type: 'group', title: 'Market gap inventory', text: 'Maps technology the market demands and absorbs it into the portfolio in one click.' },
          { type: 'group', title: 'ROI and CAC analytics', text: 'Win rate, cost per proposal, CAC and ROI per channel, integrating SaaS subscription costs.' },
        ],
      },
      {
        label: 'What it proves',
        blocks: [
          { type: 'quote', text: 'EG’s AI-First policy is not a slide. Before adding human effort to any process, the default question is whether it can be done, accelerated or extended by AI — and Bioma is what remains when that question is taken seriously for long enough.' },
        ],
      },
    ],
  },
  {
    id: 'poc-pje',
    name: 'Court filing automation',
    category: 'Proof of concept · Legal',
    headline: 'A clickable prototype delivered alongside the proposal.',
    metric: 'Working PoC',
    evidence: 'Template engine and dynamic jurisdiction and case-class logic.',
    highlights: ['Delivered before the contract', 'Navigable web app', 'Real scope, not a mockup'],
    sections: [
      {
        label: 'The context',
        blocks: [
          { type: 'paragraph', text: 'A web app prototype to automate court filings in a regional tribunal’s system, cutting the time spent filling each case.' },
          { type: 'lead', text: 'It was built and delivered together with the commercial proposal — before any contract was signed.' },
        ],
      },
      {
        label: 'What it proves',
        blocks: [
          { type: 'paragraph', text: 'An honest technology diagnosis sometimes has to show rather than describe. When scope is uncertain, a navigable vertical slice settles more discussion than ten pages of specification.' },
          { type: 'quote', text: 'The question it answers is not “can you build it?”. It is “do we understand the same problem?”.' },
        ],
      },
    ],
  },
]

export const manifestoPt = [
  ['Processo', 'antes de ferramenta.'],
  ['Dado', 'antes de dashboard.'],
  ['Contexto', 'antes de IA.'],
  ['Documentação', 'antes de automação.'],
  ['Reversibilidade', 'antes de velocidade.'],
  ['Operação', 'antes de demo.'],
]

export const manifestoEn = [
  ['Process', 'before tooling.'],
  ['Data', 'before dashboards.'],
  ['Context', 'before AI.'],
  ['Documentation', 'before automation.'],
  ['Reversibility', 'before speed.'],
  ['Operation', 'before demo.'],
]

export const uiStrings = {
  pt: {
    brandAlt: 'EverGreen — Crescimento previsível, escalável e tecnológico',
    navMapTitle: 'Mapa da experiência',
    heroEyebrow: 'RAIO-X TECNOLÓGICO E PRONTIDÃO AI-FIRST',
    heroSubtitle: 'Não vendemos robôs de IA nem tecnologia pela tecnologia. Construímos a infraestrutura que faz a operação parar de depender de planilha, de e-mail e de uma pessoa específica.',
    ctaPrimary: 'Continuar a conversa no WhatsApp',
    bottleneckEyebrow: 'O SINTOMA VS A CAUSA',
    bottleneckTitle: 'Toda empresa que quer tecnologia pede a ferramenta:',
    bottleneckSubtitle: 'E quase sempre a causa está antes dela — no processo, no dado ou em algo que ninguém escreveu.',
    reqLabel: 'PEDIDO COMUM',
    sympLabel: 'SINTOMA REAL',
    causeLabel: 'CAUSA RAIZ',
    dimEyebrow: 'O QUE O RAIO-X TECNOLÓGICO MEDE',
    dimTitle: 'Prontidão AI-First em sete dimensões.',
    dimLead: 'Não é sobre quantas ferramentas a empresa tem. É sobre o que ela consegue fazer sem depender de alguém lembrar.',
    dimInstruction: 'Clique ou passe o cursor para ver a pergunta que abre cada dimensão.',
    dimAskLabel: 'A PERGUNTA QUE ABRE',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'Da Raiz à Copa: a frente tecnológica segue a mesma lógica',
    methodInstruction: 'Clique para explorar o módulo em detalhes',
    ladderEyebrow: 'ESCADA DE TECNOLOGIA',
    ladderTitle: 'Todo cliente entra pelo diagnóstico',
    ladderLead: 'Cada degrau tem garantia de execução escrita. O quarto degrau existe no método e só é discutido com baseline técnico claro.',
    guaranteeLabel: 'GARANTIA',
    capEyebrow: 'CAPACIDADES TÉCNICAS',
    capTitle: 'O problema define quais entram no projeto',
    teamEyebrow: 'QUEM EXECUTA',
    teamTitle: 'Liderança técnica e estratégica em cada projeto',
    evidEyebrow: 'EVIDÊNCIAS',
    evidTitle: 'O que já foi construído e está de pé',
    patternEyebrow: 'CULTURA & PRINCÍPIOS',
    patternTitle: 'Nosso padrão de atuação',
    contactEyebrow: 'PRÓXIMO PASSO',
    contactSubtitle: 'Se a proposta faz sentido, é só responder por lá.',
    openCase: 'Ver estudo completo',
  },
  en: {
    brandAlt: 'EverGreen — Predictable, scalable, and tech-driven growth',
    navMapTitle: 'Experience map',
    heroEyebrow: 'TECHNOLOGY X-RAY AND AI-FIRST READINESS',
    heroSubtitle: 'We do not sell AI bots or technology for its own sake. We build the infrastructure that stops an operation from depending on a spreadsheet, an inbox and one specific person.',
    ctaPrimary: 'Continue the conversation on WhatsApp',
    bottleneckEyebrow: 'SYMPTOM VS ROOT CAUSE',
    bottleneckTitle: 'Every company that wants technology asks for the tool:',
    bottleneckSubtitle: 'And the cause is almost always upstream of it — in the process, in the data, or in something nobody ever wrote down.',
    reqLabel: 'COMMON REQUEST',
    sympLabel: 'REAL SYMPTOM',
    causeLabel: 'ROOT CAUSE',
    dimEyebrow: 'WHAT THE TECHNOLOGY X-RAY MEASURES',
    dimTitle: 'AI-First readiness across seven dimensions.',
    dimLead: 'It is not about how many tools a company has. It is about what it can do without depending on someone remembering.',
    dimInstruction: 'Click or hover to see the question that opens each dimension.',
    dimAskLabel: 'THE OPENING QUESTION',
    methodEyebrow: 'THE EG ROOT SYSTEM',
    methodTitle: 'From Root to Canopy: the technology front follows the same logic',
    methodInstruction: 'Click to explore the module in detail',
    ladderEyebrow: 'TECHNOLOGY LADDER',
    ladderTitle: 'Every client enters through the diagnosis',
    ladderLead: 'Each step carries a written execution guarantee. The fourth step exists in the method and is only discussed with a clear technical baseline.',
    guaranteeLabel: 'GUARANTEE',
    capEyebrow: 'TECHNICAL CAPABILITIES',
    capTitle: 'The problem dictates which ones enter the engagement',
    teamEyebrow: 'WHO EXECUTES',
    teamTitle: 'Technical and strategic leadership in every project',
    evidEyebrow: 'EVIDENCE',
    evidTitle: 'What has been built and is standing',
    patternEyebrow: 'CULTURE & PRINCIPLES',
    patternTitle: 'Our operating standard',
    contactEyebrow: 'NEXT STEP',
    contactSubtitle: 'If the proposal makes sense, just reply there.',
    openCase: 'View full case study',
  },
}

export function getTechData(lang: Language = 'pt') {
  const isEn = lang === 'en'
  return {
    sections: isEn ? sectionsEn : sectionsPt,
    problems: isEn ? problemsEn : problemsPt,
    dimensions: isEn ? dimensionsEn : dimensionsPt,
    modules: isEn ? modulesEn : modulesPt,
    ladder: isEn ? ladderEn : ladderPt,
    capabilities: isEn ? capabilitiesEn : capabilitiesPt,
    cases: isEn ? casesEn : casesPt,
    manifesto: isEn ? manifestoEn : manifestoPt,
    t: isEn ? uiStrings.en : uiStrings.pt,
  }
}
