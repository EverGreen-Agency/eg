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

module.exports = nextConfig
