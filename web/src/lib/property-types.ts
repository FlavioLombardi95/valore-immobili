import { localityPath } from '@/lib/localities'

export type PropertyTypeFaq = {
  question: string
  answer: string
}

export type PropertyTypeLayoutVariant = 'angle-led' | 'faq-led'

/** Pagine tipologiche sotto `/valutazione/{slug}` (non comuni). */
export type PropertyTypePage = {
  slug: string
  /** Label corta per link e breadcrumb */
  shortLabel: string
  title: string
  intro: string
  metaTitle: string
  metaDescription: string
  defaultCity: string
  layoutVariant: PropertyTypeLayoutVariant
  angleHeading: string
  angleBody: string
  lookHeading: string
  lookItems: string[]
  requestHeading: string
  requestNote: string
  requestFollowUp: string
  zonesHeading: string
  zonesBody: string
  /** Sezione extra (anti-thin / deepen tipologica) */
  deepenHeading?: string
  deepenBody?: string
  faqs?: PropertyTypeFaq[]
}

export const PROPERTY_TYPE_PAGES: PropertyTypePage[] = [
  {
    slug: 'appartamenti-monza',
    shortLabel: 'Appartamenti',
    title: 'Valutazione appartamenti a Monza',
    intro:
      'Valutazione appartamenti a Monza con **sopralluogo gratuito**: piano, spese, stato e condominio pesano quanto i mq. Non una media online: stima sul posto, senza mandato.',
    metaTitle: 'Valutazione appartamenti Monza: sopralluogo gratis',
    metaDescription:
      'Valutazione appartamenti a Monza con sopralluogo gratuito, senza mandato. Piano, ascensore, spese e vendite reali di quartiere: non un algoritmo.',
    defaultCity: 'Monza',
    layoutVariant: 'angle-led',
    angleHeading: 'Perché due appartamenti con gli stessi mq valgono diversamente',
    angleBody:
      'A Monza un bilocale in Centro o vicino alla Villa Reale non si confronta con uno in una zona più residenziale solo “per metratura”. Contano piano, ascensore, esposizione, stato interno, spese condominiali e domanda reale della zona. Le stime automatiche appiattiscono tutto su una media: il sopralluogo riporta questi dettagli sul tavolo e confronta con chiusure di appartamenti simili, non con annunci generici “Monza”.',
    lookHeading: 'Cosa osserviamo in un appartamento',
    lookItems: [
      'Piano, presenza di ascensore, luminosità e affaccio',
      'Stato di cucina, bagni, infissi e impianti',
      'Spese condominiali e qualità delle parti comuni',
      'Box, posto auto, cantina o ripostiglio',
      'Confronto con vendite chiuse di appartamenti simili nella stessa zona',
    ],
    requestHeading: 'Richiedi il sopralluogo per un appartamento',
    requestNote:
      'Nel modulo indica comune (es. Monza) e tipologia “Appartamento”: organizziamo un sopralluogo gratuito senza impegno.',
    requestFollowUp:
      'Ti ricontattiamo entro 1 o 2 giorni lavorativi. Gratuito e senza impegno. Percorso completo:',
    zonesHeading: 'Dove valutiamo appartamenti',
    zonesBody:
      'Operiamo su Monza città e sui comuni limitrofi. Il valore cambia tra quartieri e via: meglio partire dalla micro-zona, non da una media cittadina.',
    faqs: [
      {
        question: 'La valutazione appartamento è diversa da quella di una casa?',
        answer:
          'Sì: in condominio pesano di più piano, ascensore, spese e parti comuni. Su una villa o casa indipendente contano di più giardino, autonomia e contesto di via.',
      },
      {
        question: 'Basta una stima online o OMI per un appartamento a Monza?',
        answer:
          'No. Danno un orientamento, non il valore della tua unità. Piano, stato, spese e via si vedono in sopralluogo: la visita è gratuita e senza mandato.',
      },
      {
        question: 'Serve l’APE per la stima?',
        answer:
          'Non è obbligatorio per richiedere il sopralluogo, ma se ce l’hai accelera la lettura energetica e dei costi di gestione.',
      },
      {
        question: 'Posso chiedere la stima anche se non ho deciso di vendere?',
        answer:
          'Sì. Molte richieste servono a capire un punto di partenza realistico prima di pubblicare o affidare. Nessun obbligo di mandato dopo la valutazione.',
      },
    ],
  },
  {
    slug: 'ville-brianza',
    shortLabel: 'Ville',
    title: 'Valutazione ville in Brianza',
    intro:
      'Valutazione ville in Brianza con **sopralluogo gratuito**: giardino, stato, via e domanda locale pesano più di una media €/mq. Stima sul posto, senza mandato: non un listino da appartamento monzese.',
    metaTitle: 'Valutazione ville in Brianza: sopralluogo gratis',
    metaDescription:
      'Valutazione ville in Brianza con sopralluogo gratuito, senza mandato. Schiere, bifamiliari e indipendenti sul mercato locale: non una stima automatica.',
    defaultCity: '',
    layoutVariant: 'faq-led',
    angleHeading: 'Una villa non si valuta come un appartamento “più grande”',
    angleBody:
      'In Brianza ville a schiera, bifamiliari e indipendenti hanno acquirenti e tempi diversi dagli appartamenti in condominio. Pesano giardino o cortile utilizzabile, privacy, stato strutturale, impianti e quanto la via è residenziale o di passaggio. Usare listini di appartamenti monzesi come riferimento è uno degli errori più frequenti: la stima deve restare sulla tipologica e sul comune giusti.',
    lookHeading: 'Cosa pesa di più su una villa o casa indipendente',
    lookItems: [
      'Tipologia: schiera, bifamiliare, indipendente',
      'Spazi esterni (giardino, cortile) e loro reale utilizzabilità',
      'Stato di tetto, impianti, serramenti e eventuali lavori da fare',
      'Contesto di via e distanza da servizi e collegamenti',
      'Vendite chiuse di tipologiche simili nello stesso comune o fascia',
    ],
    requestHeading: 'Fissa il sopralluogo per una villa o casa indipendente',
    requestNote:
      'Nel modulo scegli “Villa” (o “Casa indipendente”) e indica il comune in Brianza: ti contattiamo per il sopralluogo gratuito.',
    requestFollowUp:
      'Richiamo in 1 o 2 giorni lavorativi, senza costi né mandato. Dettaglio del processo:',
    zonesHeading: 'Comuni e tipologiche collegate',
    zonesBody:
      'Il servizio copre Monza città e la Brianza residenziale. Tra un comune e l’altro (e tra schiera e indipendente) domanda e tempi di chiusura possono cambiare molto.',
    deepenHeading: 'Schiera, bifamiliare o indipendente: non è lo stesso prodotto',
    deepenBody:
      'Una villa a schiera condivide muri e spesso regole di cortile: privacy e manutenzione pesano diversamente da una bifamiliare o da un’indipendente con giardino chiuso. In Brianza l’errore tipico è applicare una media €/mq da appartamento monzese, o trattare “villa” come un’unica categoria. Sul posto guardiamo tipologica, esterni realmente utilizzabili, stato di tetto e impianti, e chiusure di immobili simili nello stesso comune, non annunci generici “Brianza”.',
    faqs: [
      {
        question: 'Valutate solo ville di prestigio?',
        answer:
          'No. Valutiamo ville, schiere e case indipendenti residenziali nella zona di Monza e Brianza, con lo stesso approccio sul posto.',
      },
      {
        question: 'Una media €/mq o una stima automatica bastano per una villa in Brianza?',
        answer:
          'No. Giardino, stato, via e domanda locale pesano più di un listino da appartamento. Il sopralluogo è gratuito e senza mandato.',
      },
      {
        question: 'Come si valuta una villa a schiera rispetto a un’indipendente?',
        answer:
          'La schiera ha vincoli di confine e spesso spazi esterni più contenuti; l’indipendente punta su privacy e lotto. Non usiamo lo stesso confronto di mercato.',
      },
      {
        question: 'I tempi di vendita sono più lunghi delle unità in condominio?',
        answer:
          'Spesso sì, soprattutto se prezzo e stato non sono allineati alla domanda locale. Una stima realistica aiuta a non partire troppo alti.',
      },
      {
        question: 'Serve una planimetria o documenti catastali?',
        answer:
          'Non sono obbligatori al primo contatto. Se li hai, velocizzano la stima; altrimenti si possono integrare dopo il sopralluogo.',
      },
    ],
  },
]

export function getPropertyType(slug: string) {
  return PROPERTY_TYPE_PAGES.find((item) => item.slug === slug)
}

export function propertyTypePath(slug: string) {
  return localityPath(slug)
}
