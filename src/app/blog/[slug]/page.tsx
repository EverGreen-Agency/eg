import { wordpressService } from '@/services/wordpress'
import BlogPostDetail from '@/components/blog/BlogPostDetail'

export async function generateStaticParams() {
  try {
    // Busca todos os posts do WordPress para gerar as rotas estáticas
    const posts = await wordpressService.getPosts(1, 100)
    
    // Retorna os slugs que serão gerados estaticamente
    return posts.map((post) => ({
      slug: post.slug
    }))
  } catch (error) {
    console.error('Erro ao gerar parâmetros estáticos:', error)
    return []
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostDetail slug={params.slug} />
} 