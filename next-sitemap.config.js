module.exports = {
  siteUrl: 'https://www.evergreenmkt.com.br',
  generateRobotsTxt: true, // Gerar robots.txt automaticamente
  generateIndexSitemap: false, // Gerar um único sitemap.xml direto (<urlset>), sem criar índice sitemap-0.xml
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  },
  exclude: ['/api/*', '/server-sitemap.xml'] // Excluir rotas de API e o sitemap do servidor (se você usar geração dinâmica)
  // Para rotas dinâmicas, você pode precisar de uma função para gerar os paths,
  // mas para começar, o básico acima deve funcionar para páginas estáticas e rotas de arquivos.
  // Consulte a documentação do next-sitemap para configurações avançadas de rotas dinâmicas se necessário.
}
