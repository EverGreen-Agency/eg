import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - EverGreen MKT',
  description: 'Como a EverGreen MKT protege e utiliza seus dados pessoais',
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