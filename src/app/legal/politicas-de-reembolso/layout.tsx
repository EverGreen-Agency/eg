import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cancelamento e Reembolso - EverGreen Consultoria e Tecnologia',
  description: 'Política de Cancelamento e Reembolso dos serviços da EverGreen Consultoria e Tecnologia',
}

export default function PoliticasReembolsoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 