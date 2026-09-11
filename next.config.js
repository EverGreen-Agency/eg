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
 * Redirecionamentos permanentes 301 para preservar SEO, links legados e remover páginas mortas/duplicadas.
 */
nextConfig.redirects = async () => [
  // Higienização de posts legados do WordPress
  {
    source: '/blog/teste',
    destination: '/blog',
    permanent: true
  },
  {
    source: '/blog/ia-para-empresas-alem-do-chatgpt-automacoes-que-realmente-geram-roi-2',
    destination: '/blog/ia-para-empresas-alem-do-chatgpt-automacoes-que-realmente-geram-roi',
    permanent: true
  },
  {
    source: '/blog/como-montar-sua-primeira-maquina-de-vendas-com-zero-equipe-2',
    destination: '/blog/como-montar-sua-primeira-maquina-de-vendas-com-zero-equipe',
    permanent: true
  },

  // Institucional: quem procurava holding/investidores quer saber quem é a empresa
  { source: '/investidores', destination: '/sobre', permanent: true },
  { source: '/holding', destination: '/sobre', permanent: true },

  // Submarcas descartadas: a oferta real vive em /servicos
  { source: '/eg-os', destination: '/servicos', permanent: true },
  { source: '/eg-os/:path*', destination: '/servicos', permanent: true },
  { source: '/eg-tech', destination: '/servicos', permanent: true },
  { source: '/eg-lab', destination: '/servicos', permanent: true },
  { source: '/eg-finance/:path*', destination: '/servicos', permanent: true },

  // Ferramentas gratuitas cortadas: a substituta é o Raio-X, que mora em /servicos
  { source: '/ferramentas', destination: '/servicos', permanent: true },
  { source: '/ferramentas/:path*', destination: '/servicos', permanent: true },

  // Produtos orfãos, sem sucessor no site
  { source: '/agro-ai-guardian', destination: '/', permanent: true },
  { source: '/agro-ai-guardian/:path*', destination: '/', permanent: true },
  { source: '/caderno-memorias', destination: '/', permanent: true },
  { source: '/caderno-memorias/:path*', destination: '/', permanent: true },

  // O banner de cookies apontou para esta URL por meses; ela nunca existiu
  { source: '/politica-de-privacidade', destination: '/legal/privacidade', permanent: true }
]

module.exports = nextConfig
