import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies - Evergreen MKT',
  description: 'Entenda como utilizamos cookies para melhorar sua experiência no site da Evergreen MKT',
}

export default function CookiesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Política de Cookies
      </h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            O que são cookies?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência, entender como você interage com nosso site e personalizar o conteúdo para você.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Como utilizamos os cookies?
          </h2>
          <ul className="list-none space-y-4 pl-0">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-600 dark:text-gray-300">Autenticação e segurança</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-600 dark:text-gray-300">Preferências do usuário</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-600 dark:text-gray-300">Análise de desempenho</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-600 dark:text-gray-300">Marketing e publicidade</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Tipos de cookies que utilizamos
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Cookies Essenciais</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Necessários para o funcionamento básico do site. Não podem ser desativados.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Cookies de Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos ajudam a entender como os visitantes interagem com nosso site.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Cookies de Funcionalidade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Permitem que o site se lembre de suas escolhas e preferências.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Como gerenciar seus cookies
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e configurar a maioria dos navegadores para impedir que eles sejam colocados. Se você fizer isso, talvez precise ajustar manualmente algumas preferências toda vez que visitar um site.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Atualizações desta política
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Podemos atualizar esta política de cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos usando cookies.
            </p>
          </div>
        </section>
      </div>
    </>
  )
} 