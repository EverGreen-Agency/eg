/**
 * Tipos compartilhados pelas apresentacoes comerciais (/growth, /tech).
 * Elas sao anexos de proposta: o link vai colado ao lado do orcamento, para
 * alguem que ja esta em conversa.
 */

export type Language = 'pt' | 'en'

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

/** Fases do Sistema Raiz EG (Documento-Mestre §9). Valem para growth e para tech. */
export type RaizPhase = 'Raiz' | 'Tronco' | 'Ramos' | 'Copa'
