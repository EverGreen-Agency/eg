import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D221B] text-[#E6E3B1]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-emerald-500 font-bold text-2xl">
              Evergreen MKT
            </Link>
            <p className="mt-4 text-sm text-[#E6E3B1]">
              Transformando negócios através de growth, tecnologia e resultados reais.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://www.linkedin.com/company/106525857" className="text-[#E6E3B1] hover:text-emerald-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/eg.mkt_of/" className="text-[#E6E3B1] hover:text-emerald-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/5511959780701" className="text-[#E6E3B1] hover:text-emerald-500">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 3C9.383 3 4 8.383 4 15c0 2.646.844 5.09 2.293 7.127L4.062 29.25a1 1 0 0 0 1.312 1.312l7.123-2.23A12.94 12.94 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-1.77 0-3.484-.465-4.977-1.344a1 1 0 0 0-.82-.09l-5.09 1.594 1.594-5.09a1 1 0 0 0-.09-.82A9.963 9.963 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.406-7.594c-.297-.148-1.758-.867-2.031-.965-.273-.098-.47-.148-.668.148-.195.297-.766.965-.94 1.164-.172.195-.348.223-.645.074-.297-.148-1.254-.463-2.39-1.477-.883-.789-1.48-1.762-1.652-2.059-.172-.297-.018-.457.13-.605.133-.133.297-.348.445-.523.148-.172.195-.297.297-.496.098-.195.049-.371-.025-.52-.074-.148-.668-1.613-.914-2.211-.242-.582-.487-.504-.668-.514-.172-.008-.371-.01-.57-.01a1.1 1.1 0 0 0-.797.371c-.273.297-1.043 1.016-1.043 2.477 0 1.461 1.066 2.875 1.215 3.074.148.195 2.102 3.215 5.09 4.383.711.307 1.264.49 1.697.629.713.227 1.362.195 1.875.119.572-.086 1.758-.719 2.008-1.414.246-.695.246-1.289.172-1.414-.072-.125-.266-.199-.559-.348z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-[#E6E3B1] tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/sobre" className="text-[#E6E3B1] hover:text-emerald-500">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-[#E6E3B1] hover:text-emerald-500">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/autoridade" className="text-[#E6E3B1] hover:text-emerald-500">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#E6E3B1] hover:text-emerald-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-sm font-semibold text-[#E6E3B1] tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/legal/termos-de-uso" className="text-[#E6E3B1] hover:text-emerald-500">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidade" className="text-[#E6E3B1] hover:text-emerald-500">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-[#E6E3B1] hover:text-emerald-500">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#E6E3B1]/10 pt-8">
          <p className="text-sm text-[#E6E3B1] text-center">
            © {currentYear} Evergreen MKT. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 