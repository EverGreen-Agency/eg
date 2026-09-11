'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Menu, MousePointer2, X } from 'lucide-react'
import { getTechData, type Language, type TechModule, type TechModuleKey } from './data'
import { ease, replaceExperienceUrl, sectorLabelPoint, sectorPath, setProspectTag, track } from '@/components/deck/deck'
import { CaseSectionCopy, Eyebrow, SectionTitle } from '@/components/deck/DeckPrimitives'
import { LANGUAGES, LANGUAGE_LABEL, LANGUAGE_NAME, LANGUAGE_TAG } from '@/components/deck/types'
import styles from '@/components/deck/deck.module.css'

const WHATSAPP_NUMBER = '5511989966989'
const whatsappMessage: Record<Language, string> = {
  pt: 'Oi! Vi a apresentação de tecnologia da EverGreen e quero continuar a conversa sobre a proposta.',
  en: 'Hi! I went through the EverGreen technology presentation and would like to continue our conversation about the proposal.',
  es: 'Hola. Vi la presentación de tecnología de EverGreen y quiero seguir la conversación sobre la propuesta.',
  it: 'Ciao! Ho visto la presentazione tecnologica di EverGreen e vorrei continuare la conversazione sulla proposta.',
  fr: 'Bonjour ! J’ai vu la présentation technologique d’EverGreen et je souhaite poursuivre la conversation sur la proposition.',
  de: 'Hallo! Ich habe die Technologie-Präsentation von EverGreen gesehen und möchte das Gespräch zum Angebot fortsetzen.',
}

function whatsappHref(lang: Language) {
  const override = process.env.NEXT_PUBLIC_EG_WHATSAPP_URL
  if (override) return override
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage[lang])}`
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

const moduleKeys: TechModuleKey[] = ['diagnostico', 'arquitetura', 'implementacao', 'operacao', 'evolucao']

/**
 * O grafo de precedencia entre dimensoes — §5 de `EG_Raio-X_Tecnologico.md`.
 *
 * Esta versao substitui a que eu tinha inventado antes de a regua existir, e que
 * contradizia o documento em dois pontos: Diagnostico aparecia destravando so
 * duas dimensoes quando o §5 diz que ele, baixo, invalida a leitura das outras
 * SEIS; e Margem aparecia como se destravasse algo.
 *
 * Margem nao destrava nada — e sempre consequencia. A entrada dela aqui e o
 * inverso: as dimensoes que a fazem subir. E por isso que, quando Margem e a
 * menor nota, NAO e por ela que se comeca.
 */
const dimensionRelations: Record<number, number[]> = {
  0: [1, 2, 3, 4, 5, 6], // Diagnóstico destrava tudo: sem ele a empresa não sabe o que não sabe
  1: [6],                // Execução → Margem
  2: [4, 5],             // Documentação destrava Automação e Qualidade
  3: [0, 6],             // Dados destravam Diagnóstico e Margem
  4: [6],                // Automação → Margem
  5: [6],                // Qualidade → Margem
  6: [3, 4],             // Margem: inverso — sobe quando Dados e Automação sobem
}

function ModuleDetail({ data, lang, onClose }: { data: TechModule; lang: Language; onClose: () => void }) {
  return (
    <motion.div layoutId={`tech-${data.number}`} className={styles.methodDetail}>
      <button className={styles.closeButton} onClick={onClose} aria-label={lang === 'en' ? 'Close detail' : 'Fechar detalhe'}><X size={19} /></button>
      <div className={styles.methodDetailIntro}>
        <span>{data.number} / {data.phase} · {data.action}</span>
        <h3>{data.title}</h3>
        <p>{data.headline}</p>
      </div>
      <div className={styles.methodGroups}>
        {data.groups.map(group => (
          <div key={group.title}>
            <small>{group.title}</small>
            {group.items.map(item => <span key={item}>{item}</span>)}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function TechExperience() {
  const reduceMotion = useReducedMotion()
  const [lang, setLang] = useState<Language>('pt')
  const [activeSection, setActiveSection] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [problem, setProblem] = useState(0)
  const [dimension, setDimension] = useState(0)
  const [hoveredDimension, setHoveredDimension] = useState<number | null>(null)
  const [moduleKey, setModuleKey] = useState<TechModuleKey | null>(null)
  const [capability, setCapability] = useState(0)
  const [caseId, setCaseId] = useState<string | null>(null)
  const [caseStep, setCaseStep] = useState(0)
  const [isProposal, setIsProposal] = useState(false)

  const { sections, problems, dimensions, modules, ladder, capabilities, cases, caseFallback, manifesto, t } =
    useMemo(() => getTechData(lang), [lang])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      if (atBottom) {
        setActiveSection(sections.length - 1)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections.length])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isLang = (v: string | null): v is Language => !!v && (LANGUAGES as readonly string[]).includes(v)
    const urlLang = params.get('lang')
    if (isLang(urlLang)) setLang(urlLang)
    else {
      try {
        const saved = localStorage.getItem('eg_lang')
        if (isLang(saved)) setLang(saved)
      } catch {}
    }
  }, [])

  // O layout raiz fixa lang="pt-BR"; sem isto o leitor de tela le o ingles com fonetica portuguesa.
  useEffect(() => {
    document.documentElement.lang = LANGUAGE_TAG[lang]
  }, [lang])

  // Detecta se e proposta personalizada (?p=) para manter o logo na LP
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setIsProposal(!!params.get('p'))
  }, [])

  const changeLang = (next: Language) => {
    setLang(next)
    try { localStorage.setItem('eg_lang', next) } catch {}
    replaceExperienceUrl({ lang: next === 'pt' ? null : next }, window.location.hash)
  }

  useEffect(() => {
    if (!caseId) return
    const html = document.documentElement.style.overflow
    const body = document.body.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = html
      document.body.style.overflow = body
    }
  }, [caseId])

  const scrollTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, index))
    setActiveSection(next)
    setHoveredDimension(null)
    document.getElementById(sections[next].id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    setNavOpen(false)
  }, [reduceMotion, sections])

  // Trocar de idioma recria scrollTo/modules/cases; sem a trava o efeito reprocessaria
  // os parametros da URL e contaria uma nova sessao a cada clique em PT/EN.
  const bootstrapped = useRef(false)
  useEffect(() => {
    if (bootstrapped.current) return
    bootstrapped.current = true
    const params = new URLSearchParams(window.location.search)
    setProspectTag(params.get('p'))
    const explore = params.get('explore') as TechModuleKey | null
    const requested = params.get('case')
    if (explore && modules[explore]) { setModuleKey(explore); setTimeout(() => scrollTo(3), 100) }
    if (requested && cases.some(item => item.id === requested)) { setCaseId(requested); setTimeout(() => scrollTo(7), 100) }
    track('presentation_started', { deck: 'tech' })
  }, [scrollTo, modules, cases])

  useEffect(() => {
    const observers = sections.map((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(index)
          track('section_viewed', { deck: 'tech', section: section.id })
          if (section.id === 'contato') track('presentation_completed', { deck: 'tech' })
        }
      }, { threshold: [0.2, 0.45], rootMargin: '-10% 0px -10% 0px' })
      observer.observe(element)
      return observer
    })
    return () => observers.forEach(observer => observer?.disconnect())
  }, [sections])

  const openModule = useCallback((key: TechModuleKey) => {
    setModuleKey(key)
    track('method_viewed', { deck: 'tech', method: key })
    replaceExperienceUrl({ explore: key, case: null }, '#metodo')
  }, [])

  const closeModule = useCallback(() => {
    setModuleKey(null)
    replaceExperienceUrl({ explore: null }, '#metodo')
  }, [])

  const openCase = useCallback((id: string) => {
    setCaseStep(0)
    setCaseId(id)
    track('case_viewed', { deck: 'tech', case: id })
    replaceExperienceUrl({ case: id, explore: null }, '#evidencias')
  }, [])

  const closeCase = useCallback(() => {
    setCaseId(null)
    replaceExperienceUrl({ case: null }, '#evidencias')
  }, [])

  const currentCase = useMemo(() => cases.find(item => item.id === caseId), [caseId, cases])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement)?.tagName)) return

      if (event.key === 'Escape') {
        setModuleKey(null); setCaseId(null); setNavOpen(false)
        replaceExperienceUrl({ explore: null, case: null })
        return
      }

      const isNext = ['ArrowDown', 'ArrowRight', 'PageDown'].includes(event.key)
      const isPrev = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)
      if (!isNext && !isPrev && event.key !== 'Home' && event.key !== 'End') return

      if (event.key === 'Home') { event.preventDefault(); scrollTo(0); return }
      if (event.key === 'End') { event.preventDefault(); scrollTo(sections.length - 1); return }

      // dentro de um case aberto, as setas andam pelos capitulos antes de sair
      if (caseId && currentCase) {
        event.preventDefault()
        if (isNext) {
          if (caseStep < currentCase.sections.length - 1) setCaseStep(step => step + 1)
          else {
            const index = cases.findIndex(item => item.id === caseId)
            if (index >= 0 && index < cases.length - 1) openCase(cases[index + 1].id)
            else { closeCase(); scrollTo(8) }
          }
        } else {
          if (caseStep > 0) setCaseStep(step => step - 1)
          else {
            const index = cases.findIndex(item => item.id === caseId)
            if (index > 0) openCase(cases[index - 1].id)
            else closeCase()
          }
        }
        return
      }

      // secao 01: os tres pedidos
      if (activeSection === 1) {
        event.preventDefault()
        if (isNext) { if (problem < problems.length - 1) setProblem(p => p + 1); else { setProblem(0); scrollTo(2) } }
        else { if (problem > 0) setProblem(p => p - 1); else scrollTo(0) }
        return
      }

      // secao 02: as sete dimensoes
      if (activeSection === 2) {
        event.preventDefault()
        setHoveredDimension(null)
        if (isNext) { if (dimension < dimensions.length - 1) setDimension(d => d + 1); else { setDimension(0); scrollTo(3) } }
        else { if (dimension > 0) setDimension(d => d - 1); else scrollTo(1) }
        return
      }

      // secao 03: os modulos do metodo
      if (activeSection === 3 || moduleKey !== null) {
        event.preventDefault()
        if (isNext) {
          if (!moduleKey) openModule(moduleKeys[0])
          else {
            const index = moduleKeys.indexOf(moduleKey)
            if (index < moduleKeys.length - 1) openModule(moduleKeys[index + 1])
            else { closeModule(); scrollTo(4) }
          }
        } else {
          if (!moduleKey) scrollTo(2)
          else {
            const index = moduleKeys.indexOf(moduleKey)
            if (index > 0) openModule(moduleKeys[index - 1])
            else closeModule()
          }
        }
        return
      }

      // secao 05: as capacidades
      if (activeSection === 5) {
        event.preventDefault()
        if (isNext) { if (capability < capabilities.length - 1) setCapability(c => c + 1); else { setCapability(0); scrollTo(6) } }
        else { if (capability > 0) setCapability(c => c - 1); else scrollTo(4) }
        return
      }

      event.preventDefault()
      scrollTo(activeSection + (isNext ? 1 : -1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeSection, caseId, caseStep, currentCase, cases, capability, capabilities.length, dimension, dimensions.length,
      moduleKey, openModule, closeModule, openCase, closeCase, problem, problems.length, scrollTo, sections.length])

  const visibleDimension = hoveredDimension ?? dimension
  const relatedDimensions = dimensionRelations[visibleDimension] || []
  const isLightSection = ['gargalo', 'escada', 'evidencias', 'padrao'].includes(sections[activeSection]?.id)

  return (
    <main className={`${styles.experience} grain`}>
      <header className={`${styles.topbar} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.brand} href={isProposal ? '#inicio' : '/'} aria-label="EverGreen — retornar ao site">
          <img src="/images/evergreen-horizontal.png" alt={t.brandAlt} />
        </a>
        <select
          className={styles.langSelect}
          value={lang}
          onChange={event => changeLang(event.target.value as Language)}
          aria-label="Idioma / Language"
        >
          {LANGUAGES.map(code => (
            <option key={code} value={code} title={LANGUAGE_NAME[code]}>{LANGUAGE_LABEL[code]}</option>
          ))}
        </select>
        <button className={styles.menuButton} onClick={() => setNavOpen(!navOpen)} aria-label={t.navMapTitle}>
          <Menu size={20} /><span>{String(activeSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</span>
        </button>
      </header>

      <nav className={`${styles.progress} ${isLightSection ? styles.lightProgress : ''}`} aria-label={lang === 'en' ? 'Presentation progress' : 'Progresso da apresentação'}>
        {sections.map((section, i) => (
          <button key={section.id} aria-label={section.label} className={i === activeSection ? styles.current : ''} onClick={() => scrollTo(i)}>
            <i /><span>{section.label}</span>
          </button>
        ))}
      </nav>

      <AnimatePresence>{navOpen && (
        <motion.div className={styles.navMap} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className={styles.closeButton} onClick={() => setNavOpen(false)}><X /></button>
          <Eyebrow>{t.navMapTitle}</Eyebrow>
          <div>{sections.map((section, i) => (
            <button key={section.id} onClick={() => scrollTo(i)}><span>{String(i + 1).padStart(2, '0')}</span>{section.label}<ArrowUpRight /></button>
          ))}</div>
        </motion.div>
      )}</AnimatePresence>

      {/* 00 — hero */}
      <section id="inicio" className={`${styles.chapter} ${styles.hero}`}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.heroCopy} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }}>
          <Eyebrow>{t.heroEyebrow}</Eyebrow>
          <h1>{lang === 'en' ? 'Technology' : 'Tecnologia'}<br />{lang === 'en' ? 'that holds an' : 'que sustenta a'} <em>{lang === 'en' ? 'operation.' : 'operação.'}</em></h1>
          <p>{t.heroSubtitle}</p>
          <button className={styles.exploreCue} onClick={() => scrollTo(1)}>
            {lang === 'en' ? 'Find the bottleneck' : 'Descobrir o gargalo'} <ArrowDown size={18} />
          </button>
        </motion.div>
        <EGMark />
        <div className={styles.heroFoot}>
          <span>{lang === 'en' ? 'PREDICTABLE, SCALABLE, AND TECH-DRIVEN GROWTH.' : 'CRESCIMENTO PREVISÍVEL, ESCALÁVEL E TECNOLÓGICO.'}</span>
          <span>{lang === 'en' ? 'SCROLL OR ARROWS' : 'SCROLL OU SETAS'}</span>
        </div>
      </section>

      {/* 01 — o gargalo */}
      <section id="gargalo" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`01 — ${t.bottleneckEyebrow}`} lead={t.bottleneckSubtitle}>{t.bottleneckTitle}</SectionTitle>
          <div className={styles.problemStage}>
            <div className={styles.problemTabs}>{problems.map((item, i) => (
              <button key={item.request} onClick={() => setProblem(i)} className={problem === i ? styles.active : ''}>
                <span>0{i + 1}</span>{item.request}
              </button>
            ))}</div>
            <AnimatePresence mode="wait">
              <motion.div key={problem} className={styles.problemFlow} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }}>
                <div><small>{t.reqLabel}</small><strong>{problems[problem]?.request}</strong></div><ChevronRight />
                <div><small>{t.sympLabel}</small><strong>{problems[problem]?.symptom}</strong></div><ChevronRight />
                <div className={styles.rootCause}><small>{t.causeLabel}</small><strong>{problems[problem]?.cause}</strong></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.statement}>
            {lang === 'en' ? 'The tool is rarely the problem.' : 'A ferramenta quase nunca é o problema.'}
            <b>{lang === 'en' ? ' What comes before it is.' : ' O que vem antes dela é.'}</b>
          </div>
        </div>
      </section>

      {/* 02 — as sete dimensoes */}
      <section id="maturidade" className={`${styles.chapter} ${styles.systemChapter}`}>
        <div className={styles.chapterInner}>
          <div className={styles.systemStageLayout}>
            <div className={styles.systemCopyCol}>
              <SectionTitle eyebrow={`02 — ${t.dimEyebrow}`} lead={t.dimLead}>{t.dimTitle}</SectionTitle>
              <div className={styles.dimensionQueryWrap}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={visibleDimension}
                    className={styles.dimensionQuery}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <b>{t.dimAskLabel}</b> — {dimensions[visibleDimension]?.asks}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className={styles.clickHint}><MousePointer2 size={15} /> {t.dimInstruction}</p>
            </div>
            <div className={`${styles.systemMap} ${styles.wheelMap}`} onPointerLeave={() => setHoveredDimension(null)}>
              <svg className={styles.ecosystemWheel} viewBox="0 0 100 100" aria-label={lang === 'en' ? 'Maturity wheel' : 'Roda de maturidade'}>
                {dimensions.map((item, i) => {
                  const isActive = visibleDimension === i
                  const isRelated = relatedDimensions.includes(i)
                  const point = sectorLabelPoint(i, dimensions.length)
                  const cls = `${styles.wheelSector} ${isActive ? styles.active : ''} ${isRelated ? styles.related : ''} ${!isActive && !isRelated ? styles.dimmed : ''}`
                  return (
                    <motion.g key={item.name} className={cls} role="button" tabIndex={0}
                      aria-label={`${item.name}: ${item.note}`} aria-pressed={dimension === i}
                      onClick={() => setDimension(i)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDimension(i) } }}
                      onPointerEnter={() => setHoveredDimension(i)}
                      onFocus={() => setHoveredDimension(i)} onBlur={() => setHoveredDimension(null)}>
                      <motion.path initial={false} animate={{ d: sectorPath(i, dimensions.length, isActive) }} transition={{ type: 'spring', stiffness: 240, damping: 24 }} />
                      <text x={point.x} y={point.y} textAnchor="middle" dominantBaseline="middle">{item.name}</text>
                    </motion.g>
                  )
                })}
                <circle className={styles.wheelInnerRing} cx="50" cy="50" r="19" />
              </svg>
              <div className={styles.revenueCore}>
                <AnimatePresence mode="wait">
                  <motion.div key={visibleDimension} className={styles.wheelCoreInfo} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }}>
                    <small>{lang === 'en' ? 'DIMENSION' : 'DIMENSÃO'} {String(visibleDimension + 1).padStart(2, '0')}/07</small>
                    <strong>{dimensions[visibleDimension]?.note}</strong>
                    <span>{dimensions[visibleDimension]?.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — metodo */}
      <section id="metodo" className={`${styles.chapter} ${styles.methodChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`03 — ${t.methodEyebrow}`} lead={lang === 'en' ? 'Diagnosis first, structuring next, continuous operation at the end.' : 'Diagnóstico primeiro, estruturação depois, operação contínua no fim.'}>{t.methodTitle}</SectionTitle>
          <div className={styles.methodShell}>
            <AnimatePresence mode="wait">
              {moduleKey ? (
                <ModuleDetail key={moduleKey} data={modules[moduleKey]} lang={lang} onClose={closeModule} />
              ) : (
                <motion.div className={styles.methodOverview} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {moduleKeys.map(key => {
                    const data = modules[key]
                    return (
                      <motion.button layoutId={`tech-${data.number}`} key={key} onClick={() => openModule(key)}>
                        <span>{data.number}</span>
                        <div><strong>{data.phase} · {data.title}</strong><small>{data.short}</small></div>
                        <ArrowUpRight />
                      </motion.button>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {!moduleKey && <p className={styles.clickHint}><MousePointer2 size={15} /> {t.methodInstruction}</p>}
        </div>
      </section>

      {/* 04 — escada de tecnologia */}
      <section id="escada" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`04 — ${t.ladderEyebrow}`} lead={t.ladderLead}>{t.ladderTitle}</SectionTitle>
          <div className={styles.ladderGrid}>
            {ladder.map(step => (
              <motion.div whileHover={{ y: -6 }} key={step.title} className={styles.ladderCard}>
                <span>{step.tag}</span>
                <h3>{step.title}</h3>
                <p>{step.lead}</p>
                <div className={styles.ladderGuarantee}>
                  <b>{t.guaranteeLabel}</b>
                  <span>{step.garantia}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.timeFooter}>
            <span>{lang === 'en' ? 'DIAGNOSE' : 'DIAGNOSTICAR'}</span><i />
            <span>{lang === 'en' ? 'STRUCTURE' : 'ESTRUTURAR'}</span><i />
            <span>{lang === 'en' ? 'OPERATE AND EVOLVE' : 'OPERAR E EVOLUIR'}</span>
          </div>
        </div>
      </section>

      {/* 05 — capacidades */}
      <section id="capacidades" className={styles.chapter}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`05 — ${t.capEyebrow}`}>{t.capTitle}</SectionTitle>
          <div className={styles.capabilityLayout}>
            <div className={styles.techCapabilityList}>
              {capabilities.map((item, i) => (
                <button key={item.name} onClick={() => setCapability(i)} className={capability === i ? styles.active : ''}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <div><strong>{item.name}</strong><small>{item.use}</small></div>
                  <ChevronRight size={13} />
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={capability} className={styles.techCapabilityPanel} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .28, ease }}>
                <small>{lang === 'en' ? 'CAPABILITY' : 'CAPACIDADE'} {String(capability + 1).padStart(2, '0')}</small>
                <h3>{capabilities[capability]?.name}</h3>
                <p>{capabilities[capability]?.use}</p>
                <div><span>{lang === 'en' ? 'WHEN IT ENTERS' : 'QUANDO ENTRA'}</span>{capabilities[capability]?.yes}</div>
                <div className={styles.no}><span>{lang === 'en' ? 'WHEN IT DOES NOT' : 'QUANDO NÃO ENTRA'}</span>{capabilities[capability]?.no}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 06 — equipe */}
      <section id="equipe" className={`${styles.chapter} ${styles.teamChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`06 — ${t.teamEyebrow}`}>{t.teamTitle}</SectionTitle>
          <div className={styles.teamGrid}>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/gustavo.jpg" alt="Gustavo Fugulin Soares da Silva" /><span>EG / 01</span></figure>
              <div className={styles.teamBody}>
                <span>01 / {lang === 'en' ? 'TECHNOLOGY' : 'TECNOLOGIA'}</span>
                <h3>Gustavo Fugulin<br />Soares da Silva</h3>
                <p>Founder &amp; CTO</p>
                <strong>{lang === 'en' ? 'Turning vision' : 'Visão transformada'}<br />{lang === 'en' ? 'into real tech.' : 'em tecnologia real.'}</strong>
                <div className={styles.teamBio}>{lang === 'en' ? 'Leads technical architecture and implementation. Connects software, data, AI and automation to build operations that deliver at scale.' : 'Lidera a arquitetura técnica e a implementação. Conecta software, dados, IA e automação para construir operações que entregam resultado com escala.'}</div>
                <div className={styles.teamSkills}>Software · {lang === 'en' ? 'Data' : 'Dados'} · AI · {lang === 'en' ? 'Automation' : 'Automação'} · {lang === 'en' ? 'Integrations' : 'Integrações'}</div>
                <blockquote>{lang === 'en' ? '“Great technology disappears — and shines in results.”' : '“Tecnologia boa some — e aparece no resultado.”'}</blockquote>
              </div>
            </article>
            <div className={styles.teamBridge}><i /><strong>{lang === 'en' ? 'SHARED' : 'CONTEXTO'}<br />{lang === 'en' ? 'CONTEXT' : 'COMPARTILHADO'}</strong><i /></div>
            <article className={styles.teamCard}>
              <figure className={styles.teamPortrait}><img src="/images/eduardo-profile-v2.png" alt="Eduardo Ferreira de Mattos" /><span>EG / 02</span></figure>
              <div className={styles.teamBody}>
                <span>02 / {lang === 'en' ? 'STRATEGY' : 'ESTRATÉGIA'}</span>
                <h3>Eduardo<br />Ferreira de Mattos</h3>
                <p>Founder &amp; CEO</p>
                <strong>{lang === 'en' ? 'Engineer by training.' : 'Engenheiro por formação.'}<br />{lang === 'en' ? 'Builder by vocation.' : 'Executor por vocação.'}</strong>
                <div className={styles.teamBio}>{lang === 'en' ? 'Leads diagnosis and direction. Makes sure the software being built answers a business problem, not a technical preference.' : 'Lidera o diagnóstico e a direção. Garante que o software construído responde a um problema de negócio, não a uma preferência técnica.'}</div>
                <div className={styles.teamSkills}>Growth Strategy · Revenue · CRM · {lang === 'en' ? 'Product' : 'Produto'}</div>
                <blockquote>{lang === 'en' ? '“If it doesn’t move the needle, we don’t even start.”' : '“Se não mexe no gráfico, a gente nem começa.”'}</blockquote>
              </div>
            </article>
          </div>
          <div className={styles.teamStatement}>
            {lang === 'en' ? 'Architecture does not end in a diagram.' : 'A arquitetura não termina no diagrama.'}<br />
            <b>{lang === 'en' ? 'Delivery does not start without context.' : 'A entrega não começa sem contexto.'}</b>
          </div>
        </div>
      </section>

      {/* 07 — evidencias */}
      <section id="evidencias" className={`${styles.chapter} ${styles.lightChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`07 — ${t.evidEyebrow}`} lead={lang === 'en' ? 'Delivered platforms, our own infrastructure, and a prototype shipped before the contract.' : 'Plataformas entregues, a nossa própria infraestrutura, e um protótipo entregue antes do contrato.'}>{t.evidTitle}</SectionTitle>
          {caseFallback && <p className={styles.clickHint}>{t.caseFallbackNote}</p>}
          <div className={styles.caseGrid}>{cases.map((item, i) => (
            <motion.button whileHover={{ y: -6 }} key={item.id} onClick={() => openCase(item.id)}>
              <span className={styles.caseIndex}>0{i + 1} / {item.name}</span>
              <small>{item.category}</small>
              <h3>{item.headline}</h3>
              <strong className={styles.caseMetric}>{item.metric}</strong>
              <p>{item.evidence}</p>
              <span className={styles.caseHighlights}>{item.highlights.map(h => <b key={h}>{h}</b>)}</span>
              <span className={styles.caseCta}>{t.openCase} <ArrowUpRight size={17} /></span>
            </motion.button>
          ))}</div>
        </div>
        <AnimatePresence>{currentCase && (
          <motion.div className={styles.caseOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className={styles.closeButton} aria-label={lang === 'en' ? 'Close case study' : 'Fechar estudo de caso'} onClick={closeCase}><X /></button>
            <div className={styles.caseHeading}>
              <Eyebrow>{lang === 'en' ? 'Inside the build' : 'Por dentro da construção'}</Eyebrow>
              <span>{currentCase.category}</span>
              <h3>{currentCase.name}</h3>
              <strong>{currentCase.headline}</strong>
              <b>{currentCase.metric}</b>
              <p>{currentCase.evidence}</p>
            </div>
            <div className={styles.caseSteps}>{currentCase.sections.map((step, i) => (
              <button key={step.label} className={caseStep === i ? styles.active : ''} onClick={() => setCaseStep(i)}>
                <span>{String(i + 1).padStart(2, '0')}</span>{step.label}
              </button>
            ))}</div>
            {currentCase.sections[caseStep] && (
              <motion.div key={`${currentCase.id}-${caseStep}`} className={styles.caseContent} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
                <small>{currentCase.sections[caseStep].label}</small>
                <CaseSectionCopy section={currentCase.sections[caseStep]} />
                <div className={styles.caseControls}>
                  <button aria-label={lang === 'en' ? 'Previous step' : 'Passo anterior'} disabled={caseStep === 0} onClick={() => setCaseStep(s => Math.max(0, s - 1))}><ArrowLeft /></button>
                  <button aria-label={lang === 'en' ? 'Next step' : 'Próximo passo'} disabled={caseStep >= currentCase.sections.length - 1} onClick={() => setCaseStep(s => Math.min(currentCase.sections.length - 1, s + 1))}><ArrowRight /></button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}</AnimatePresence>
      </section>

      {/* 08 — padrao */}
      <section id="padrao" className={`${styles.chapter} ${styles.manifestoChapter}`}>
        <div className={styles.chapterInner}>
          <SectionTitle eyebrow={`08 — ${t.patternEyebrow}`}>{t.patternTitle}</SectionTitle>
          <div className={styles.manifesto}>{manifesto.map((line, i) => (
            <motion.div key={line[0]} initial={{ opacity: .25 }} whileInView={{ opacity: 1 }} viewport={{ amount: .8 }}>
              <span>0{i + 1}</span><strong>{line[0]}</strong><em>{line[1]}</em>
            </motion.div>
          ))}</div>
        </div>
      </section>

      {/* 09 — contato */}
      <section id="contato" className={`${styles.chapter} ${styles.closing}`}>
        <div className={styles.closingOrb} aria-hidden="true" />
        <div>
          <Eyebrow>{t.contactEyebrow}</Eyebrow>
          <h2>{lang === 'en' ? 'We don’t sell technology' : 'Não vendemos tecnologia'}<br />{lang === 'en' ? 'for its own sake.' : 'pela tecnologia.'}</h2>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .35 }}>
            {lang === 'en' ? 'We sell an operation that' : 'Vendemos uma operação que'}<br /><em>{lang === 'en' ? 'stops depending on people remembering.' : 'para de depender de alguém lembrar.'}</em>
          </motion.h3>
          <p>{t.contactSubtitle}</p>
          <div className={styles.ctas}>
            <a href={whatsappHref(lang)} target="_blank" rel="noreferrer" onClick={() => track('whatsapp_clicked', { deck: 'tech' })}>{t.ctaPrimary} <ArrowUpRight /></a>
            <a href="https://evergreenmkt.com.br" onClick={() => track('cta_clicked', { deck: 'tech' })}>evergreenmkt.com.br</a>
          </div>
        </div>
        <footer>
          <span>EVERGREEN © {new Date().getFullYear()}</span>
          <span>{lang === 'en' ? 'PROCESS · DATA · CONTEXT' : 'PROCESSO · DADO · CONTEXTO'}</span>
        </footer>
      </section>
    </main>
  )
}
