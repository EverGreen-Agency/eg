'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface WavesBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export default function WavesBackground({ className = "", children }: WavesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% ${y1}%, #00A86B 0%, transparent 50%),
            radial-gradient(circle at 80% ${y2}%, #4F46E5 0%, transparent 50%),
            radial-gradient(circle at 50% ${y3}%, #9333EA 0%, transparent 50%)
          `
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
} 