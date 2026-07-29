import type { RelatedLink } from '@/components/RelatedLinks'

export type GuideExternalLink = {
  href: string
  label: string
}

export type GuideSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  /** Frase prima dei link esterni della sezione */
  externalLinksLead?: string
  externalLinks?: GuideExternalLink[]
}

export type GuidePage = {
  slug: string
  /** Label corta per footer / indici */
  shortLabel: string
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  breadcrumb: string
  relatedTitle?: string
  sections: GuideSection[]
  related: RelatedLink[]
}

/** Portali e fonti istituzionali riusati nelle guide acquisto. */
export const EXTERNAL = {
  immobiliareMonza: {
    href: 'https://www.immobiliare.it/vendita-case/monza/',
    label: 'Immobiliare.it — case in vendita a Monza',
  },
  immobiliareBrianza: {
    href: 'https://www.immobiliare.it/vendita-case/monza-brianza/',
    label: 'Immobiliare.it — vendita in provincia di Monza e Brianza',
  },
  idealistaMonza: {
    href: 'https://www.idealista.it/vendita-case/monza-monza/',
    label: 'Idealista — vendita case a Monza',
  },
  casaMonza: {
    href: 'https://www.casa.it/vendita/residenziale/monza/',
    label: 'Casa.it — residenziale in vendita a Monza',
  },
  comuneMonza: {
    href: 'https://www.comune.monza.it/',
    label: 'Comune di Monza',
  },
  agenziaEntrate: {
    href: 'https://www.agenziaentrate.gov.it/portale/',
    label: 'Agenzia delle Entrate',
  },
  agevolazioniPrimaCasa: {
    href: 'https://www.agenziaentrate.gov.it/portale/aree-tematiche/casa/agevolazioni/agevolazioni-per-acquisto-della-prima-casa',
    label: 'Agevolazioni prima casa — Agenzia delle Entrate',
  },
  visuraCatastale: {
    href: 'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/visura-catastale',
    label: 'Visura catastale — Agenzia delle Entrate',
  },
  notariato: {
    href: 'https://www.notariato.it/',
    label: 'Consiglio Nazionale del Notariato',
  },
  bancaItaliaMutui: {
    href: 'https://www.bancaditalia.it/pubblicazioni/guide-bi/guida-mutuo/index.html',
    label: 'Guida al mutuo — Banca d’Italia',
  },
} as const

/**
 * Guide informative (acquisto / mercato). Niente form sticky: CTA verso home.
 * URL piatte via `app/[slug]/page.tsx` + generateStaticParams.
 */
export const GUIDE_PAGES: GuidePage[] = [
  {
    slug: 'comprare-casa-brianza',
    shortLabel: 'Comprare in Brianza',
    metaTitle: 'Comprare casa in Brianza: comuni e valori',
    metaDescription:
      'Comprare casa in Brianza: differenze tra comuni vicino a Monza, cosa confrontare e dove guardare gli annunci prima di un’offerta.',
    title: 'Comprare casa in Brianza: oltre il solo comune di Monza',
    intro:
      'Lissone, Brugherio, Desio e gli altri comuni a ridosso di Monza hanno domande e prezzi diversi. Ecco come orientarti senza basarti solo sulle medie di provincia.',
    breadcrumb: 'Comprare casa in Brianza',
    relatedTitle: 'Approfondimenti utili',
    sections: [
      {
        heading: 'Perché “Brianza” non è un mercato unico',
        paragraphs: [
          'Chi cerca casa spesso parte da Monza e poi amplia il raggio. È una scelta sensata, ma i comuni della Brianza non si muovono allo stesso modo: collegamenti, servizi, stock di appartamenti e presenza di case indipendenti cambiano il confronto.',
          'Prima di innamorarti di un annuncio, chiediti se stai confrontando immobili nella stessa fascia di domanda — non solo con metrature simili.',
        ],
      },
      {
        heading: 'Comuni da mettere a confronto',
        paragraphs: [
          'Tra i comuni più richiesti da chi lavora su Monza o Milano ci sono Lissone, Brugherio, Villasanta, Muggiò, Desio, Concorezzo e Cologno Monzese. Ognuno ha un profilo diverso di prezzi e tempi di trattativa.',
        ],
        bullets: [
          'Vicino a Monza con servizi consolidati (es. Lissone, Brugherio)',
          'Fascia più residenziale e indipendenti (varie zone della Brianza)',
          'Collegamenti verso Milano che pesano sul premio di prezzo',
        ],
      },
      {
        heading: 'Dove cercare gli annunci in zona',
        paragraphs: [
          'Per capire cosa c’è davvero in vendita, conviene attraversare più portali e filtrare per comune, non solo per “Monza e provincia”. Gli annunci online restano un punto di partenza: il prezzo richiesto non è il valore di chiusura.',
        ],
        externalLinksLead: 'Parti da qui per lo stock in vendita:',
        externalLinks: [EXTERNAL.immobiliareBrianza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
      },
    ],
    related: [
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'La guida hub sul mercato cittadino.',
      },
      {
        href: '/brianza',
        label: 'Valutazione in Brianza',
        description: 'Sopralluogo e valori nei comuni vicini.',
      },
      {
        href: '/quartieri-monza',
        label: 'Quartieri di Monza',
        description: 'Come cambia la domanda tra le zone.',
      },
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa a Monza',
        description: 'Come leggere i portali senza farsi fuorviare.',
      },
    ],
  },
  {
    slug: 'annunci-casa-monza',
    shortLabel: 'Annunci casa',
    metaTitle: 'Annunci casa Monza: come leggerli davvero',
    metaDescription:
      'Annunci casa a Monza e Brianza: come confrontare i portali, cosa guardare oltre il prezzo e quali siti usare per una ricerca seria.',
    title: 'Annunci casa a Monza: oltre il prezzo in vetrina',
    intro:
      'I portali mostrano richieste, non chiusure. Ecco come usarli bene quando cerchi casa a Monza e nei comuni vicini.',
    breadcrumb: 'Annunci casa a Monza',
    relatedTitle: 'Continua la ricerca',
    sections: [
      {
        heading: 'Tre portali, stessi immobili (quasi)',
        paragraphs: [
          'Molti annunci compaiono su più siti con foto e testi simili. Confronta sempre data di pubblicazione, agenzia o privato, e se il prezzo è cambiato nel tempo: un ribasso recente dice più di una media di zona.',
        ],
        externalLinksLead: 'Consulta gli annunci residenziali in zona:',
        externalLinks: [EXTERNAL.immobiliareMonza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
      },
      {
        heading: 'Cosa leggere tra le righe',
        bullets: [
          'Piano, ascensore, esposizione e rumore (strada, ferrovia, locali)',
          'Spese condominiali e lavori deliberati o in corso',
          'Classe energetica e impianti (spesso sottovalutati in trattativa)',
          'Box, cantina, giardino: accessori che spostano il confronto',
          'Tempo in vetrina: annunci “fermi” da mesi meritano domande in più',
        ],
      },
      {
        heading: 'Dal portale alla visita',
        paragraphs: [
          'Usa i portali per costruire una shortlist, non per decidere. Prima di un’offerta serve visita, documenti e un confronto con ciò che in zona si sta davvero chiudendo — non solo con ciò che viene pubblicato.',
        ],
      },
    ],
    related: [
      {
        href: '/checklist-visita-immobile',
        label: 'Checklist visita immobile',
        description: 'Cosa controllare quando entri in casa.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Come impostare una proposta credibile.',
      },
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Quadro generale del mercato locale.',
      },
      {
        href: '/appartamenti-in-vendita-monza',
        label: 'Appartamenti in vendita',
        description: 'Focus su condominio e tipologiche.',
      },
    ],
  },
  {
    slug: 'quartieri-monza',
    shortLabel: 'Quartieri Monza',
    metaTitle: 'Quartieri Monza: dove cercare casa',
    metaDescription:
      'Quartieri di Monza per chi compra: come orientarsi tra centro, semicentro e periferia, servizi e collegamenti senza affidarsi solo agli annunci.',
    title: 'Quartieri di Monza: dove ha senso cercare casa',
    intro:
      'Il prezzo al metro quadro cambia molto tra centro, semicentro e periferia. Ecco una mappa pratica per chi compra, senza slogan da brochure.',
    breadcrumb: 'Quartieri di Monza',
    relatedTitle: 'Zone e valori',
    sections: [
      {
        heading: 'Non esiste “il” prezzo di Monza',
        paragraphs: [
          'Due appartamenti con la stessa metratura possono valere in modo diverso a pochi chilometri di distanza. Contano via, piano, stato, condominio e domanda reale di quella micro-zona.',
          'Se stai confrontando annunci, allinea sempre quartiere e contesto — non solo i metri quadri.',
        ],
      },
      {
        heading: 'Cosa pesa nella scelta del quartiere',
        bullets: [
          'Collegamenti verso Milano e verso i comuni della Brianza',
          'Scuole, servizi e vivibilità quotidiana (non solo “centralità”)',
          'Rumore, traffico e densità commerciale',
          'Stock disponibile: più offerta può significare più potere in trattativa',
        ],
      },
      {
        heading: 'Fonti locali e annunci per zona',
        paragraphs: [
          'Per il contesto urbano puoi partire dal sito del Comune; per lo stock in vendita, filtra i portali per zona o CAP e confronta più richieste nella stessa fascia.',
        ],
        externalLinksLead: 'Contesto e annunci:',
        externalLinks: [EXTERNAL.comuneMonza, EXTERNAL.immobiliareMonza, EXTERNAL.idealistaMonza],
      },
    ],
    related: [
      {
        href: '/monza',
        label: 'Valutazione a Monza',
        description: 'Sopralluogo e stima sul mercato cittadino.',
      },
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Guida pratica prima dell’offerta.',
      },
      {
        href: '/comprare-casa-brianza',
        label: 'Comprare in Brianza',
        description: 'Quando conviene ampliare il raggio.',
      },
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa a Monza',
        description: 'Come usare i portali in modo critico.',
      },
    ],
  },
  {
    slug: 'spese-acquisto-casa',
    shortLabel: 'Spese di acquisto',
    metaTitle: 'Spese acquisto casa: cosa mettere in conto',
    metaDescription:
      'Spese per acquistare casa a Monza e in Brianza: imposte, notaio, eventuali mediazioni e costi da non dimenticare oltre al prezzo.',
    title: 'Spese di acquisto casa: oltre il prezzo dell’immobile',
    intro:
      'Il prezzo concordato non è tutto. Imposte, notaio e altri costi cambiano il budget reale — soprattutto sulla prima casa.',
    breadcrumb: 'Spese di acquisto',
    relatedTitle: 'Documenti e agevolazioni',
    sections: [
      {
        heading: 'Voci tipiche da mettere in conto',
        bullets: [
          'Imposte di registro / IVA a seconda della tipologia di vendita',
          'Onorario notarile e adempimenti collegati al rogito',
          'Eventuale provvigione dell’agenzia (se prevista dal mandato)',
          'Visure, perizie bancarie e costi legati al mutuo',
          'Spese condominiali arretrate o lavori già deliberati',
        ],
      },
      {
        heading: 'Prima casa e non solo',
        paragraphs: [
          'Le agevolazioni “prima casa” possono ridurre in modo sensibile le imposte, ma hanno requisiti precisi. Non basarti sul sentito dire: verifica le condizioni aggiornate sulle fonti ufficiali prima di firmare una proposta.',
        ],
        externalLinksLead: 'Fonti istituzionali da consultare:',
        externalLinks: [EXTERNAL.agevolazioniPrimaCasa, EXTERNAL.agenziaEntrate, EXTERNAL.notariato],
      },
      {
        heading: 'Budget e trattativa',
        paragraphs: [
          'Quando fai un’offerta a Monza o in Brianza, ragiona sul costo complessivo: un immobile “più economico” sull’annuncio può costare di più dopo lavori, spese e fiscalità. Meglio chiarirlo prima della proposta formale.',
        ],
      },
    ],
    related: [
      {
        href: '/agevolazioni-prima-casa',
        label: 'Agevolazioni prima casa',
        description: 'Quadro orientativo e link ufficiali.',
      },
      {
        href: '/mutuo-prima-casa',
        label: 'Mutuo prima casa',
        description: 'Cosa valutare prima di chiedere il finanziamento.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti per comprare',
        description: 'Carta da avere in ordine.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Come strutturare la proposta.',
      },
    ],
  },
  {
    slug: 'mutuo-prima-casa',
    shortLabel: 'Mutuo',
    metaTitle: 'Mutuo prima casa Monza: cosa sapere',
    metaDescription:
      'Mutuo per comprare casa a Monza e in Brianza: tempi, documenti tipici e come allineare l’offerta di acquisto alla delibera della banca.',
    title: 'Mutuo prima casa: allineare banca e offerta',
    intro:
      'Senza un’idea chiara di finanziamento, un’offerta rischia di nascere fragile. Ecco i punti pratici per chi compra a Monza e in Brianza.',
    breadcrumb: 'Mutuo prima casa',
    relatedTitle: 'Acquisto e costi',
    sections: [
      {
        heading: 'Prima l’ordine di grandezza, poi l’innamoramento',
        paragraphs: [
          'Fatti un quadro di rata sostenibile e di quanto la banca può finanziare (spesso non il 100% del prezzo). Solo dopo ha senso stringere la shortlist di immobili.',
        ],
      },
      {
        heading: 'Tempi che contano in trattativa',
        bullets: [
          'Pre-approvazione o delibera di massima (se disponibile)',
          'Perizia sull’immobile scelta',
          'Coerenza tra scadenza della proposta e tempi bancari',
          'Clausole sospensive legate al mutuo, scritte in modo chiaro',
        ],
      },
      {
        heading: 'Informarsi senza affidarsi solo al passaparola',
        paragraphs: [
          'Confronta più istituti e leggi i costi accessori, non solo il tasso. Per basi di educazione finanziaria puoi partire dalle risorse pubbliche; per i dettagli del tuo caso serve il confronto diretto con la banca o un consulente del credito.',
        ],
        externalLinksLead: 'Approfondimenti istituzionali:',
        externalLinks: [EXTERNAL.bancaItaliaMutui, EXTERNAL.agevolazioniPrimaCasa, EXTERNAL.agenziaEntrate],
      },
    ],
    related: [
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Imposte, notaio e costi oltre il prezzo.',
      },
      {
        href: '/agevolazioni-prima-casa',
        label: 'Agevolazioni prima casa',
        description: 'Requisiti e fonti ufficiali.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Proposta e clausole tipiche.',
      },
      {
        href: '/tempi-acquisto-casa',
        label: 'Tempi di acquisto',
        description: 'Dalla visita al rogito.',
      },
    ],
  },
  {
    slug: 'offerta-acquisto-casa',
    shortLabel: 'Offerta di acquisto',
    metaTitle: 'Offerta di acquisto casa: come impostarla',
    metaDescription:
      'Offerta di acquisto casa a Monza e Brianza: come arrivare preparati, cosa scrivere e perché il prezzo dell’annuncio non è il punto di partenza obbligato.',
    title: 'Offerta di acquisto: partire dai valori reali',
    intro:
      'Una proposta credibile nasce dal confronto con il mercato locale, non da una trattativa “a sentimento” sul prezzo pubblicato.',
    breadcrumb: 'Offerta di acquisto',
    relatedTitle: 'Prima e dopo la proposta',
    sections: [
      {
        heading: 'Cosa deve essere chiaro nella proposta',
        bullets: [
          'Prezzo offerto e modalità di pagamento',
          'Tempi per il compromesso e per il rogito',
          'Eventuali clausole (mutuo, verifica documenti, stato luoghi)',
          'Caparra e conseguenze in caso di recesso',
        ],
      },
      {
        heading: 'Perché i valori di zona contano',
        paragraphs: [
          'A Monza e in Brianza due richieste vicine possono chiudere a livelli diversi. Prima di offrire, confronta immobili davvero comparabili e tieni conto di stato e lavori da fare. Se non trovi nulla di adatto online, possiamo orientarti anche su immobili che non pubblichiamo sui portali.',
        ],
      },
      {
        heading: 'Dopo l’accettazione',
        paragraphs: [
          'Se la proposta viene accettata, entrano in gioco documenti, notaio e (spesso) banca. Meglio avere già una lista di controlli aperti piuttosto che scoprirli a ridosso del rogito.',
        ],
        externalLinksLead: 'Riferimenti utili sul percorso formale:',
        externalLinks: [EXTERNAL.notariato, EXTERNAL.visuraCatastale],
      },
    ],
    related: [
      {
        href: '/checklist-visita-immobile',
        label: 'Checklist visita',
        description: 'Controlli da fare prima di offrire.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti acquisto',
        description: 'Cosa chiedere e verificare.',
      },
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Quadro generale del mercato.',
      },
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa',
        description: 'Come leggere i prezzi in vetrina.',
      },
    ],
  },
  {
    slug: 'documenti-acquisto-casa',
    shortLabel: 'Documenti acquisto',
    metaTitle: 'Documenti per comprare casa: elenco pratico',
    metaDescription:
      'Documenti per acquistare casa: visure, planimetrie, APE, atto di provenienza e controlli utili prima del compromesso a Monza e in Brianza.',
    title: 'Documenti per comprare casa: cosa verificare',
    intro:
      'Una trattativa seria si appoggia sulla carta. Ecco un elenco orientativo di ciò che di solito serve controllare.',
    breadcrumb: 'Documenti acquisto',
    relatedTitle: 'Percorso di acquisto',
    sections: [
      {
        heading: 'Documenti tipici dell’immobile',
        bullets: [
          'Visura e planimetria catastale coerenti con lo stato di fatto',
          'Atto di provenienza (rogito) del venditore',
          'Attestato di prestazione energetica (APE)',
          'Certificazioni impianti e conformità urbanistica, se disponibili',
          'Per gli appartamenti: regolamento e situazione spese condominiali',
        ],
      },
      {
        heading: 'Visure e catasto',
        paragraphs: [
          'Le visure si possono richiedere anche online tramite i canali dell’Agenzia delle Entrate. Restano uno strumento di controllo: non sostituiscono la verifica notarile completa.',
        ],
        externalLinksLead: 'Canali ufficiali:',
        externalLinks: [EXTERNAL.visuraCatastale, EXTERNAL.agenziaEntrate, EXTERNAL.notariato],
      },
      {
        heading: 'Quando chiedere cosa',
        paragraphs: [
          'In fase di interesse puoi chiedere i documenti principali; prima del compromesso conviene avere un quadro più completo. Se qualcosa non torna (planimetria diversa, abusi sospetti, spese arretrate), meglio chiarirlo subito.',
        ],
      },
    ],
    related: [
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Costi oltre il prezzo dell’immobile.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Come impostare la proposta.',
      },
      {
        href: '/tempi-acquisto-casa',
        label: 'Tempi di acquisto',
        description: 'Fasi dalla visita al rogito.',
      },
      {
        href: '/checklist-visita-immobile',
        label: 'Checklist visita',
        description: 'Cosa guardare di persona.',
      },
    ],
  },
  {
    slug: 'checklist-visita-immobile',
    shortLabel: 'Checklist visita',
    metaTitle: 'Checklist visita immobile: cosa controllare',
    metaDescription:
      'Checklist per visitare una casa in vendita a Monza o in Brianza: stato, rumori, impianti, condominio e domande da fare prima di un’offerta.',
    title: 'Checklist visita immobile: cosa non dimenticare',
    intro:
      'La visita è il momento in cui l’annuncio diventa concreto. Porta un elenco e non affidarti solo alle foto.',
    breadcrumb: 'Checklist visita',
    relatedTitle: 'Dopo la visita',
    sections: [
      {
        heading: 'Dentro l’immobile',
        bullets: [
          'Luce naturale nelle stanze principali nelle ore tipiche d’uso',
          'Stato di pavimenti, infissi, umidità e eventuali crepe',
          'Impianti: caldaia, elettrico, termosifoni o pavimento radiante',
          'Distribuzione degli spazi rispetto alle tue esigenze reali',
          'Rumori da strada, cortile, locali o vicini',
        ],
      },
      {
        heading: 'Condominio e contesto',
        bullets: [
          'Parti comuni: ingresso, scale, ascensore, cortile',
          'Spese ordinarie e lavori già approvati o in discussione',
          'Parcheggio, box, accessi e traffico nelle ore di punta',
          'Servizi a piedi: negozi, scuole, mezzi',
        ],
      },
      {
        heading: 'Dopo il sopralluogo “da compratore”',
        paragraphs: [
          'Confronta gli immobili visitati con criteri uguali, non a sensazione. Se la shortlist online non basta, raccontaci cosa cerchi: abbiamo proposte in zona che non compaiono sui portali.',
        ],
        externalLinksLead: 'Per allargare il confronto sugli annunci in zona:',
        externalLinks: [EXTERNAL.immobiliareMonza, EXTERNAL.idealistaMonza],
      },
    ],
    related: [
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Dal sopralluogo alla proposta.',
      },
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa a Monza',
        description: 'Come filtrare i portali.',
      },
      {
        href: '/casa-nuova-o-usata',
        label: 'Nuova o usata',
        description: 'Trade-off tipici nella scelta.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti acquisto',
        description: 'Carta da richiedere al venditore.',
      },
    ],
  },
  {
    slug: 'appartamenti-in-vendita-monza',
    shortLabel: 'Appartamenti in vendita',
    metaTitle: 'Appartamenti in vendita a Monza: guida pratica',
    metaDescription:
      'Appartamenti in vendita a Monza: cosa valutare in condominio, dove cercare gli annunci e come confrontare piani, spese e stato prima di offrire.',
    title: 'Appartamenti in vendita a Monza: cosa confrontare',
    intro:
      'Il mercato residenziale monzese è fatto soprattutto di condominio. Piano, spese e stato pesano quanto i metri quadri.',
    breadcrumb: 'Appartamenti in vendita',
    relatedTitle: 'Tipologie e valori',
    sections: [
      {
        heading: 'Variabili tipiche del condominio',
        bullets: [
          'Piano e ascensore',
          'Spese condominiali e fondo lavori',
          'Doppi servizi, balconi, cantina e box',
          'Ristrutturato vs da aggiornare (infissi, impianti, bagno)',
        ],
      },
      {
        heading: 'Dove guardare gli annunci',
        paragraphs: [
          'Filtra per Monza e poi per zona; confronta più portali perché lo stesso appartamento può comparire con testi diversi. Diffida delle descrizioni vaghe: chiedi metri commerciali, piano e spese nere su bianco.',
        ],
        externalLinksLead: 'Annunci residenziali a Monza:',
        externalLinks: [EXTERNAL.immobiliareMonza, EXTERNAL.casaMonza, EXTERNAL.idealistaMonza],
      },
      {
        heading: 'Se non trovi quello che cerchi',
        paragraphs: [
          'Lo stock online non è tutto. Se stai cercando un appartamento con requisiti precisi, possiamo farti sapere se in zona abbiamo immobili riservati — proposte che non pubblichiamo sui portali.',
        ],
      },
    ],
    related: [
      {
        href: '/valutazione/appartamenti-monza',
        label: 'Valutazione appartamenti',
        description: 'Sopralluogo gratuito su tipologica condominio.',
      },
      {
        href: '/ville-in-vendita-brianza',
        label: 'Ville in vendita in Brianza',
        description: 'Focus su indipendenti e semi-indipendenti.',
      },
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Guida hub all’acquisto.',
      },
      {
        href: '/quartieri-monza',
        label: 'Quartieri di Monza',
        description: 'Come cambia la domanda per zona.',
      },
    ],
  },
  {
    slug: 'ville-in-vendita-brianza',
    shortLabel: 'Ville in vendita',
    metaTitle: 'Ville in vendita in Brianza: cosa sapere',
    metaDescription:
      'Ville e case indipendenti in vendita in Brianza: giardino, stato, costi di gestione e dove cercare gli annunci prima di un’offerta.',
    title: 'Ville in vendita in Brianza: oltre i metri quadri',
    intro:
      'Giardino, tetto, impianti e manutenzione cambiano il costo reale di una casa indipendente. Ecco cosa tenere d’occhio.',
    breadcrumb: 'Ville in vendita',
    relatedTitle: 'Indipendenti e mercato',
    sections: [
      {
        heading: 'Cosa pesa sul confronto',
        bullets: [
          'Lotto, confini e privacy rispetto ai vicini',
          'Stato di tetto, facciate, infissi e impianti',
          'Costi di gestione e lavori prevedibili nei prossimi anni',
          'Accessi, parcheggio e collegamenti quotidiani',
        ],
      },
      {
        heading: 'Annunci di indipendenti in zona',
        paragraphs: [
          'Lo stock di ville e villette è più sottile di quello degli appartamenti: conviene allargare il raggio ai comuni della Brianza e aggiornare spesso i filtri sui portali.',
        ],
        externalLinksLead: 'Parti da questi elenchi:',
        externalLinks: [EXTERNAL.immobiliareBrianza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
      },
      {
        heading: 'Oltre gli annunci pubblici',
        paragraphs: [
          'Per ville e indipendenti lo stock online è ancora più sottile. Se stai cercando con criteri precisi, chiedi una consulenza: seguiamo anche immobili che non pubblichiamo sui portali.',
        ],
      },
    ],
    related: [
      {
        href: '/valutazione/ville-brianza',
        label: 'Valutazione ville Brianza',
        description: 'Sopralluogo su indipendenti e semi-indipendenti.',
      },
      {
        href: '/appartamenti-in-vendita-monza',
        label: 'Appartamenti in vendita',
        description: 'Il confronto sul condominio a Monza.',
      },
      {
        href: '/comprare-casa-brianza',
        label: 'Comprare in Brianza',
        description: 'Comuni e differenze di mercato.',
      },
      {
        href: '/casa-nuova-o-usata',
        label: 'Nuova o usata',
        description: 'Trade-off tipici nella scelta.',
      },
    ],
  },
  {
    slug: 'casa-nuova-o-usata',
    shortLabel: 'Nuova o usata',
    metaTitle: 'Casa nuova o usata: come scegliere',
    metaDescription:
      'Casa nuova o usata a Monza e in Brianza: vantaggi, costi nascosti, tempi e cosa confrontare prima di decidere.',
    title: 'Casa nuova o usata: un confronto concreto',
    intro:
      'Non esiste la risposta giusta per tutti. Contano budget, tempi, tolleranza ai lavori e disponibilità reale in zona.',
    breadcrumb: 'Nuova o usata',
    relatedTitle: 'Scelte di acquisto',
    sections: [
      {
        heading: 'Immobile usato: pro e contro tipici',
        bullets: [
          'Più scelta di zone consolidate e metrature “abitabili” subito',
          'Possibili lavori da mettere in conto (impianti, infissi, bagno)',
          'Trattativa sul prezzo spesso più aperta rispetto al listino nuovo',
          'Documentazione e conformità da verificare con attenzione',
        ],
      },
      {
        heading: 'Nuovo o ristrutturato a nuovo',
        bullets: [
          'Meno interventi immediati, classi energetiche spesso migliori',
          'Prezzo al metro in genere più alto; meno margine in trattativa',
          'Tempi di consegna da allineare a mutuo e vendita dell’eventuale casa attuale',
        ],
      },
      {
        heading: 'Come decidere sul campo',
        paragraphs: [
          'Visita entrambe le tipologie con la stessa checklist. Confronta il costo complessivo (prezzo + lavori + spese) e usa i portali per capire cosa offre oggi il mercato a Monza e in Brianza.',
        ],
        externalLinksLead: 'Panoramica annunci in zona:',
        externalLinks: [EXTERNAL.immobiliareMonza, EXTERNAL.immobiliareBrianza],
      },
    ],
    related: [
      {
        href: '/checklist-visita-immobile',
        label: 'Checklist visita',
        description: 'Controlli uguali su nuove e usate.',
      },
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Fiscalità e costi accessori.',
      },
      {
        href: '/appartamenti-in-vendita-monza',
        label: 'Appartamenti in vendita',
        description: 'Focus condominio a Monza.',
      },
      {
        href: '/ville-in-vendita-brianza',
        label: 'Ville in Brianza',
        description: 'Focus indipendenti.',
      },
    ],
  },
  {
    slug: 'tempi-acquisto-casa',
    shortLabel: 'Tempi di acquisto',
    metaTitle: 'Tempi acquisto casa: dalla visita al rogito',
    metaDescription:
      'Tempi per comprare casa a Monza e in Brianza: dalla prima visita al rogito, cosa allunga il percorso e come evitare ritardi evitabili.',
    title: 'Tempi di acquisto casa: le fasi che contano',
    intro:
      'Tra il “mi piace” e le chiavi in mano passano settimane o mesi. Conoscere le fasi aiuta a non firmare scadenze impossibili.',
    breadcrumb: 'Tempi di acquisto',
    relatedTitle: 'Organizzare l’acquisto',
    sections: [
      {
        heading: 'Fasi tipiche',
        bullets: [
          'Ricerca e visite',
          'Offerta / proposta accettata',
          'Due diligence documentale e (spesso) istruttoria mutuo',
          'Compromesso',
          'Rogito notarile e consegna',
        ],
      },
      {
        heading: 'Cosa allunga i tempi',
        paragraphs: [
          'Documenti incompleti, perizia bancaria in ritardo, lavori condominiali da chiarire o una vendita collegata non ancora chiusa. Se stai vendendo per comprare, allinea i due percorsi con margini realistici.',
        ],
        externalLinksLead: 'Per il passaggio formale dal compromesso al rogito:',
        externalLinks: [EXTERNAL.notariato, EXTERNAL.visuraCatastale],
      },
      {
        heading: 'Come tenerti sul pezzo',
        paragraphs: [
          'Tieni una timeline condivisa con agenzia (se c’è), banca e notaio. Meglio una proposta con tempi chiari che una corsa all’ultimo giorno utile.',
        ],
      },
    ],
    related: [
      {
        href: '/mutuo-prima-casa',
        label: 'Mutuo prima casa',
        description: 'Allineare banca e scadenze.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Proposta e clausole di tempo.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti acquisto',
        description: 'Carta che evita stalli.',
      },
      {
        href: '/vendere-casa-monza',
        label: 'Vendere casa a Monza',
        description: 'Se stai vendendo per poi comprare.',
      },
    ],
  },
  {
    slug: 'agevolazioni-prima-casa',
    shortLabel: 'Agevolazioni prima casa',
    metaTitle: 'Agevolazioni prima casa: requisiti e fonti',
    metaDescription:
      'Agevolazioni prima casa: quadro orientativo su requisiti e dove verificare le regole aggiornate su Agenzia delle Entrate e Notariato.',
    title: 'Agevolazioni prima casa: orientarsi senza scorciatoie',
    intro:
      'Le agevolazioni possono cambiare il costo fiscale dell’acquisto, ma i requisiti vanno verificati sulle fonti ufficiali — non su riassunti di forum.',
    breadcrumb: 'Agevolazioni prima casa',
    relatedTitle: 'Costi e finanziamento',
    sections: [
      {
        heading: 'Cosa verificare sempre',
        bullets: [
          'Requisiti soggettivi (residenza, possesso di altre abitazioni, ecc.)',
          'Tipologia di immobile e di atto',
          'Compatibilità con eventuali altri benefici',
          'Tempistiche di trasferimento della residenza, se richieste',
        ],
      },
      {
        heading: 'Dove leggere le regole aggiornate',
        paragraphs: [
          'L’Agenzia delle Entrate pubblica schede e circolari aggiornate; il Notariato offre guide sul percorso di compravendita. Usa queste fonti come riferimento e fai confermare il tuo caso da notaio o professionista prima del rogito.',
        ],
        externalLinksLead: 'Fonti istituzionali:',
        externalLinks: [EXTERNAL.agevolazioniPrimaCasa, EXTERNAL.agenziaEntrate, EXTERNAL.notariato],
      },
      {
        heading: 'Collegamento con mutuo e offerta',
        paragraphs: [
          'Inserisci le agevolazioni nel budget complessivo insieme a notaio, eventuali mediazioni e costi del mutuo. Una stima realistica evita offerte che poi non reggono al momento del rogito.',
        ],
      },
    ],
    related: [
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Tutte le voci oltre al prezzo.',
      },
      {
        href: '/mutuo-prima-casa',
        label: 'Mutuo prima casa',
        description: 'Finanziamento e tempi.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti acquisto',
        description: 'Carta da preparare.',
      },
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Torna alla guida hub.',
      },
    ],
  },
]

export function guidePath(slug: string) {
  return `/${slug}`
}

export function getGuideBySlug(slug: string) {
  return GUIDE_PAGES.find((guide) => guide.slug === slug)
}

export const GUIDE_SLUGS = GUIDE_PAGES.map((guide) => guide.slug)
