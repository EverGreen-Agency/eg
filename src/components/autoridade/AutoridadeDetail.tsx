'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { wordpressService, type AutoridadePost } from '@/services/wordpress'

export default function AutoridadeDetail({ slug }: { slug: string }) {
  const [post, setPost] = useState<AutoridadePost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true)
        const posts = await wordpressService.getAutoridadePosts()
        const foundPost = posts.find(p => p.slug === slug)
        setPost(foundPost || null)
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar post:', err)
        setError('Falha ao carregar o post. Por favor, tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl">Carregando...</h1>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl text-red-600">
          {error || 'Post não encontrado'}
        </h1>
      </div>
    )
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]

  return (
    <article className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className="text-gray-600 mb-4">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </div>
      </header>

      {featuredImage?.source_url && (
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {post.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.yoast_head_json.schema)
          }}
        />
      )}
    </article>
  )
} 