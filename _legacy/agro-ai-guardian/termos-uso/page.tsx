export default function TermosUsoPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última atualização: Janeiro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 mb-4">
              Ao utilizar a plataforma Agro AI Guardian, você concorda com estes termos de uso 
              e nossa política de privacidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-700 mb-4">
              O Agro AI Guardian é uma plataforma de inteligência artificial que oferece 
              monitoramento agrícola, previsões climáticas e análise de riscos para propriedades rurais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades do Usuário</h2>
            <p className="text-gray-700 mb-4">
              O usuário é responsável por fornecer informações precisas sobre sua propriedade 
              e utilizar o serviço de acordo com as boas práticas agrícolas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitações de Responsabilidade</h2>
            <p className="text-gray-700 mb-4">
              As previsões e análises fornecidas são baseadas em dados e algoritmos de IA, 
              mas não substituem o conhecimento técnico especializado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagamentos e Cancelamento</h2>
            <p className="text-gray-700 mb-4">
              O serviço é cobrado mensalmente por hectare. O cancelamento pode ser feito a qualquer momento 
              através do painel do usuário ou entrando em contato conosco.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contato</h2>
            <p className="text-gray-700">
              Para dúvidas sobre os termos de uso: suporte@agroaiguardian.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 