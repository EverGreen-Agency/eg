export type PortfolioCategory = 'autoral' | 'poc-lead' | 'estudo-de-caso'

export interface PortfolioItem {
  slug: string
  title: string
  description: string
  category: PortfolioCategory
  /** URL do demo/repositório ao vivo — nunca um link de download do código-fonte para PoCs de lead */
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

export const portfolioItems: PortfolioItem[] = [
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
