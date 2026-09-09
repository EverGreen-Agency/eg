import type { Metadata } from 'next'
import EquipeClient from './EquipeClient'

export const metadata: Metadata = {
  title: 'Equipe | EverGreen Consultoria e Tecnologia',
  description: 'Conheça o time por trás da EverGreen Consultoria e Tecnologia e sua experiência em crescimento comercial e tecnologia.',
}

export default function Page() {
  return <EquipeClient />
}
