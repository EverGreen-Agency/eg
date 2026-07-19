'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Marca EG — Símbolo em Neon (versão evergreen-neon-hero).
 *
 * Utiliza as 4 partes originais da animação:
 * - bar-bottom, bar-middle, bar-top (com preenchimento suave e borda neon)
 * - spine (linha espinha dorsal apenas com borda neon)
 * Inclui o efeito de stage rotacionado em 3D e reflexo (glow) inferior.
 */

export default function EStaircaseMark({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()
  const [isComplete, setIsComplete] = useState(false)

  // Disparar o modo de glow contínuo ("is-complete") após o fim da animação de stroke
  useEffect(() => {
    if (reduce) {
      setIsComplete(true)
      return
    }
    const timer = setTimeout(() => {
      setIsComplete(true)
    }, 3850) // COMPLETE_AFTER_MS
    return () => clearTimeout(timer)
  }, [reduce])

  // Variantes para o desenho das barras (bottom, middle, top)
  const barVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(58,201,123,0)',
      y: 24,
      scale: 0.975,
    },
    visible: (customDelay: number) => ({
      opacity: [0, 1, 1, 1],
      pathLength: [0, 0, 1, 1], // Demora um pouco para completar
      fill: ['rgba(58,201,123,0)', 'rgba(58,201,123,0)', 'rgba(58,201,123,0.045)', 'rgba(58,201,123,0.045)'],
      y: [24, 12, 0, 0],
      scale: [0.975, 1, 1, 1],
      transition: {
        duration: 0.82,
        delay: customDelay,
        ease: [0.2, 0.75, 0.2, 1],
        times: [0, 0.12, 0.72, 1],
      }
    })
  }

  // Variante para o desenho da espinha
  const spineVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: [0, 1, 1],
      pathLength: [0, 0, 1],
      transition: {
        duration: 1.22,
        delay: 2.48, // Tempo exato da versão html
        ease: [0.22, 0.72, 0.22, 1],
        times: [0, 0.08, 1],
      }
    }
  }

  // Variante para o stage girando suavemente em idle
  const hoverVariants = {
    animate: {
      rotateX: [5, 4, 5],
      rotateY: [-7, -5, -7],
      y: [0, -9, 0],
      transition: {
        duration: 5.4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  // Variante para pulsar o neon após carregar
  const glowVariants = {
    animate: {
      filter: [
        'url(#neonGlow)',
        'url(#neonGlowStrong)',
        'url(#neonGlow)'
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className={`relative flex items-center justify-center perspective-[1200px] w-full h-full ${className}`} aria-hidden>
      {/* Sombra arredondada no fundo da imagem visual (do ::after do visual) */}
      <div 
        className="absolute bottom-[8%] left-[7%] right-[2%] h-[26%] rounded-full pointer-events-none opacity-90 blur-[12px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(58,201,123,.20) 0, rgba(58,201,123,.08) 32%, transparent 70%)',
          transform: 'rotateX(68deg)'
        }}
      />

      {/* Stage do Logo com efeito hover 3D */}
      <motion.div
        variants={reduce ? undefined : hoverVariants}
        animate="animate"
        className="relative z-10 w-full max-w-[650px] aspect-square grid place-items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="0 0 616 616"
          className="w-full h-auto overflow-visible"
          role="presentation"
        >
          <defs>
            <filter id="neonGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.3" result="blur1" />
              <feGaussianBlur stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="neonGlowStrong" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="13" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grupo aplicando o pulso de neon quando termina */}
          <motion.g
            variants={reduce ? undefined : glowVariants}
            animate={isComplete ? "animate" : undefined}
            initial={false}
          >
            <motion.path
              className="neon-piece"
              style={{
                stroke: '#69ffad',
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                vectorEffect: 'non-scaling-stroke',
                filter: 'url(#neonGlow)',
                transformOrigin: 'center'
              }}
              d="M43 498H365L435 420H136Z"
              variants={barVariants}
              initial="hidden"
              animate="visible"
              custom={0} // bar-bottom
            />

            <motion.path
              className="neon-piece"
              style={{
                stroke: '#69ffad',
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                vectorEffect: 'non-scaling-stroke',
                filter: 'url(#neonGlow)',
                transformOrigin: 'center'
              }}
              d="M111 347H435L504 270H180Z"
              variants={barVariants}
              initial="hidden"
              animate="visible"
              custom={0.78} // bar-middle
            />

            <motion.path
              className="neon-piece"
              style={{
                stroke: '#69ffad',
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                vectorEffect: 'non-scaling-stroke',
                filter: 'url(#neonGlow)',
                transformOrigin: 'center'
              }}
              d="M180 196H504L573 119H250Z"
              variants={barVariants}
              initial="hidden"
              animate="visible"
              custom={1.56} // bar-top
            />

            <motion.path
              className="neon-piece spine"
              style={{
                stroke: '#69ffad',
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                vectorEffect: 'non-scaling-stroke',
                filter: 'url(#neonGlow)',
                fill: 'none'
              }}
              d="M250 119L180 197V270L111 347V420L43 498"
              variants={spineVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.g>
        </svg>

        {/* Reflexo */}
        <div 
          className="absolute z-[1] w-[76%] h-[24%] bottom-[6%] left-[18%] rounded-full opacity-80 blur-[23px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(105,255,173,.22), rgba(58,201,123,.07) 38%, transparent 72%)',
            transform: 'rotateX(70deg)'
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  )
}
