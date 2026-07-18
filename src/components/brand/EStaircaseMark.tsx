'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Marca EG — o "E" estilizado em escada (versão negativa: traços em menta,
 * chão dos degraus vazado deixando o fundo musgo aparecer).
 * Os 3 degraus (traços do E) conectam-se por uma coluna escalonada à esquerda;
 * os entalhes escuros entre eles abrem para a direita (sangram a borda).
 */
const E_POINTS =
  '300,96 680,96 680,174 264,174 238,220 680,220 680,298 202,298 176,344 680,344 680,422 140,422 82,422 118,344 144,298 180,220 206,174 242,96'

export default function EStaircaseMark({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      transition={{
        clipPath: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
        opacity: { duration: 0.6, delay: 0.35 },
      }}
      aria-hidden
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="eg-e-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#2aa562" />
              <stop offset="100%" stopColor="#3AC97B" />
            </linearGradient>
          </defs>
          <polygon points={E_POINTS} fill="url(#eg-e-grad)" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
