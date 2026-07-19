import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cancelamento e Reembolso - EverGreen MKT',
  description: 'Política de Cancelamento e Reembolso dos serviços da EverGreen MKT',
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