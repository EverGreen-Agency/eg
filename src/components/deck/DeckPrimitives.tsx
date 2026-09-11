'use client'

import type { CaseContentSection } from './types'
import styles from './deck.module.css'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className={styles.eyebrow}><span />{children}</div>
}

export function SectionTitle({ eyebrow, children, lead }: { eyebrow: string; children: React.ReactNode; lead?: string }) {
  return <div className={styles.titleBlock}><Eyebrow>{eyebrow}</Eyebrow><h2>{children}</h2>{lead && <p>{lead}</p>}</div>
}

export function CaseSectionCopy({ section }: { section: CaseContentSection }) {
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
