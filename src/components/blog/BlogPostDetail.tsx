'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { wordpressService, type Post } from '@/services/wordpress'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BlogPostDetail({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true)
        const data = await wordpressService.getPostBySlug(slug)
        setPost(data)
        setError(null)
      } catch (err) {
        console.error('Erro ao carregar post:', err)
        setError('Post não encontrado')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09231B] p-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-[#3AC97B]/20 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-[#3AC97B]/20 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-[#3AC97B]/20 rounded"></div>
              <div className="h-4 bg-[#3AC97B]/20 rounded w-5/6"></div>
              <div className="h-4 bg-[#3AC97B]/20 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#09231B] p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error || 'Post não encontrado'}
          </h1>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar ao Blog
          </Link>
        </div>
      </div>
    )
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]

  return (
    <div className="min-h-screen bg-[#09231B]">
      <article className="max-w-4xl mx-auto p-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#3AC97B] hover:text-[#3AC97B]/80 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Voltar ao Blog
          </Link>
        </nav>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4 text-[#FFF4C7]"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex items-center gap-4 text-[#FFF4C7]/60 mb-6">
            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            <span className="bg-[#3AC97B]/10 text-[#3AC97B] px-3 py-1 rounded-full text-sm border border-[#3AC97B]/20">
              📘 Framework
            </span>
          </div>
        </motion.header>

        {/* Featured Image */}
        {featuredImage?.source_url && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden"
          >
            <Image
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-content prose prose-lg max-w-none prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 bg-[#09231B] border border-[#3AC97B]/20 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-[#FFF4C7] mb-4">
            Gostou do conteúdo?
          </h3>
          <p className="text-[#FFF4C7]/80 mb-6">
            Transforme conhecimento em crescimento real com a EverGreen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contato"
              className="bg-[#3AC97B] text-[#09231B] px-6 py-3 rounded-full hover:bg-[#3AC97B]/90 transition-colors font-medium"
            >
              Agendar Diagnóstico
            </Link>
            <Link 
              href="/newsletter"
              className="bg-[#09231B] border border-[#3AC97B] text-[#3AC97B] px-6 py-3 rounded-full hover:bg-[#3AC97B]/10 transition-colors font-medium"
            >
              Assinar Newsletter
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  )
} 