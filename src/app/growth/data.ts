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

export const cases = [
  {
    id: 'sara', name: 'Dra. Sara Michelon', evidence: '16 ações de contato medidas', status: 'Evidência observada',
    steps: [
      ['Contexto', 'Conta de Google Ads com problemas estruturais e baixa clareza sobre resultados.'],
      ['Diagnóstico', 'Tracking inconsistente e leitura de performance incompleta.'],
      ['Decisão', 'Reestruturar operação, políticas, tracking e campanhas.'],
      ['Implementação', 'Nova instrumentação e organização técnica da aquisição.'],
      ['Evidência', '16 ações de contato medidas — contato não significa paciente.'],
      ['Aprendizado', 'Clique → contato → lead qualificado → agendamento → receita.'],
    ],
  },
  {
    id: 'kontes', name: 'Kontes Express', evidence: 'O KPI mudou porque o problema mudou', status: 'Qualidade antes de volume',
    steps: [
      ['Contexto', 'Campanha B2B de uniformes gerava volume sem qualidade suficiente.'],
      ['Diagnóstico', '“Conversão do Google” não representava sucesso comercial.'],
      ['Decisão', 'Mudar a leitura de volume para avanço real no processo.'],
      ['Implementação', 'Lead → qualificado → orçamento → venda → receita.'],
      ['Evidência', 'A operação passou a avaliar qualidade, não apenas formulários.'],
      ['Aprendizado', 'O KPI certo depende do problema que precisa ser resolvido.'],
    ],
  },
  {
    id: 'univet', name: 'Univet Loupes', evidence: 'Operação em evolução', status: 'Integração e rastreabilidade',
    steps: [
      ['Contexto', 'Venda consultiva de alto valor com pontos da jornada desconectados.'],
      ['Diagnóstico', 'Site, aquisição e operação comercial precisavam compartilhar contexto.'],
      ['Decisão', 'Estruturar uma operação integrada e rastreável.'],
      ['Implementação', 'Site + SEO + CRM + Growth + Dados.'],
      ['Evidência', 'Operação em evolução; sem resultado quantitativo inventado.'],
      ['Aprendizado', 'A integração permite aprender com a jornada inteira.'],
    ],
  },
]

export const manifesto = [
  ['Clareza', 'antes de execução.'],
  ['Escopo', 'antes de entusiasmo.'],
  ['Método', 'antes de improviso.'],
  ['Cadência', 'antes de feeling.'],
  ['Documentação', 'antes de opinião.'],
  ['Evidência', 'antes de escala.'],
]
