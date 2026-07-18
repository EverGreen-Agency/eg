'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Cabeçalho padrão das páginas internas — mesma linguagem do hero da home:
 * eyebrow mono (rótulo de instrumento) + headline gigante + subtítulo opcional.
 */
export default function PageHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  children,
}: {
  eyebrow: string
  title: ReactNode
  /** trecho do título em menta (renderizado após `title`) */
  accent?: string
  subtitle?: ReactNode
  children?: ReactNode
}) {
  const reduce = useReducedMotion()

  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b hairline bg-[radial-gradient(60%_60%_at_85%_0%,rgba(58,201,123,0.08),transparent_70%)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mono-label text-menta mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-menta/50" aria-hidden />
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.04] tracking-tight font-bold text-baunilha max-w-4xl text-balance"
        >
          {title}
          {accent && <span className="text-menta">{accent}</span>}
        </motion.h1>

        {subtitle && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg text-baunilha/70"
          >
            {subtitle}
          </motion.div>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </header>
  )
}
