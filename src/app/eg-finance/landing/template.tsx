'use client';

import { Inter } from 'next/font/google';
import '../../globals.css';
import FacebookPixel from '@/components/FacebookPixel';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// This is a completely standalone layout that has no connection to the root layout
// It renders its own complete HTML structure with no inheritance
export default function LandingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <title>EverGreen Finance | Sua solução financeira completa</title>
        <meta name="description" content="Evite o colapso financeiro com uma plataforma que mostra onde o dinheiro vai e o que fazer com ele. Tudo em tempo real, direto no WhatsApp." />
        <link rel="icon" href="/images/favicon.ico" type="image/ico" />
      </head>
      <body className="font-sans">
        <FacebookPixel />
        {children}
        {/* No Footer component here */}
      </body>
    </html>
  );
} 