'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, CircleDot, Compass, Menu, MousePointer2, X } from 'lucide-react'
import { capabilities, cases, manifesto, methodModules, problems, sections, systemLevers, type MethodKey } from './data'
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
  // Stable precision avoids server/client SVG hydration mismatches.
  return {
    x: Number((50 + radius * Math.cos(radians)).toFixed(5)),
    y: Number((50 + radius * Math.sin(radians)).toFixed(5)),
  }
}

function sectorPath(index: number, expanded = false) {
  const span = 360 / systemLevers.length
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

function sectorLabelPoint(index: number) {
  const span = 360 / systemLevers.length
  return polarPoint(33, index * span + span / 2)
}

function capabilitySectorPath(index: number, expanded = false) {
  const span = 360 / capabilities.length
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

function capabilityLabelPoint(index: number) {
  const span = 360 / capabilities.length
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
  // Next.js stores router metadata in history.state. Replacing it with null
  // corrupts the App Router state and can cause duplicate DOM removals.
  window.history.replaceState(window.history.state, '', url)
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className={styles.eyebrow}><span />{children}</div>
}

function SectionTitle({ eyebrow, children, lead }: { eyebrow: string; children: React.ReactNode; lead?: string }) {
  return <div className={styles.titleBlock}><Eyebrow>{eyebrow}</Eyebrow><h2>{children}</h2>{lead && <p>{lead}</p>}</div>
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

function DiagnosticSimulation() {
  const rows = [
    { label: 'Leads', value: 120, rate: '100%', loss: 0 },
    { label: 'Contatos iniciados', value: 82, rate: '68%', loss: 38 },
    { label: 'Leads qualificados', value: 46, rate: '56%', loss: 36, alert: true },
    { label: 'Propostas', value: 18, rate: '39%', loss: 28 },
    { label: 'Vendas', value: 5, rate: '28%', loss: 13 },
  ]
  const [active, setActive] = useState(2)
  return (
    <div className={styles.simulation}>
      <div className={styles.simHeader}><span>SIMULAÇÃO CONCEITUAL</span><span>Foco: vazamento</span></div>
      <div className={styles.funnel}>
        {rows.map((row, index) => <button key={row.label} onClick={() => setActive(index)} className={`${styles.funnelRow} ${active === index ? styles.active : ''} ${row.alert ? styles.alert : ''}`}>
          <span>{row.label}</span><strong>{row.value}</strong><small>{row.rate} passagem</small>
        </button>)}
      </div>
      <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={styles.insight}>
        <CircleDot size={16} />
        <div><b>{active === 2 ? 'O maior vazamento não está na geração.' : `${rows[active].loss} oportunidades não avançaram aqui.`}</b><p>{active === 2 ? 'Comprar mais mídia antes de corrigir atendimento → qualificação provavelmente aumentaria desperdício.' : 'A taxa precisa ser lida com contexto antes de virar uma decisão.'}</p></div>
      </motion.div>
    </div>
  )
}

function MethodDetail({ method, onClose }: { method: MethodKey; onClose: () => void }) {
  const data = methodModules[method]
  return (
    <motion.div layoutId={`method-${method}`} className={styles.methodDetail}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Fechar detalhe"><X size={19} /></button>
      <div className={styles.methodDetailIntro}><span>{data.number} / MÉTODO EG</span><h3>{data.title}</h3><p>{data.headline}</p></div>
      <div className={styles.methodGroups}>{data.groups.map(group => <div key={group.title}><small>{group.title}</small>{group.items.map(item => <span key={item}>{item}</span>)}</div>)}</div>
      {method === 'diagnostico' && <DiagnosticSimulation />}
      {method === 'arquitetura' && <div className={styles.architectureMap}>{['Lead source', 'Landing page', 'CRM', 'Pipeline', 'Atendimento', 'Follow-up', 'Dashboard'].map((n, i) => <div key={n} style={{ '--i': i } as React.CSSProperties}>{n}</div>)}</div>}
      {method === 'implementacao' && <div className={styles.priorityNote}>Priorizar <ChevronRight size={16} /> impacto <ChevronRight size={16} /> esforço <ChevronRight size={16} /> urgência</div>}
      {method === 'operacao' && <div className={styles.sparkline}><svg viewBox="0 0 500 100"><motion.path d="M0 84 C70 70 90 82 145 55 S245 70 290 38 S380 51 500 8" fill="none" stroke="currentColor" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4 }} /></svg><span>Exemplo de acompanhamento · tendência + hipótese + ação</span></div>}
      {method === 'evolucao' && <div className={styles.liveRoadmap}>{['Agora', '30 dias', '90 dias', 'Trimestre', '12 meses'].map((item, i) => <div key={item}><i /><span>{item}</span><small>{i < 2 ? 'Estruturar' : i < 4 ? 'Validar' : 'Escalar'}</small></div>)}</div>}
    </motion.div>
  )
}

export default function GrowthExperience() {
  const reduceMotion = useReducedMotion()
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

  const scrollTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, index))
    document.getElementById(sections[next].id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    setNavOpen(false)
  }, [reduceMotion])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const explore = params.get('explore') as MethodKey | null
    const requestedCase = params.get('case')
    if (explore && methodModules[explore]) { setMethod(explore); setTimeout(() => scrollTo(3), 100) }
    if (requestedCase && cases.some(item => item.id === requestedCase)) { setCaseId(requestedCase); setTimeout(() => scrollTo(7), 100) }
    track('presentation_started')
  }, [scrollTo])

  useEffect(() => {
    const observers = sections.map((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(index)
          track('section_viewed', { section: section.id })
          if (section.id === 'contato') track('presentation_completed')
        }
      }, { threshold: .55 })
      observer.observe(element)
      return observer
    })
    return () => observers.forEach(observer => observer?.disconnect())
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMethod(null); setCaseId(null); setNavOpen(false); return }
      if (method || caseId) return
      if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(event.key)) { event.preventDefault(); scrollTo(activeSection + 1) }
      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); scrollTo(activeSection - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeSection, caseId, method, scrollTo])

  const openMethod = (key: MethodKey) => {
    setMethod(key); track('method_viewed', { method: key })
    replaceExperienceUrl(`${window.location.pathname}?explore=${key}#metodo`)
  }
  const closeMethod = () => { setMethod(null); replaceExperienceUrl(`${window.location.pathname}#metodo`) }
  const openCase = (id: string) => {
    setCaseId(id); setCaseStep(0); track('case_viewed', { case: id })
    replaceExperienceUrl(`${window.location.pathname}?case=${id}#evidencias`)
  }
  const currentCase = useMemo(() => cases.find(item => item.id === caseId), [caseId])
  const visibleLever = hoveredLever ?? (systemEngaged ? lever : -1)
  const relatedLevers = visibleLever >= 0 ? (systemSimulation ? [0, 2, 3, 6] : leverRelations[visibleLever]) : []
  const visibleCapability = hoveredCapability ?? capability
  const relatedCapabilities = capabilityRelations[visibleCapability]

  return (
    <main className={`${styles.experience} grain`}>
      <header className={styles.topbar}>
        <a className={styles.brand} href="#inicio" aria-label="EverGreen MKT — início"><img src="/images/Evergreen - Horizontal.png" alt="EverGreen — Crescimento previsível, escalável e tecnológico" /></a>
        <div className={`${styles.modeSwitch} ${styles.exploreControl}`}>
          <button className={styles.selected} onClick={() => setNavOpen(true)} aria-label="Explorar mapa da experiência"><Compass size={14} /> Explorar</button>
        </div>
        <button className={styles.menuButton} onClick={() => setNavOpen(!navOpen)} aria-label="Abrir mapa da apresentação"><Menu size={20} /><span>{String(activeSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</span></button>
      </header>

      <nav className={styles.progress} aria-label="Progresso da apresentação">
        {sections.map((section, i) => <button key={section.id} aria-label={section.label} className={i === activeSection ? styles.current : ''} onClick={() => scrollTo(i)}><i /><span>{section.label}</span></button>)}
      </nav>

      <AnimatePresence>{navOpen && <motion.div className={styles.navMap} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button className={styles.closeButton} onClick={() => setNavOpen(false)}><X /></button><Eyebrow>Mapa da experiência</Eyebrow>
        <div>{sections.map((section, i) => <button key={section.id} onClick={() => scrollTo(i)}><span>{String(i + 1).padStart(2, '0')}</span>{section.label}<ArrowUpRight /></button>)}</div>
      </motion.div>}</AnimatePresence>

      <section id="inicio" className={`${styles.chapter} ${styles.hero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.heroCopy} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }}>
          <Eyebrow>Boutique de crescimento, tecnologia e inteligência aplicada</Eyebrow>
          <h1>Consultoria Executiva<br />de <em>Growth.</em></h1>
          <p>Estratégia, estrutura e previsibilidade para empresas que precisam crescer com método.</p>
          <button className={styles.exploreCue} onClick={() => scrollTo(1)}>Descobrir o gargalo <ArrowDown size={18} /></button>
        </motion.div>
        <EGMark />
        <div className={styles.heroFoot}><span>CRESCIMENTO PREVISÍVEL, ESCALÁVEL E TECNOLÓGICO.</span><span>SCROLL OU SETAS</span></div>
      </section>

      <section id="gargalo" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="01 — Sintoma ≠ causa">Quando a tarefa contratada<br />não é o problema real.</SectionTitle>
          <div className={styles.problemStage}>
            <div className={styles.problemTabs}>{problems.map((item, i) => <button key={item.request} onClick={() => setProblem(i)} className={problem === i ? styles.active : ''}><span>0{i + 1}</span>{item.request}</button>)}</div>
            <AnimatePresence mode="wait"><motion.div key={problem} className={styles.problemFlow} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }}>
              <div><small>PEDIDO APARENTE</small><strong>{problems[problem].request}</strong></div><ChevronRight />
              <div><small>O QUE OBSERVAMOS</small><strong>{problems[problem].symptom}</strong></div><ChevronRight />
              <div className={styles.rootCause}><small>CAUSA RAIZ</small><strong>{problems[problem].cause}</strong></div>
            </motion.div></AnimatePresence>
          </div>
          <div className={styles.statement}>Não vendemos uma ferramenta isolada.<b>Encontramos o gargalo real.</b></div>
        </div>
      </section>

      <section id="sistema" className={`${styles.chapter} ${styles.systemChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="02 — Visão sistêmica" lead="Melhorar uma peça isolada não garante que o sistema avance.">Growth começa antes<br />da campanha.</SectionTitle>
          <div className={`${styles.systemMap} ${styles.wheelMap} ${systemSimulation ? styles.simulating : ''}`} onPointerLeave={() => setHoveredLever(null)}>
            <svg className={styles.ecosystemWheel} viewBox="0 0 100 100" aria-label="Roda interativa do sistema de receita">
              {systemLevers.map((item, i) => {
                const isActive = visibleLever === i
                const isRelated = relatedLevers.includes(i)
                const point = sectorLabelPoint(i)
                const sectorClass = `${styles.wheelSector} ${isActive ? styles.active : ''} ${isRelated ? styles.related : ''} ${visibleLever >= 0 && !isActive && !isRelated ? styles.dimmed : ''}`
                return <motion.g key={item.name} className={sectorClass} role="button" tabIndex={0} aria-label={`${item.name}: ${item.note}`} aria-pressed={lever === i && systemEngaged} onClick={() => { setLever(i); setSystemEngaged(true); setSystemSimulation(false) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setLever(i); setSystemEngaged(true); setSystemSimulation(false) } }} onPointerEnter={() => setHoveredLever(i)} onFocus={() => setHoveredLever(i)} onBlur={() => setHoveredLever(null)}>
                  <motion.path initial={false} animate={{ d: sectorPath(i, isActive) }} transition={{ type: 'spring', stiffness: 240, damping: 24 }} />
                  <text x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle">{item.name}</text>
                </motion.g>
              })}
              <circle className={styles.wheelInnerRing} cx="50" cy="50" r="19" />
            </svg>
            <div className={styles.revenueCore}>
              <AnimatePresence mode="wait">
                {systemSimulation ? <motion.div key="simulation" className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>RESTRIÇÃO</small><strong>200 → 80</strong><span>demanda ≠ capacidade</span><button onClick={() => setSystemSimulation(false)}>Encerrar</button></motion.div> : visibleLever >= 0 ? <motion.div key={visibleLever} className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>{systemLevers[visibleLever].name}</small><strong>{systemLevers[visibleLever].note}</strong><span>Conecta: {relatedLevers.map(index => systemLevers[index].name).join(' · ')}</span><button onClick={() => { setLever(1); setSystemEngaged(true); setHoveredLever(null); setSystemSimulation(true) }}>Simular gargalo</button></motion.div> : <motion.div key="revenue" className={styles.wheelCoreDefault} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><small>OBJETIVO DO SISTEMA</small><strong>Receita</strong><span>previsível</span></motion.div>}
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.discovery}><p>Mais leads sempre significam mais crescimento?</p><div><button onClick={() => setAnswered(true)}>Sim</button><button onClick={() => setAnswered(false)}>Não necessariamente</button></div>
            <AnimatePresence>{answered !== null && <motion.aside initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}><span>Leads <b>100 → 200</b></span><span>Capacidade <b>80</b></span><strong>{answered ? 'A restrição também cresceu.' : 'Exato: escalar uma restrição escala desperdício.'}</strong></motion.aside>}</AnimatePresence>
          </div>
        </div>
      </section>

      <section id="metodo" className={`${styles.chapter} ${styles.methodChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="03 — Framework proprietário" lead="Da leitura do gargalo à evolução contínua.">Método EG de<br />Previsibilidade Comercial.</SectionTitle>
          <div className={styles.methodShell}>
            <AnimatePresence mode="wait">
              {method ? <MethodDetail key={method} method={method} onClose={closeMethod} /> : <motion.div className={styles.methodOverview} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {(Object.entries(methodModules) as [MethodKey, typeof methodModules[MethodKey]][]).map(([key, data]) => <motion.button layoutId={`method-${key}`} key={key} onClick={() => openMethod(key)}><span>{data.number}</span><div><strong>{data.title}</strong><small>{data.short}</small></div><ArrowUpRight /></motion.button>)}
              </motion.div>}
            </AnimatePresence>
          </div>
          {!method && <p className={styles.clickHint}><MousePointer2 size={15} /> Selecione uma etapa para explorar o sistema.</p>}
        </div>
      </section>

      <section id="tempo" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="04 — Ritmo operacional">Direção longa. Execução curta.<br />Aprendizado contínuo.</SectionTitle>
          <div className={styles.timeZoom}>
            {[['12 meses', 'Direção estratégica', '01'], ['Trimestre', 'Transformações', '04'], ['Sprint', 'Prioridade', '30/60/90'], ['Semana', 'Gestão e decisões', '52']].map((item, i) => <motion.div key={item[0]} whileHover={{ y: -8 }}><span>{item[2]}</span><small>NÍVEL {i + 1}</small><h3>{item[0]}</h3><p>{item[1]}</p></motion.div>)}
          </div>
          <div className={styles.timeFooter}><span>PLANO ANUAL</span><i /><span>SPRINTS PRIORITÁRIAS</span><i /><span>REVISÃO CONTÍNUA</span></div>
        </div>
      </section>

      <section id="capacidades" className={styles.chapter}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="05 — Capacidades" lead="O problema define quais capacidades entram no projeto.">Uma tese central.<br />Diferentes instrumentos.</SectionTitle>
          <div className={styles.capabilityLayout}>
            <div className={`${styles.capabilityWheel} ${styles.wheelMap}`} onPointerLeave={() => setHoveredCapability(null)}>
              <svg className={styles.ecosystemWheel} viewBox="0 0 100 100" aria-label="Roda interativa de capacidades EverGreen">
                {capabilities.map((item, i) => {
                  const isActive = visibleCapability === i
                  const isRelated = relatedCapabilities.includes(i)
                  const point = capabilityLabelPoint(i)
                  const sectorClass = `${styles.wheelSector} ${styles.capabilityWheelSector} ${isActive ? styles.active : ''} ${isRelated ? styles.related : ''} ${!isActive && !isRelated ? styles.dimmed : ''}`
                  return <motion.g key={item.name} className={sectorClass} role="button" tabIndex={0} aria-label={`${item.name}: ${item.use}`} aria-pressed={capability === i} onClick={() => setCapability(i)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setCapability(i) } }} onPointerEnter={() => setHoveredCapability(i)} onFocus={() => setHoveredCapability(i)} onBlur={() => setHoveredCapability(null)}>
                    <motion.path initial={false} animate={{ d: capabilitySectorPath(i, isActive) }} transition={{ type: 'spring', stiffness: 240, damping: 24 }} />
                    <text x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle">{item.name}</text>
                  </motion.g>
                })}
                <circle className={styles.wheelInnerRing} cx="50" cy="50" r="19" />
              </svg>
              <div className={styles.revenueCore}>
                <AnimatePresence mode="wait"><motion.div key={visibleCapability} className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}><small>{capabilityPositions[visibleCapability].group}</small><strong>{capabilities[visibleCapability].name}</strong><span>{capabilities[visibleCapability].use}</span></motion.div></AnimatePresence>
              </div>
            </div>
            <AnimatePresence mode="wait"><motion.div key={visibleCapability} className={styles.capabilityPanel} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .28, ease }}>
              <small>CAPACIDADE {String(visibleCapability + 1).padStart(2, '0')} · {capabilityPositions[visibleCapability].group}</small><h3>{capabilities[visibleCapability].name}</h3><p>{capabilities[visibleCapability].use}</p>
              <div><span>QUANDO ENTRA</span>{capabilities[visibleCapability].yes}</div><div className={styles.no}><span>QUANDO NÃO ENTRA</span>{capabilities[visibleCapability].no}</div>
              <footer><b>Relaciona com</b>{relatedCapabilities.map(index => <button key={capabilities[index].name} onClick={() => setCapability(index)}>{capabilities[index].name}</button>)}</footer>
            </motion.div></AnimatePresence>
          </div>
        </div>
      </section>

      <section id="equipe" className={`${styles.chapter} ${styles.teamChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="06 — Quem pensa e executa">Estratégia e tecnologia<br />na mesma mesa.</SectionTitle>
          <div className={styles.credentialsStack}>
            <div className={styles.partnerCredential}><span>PARCERIA OFICIAL</span><img src="/images/kommopartner.png" alt="EverGreen MKT é Kommo Partner" /><small>CRM, automação e operação comercial.</small></div>
            <a className={styles.googleCredential} href="https://www.credential.net/dada6b71-4bff-467f-a775-ea559be3de45" target="_blank" rel="noreferrer" aria-label="Verificar certificação Google Conversion Optimization de Gustavo F. S. da Silva"><img src="/images/google_certification.png" alt="Certificado Google Conversion Optimization" /><div><span>CERTIFICAÇÃO GOOGLE</span><strong>Conversion Optimization</strong><small>Gustavo F. S. da Silva · válida até fev/2027</small></div><ArrowUpRight size={14} /></a>
          </div>
          <div className={styles.teamGrid}>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/eduardo-profile-v2.png" alt="Eduardo Ferreira de Mattos" /><span>EG / 01</span></figure>
              <div className={styles.teamBody}><span>01 / ESTRATÉGIA</span><h3>Eduardo<br />Ferreira de Mattos</h3><p>Founder & CEO</p><strong>Engenheiro por formação.<br />Executor por vocação.</strong><div className={styles.teamBio}>Lidera diagnóstico e direção de crescimento. Reúne processos, vendas e marketing orientado a dados para transformar ambição em prioridades comerciais executáveis.</div><div className={styles.teamSkills}>Growth Strategy · Revenue · CRM · Mídia · Produto</div><blockquote>“Se não mexe no gráfico, a gente nem começa.”</blockquote></div>
            </article>
            <div className={styles.teamBridge}><i /><strong>CONTEXTO<br />COMPARTILHADO</strong><i /></div>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/gustavo.jpg" alt="Gustavo Fugulin Soares da Silva" /><span>EG / 02</span></figure>
              <div className={styles.teamBody}><span>02 / TECNOLOGIA</span><h3>Gustavo Fugulin<br />Soares da Silva</h3><p>Founder & CTO</p><strong>Visão transformada<br />em tecnologia real.</strong><div className={styles.teamBio}>Lidera a arquitetura técnica e a implementação. Conecta software, dados, IA e automação para construir operações que entregam resultado com escala.</div><div className={styles.teamSkills}>Software · Dados · IA · Automação · Integrações</div><blockquote>“Tecnologia boa some — e aparece no resultado.”</blockquote></div>
            </article>
          </div>
          <div className={styles.teamStatement}>A estratégia não termina no deck.<br /><b>A execução não começa sem contexto.</b></div>
        </div>
      </section>

      <section id="evidencias" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="07 — Evidências">Problema certo. Decisão certa.<br />Evidência certa.</SectionTitle>
          <div className={styles.caseGrid}>{cases.map((item, i) => <motion.button whileHover={{ y: -6 }} key={item.id} onClick={() => openCase(item.id)}><span>0{i + 1}</span><small>{item.status}</small><h3>{item.name}</h3><p>{item.evidence}</p><div>Explorar case <ArrowUpRight size={17} /></div></motion.button>)}</div>
        </div>
        <AnimatePresence>{currentCase && <motion.div className={styles.caseOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className={styles.closeButton} onClick={() => { setCaseId(null); replaceExperienceUrl(`${window.location.pathname}#evidencias`) }}><X /></button>
          <div className={styles.caseHeading}><Eyebrow>Case explorável</Eyebrow><h3>{currentCase.name}</h3><p>{currentCase.evidence}</p></div>
          <div className={styles.caseSteps}>{currentCase.steps.map((step, i) => <button key={step[0]} className={caseStep === i ? styles.active : ''} onClick={() => setCaseStep(i)}><span>0{i + 1}</span>{step[0]}</button>)}</div>
          <motion.div key={caseStep} className={styles.caseContent} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}><small>{currentCase.steps[caseStep][0]}</small><p>{currentCase.steps[caseStep][1]}</p><div><button disabled={caseStep === 0} onClick={() => setCaseStep(caseStep - 1)}><ArrowLeft /></button><button disabled={caseStep === 5} onClick={() => setCaseStep(caseStep + 1)}><ArrowRight /></button></div></motion.div>
        </motion.div>}</AnimatePresence>
      </section>

      <section id="padrao" className={`${styles.chapter} ${styles.manifestoChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow="08 — Nosso padrão">Menos improviso.<br />Mais método.</SectionTitle>
          <div className={styles.manifesto}>{manifesto.map((line, i) => <motion.div key={line[0]} initial={{ opacity: .25 }} whileInView={{ opacity: 1 }} viewport={{ amount: .8 }}><span>0{i + 1}</span><strong>{line[0]}</strong><em>{line[1]}</em></motion.div>)}</div>
        </div>
      </section>

      <section id="contato" className={`${styles.chapter} ${styles.closing}`}>
        <div className={styles.closingOrb} aria-hidden="true" />
        <div><Eyebrow>Próximo movimento</Eyebrow><h2>Não competimos para ser<br />a opção mais barata.</h2><motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .35 }}>Competimos para ser a<br /><em>decisão mais segura.</em></motion.h3><p>Se o objetivo é entender o problema, estruturar a solução e construir crescimento com lógica, vale conversar.</p>
          <div className={styles.ctas}><a href={whatsappUrl} target={whatsappUrl.startsWith('http') ? '_blank' : undefined} rel={whatsappUrl.startsWith('http') ? 'noreferrer' : undefined} onClick={() => track('whatsapp_clicked')}>Falar com a EverGreen <ArrowUpRight /></a><a href="https://evergreenmkt.com.br" onClick={() => track('cta_clicked')}>evergreenmkt.com.br</a></div>
        </div>
        <footer><span>EVERGREEN MKT © {new Date().getFullYear()}</span><span>CLAREZA · ESTRUTURA · PREVISIBILIDADE</span></footer>
      </section>
    </main>
  )
}
