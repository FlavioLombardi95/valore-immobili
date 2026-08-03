import type { RelatedLink } from '@/components/RelatedLinks'

export type GuideExternalLink = {
  href: string
  label: string
}

export type GuideInternalLink = {
  href: string
  label: string
}

export type GuideSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  /** Frase prima dei link interni della sezione */
  internalLinksLead?: string
  internalLinks?: GuideInternalLink[]
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
    label: 'Immobiliare.it: case in vendita a Monza',
  },
  immobiliareBrianza: {
    href: 'https://www.immobiliare.it/vendita-case/monza-brianza/',
    label: 'Immobiliare.it: vendita in provincia di Monza e Brianza',
  },
  idealistaMonza: {
    href: 'https://www.idealista.it/vendita-case/monza-monza/',
    label: 'Idealista: vendita case a Monza',
  },
  casaMonza: {
    href: 'https://www.casa.it/vendita/residenziale/monza/',
    label: 'Casa.it: residenziale in vendita a Monza',
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
    label: 'Agevolazioni prima casa (Agenzia delle Entrate)',
  },
  visuraCatastale: {
    href: 'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/visura-catastale',
    label: 'Visura catastale (Agenzia delle Entrate)',
  },
  notariato: {
    href: 'https://www.notariato.it/',
    label: 'Consiglio Nazionale del Notariato',
  },
  bancaItaliaMutui: {
    href: 'https://www.bancaditalia.it/pubblicazioni/guide-bi/guida-mutuo/index.html',
    label: 'Guida al mutuo (Banca d’Italia)',
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
    metaTitle: 'Comprare casa in Brianza: comuni, prezzi e cosa confrontare',
    metaDescription:
      'Guida per comprare casa in Brianza: differenze tra comuni vicino a Monza, come leggere gli annunci e quando chiedere una consulenza locale.',
    title: 'Comprare casa in Brianza: come scegliere il comune giusto',
    intro:
      'Ampliare la ricerca da Monza ai comuni della Brianza ha senso per budget, tipologica o collegamenti. Il rischio è trattare **“Brianza” come un listino unico**. Questa guida spiega come confrontare i comuni vicini, leggere gli annunci senza farsi fuorviare e capire quando serve un parere locale prima di un’offerta.',
    breadcrumb: 'Comprare casa in Brianza',
    relatedTitle: 'Approfondimenti utili',
    sections: [
      {
        heading: 'Il problema: “Brianza” non è un listino',
        paragraphs: [
          'Molti acquirenti partono da Monza e poi allargano il raggio: Lissone, Brugherio, Desio, Muggiò e gli altri comuni a ridosso. È una scelta pratica. Quello che non funziona è usare una **media di provincia**, o un prezzo “da Monza”, come se valesse uguale a pochi chilometri di distanza.',
          'Ogni comune ha stock, tempi di trattativa e profilo di domanda diversi. Contano i collegamenti verso Monza o Milano, i servizi a piedi, quanto è denso il tessuto urbano e se in zona prevalgono appartamenti o case indipendenti. Due bilocali con metrature simili **non sono lo stesso prodotto** se uno è su un asse di passaggio e l’altro in una via residenziale quieta.',
          'Anche i filtri dei portali spingono verso il confronto sbagliato: cercando “Monza e provincia” mescoli comuni con logiche diverse e ti sembra di avere “tante opzioni”, quando in realtà stai confrontando prodotti che sul mercato non si sostituiscono.',
          'Se stai ancora calibrando il focus su Monza città, parti dall’hub dedicato e poi torna qui quando vuoi confrontare i comuni vicini.',
        ],
        internalLinksLead: 'Per il mercato cittadino:',
        internalLinks: [
          { href: '/comprare-casa-monza', label: 'Comprare casa a Monza' },
          { href: '/quartieri-monza', label: 'quartieri di Monza' },
        ],
      },
      {
        heading: 'Cosa rischi se confronti male',
        paragraphs: [
          'Il danno non è solo “pagare un po’ di più”. Un confronto sbagliato ti fa partire da aspettative che il mercato di quel comune non sostiene: **offerta troppo alta** che non viene presa sul serio, oppure **troppo bassa** su un immobile che in zona tiene meglio.',
          'Succede spesso mescolare tipologiche diverse nello stesso foglio Excel: un appartamento in condominio e una villetta a schiera non si chiudono con la stessa logica, anche nello stesso comune. Succede anche fidarsi di un annuncio che vende la posizione come “vicino a Monza” senza dire cosa cambia davvero rispetto al quartiere monzese più vicino.',
          'I tempi di trattativa non sono uguali ovunque. In alcuni comuni la domanda è più stretta e le visite meno frequenti; in altri, soprattutto sugli assi verso Milano, la competizione su certi tagli è più viva. Se confronti solo foto e prezzo al metro quadro, perdi proprio queste differenze.',
        ],
        bullets: [
          'Usare Monza come **prezzo di listino** per un comune confine',
          'Confrontare solo i mq senza via, piano, box e contesto',
          'Mettere insieme condominio e indipendenti nello stesso “range”',
          'Leggere il prezzo richiesto come se fosse già un **valore di chiusura**',
        ],
      },
      {
        heading: 'Un metodo in cinque passi prima dell’offerta',
        paragraphs: [
          'Prima di innamorarti di un annuncio, metti nero su bianco vincoli e raggio. Non serve un business plan: basta sapere budget massimo realistico (incluso mutuo e costi di atto), tipologica accettabile e quanti comuni sei disposto a seguire davvero. Se il mutuo non è ancora simulato, fallo prima di restringere i filtri: cambia il raggio più di quanto pensi.',
          'Scegli **due o tre comuni**, non “tutta la Brianza”. Allargare troppo diluisce le visite e rende i confronti inutili. Una regola pratica: se in due settimane non riesci a visitare almeno un paio di immobili per comune, il raggio è troppo largo.',
          'Poi filtra i portali **per comune**, non solo per “Monza e provincia”, e confronta immobili nella stessa fascia di domanda: stessa tipologica, stato simile, contesto di via confrontabile. In visita usa una checklist concreta. Solo dopo, se l’immobile regge, costruisci un’offerta credibile sul mercato di quel comune, non su una media stampata da qualche stimatore online.',
        ],
        bullets: [
          'Fissa budget, tempi e tipologica (anche con un primo giro mutuo)',
          'Seleziona 2 o 3 comuni e resta lì per qualche settimana di ricerca',
          'Filtra gli annunci per comune e aggiorna i salvataggi spesso',
          'Confronta nella stessa fascia di domanda, non solo per metratura',
          'Visita con criteri chiari, poi valuta l’offerta',
        ],
        internalLinksLead: 'Approfondisci i singoli passaggi qui:',
        internalLinks: [
          { href: '/mutuo-prima-casa', label: 'mutuo e prima casa' },
          { href: '/spese-acquisto-casa', label: 'spese di acquisto' },
          { href: '/annunci-casa-monza', label: 'come leggere gli annunci' },
          { href: '/checklist-visita-immobile', label: 'checklist di visita' },
          { href: '/offerta-acquisto-casa', label: 'offerta di acquisto' },
        ],
      },
      {
        heading: 'Come leggere i comuni a ridosso di Monza',
        paragraphs: [
          'Qui sotto trovi una lettura da acquirente dei comuni che seguiamo più spesso. Non sono schede prezzo: sono differenze di contesto da usare quando confronti due immobili “vicini sulla mappa”.',
          '**Lissone** non è Monza con un altro CAP. Centro, fasce residenziali e assi verso Monza o Milano non chiudono allo stesso modo. Pesano servizi a piedi, tipologica (condominio vs schiera) e il fatto che la domanda locale abbia una voce propria, legata anche al tessuto produttivo e residenziale del comune.',
          '**Brugherio** vive una tensione tipica: da un lato Monza, dall’altro l’orientamento verso Milano Est. Centro, fasce consolidate e aree come Cascina Gatti non attirano lo stesso profilo di acquirenti. Se un annuncio “guarda” i listini monzesi, chiediti se stai comprando davvero lo stesso prodotto.',
          '**Vimodrone** sta sull’asse tra Monza e Milano Est. Per molti acquirenti i collegamenti (anche verso la MM2 dell’area est) pesano quanto lo stato interno. Un appartamento più comodo verso Milano e uno più quieto ma meno connesso possono divergere anche a parità di mq. Controlla via di passaggio vs residenziale, piano e ascensore.',
          '**Muggiò** confina con Monza (lato San Fruttuoso e San Giuseppe): il confine sembra continuo, e molti annunci “copiano” aspettative monzesi. Come orientamento può aiutare; come prezzo da listino no. Box e posto auto qui pesano spesso più di quanto suggerisca una media online.',
          '**Desio** è ampio: la media comunale serve poco. Centro, residenziale consolidato e fasce più lontane non sono lo stesso mercato. Distanza pratica dalla stazione e dai servizi quotidiani sposta la domanda; fuori dal centro aumentano tipologiche con giardino o box.',
          '**Villasanta**, **Concorezzo** e **Cologno Monzese** chiudono il quadro con profili diversi: Villasanta più residenziale a ridosso di Monza; Concorezzo orientato verso la Brianza orientale (Vimercate, Agrate) più che verso Monza centro; Cologno più densa e legata alla MM2 verso Milano. Se stai confrontando questi comuni con una villetta “verde” più a nord, stai probabilmente mescolando prodotti diversi.',
          'Non serve conoscere a memoria tutti i comuni della provincia. Serve sapere perché stai entrando in un comune e cosa stai sacrificando rispetto a un altro: minuti di spostamento, tipologica, quiete, servizi, probabilità di trovare lo stock che cerchi. Quelle sono le leve vere del confronto, non una media €/mq regionale.',
        ],
        internalLinksLead: 'Contesto di zona (utile anche a chi compra) sulle pagine locali:',
        internalLinks: [
          { href: '/valutazione/lissone', label: 'Lissone' },
          { href: '/valutazione/brugherio', label: 'Brugherio' },
          { href: '/valutazione/vimodrone', label: 'Vimodrone' },
          { href: '/valutazione/muggio', label: 'Muggiò' },
          { href: '/valutazione/desio', label: 'Desio' },
          { href: '/valutazione/villasanta', label: 'Villasanta' },
          { href: '/valutazione/concorezzo', label: 'Concorezzo' },
          { href: '/valutazione/cologno-monzese', label: 'Cologno Monzese' },
          { href: '/brianza', label: 'hub Brianza' },
        ],
      },
      {
        heading: 'Appartamento o villa: non è solo una preferenza',
        paragraphs: [
          'In Brianza lo stock di appartamenti e quello di ville o case indipendenti si muovono in modo diverso. Sul condominio pesano piano, spese, parti comuni e box. Sull’indipendente entrano tetto, lotto, privacy, impianti e **costi di gestione** che l’annuncio spesso sottovaluta.',
          'Se esiti tra nuovo e usato, il trade-off non è solo estetico: tempi, lavori, documentazione e disponibilità reale in zona cambiano il piano di acquisto. Meglio chiarirlo prima di restringere i filtri sui portali.',
        ],
        internalLinksLead: 'Per tipologica e stato dell’immobile:',
        internalLinks: [
          { href: '/appartamenti-in-vendita-monza', label: 'appartamenti in vendita' },
          { href: '/ville-in-vendita-brianza', label: 'ville in vendita in Brianza' },
          { href: '/valutazione/ville-brianza', label: 'focus ville e indipendenti' },
          { href: '/casa-nuova-o-usata', label: 'casa nuova o usata' },
        ],
      },
      {
        heading: 'Annunci: da dove partire (e cosa non sono)',
        paragraphs: [
          'I portali mostrano **richieste, non chiusure**. Servono a capire cosa c’è in vetrina oggi, quanto tempo resta online un annuncio e se il prezzo è sceso. Non bastano, da soli, a fissare un’offerta.',
          'Attraversa più vetrine e filtra per comune. Molti immobili compaiono su più siti con testi simili: confronta data, privato o agenzia, e le variazioni di prezzo. Un annuncio fermo da mesi allo stesso prezzo racconta una storia diversa da uno aggiornato ieri dopo un ribasso.',
          'Poi verifica sul posto ciò che le foto non dicono: rumore di via, luce reale, stato delle parti comuni, quanto è pratico il posto auto. Lo stock pubblico non è tutto il mercato. Soprattutto su villette e criteri stretti, parte dell’offerta circola con meno rumore online. Se hai vincoli precisi, ha senso affiancare alla ricerca sui portali un contatto locale.',
        ],
        externalLinksLead: 'Parti da questi elenchi per lo stock in vendita:',
        externalLinks: [EXTERNAL.immobiliareBrianza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
        internalLinksLead: 'Metodo di lettura degli annunci:',
        internalLinks: [{ href: '/annunci-casa-monza', label: 'annunci casa a Monza e dintorni' }],
      },
      {
        heading: 'Dopo la visita: documenti, tempi e agevolazioni',
        paragraphs: [
          'Una visita convincente **non chiude il percorso**. Prima di impegnarti, allinea documenti, tempi verso il rogito e, se ti riguarda, i requisiti delle agevolazioni prima casa. Sono passaggi noiosi quanto utili: evitano sorprese quando sei già emotivamente “dentro” l’immobile.',
          'Non serve ripetere qui ogni voce di costo o ogni scadenziario. Meglio usare le guide dedicate e tornare su questa pagina solo per il confronto tra comuni.',
        ],
        internalLinksLead: 'Checklist dopo la visita:',
        internalLinks: [
          { href: '/documenti-acquisto-casa', label: 'documenti per l’acquisto' },
          { href: '/tempi-acquisto-casa', label: 'tempi fino al rogito' },
          { href: '/agevolazioni-prima-casa', label: 'agevolazioni prima casa' },
          { href: '/spese-acquisto-casa', label: 'spese oltre il prezzo' },
        ],
      },
      {
        heading: 'Quando ha senso una consulenza locale',
        paragraphs: [
          'Se stai confrontando due o tre comuni, hai poco tempo per le visite, cerchi una tipologica stretta o vuoi capire se un prezzo richiesto sta in piedi in quella zona, un parere locale riduce i giri a vuoto.',
          'La consulenza sull’acquisto è **gratuita e senza impegno** di comprare con noi. Serve a leggere mercato e opportunità, anche immobili che non trovi in vetrina, con lo stesso approccio concreto che usiamo sul territorio: niente stima automatica come unica bussola.',
          'Se invece stai vendendo per poi comprare, tieni aperti entrambi i percorsi: valutazione con sopralluogo sull’immobile attuale e ricerca sul prossimo.',
        ],
        internalLinksLead: 'Due porte d’ingresso, a seconda di dove sei nel percorso:',
        internalLinks: [
          { href: '/comprare-casa-monza', label: 'hub comprare a Monza' },
          { href: '/vendere-casa-monza', label: 'vendere casa a Monza' },
          { href: '/come-funziona', label: 'come funziona il percorso' },
        ],
      },
    ],
    related: [
      {
        href: '/comprare-casa-monza',
        label: 'Comprare casa a Monza',
        description: 'Hub acquisto sul mercato cittadino.',
      },
      {
        href: '/ville-in-vendita-brianza',
        label: 'Ville in vendita in Brianza',
        description: 'Indipendenti, giardino e costi reali.',
      },
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Imposte, notaio e costi oltre il prezzo.',
      },
      {
        href: '/offerta-acquisto-casa',
        label: 'Offerta di acquisto',
        description: 'Come impostare una proposta credibile.',
      },
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa',
        description: 'Come leggere i portali senza farsi fuorviare.',
      },
      {
        href: '/brianza',
        label: 'Brianza',
        description: 'Comuni e contesto geo della provincia.',
      },
    ],
  },
  {
    slug: 'annunci-casa-monza',
    shortLabel: 'Annunci casa',
    metaTitle: 'Annunci casa Monza: come leggerli senza farsi fuorviare',
    metaDescription:
      'Annunci casa a Monza e Brianza: come confrontare i portali, cosa guardare oltre il prezzo richiesto e come passare dalla vetrina alla visita con metodo.',
    title: 'Annunci casa a Monza: oltre il prezzo in vetrina',
    intro:
      'I portali mostrano **richieste, non chiusure**. Servono a costruire una shortlist, non a decidere da soli. Ecco come leggerli a Monza e nei comuni vicini senza confondere listino e mercato reale.',
    breadcrumb: 'Annunci casa a Monza',
    relatedTitle: 'Continua la ricerca',
    sections: [
      {
        heading: 'A cosa servono (e a cosa no) i portali',
        paragraphs: [
          'Gli annunci online ti dicono cosa c’è in vetrina oggi, a che prezzo viene chiesto, da quanto tempo e con quali foto. Non ti dicono a quanto si chiude davvero in quella micro-zona, né se lo stato interno regge le promesse del testo.',
          'Usarli bene significa filtrare, confrontare e preparare le visite. Usarli male significa innamorarti di un prezzo al metro quadro e scoprire in casa che stavi confrontando prodotti diversi.',
        ],
        internalLinksLead: 'Quadro generale per chi compra:',
        internalLinks: [
          { href: '/comprare-casa-monza', label: 'comprare casa a Monza' },
          { href: '/comprare-casa-brianza', label: 'comprare casa in Brianza' },
        ],
      },
      {
        heading: 'Tre portali, spesso gli stessi immobili',
        paragraphs: [
          'Molti annunci compaiono su più siti con foto e testi simili. Non è un problema: è un segnale. Confronta data di pubblicazione, se è privato o agenzia, e se il prezzo è cambiato nel tempo. Un ribasso recente dice più di una media di zona.',
          'Filtra per comune o quartiere, non solo per “Monza e provincia”. Se allarghi alla Brianza, tieni i comuni separati nella shortlist: altrimenti mescoli mercati diversi.',
        ],
        externalLinksLead: 'Parti da queste vetrine residenziali:',
        externalLinks: [EXTERNAL.immobiliareMonza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
        internalLinksLead: 'Per lo stock in provincia:',
        internalLinks: [
          { href: '/comprare-casa-brianza', label: 'guida Brianza' },
        ],
      },
      {
        heading: 'Cosa leggere tra le righe (oltre il prezzo)',
        paragraphs: [
          'Il prezzo richiesto è l’aggancio, non la conclusione. Prima di salvare un annuncio, controlla ciò che sposta il confronto a Monza: contesto di via, piano, accessori e costi di gestione.',
        ],
        bullets: [
          'Piano, ascensore, esposizione e rumore (strada, ferrovia, locali)',
          'Spese condominiali e lavori deliberati o in corso',
          'Classe energetica e impianti (spesso sottovalutati in trattativa)',
          'Box, cantina, giardino: accessori che spostano il confronto',
          'Tempo in vetrina: annunci fermi da mesi meritano domande in più',
          'Quartiere e micro-zona allineati a ciò che stai confrontando',
        ],
        internalLinksLead: 'Per collocare i nomi di zona:',
        internalLinks: [{ href: '/quartieri-monza', label: 'quartieri di Monza' }],
      },
      {
        heading: 'Come costruire una shortlist che regge',
        paragraphs: [
          'Fissa prima i vincoli (budget con costi di atto, tipologica, raggio). Poi salva solo immobili nella stessa fascia di domanda: stessa tipologica, stato simile, contesto confrontabile. Se in una settimana hai cinquanta salvataggi sparsi su mezza provincia, non hai una shortlist: hai rumore.',
          'Una regola pratica: tieni 5-8 candidati seri per volta. Quando ne scarti uno dopo la visita, ne aggiungi un altro nella stessa fascia, non “qualcosa di simile a dieci chilometri”.',
        ],
        bullets: [
          'Stesso comune o stesso quartiere nel confronto diretto',
          'Appartamento con appartamento; indipendente con indipendente',
          'Nota data, prezzo iniziale e eventuali ribassi',
          'Segna le domande da fare in visita (non a memoria)',
        ],
      },
      {
        heading: 'Dal portale alla visita (e poi all’offerta)',
        paragraphs: [
          'Usa i portali per arrivare in casa con criteri chiari. In visita verifica luce reale, rumore, parti comuni, box e lavori evidenti. Solo dopo, se l’immobile regge, costruisci un’offerta sul mercato locale, non sul solo prezzo pubblicato.',
          'Documenti e tempi entrano dopo: non bloccano la shortlist, ma bloccano un impegno serio se li ignori del tutto.',
        ],
        internalLinksLead: 'Passaggi successivi:',
        internalLinks: [
          { href: '/checklist-visita-immobile', label: 'checklist di visita' },
          { href: '/offerta-acquisto-casa', label: 'offerta di acquisto' },
          { href: '/documenti-acquisto-casa', label: 'documenti' },
          { href: '/spese-acquisto-casa', label: 'spese di acquisto' },
        ],
      },
      {
        heading: 'Appartamenti, ville e stock fuori vetrina',
        paragraphs: [
          'Sulle tipologiche lo stock online cambia molto: gli appartamenti a Monza sono più numerosi; ville e indipendenti in Brianza sono più radi e vanno aggiornati spesso nei filtri.',
          'I portali non sono tutto il mercato. Se hai criteri stretti, una consulenza locale può affiancare la ricerca e segnalare anche proposte che non compaiono in vetrina. È gratuita e senza impegno di acquisto.',
        ],
        internalLinksLead: 'Focus tipologici:',
        internalLinks: [
          { href: '/appartamenti-in-vendita-monza', label: 'appartamenti in vendita a Monza' },
          { href: '/ville-in-vendita-brianza', label: 'ville in vendita in Brianza' },
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
      {
        href: '/quartieri-monza',
        label: 'Quartieri di Monza',
        description: 'Dove collocare gli annunci sulla mappa.',
      },
      {
        href: '/comprare-casa-brianza',
        label: 'Comprare in Brianza',
        description: 'Se allarghi il raggio ai comuni vicini.',
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
          'Se stai confrontando annunci, allinea sempre quartiere e contesto — non solo i metri quadri. La mappa sotto aiuta a collocare i nomi che trovi nelle ricerche.',
        ],
      },
      {
        heading: 'I quartieri in sintesi',
        paragraphs: [
          'Il Comune usa una suddivisione statistica in dieci aggregati (oltre all’area del Parco a nord): Centro–San Gerardo, Libertà, San Carlo–San Giuseppe, Triante, San Fruttuoso, San Biagio–Cazzaniga, Cederna–Cantalupo, Sant’Albino, Regina Pacis–San Donato e San Rocco.',
          'Non sono “prezzi fissi” di listino: dentro lo stesso quartiere via, piano e stato possono spostare molto la trattativa. Servono però come bussola quando filtri gli annunci o chiedi una consulenza su zone precise.',
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
    metaTitle: 'Ville in vendita in Brianza: cosa confrontare prima dell’offerta',
    metaDescription:
      'Ville e case indipendenti in vendita in Brianza: giardino, tetto, costi di gestione, comuni e come leggere gli annunci prima di un’offerta.',
    title: 'Ville in vendita in Brianza: oltre i metri quadri',
    intro:
      'Una villa o una casa indipendente non si confronta come un appartamento “più grande”. In Brianza pesano **lotto, privacy, stato strutturale e costi di gestione**. Ecco come leggere gli annunci e preparare visite serie.',
    breadcrumb: 'Ville in vendita',
    relatedTitle: 'Indipendenti e mercato',
    sections: [
      {
        heading: 'Perché il confronto è diverso dal condominio',
        paragraphs: [
          'Su un appartamento conti piano, spese e parti comuni. Su una villa, una schiera o una bifamiliare entrano tetto, facciate, impianti, confini, giardino utilizzabile e quanto la via è residenziale o di passaggio. Usare listini di condominio monzese come riferimento è uno degli errori più frequenti.',
          'Anche i tempi di trattativa spesso sono diversi: lo stock è più sottile, gli acquirenti più selettivi, e un prezzo fuori mercato resta in vetrina a lungo.',
        ],
        internalLinksLead: 'Contesto tipologico e geo:',
        internalLinks: [
          { href: '/valutazione/ville-brianza', label: 'valutazione ville in Brianza' },
          { href: '/appartamenti-in-vendita-monza', label: 'appartamenti in vendita a Monza' },
          { href: '/comprare-casa-brianza', label: 'comprare casa in Brianza' },
        ],
      },
      {
        heading: 'Cosa pesa sul confronto (checklist acquirente)',
        paragraphs: [
          'Prima di innamorarti delle foto del giardino, verifica ciò che sposta costo reale e domanda. Non serve essere tecnici: serve una lista onesta di domande.',
        ],
        bullets: [
          'Tipologia: schiera, bifamiliare o indipendente (non sono lo stesso prodotto)',
          'Lotto, confini e privacy rispetto ai vicini',
          'Stato di tetto, facciate, infissi e impianti',
          'Giardino o cortile: quanto è davvero utilizzabile',
          'Costi di gestione e lavori prevedibili nei prossimi anni',
          'Accessi, parcheggio e collegamenti quotidiani verso Monza o Milano',
          'Comune e micro-zona: non mescolare listini di comuni diversi',
        ],
      },
      {
        heading: 'Comuni e raggio: non “tutta la Brianza”',
        paragraphs: [
          'Lo stock di indipendenti è rado. Allargare il raggio ha senso, ma tieni i comuni separati nella shortlist. Lissone, Brugherio, Desio, Muggiò, Villasanta e gli altri non chiudono con la stessa logica: collegamenti, densità e profilo di chi compra cambiano.',
          'Se stai ancora scegliendo tra Monza città (spesso più condominio) e un indipendente in provincia, chiarisci il trade-off prima di mischiare i salvataggi sui portali.',
        ],
        internalLinksLead: 'Per leggere i comuni e il percorso acquisto:',
        internalLinks: [
          { href: '/comprare-casa-brianza', label: 'guida comprare in Brianza' },
          { href: '/brianza', label: 'hub Brianza' },
          { href: '/comprare-casa-monza', label: 'comprare a Monza' },
        ],
      },
      {
        heading: 'Annunci: stock sottile, filtri da aggiornare spesso',
        paragraphs: [
          'Sugli indipendenti i portali mostrano ancora **richieste, non chiusure**. Lo stock online è più sottile di quello degli appartamenti: conviene aggiornare i filtri spesso e allargare con criterio ai comuni vicini, non con un unico filtro “Monza e provincia” che mescola tutto.',
          'Confronta data, ribassi e se l’annuncio è fermo da mesi. Poi verifica sul posto ciò che le foto non dicono: umidità, rumore di via, reale privacy del lotto, stato di tetto e impianti.',
        ],
        externalLinksLead: 'Elenchi utili per partire:',
        externalLinks: [EXTERNAL.immobiliareBrianza, EXTERNAL.idealistaMonza, EXTERNAL.casaMonza],
        internalLinksLead: 'Metodo di lettura:',
        internalLinks: [
          { href: '/annunci-casa-monza', label: 'annunci casa a Monza e dintorni' },
          { href: '/checklist-visita-immobile', label: 'checklist di visita' },
        ],
      },
      {
        heading: 'Nuova o usata, costi nascosti e offerta',
        paragraphs: [
          'Sul nuovo conti tempi, finiture e regole del cantiere. Sull’usato conti lavori, documentazione e sorprese strutturali. Il trade-off non è solo estetico: cambia il budget reale dopo il rogito.',
          'Quando l’immobile regge la visita, costruisci un’offerta coerente con la domanda di quel comune e di quella tipologica, non con una media €/mq regionale.',
        ],
        internalLinksLead: 'Approfondimenti:',
        internalLinks: [
          { href: '/casa-nuova-o-usata', label: 'casa nuova o usata' },
          { href: '/offerta-acquisto-casa', label: 'offerta di acquisto' },
          { href: '/spese-acquisto-casa', label: 'spese di acquisto' },
          { href: '/documenti-acquisto-casa', label: 'documenti' },
        ],
      },
      {
        heading: 'Oltre gli annunci pubblici',
        paragraphs: [
          'Per ville e indipendenti lo stock online è ancora più sottile. Se cerchi con criteri precisi (comune, metratura, giardino, budget), una consulenza locale può affiancare i portali e segnalare anche proposte che non pubblichiamo in vetrina.',
          'È **gratuita e senza impegno** di acquisto. Se invece stai valutando di vendere un indipendente, il percorso è la valutazione con sopralluogo sulla tipologica ville.',
        ],
        internalLinksLead: 'Due direzioni:',
        internalLinks: [
          { href: '/valutazione/ville-brianza', label: 'sopralluogo ville Brianza' },
          { href: '/vendere-casa-monza', label: 'vendere casa a Monza' },
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
      {
        href: '/annunci-casa-monza',
        label: 'Annunci casa',
        description: 'Come leggere i portali con metodo.',
      },
      {
        href: '/checklist-visita-immobile',
        label: 'Checklist visita',
        description: 'Cosa controllare sul posto.',
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
