import { WORDPRESS_API_URL } from '@/config/constants'

// Tipos para as certificações
export interface Certificacao {
  id: number
  title: {
    rendered: string
  }
  acf: {
    institution: string
    issue_date: string
    certificate_url: string
    image_url: string
  }
}

// Tipos para os selos
export interface SeloEG {
  id: number
  title: {
    rendered: string
  }
  acf: {
    descricao: string
    icone: string
  }
}

// Funções para buscar dados da API
export async function getCertificacoes(): Promise<Certificacao[]> {
  // Usando o endpoint correto com base na estrutura do WordPress
  const endpoint = `${WORDPRESS_API_URL}/posts?type=certificado&per_page=100`
  console.log('Tentando acessar endpoint:', endpoint)
  
  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      cache: 'no-cache'
    })

    console.log('Status da resposta:', res.status)
    
    if (!res.ok) {
      const errorBody = await res.text()
      console.error('Erro completo:', {
        status: res.status,
        statusText: res.statusText,
        body: errorBody,
        headers: Object.fromEntries(res.headers.entries())
      })
      throw new Error(`Erro HTTP: ${res.status}. ${errorBody}`)
    }

    const data = await res.json()
    console.log('Dados recebidos:', data)
    return data
  } catch (error) {
    console.error('Erro ao buscar certificados:', {
      error,
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      endpoint
    })
    throw new Error(`Falha ao carregar certificados: ${error instanceof Error ? error.message : 'Erro desconhecido'}`)
  }
}

export async function getSelosEG(): Promise<SeloEG[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/selo-eg?per_page=100`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Erro ao buscar selos:', error)
    return []
  }
} 