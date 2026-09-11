/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['framer-motion'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evergreenmkt.com.br',
        pathname: '/wp-content/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'cms.evergreenmkt.com.br',
        pathname: '/wp-content/uploads/**'
      }
    ],
    unoptimized: true,
    domains: ['evergreenmkt.com.br', 'cms.evergreenmkt.com.br']
  }
}


/**
 * As rotas abaixo foram movidas para `_legacy/` na Fase 0 (higiene de 2026-07-17)
 * e passaram a responder 404 — sem redirect. A auditoria de busca de 28/08/2026
 * mostrou que /investidores e /holding continuavam ranqueando: juntas seguravam
 * 3 das 16 keywords do dominio, incluindo a de maior volume (390/mes).
 *
 * 301 permanente: o destino e a pagina viva mais proxima em intencao.
 */
nextConfig.redirects = async () => [
  // institucional: quem procurava holding/investidores quer saber quem e a empresa
  { source: '/investidores', destination: '/sobre', permanent: true },
  { source: '/holding', destination: '/sobre', permanent: true },

  // submarcas descartadas: a oferta real vive em /servicos
  { source: '/eg-os', destination: '/servicos', permanent: true },
  { source: '/eg-os/:path*', destination: '/servicos', permanent: true },
  { source: '/eg-tech', destination: '/servicos', permanent: true },
  { source: '/eg-lab', destination: '/servicos', permanent: true },
  { source: '/eg-finance/:path*', destination: '/servicos', permanent: true },

  // ferramentas gratuitas cortadas: a substituta e o Raio-X, que mora em /servicos
  { source: '/ferramentas', destination: '/servicos', permanent: true },
  { source: '/ferramentas/:path*', destination: '/servicos', permanent: true },

  // produtos orfaos, sem sucessor no site
  { source: '/agro-ai-guardian', destination: '/', permanent: true },
  { source: '/agro-ai-guardian/:path*', destination: '/', permanent: true },
  { source: '/caderno-memorias', destination: '/', permanent: true },
  { source: '/caderno-memorias/:path*', destination: '/', permanent: true },

  // o banner de cookies apontou para esta URL por meses; ela nunca existiu
  { source: '/politica-de-privacidade', destination: '/legal/privacidade', permanent: true },
]

module.exports = nextConfig
