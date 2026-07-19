'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Marca EG — o "E" estilizado em escada.
 * A marca é formada por 3 barras itálicas (topo longo, meio curto, base longa).
 * A animação faz elas subirem escalonadamente e inclui o glow neon.
 */
export default function EStaircaseMark({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()

  // Três barras paralelogramo (skew à direita) formando o E
  const bars = [
    { points: '24,8 120,8 104,38 8,38', order: 2 },    // topo
    { points: '24,55 96,55 80,85 8,85', order: 1 },    // meio
    { points: '24,102 120,102 104,132 8,132', order: 0 }, // base
  ]

  return (
    <div className={className} aria-hidden>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full drop-shadow-[0_0_35px_rgba(58,201,123,0.5)]"
      >
        <svg viewBox="0 0 128 140" className="w-full h-full" preserveAspectRatio="xMaxYMid meet" role="presentation">
          <defs>
            <linearGradient id="eg-mark-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#2aa562" />
              <stop offset="100%" stopColor="#3AC97B" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {bars.map((bar, i) => (
            <motion.polygon
              key={i}
              points={bar.points}
              fill="url(#eg-mark-grad)"
              filter="url(#neon-glow)"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + bar.order * 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}
