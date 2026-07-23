import type { Metadata } from 'next'
import ServicosClient from './ServicosClient'

export const metadata: Metadata = {
  title: 'Raio-X Comercial, Sprint e Retainer | Como a EverGreen trabalha',
  description: 'Todo cliente entra pelo diagnóstico. O Raio-X Comercial mede Oferta, Demanda e Conversão; a Sprint estrutura o que falta; o Retainer sustenta e evolui. Ferramenta é meio de entrega, não cardápio de serviço.',
}

export default function Page() {
  return <ServicosClient />
}
