export type PortfolioCategory = 'autoral' | 'poc-lead' | 'estudo-de-caso'

export interface PortfolioItem {
  slug: string
  title: string
  description: string
  category: PortfolioCategory
  /** URL do demo/repositório ao vivo — nunca um link de download do código-fonte para PoCs de lead */
  liveUrl?: string
  /** Só relevante para category: 'poc-lead'. Preenchido quando o lead formalmente não avançou (não "ainda em negociação") e o aviso de cortesia foi enviado. */
  leadConsent?: {
    leadClosedLostAt: string
    courtesyNoticeSentAt: string
  }
  imageUrl?: string
}

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, { title: string; description: string }> = {
  autoral: {
    title: 'Projetos autorais',
    description: 'Hackathons e projetos próprios da EG, sem dono externo.',
  },
  'poc-lead': {
    title: 'PoCs de lead',
    description: 'Protótipos construídos para leads que não avançaram — nunca de clientes ativos, e só com aviso de cortesia enviado.',
  },
  'estudo-de-caso': {
    title: 'Estudos de caso',
    description: 'Sites e produtos construídos pela EG para fins de estudo, sem dado de cliente real envolvido.',
  },
}

// Nenhum projeto publicado ainda — preencher conforme os critérios de cada categoria acima.
export const portfolioItems: PortfolioItem[] = []
