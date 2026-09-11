/**
 * Os cinco modulos do metodo em espanhol, italiano, frances e alemao.
 *
 * Separado de `i18n.ts` so por tamanho — mesma origem, mesma data (2026-08-28).
 * As fases (`phase`) NAO sao traduzidas: Raiz, Tronco, Ramos e Copa sao o nome
 * proprio do Sistema Raiz EG, como "Kanban" ou "Scrum". O verbo (`action`) e
 * traduzido, porque descreve a acao, nao a marca.
 */

type Mod = {
  number: string
  phase: 'Raiz' | 'Tronco' | 'Ramos' | 'Copa'
  action: string
  title: string
  short: string
  headline: string
  groups: { title: string; items: string[] }[]
}
type ModKey = 'diagnostico' | 'arquitetura' | 'implementacao' | 'operacao' | 'evolucao'

export const modulesExtra: Record<'es' | 'it' | 'fr' | 'de', Record<ModKey, Mod>> = {
  es: {
    diagnostico: {
      number: '01', phase: 'Raiz', action: 'Diagnosticar', title: 'Diagnóstico',
      short: 'Encontrar por dónde se escapa el ingreso.',
      headline: 'Antes de decidir qué hacer, descubrimos por dónde se está escapando el ingreso.',
      groups: [
        { title: 'Qué analizamos', items: ['Oferta', 'Adquisición', 'Recorrido', 'Atención', 'Proceso comercial', 'Datos'] },
        { title: 'Qué buscamos', items: ['Cuellos de botella', 'Fugas', 'Fricción', 'Falta de cadencia', 'Datos inconsistentes'] },
        { title: 'Qué sale — la Radiografía Comercial', items: ['Línea base', 'Mapa de cuellos de botella', 'Nota de 0 a 10 en los 3 pilares', 'Hipótesis prioritarias', 'Plan de 90 días'] },
      ],
    },
    arquitetura: {
      number: '02', phase: 'Tronco', action: 'Priorizar', title: 'Arquitectura',
      short: 'Diseñar el sistema que necesita funcionar.',
      headline: 'Conectamos recorrido, proceso, datos y tecnología antes de acelerar.',
      groups: [
        { title: 'Sistema', items: ['Origen del lead', 'Landing page', 'CRM', 'Pipeline', 'Atención', 'Seguimiento'] },
        { title: 'Decisiones', items: ['Roles', 'SLA', 'Criterios', 'Cadencia', 'Medición'] },
        { title: 'Qué sale', items: ['Embudo diseñado', 'Proceso comercial', 'Mapa de datos', 'Prioridades'] },
      ],
    },
    implementacao: {
      number: '03', phase: 'Ramos', action: 'Estructurar', title: 'Implementación',
      short: 'Activar las palancas prioritarias.',
      headline: 'Implementar bien también es decidir qué no hacer ahora.',
      groups: [
        { title: 'Prioridad 01', items: ['Medición', 'Impacto alto', 'Complejidad baja'] },
        { title: 'Prioridad 02', items: ['Pipeline comercial', 'Impacto alto', 'Complejidad media'] },
        { title: 'Prioridad 03', items: ['Campañas', 'Impacto medio', 'Complejidad media'] },
      ],
    },
    operacao: {
      number: '04', phase: 'Copa', action: 'Evolucionar', title: 'Operación',
      short: 'Medir, aprender y decidir.',
      headline: 'Los indicadores solo valen cuando llevan a una decisión.',
      groups: [
        { title: 'Scorecard', items: ['Leads', 'Cualificación', 'Pipeline', 'Conversión', 'CAC', 'Ingresos'] },
        { title: 'Ritmo', items: ['Ritos', 'Pruebas', 'Hipótesis', 'Próximas acciones'] },
        { title: 'Aprendizaje', items: ['Tendencia', 'Contexto', 'Decisión', 'Responsable'] },
      ],
    },
    evolucao: {
      number: '05', phase: 'Copa', action: 'Evolucionar', title: 'Evolución',
      short: 'Convertir aprendizaje en escala. La Copa no termina.',
      headline: 'El sistema no acaba: gana capacidades nuevas.',
      groups: [
        { title: 'Ahora', items: ['Quitar restricciones', 'Crear línea base'] },
        { title: '90 días', items: ['Validar hipótesis', 'Consolidar cadencia'] },
        { title: 'Horizonte', items: ['Automatización', 'Nuevos módulos', 'Escala sostenible'] },
      ],
    },
  },

  it: {
    diagnostico: {
      number: '01', phase: 'Raiz', action: 'Diagnosticare', title: 'Diagnosi',
      short: 'Trovare da dove esce il ricavo.',
      headline: 'Prima di decidere cosa fare, scopriamo da dove sta uscendo il ricavo.',
      groups: [
        { title: 'Cosa analizziamo', items: ['Offerta', 'Acquisizione', 'Percorso', 'Risposta commerciale', 'Processo commerciale', 'Dati'] },
        { title: 'Cosa cerchiamo', items: ['Colli di bottiglia', 'Perdite', 'Attrito', 'Mancanza di cadenza', 'Dati incoerenti'] },
        { title: 'Cosa esce — la Radiografia Commerciale', items: ['Baseline', 'Mappa dei colli di bottiglia', 'Voto da 0 a 10 sui 3 pilastri', 'Ipotesi prioritarie', 'Piano a 90 giorni'] },
      ],
    },
    arquitetura: {
      number: '02', phase: 'Tronco', action: 'Prioritizzare', title: 'Architettura',
      short: 'Progettare il sistema che deve funzionare.',
      headline: 'Colleghiamo percorso, processo, dati e tecnologia prima di accelerare.',
      groups: [
        { title: 'Sistema', items: ['Origine del lead', 'Landing page', 'CRM', 'Pipeline', 'Risposta', 'Follow-up'] },
        { title: 'Decisioni', items: ['Ruoli', 'SLA', 'Criteri', 'Cadenza', 'Tracciamento'] },
        { title: 'Cosa esce', items: ['Funnel progettato', 'Processo commerciale', 'Mappa dei dati', 'Priorità'] },
      ],
    },
    implementacao: {
      number: '03', phase: 'Ramos', action: 'Strutturare', title: 'Implementazione',
      short: 'Attivare le leve prioritarie.',
      headline: 'Implementare bene significa anche decidere cosa non fare adesso.',
      groups: [
        { title: 'Priorità 01', items: ['Tracciamento', 'Impatto alto', 'Complessità bassa'] },
        { title: 'Priorità 02', items: ['Pipeline commerciale', 'Impatto alto', 'Complessità media'] },
        { title: 'Priorità 03', items: ['Campagne', 'Impatto medio', 'Complessità media'] },
      ],
    },
    operacao: {
      number: '04', phase: 'Copa', action: 'Evolvere', title: 'Operazione',
      short: 'Misurare, imparare e decidere.',
      headline: 'Gli indicatori valgono solo quando portano a una decisione.',
      groups: [
        { title: 'Scorecard', items: ['Lead', 'Qualificazione', 'Pipeline', 'Conversione', 'CAC', 'Ricavo'] },
        { title: 'Ritmo', items: ['Riti', 'Test', 'Ipotesi', 'Prossime azioni'] },
        { title: 'Apprendimento', items: ['Tendenza', 'Contesto', 'Decisione', 'Responsabile'] },
      ],
    },
    evolucao: {
      number: '05', phase: 'Copa', action: 'Evolvere', title: 'Evoluzione',
      short: 'Trasformare apprendimento in scala. La Chioma non finisce.',
      headline: 'Il sistema non finisce: acquisisce nuove capacità.',
      groups: [
        { title: 'Adesso', items: ['Rimuovere i vincoli', 'Creare la baseline'] },
        { title: '90 giorni', items: ['Validare le ipotesi', 'Consolidare la cadenza'] },
        { title: 'Orizzonte', items: ['Automazione', 'Nuovi moduli', 'Scala sostenibile'] },
      ],
    },
  },

  fr: {
    diagnostico: {
      number: '01', phase: 'Raiz', action: 'Diagnostiquer', title: 'Diagnostic',
      short: 'Trouver où le revenu fuit.',
      headline: "Avant de décider quoi faire, nous trouvons où le revenu s'échappe.",
      groups: [
        { title: 'Ce que nous analysons', items: ['Offre', 'Acquisition', 'Parcours', 'Traitement', 'Processus commercial', 'Données'] },
        { title: 'Ce que nous cherchons', items: ["Goulots d'étranglement", 'Fuites', 'Friction', 'Absence de cadence', 'Données incohérentes'] },
        { title: 'Ce qui en sort — la Radiographie Commerciale', items: ['Référence', 'Carte des goulots', 'Note de 0 à 10 sur les 3 piliers', 'Hypothèses prioritaires', 'Plan à 90 jours'] },
      ],
    },
    arquitetura: {
      number: '02', phase: 'Tronco', action: 'Prioriser', title: 'Architecture',
      short: 'Concevoir le système qui doit fonctionner.',
      headline: "Nous relions parcours, processus, données et technologie avant d'accélérer.",
      groups: [
        { title: 'Système', items: ['Source du lead', 'Landing page', 'CRM', 'Pipeline', 'Traitement', 'Relance'] },
        { title: 'Décisions', items: ['Rôles', 'SLA', 'Critères', 'Cadence', 'Mesure'] },
        { title: 'Ce qui en sort', items: ['Entonnoir conçu', 'Processus commercial', 'Cartographie des données', 'Priorités'] },
      ],
    },
    implementacao: {
      number: '03', phase: 'Ramos', action: 'Structurer', title: 'Implémentation',
      short: 'Activer les leviers prioritaires.',
      headline: "Bien implémenter, c'est aussi décider ce qu'on ne fait pas maintenant.",
      groups: [
        { title: 'Priorité 01', items: ['Mesure', 'Impact élevé', 'Complexité faible'] },
        { title: 'Priorité 02', items: ['Pipeline commercial', 'Impact élevé', 'Complexité moyenne'] },
        { title: 'Priorité 03', items: ['Campagnes', 'Impact moyen', 'Complexité moyenne'] },
      ],
    },
    operacao: {
      number: '04', phase: 'Copa', action: 'Faire évoluer', title: 'Opération',
      short: 'Mesurer, apprendre et décider.',
      headline: "Un indicateur ne vaut que lorsqu'il mène à une décision.",
      groups: [
        { title: 'Scorecard', items: ['Leads', 'Qualification', 'Pipeline', 'Conversion', 'CAC', 'Revenu'] },
        { title: 'Rythme', items: ['Rituels', 'Tests', 'Hypothèses', 'Prochaines actions'] },
        { title: 'Apprentissage', items: ['Tendance', 'Contexte', 'Décision', 'Responsable'] },
      ],
    },
    evolucao: {
      number: '05', phase: 'Copa', action: 'Faire évoluer', title: 'Évolution',
      short: "Transformer l'apprentissage en échelle. La Copa ne s'arrête pas.",
      headline: 'Le système ne se termine pas : il gagne de nouvelles capacités.',
      groups: [
        { title: 'Maintenant', items: ['Lever les contraintes', 'Créer la référence'] },
        { title: '90 jours', items: ['Valider les hypothèses', 'Consolider la cadence'] },
        { title: 'Horizon', items: ['Automatisation', 'Nouveaux modules', 'Échelle durable'] },
      ],
    },
  },

  de: {
    diagnostico: {
      number: '01', phase: 'Raiz', action: 'Diagnostizieren', title: 'Diagnose',
      short: 'Finden, wo der Umsatz versickert.',
      headline: 'Bevor wir entscheiden, was zu tun ist, finden wir, wo der Umsatz versickert.',
      groups: [
        { title: 'Was wir analysieren', items: ['Angebot', 'Akquise', 'Journey', 'Reaktion', 'Vertriebsprozess', 'Daten'] },
        { title: 'Wonach wir suchen', items: ['Engpässe', 'Leckagen', 'Reibung', 'Fehlende Kadenz', 'Inkonsistente Daten'] },
        { title: 'Was herauskommt — das Vertriebs-Röntgenbild', items: ['Baseline', 'Engpasskarte', 'Note 0 bis 10 auf den 3 Säulen', 'Priorisierte Hypothesen', '90-Tage-Plan'] },
      ],
    },
    arquitetura: {
      number: '02', phase: 'Tronco', action: 'Priorisieren', title: 'Architektur',
      short: 'Das System entwerfen, das funktionieren muss.',
      headline: 'Wir verbinden Journey, Prozess, Daten und Technologie, bevor wir beschleunigen.',
      groups: [
        { title: 'System', items: ['Lead-Quelle', 'Landing Page', 'CRM', 'Pipeline', 'Reaktion', 'Follow-up'] },
        { title: 'Entscheidungen', items: ['Rollen', 'SLA', 'Kriterien', 'Kadenz', 'Tracking'] },
        { title: 'Was herauskommt', items: ['Funnel-Entwurf', 'Vertriebsprozess', 'Datenkarte', 'Prioritäten'] },
      ],
    },
    implementacao: {
      number: '03', phase: 'Ramos', action: 'Strukturieren', title: 'Umsetzung',
      short: 'Die prioritären Hebel aktivieren.',
      headline: 'Gut umsetzen heißt auch entscheiden, was jetzt nicht gemacht wird.',
      groups: [
        { title: 'Priorität 01', items: ['Tracking', 'Hohe Wirkung', 'Geringe Komplexität'] },
        { title: 'Priorität 02', items: ['Vertriebspipeline', 'Hohe Wirkung', 'Mittlere Komplexität'] },
        { title: 'Priorität 03', items: ['Kampagnen', 'Mittlere Wirkung', 'Mittlere Komplexität'] },
      ],
    },
    operacao: {
      number: '04', phase: 'Copa', action: 'Weiterentwickeln', title: 'Betrieb',
      short: 'Messen, lernen und entscheiden.',
      headline: 'Kennzahlen zählen erst, wenn sie zu einer Entscheidung führen.',
      groups: [
        { title: 'Scorecard', items: ['Leads', 'Qualifizierung', 'Pipeline', 'Conversion', 'CAC', 'Umsatz'] },
        { title: 'Rhythmus', items: ['Rituale', 'Tests', 'Hypothesen', 'Nächste Schritte'] },
        { title: 'Lernen', items: ['Trend', 'Kontext', 'Entscheidung', 'Verantwortlich'] },
      ],
    },
    evolucao: {
      number: '05', phase: 'Copa', action: 'Weiterentwickeln', title: 'Evolution',
      short: 'Lernen in Skalierung verwandeln. Die Copa endet nicht.',
      headline: 'Das System endet nicht: es gewinnt neue Fähigkeiten.',
      groups: [
        { title: 'Jetzt', items: ['Restriktionen entfernen', 'Baseline schaffen'] },
        { title: '90 Tage', items: ['Hypothesen validieren', 'Kadenz festigen'] },
        { title: 'Horizont', items: ['Automatisierung', 'Neue Module', 'Nachhaltige Skalierung'] },
      ],
    },
  },
}
