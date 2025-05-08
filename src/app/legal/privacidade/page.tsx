import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade - Evergreen MKT',
  description: 'Como a Evergreen MKT protege e utiliza seus dados pessoais',
}

export default function PrivacidadePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Política de Privacidade
      </h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Introdução
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Na Evergreen MKT, levamos sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossos serviços.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Informações que Coletamos
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <ul className="list-none space-y-4 pl-0">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Informações de contato (nome, email, telefone)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Dados de navegação e interação com o site</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Informações de pagamento (quando aplicável)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Dados de uso dos nossos serviços</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Como Utilizamos suas Informações
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Melhorar nossos serviços</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizamos seus dados para entender como você interage com nossos serviços e melhorar sua experiência.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Comunicação</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enviamos atualizações importantes sobre nossos serviços e respondemos às suas solicitações.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Segurança</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Protegemos suas informações contra acesso não autorizado e uso indevido.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Compartilhamento de Informações
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Não vendemos suas informações pessoais. Compartilhamos dados apenas com:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Provedores de serviços que nos auxiliam na operação do site</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Autoridades legais quando exigido por lei</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Parceiros de negócios com seu consentimento explícito</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Seus Direitos
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Você tem o direito de:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Acessar suas informações pessoais</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Corrigir dados imprecisos</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Solicitar a exclusão de seus dados</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Retirar seu consentimento para o processamento de dados</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Contato
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco através do email: privacidade@evergreenmkt.com.br
            </p>
          </div>
        </section>
      </div>
    </>
  )
} 