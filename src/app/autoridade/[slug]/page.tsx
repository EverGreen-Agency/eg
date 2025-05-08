import { wordpressService } from '@/services/wordpress'
import AutoridadeDetail from '@/components/autoridade/AutoridadeDetail'

export async function generateStaticParams() {
  // Busca todos os posts de autoridade do WordPress
  const posts = await wordpressService.getPosts()
  
  // Retorna os slugs que serão gerados
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default function AutoridadePage({ params }: { params: { slug: string } }) {
  return <AutoridadeDetail slug={params.slug} />
} 