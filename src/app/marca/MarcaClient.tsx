'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Download,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Layers,
  Code2,
  Palette,
  Type,
  FileCheck,
} from 'lucide-react'
import CornerBrackets from '@/components/brand/CornerBrackets'

interface ColorSwatch {
  name: string
  role: string
  hex: string
  rgb: string
  pantone?: string
  darkText?: boolean
  border?: boolean
}

const PALETTE: ColorSwatch[] = [
  {
    name: 'Verde Musgo Profundo',
    role: 'Fundo Base & Identidade Principal',
    hex: '#09231B',
    rgb: 'rgb(9, 35, 27)',
    pantone: 'Pantone 5535C',
    border: true,
  },
  {
    name: 'Musgo Deep',
    role: 'Superfícies Profundas & Contraste',
    hex: '#05170F',
    rgb: 'rgb(5, 23, 15)',
    border: true,
  },
  {
    name: 'Verde Menta Vivo',
    role: 'Acento Primário, Sinal & CTAs',
    hex: '#3AC97B',
    rgb: 'rgb(58, 201, 123)',
    pantone: 'Pantone 7479C',
    darkText: true,
  },
  {
    name: 'Amarelo Baunilha Claro',
    role: 'Tipografia Principal & Ênfase',
    hex: '#FFF4C7',
    rgb: 'rgb(255, 244, 199)',
    pantone: 'Pantone 7499C',
    darkText: true,
  },
  {
    name: 'Menta Neon Glow',
    role: 'Luzes de Foco & Efeitos E-Escada',
    hex: '#69FFAD',
    rgb: 'rgb(105, 255, 173)',
    darkText: true,
  },
  {
    name: 'Branco Superfície',
    role: 'Fundos Claros & Contrastes Suaves',
    hex: '#F7F9F8',
    rgb: 'rgb(247, 249, 248)',
    darkText: true,
  },
]

const ASSETS = [
  {
    title: 'Símbolo Oficial (Negativo)',
    desc: 'Traço em Verde Menta sobre fundo transparente/escuro. Uso prioritário no site e interfaces escuras.',
    file: '/brand/evergreen-mark-negativo.svg',
    previewBg: 'bg-musgo-deep',
    aspect: 'square',
    badge: 'SVG Vetorial',
    dimensions: '616 × 616 px',
  },
  {
    title: 'Símbolo Oficial (Positivo)',
    desc: 'Traço em Verde Musgo sobre quadrado Menta com cantos arredondados. Ideal para avatares, apps e fundos claros.',
    file: '/brand/evergreen-mark-positivo.svg',
    previewBg: 'bg-musgo/40',
    aspect: 'square',
    badge: 'SVG Vetorial',
    dimensions: '616 × 616 px',
  },
  {
    title: 'Logotipo Horizontal Completo',
    desc: 'Combinação do Símbolo em escada com a tipografia EverGreen e assinatura Consultoria & Tecnologia.',
    file: '/brand/evergreen-logo.svg',
    previewBg: 'bg-musgo-deep',
    aspect: 'wide',
    badge: 'SVG Vetorial',
    dimensions: '920 × 260 px',
  },
]

export default function MarcaClient() {
  const reduce = useReducedMotion()
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string = 'Código') => {
    navigator.clipboard.writeText(text)
    setCopiedHex(text)
    setCopiedType(label)
    setTimeout(() => {
      setCopiedHex(null)
      setCopiedType(null)
    }, 2400)
  }

  return (
    <main className="min-h-screen bg-musgo grain text-baunilha pb-24 selection:bg-menta selection:text-musgo">
      {/* Toast Notificação de Cópia Global */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-musgo-deep border border-menta/40 shadow-2xl text-sm font-medium transition-all duration-300 ${
          copiedHex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        role="status"
        aria-live="polite"
      >
        <span className="w-2 h-2 rounded-full bg-menta animate-pulse" />
        <span>
          {copiedType || 'Código'} <strong className="text-menta font-mono">{copiedHex}</strong> copiado para a área de transferência!
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b hairline overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[380px] pointer-events-none opacity-30 blur-[140px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(58,201,123,0.35) 0%, rgba(9,35,27,0) 70%)',
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-baunilha/60 hover:text-menta transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Voltar para o Início
          </Link>

          <div className="relative border hairline rounded-3xl bg-musgo-deep/70 backdrop-blur-xl p-8 md:p-14 shadow-2xl">
            <CornerBrackets />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-menta/10 border border-menta/25 text-menta">
                <span className="w-2 h-2 rounded-full bg-menta animate-pulse" />
                BrandKit Oficial v1.0 • Território Previsibilidade &amp; Tech
              </span>

              <span className="text-xs font-mono text-baunilha/40 tracking-wider">
                Manual de Marca • N7HUB &amp; EverGreen
              </span>
            </div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-baunilha max-w-3xl leading-[1.1]"
            >
              Manual de Identidade &amp; <span className="text-menta">Design System</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-base sm:text-lg text-baunilha/75 max-w-2xl leading-relaxed text-balance"
            >
              Todos os elementos visuais, paleta cromática oficial, padrões tipográficos e diretrizes inegociáveis da{' '}
              <strong className="text-baunilha font-semibold">EverGreen Consultoria e Tecnologia</strong>.
              Para squads internos, parceiros, clientes e imprensa.
            </motion.p>

            {/* Banner de Kit Completo */}
            <div className="mt-10 p-6 rounded-2xl border hairline bg-musgo/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-baunilha">
                  <Sparkles className="w-4 h-4 text-menta" />
                  Ativos Vetoriais Prontos para Uso
                </div>
                <p className="text-xs text-baunilha/60 mt-1 max-w-md">
                  Baixe os logotipos oficiais em SVG vetorial de alta precisão diretamente abaixo para uso em apresentações, Figma e aplicações digitais.
                </p>
              </div>

              <a
                href="#logos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-musgo bg-menta hover:bg-[#4be691] transition-all shadow-md active:scale-95 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                Acessar Ativos SVG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares do Território Visual */}
      <section className="py-20 border-b hairline">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-menta mb-2">01 • Posicionamento</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-baunilha">Território Visual da Marca</h2>
            <p className="text-sm text-baunilha/70 mt-2 max-w-2xl">
              O equilíbrio estético da EverGreen transmite precisão analítica corporativa, eliminando ruídos gráficos e fórmulas fáceis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="border hairline rounded-2xl bg-musgo-deep/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-menta block mb-3">50%</span>
                <h3 className="text-base font-bold text-baunilha mb-2">Previsibilidade Comercial</h3>
                <p className="text-xs text-baunilha/70 leading-relaxed">
                  Estruturação do Sistema Raiz (Raiz, Tronco, Ramos, Copa). O design prioriza clareza de dados, tabelas legíveis e sobriedade executiva no tom.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t hairline text-[11px] font-mono text-baunilha/40 uppercase">
                Tom: Firme • Confiável • Estruturado
              </div>
            </article>

            <article className="border hairline rounded-2xl bg-musgo-deep/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-menta block mb-3">30%</span>
                <h3 className="text-base font-bold text-baunilha mb-2">Tecnologia &amp; Automação</h3>
                <p className="text-xs text-baunilha/70 leading-relaxed">
                  Maturidade digital e IA aplicada sem artifícios mágicos. Tipografia monoespaciada para rótulos técnicos e dados de instrumentação em tempo real.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t hairline text-[11px] font-mono text-baunilha/40 uppercase">
                Tom: Cirúrgico • Preciso • AI-First
              </div>
            </article>

            <article className="border hairline rounded-2xl bg-musgo-deep/50 p-6 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-menta block mb-3">20%</span>
                <h3 className="text-base font-bold text-baunilha mb-2">Rigor de Execução</h3>
                <p className="text-xs text-baunilha/70 leading-relaxed">
                  Garantia de cadência e compromisso factual. A marca não promete números mágicos de faturamento; ela prova método e consistência de processo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t hairline text-[11px] font-mono text-baunilha/40 uppercase">
                Tom: Honesto • Auditável • Factual
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Símbolo e Logotipos */}
      <section id="logos" className="py-20 border-b hairline scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-menta mb-2">02 • Ativos Oficiais</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-baunilha">O Símbolo &ldquo;E em Escada&rdquo;</h2>
            <p className="text-sm text-baunilha/70 mt-2 max-w-2xl">
              O símbolo proprietário da EverGreen representa os 3 degraus de ascensão comercial conectados por uma coluna escalonada à esquerda.
              O espaço vazado é o chão de cada patamar de evolução.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ASSETS.map((asset) => (
              <div
                key={asset.file}
                className="group relative border hairline rounded-2xl bg-musgo-deep/50 hover:bg-musgo-deep/80 hover:border-menta/30 transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-menta/90 bg-menta/10 px-2.5 py-0.5 rounded-full border border-menta/20">
                      {asset.badge}
                    </span>
                    <span className="text-[11px] font-mono text-baunilha/40">{asset.dimensions}</span>
                  </div>

                  <div
                    className={`relative w-full h-44 rounded-xl ${asset.previewBg} border border-menta/10 flex items-center justify-center p-6 overflow-hidden mb-5 group-hover:border-menta/30 transition-colors`}
                  >
                    <Image
                      src={asset.file}
                      alt={asset.title}
                      width={asset.aspect === 'wide' ? 220 : 110}
                      height={110}
                      className="object-contain max-h-28 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-base font-bold text-baunilha group-hover:text-menta transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-xs text-baunilha/65 mt-1.5 leading-relaxed">
                    {asset.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t hairline flex items-center justify-between">
                  <a
                    href={asset.file}
                    download
                    className="inline-flex items-center gap-2 text-xs font-semibold text-musgo bg-menta hover:bg-[#4be691] px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Baixar SVG
                  </a>
                  <a
                    href={asset.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-baunilha/50 hover:text-baunilha transition-colors flex items-center gap-1"
                  >
                    Abrir <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paleta de Cores */}
      <section id="cores" className="py-20 border-b hairline scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-menta mb-2">03 • Sistema Cromático</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-baunilha">Paleta Cromática Oficial</h2>
            <p className="text-sm text-baunilha/70 mt-2">
              Clique em qualquer card para copiar instantaneamente o código hexadecimal ou use os atalhos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PALETTE.map((color) => {
              const isCopied = copiedHex === color.hex
              return (
                <button
                  type="button"
                  key={color.hex}
                  onClick={() => copyToClipboard(color.hex, 'HEX')}
                  className="group relative text-left border hairline rounded-2xl bg-musgo-deep/40 hover:bg-musgo-deep/80 hover:border-menta/40 transition-all p-5 flex flex-col justify-between overflow-hidden cursor-pointer active:scale-[0.99]"
                >
                  <div
                    className={`w-full h-24 rounded-xl mb-4 relative transition-transform duration-300 group-hover:scale-[1.02] ${
                      color.border ? 'border border-menta/20' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {isCopied && (
                      <span className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center text-menta font-mono text-xs font-bold gap-1.5 rounded-xl animate-in fade-in">
                        <Check className="w-4 h-4" /> Copiado!
                      </span>
                    )}

                    {!isCopied && (
                      <div className="absolute top-2.5 right-2.5">
                        <span className="p-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Copy className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-baunilha group-hover:text-menta transition-colors">
                        {color.name}
                      </h3>
                      <span className="text-xs font-mono text-menta font-semibold">
                        {color.hex}
                      </span>
                    </div>
                    <p className="text-xs text-baunilha/60 mt-1">{color.role}</p>

                    <div className="mt-3 pt-3 border-t hairline flex items-center justify-between text-[11px] font-mono text-baunilha/40">
                      <span>{color.rgb}</span>
                      {color.pantone && <span>{color.pantone}</span>}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tipografia */}
      <section id="tipografia" className="py-20 border-b hairline scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-menta mb-2">04 • Tipografia</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-baunilha">Fontes Oficiais</h2>
            <p className="text-sm text-baunilha/70 mt-2 max-w-2xl">
              Equilíbrio entre a autoridade corporativa da Helvetica Neue e a precisão analítica da IBM Plex Mono.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border hairline rounded-2xl bg-musgo-deep/50 p-8">
              <span className="text-xs font-mono text-menta uppercase tracking-widest block mb-2">
                Principal • Títulos &amp; Leitura
              </span>
              <h3 className="text-3xl font-bold text-baunilha font-sans">Helvetica Neue</h3>
              <p className="text-xs text-baunilha/60 mt-2 font-mono">Fallback: Inter, -apple-system, sans-serif</p>
              <p className="text-sm text-baunilha/70 mt-4 leading-relaxed">
                Utilizada para títulos principais (H1–H4), parágrafos de apresentação, diagnósticos e navegação geral do site.
              </p>
              <div className="mt-6 pt-6 border-t hairline font-sans text-xl font-medium tracking-tight text-baunilha/90">
                Aa Bb Cc Dd Ee Ff Gg 0123456789
              </div>
            </div>

            <div className="border hairline rounded-2xl bg-musgo-deep/50 p-8">
              <span className="text-xs font-mono text-menta uppercase tracking-widest block mb-2">
                Técnica • Instrumentação &amp; Tags
              </span>
              <h3 className="text-3xl font-bold text-menta font-mono">IBM Plex Mono</h3>
              <p className="text-xs text-baunilha/60 mt-2 font-mono">Token: font-mono • tracking-[0.22em]</p>
              <p className="text-sm text-baunilha/70 mt-4 leading-relaxed">
                Utilizada em rótulos analíticos, numerais de métricas, parâmetros de sistema, indicadores de status e código.
              </p>
              <div className="mt-6 pt-6 border-t hairline font-mono text-lg text-menta/90 tracking-widest">
                01 02 03 [STATUS_OK] // 100%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regras de Ouro */}
      <section id="regras" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-menta mb-2">05 • Diretrizes de Uso</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-baunilha">Regras de Ouro</h2>
            <p className="text-sm text-baunilha/70 mt-2">
              Princípios inegociáveis para preservar a integridade da marca em qualquer meio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-menta/30 rounded-2xl bg-musgo-deep/60 p-8 relative overflow-hidden">
              <div className="flex items-center gap-2.5 text-menta font-semibold text-base mb-4">
                <ShieldCheck className="w-5 h-5" />
                O que fazer
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-baunilha/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-menta font-bold">•</span>
                  <span>Escrever sempre como <strong>EverGreen</strong> (com E e G maiúsculos, sem espaço).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-menta font-bold">•</span>
                  <span>Aplicar o símbolo sempre com área de respiro equivalente a pelo menos 50% de sua largura.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-menta font-bold">•</span>
                  <span>Utilizar o Verde Menta (<code className="text-menta font-mono">#3AC97B</code>) exclusivamente para acentos, dados positivos e ações direcionadas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-menta font-bold">•</span>
                  <span>Manter a promessa central: previsibilidade, processos comerciais estruturados e tecnologia aplicada.</span>
                </li>
              </ul>
            </div>

            <div className="border border-red-500/30 rounded-2xl bg-musgo-deep/60 p-8 relative overflow-hidden">
              <div className="flex items-center gap-2.5 text-red-400 font-semibold text-base mb-4">
                <AlertCircle className="w-5 h-5" />
                O que NÃO fazer
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-baunilha/80 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Nunca distorcer, rotacionar desproporcionalmente ou alterar os ângulos do símbolo E em escada.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Não usar gradientes roxos, azuis elétricos ou estéticas genéricas de &ldquo;IA mágica&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Não prometer garantia de faturamento financeiro de clientes (a garantia da EverGreen é de cadência e execução).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Não utilizar o logotipo sobre fundos claros com baixo contraste ou texturas ruidosas sem isolamento.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
