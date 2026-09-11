export type BlogCategory = 
  | 'comercial'
  | 'ia'
  | 'growth'
  | 'funis'
  | 'bastidores'
  | 'ferramentas'
  | 'educacao'

export interface BlogFaqItem {
  question: string
  answer: string
}

export interface BlogAuthor {
  name: string
  role: string
  avatar: string
  bio?: string
}

export interface BlogPost {
  id?: string
  slug: string
  title: string
  description: string
  excerpt: string
  content: string
  category: BlogCategory
  categoryLabel: string
  contentType: 'framework' | 'guia' | 'artigo' | 'analise'
  date: string
  scheduledDate?: string
  readingTime: string
  featuredImage: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  author: BlogAuthor
  tags: string[]
  faq?: BlogFaqItem[]
  keyTakeaways?: string[]
}
