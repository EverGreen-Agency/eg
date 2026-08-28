/**
 * Espanhol, italiano, frances e alemao do deck de growth.
 *
 * Portugues e ingles seguem em `data.ts` — sao os originais. Este arquivo tem as
 * quatro linguas adicionadas em 2026-08-28.
 *
 * **Os corpos dos cases NAO estao aqui, de proposito.** Eles carregam valores em
 * R$, cidade brasileira, tribunal brasileiro e uma ferramenta (Kommo) com pegada
 * regional. Traduzir a superficie sem adaptar moeda, mercado e referencia produz
 * a aparencia de localizacao sem a substancia — e um prospect alemao lendo
 * "R$ 55 mil" nao aprende nada. Nestas quatro linguas os cases caem para o
 * ingles, o que esta declarado na interface (`caseFallbackNote`), nao escondido.
 */

import type { Language } from '@/components/deck/types'

type Section = { id: string; label: string }
type Problem = { request: string; symptom: string; cause: string }
type Lever = { name: string; note: string; kind: 'pilar' | 'sustentacao' }
type Capability = { name: string; use: string; yes: string; no: string }

/** Linguas cujo corpo de case cai para o ingles. */
export const CASE_FALLBACK_LANGS: Language[] = ['es', 'it', 'fr', 'de']

export const sectionsExtra: Record<'es' | 'it' | 'fr' | 'de', Section[]> = {
  es: [
    { id: 'inicio', label: 'Inicio' }, { id: 'gargalo', label: 'El cuello de botella' },
    { id: 'sistema', label: 'Cómo pensamos' }, { id: 'metodo', label: 'Método EG' },
    { id: 'tempo', label: 'En el tiempo' }, { id: 'capacidades', label: 'Capacidades' },
    { id: 'equipe', label: 'Equipo' }, { id: 'evidencias', label: 'Evidencias' },
    { id: 'padrao', label: 'Nuestro estándar' }, { id: 'contato', label: 'Contacto' },
  ],
  it: [
    { id: 'inicio', label: 'Inizio' }, { id: 'gargalo', label: 'Il collo di bottiglia' },
    { id: 'sistema', label: 'Come pensiamo' }, { id: 'metodo', label: 'Metodo EG' },
    { id: 'tempo', label: 'Nel tempo' }, { id: 'capacidades', label: 'Capacità' },
    { id: 'equipe', label: 'Team' }, { id: 'evidencias', label: 'Evidenze' },
    { id: 'padrao', label: 'Il nostro standard' }, { id: 'contato', label: 'Contatto' },
  ],
  fr: [
    { id: 'inicio', label: 'Accueil' }, { id: 'gargalo', label: 'Le goulot' },
    { id: 'sistema', label: 'Notre lecture' }, { id: 'metodo', label: 'Méthode EG' },
    { id: 'tempo', label: 'Dans le temps' }, { id: 'capacidades', label: 'Capacités' },
    { id: 'equipe', label: 'Équipe' }, { id: 'evidencias', label: 'Preuves' },
    { id: 'padrao', label: 'Notre exigence' }, { id: 'contato', label: 'Contact' },
  ],
  de: [
    { id: 'inicio', label: 'Start' }, { id: 'gargalo', label: 'Der Engpass' },
    { id: 'sistema', label: 'Unser Denken' }, { id: 'metodo', label: 'EG-Methode' },
    { id: 'tempo', label: 'Im Zeitverlauf' }, { id: 'capacidades', label: 'Fähigkeiten' },
    { id: 'equipe', label: 'Team' }, { id: 'evidencias', label: 'Belege' },
    { id: 'padrao', label: 'Unser Standard' }, { id: 'contato', label: 'Kontakt' },
  ],
}

export const problemsExtra: Record<'es' | 'it' | 'fr' | 'de', Problem[]> = {
  es: [
    { request: '«Quiero Google Ads.»', symptom: 'Entran leads, pero la atención tarda.', cause: 'Recorrido y proceso.' },
    { request: '«Quiero un CRM.»', symptom: 'No hay cadencia ni criterio comercial.', cause: 'Operación comercial.' },
    { request: '«Quiero automatizar.»', symptom: 'El flujo ya nace confuso.', cause: 'Arquitectura del proceso.' },
  ],
  it: [
    { request: '«Voglio Google Ads.»', symptom: 'I lead arrivano, ma la risposta commerciale tarda.', cause: 'Percorso e processo.' },
    { request: '«Voglio un CRM.»', symptom: 'Non esiste cadenza né criterio commerciale.', cause: 'Operazione commerciale.' },
    { request: '«Voglio automatizzare.»', symptom: 'Il flusso nasce già confuso.', cause: 'Architettura del processo.' },
  ],
  fr: [
    { request: "« Je veux Google Ads. »", symptom: 'Les leads arrivent, mais la réponse commerciale traîne.', cause: 'Parcours et processus.' },
    { request: "« Je veux un CRM. »", symptom: "Il n'existe ni cadence ni critère commercial.", cause: 'Opération commerciale.' },
    { request: "« Je veux automatiser. »", symptom: 'Le flux naît déjà confus.', cause: 'Architecture du processus.' },
  ],
  de: [
    { request: '„Ich will Google Ads."', symptom: 'Leads kommen rein, aber die Reaktion dauert.', cause: 'Journey und Prozess.' },
    { request: '„Ich will ein CRM."', symptom: 'Es gibt weder Kadenz noch Vertriebskriterien.', cause: 'Vertriebsbetrieb.' },
    { request: '„Ich will Automatisierung."', symptom: 'Der Ablauf ist schon im Ansatz unklar.', cause: 'Prozessarchitektur.' },
  ],
}

export const leversExtra: Record<'es' | 'it' | 'fr' | 'de', Lever[]> = {
  es: [
    { name: 'Oferta', note: 'Claridad de valor y encaje con el mercado.', kind: 'pilar' },
    { name: 'Demanda', note: 'Demanda medible, no volumen vacío.', kind: 'pilar' },
    { name: 'Conversión', note: 'El recorrido del primer contacto al cierre, sin fricción innecesaria.', kind: 'pilar' },
    { name: 'Datos', note: 'Evidencia para decidir el próximo movimiento.', kind: 'sustentacao' },
    { name: 'Tecnología', note: 'Infraestructura que sostiene el proceso.', kind: 'sustentacao' },
    { name: 'Personas', note: 'Roles, contexto y responsabilidad claros.', kind: 'sustentacao' },
    { name: 'Proceso', note: 'Cadencia que convierte intención en ingresos.', kind: 'sustentacao' },
  ],
  it: [
    { name: 'Offerta', note: 'Chiarezza di valore e aderenza al mercato.', kind: 'pilar' },
    { name: 'Domanda', note: 'Domanda misurabile, non volume vuoto.', kind: 'pilar' },
    { name: 'Conversione', note: 'Il percorso dal primo contatto alla chiusura, senza attrito inutile.', kind: 'pilar' },
    { name: 'Dati', note: 'Evidenza per decidere la mossa successiva.', kind: 'sustentacao' },
    { name: 'Tecnologia', note: 'Infrastruttura che sostiene il processo.', kind: 'sustentacao' },
    { name: 'Persone', note: 'Ruoli, contesto e responsabilità chiari.', kind: 'sustentacao' },
    { name: 'Processo', note: 'Cadenza che trasforma intenzione in ricavo.', kind: 'sustentacao' },
  ],
  fr: [
    { name: 'Offre', note: 'Clarté de la valeur et adéquation au marché.', kind: 'pilar' },
    { name: 'Demande', note: 'Demande mesurable, pas du volume vide.', kind: 'pilar' },
    { name: 'Conversion', note: 'Le parcours du premier contact à la signature, sans friction inutile.', kind: 'pilar' },
    { name: 'Données', note: 'Des preuves pour décider du prochain mouvement.', kind: 'sustentacao' },
    { name: 'Technologie', note: 'Infrastructure qui soutient le processus.', kind: 'sustentacao' },
    { name: 'Personnes', note: 'Rôles, contexte et responsabilité clairs.', kind: 'sustentacao' },
    { name: 'Processus', note: 'Cadence qui transforme une intention en revenu.', kind: 'sustentacao' },
  ],
  de: [
    { name: 'Angebot', note: 'Klarer Wert und Marktpassung.', kind: 'pilar' },
    { name: 'Nachfrage', note: 'Messbare Nachfrage, kein leeres Volumen.', kind: 'pilar' },
    { name: 'Conversion', note: 'Der Weg vom Erstkontakt zum Abschluss, ohne unnötige Reibung.', kind: 'pilar' },
    { name: 'Daten', note: 'Evidenz für die nächste Entscheidung.', kind: 'sustentacao' },
    { name: 'Technologie', note: 'Infrastruktur, die den Prozess trägt.', kind: 'sustentacao' },
    { name: 'Menschen', note: 'Klare Rollen, Kontext und Verantwortung.', kind: 'sustentacao' },
    { name: 'Prozess', note: 'Kadenz, die Absicht in Umsatz verwandelt.', kind: 'sustentacao' },
  ],
}

export const capabilitiesExtra: Record<'es' | 'it' | 'fr' | 'de', Capability[]> = {
  es: [
    { name: 'CRM', use: 'Pipeline, cadencia y próximo paso.', yes: 'Cuando falta visibilidad y proceso comercial.', no: 'Cuando se espera que la herramienta arregle una operación sin dueño.' },
    { name: 'Medios', use: 'Demanda medible y cualificada.', yes: 'Con oferta validada y capacidad de atención.', no: 'Cuando más demanda ampliaría un cuello de botella existente.' },
    { name: 'CRO', use: 'Reducir fricción en recorridos críticos.', yes: 'Cuando hay tráfico y una hipótesis medible.', no: 'Cuando el problema principal está después de la conversión.' },
    { name: 'Web', use: 'Experiencias digitales orientadas a la decisión.', yes: 'Cuando la interfaz debe explicar, probar o convertir.', no: 'Cuando una página nueva solo enmascara una oferta confusa.' },
    { name: 'Datos', use: 'Transformar señales en decisiones.', yes: 'Cuando hay decisiones recurrentes sin evidencia fiable.', no: 'Cuando medirlo todo sustituye la elección de pocos KPI útiles.' },
    { name: 'Automatización', use: 'Reducir fricción y trabajo manual.', yes: 'Cuando el proceso ya es claro y repetible.', no: 'Cuando el flujo a automatizar todavía está mal.' },
    { name: 'IA', use: 'Ampliar capacidad con contexto y control.', yes: 'Cuando hay tarea, dato y criterio de calidad definidos.', no: 'Cuando se trata la IA como estrategia en sí misma.' },
    { name: 'RevOps', use: 'Alinear marketing, ventas e ingresos.', yes: 'Cuando las áreas optimizan métricas desconectadas.', no: 'Cuando no hay compromiso ejecutivo con el proceso.' },
    { name: 'Producto', use: 'Construir infraestructura a medida.', yes: 'Cuando el software crea ventaja operativa real.', no: 'Cuando una solución lista resuelve mejor y más rápido.' },
  ],
  it: [
    { name: 'CRM', use: 'Pipeline, cadenza e passo successivo.', yes: 'Quando mancano visibilità e processo commerciale.', no: "Quando si pretende che lo strumento sistemi un'operazione senza responsabile." },
    { name: 'Media', use: 'Domanda misurabile e qualificata.', yes: 'Con offerta validata e capacità di risposta.', no: 'Quando più domanda amplierebbe un collo di bottiglia esistente.' },
    { name: 'CRO', use: 'Ridurre attrito nei percorsi critici.', yes: "Quando c'è traffico e un'ipotesi misurabile.", no: 'Quando il problema principale sta dopo la conversione.' },
    { name: 'Web', use: 'Esperienze digitali orientate alla decisione.', yes: "Quando l'interfaccia deve spiegare, provare o convertire.", no: "Quando una pagina nuova maschera solo un'offerta confusa." },
    { name: 'Dati', use: 'Trasformare segnali in decisioni.', yes: 'Quando ci sono decisioni ricorrenti senza evidenza affidabile.', no: 'Quando misurare tutto sostituisce la scelta di pochi KPI utili.' },
    { name: 'Automazione', use: 'Ridurre attrito e lavoro manuale.', yes: 'Quando il processo è già chiaro e ripetibile.', no: 'Quando il flusso da automatizzare è ancora sbagliato.' },
    { name: 'IA', use: 'Ampliare capacità con contesto e controllo.', yes: 'Quando compito, dato e criterio di qualità sono definiti.', no: "Quando l'IA è trattata come strategia in sé." },
    { name: 'RevOps', use: 'Allineare marketing, vendite e ricavi.', yes: 'Quando le aree ottimizzano metriche scollegate.', no: 'Quando manca impegno esecutivo sul processo.' },
    { name: 'Prodotto', use: 'Costruire infrastruttura su misura.', yes: 'Quando il software crea un vantaggio operativo reale.', no: 'Quando una soluzione pronta risolve meglio e prima.' },
  ],
  fr: [
    { name: 'CRM', use: 'Pipeline, cadence et prochaine étape.', yes: 'Quand la visibilité et le processus commercial manquent.', no: "Quand on attend de l'outil qu'il corrige une opération sans responsable." },
    { name: 'Média', use: 'Demande mesurable et qualifiée.', yes: 'Avec une offre validée et une capacité de traitement.', no: "Quand plus de demande amplifierait un goulot existant." },
    { name: 'CRO', use: 'Réduire la friction sur les parcours critiques.', yes: "Quand il y a du trafic et une hypothèse mesurable.", no: 'Quand le problème principal se situe après la conversion.' },
    { name: 'Web', use: 'Expériences numériques orientées décision.', yes: "Quand l'interface doit expliquer, prouver ou convertir.", no: 'Quand une nouvelle page ne fait que masquer une offre confuse.' },
    { name: 'Données', use: 'Transformer des signaux en décisions.', yes: 'Quand des décisions récurrentes manquent de preuves fiables.', no: "Quand tout mesurer remplace le choix de quelques KPI utiles." },
    { name: 'Automatisation', use: 'Réduire la friction et le travail manuel.', yes: 'Quand le processus est déjà clair et reproductible.', no: "Quand le flux à automatiser est encore faux." },
    { name: 'IA', use: 'Étendre la capacité avec contexte et contrôle.', yes: 'Quand la tâche, la donnée et le critère de qualité sont définis.', no: "Quand l'IA est traitée comme une stratégie en soi." },
    { name: 'RevOps', use: 'Aligner marketing, ventes et revenu.', yes: 'Quand les équipes optimisent des métriques déconnectées.', no: "Quand l'engagement de la direction sur le processus est absent." },
    { name: 'Produit', use: 'Construire une infrastructure sur mesure.', yes: 'Quand le logiciel crée un avantage opérationnel réel.', no: 'Quand une solution existante résout mieux et plus vite.' },
  ],
  de: [
    { name: 'CRM', use: 'Pipeline, Kadenz und nächster Schritt.', yes: 'Wenn Transparenz und Vertriebsprozess fehlen.', no: 'Wenn das Tool einen Betrieb ohne Verantwortlichen reparieren soll.' },
    { name: 'Media', use: 'Messbare, qualifizierte Nachfrage.', yes: 'Bei validiertem Angebot und ausreichender Bearbeitungskapazität.', no: 'Wenn mehr Nachfrage einen bestehenden Engpass vergrößern würde.' },
    { name: 'CRO', use: 'Reibung in kritischen Journeys senken.', yes: 'Wenn Traffic und eine messbare Hypothese vorliegen.', no: 'Wenn das Hauptproblem nach der Conversion liegt.' },
    { name: 'Web', use: 'Digitale Erlebnisse, die auf Entscheidung zielen.', yes: 'Wenn die Oberfläche erklären, beweisen oder konvertieren muss.', no: 'Wenn eine neue Seite nur ein unklares Angebot kaschiert.' },
    { name: 'Daten', use: 'Signale in Entscheidungen verwandeln.', yes: 'Wenn wiederkehrende Entscheidungen ohne belastbare Evidenz fallen.', no: 'Wenn alles zu messen die Wahl weniger nützlicher KPIs ersetzt.' },
    { name: 'Automatisierung', use: 'Reibung und Handarbeit reduzieren.', yes: 'Wenn der Prozess bereits klar und wiederholbar ist.', no: 'Wenn der zu automatisierende Ablauf noch falsch ist.' },
    { name: 'KI', use: 'Kapazität mit Kontext und Kontrolle erweitern.', yes: 'Wenn Aufgabe, Daten und Qualitätskriterium definiert sind.', no: 'Wenn KI als Strategie an sich behandelt wird.' },
    { name: 'RevOps', use: 'Marketing, Vertrieb und Umsatz ausrichten.', yes: 'Wenn Bereiche entkoppelte Kennzahlen optimieren.', no: 'Wenn die Führung sich nicht auf den Prozess verpflichtet.' },
    { name: 'Produkt', use: 'Maßgeschneiderte Infrastruktur bauen.', yes: 'Wenn Software einen echten operativen Vorteil schafft.', no: 'Wenn eine Standardlösung es besser und schneller löst.' },
  ],
}

export const capabilityGroupsExtra: Record<'es' | 'it' | 'fr' | 'de', string[]> = {
  es: ['Ingresos', 'Demanda', 'Experiencia', 'Infraestructura', 'Inteligencia', 'Apalancamiento', 'Apalancamiento', 'Ingresos', 'Producto'],
  it: ['Ricavi', 'Domanda', 'Esperienza', 'Infrastruttura', 'Intelligenza', 'Leva', 'Leva', 'Ricavi', 'Prodotto'],
  fr: ['Revenu', 'Demande', 'Expérience', 'Infrastructure', 'Intelligence', 'Levier', 'Levier', 'Revenu', 'Produit'],
  de: ['Umsatz', 'Nachfrage', 'Erlebnis', 'Infrastruktur', 'Intelligenz', 'Hebel', 'Hebel', 'Umsatz', 'Produkt'],
}

export const manifestoExtra: Record<'es' | 'it' | 'fr' | 'de', string[][]> = {
  es: [['Claridad', 'antes que ejecución.'], ['Alcance', 'antes que entusiasmo.'], ['Método', 'antes que improvisación.'], ['Cadencia', 'antes que intuición.'], ['Documentación', 'antes que opinión.'], ['Evidencia', 'antes que escala.']],
  it: [['Chiarezza', 'prima dell’esecuzione.'], ['Perimetro', 'prima dell’entusiasmo.'], ['Metodo', 'prima dell’improvvisazione.'], ['Cadenza', 'prima dell’intuito.'], ['Documentazione', 'prima dell’opinione.'], ['Evidenza', 'prima della scala.']],
  fr: [['Clarté', "avant l'exécution."], ['Périmètre', "avant l'enthousiasme."], ['Méthode', "avant l'improvisation."], ['Cadence', "avant l'intuition."], ['Documentation', "avant l'opinion."], ['Preuve', "avant l'échelle."]],
  de: [['Klarheit', 'vor Ausführung.'], ['Umfang', 'vor Begeisterung.'], ['Methode', 'vor Improvisation.'], ['Kadenz', 'vor Bauchgefühl.'], ['Dokumentation', 'vor Meinung.'], ['Evidenz', 'vor Skalierung.']],
}

export const caseSummaryExtra = {
  es: {
    title: '¿Qué tienen en común nuestros casos?',
    items: [['Sara', 'Convertimos medios en pacientes y en aprendizaje comercial.'], ['Kontes', 'Construimos y operamos un ecosistema de adquisición multicanal.'], ['Univet', 'Conectamos crecimiento, recorrido comercial y tecnología a medida.']],
    closing: ['Problemas distintos.', 'Soluciones distintas.', 'El mismo método para encontrar lo que de verdad mueve el negocio.'],
  },
  it: {
    title: 'Cosa hanno in comune i nostri casi?',
    items: [['Sara', 'Abbiamo trasformato i media in pazienti e in apprendimento commerciale.'], ['Kontes', 'Abbiamo costruito e gestito un ecosistema di acquisizione multicanale.'], ['Univet', 'Abbiamo collegato crescita, percorso commerciale e tecnologia su misura.']],
    closing: ['Problemi diversi.', 'Soluzioni diverse.', 'Lo stesso metodo per trovare ciò che muove davvero il business.'],
  },
  fr: {
    title: 'Quel est le point commun de nos cas ?',
    items: [['Sara', 'Nous avons transformé le média en patients et en apprentissage commercial.'], ['Kontes', "Nous avons bâti et opéré un écosystème d'acquisition multicanal."], ['Univet', 'Nous avons relié croissance, parcours commercial et technologie sur mesure.']],
    closing: ['Des problèmes différents.', 'Des solutions différentes.', 'La même méthode pour trouver ce qui fait vraiment bouger le business.'],
  },
  de: {
    title: 'Was haben unsere Fälle gemeinsam?',
    items: [['Sara', 'Wir haben Mediabudget in Patienten und in kommerzielle Erkenntnis verwandelt.'], ['Kontes', 'Wir haben ein kanalübergreifendes Akquise-Ökosystem gebaut und betrieben.'], ['Univet', 'Wir haben Wachstum, Vertriebsjourney und maßgeschneiderte Technologie verbunden.']],
    closing: ['Andere Probleme.', 'Andere Lösungen.', 'Dieselbe Methode, um zu finden, was das Geschäft wirklich bewegt.'],
  },
}

export const uiStringsExtra = {
  es: {
    brandAlt: 'EverGreen — Crecimiento previsible, escalable y tecnológico',
    navMapTitle: 'Mapa de la experiencia',
    heroEyebrow: 'MÉTODO Y EVIDENCIAS DE CRECIMIENTO',
    heroSubtitle: 'No vendemos horas, herramientas ni informes bonitos. Construimos la infraestructura de datos, proceso y adquisición que sostiene una operación comercial.',
    ctaPrimary: 'Seguir la conversación por WhatsApp',
    bottleneckEyebrow: 'EL SÍNTOMA VS LA CAUSA',
    bottleneckTitle: 'Toda empresa que intenta crecer choca con el mismo problema:',
    bottleneckSubtitle: 'Creer que el problema son los medios cuando en realidad es el proceso, el mensaje o el recorrido.',
    reqLabel: 'PETICIÓN HABITUAL', sympLabel: 'SÍNTOMA REAL', causeLabel: 'CAUSA RAÍZ',
    systemEyebrow: 'LO QUE MIDE LA RADIOGRAFÍA',
    systemTitle: 'Crecer no es suerte. Son tres pilares medidos y cuatro cimientos que los sostienen.',
    systemInstruction: 'Haz clic o pasa el cursor para ver cómo se conecta cada pieza con las demás.',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'De la Raíz a la Copa: cómo trabaja EverGreen en tu operación',
    methodInstruction: 'Haz clic para explorar el módulo en detalle',
    timeEyebrow: 'EVOLUCIÓN CONTINUA', timeTitle: 'El tiempo a favor de tu crecimiento',
    capEyebrow: 'CAPACIDADES TÉCNICAS', capTitle: 'Nuestras competencias al servicio de tu sistema',
    teamEyebrow: 'QUIÉN EJECUTA', teamTitle: 'Liderazgo técnico y estratégico en cada proyecto',
    evidEyebrow: 'RESULTADOS REALES', evidTitle: 'Casos de estudio y evidencias de impacto',
    patternEyebrow: 'CULTURA Y PRINCIPIOS', patternTitle: 'Nuestro estándar de trabajo',
    contactEyebrow: 'PRÓXIMO PASO', contactSubtitle: 'Si la propuesta tiene sentido, basta con responder por ahí.',
    openCase: 'Ver el estudio completo',
    officialPartner: 'PARTNER OFICIAL', googleCert: 'CERTIFICACIÓN GOOGLE',
    caseFallbackNote: 'Los casos se muestran en inglés: contienen cifras en reales y referencias del mercado brasileño que perderían sentido traducidas sin adaptar.',
  },
  it: {
    brandAlt: 'EverGreen — Crescita prevedibile, scalabile e tecnologica',
    navMapTitle: 'Mappa dell’esperienza',
    heroEyebrow: 'METODO ED EVIDENZE DI CRESCITA',
    heroSubtitle: 'Non vendiamo ore, strumenti o report eleganti. Costruiamo l’infrastruttura di dati, processo e acquisizione che regge un’operazione commerciale.',
    ctaPrimary: 'Continuare la conversazione su WhatsApp',
    bottleneckEyebrow: 'IL SINTOMO VS LA CAUSA',
    bottleneckTitle: 'Ogni azienda che prova a crescere incontra lo stesso problema:',
    bottleneckSubtitle: 'Credere che il problema sia il media quando in realtà è il processo, il messaggio o il percorso.',
    reqLabel: 'RICHIESTA COMUNE', sympLabel: 'SINTOMO REALE', causeLabel: 'CAUSA RADICE',
    systemEyebrow: 'COSA MISURA LA RADIOGRAFIA',
    systemTitle: 'Crescere non è fortuna. Sono tre pilastri misurati e quattro fondamenta che li reggono.',
    systemInstruction: 'Clicca o passa il cursore per vedere come ogni pezzo si collega agli altri.',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'Dalla Radice alla Chioma: come EverGreen lavora nella tua operazione',
    methodInstruction: 'Clicca per esplorare il modulo in dettaglio',
    timeEyebrow: 'EVOLUZIONE CONTINUA', timeTitle: 'Il tempo a favore della tua crescita',
    capEyebrow: 'CAPACITÀ TECNICHE', capTitle: 'Le nostre competenze al servizio del tuo sistema',
    teamEyebrow: 'CHI ESEGUE', teamTitle: 'Guida tecnica e strategica in ogni progetto',
    evidEyebrow: 'RISULTATI REALI', evidTitle: 'Casi studio ed evidenze di impatto',
    patternEyebrow: 'CULTURA E PRINCIPI', patternTitle: 'Il nostro standard di lavoro',
    contactEyebrow: 'PROSSIMO PASSO', contactSubtitle: 'Se la proposta ha senso, basta rispondere lì.',
    openCase: 'Vedi lo studio completo',
    officialPartner: 'PARTNER UFFICIALE', googleCert: 'CERTIFICAZIONE GOOGLE',
    caseFallbackNote: 'I casi sono mostrati in inglese: contengono cifre in real e riferimenti al mercato brasiliano che tradotti senza adattamento perderebbero senso.',
  },
  fr: {
    brandAlt: 'EverGreen — Croissance prévisible, scalable et technologique',
    navMapTitle: "Carte de l'expérience",
    heroEyebrow: 'MÉTHODE ET PREUVES DE CROISSANCE',
    heroSubtitle: "Nous ne vendons ni heures, ni outils, ni beaux rapports. Nous construisons l'infrastructure de données, de processus et d'acquisition qui tient une opération commerciale.",
    ctaPrimary: 'Poursuivre la conversation sur WhatsApp',
    bottleneckEyebrow: 'LE SYMPTÔME VS LA CAUSE',
    bottleneckTitle: 'Toute entreprise qui cherche à croître bute sur le même problème :',
    bottleneckSubtitle: "Croire que le problème vient des médias alors qu'il vient du processus, du message ou du parcours.",
    reqLabel: 'DEMANDE COURANTE', sympLabel: 'SYMPTÔME RÉEL', causeLabel: 'CAUSE RACINE',
    systemEyebrow: 'CE QUE MESURE LA RADIO',
    systemTitle: "Croître n'est pas une question de chance. Ce sont trois piliers mesurés et quatre fondations qui les soutiennent.",
    systemInstruction: 'Cliquez ou survolez pour voir comment chaque pièce se relie aux autres.',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'De la Racine à la Cime : comment EverGreen travaille dans votre opération',
    methodInstruction: 'Cliquez pour explorer le module en détail',
    timeEyebrow: 'ÉVOLUTION CONTINUE', timeTitle: 'Le temps au service de votre croissance',
    capEyebrow: 'CAPACITÉS TECHNIQUES', capTitle: 'Nos compétences au service de votre système',
    teamEyebrow: 'QUI EXÉCUTE', teamTitle: 'Direction technique et stratégique sur chaque projet',
    evidEyebrow: 'RÉSULTATS RÉELS', evidTitle: "Études de cas et preuves d'impact",
    patternEyebrow: 'CULTURE ET PRINCIPES', patternTitle: 'Notre exigence de travail',
    contactEyebrow: 'PROCHAINE ÉTAPE', contactSubtitle: 'Si la proposition tient, il suffit de répondre là-bas.',
    openCase: "Voir l'étude complète",
    officialPartner: 'PARTENAIRE OFFICIEL', googleCert: 'CERTIFICATION GOOGLE',
    caseFallbackNote: "Les cas sont affichés en anglais : ils contiennent des montants en réals et des références au marché brésilien qui perdraient leur sens traduits sans adaptation.",
  },
  de: {
    brandAlt: 'EverGreen — Planbares, skalierbares und technologiegetriebenes Wachstum',
    navMapTitle: 'Karte der Präsentation',
    heroEyebrow: 'METHODE UND BELEGE FÜR WACHSTUM',
    heroSubtitle: 'Wir verkaufen weder Stunden noch Tools noch hübsche Reports. Wir bauen die Daten-, Prozess- und Akquise-Infrastruktur, die einen Vertriebsbetrieb trägt.',
    ctaPrimary: 'Gespräch auf WhatsApp fortsetzen',
    bottleneckEyebrow: 'SYMPTOM VS URSACHE',
    bottleneckTitle: 'Jedes Unternehmen, das wachsen will, stößt auf dasselbe Problem:',
    bottleneckSubtitle: 'Zu glauben, das Problem sei Media — obwohl es Prozess, Botschaft oder Journey ist.',
    reqLabel: 'HÄUFIGE ANFRAGE', sympLabel: 'ECHTES SYMPTOM', causeLabel: 'GRUNDURSACHE',
    systemEyebrow: 'WAS DAS RÖNTGENBILD MISST',
    systemTitle: 'Wachstum ist kein Glück. Es sind drei gemessene Säulen und vier Fundamente, die sie tragen.',
    systemInstruction: 'Klicken oder mit dem Cursor darüberfahren, um die Verbindungen zu sehen.',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'Von der Wurzel zur Krone: wie EverGreen in Ihrem Betrieb arbeitet',
    methodInstruction: 'Klicken, um das Modul im Detail zu sehen',
    timeEyebrow: 'KONTINUIERLICHE ENTWICKLUNG', timeTitle: 'Die Zeit arbeitet für Ihr Wachstum',
    capEyebrow: 'TECHNISCHE FÄHIGKEITEN', capTitle: 'Unsere Kompetenzen im Dienst Ihres Systems',
    teamEyebrow: 'WER AUSFÜHRT', teamTitle: 'Technische und strategische Führung in jedem Projekt',
    evidEyebrow: 'ECHTE ERGEBNISSE', evidTitle: 'Fallstudien und Wirkungsbelege',
    patternEyebrow: 'KULTUR UND PRINZIPIEN', patternTitle: 'Unser Arbeitsstandard',
    contactEyebrow: 'NÄCHSTER SCHRITT', contactSubtitle: 'Wenn das Angebot passt, genügt eine Antwort dort.',
    openCase: 'Vollständige Fallstudie ansehen',
    officialPartner: 'OFFIZIELLER PARTNER', googleCert: 'GOOGLE-ZERTIFIZIERUNG',
    caseFallbackNote: 'Die Fälle erscheinen auf Englisch: Sie enthalten Beträge in Real und Bezüge zum brasilianischen Markt, die ohne Anpassung übersetzt ihren Sinn verlören.',
  },
}
