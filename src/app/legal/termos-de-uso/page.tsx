import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso - Evergreen MKT',
  description: 'Termos e condições de uso do site e serviços da Evergreen MKT',
}

export default function TermosDeUsoPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
        Termos de Uso
      </h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Introdução
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Bem-vindo ao site da Evergreen MKT. Ao acessar e utilizar nossos serviços, você concorda com estes termos e condições. Por favor, leia atentamente antes de utilizar nossos serviços.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Uso do Site
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <ul className="list-none space-y-4 pl-0">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Você concorda em usar o site apenas para fins legais</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Não deve violar ou tentar violar a segurança do site</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Não deve interferir com o uso e gozo do site por outros usuários</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-200 mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-300">Não deve usar o site para distribuir material ilegal ou prejudicial</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Propriedade Intelectual
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Todo o conteúdo do site, incluindo textos, gráficos, logotipos, ícones, imagens, downloads digitais e software, é propriedade da Evergreen MKT ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais internacionais.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Limitação de Responsabilidade
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              A Evergreen MKT não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o site ou seus serviços.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Modificações dos Termos
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Lei Aplicável
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar conflitos de disposições legais. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais do Brasil.
            </p>
          </div>
        </section>
      </div>
    </>
  )
} 