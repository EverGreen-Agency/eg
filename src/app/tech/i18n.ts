/**
 * Espanhol, italiano, frances e alemao do deck de tecnologia.
 *
 * Mesma regra do deck de growth: os corpos dos cases NAO estao aqui e caem para
 * o ingles de forma declarada — Univet Safety, Bioma e o PoC do PJe carregam
 * referencias brasileiras que traduzidas sem adaptar viram localizacao de
 * fachada. O aviso aparece na interface (`caseFallbackNote`).
 *
 * As sete dimensoes seguem a ordem de `dimensionsPt`: a `dimensionRelations` em
 * TechExperience.tsx indexa por posicao. Traduzir NAO pode reordenar.
 */

type Section = { id: string; label: string }
type Problem = { request: string; symptom: string; cause: string }
type Dimension = { name: string; note: string; asks: string }
type Capability = { name: string; use: string; yes: string; no: string }
type LadderStep = { tag: string; title: string; lead: string; garantia: string }
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
type Extra = 'es' | 'it' | 'fr' | 'de'

export const sectionsExtra: Record<Extra, Section[]> = {
  es: [
    { id: 'inicio', label: 'Inicio' }, { id: 'gargalo', label: 'El cuello de botella' },
    { id: 'maturidade', label: 'Las 7 dimensiones' }, { id: 'metodo', label: 'Método EG' },
    { id: 'escada', label: 'Cómo entramos' }, { id: 'capacidades', label: 'Capacidades' },
    { id: 'equipe', label: 'Equipo' }, { id: 'evidencias', label: 'Evidencias' },
    { id: 'padrao', label: 'Nuestro estándar' }, { id: 'contato', label: 'Contacto' },
  ],
  it: [
    { id: 'inicio', label: 'Inizio' }, { id: 'gargalo', label: 'Il collo di bottiglia' },
    { id: 'maturidade', label: 'Le 7 dimensioni' }, { id: 'metodo', label: 'Metodo EG' },
    { id: 'escada', label: 'Come entriamo' }, { id: 'capacidades', label: 'Capacità' },
    { id: 'equipe', label: 'Team' }, { id: 'evidencias', label: 'Evidenze' },
    { id: 'padrao', label: 'Il nostro standard' }, { id: 'contato', label: 'Contatto' },
  ],
  fr: [
    { id: 'inicio', label: 'Accueil' }, { id: 'gargalo', label: 'Le goulot' },
    { id: 'maturidade', label: 'Les 7 dimensions' }, { id: 'metodo', label: 'Méthode EG' },
    { id: 'escada', label: 'Comment on entre' }, { id: 'capacidades', label: 'Capacités' },
    { id: 'equipe', label: 'Équipe' }, { id: 'evidencias', label: 'Preuves' },
    { id: 'padrao', label: 'Notre exigence' }, { id: 'contato', label: 'Contact' },
  ],
  de: [
    { id: 'inicio', label: 'Start' }, { id: 'gargalo', label: 'Der Engpass' },
    { id: 'maturidade', label: 'Die 7 Dimensionen' }, { id: 'metodo', label: 'EG-Methode' },
    { id: 'escada', label: 'Wie wir einsteigen' }, { id: 'capacidades', label: 'Fähigkeiten' },
    { id: 'equipe', label: 'Team' }, { id: 'evidencias', label: 'Belege' },
    { id: 'padrao', label: 'Unser Standard' }, { id: 'contato', label: 'Kontakt' },
  ],
}

export const problemsExtra: Record<Extra, Problem[]> = {
  es: [
    { request: '«Quiero automatizar esto.»', symptom: 'El flujo automatizado se equivoca igual, solo que más rápido.', cause: 'Diseño del proceso.' },
    { request: '«Quiero un panel.»', symptom: 'Cada fuente devuelve un número distinto.', cause: 'Arquitectura de datos.' },
    { request: '«Quiero usar IA.»', symptom: 'La salida es plausible y nadie puede verificarla.', cause: 'Contexto y criterio de calidad.' },
  ],
  it: [
    { request: '«Voglio automatizzare questo.»', symptom: 'Il flusso automatizzato sbaglia uguale, solo più in fretta.', cause: 'Progettazione del processo.' },
    { request: '«Voglio una dashboard.»', symptom: 'Ogni fonte restituisce un numero diverso.', cause: 'Architettura dei dati.' },
    { request: '«Voglio usare l’IA.»', symptom: 'Il risultato è plausibile e nessuno riesce a verificarlo.', cause: 'Contesto e criterio di qualità.' },
  ],
  fr: [
    { request: "« Je veux automatiser ça. »", symptom: 'Le flux automatisé se trompe pareil, juste plus vite.', cause: 'Conception du processus.' },
    { request: "« Je veux un tableau de bord. »", symptom: 'Chaque source renvoie un chiffre différent.', cause: 'Architecture des données.' },
    { request: "« Je veux utiliser l'IA. »", symptom: 'La sortie est plausible et personne ne peut la vérifier.', cause: 'Contexte et critère de qualité.' },
  ],
  de: [
    { request: '„Ich will das automatisieren."', symptom: 'Der automatisierte Ablauf macht dieselben Fehler, nur schneller.', cause: 'Prozessdesign.' },
    { request: '„Ich will ein Dashboard."', symptom: 'Jede Quelle liefert eine andere Zahl.', cause: 'Datenarchitektur.' },
    { request: '„Ich will KI einsetzen."', symptom: 'Das Ergebnis wirkt plausibel und niemand kann es prüfen.', cause: 'Kontext und Qualitätskriterium.' },
  ],
}

export const dimensionsExtra: Record<Extra, Dimension[]> = {
  es: [
    { name: 'Diagnóstico', note: '¿La empresa ve dónde pierde eficiencia?', asks: '¿Hay una lectura de la operación o solo la percepción de quien está dentro?' },
    { name: 'Ejecución', note: 'Cuánto tiempo separa la decisión de la entrega.', asks: '¿Qué tarda semanas hoy por depender de una persona concreta?' },
    { name: 'Documentación', note: 'Proceso escrito es proceso que la IA puede ejecutar.', asks: '¿Qué existe solo en la cabeza de alguien?' },
    { name: 'Datos', note: 'Información en un solo sitio, con un solo número.', asks: '¿Cuántas hojas de cálculo responden lo mismo de forma distinta?' },
    { name: 'Automatización', note: 'Una rutina repetible no debería consumir personas.', asks: '¿Qué trabajo manual se repite cada semana sin variación?' },
    { name: 'Calidad', note: 'Un estándar que no depende de quién ejecutó.', asks: '¿El resultado cambia según quién lo hace?' },
    { name: 'Margen', note: 'Crecer sin que el coste crezca igual.', asks: '¿Atender el doble exigiría el doble de equipo?' },
  ],
  it: [
    { name: 'Diagnosi', note: 'L’azienda vede dove perde efficienza?', asks: 'Esiste una lettura dell’operazione o solo la percezione di chi ci sta dentro?' },
    { name: 'Esecuzione', note: 'Quanto tempo separa la decisione dalla consegna.', asks: 'Cosa richiede settimane oggi perché dipende da una persona specifica?' },
    { name: 'Documentazione', note: 'Un processo scritto è un processo che l’IA può eseguire.', asks: 'Cosa esiste solo nella testa di qualcuno?' },
    { name: 'Dati', note: 'Informazione in un posto solo, con un numero solo.', asks: 'Quanti fogli rispondono alla stessa domanda in modo diverso?' },
    { name: 'Automazione', note: 'Una routine ripetibile non dovrebbe consumare persone.', asks: 'Quale lavoro manuale si ripete ogni settimana senza variazioni?' },
    { name: 'Qualità', note: 'Uno standard che non dipende da chi ha eseguito.', asks: 'Il risultato cambia a seconda di chi lo fa?' },
    { name: 'Margine', note: 'Crescere senza che il costo cresca insieme.', asks: 'Servire il doppio richiederebbe il doppio del team?' },
  ],
  fr: [
    { name: 'Diagnostic', note: "L'entreprise voit-elle où elle perd en efficacité ?", asks: "Y a-t-il une lecture de l'opération, ou seulement la perception de ceux qui sont dedans ?" },
    { name: 'Exécution', note: 'Le temps qui sépare la décision de la livraison.', asks: "Qu'est-ce qui prend des semaines aujourd'hui parce que ça dépend d'une personne précise ?" },
    { name: 'Documentation', note: "Un processus écrit est un processus que l'IA peut exécuter.", asks: "Qu'est-ce qui n'existe que dans la tête de quelqu'un ?" },
    { name: 'Données', note: 'Une information à un seul endroit, avec un seul chiffre.', asks: 'Combien de tableurs répondent à la même question différemment ?' },
    { name: 'Automatisation', note: 'Une routine reproductible ne devrait pas consommer des gens.', asks: 'Quel travail manuel se répète chaque semaine sans variation ?' },
    { name: 'Qualité', note: "Un standard qui ne dépend pas de qui a exécuté.", asks: 'Le résultat change-t-il selon qui le fait ?' },
    { name: 'Marge', note: 'Croître sans que le coût croisse avec.', asks: "Servir le double exigerait-il le double d'équipe ?" },
  ],
  de: [
    { name: 'Diagnose', note: 'Sieht das Unternehmen, wo es an Effizienz verliert?', asks: 'Gibt es eine echte Lesart des Betriebs oder nur die Wahrnehmung der Beteiligten?' },
    { name: 'Ausführung', note: 'Wie viel Zeit zwischen Entscheidung und Lieferung liegt.', asks: 'Was dauert heute Wochen, weil es an einer bestimmten Person hängt?' },
    { name: 'Dokumentation', note: 'Ein geschriebener Prozess ist ein Prozess, den KI ausführen kann.', asks: 'Was existiert nur im Kopf einer Person?' },
    { name: 'Daten', note: 'Information an einem Ort, mit einer Zahl.', asks: 'Wie viele Tabellen beantworten dieselbe Frage unterschiedlich?' },
    { name: 'Automatisierung', note: 'Eine wiederholbare Routine sollte keine Menschen binden.', asks: 'Welche Handarbeit wiederholt sich jede Woche unverändert?' },
    { name: 'Qualität', note: 'Ein Standard, der nicht davon abhängt, wer ausgeführt hat.', asks: 'Ändert sich das Ergebnis je nachdem, wer es macht?' },
    { name: 'Marge', note: 'Wachsen, ohne dass die Kosten mitwachsen.', asks: 'Würde die doppelte Zahl an Kunden das doppelte Team erfordern?' },
  ],
}

export const capabilitiesExtra: Record<Extra, Capability[]> = {
  es: [
    { name: 'Producto', use: 'Construir infraestructura a medida.', yes: 'Cuando el software crea ventaja operativa real.', no: 'Cuando una solución lista resuelve mejor y más rápido.' },
    { name: 'Web', use: 'Experiencias digitales orientadas a la decisión.', yes: 'Cuando la interfaz debe explicar, probar o convertir.', no: 'Cuando una página nueva solo enmascara un proceso confuso.' },
    { name: 'Datos', use: 'Transformar señales en decisiones.', yes: 'Cuando hay decisiones recurrentes sin evidencia fiable.', no: 'Cuando medirlo todo sustituye la elección de pocos indicadores útiles.' },
    { name: 'Automatización', use: 'Reducir fricción y trabajo manual.', yes: 'Cuando el proceso ya es claro y repetible.', no: 'Cuando el flujo a automatizar todavía está mal.' },
    { name: 'IA', use: 'Ampliar capacidad con contexto y control.', yes: 'Cuando hay tarea, dato y criterio de calidad definidos.', no: 'Cuando se trata la IA como estrategia en sí misma.' },
    { name: 'Integraciones', use: 'Hacer que hablen los sistemas que ya existen.', yes: 'Cuando el dato existe pero no atraviesa las herramientas.', no: 'Cuando integrar solo aplaza jubilar un sistema.' },
    { name: 'Infraestructura', use: 'Sostener lo que se construyó.', yes: 'Cuando la operación pasa a depender del sistema.', no: 'Cuando no hay quien asuma la operación del otro lado.' },
  ],
  it: [
    { name: 'Prodotto', use: 'Costruire infrastruttura su misura.', yes: 'Quando il software crea un vantaggio operativo reale.', no: 'Quando una soluzione pronta risolve meglio e prima.' },
    { name: 'Web', use: 'Esperienze digitali orientate alla decisione.', yes: "Quando l'interfaccia deve spiegare, provare o convertire.", no: 'Quando una pagina nuova maschera solo un processo confuso.' },
    { name: 'Dati', use: 'Trasformare segnali in decisioni.', yes: 'Quando ci sono decisioni ricorrenti senza evidenza affidabile.', no: 'Quando misurare tutto sostituisce la scelta di pochi indicatori utili.' },
    { name: 'Automazione', use: 'Ridurre attrito e lavoro manuale.', yes: 'Quando il processo è già chiaro e ripetibile.', no: 'Quando il flusso da automatizzare è ancora sbagliato.' },
    { name: 'IA', use: 'Ampliare capacità con contesto e controllo.', yes: 'Quando compito, dato e criterio di qualità sono definiti.', no: "Quando l'IA è trattata come strategia in sé." },
    { name: 'Integrazioni', use: 'Far parlare i sistemi che già esistono.', yes: 'Quando il dato esiste ma non attraversa gli strumenti.', no: 'Quando integrare rimanda soltanto la dismissione di un sistema.' },
    { name: 'Infrastruttura', use: 'Sostenere ciò che è stato costruito.', yes: "Quando l'operazione dipende dal sistema per funzionare.", no: "Quando dall'altra parte non c'è nessuno che se ne assume la gestione." },
  ],
  fr: [
    { name: 'Produit', use: 'Construire une infrastructure sur mesure.', yes: 'Quand le logiciel crée un avantage opérationnel réel.', no: 'Quand une solution existante résout mieux et plus vite.' },
    { name: 'Web', use: 'Expériences numériques orientées décision.', yes: "Quand l'interface doit expliquer, prouver ou convertir.", no: 'Quand une nouvelle page ne fait que masquer un processus confus.' },
    { name: 'Données', use: 'Transformer des signaux en décisions.', yes: 'Quand des décisions récurrentes manquent de preuves fiables.', no: 'Quand tout mesurer remplace le choix de quelques indicateurs utiles.' },
    { name: 'Automatisation', use: 'Réduire la friction et le travail manuel.', yes: 'Quand le processus est déjà clair et reproductible.', no: 'Quand le flux à automatiser est encore faux.' },
    { name: 'IA', use: 'Étendre la capacité avec contexte et contrôle.', yes: 'Quand la tâche, la donnée et le critère de qualité sont définis.', no: "Quand l'IA est traitée comme une stratégie en soi." },
    { name: 'Intégrations', use: 'Faire dialoguer les systèmes déjà en place.', yes: 'Quand la donnée existe mais ne traverse pas les outils.', no: "Quand intégrer ne fait que repousser la mise au rebut d'un système." },
    { name: 'Infrastructure', use: 'Soutenir ce qui a été construit.', yes: "Quand l'opération dépend du système pour tourner.", no: "Quand personne en face n'assume son exploitation." },
  ],
  de: [
    { name: 'Produkt', use: 'Maßgeschneiderte Infrastruktur bauen.', yes: 'Wenn Software einen echten operativen Vorteil schafft.', no: 'Wenn eine Standardlösung es besser und schneller löst.' },
    { name: 'Web', use: 'Digitale Erlebnisse, die auf Entscheidung zielen.', yes: 'Wenn die Oberfläche erklären, beweisen oder konvertieren muss.', no: 'Wenn eine neue Seite nur einen unklaren Prozess kaschiert.' },
    { name: 'Daten', use: 'Signale in Entscheidungen verwandeln.', yes: 'Wenn wiederkehrende Entscheidungen ohne belastbare Evidenz fallen.', no: 'Wenn alles zu messen die Wahl weniger nützlicher Kennzahlen ersetzt.' },
    { name: 'Automatisierung', use: 'Reibung und Handarbeit reduzieren.', yes: 'Wenn der Prozess bereits klar und wiederholbar ist.', no: 'Wenn der zu automatisierende Ablauf noch falsch ist.' },
    { name: 'KI', use: 'Kapazität mit Kontext und Kontrolle erweitern.', yes: 'Wenn Aufgabe, Daten und Qualitätskriterium definiert sind.', no: 'Wenn KI als Strategie an sich behandelt wird.' },
    { name: 'Integrationen', use: 'Die vorhandenen Systeme miteinander sprechen lassen.', yes: 'Wenn die Daten existieren, aber nicht durch die Tools laufen.', no: 'Wenn Integrieren nur die Abschaltung eines Systems aufschiebt.' },
    { name: 'Infrastruktur', use: 'Tragen, was gebaut wurde.', yes: 'Wenn der Betrieb auf das System angewiesen ist.', no: 'Wenn auf der anderen Seite niemand den Betrieb übernimmt.' },
  ],
}

export const ladderExtra: Record<Extra, LadderStep[]> = {
  es: [
    { tag: 'Tech 01 — Tú lo haces', title: 'Radiografía Tecnológica', lead: 'Auditoría de preparación AI-First. Nota en las 7 dimensiones, cuellos de botella priorizados y hoja de ruta.', garantia: 'Si no sales con claridad práctica sobre cuellos de botella y prioridades, revisamos el diagnóstico sin coste hasta que quede cristalino.' },
    { tag: 'Tech 02 — Lo hacemos contigo', title: 'Sprint de Estructuración Tecnológica', lead: 'Implantar las automatizaciones e integraciones prioritarias que señaló el diagnóstico. De 6 a 8 semanas, alcance cerrado.', garantia: 'Si no implantamos los entregables en el cronograma del sprint, el acompañamiento se extiende sin honorario adicional.' },
    { tag: 'Tech 03 — Lo hacemos por ti', title: 'Retainer de Operación Tecnológica', lead: 'Operar la infraestructura de forma continua: módulos, SLA de disponibilidad y revisión estratégica trimestral.', garantia: 'Si no mantenemos la cadencia, el SLA y el ciclo de evolución acordados, el período se extiende hasta la entrega completa.' },
  ],
  it: [
    { tag: 'Tech 01 — Lo fai tu', title: 'Radiografia Tecnologica', lead: 'Audit di prontezza AI-First. Voto sulle 7 dimensioni, colli di bottiglia prioritizzati e roadmap.', garantia: 'Se non esci con chiarezza pratica su colli di bottiglia e priorità, rivediamo la diagnosi senza costi finché non è cristallina.' },
    { tag: 'Tech 02 — Lo facciamo con te', title: 'Sprint di Strutturazione Tecnologica', lead: 'Implementare le automazioni e le integrazioni prioritarie emerse dalla diagnosi. Da 6 a 8 settimane, perimetro chiuso.', garantia: 'Se non implementiamo i deliverable nel cronoprogramma dello sprint, il supporto si estende senza onorario aggiuntivo.' },
    { tag: 'Tech 03 — Lo facciamo per te', title: 'Retainer di Operazione Tecnologica', lead: 'Gestire l’infrastruttura in continuo: moduli, SLA di disponibilità e revisione strategica trimestrale.', garantia: 'Se non manteniamo cadenza, SLA e ciclo di evoluzione concordati, il periodo si estende fino alla consegna completa.' },
  ],
  fr: [
    { tag: 'Tech 01 — Vous le faites', title: 'Radiographie Technologique', lead: "Audit de maturité AI-First. Note sur les 7 dimensions, goulots priorisés et feuille de route.", garantia: "Si vous n'en sortez pas avec une clarté pratique sur les goulots et les priorités, nous révisons le diagnostic sans frais jusqu'à ce que ce soit limpide." },
    { tag: 'Tech 02 — Nous le faisons avec vous', title: 'Sprint de Structuration Technologique', lead: 'Déployer les automatisations et intégrations prioritaires identifiées par le diagnostic. 6 à 8 semaines, périmètre fermé.', garantia: "Si nous ne déployons pas les livrables dans le calendrier du sprint, l'accompagnement se prolonge sans honoraires supplémentaires." },
    { tag: 'Tech 03 — Nous le faisons pour vous', title: "Retainer d'Opération Technologique", lead: "Opérer l'infrastructure en continu : modules, SLA de disponibilité et revue stratégique trimestrielle.", garantia: "Si nous ne tenons pas la cadence, le SLA et le cycle d'évolution convenus, la période se prolonge jusqu'à livraison complète." },
  ],
  de: [
    { tag: 'Tech 01 — Sie machen es', title: 'Technologie-Röntgenbild', lead: 'AI-First-Reifegrad-Audit. Note über die 7 Dimensionen, priorisierte Engpässe und Roadmap.', garantia: 'Wenn Sie ohne praktische Klarheit über Engpässe und Prioritäten herausgehen, überarbeiten wir die Diagnose kostenfrei, bis sie glasklar ist.' },
    { tag: 'Tech 02 — Wir machen es mit Ihnen', title: 'Technologie-Strukturierungssprint', lead: 'Die prioritären Automatisierungen und Integrationen aus der Diagnose umsetzen. 6 bis 8 Wochen, fester Umfang.', garantia: 'Setzen wir die vereinbarten Leistungen nicht im Sprintplan um, verlängert sich die Begleitung ohne zusätzliches Honorar.' },
    { tag: 'Tech 03 — Wir machen es für Sie', title: 'Technologie-Betriebsretainer', lead: 'Die Infrastruktur laufend betreiben: Module, Verfügbarkeits-SLA und vierteljährliche strategische Review.', garantia: 'Halten wir Kadenz, SLA und den vereinbarten Entwicklungszyklus nicht ein, verlängert sich der Zeitraum bis zur vollständigen Lieferung.' },
  ],
}

export const modulesExtra: Record<Extra, Record<ModKey, Mod>> = {
  es: {
    diagnostico: { number: '01', phase: 'Raiz', action: 'Diagnosticar', title: 'Radiografía Tecnológica', short: 'Medir la preparación AI-First de la operación.', headline: 'Antes de construir nada, medimos dónde la operación pierde eficiencia.', groups: [
      { title: 'Qué auditamos', items: ['Stack actual', 'Integraciones', 'Flujo de datos', 'Rutinas manuales', 'Documentación', 'Permisos'] },
      { title: 'Qué buscamos', items: ['Retrabajo', 'Dato divergente', 'Dependencia de personas', 'Hoja de cálculo crítica', 'Proceso no escrito'] },
      { title: 'Qué sale', items: ['Nota en las 7 dimensiones', 'Inventario del stack', 'Cuellos de botella priorizados', 'Hoja de ruta'] }] },
    arquitetura: { number: '02', phase: 'Tronco', action: 'Priorizar', title: 'Arquitectura', short: 'Decidir qué construir y, sobre todo, qué no construir.', headline: 'La decisión más cara en software es construir lo que ya existe.', groups: [
      { title: 'Decisiones', items: ['Construir o contratar', 'Fuente de verdad', 'Integraciones', 'Permisos', 'Reversibilidad'] },
      { title: 'Diseño', items: ['Modelo de datos', 'Flujo de trabajo', 'Estados', 'Quién aprueba qué'] },
      { title: 'Qué sale', items: ['Arquitectura escrita', 'Alcance cerrado', 'Riesgos nombrados', 'Estimación por porción'] }] },
    implementacao: { number: '03', phase: 'Ramos', action: 'Estructurar', title: 'Sprint de Estructuración', short: 'Construir la porción que ya entrega valor por sí sola.', headline: 'Entregamos en corte vertical: una porción fina que funciona de punta a punta.', groups: [
      { title: 'Cómo entregamos', items: ['Corte vertical', 'Sprint de 6 a 8 semanas', 'Alcance cerrado', 'Entorno de homologación'] },
      { title: 'Qué va junto', items: ['Integraciones', 'Migración de datos', 'Formación del equipo', 'Documentación de uso'] },
      { title: 'Garantía', items: ['¿No se implantó en plazo?', 'El acompañamiento se extiende', 'Sin honorario adicional'] }] },
    operacao: { number: '04', phase: 'Copa', action: 'Evolucionar', title: 'Operación', short: 'Mantener en pie, medir y decidir.', headline: 'Software entregado y no operado se vuelve deuda, no activo.', groups: [
      { title: 'Sostén', items: ['SLA de disponibilidad', 'Monitorización', 'Correcciones', 'Copia y recuperación'] },
      { title: 'Ritmo', items: ['Revisión trimestral', 'Cola priorizada', 'Próximas porciones'] },
      { title: 'Evidencia', items: ['Uso real', 'Tiempo ahorrado', 'Error operativo evitado'] }] },
    evolucao: { number: '05', phase: 'Copa', action: 'Evolucionar', title: 'Evolución', short: 'Ganar capacidad nueva sin rehacer la base. La Copa no termina.', headline: 'Una buena base es la que acepta el módulo que nadie había previsto.', groups: [
      { title: 'Ahora', items: ['Quitar el cuello medido', 'Cerrar la base'] },
      { title: '90 días', items: ['Segunda porción', 'Automatizar lo que se volvió repetitivo'] },
      { title: 'Horizonte', items: ['Nuevos módulos', 'IA sobre dato propio', 'Escala con margen'] }] },
  },
  it: {
    diagnostico: { number: '01', phase: 'Raiz', action: 'Diagnosticare', title: 'Radiografia Tecnologica', short: 'Misurare la prontezza AI-First dell’operazione.', headline: 'Prima di costruire qualsiasi cosa, misuriamo dove l’operazione perde efficienza.', groups: [
      { title: 'Cosa verifichiamo', items: ['Stack attuale', 'Integrazioni', 'Flusso dei dati', 'Routine manuali', 'Documentazione', 'Permessi'] },
      { title: 'Cosa cerchiamo', items: ['Rilavorazione', 'Dato divergente', 'Dipendenza da persone', 'Foglio critico', 'Processo non scritto'] },
      { title: 'Cosa esce', items: ['Voto sulle 7 dimensioni', 'Inventario dello stack', 'Colli di bottiglia prioritizzati', 'Roadmap'] }] },
    arquitetura: { number: '02', phase: 'Tronco', action: 'Prioritizzare', title: 'Architettura', short: 'Decidere cosa costruire e, soprattutto, cosa non costruire.', headline: 'La decisione software più cara è costruire ciò che esiste già.', groups: [
      { title: 'Decisioni', items: ['Costruire o comprare', 'Fonte di verità', 'Integrazioni', 'Permessi', 'Reversibilità'] },
      { title: 'Progetto', items: ['Modello dati', 'Flusso di lavoro', 'Stati', 'Chi approva cosa'] },
      { title: 'Cosa esce', items: ['Architettura scritta', 'Perimetro chiuso', 'Rischi nominati', 'Stima per fetta'] }] },
    implementacao: { number: '03', phase: 'Ramos', action: 'Strutturare', title: 'Sprint di Strutturazione', short: 'Costruire la fetta che già porta valore da sola.', headline: 'Consegniamo a fette verticali: una fetta sottile che funziona da capo a fondo.', groups: [
      { title: 'Come consegniamo', items: ['Fetta verticale', 'Sprint di 6-8 settimane', 'Perimetro chiuso', 'Ambiente di collaudo'] },
      { title: 'Cosa va insieme', items: ['Integrazioni', 'Migrazione dati', 'Formazione del team', 'Documentazione d’uso'] },
      { title: 'Garanzia', items: ['Non implementato nei tempi?', 'Il supporto si estende', 'Senza onorario aggiuntivo'] }] },
    operacao: { number: '04', phase: 'Copa', action: 'Evolvere', title: 'Operazione', short: 'Tenere in piedi, misurare e decidere.', headline: 'Software consegnato e non gestito diventa debito, non asset.', groups: [
      { title: 'Sostegno', items: ['SLA di disponibilità', 'Monitoraggio', 'Correzioni', 'Backup e ripristino'] },
      { title: 'Ritmo', items: ['Revisione trimestrale', 'Coda prioritizzata', 'Prossime fette'] },
      { title: 'Evidenza', items: ['Uso reale', 'Tempo risparmiato', 'Errore operativo evitato'] }] },
    evolucao: { number: '05', phase: 'Copa', action: 'Evolvere', title: 'Evoluzione', short: 'Guadagnare capacità senza rifare la base. La Chioma non finisce.', headline: 'Una buona base è quella che accetta il modulo che nessuno aveva previsto.', groups: [
      { title: 'Adesso', items: ['Rimuovere il collo misurato', 'Chiudere la base'] },
      { title: '90 giorni', items: ['Seconda fetta', 'Automatizzare ciò che è diventato ripetitivo'] },
      { title: 'Orizzonte', items: ['Nuovi moduli', 'IA sui dati propri', 'Scala con margine'] }] },
  },
  fr: {
    diagnostico: { number: '01', phase: 'Raiz', action: 'Diagnostiquer', title: 'Radiographie Technologique', short: "Mesurer la maturité AI-First de l'opération.", headline: "Avant de construire quoi que ce soit, nous mesurons où l'opération perd en efficacité.", groups: [
      { title: 'Ce que nous auditons', items: ['Stack actuel', 'Intégrations', 'Flux de données', 'Routines manuelles', 'Documentation', 'Permissions'] },
      { title: 'Ce que nous cherchons', items: ['Reprises', 'Donnée divergente', 'Dépendance à une personne', 'Tableur critique', 'Processus non écrit'] },
      { title: 'Ce qui en sort', items: ['Note sur les 7 dimensions', 'Inventaire du stack', 'Goulots priorisés', 'Feuille de route'] }] },
    arquitetura: { number: '02', phase: 'Tronco', action: 'Prioriser', title: 'Architecture', short: "Décider quoi construire et surtout quoi ne pas construire.", headline: "La décision logicielle la plus coûteuse est de construire ce qui existe déjà.", groups: [
      { title: 'Décisions', items: ['Construire ou acheter', 'Source de vérité', 'Intégrations', 'Permissions', 'Réversibilité'] },
      { title: 'Conception', items: ['Modèle de données', 'Flux de travail', 'États', 'Qui approuve quoi'] },
      { title: 'Ce qui en sort', items: ['Architecture écrite', 'Périmètre fermé', 'Risques nommés', 'Estimation par tranche'] }] },
    implementacao: { number: '03', phase: 'Ramos', action: 'Structurer', title: 'Sprint de Structuration', short: 'Construire la tranche qui apporte déjà de la valeur seule.', headline: 'Nous livrons en tranches verticales : une tranche fine qui fonctionne de bout en bout.', groups: [
      { title: 'Comment nous livrons', items: ['Tranche verticale', 'Sprint de 6 à 8 semaines', 'Périmètre fermé', 'Environnement de recette'] },
      { title: 'Ce qui va avec', items: ['Intégrations', 'Migration de données', "Formation de l'équipe", "Documentation d'usage"] },
      { title: 'Garantie', items: ['Pas déployé dans les délais ?', "L'accompagnement se prolonge", 'Sans honoraires supplémentaires'] }] },
    operacao: { number: '04', phase: 'Copa', action: 'Faire évoluer', title: 'Opération', short: 'Tenir debout, mesurer et décider.', headline: 'Un logiciel livré et non exploité devient une dette, pas un actif.', groups: [
      { title: 'Soutien', items: ['SLA de disponibilité', 'Supervision', 'Correctifs', 'Sauvegarde et restauration'] },
      { title: 'Rythme', items: ['Revue trimestrielle', 'File priorisée', 'Prochaines tranches'] },
      { title: 'Preuve', items: ['Usage réel', 'Temps économisé', 'Erreur opérationnelle évitée'] }] },
    evolucao: { number: '05', phase: 'Copa', action: 'Faire évoluer', title: 'Évolution', short: "Gagner en capacité sans refaire la base. La Copa ne s'arrête pas.", headline: "Une bonne base est celle qui accepte le module que personne n'avait prévu.", groups: [
      { title: 'Maintenant', items: ['Retirer le goulot mesuré', 'Fermer la base'] },
      { title: '90 jours', items: ['Deuxième tranche', 'Automatiser ce qui est devenu répétitif'] },
      { title: 'Horizon', items: ['Nouveaux modules', 'IA sur vos propres données', 'Échelle avec marge'] }] },
  },
  de: {
    diagnostico: { number: '01', phase: 'Raiz', action: 'Diagnostizieren', title: 'Technologie-Röntgenbild', short: 'Die AI-First-Reife des Betriebs messen.', headline: 'Bevor wir irgendetwas bauen, messen wir, wo der Betrieb an Effizienz verliert.', groups: [
      { title: 'Was wir prüfen', items: ['Aktueller Stack', 'Integrationen', 'Datenfluss', 'Manuelle Routinen', 'Dokumentation', 'Berechtigungen'] },
      { title: 'Wonach wir suchen', items: ['Nacharbeit', 'Abweichende Daten', 'Personenabhängigkeit', 'Kritische Tabelle', 'Unklarer Prozess'] },
      { title: 'Was herauskommt', items: ['Note über die 7 Dimensionen', 'Stack-Inventar', 'Priorisierte Engpässe', 'Roadmap'] }] },
    arquitetura: { number: '02', phase: 'Tronco', action: 'Priorisieren', title: 'Architektur', short: 'Entscheiden, was gebaut wird — und vor allem, was nicht.', headline: 'Die teuerste Software-Entscheidung ist, zu bauen, was es schon gibt.', groups: [
      { title: 'Entscheidungen', items: ['Bauen oder kaufen', 'Single Source of Truth', 'Integrationen', 'Berechtigungen', 'Umkehrbarkeit'] },
      { title: 'Entwurf', items: ['Datenmodell', 'Arbeitsablauf', 'Zustände', 'Wer genehmigt was'] },
      { title: 'Was herauskommt', items: ['Geschriebene Architektur', 'Fester Umfang', 'Benannte Risiken', 'Schätzung je Scheibe'] }] },
    implementacao: { number: '03', phase: 'Ramos', action: 'Strukturieren', title: 'Strukturierungssprint', short: 'Die Scheibe bauen, die für sich schon Wert liefert.', headline: 'Wir liefern in vertikalen Scheiben: eine dünne Scheibe, die durchgängig funktioniert.', groups: [
      { title: 'Wie wir liefern', items: ['Vertikale Scheibe', 'Sprint über 6 bis 8 Wochen', 'Fester Umfang', 'Abnahmeumgebung'] },
      { title: 'Was dazugehört', items: ['Integrationen', 'Datenmigration', 'Team-Schulung', 'Nutzungsdokumentation'] },
      { title: 'Garantie', items: ['Nicht im Zeitplan ausgeliefert?', 'Die Begleitung verlängert sich', 'Ohne zusätzliches Honorar'] }] },
    operacao: { number: '04', phase: 'Copa', action: 'Weiterentwickeln', title: 'Betrieb', short: 'Am Laufen halten, messen und entscheiden.', headline: 'Ausgelieferte, aber nicht betriebene Software wird zur Schuld, nicht zum Asset.', groups: [
      { title: 'Absicherung', items: ['Verfügbarkeits-SLA', 'Monitoring', 'Fehlerbehebung', 'Backup und Wiederherstellung'] },
      { title: 'Rhythmus', items: ['Quartalsreview', 'Priorisierte Warteschlange', 'Nächste Scheiben'] },
      { title: 'Evidenz', items: ['Tatsächliche Nutzung', 'Eingesparte Zeit', 'Vermiedener Betriebsfehler'] }] },
    evolucao: { number: '05', phase: 'Copa', action: 'Weiterentwickeln', title: 'Evolution', short: 'Neue Fähigkeit gewinnen, ohne die Basis neu zu bauen. Die Copa endet nicht.', headline: 'Eine gute Basis ist die, die das Modul aufnimmt, das niemand vorhergesehen hat.', groups: [
      { title: 'Jetzt', items: ['Den gemessenen Engpass entfernen', 'Die Basis schließen'] },
      { title: '90 Tage', items: ['Zweite Scheibe', 'Automatisieren, was repetitiv wurde'] },
      { title: 'Horizont', items: ['Neue Module', 'KI auf eigenen Daten', 'Skalierung mit Marge'] }] },
  },
}

export const manifestoExtra: Record<Extra, string[][]> = {
  es: [['Proceso', 'antes que herramienta.'], ['Dato', 'antes que panel.'], ['Contexto', 'antes que IA.'], ['Documentación', 'antes que automatización.'], ['Reversibilidad', 'antes que velocidad.'], ['Operación', 'antes que demo.']],
  it: [['Processo', 'prima dello strumento.'], ['Dato', 'prima della dashboard.'], ['Contesto', 'prima dell’IA.'], ['Documentazione', 'prima dell’automazione.'], ['Reversibilità', 'prima della velocità.'], ['Operazione', 'prima della demo.']],
  fr: [['Processus', "avant l'outil."], ['Donnée', 'avant le tableau de bord.'], ['Contexte', "avant l'IA."], ['Documentation', "avant l'automatisation."], ['Réversibilité', 'avant la vitesse.'], ['Exploitation', 'avant la démo.']],
  de: [['Prozess', 'vor Werkzeug.'], ['Daten', 'vor Dashboard.'], ['Kontext', 'vor KI.'], ['Dokumentation', 'vor Automatisierung.'], ['Umkehrbarkeit', 'vor Geschwindigkeit.'], ['Betrieb', 'vor Demo.']],
}

export const uiStringsExtra = {
  es: {
    brandAlt: 'EverGreen — Crecimiento previsible, escalable y tecnológico',
    navMapTitle: 'Mapa de la experiencia',
    heroEyebrow: 'RADIOGRAFÍA TECNOLÓGICA Y PREPARACIÓN AI-FIRST',
    heroSubtitle: 'No vendemos robots de IA ni tecnología por la tecnología. Construimos la infraestructura que hace que la operación deje de depender de una hoja de cálculo, un correo y una persona concreta.',
    ctaPrimary: 'Seguir la conversación por WhatsApp',
    bottleneckEyebrow: 'EL SÍNTOMA VS LA CAUSA',
    bottleneckTitle: 'Toda empresa que quiere tecnología pide la herramienta:',
    bottleneckSubtitle: 'Y casi siempre la causa está antes de ella — en el proceso, en el dato o en algo que nadie escribió.',
    reqLabel: 'PETICIÓN HABITUAL', sympLabel: 'SÍNTOMA REAL', causeLabel: 'CAUSA RAÍZ',
    dimEyebrow: 'LO QUE MIDE LA RADIOGRAFÍA TECNOLÓGICA',
    dimTitle: 'Preparación AI-First en siete dimensiones.',
    dimLead: 'No se trata de cuántas herramientas tiene la empresa. Se trata de lo que consigue hacer sin depender de que alguien se acuerde.',
    dimInstruction: 'Haz clic o pasa el cursor para ver la pregunta que abre cada dimensión.',
    dimAskLabel: 'LA PREGUNTA QUE ABRE',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'De la Raíz a la Copa: la frente tecnológica sigue la misma lógica',
    methodInstruction: 'Haz clic para explorar el módulo en detalle',
    ladderEyebrow: 'ESCALERA DE TECNOLOGÍA', ladderTitle: 'Todo cliente entra por el diagnóstico',
    ladderLead: 'Cada peldaño tiene garantía de ejecución escrita. El cuarto existe en el método y solo se discute con una línea base técnica clara.',
    guaranteeLabel: 'GARANTÍA',
    capEyebrow: 'CAPACIDADES TÉCNICAS', capTitle: 'El problema define cuáles entran en el proyecto',
    teamEyebrow: 'QUIÉN EJECUTA', teamTitle: 'Liderazgo técnico y estratégico en cada proyecto',
    evidEyebrow: 'EVIDENCIAS', evidTitle: 'Lo que ya se construyó y está en pie',
    patternEyebrow: 'CULTURA Y PRINCIPIOS', patternTitle: 'Nuestro estándar de trabajo',
    contactEyebrow: 'PRÓXIMO PASO', contactSubtitle: 'Si la propuesta tiene sentido, basta con responder por ahí.',
    openCase: 'Ver el estudio completo',
    caseFallbackNote: 'Los casos se muestran en inglés: contienen referencias del mercado brasileño que perderían sentido traducidas sin adaptar.',
  },
  it: {
    brandAlt: 'EverGreen — Crescita prevedibile, scalabile e tecnologica',
    navMapTitle: 'Mappa dell’esperienza',
    heroEyebrow: 'RADIOGRAFIA TECNOLOGICA E PRONTEZZA AI-FIRST',
    heroSubtitle: 'Non vendiamo robot di IA né tecnologia per la tecnologia. Costruiamo l’infrastruttura che fa smettere l’operazione di dipendere da un foglio, da una casella di posta e da una persona specifica.',
    ctaPrimary: 'Continuare la conversazione su WhatsApp',
    bottleneckEyebrow: 'IL SINTOMO VS LA CAUSA',
    bottleneckTitle: 'Ogni azienda che vuole tecnologia chiede lo strumento:',
    bottleneckSubtitle: 'E quasi sempre la causa sta prima di esso — nel processo, nel dato o in qualcosa che nessuno ha scritto.',
    reqLabel: 'RICHIESTA COMUNE', sympLabel: 'SINTOMO REALE', causeLabel: 'CAUSA RADICE',
    dimEyebrow: 'COSA MISURA LA RADIOGRAFIA TECNOLOGICA',
    dimTitle: 'Prontezza AI-First in sette dimensioni.',
    dimLead: 'Non conta quanti strumenti ha l’azienda. Conta cosa riesce a fare senza dipendere dal fatto che qualcuno se ne ricordi.',
    dimInstruction: 'Clicca o passa il cursore per vedere la domanda che apre ogni dimensione.',
    dimAskLabel: 'LA DOMANDA CHE APRE',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'Dalla Radice alla Chioma: la frente tecnologica segue la stessa logica',
    methodInstruction: 'Clicca per esplorare il modulo in dettaglio',
    ladderEyebrow: 'SCALA DI TECNOLOGIA', ladderTitle: 'Ogni cliente entra dalla diagnosi',
    ladderLead: 'Ogni gradino ha una garanzia di esecuzione scritta. Il quarto esiste nel metodo e si discute solo con una baseline tecnica chiara.',
    guaranteeLabel: 'GARANZIA',
    capEyebrow: 'CAPACITÀ TECNICHE', capTitle: 'Il problema definisce quali entrano nel progetto',
    teamEyebrow: 'CHI ESEGUE', teamTitle: 'Guida tecnica e strategica in ogni progetto',
    evidEyebrow: 'EVIDENZE', evidTitle: 'Ciò che è già stato costruito ed è in piedi',
    patternEyebrow: 'CULTURA E PRINCIPI', patternTitle: 'Il nostro standard di lavoro',
    contactEyebrow: 'PROSSIMO PASSO', contactSubtitle: 'Se la proposta ha senso, basta rispondere lì.',
    openCase: 'Vedi lo studio completo',
    caseFallbackNote: 'I casi sono mostrati in inglese: contengono riferimenti al mercato brasiliano che tradotti senza adattamento perderebbero senso.',
  },
  fr: {
    brandAlt: 'EverGreen — Croissance prévisible, scalable et technologique',
    navMapTitle: "Carte de l'expérience",
    heroEyebrow: 'RADIOGRAPHIE TECHNOLOGIQUE ET MATURITÉ AI-FIRST',
    heroSubtitle: "Nous ne vendons ni robots d'IA ni technologie pour la technologie. Nous construisons l'infrastructure qui libère l'opération d'un tableur, d'une boîte mail et d'une personne en particulier.",
    ctaPrimary: 'Poursuivre la conversation sur WhatsApp',
    bottleneckEyebrow: 'LE SYMPTÔME VS LA CAUSE',
    bottleneckTitle: "Toute entreprise qui veut de la technologie demande l'outil :",
    bottleneckSubtitle: "Et la cause se situe presque toujours en amont — dans le processus, dans la donnée, ou dans ce que personne n'a écrit.",
    reqLabel: 'DEMANDE COURANTE', sympLabel: 'SYMPTÔME RÉEL', causeLabel: 'CAUSE RACINE',
    dimEyebrow: 'CE QUE MESURE LA RADIOGRAPHIE TECHNOLOGIQUE',
    dimTitle: 'Maturité AI-First sur sept dimensions.',
    dimLead: "Ce n'est pas une question du nombre d'outils. C'est une question de ce que l'entreprise fait sans dépendre de la mémoire de quelqu'un.",
    dimInstruction: 'Cliquez ou survolez pour voir la question qui ouvre chaque dimension.',
    dimAskLabel: 'LA QUESTION QUI OUVRE',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'De la Racine à la Cime : la filière technologique suit la même logique',
    methodInstruction: 'Cliquez pour explorer le module en détail',
    ladderEyebrow: 'ESCALIER TECHNOLOGIQUE', ladderTitle: 'Tout client entre par le diagnostic',
    ladderLead: "Chaque marche porte une garantie d'exécution écrite. La quatrième existe dans la méthode et ne se discute qu'avec une référence technique claire.",
    guaranteeLabel: 'GARANTIE',
    capEyebrow: 'CAPACITÉS TECHNIQUES', capTitle: 'Le problème détermine lesquelles entrent dans le projet',
    teamEyebrow: 'QUI EXÉCUTE', teamTitle: 'Direction technique et stratégique sur chaque projet',
    evidEyebrow: 'PREUVES', evidTitle: 'Ce qui a été construit et tient debout',
    patternEyebrow: 'CULTURE ET PRINCIPES', patternTitle: 'Notre exigence de travail',
    contactEyebrow: 'PROCHAINE ÉTAPE', contactSubtitle: 'Si la proposition tient, il suffit de répondre là-bas.',
    openCase: "Voir l'étude complète",
    caseFallbackNote: "Les cas sont affichés en anglais : ils contiennent des références au marché brésilien qui perdraient leur sens traduites sans adaptation.",
  },
  de: {
    brandAlt: 'EverGreen — Planbares, skalierbares und technologiegetriebenes Wachstum',
    navMapTitle: 'Karte der Präsentation',
    heroEyebrow: 'TECHNOLOGIE-RÖNTGENBILD UND AI-FIRST-REIFE',
    heroSubtitle: 'Wir verkaufen weder KI-Roboter noch Technologie um ihrer selbst willen. Wir bauen die Infrastruktur, die den Betrieb von einer Tabelle, einem Postfach und einer bestimmten Person löst.',
    ctaPrimary: 'Gespräch auf WhatsApp fortsetzen',
    bottleneckEyebrow: 'SYMPTOM VS URSACHE',
    bottleneckTitle: 'Jedes Unternehmen, das Technologie will, fragt nach dem Werkzeug:',
    bottleneckSubtitle: 'Und die Ursache liegt fast immer davor — im Prozess, in den Daten oder in etwas, das nie jemand aufgeschrieben hat.',
    reqLabel: 'HÄUFIGE ANFRAGE', sympLabel: 'ECHTES SYMPTOM', causeLabel: 'GRUNDURSACHE',
    dimEyebrow: 'WAS DAS TECHNOLOGIE-RÖNTGENBILD MISST',
    dimTitle: 'AI-First-Reife über sieben Dimensionen.',
    dimLead: 'Es geht nicht darum, wie viele Werkzeuge ein Unternehmen hat. Es geht darum, was es kann, ohne dass sich jemand erinnern muss.',
    dimInstruction: 'Klicken oder darüberfahren, um die Einstiegsfrage jeder Dimension zu sehen.',
    dimAskLabel: 'DIE EINSTIEGSFRAGE',
    methodEyebrow: 'SISTEMA RAIZ EG',
    methodTitle: 'Von der Wurzel zur Krone: die Technologieseite folgt derselben Logik',
    methodInstruction: 'Klicken, um das Modul im Detail zu sehen',
    ladderEyebrow: 'TECHNOLOGIE-TREPPE', ladderTitle: 'Jeder Kunde steigt über die Diagnose ein',
    ladderLead: 'Jede Stufe trägt eine schriftliche Ausführungsgarantie. Die vierte existiert in der Methode und wird nur bei klarer technischer Baseline besprochen.',
    guaranteeLabel: 'GARANTIE',
    capEyebrow: 'TECHNISCHE FÄHIGKEITEN', capTitle: 'Das Problem bestimmt, welche ins Projekt kommen',
    teamEyebrow: 'WER AUSFÜHRT', teamTitle: 'Technische und strategische Führung in jedem Projekt',
    evidEyebrow: 'BELEGE', evidTitle: 'Was gebaut wurde und steht',
    patternEyebrow: 'KULTUR UND PRINZIPIEN', patternTitle: 'Unser Arbeitsstandard',
    contactEyebrow: 'NÄCHSTER SCHRITT', contactSubtitle: 'Wenn das Angebot passt, genügt eine Antwort dort.',
    openCase: 'Vollständige Fallstudie ansehen',
    caseFallbackNote: 'Die Fälle erscheinen auf Englisch: Sie enthalten Bezüge zum brasilianischen Markt, die ohne Anpassung übersetzt ihren Sinn verlören.',
  },
}
