/**
 * Tipos compartilhados pelas apresentacoes comerciais (/growth, /tech).
 * Elas sao anexos de proposta: o link vai colado ao lado do orcamento, para
 * alguem que ja esta em conversa.
 */

/**
 * Idiomas das apresentacoes.
 *
 * Todo conteudo e tipado como `Record<Language, T>`, entao o TypeScript exige as
 * seis chaves. Foi a estrutura antiga — arrays soltos `xPt` e `xEn` — que deixou
 * o deck em ingles com metade das secoes por semanas sem ninguem notar.
 */
export const LANGUAGES = ['pt', 'en', 'es', 'it', 'fr', 'de'] as const
export type Language = (typeof LANGUAGES)[number]

/** Rotulo curto de cada idioma, para o seletor. */
export const LANGUAGE_LABEL: Record<Language, string> = {
  pt: 'PT', en: 'EN', es: 'ES', it: 'IT', fr: 'FR', de: 'DE',
}

/** Nome do idioma no proprio idioma, para o `title` do seletor. */
export const LANGUAGE_NAME: Record<Language, string> = {
  pt: 'Português', en: 'English', es: 'Español', it: 'Italiano', fr: 'Français', de: 'Deutsch',
}

/** Valor de `<html lang>` por idioma. */
export const LANGUAGE_TAG: Record<Language, string> = {
  pt: 'pt-BR', en: 'en', es: 'es', it: 'it', fr: 'fr', de: 'de',
}

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
