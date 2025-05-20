import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../../globals.css';
import FacebookPixel from '@/components/FacebookPixel';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'EverGreen Finance | Sua solução financeira completa',
  description: 'Evite o colapso financeiro com uma plataforma que mostra onde o dinheiro vai e o que fazer com ele. Tudo em tempo real, direto no WhatsApp.',
};

// These settings completely override the root layout
// This prevents this route from using the root layout at all
export const dynamic = 'force-static';
export const runtime = 'nodejs';

// This will become a completely independent layout with no inheritance
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a brand new HTML structure to prevent inheriting root layout
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/ico" />
      </head>
      <body className="font-sans">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
} 