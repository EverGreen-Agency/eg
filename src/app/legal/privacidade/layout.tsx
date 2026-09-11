import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - EverGreen Consultoria e Tecnologia',
  description: 'Como a EverGreen Consultoria e Tecnologia protege e utiliza seus dados pessoais',
}

export default function PrivacidadeLayout({
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