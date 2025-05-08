'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-[#0D221B] text-[#E6E3B1] sticky top-0 z-50 border-b border-gray-200/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-emerald-500 font-bold text-2xl hover:text-emerald-600 transition-colors"
            >
              Evergreen MKT
            </Link>
          </div>

          {/* Menu Principal - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Links Principais */}
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog')
                  ? 'text-emerald-500'
                  : 'text-[#E6E3B1] hover:text-emerald-500'
              }`}
            >
              Blog
            </Link>
            
            <Link
              href="/autoridade"
              className={`text-sm font-medium transition-colors ${
                isActive('/autoridade')
                  ? 'text-emerald-500'
                  : 'text-[#E6E3B1] hover:text-emerald-500'
              }`}
            >
              Autoridade
            </Link>

            {/* Link de Soluções */}
            <Link
              href="/servicos"
              className={`text-sm font-medium transition-colors ${
                isActive('/servicos')
                  ? 'text-emerald-500'
                  : 'text-[#E6E3B1] hover:text-emerald-500'
              }`}
            >
              Soluções
            </Link>

            {/* Link de Benchmark */}
            <Link
              href="/benchmark"
              className={`text-sm font-medium transition-colors ${
                isActive('/benchmark')
                  ? 'text-emerald-500'
                  : 'text-[#E6E3B1] hover:text-emerald-500'
              }`}
            >
              Benchmark
            </Link>

            {/* Recursos Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center text-sm font-medium text-[#E6E3B1] hover:text-emerald-500 transition-colors">
                Recursos
                <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg py-2 bg-[#0D221B] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/newsletter" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Newsletter
                </Link>
                <Link href="/ferramentas" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Recursos Gratuitos
                </Link>
              </div>
            </div>

            {/* Empresa Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center text-sm font-medium text-[#E6E3B1] hover:text-emerald-500 transition-colors">
                Empresa
                <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg py-2 bg-[#0D221B] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/sobre" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Sobre Nós
                </Link>
                <Link href="/equipe" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Nossa Equipe
                </Link>
                <Link href="/eg-tech" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  EG Tech
                </Link>
                <Link href="/eg-lab" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  EG Lab
                </Link>
                <Link href="/eg-os" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  EG Os
                </Link>
                <Link href="/holding" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Holding
                </Link>
                <Link href="/investidores" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Investidores
                </Link>
                <Link href="/niveis-de-cliente" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Níveis de Clientes
                </Link>
                <Link href="/contato" className="block px-4 py-2.5 text-sm text-[#E6E3B1] hover:bg-[#1a3d30] hover:text-emerald-500">
                  Contato
                </Link>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/newsletter"
              className="text-sm font-medium text-[#E6E3B1] hover:text-emerald-500 transition-colors"
            >
              Newsletter
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Agendar Diagnóstico
            </Link>
          </div>

          {/* Menu Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-emerald-500 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-[#0D221B] border-t border-gray-200/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Links principais */}
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Blog</Link>
          <Link href="/autoridade" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Autoridade</Link>
          <Link href="/servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Soluções</Link>
          <Link href="/benchmark" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Benchmark</Link>
          {/* Recursos */}
          <div>
            <span className="block px-3 py-2 text-base font-semibold text-emerald-500">Recursos</span>
            <Link href="/newsletter" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Newsletter</Link>
            <Link href="/ferramentas" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Recursos Gratuitos</Link>
          </div>
          {/* Empresa */}
          <div>
            <span className="block px-3 py-2 text-base font-semibold text-emerald-500">Empresa</span>
            <Link href="/sobre" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Sobre Nós</Link>
            <Link href="/equipe" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Nossa Equipe</Link>
            <Link href="/eg-tech" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">EG Tech</Link>
            <Link href="/eg-lab" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">EG Lab</Link>
            <Link href="/eg-os" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">EG Os</Link>
            <Link href="/holding" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Holding</Link>
            <Link href="/investidores" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Investidores</Link>
            <Link href="/niveis-de-cliente" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Níveis de Clientes</Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="block px-6 py-2 rounded-md text-base font-medium text-[#E6E3B1] hover:text-emerald-500">Contato</Link>
          </div>
          {/* Botão de ação */}
          <Link href="/contato" className="block px-3 py-2 mt-2 rounded-xl text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 text-center">Agendar Diagnóstico</Link>
        </div>
      </div>
    </nav>
  )
} 