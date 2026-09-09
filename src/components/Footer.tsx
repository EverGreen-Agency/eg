import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-musgo-deep text-baunilha border-t hairline relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,rgba(58,201,123,0.05),transparent_60%)]" aria-hidden />
      
      <div className="container relative z-[2] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/evergreen-horizontal.png"
                alt="EverGreen"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-baunilha/65 max-w-sm mb-8 leading-relaxed">
              Consultoria comercial e tecnológica para operações B2B. A força por trás de crescimentos previsíveis, escaláveis e tecnológicos.
            </p>
            
            {/* Partner Badges */}
            <div className="flex flex-wrap gap-6 items-center">
              <a href="https://www.kommo.com/partners/evergreen-mkt/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/kommopartner.png"
                  alt="Kommo Partner"
                  width={110}
                  height={50}
                  className="object-contain"
                />
              </a>
              <a href="https://skillshop.credential.net/dada6b71-4bff-467f-a775-ea559be3de45#acc.omjPgL9M" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/google_certification.png"
                  alt="Google Mobile Conversion Certification"
                  width={110}
                  height={50}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <p className="mono-label text-menta mb-6">Empresa</p>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-baunilha/70 hover:text-menta transition-colors">
                  Sobre a EverGreen
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-baunilha/70 hover:text-menta transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-baunilha/70 hover:text-menta transition-colors">
                  Portfólio de Projetos
                </Link>
              </li>
              <li>
                <Link href="/marca" className="text-baunilha/70 hover:text-menta transition-colors">
                  BrandKit Oficial
                </Link>
              </li>
              <li>
                <Link href="/autoridade" className="text-baunilha/70 hover:text-menta transition-colors">
                  Autoridade
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-baunilha/70 hover:text-menta transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Legais & Redes */}
          <div>
            <p className="mono-label text-menta mb-6">Legal & Redes</p>
            <ul className="space-y-4 mb-10">
              <li>
                <Link href="/legal/termos-de-uso" className="text-baunilha/70 hover:text-menta transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidade" className="text-baunilha/70 hover:text-menta transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politicas-de-reembolso" className="text-baunilha/70 hover:text-menta transition-colors">
                  Política de Reembolso
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-baunilha/70 hover:text-menta transition-colors">
                  Gestão de Cookies
                </Link>
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="https://github.com/EverGreen-Agency" target="_blank" rel="noopener noreferrer" className="text-baunilha/40 hover:text-menta transition-colors" aria-label="GitHub">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/106525857" target="_blank" rel="noopener noreferrer" className="text-baunilha/40 hover:text-menta transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://www.instagram.com/eg.mkt_of/" target="_blank" rel="noopener noreferrer" className="text-baunilha/40 hover:text-menta transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://wa.me/5511989966989" target="_blank" rel="noopener noreferrer" className="text-baunilha/40 hover:text-menta transition-colors" aria-label="WhatsApp">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t hairline flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono-label text-baunilha/40">
            © {currentYear} EverGreen Consultoria e Tecnologia Ltda.
          </p>
          <p className="mono-label text-baunilha/40">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}