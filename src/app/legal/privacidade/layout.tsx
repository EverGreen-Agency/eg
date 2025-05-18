import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - Evergreen MKT',
  description: 'Como a Evergreen MKT protege e utiliza seus dados pessoais',
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