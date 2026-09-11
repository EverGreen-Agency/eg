import fs from 'fs'
import path from 'path'
import type { BlogPost, BlogCategory } from '@/types/blog'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

/**
 * Parser de Frontmatter nativo (sem dependências extras).
 */
function parseFrontmatter(fileContent: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/
  const match = frontmatterRegex.exec(fileContent)

  if (!match) {
    return { data: {}, content: fileContent }
  }

  const yamlBlock = match[1]
  const content = match[2]
  const data: Record<string, any> = {}

  yamlBlock.split(/\r?\n/).forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value: any = line.slice(colonIndex + 1).trim()

      // Remover aspas
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      // Arrays simples no formato: [item1, item2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value
          .slice(1, -1)
          .split(',')
          .map((item: string) => item.trim().replace(/^["']|["']$/g, ''))
      }

      data[key] = value
    }
  })

  return { data, content }
}

/**
 * Converte Markdown simples para HTML semântico com Tailwind Prose.
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown

  // Code blocks ```lang ... ```
  html = html.replace(/```([a-z]*)\r?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="bg-[#05130E] border border-[#3AC97B]/20 p-4 rounded-xl overflow-x-auto text-sm my-6 text-[#FFF4C7] font-mono"><code class="language-${lang}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
  })

  // Blockquotes > quote
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-[#3AC97B] pl-4 py-2 italic text-[#FFF4C7]/90 my-6 bg-[#3AC97B]/5 rounded-r-lg">$1</blockquote>')

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-bold text-[#FFF4C7] mt-8 mb-4 tracking-tight">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-[#3AC97B] mt-12 mb-6 tracking-tight border-b border-[#3AC97B]/20 pb-3">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-extrabold text-[#FFF4C7] mt-6 mb-4">$1</h1>')

  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#FFF4C7] font-semibold">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em class="text-[#FFF4C7]/90">$1</em>')

  // Inline code `code`
  html = html.replace(/`([^`]+)`/g, '<code class="bg-[#05130E] border border-[#3AC97B]/20 px-1.5 py-0.5 rounded text-sm text-[#3AC97B] font-mono">$1</code>')

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#3AC97B] underline underline-offset-4 hover:text-[#3AC97B]/80 transition-colors font-medium">$1</a>')

  // Unordered list items - list item
  html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="text-[#FFF4C7]/80 leading-relaxed mb-2 list-disc list-inside">$1</li>')

  // Ordered list items 1. list item
  html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li class="text-[#FFF4C7]/80 leading-relaxed mb-2 list-decimal list-inside">$1</li>')

  // Paragraphs
  const blocks = html.split(/\r?\n\r?\n/)
  html = blocks
    .map((block) => {
      block = block.trim()
      if (!block) return ''
      if (block.startsWith('<h') || block.startsWith('<pre') || block.startsWith('<blockquote') || block.startsWith('<li') || block.startsWith('<div')) {
        return block
      }
      return `<p class="text-[#FFF4C7]/80 text-base md:text-lg leading-relaxed mb-6 font-normal">${block.replace(/\r?\n/g, '<br />')}</p>`
    })
    .join('\n')

  return html
}

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  comercial: 'Estratégia Comercial',
  ia: 'IA Aplicada',
  growth: 'Growth & Aquisição',
  funis: 'Funis & Conversão',
  bastidores: 'Bastidores EG',
  ferramentas: 'Ferramentas & Templates',
  educacao: 'Educação & Mercado'
}

/**
 * Lê todos os posts locais da pasta src/content/blog/
 */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true })
    return []
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.md'))

  const posts: BlogPost[] = files.map((fileName) => {
    const filePath = path.join(CONTENT_DIR, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = parseFrontmatter(fileContent)

    const slug = data.slug || fileName.replace(/\.md$/, '')
    const category: BlogCategory = data.category || 'comercial'

    // Estima tempo de leitura (200 palavras por minuto)
    const wordCount = content.split(/\s+/).length
    const readingTime = `${Math.ceil(wordCount / 200)} min de leitura`

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      excerpt: data.excerpt || data.description || '',
      content: content,
      category,
      categoryLabel: CATEGORY_LABELS[category] || 'Conteúdo Técnico',
      contentType: data.contentType || 'artigo',
      date: data.date || new Date().toISOString().split('T')[0],
      scheduledDate: data.scheduledDate || data.date,
      readingTime,
      featuredImage: {
        url: data.featuredImage || '/images/growthEngine.jpg',
        alt: data.featuredImageAlt || data.title || 'EverGreen Blog'
      },
      author: {
        name: data.authorName || 'EverGreen Equipe Técnica',
        role: data.authorRole || 'Consultoria & Engenharia',
        avatar: data.authorAvatar || '/images/eduardo.jpg'
      },
      tags: Array.isArray(data.tags) ? data.tags : ['comercial', 'b2b'],
      faq: Array.isArray(data.faq) ? data.faq : [],
      keyTakeaways: Array.isArray(data.keyTakeaways) ? data.keyTakeaways : []
    }
  })

  // Ordena por data decrescente
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Busca um post específico por slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}

/**
 * Busca posts relacionados da mesma categoria
 */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const posts = getAllPosts()
  const current = posts.find((p) => p.slug === currentSlug)
  if (!current) return posts.slice(0, limit)

  return posts
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}
