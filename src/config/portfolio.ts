export type PortfolioCategory = 'autoral' | 'poc-lead' | 'estudo-de-caso'

export interface PortfolioItem {
  slug: string
  title: string
  description: string
  category: PortfolioCategory
  /** URL do demo/repositório ao vivo ou link do estudo de caso */
  liveUrl?: string
  /** Só relevante para category: 'poc-lead'. Preenchido quando o lead formalmente não avançou (não "ainda em negociação"). */
  leadConsent?: {
    leadClosedLostAt: string
    /** 'sent' = aviso de cortesia enviado antes de publicar. 'waived' = dispensado (ex.: lead parou de responder a múltiplas tentativas de contato). */
    courtesyNotice: 'sent' | 'waived'
    courtesyNoticeNote?: string
  }
  imageUrl?: string
}

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, { title: string; description: string }> = {
  autoral: {
    title: 'Projetos autorais',
    description: 'Hackathons, protótipos avançados e projetos próprios da EG, sem dependência externa.',
  },
  'poc-lead': {
    title: 'PoCs de lead',
    description: 'Protótipos construídos para validação técnica com clientes potenciais.',
  },
  'estudo-de-caso': {
    title: 'Estudos de caso',
    description: 'Casos reais de reestruturação comercial, esteiras de CRM e IA aplicada operados pela EverGreen.',
  },
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'grupo-casa-fatilli',
    title: 'Grupo Casa Fatilli — Automação Comercial & IA',
    description:
      'Reestruturação completa da esteira de atendimento WhatsApp e Kommo CRM para grupo de móveis planejados de alto padrão. Redução de 89% no tempo de resposta e aumento de mais de 5x em agendamentos presenciais.',
    category: 'estudo-de-caso',
    liveUrl: '/autoridade/grupo-casa-fatilli-automacao-comercial-ia',
  },
  {
    slug: 'iw-tour',
    title: 'IW Tour — Tração & Vendas Conversacionais',
    description:
      'Estruturação de máquina de vendas para turismo transformacional. Redução de 54% no CAC e turmas com 100% de vagas esgotadas em 48 horas.',
    category: 'estudo-de-caso',
    liveUrl: '/autoridade/iw-tour-viagens-iniciaticas-tracao-previsibilidade',
  },
  {
    slug: 'mackenzie-hackathons',
    title: 'Prêmio Hackathons Mackenzie (2023 e 2025)',
    description:
      'Soluções proprietárias de inteligência artificial aplicada e microsserviços para gestão de portfólio premiadas em 1º lugar pela banca acadêmica e corporativa.',
    category: 'autoral',
    liveUrl: '/autoridade/premiacoes-mackenzie-hackathon',
  },
  {
    slug: 'automacao-protocolo-judicial-pje',
    title: 'Automação de Protocolo Judicial (PJe)',
    description:
      'Protótipo de web app para automatizar o protocolo de petições no PJe de um tribunal regional, reduzindo o tempo de preenchimento por processo via motor de modelos e lógica dinâmica de jurisdição/classe.',
    category: 'poc-lead',
    liveUrl: 'https://rian.poc.evergreenmkt.com.br',
    leadConsent: {
      leadClosedLostAt: '2026-07-17',
      courtesyNotice: 'waived',
      courtesyNoticeNote: 'Lead parou de responder após múltiplas tentativas de recontato.',
    },
  },
]
