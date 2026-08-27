/**
 * Mecanica compartilhada das apresentacoes comerciais (/growth, /tech):
 * rastreio, reescrita de URL e a geometria das rodas.
 */

export const ease = [0.22, 1, 0.36, 1] as const

// ---------------------------------------------------------------- rastreio

/**
 * Etiqueta de quem recebeu o link (?p=). A peca e anexo de proposta: sem isto o
 * analytics responde "23 pessoas viram a secao 5" quando a pergunta real e
 * "o Rian abriu, e ate onde foi?". Fica em modulo porque track() e chamada de
 * varios pontos e o valor nao muda depois do carregamento.
 */
let prospectTag: string | null = null

/** So letras, numeros, hifen e underscore. O valor vai parar em relatorio. */
export function sanitizeProspect(raw: string | null) {
  if (!raw) return null
  const clean = raw.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)
  return clean || null
}

export function setProspectTag(raw: string | null) {
  prospectTag = sanitizeProspect(raw)
}

export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const target = window as typeof window & { dataLayer?: Record<string, unknown>[] }
  target.dataLayer = target.dataLayer || []
  target.dataLayer.push({ event, ...(prospectTag ? { prospect: prospectTag } : {}), ...data })
}

// ---------------------------------------------------------------------- URL

/**
 * Reescreve a URL preservando os parametros que ja estavam la. A versao antiga
 * montava a URL a partir do pathname puro, entao abrir um modulo ou um case
 * apagava ?lang=en e ?p= — e um link copiado dali perdia idioma e etiqueta.
 * Passe null num parametro para remove-lo.
 */
export function replaceExperienceUrl(changes: Record<string, string | null> = {}, hash = '') {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  for (const [key, value] of Object.entries(changes)) {
    if (value === null) params.delete(key)
    else params.set(key, value)
  }
  const query = params.toString() ? `?${params.toString()}` : ''
  window.history.replaceState(window.history.state, '', `${window.location.pathname}${query}${hash}`)
}

// ----------------------------------------------------------- geometria da roda

function polarPoint(radius: number, angle: number) {
  const radians = (angle - 90) * Math.PI / 180
  return {
    x: Number((50 + radius * Math.cos(radians)).toFixed(5)),
    y: Number((50 + radius * Math.sin(radians)).toFixed(5)),
  }
}

/** Setor de anel para a roda. `gap` e o respiro em graus entre fatias vizinhas. */
export function sectorPath(index: number, total: number, expanded = false, gap = 1.2) {
  const span = 360 / total
  const startAngle = index * span + gap
  const endAngle = (index + 1) * span - gap
  const outerRadius = expanded ? 49 : 45.5
  const innerRadius = expanded ? 18.5 : 20
  const outerStart = polarPoint(outerRadius, startAngle)
  const outerEnd = polarPoint(outerRadius, endAngle)
  const innerEnd = polarPoint(innerRadius, endAngle)
  const innerStart = polarPoint(innerRadius, startAngle)
  return `M ${outerStart.x} ${outerStart.y} A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y} Z`
}

export function sectorLabelPoint(index: number, total: number) {
  const span = 360 / total
  return polarPoint(33, index * span + span / 2)
}
