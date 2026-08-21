'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, CircleDot, Menu, MousePointer2, X } from 'lucide-react'
import { getGrowthData, type CaseContentSection, type Language, type MethodKey, type MethodModule } from './data'
import styles from './growth.module.css'

const ease = [0.22, 1, 0.36, 1] as const
const whatsappUrl = process.env.NEXT_PUBLIC_EG_WHATSAPP_URL || '/contato'
const leverRelations: Record<number, number[]> = {
  0: [1, 2],       // Oferta → Aquisição, Experiência
  1: [0, 2, 3, 6], // Aquisição → Oferta, Experiência, Dados, Processo
  2: [0, 1, 6],    // Experiência → Oferta, Aquisição, Processo
  3: [1, 4, 6],    // Dados → Aquisição, Tecnologia, Processo
  4: [3, 5, 6],    // Tecnologia → Dados, Pessoas, Processo
  5: [4, 6],       // Pessoas → Tecnologia, Processo
  6: [1, 2, 3, 4, 5],
}

const capabilityPositions = [
  { x: 16, y: 18, group: 'Receita' },
  { x: 50, y: 9, group: 'Demanda' },
  { x: 82, y: 20, group: 'Experiência' },
  { x: 91, y: 52, group: 'Infraestrutura' },
  { x: 76, y: 84, group: 'Inteligência' },
  { x: 45, y: 92, group: 'Alavancagem' },
  { x: 15, y: 80, group: 'Alavancagem' },
  { x: 8, y: 51, group: 'Receita' },
  { x: 68, y: 52, group: 'Produto' },
]

const capabilityRelations: Record<number, number[]> = {
  0: [4, 5, 7],       // CRM
  1: [2, 3, 4, 7],    // Mídia
  2: [1, 3, 4],       // CRO
  3: [2, 4, 8],       // Web
  4: [0, 1, 5, 6, 7, 8], // Dados
  5: [0, 4, 6],       // Automação
  6: [4, 5, 8],       // IA
  7: [0, 1, 4],       // RevOps
  8: [3, 4, 6],       // Produto
}

function polarPoint(radius: number, angle: number) {
  const radians = (angle - 90) * Math.PI / 180
  return {
    x: Number((50 + radius * Math.cos(radians)).toFixed(5)),
    y: Number((50 + radius * Math.sin(radians)).toFixed(5)),
  }
}

function sectorPath(index: number, totalLevers: number, expanded = false) {
  const span = 360 / totalLevers
  const startAngle = index * span + 1.2
  const endAngle = (index + 1) * span - 1.2
  const outerRadius = expanded ? 49 : 45.5
  const innerRadius = expanded ? 18.5 : 20
  const outerStart = polarPoint(outerRadius, startAngle)
  const outerEnd = polarPoint(outerRadius, endAngle)
  const innerEnd = polarPoint(innerRadius, endAngle)
  const innerStart = polarPoint(innerRadius, startAngle)
  return `M ${outerStart.x} ${outerStart.y} A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y} Z`
}

function sectorLabelPoint(index: number, totalLevers: number) {
  const span = 360 / totalLevers
  return polarPoint(33, index * span + span / 2)
}

function capabilitySectorPath(index: number, totalCaps: number, expanded = false) {
  const span = 360 / totalCaps
  const startAngle = index * span + 1
  const endAngle = (index + 1) * span - 1
  const outerRadius = expanded ? 49 : 45.5
  const innerRadius = expanded ? 18.5 : 20
  const outerStart = polarPoint(outerRadius, startAngle)
  const outerEnd = polarPoint(outerRadius, endAngle)
  const innerEnd = polarPoint(innerRadius, endAngle)
  const innerStart = polarPoint(innerRadius, startAngle)
  return `M ${outerStart.x} ${outerStart.y} A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y} Z`
}

function capabilityLabelPoint(index: number, totalCaps: number) {
  const span = 360 / totalCaps
  return polarPoint(33, index * span + span / 2)
}

function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const target = window as typeof window & { dataLayer?: Record<string, unknown>[] }
  target.dataLayer = target.dataLayer || []
  target.dataLayer.push({ event, ...data })
}

function replaceExperienceUrl(url: string) {
  if (typeof window === 'undefined') return
  window.history.replaceState(window.history.state, '', url)
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className={styles.eyebrow}><span />{children}</div>
}

function SectionTitle({ eyebrow, children, lead }: { eyebrow: string; children: React.ReactNode; lead?: string }) {
  return <div className={styles.titleBlock}><Eyebrow>{eyebrow}</Eyebrow><h2>{children}</h2>{lead && <p>{lead}</p>}</div>
}

function CaseSectionCopy({ section }: { section: CaseContentSection }) {
  return <>
    {section.title && <h4>{section.title}</h4>}
    <div className={styles.caseBlocks}>{section.blocks.map((block, index) => {
      if (block.type === 'lead') return <h5 key={index}>{block.text}</h5>
      if (block.type === 'paragraph') return <p key={index}>{block.text}</p>
      if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>
      if (block.type === 'points') return <ul key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ul>
      if (block.type === 'metrics') return <div key={index} className={styles.caseMetrics}>{block.items.map(item => <strong key={item}>{item}</strong>)}</div>
      if (block.type === 'flow') return <div key={index} className={styles.caseFlow}>{block.items.map(item => <span key={item}>{item}</span>)}</div>
      if (block.type === 'group') return <div key={index} className={styles.caseGroup}><strong>{block.title}</strong>{block.text && <p>{block.text}</p>}{block.items && <ul>{block.items.map(item => <li key={item}>{item}</li>)}</ul>}</div>
      return null
    })}</div>
  </>
}

function EGMark() {
  return (
    <div className={styles.markWrap} aria-hidden="true">
      <motion.div className={styles.markGlow} animate={{ scale: [1, 1.12, 1], opacity: [.4, .72, .4] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.img className={styles.mark} src="/images/evergreen-icon.png" alt="" initial={{ opacity: 0, scale: .88, rotateY: -20 }} animate={{ opacity: 1, scale: 1, rotateY: -10 }} transition={{ duration: 1.15, ease }} />
      <div className={styles.orbit}><i /><i /><i /></div>
    </div>
  )
}

function DiagnosticSimulation({ lang }: { lang: Language }) {
  const rows = lang === 'en' ? [
    { label: 'Leads', value: 120, rate: '100%', loss: 0 },
    { label: 'Initiated contacts', value: 82, rate: '68%', loss: 38 },
    { label: 'Qualified leads', value: 46, rate: '56%', loss: 36, alert: true },
    { label: 'Proposals', value: 18, rate: '39%', loss: 28 },
    { label: 'Sales', value: 5, rate: '28%', loss: 13 },
  ] : [
    { label: 'Leads', value: 120, rate: '100%', loss: 0 },
    { label: 'Contatos iniciados', value: 82, rate: '68%', loss: 38 },
    { label: 'Leads qualificados', value: 46, rate: '56%', loss: 36, alert: true },
    { label: 'Propostas', value: 18, rate: '39%', loss: 28 },
    { label: 'Vendas', value: 5, rate: '28%', loss: 13 },
  ]
  const [active, setActive] = useState(2)
  return (
    <div className={styles.simulation}>
      <div className={styles.simHeader}><span>{lang === 'en' ? 'CONCEPTUAL SIMULATION' : 'SIMULAÇÃO CONCEITUAL'}</span><span>{lang === 'en' ? 'Focus: leakage' : 'Foco: vazamento'}</span></div>
      <div className={styles.funnel}>
        {rows.map((row, index) => <button key={row.label} onClick={() => setActive(index)} className={`${styles.funnelRow} ${active === index ? styles.active : ''} ${row.alert ? styles.alert : ''}`}>
          <span>{row.label}</span><strong>{row.value}</strong><small>{row.rate} {lang === 'en' ? 'pass' : 'passagem'}</small>
        </button>)}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={styles.insight}>
        <CircleDot size={16} />
        <div><b>{active === 2 ? (lang === 'en' ? 'The main leak is not in demand generation.' : 'O maior vazamento não está na geração.') : `${rows[active].loss} ${lang === 'en' ? 'opportunities dropped off here.' : 'oportunidades não avançaram aqui.'}`}</b><p>{active === 2 ? (lang === 'en' ? 'Buying more ads before fixing sales response → qualification will likely increase waste.' : 'Comprar mais mídia antes de corrigir atendimento → qualificação provavelmente aumentaria desperdício.') : (lang === 'en' ? 'Read rates in context before turning them into decisions.' : 'A taxa precisa ser lida com contexto antes de virar uma decisão.')}</p></div>
      </motion.div>
    </div>
  )
}

function MethodDetail({ method, onClose, data, lang }: { method: MethodKey; onClose: () => void; data: MethodModule; lang: Language }) {
  return (
    <motion.div layoutId={`method-${method}`} className={styles.methodDetail}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close detail"><X size={19} /></button>
      <div className={styles.methodDetailIntro}><span>{data.number} / {lang === 'en' ? 'EG METHOD' : 'MÉTODO EG'}</span><h3>{data.title}</h3><p>{data.headline}</p></div>
      <div className={styles.methodGroups}>{data.groups.map(group => <div key={group.title}><small>{group.title}</small>{group.items.map(item => <span key={item}>{item}</span>)}</div>)}</div>
      {method === 'diagnostico' && <DiagnosticSimulation lang={lang} />}
      {method === 'arquitetura' && <div className={styles.architectureMap}>{['Lead source', 'Landing page', 'CRM', 'Pipeline', 'Sales response', 'Follow-up', 'Dashboard'].map((n, i) => <div key={n} style={{ '--i': i } as React.CSSProperties}>{n}</div>)}</div>}
      {method === 'implementacao' && <div className={styles.priorityNote}>{lang === 'en' ? 'Prioritize' : 'Priorizar'} <ChevronRight size={16} /> {lang === 'en' ? 'impact' : 'impacto'} <ChevronRight size={16} /> {lang === 'en' ? 'effort' : 'esforço'} <ChevronRight size={16} /> {lang === 'en' ? 'urgency' : 'urgência'}</div>}
      {method === 'operacao' && <div className={styles.sparkline}><svg viewBox="0 0 500 100"><motion.path d="M0 84 C70 70 90 82 145 55 S245 70 290 38 S380 51 500 8" fill="none" stroke="currentColor" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} /></svg><span>{lang === 'en' ? 'Tracking example · trend + hypothesis + action' : 'Exemplo de acompanhamento · tendência + hipótese + ação'}</span></div>}
      {method === 'evolucao' && <div className={styles.liveRoadmap}>{(lang === 'en' ? ['Now', '30 days', '90 days', 'Quarter', '12 months'] : ['Agora', '30 dias', '90 dias', 'Trimestre', '12 meses']).map((item, i) => <div key={item}><i /><span>{item}</span><small>{i < 2 ? (lang === 'en' ? 'Structure' : 'Estruturar') : i < 4 ? (lang === 'en' ? 'Validate' : 'Validar') : (lang === 'en' ? 'Scale' : 'Escalar')}</small></div>)}</div>}
    </motion.div>
  )
}

export default function GrowthExperience() {
  const reduceMotion = useReducedMotion()
  const [lang, setLang] = useState<Language>('pt')
  const [activeSection, setActiveSection] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const [problem, setProblem] = useState(0)
  const [lever, setLever] = useState(0)
  const [systemEngaged, setSystemEngaged] = useState(false)
  const [hoveredLever, setHoveredLever] = useState<number | null>(null)
  const [systemSimulation, setSystemSimulation] = useState(false)
  const [method, setMethod] = useState<MethodKey | null>(null)
  const [capability, setCapability] = useState(0)
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null)
  const [caseId, setCaseId] = useState<string | null>(null)
  const [caseStep, setCaseStep] = useState(0)
  const [answered, setAnswered] = useState<boolean | null>(null)

  const [scrolled, setScrolled] = useState(false)

  const { sections, problems, systemLevers, methodModules, capabilities, cases, caseSummary, manifesto, t } = useMemo(() => getGrowthData(lang), [lang])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang')
    if (urlLang === 'en' || urlLang === 'pt') {
      setLang(urlLang)
    } else {
      const savedLang = localStorage.getItem('eg_lang')
      if (savedLang === 'en' || savedLang === 'pt') {
        setLang(savedLang)
      }
    }
  }, [])

  const changeLang = (newLang: Language) => {
    setLang(newLang)
    try {
      localStorage.setItem('eg_lang', newLang)
    } catch {}
    const params = new URLSearchParams(window.location.search)
    if (newLang === 'en') {
      params.set('lang', 'en')
    } else {
      params.delete('lang')
    }
    const newQuery = params.toString() ? `?${params.toString()}` : ''
    replaceExperienceUrl(`${window.location.pathname}${newQuery}${window.location.hash}`)
  }

  useEffect(() => {
    if (!caseId) return
    const htmlOverflow = document.documentElement.style.overflow
    const bodyOverflow = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = htmlOverflow
      document.body.style.overflow = bodyOverflow
    }
  }, [caseId])

  const [caseSummaryVisible, setCaseSummaryVisible] = useState(false)

  const scrollTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, index))
    setCardIndex(null)
    setCaseSummaryVisible(false)
    setSystemEngaged(false)
    setHoveredLever(null)
    setHoveredCapability(null)
    setLever(0)
    setCapability(0)
    document.getElementById(sections[next].id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    setNavOpen(false)
  }, [reduceMotion, sections])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const explore = params.get('explore') as MethodKey | null
    const requestedCase = params.get('case')
    if (explore && methodModules[explore]) { setMethod(explore); setTimeout(() => scrollTo(3), 100) }
    if (requestedCase && cases.some(item => item.id === requestedCase)) { setCaseId(requestedCase); setTimeout(() => scrollTo(7), 100) }
    track('presentation_started')
  }, [scrollTo, methodModules, cases])

  useEffect(() => {
    const observers = sections.map((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(index)
          setCardIndex(null)
          setCaseSummaryVisible(false)
          track('section_viewed', { section: section.id })
          if (section.id === 'contato') track('presentation_completed')
        }
      }, { threshold: [0.2, 0.45], rootMargin: '-10% 0px -10% 0px' })
      observer.observe(element)
      return observer
    })
    return () => observers.forEach(observer => observer?.disconnect())
  }, [sections])

  const openMethod = useCallback((key: MethodKey) => {
    setMethod(key)
    track('method_viewed', { method: key })
    replaceExperienceUrl(`${window.location.pathname}?explore=${key}#metodo`)
  }, [])

  const closeMethod = useCallback(() => {
    setMethod(null)
    replaceExperienceUrl(`${window.location.pathname}#metodo`)
  }, [])

  const openCase = useCallback((id: string) => {
    setCaseStep(0)
    setCaseId(id)
    track('case_viewed', { case: id })
    replaceExperienceUrl(`${window.location.pathname}?case=${id}#evidencias`)
  }, [])

  const [cardIndex, setCardIndex] = useState<number | null>(null)

  const currentCase = useMemo(() => cases.find(item => item.id === caseId), [caseId, cases])

  const methodKeys = useMemo<MethodKey[]>(() => ['diagnostico', 'arquitetura', 'implementacao', 'operacao', 'evolucao'], [])

  useEffect(() => {
    setCardIndex(null)
  }, [activeSection])

  useEffect(() => {
    const onWheel = () => {
      setCardIndex(null)
      setCaseSummaryVisible(false)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  const getSectionCardCount = useCallback((sectionIdx: number) => {
    switch (sectionIdx) {
      case 1: return problems.length
      case 3: return 5
      case 7: return cases.length
      default: return 0
    }
  }, [problems.length, cases.length])

  const syncSectionCardState = useCallback((sectionIdx: number, cIdx: number) => {
    if (sectionIdx === 1) setProblem(cIdx)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const isFormElement = ['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement)?.tagName)
      if (isFormElement) return

      if (event.key === 'Escape') {
        setMethod(null)
        setCaseId(null)
        setNavOpen(false)
        setCardIndex(null)
        setCaseSummaryVisible(false)
        replaceExperienceUrl(window.location.pathname)
        return
      }

      const isNext = ['ArrowDown', 'ArrowRight', 'PageDown'].includes(event.key)
      const isPrev = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)

      // 1. Navigation inside Cases section (Section 7: #evidencias)
      if (activeSection === 7 || caseId !== null) {
        if (isNext) {
          event.preventDefault()
          if (caseId && currentCase) {
            if (caseStep < currentCase.sections.length - 1) {
              setCaseStep(s => s + 1)
            } else {
              const currentCaseIdx = cases.findIndex(item => item.id === caseId)
              setCaseId(null)
              if (currentCaseIdx >= 0 && currentCaseIdx < cases.length - 1) {
                openCase(cases[currentCaseIdx + 1].id)
              } else {
                replaceExperienceUrl(`${window.location.pathname}#evidencias`)
                document.querySelector('.' + styles.caseCommon)?.scrollIntoView({ behavior: 'smooth' })
                setCaseSummaryVisible(true)
              }
            }
          } else if (!caseSummaryVisible) {
            openCase(cases[0].id)
          } else {
            setCaseSummaryVisible(false)
            scrollTo(8)
          }
          return
        }

        if (isPrev) {
          event.preventDefault()
          if (caseId && currentCase) {
            if (caseStep > 0) {
              setCaseStep(s => s - 1)
            } else {
              const currentCaseIdx = cases.findIndex(item => item.id === caseId)
              setCaseId(null)
              if (currentCaseIdx > 0) {
                openCase(cases[currentCaseIdx - 1].id)
              } else {
                replaceExperienceUrl(`${window.location.pathname}#evidencias`)
                scrollTo(7)
              }
            }
          } else if (caseSummaryVisible) {
            setCaseSummaryVisible(false)
            openCase(cases[cases.length - 1].id)
          } else {
            scrollTo(6)
          }
          return
        }
      }

      // 2. Navigation inside System Wheel section (Section 2: #sistema)
      if (activeSection === 2) {
        if (isNext) {
          event.preventDefault()
          setHoveredLever(null)
          if (!systemEngaged) {
            setLever(0)
            setSystemEngaged(true)
            setSystemSimulation(false)
          } else if (lever < systemLevers.length - 1) {
            setLever(l => Math.min(systemLevers.length - 1, l + 1))
            setSystemSimulation(false)
          } else {
            setSystemEngaged(false)
            setLever(0)
            scrollTo(3)
          }
          return
        }
        if (isPrev) {
          event.preventDefault()
          setHoveredLever(null)
          if (systemEngaged && lever > 0) {
            setLever(l => Math.max(0, l - 1))
            setSystemSimulation(false)
          } else if (systemEngaged && lever === 0) {
            setSystemEngaged(false)
            setLever(0)
          } else {
            scrollTo(1)
          }
          return
        }
      }

      // 3. Navigation inside Method section (Section 3: #metodo)
      if (activeSection === 3 || method !== null) {
        if (isNext) {
          event.preventDefault()
          if (!method) {
            openMethod(methodKeys[0])
          } else {
            const currentIndex = methodKeys.indexOf(method)
            if (currentIndex < methodKeys.length - 1) {
              openMethod(methodKeys[currentIndex + 1])
            } else {
              closeMethod()
              scrollTo(4)
            }
          }
          return
        }
        if (isPrev) {
          event.preventDefault()
          if (!method) {
            scrollTo(2)
          } else {
            const currentIndex = methodKeys.indexOf(method)
            if (currentIndex > 0) {
              openMethod(methodKeys[currentIndex - 1])
            } else {
              closeMethod()
            }
          }
          return
        }
      }

      // 4. Navigation inside Capabilities Wheel section (Section 5: #capacidades)
      if (activeSection === 5) {
        if (isNext) {
          event.preventDefault()
          setHoveredCapability(null)
          if (capability < capabilities.length - 1) {
            setCapability(c => Math.min(capabilities.length - 1, c + 1))
          } else {
            setCapability(0)
            scrollTo(6)
          }
          return
        }
        if (isPrev) {
          event.preventDefault()
          setHoveredCapability(null)
          if (capability > 0) {
            setCapability(c => Math.max(0, c - 1))
          } else {
            setCapability(capabilities.length - 1)
            scrollTo(4)
          }
          return
        }
      }

      // Enter or Space triggers action on focused card
      if (['Enter', ' '].includes(event.key) && cardIndex !== null) {
        event.preventDefault()
        if (activeSection === 3) openMethod(methodKeys[cardIndex])
        if (activeSection === 7) openCase(cases[cardIndex].id)
        if (activeSection === 1) setProblem(cardIndex)
        if (activeSection === 2) { setLever(cardIndex); setSystemEngaged(true) }
        if (activeSection === 5) setCapability(cardIndex)
        return
      }

      // 3. Card-by-card sequential arrow navigation & slide deck section navigation
      const cardCount = getSectionCardCount(activeSection)

      if (isNext) {
        event.preventDefault()
        if (cardCount > 0) {
          if (cardIndex === null) {
            setCardIndex(0)
            syncSectionCardState(activeSection, 0)
          } else if (cardIndex < cardCount - 1) {
            const nextIdx = cardIndex + 1
            setCardIndex(nextIdx)
            syncSectionCardState(activeSection, nextIdx)
          } else {
            setCardIndex(null)
            scrollTo(activeSection + 1)
          }
        } else {
          scrollTo(activeSection + 1)
        }
        return
      }

      if (isPrev) {
        event.preventDefault()
        if (cardIndex !== null) {
          if (cardIndex > 0) {
            const prevIdx = cardIndex - 1
            setCardIndex(prevIdx)
            syncSectionCardState(activeSection, prevIdx)
          } else {
            setCardIndex(null)
          }
        } else {
          scrollTo(activeSection - 1)
        }
        return
      }

      if (event.key === 'Home') {
        event.preventDefault()
        setCardIndex(null)
        scrollTo(0)
        return
      }
      if (event.key === 'End') {
        event.preventDefault()
        setCardIndex(null)
        scrollTo(sections.length - 1)
        return
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeSection, caseId, caseStep, currentCase, method, methodKeys, openMethod, closeMethod, scrollTo, sections, cardIndex, getSectionCardCount, syncSectionCardState, cases, systemEngaged, lever, systemLevers.length, capability, capabilities.length, caseSummaryVisible])
  const visibleLever = hoveredLever !== null ? Math.min(systemLevers.length - 1, Math.max(0, hoveredLever)) : (systemEngaged ? Math.min(systemLevers.length - 1, Math.max(0, lever)) : -1)
  const relatedLevers = visibleLever >= 0 ? (systemSimulation ? [0, 2, 3, 6] : (leverRelations[visibleLever] || [])) : []
  const visibleCapability = Math.min(capabilities.length - 1, Math.max(0, hoveredCapability ?? capability))
  const relatedCapabilities = capabilityRelations[visibleCapability] || []

  const isLightSection = ['gargalo', 'tempo', 'evidencias', 'padrao'].includes(sections[activeSection]?.id)

  return (
    <main className={`${styles.experience} grain`}>
      <header className={`${styles.topbar} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.brand} href="#inicio" aria-label="EverGreen MKT — início"><img src="/images/evergreen-horizontal.png" alt={t.brandAlt} /></a>
        <div className={`${styles.modeSwitch} ${styles.langSwitch}`} role="group" aria-label="Seletor de idioma / Language selector">
          <button className={lang === 'pt' ? styles.selected : ''} onClick={() => changeLang('pt')} aria-label="Português BR">PT</button>
          <button className={lang === 'en' ? styles.selected : ''} onClick={() => changeLang('en')} aria-label="English">EN</button>
        </div>
        <button className={styles.menuButton} onClick={() => setNavOpen(!navOpen)} aria-label={t.navMapTitle}><Menu size={20} /><span>{String(activeSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</span></button>
      </header>

      <nav className={`${styles.progress} ${isLightSection ? styles.lightProgress : ''}`} aria-label="Progresso da apresentação">
        {sections.map((section, i) => <button key={section.id} aria-label={section.label} className={i === activeSection ? styles.current : ''} onClick={() => scrollTo(i)}><i /><span>{section.label}</span></button>)}
      </nav>

      <AnimatePresence>{navOpen && <motion.div className={styles.navMap} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button className={styles.closeButton} onClick={() => setNavOpen(false)}><X /></button><Eyebrow>{t.navMapTitle}</Eyebrow>
        <div>{sections.map((section, i) => <button key={section.id} onClick={() => scrollTo(i)}><span>{String(i + 1).padStart(2, '0')}</span>{section.label}<ArrowUpRight /></button>)}</div>
      </motion.div>}</AnimatePresence>

      <section id="inicio" className={`${styles.chapter} ${styles.hero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.heroCopy} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }}>
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1>{lang === 'en' ? 'Executive Growth' : 'Consultoria Executiva'}<br />{lang === 'en' ? 'Consulting.' : 'de '}<em>Growth.</em></h1>
          <p>{t.heroSubtitle}</p>
          <button className={styles.exploreCue} onClick={() => scrollTo(1)}>{lang === 'en' ? 'Uncover the bottleneck' : 'Descobrir o gargalo'} <ArrowDown size={18} /></button>
        </motion.div>
        <EGMark />
        <div className={styles.heroFoot}><span>{lang === 'en' ? 'PREDICTABLE, SCALABLE, AND TECH-DRIVEN GROWTH.' : 'CRESCIMENTO PREVISÍVEL, ESCALÁVEL E TECNOLÓGICO.'}</span><span>{lang === 'en' ? 'SCROLL OR ARROWS' : 'SCROLL OU SETAS'}</span></div>
      </section>

      <section id="gargalo" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`01 — ${t.bottleneckEyebrow}`}>{t.bottleneckTitle}</SectionTitle>
          <div className={styles.problemStage}>
            <div className={styles.problemTabs}>{problems.map((item, i) => <button key={item.request} onClick={() => setProblem(i)} className={`${problem === i ? styles.active : ''} ${activeSection === 1 && cardIndex === i ? styles.cardFocused : ''}`}><span>0{i + 1}</span>{item.request}</button>)}</div>
            <AnimatePresence mode="wait"><motion.div key={problem} className={styles.problemFlow} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }}>
              <div><small>{t.reqLabel}</small><strong>{problems[problem]?.request}</strong></div><ChevronRight />
              <div><small>{t.sympLabel}</small><strong>{problems[problem]?.symptom}</strong></div><ChevronRight />
              <div className={styles.rootCause}><small>{t.causeLabel}</small><strong>{problems[problem]?.cause}</strong></div>
            </motion.div></AnimatePresence>
          </div>
          <div className={styles.statement}>{lang === 'en' ? 'We don’t sell isolated tools.' : 'Não vendemos uma ferramenta isolada.'}<b>{lang === 'en' ? ' We solve real bottlenecks.' : ' Encontramos o gargalo real.'}</b></div>
        </div>
      </section>

      <section id="sistema" className={`${styles.chapter} ${styles.systemChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`02 — ${t.systemEyebrow}`} lead={lang === 'en' ? 'Optimizing an isolated piece does not advance the system.' : 'Melhorar uma peça isolada não garante que o sistema avance.'}>{t.systemTitle}</SectionTitle>
          <div className={`${styles.systemMap} ${styles.wheelMap} ${systemSimulation ? styles.simulating : ''}`} onPointerLeave={() => setHoveredLever(null)}>
            <svg className={styles.ecosystemWheel} viewBox="0 0 100 100" aria-label="System wheel">
              {systemLevers.map((item, i) => {
                const isActive = visibleLever === i
                const isRelated = (relatedLevers || []).includes(i)
                const point = sectorLabelPoint(i, systemLevers.length)
                const sectorClass = `${styles.wheelSector} ${isActive ? styles.active : ''} ${isRelated ? styles.related : ''} ${visibleLever >= 0 && !isActive && !isRelated ? styles.dimmed : ''}`
                return <motion.g key={item.name} className={sectorClass} role="button" tabIndex={0} aria-label={`${item.name}: ${item.note}`} aria-pressed={lever === i && systemEngaged} onClick={() => { setLever(i); setSystemEngaged(true); setSystemSimulation(false) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setLever(i); setSystemEngaged(true); setSystemSimulation(false) } }} onPointerEnter={() => setHoveredLever(i)} onFocus={() => setHoveredLever(i)} onBlur={() => setHoveredLever(null)}>
                  <motion.path initial={false} animate={{ d: sectorPath(i, systemLevers.length, isActive) }} transition={{ type: 'spring', stiffness: 240, damping: 24 }} />
                  <text x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle">{item.name}</text>
                </motion.g>
              })}
              <circle className={styles.wheelInnerRing} cx="50" cy="50" r="19" />
            </svg>
            <div className={styles.revenueCore}>
              <AnimatePresence mode="wait">
                {systemSimulation ? <motion.div key="simulation" className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>{lang === 'en' ? 'RESTRICTION' : 'RESTRIÇÃO'}</small><strong>200 → 80</strong><span>{lang === 'en' ? 'demand ≠ capacity' : 'demanda ≠ capacidade'}</span><button onClick={() => setSystemSimulation(false)}>{lang === 'en' ? 'Close' : 'Encerrar'}</button></motion.div> : visibleLever >= 0 && systemLevers[visibleLever] ? <motion.div key={visibleLever} className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>{systemLevers[visibleLever].name}</small><strong>{systemLevers[visibleLever].note}</strong><span>{lang === 'en' ? 'Connects' : 'Conecta'}: {(relatedLevers || []).map(index => systemLevers[index]?.name).filter(Boolean).join(' · ')}</span><button onClick={() => { setLever(1); setSystemEngaged(true); setHoveredLever(null); setSystemSimulation(true) }}>{lang === 'en' ? 'Simulate bottleneck' : 'Simular gargalo'}</button></motion.div> : <motion.div key="revenue" className={styles.wheelCoreDefault} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><small>{lang === 'en' ? 'SYSTEM GOAL' : 'OBJETIVO DO SISTEMA'}</small><strong>{lang === 'en' ? 'Revenue' : 'Receita'}</strong><span>{lang === 'en' ? 'predictable' : 'previsível'}</span></motion.div>}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.discovery}><p>{lang === 'en' ? 'Does more leads always equal more growth?' : 'Mais leads sempre significam mais crescimento?'}</p><div><button onClick={() => setAnswered(true)}>{lang === 'en' ? 'Yes' : 'Sim'}</button><button onClick={() => setAnswered(false)}>{lang === 'en' ? 'Not necessarily' : 'Não necessariamente'}</button></div>
            <AnimatePresence>{answered !== null && <motion.aside initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}><span>Leads <b>100 → 200</b></span><span>{lang === 'en' ? 'Capacidade' : 'Capacidade'} <b>80</b></span><strong>{answered ? (lang === 'en' ? 'The bottleneck also grew.' : 'A restrição também cresceu.') : (lang === 'en' ? 'Exactly: scaling a bottleneck scales waste.' : 'Exato: escalar uma restrição escala desperdício.')}</strong></motion.aside>}</AnimatePresence>
          </div>
        </div>
      </section>

      <section id="metodo" className={`${styles.chapter} ${styles.methodChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`03 — ${t.methodEyebrow}`} lead={lang === 'en' ? 'From bottleneck identification to continuous evolution.' : 'Da leitura do gargalo à evolução contínua.'}>{t.methodTitle}</SectionTitle>
          <div className={styles.methodShell}>
            <AnimatePresence mode="wait">
              {method ? <MethodDetail key={method} method={method} onClose={closeMethod} data={methodModules[method]} lang={lang} /> : <motion.div className={styles.methodOverview} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {(Object.entries(methodModules) as [MethodKey, typeof methodModules[MethodKey]][]).map(([key, data], i) => <motion.button layoutId={`method-${key}`} key={key} onClick={() => openMethod(key)} className={activeSection === 3 && cardIndex === i ? styles.cardFocused : ''}><span>{data.number}</span><div><strong>{data.title}</strong><small>{data.short}</small></div><ArrowUpRight /></motion.button>)}
              </motion.div>}
            </AnimatePresence>
          </div>
          {!method && <p className={styles.clickHint}><MousePointer2 size={15} /> {t.methodInstruction}</p>}
        </div>
      </section>

      <section id="tempo" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`04 — ${t.timeEyebrow}`}>{t.timeTitle}</SectionTitle>
          <div className={styles.timeZoom}>
            {(lang === 'en' ? [['12 months', 'Strategic direction', '01'], ['Quarter', 'Transformations', '04'], ['Sprint', 'Priority focus', '30/60/90'], ['Week', 'Execution & decisions', '52']] : [['12 meses', 'Direção estratégica', '01'], ['Trimestre', 'Transformações', '04'], ['Sprint', 'Prioridade', '30/60/90'], ['Semana', 'Gestão e decisões', '52']]).map((item, i) => <motion.div key={item[0]} whileHover={{ y: -8 }}><span>{item[2]}</span><small>{lang === 'en' ? 'LEVEL' : 'NÍVEL'} {i + 1}</small><h3>{item[0]}</h3><p>{item[1]}</p></motion.div>)}
          </div>
          <div className={styles.timeFooter}><span>{lang === 'en' ? 'ANNUAL PLAN' : 'PLANO ANUAL'}</span><i /><span>{lang === 'en' ? 'PRIORITY SPRINTS' : 'SPRINTS PRIORITÁRIAS'}</span><i /><span>{lang === 'en' ? 'CONTINUOUS REVIEW' : 'REVISÃO CONTÍNUA'}</span></div>
        </div>
      </section>

      <section id="capacidades" className={styles.chapter}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`05 — ${t.capEyebrow}`} lead={lang === 'en' ? 'The problem dictates which capabilities enter the engagement.' : 'O problema define quais capacidades entram no projeto.'}>{t.capTitle}</SectionTitle>
          <div className={styles.capabilityLayout}>
            <div className={`${styles.capabilityWheel} ${styles.wheelMap}`} onPointerLeave={() => setHoveredCapability(null)}>
              <svg className={styles.ecosystemWheel} viewBox="0 0 100 100" aria-label="Capabilities wheel">
                {capabilities.map((item, i) => {
                  const isActive = visibleCapability === i
                  const isRelated = (relatedCapabilities || []).includes(i)
                  const point = capabilityLabelPoint(i, capabilities.length)
                  const sectorClass = `${styles.wheelSector} ${styles.capabilityWheelSector} ${isActive ? styles.active : ''} ${isRelated ? styles.related : ''} ${!isActive && !isRelated ? styles.dimmed : ''}`
                  return <motion.g key={item.name} className={sectorClass} role="button" tabIndex={0} aria-label={`${item.name}: ${item.use}`} aria-pressed={capability === i} onClick={() => setCapability(i)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setCapability(i) } }} onPointerEnter={() => setHoveredCapability(i)} onFocus={() => setHoveredCapability(i)} onBlur={() => setHoveredCapability(null)}>
                    <motion.path initial={false} animate={{ d: capabilitySectorPath(i, capabilities.length, isActive) }} transition={{ type: 'spring', stiffness: 240, damping: 24 }} />
                    <text x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle">{item.name}</text>
                  </motion.g>
                })}
                <circle className={styles.wheelInnerRing} cx="50" cy="50" r="19" />
              </svg>
              <div className={styles.revenueCore}>
                <AnimatePresence mode="wait"><motion.div key={visibleCapability} className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>{capabilityPositions[visibleCapability]?.group ?? ''}</small><strong>{capabilities[visibleCapability]?.name ?? ''}</strong><span>{capabilities[visibleCapability]?.use ?? ''}</span></motion.div></AnimatePresence>
              </div>
            </div>
            <AnimatePresence mode="wait"><motion.div key={visibleCapability} className={styles.capabilityPanel} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .28, ease }}>
              <small>{lang === 'en' ? 'CAPABILITY' : 'CAPACIDADE'} {String(visibleCapability + 1).padStart(2, '0')} · {capabilityPositions[visibleCapability]?.group ?? ''}</small><h3>{capabilities[visibleCapability]?.name ?? ''}</h3><p>{capabilities[visibleCapability]?.use ?? ''}</p>
              <div><span>{lang === 'en' ? 'WHEN TO USE' : 'QUANDO ENTRA'}</span>{capabilities[visibleCapability]?.yes ?? ''}</div><div className={styles.no}><span>{lang === 'en' ? 'WHEN NOT TO USE' : 'QUANDO NÃO ENTRA'}</span>{capabilities[visibleCapability]?.no ?? ''}</div>
              <footer><b>{lang === 'en' ? 'Relates to' : 'Relaciona com'}</b>{(relatedCapabilities || []).map(index => capabilities[index] ? <button key={capabilities[index].name} onClick={() => setCapability(index)}>{capabilities[index].name}</button> : null)}</footer>
            </motion.div></AnimatePresence>
          </div>
        </div>
      </section>

      <section id="equipe" className={`${styles.chapter} ${styles.teamChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`06 — ${t.teamEyebrow}`}>{t.teamTitle}</SectionTitle>
          <div className={styles.credentialsStack}>
            <div className={styles.partnerCredential}><span>{t.officialPartner}</span><img src="/images/kommopartner.png" alt="EverGreen MKT é Kommo Partner" /><small>{lang === 'en' ? 'CRM, automation, and commercial operation.' : 'CRM, automação e operação comercial.'}</small></div>
            <a className={styles.googleCredential} href="https://www.credential.net/dada6b71-4bff-467f-a775-ea559be3de45" target="_blank" rel="noreferrer" aria-label="Verificar certificação Google Conversion Optimization de Gustavo F. S. da Silva"><img src="/images/google_certification.png" alt="Certificado Google Conversion Optimization" /><div><span>{t.googleCert}</span><strong>Conversion Optimization</strong><small>Gustavo F. S. da Silva · {lang === 'en' ? 'valid thru Feb/2027' : 'válida até fev/2027'}</small></div><ArrowUpRight size={14} /></a>
          </div>
          <div className={styles.teamGrid}>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/eduardo-profile-v2.png" alt="Eduardo Ferreira de Mattos" /><span>EG / 01</span></figure>
              <div className={styles.teamBody}><span>01 / {lang === 'en' ? 'STRATEGY' : 'ESTRATÉGIA'}</span><h3>Eduardo<br />Ferreira de Mattos</h3><p>Founder & CEO</p><strong>{lang === 'en' ? 'Engineer by training.' : 'Engenheiro por formação.'}<br />{lang === 'en' ? 'Builder by vocation.' : 'Executor por vocação.'}</strong><div className={styles.teamBio}>{lang === 'en' ? 'Leads diagnostic and growth direction. Aligns processes, sales, and data-driven marketing to convert ambitious goals into actionable priorities.' : 'Lidera diagnóstico e direção de crescimento. Reúne processos, vendas e marketing orientado a dados para transformar ambição em prioridades comerciais executáveis.'}</div><div className={styles.teamSkills}>Growth Strategy · Revenue · CRM · {lang === 'en' ? 'Media' : 'Mídia'} · {lang === 'en' ? 'Product' : 'Produto'}</div><blockquote>{lang === 'en' ? '“If it doesn’t move the needle, we don’t even start.”' : '“Se não mexe no gráfico, a gente nem começa.”'}</blockquote></div>
            </article>
            <div className={styles.teamBridge}><i /><strong>{lang === 'en' ? 'SHARED' : 'CONTEXTO'}<br />{lang === 'en' ? 'CONTEXT' : 'COMPARTILHADO'}</strong><i /></div>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/gustavo.jpg" alt="Gustavo Fugulin Soares da Silva" /><span>EG / 02</span></figure>
              <div className={styles.teamBody}><span>02 / {lang === 'en' ? 'TECHNOLOGY' : 'TECNOLOGIA'}</span><h3>Gustavo Fugulin<br />Soares da Silva</h3><p>Founder & CTO</p><strong>{lang === 'en' ? 'Turning vision' : 'Visão transformada'}<br />{lang === 'en' ? 'into real tech.' : 'em tecnologia real.'}</strong><div className={styles.teamBio}>{lang === 'en' ? 'Leads technical architecture and engineering. Connects software, data, AI, and automation to build scalable operations.' : 'Lidera a arquitetura técnica e a implementação. Conecta software, dados, IA e automação para construir operações que entregam resultado com escala.'}</div><div className={styles.teamSkills}>Software · {lang === 'en' ? 'Data' : 'Dados'} · AI · {lang === 'en' ? 'Automation' : 'Automação'} · {lang === 'en' ? 'Integrations' : 'Integrações'}</div><blockquote>{lang === 'en' ? '“Great technology disappears — and shines in results.”' : '“Tecnologia boa some — e aparece no resultado.”'}</blockquote></div>
            </article>
          </div>
          <div className={styles.teamStatement}>{lang === 'en' ? 'Strategy doesn’t end in slides.' : 'A estratégia não termina no deck.'}<br /><b>{lang === 'en' ? 'Execution doesn’t start without context.' : 'A execução não começa sem contexto.'}</b></div>
        </div>
      </section>

      <section id="evidencias" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`07 — ${t.evidEyebrow}`} lead={lang === 'en' ? 'Marketing, sales, digital experience, and tech take different shapes in each business.' : 'Marketing, comercial, experiência digital e tecnologia entram de formas diferentes em cada operação.'}>{t.evidTitle}</SectionTitle>
          <p className={styles.caseThesis}>{lang === 'en' ? 'The common ground is clear: understand the real problem, architect the solution, and own the evolution.' : 'O ponto em comum é o mesmo: entender o problema real, estruturar a solução e assumir responsabilidade pela evolução.'}</p>
          <div className={styles.caseGrid}>{cases.map((item, i) => <motion.button whileHover={{ y: -6 }} key={item.id} onClick={() => openCase(item.id)}>
            <span className={styles.caseIndex}>0{i + 1} / {item.name}</span>
            <small>{item.category}</small>
            <h3>{item.headline}</h3>
            <strong className={styles.caseMetric}>{item.metric}</strong>
            <p>{item.evidence}</p>
            <span className={styles.caseHighlights}>{item.highlights.map(highlight => <b key={highlight}>{highlight}</b>)}</span>
            <span className={styles.caseCta}>{t.openCase} <ArrowUpRight size={17} /></span>
          </motion.button>)}</div>
          <div className={styles.caseCommon}>
            <small>{caseSummary.title}</small>
            <div>{caseSummary.items.map(item => <article key={item[0]}><strong>{item[0]}</strong><p>{item[1]}</p></article>)}</div>
            <footer>{caseSummary.closing.map(line => <strong key={line}>{line}</strong>)}</footer>
          </div>
        </div>
        <AnimatePresence>{currentCase && <motion.div className={styles.caseOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className={styles.closeButton} aria-label="Close case study" onClick={() => { setCaseId(null); replaceExperienceUrl(`${window.location.pathname}#evidencias`) }}><X /></button>
          <div className={styles.caseHeading}><Eyebrow>{lang === 'en' ? 'Inside the operation' : 'Por dentro da operação'}</Eyebrow><span>{currentCase.category}</span><h3>{currentCase.name}</h3><strong>{currentCase.headline}</strong><b>{currentCase.metric}</b><p>{currentCase.evidence}</p></div>
          <div className={styles.caseSteps}>{currentCase.sections.map((step, i) => <button key={step.label} className={caseStep === i ? styles.active : ''} onClick={() => setCaseStep(i)}><span>{String(i + 1).padStart(2, '0')}</span>{step.label}</button>)}</div>
          {currentCase.sections[caseStep] && <motion.div key={`${currentCase.id}-${caseStep}`} className={styles.caseContent} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <small>{currentCase.sections[caseStep].label}</small>
            <CaseSectionCopy section={currentCase.sections[caseStep]} />
            <div className={styles.caseControls}><button aria-label="Previous step" disabled={caseStep === 0} onClick={() => setCaseStep(s => Math.max(0, s - 1))}><ArrowLeft /></button><button aria-label="Next step" disabled={caseStep >= currentCase.sections.length - 1} onClick={() => setCaseStep(s => Math.min(currentCase.sections.length - 1, s + 1))}><ArrowRight /></button></div>
          </motion.div>}
        </motion.div>}</AnimatePresence>
      </section>

      <section id="padrao" className={`${styles.chapter} ${styles.manifestoChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`08 — ${t.patternEyebrow}`}>{t.patternTitle}</SectionTitle>
          <div className={styles.manifesto}>{manifesto.map((line, i) => <motion.div key={line[0]} initial={{ opacity: .25 }} whileInView={{ opacity: 1 }} viewport={{ amount: .8 }}><span>0{i + 1}</span><strong>{line[0]}</strong><em>{line[1]}</em></motion.div>)}</div>
        </div>
      </section>

      <section id="contato" className={`${styles.chapter} ${styles.closing}`}>
        <div className={styles.closingOrb} aria-hidden="true" />
        <div><Eyebrow>{t.contactEyebrow}</Eyebrow><h2>{lang === 'en' ? 'We don’t compete to be' : 'Não competimos para ser'}<br />{lang === 'en' ? 'the cheapest option.' : 'a opção mais barata.'}</h2><motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .35 }}>{lang === 'en' ? 'We compete to be the' : 'Competimos para ser a'}<br /><em>{lang === 'en' ? 'safest decision.' : 'decisão mais segura.'}</em></motion.h3><p>{t.contactSubtitle}</p>
          <div className={styles.ctas}><a href={whatsappUrl} target={whatsappUrl.startsWith('http') ? '_blank' : undefined} rel={whatsappUrl.startsWith('http') ? 'noreferrer' : undefined} onClick={() => track('whatsapp_clicked')}>{t.ctaPrimary} <ArrowUpRight /></a><a href="https://evergreenmkt.com.br" onClick={() => track('cta_clicked')}>evergreenmkt.com.br</a></div>
        </div>
        <footer><span>EVERGREEN MKT © {new Date().getFullYear()}</span><span>{lang === 'en' ? 'CLARITY · STRUCTURE · PREDICTABILITY' : 'CLAREZA · ESTRUTURA · PREVISIBILIDADE'}</span></footer>
      </section>
    </main>
  )
}
