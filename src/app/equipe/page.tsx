import type { Metadata } from 'next'
import EquipeClient from './EquipeClient'

export const metadata: Metadata = {
  title: 'Equipe | EverGreen MKT',
  description: 'Conheça o time por trás da EverGreen MKT e sua experiência em crescimento comercial e tecnologia.',
}

export default function Page() {
  return <EquipeClient />
}
