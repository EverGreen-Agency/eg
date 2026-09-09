import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Serviço - EverGreen Consultoria e Tecnologia',
  description: 'Termos e condições para utilização dos serviços da EverGreen Consultoria e Tecnologia',
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