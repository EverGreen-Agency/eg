import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Evergreen MKT',
  description: 'Conteúdo sobre crescimento comercial, tecnologia e execução para empresas B2B.',
}

export default function Page() {
  return <BlogClient />
}
