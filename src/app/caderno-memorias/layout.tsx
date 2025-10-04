import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Caderno de Memórias da Infância - Presente Especial',
  description: 'Transforme momentos simples em memórias eternas com o Caderno de Memórias da Infância. Mais de 45 páginas únicas para registrar a infância do seu filho.',
  keywords: 'caderno memórias, infância, presente, família, diário, aquarela',
  openGraph: {
    title: 'Caderno de Memórias da Infância',
    description: 'Mais que um presente, um tesouro de memórias para toda a vida!',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caderno de Memórias da Infância',
    description: 'Mais que um presente, um tesouro de memórias para toda a vida!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CadernoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta tags específicas para a landing page */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F5B6C1" />
        
        {/* Preconnect para fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fontes Google */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Varela+Round&family=Playlist+Script&family=Sriracha&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {/* Layout limpo sem header/footer do EverGreen */}
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
