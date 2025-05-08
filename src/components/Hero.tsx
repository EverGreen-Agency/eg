import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
            Soluções Inovadoras para seu Negócio
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Oferecemos uma ampla gama de serviços especializados para impulsionar seu crescimento e sucesso
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contato"
              className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Entre em Contato
            </Link>
            <Link href="/sobre" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
              Saiba Mais <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 