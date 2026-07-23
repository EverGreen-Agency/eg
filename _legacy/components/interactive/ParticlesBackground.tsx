'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine } from '@tsparticles/engine'

interface ParticlesBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'dark' | 'green' | 'tech'
}

export default function ParticlesBackground({
  children,
  className = '',
  variant = 'light'
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
    await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles container loaded', container)
  }

  const getParticlesConfig = (variant: string) => {
    const baseConfig = {
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          resize: {
            enable: true,
            delay: 0.5
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5
            }
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          direction: 'none',
          outModes: 'bounce',
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.2
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    } as const

    const variants = {
      light: {
        background: {
          color: {
            value: '#ffffff'
          }
        },
        particles: {
          color: {
            value: '#000000'
          },
          links: {
            color: '#000000'
          }
        }
      },
      dark: {
        background: {
          color: {
            value: '#0f172a'
          }
        }
      },
      green: {
        background: {
          color: {
            value: '#0D221B'
          }
        }
      },
      tech: {
        background: {
          color: {
            value: '#1e3a8a'
          }
        },
        particles: {
          color: {
            value: '#93c5fd'
          },
          links: {
            color: '#93c5fd'
          }
        }
      }
    } as const

    return {
      ...baseConfig,
      ...(variants[variant as keyof typeof variants] || variants.light)
    }
  }

  if (!init) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <Particles
        className="absolute inset-0"
        options={getParticlesConfig(variant)}
        particlesLoaded={particlesLoaded}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
} 