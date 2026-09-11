/**
 * Rotas de apresentacao comercial: rodam sem navbar e sem rodape, e sem o Pixel.
 * Fonte unica — ConditionalLayout e FacebookPixel leem daqui. Ao criar um deck
 * novo, adicione aqui ou ele nasce com o cromo do site institucional em cima.
 */
export const IMMERSIVE_ROUTES = ['/growth', '/tech'] as const

export function isImmersiveRoute(pathname: string | null) {
  if (!pathname) return false
  return IMMERSIVE_ROUTES.some(route => pathname === route || pathname.startsWith(`${route}/`))
}
