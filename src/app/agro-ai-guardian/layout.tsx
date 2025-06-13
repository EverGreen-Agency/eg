import { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Agro AI Guardian - Preveja pragas e clima. Proteja até 40% da sua colheita',
  description: 'IA + IoT acessíveis para pequenos e médios produtores. Reduza perdas por pragas e clima, economize em insumos e aumente sua produtividade com tecnologia avançada.',
  keywords: 'agricultura, inteligência artificial, IoT, previsão de pragas, monitoramento climático, agronegócio, tecnologia rural, sensores agrícolas',
  openGraph: {
    title: 'Agro AI Guardian - Tecnologia IA para Agricultura',
    description: 'Preveja pragas e clima. Proteja até 40% da sua colheita com IA + IoT acessíveis.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Agro AI Guardian',
    images: [
      {
        url: '/agro-ai-guardian-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Agro AI Guardian - Plataforma de IA para Agricultura'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agro AI Guardian - IA para Agricultura',
    description: 'Preveja pragas e clima. Proteja até 40% da sua colheita.',
    images: ['/agro-ai-guardian-og.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: 'https://evergreenmkt.com.br/agro-ai-guardian'
  }
};

export default function AgroAIGuardianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Schema for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Agro AI Guardian",
            "description": "Plataforma inteligente que prevê riscos no campo e aumenta a produtividade de pequenos e médios produtores.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "25",
              "priceCurrency": "BRL",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "25",
                "priceCurrency": "BRL",
                "unitText": "por hectare por mês"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127"
            },
            "provider": {
              "@type": "Organization",
              "name": "Evergreen Marketing",
              "url": "https://evergreenmkt.com.br"
            }
          })
        }}
      />
      {children}
    </>
  );
} 