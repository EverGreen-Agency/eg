import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Serviço - Evergreen MKT',
  description: 'Termos e condições para utilização dos serviços de BPO automatizado da Evergreen MKT',
}

export default function TermosDeUsoLayout({
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