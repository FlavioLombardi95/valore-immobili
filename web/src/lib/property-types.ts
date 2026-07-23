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
  faqs?: PropertyTypeFaq[]
}

export const PROPERTY_TYPE_PAGES: PropertyTypePage[] = [
  {
    slug: 'appartamenti-monza',
    shortLabel: 'Appartamenti',
    title: 'Valutazione appartamenti a Monza',
    intro:
      'Sopralluogo gratuito per appartamenti a Monza e nei comuni vicini: piano, spese, stato e contesto condominiale pesano quanto i metri quadri. Stima sul mercato reale della zona, non su medie online.',
    metaTitle: 'Valutazione appartamenti Monza: sopralluogo gratuito',
    metaDescription:
      'Valutazione appartamenti a Monza e Brianza con sopralluogo gratuito. Piano, ascensore, spese e vendite reali del quartiere. Senza impegno.',
    defaultCity: 'Monza',
    layoutVariant: 'angle-led',
    angleHeading: 'Perché due appartamenti con gli stessi mq valgono diversamente',
    angleBody:
      'A Monza un bilocale in Centro o vicino alla Villa Reale non si confronta con uno in una zona più residenziale solo “per metratura”. Contano piano, ascensore, esposizione, stato interno, spese condominiali e domanda reale della zona. Le stime automatiche appiattiscono tutto su una media: il sopralluogo riporta questi dettagli sul tavolo.',
    lookHeading: 'Cosa osserviamo in un appartamento',
    lookItems: [
      'Piano, presenza di ascensore e luminosità e affaccio',
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
    zonesBody: 'Operiamo su Monza città e sui comuni limitrofi.',
    faqs: [
      {
        question: 'La valutazione appartamento è diversa da quella di una casa?',
        answer:
          'Sì: in condominio pesano di più piano, ascensore, spese e parti comuni. Su una villa o casa indipendente contano di più giardino, autonomia e contesto di via.',
      },
      {
        question: 'Serve l’APE per la stima?',
        answer:
          'Non è obbligatorio per richiedere il sopralluogo, ma se ce l’hai accelera la lettura energetica e dei costi di gestione.',
      },
    ],
  },
  {
    slug: 'ville-brianza',
    shortLabel: 'Ville',
    title: 'Valutazione ville in Brianza',
    intro:
      'Sopralluogo gratuito per ville e case indipendenti in Brianza: giardino, stato, via e domanda locale cambiano il valore più di una media €/mq. Stima sul posto, senza impegno.',
    metaTitle: 'Valutazione ville Brianza: sopralluogo gratuito',
    metaDescription:
      'Valutazione ville e case indipendenti in Brianza con sopralluogo gratuito. Giardino, contesto e vendite reali della zona. Senza impegno.',
    defaultCity: '',
    layoutVariant: 'faq-led',
    angleHeading: 'Una villa non si valuta come un appartamento “più grande”',
    angleBody:
      'In Brianza ville a schiera, bifamiliari e indipendenti hanno acquirenti e tempi diversi dagli appartamenti in condominio. Pesano giardino o cortile utilizzabile, privacy, stato strutturale, impianti e quanto la via è residenziale o di passaggio. Usare listini di appartamenti monzesi come riferimento è uno degli errori più frequenti.',
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
    zonesBody: 'Il servizio copre Monza città e la Brianza residenziale.',
    faqs: [
      {
        question: 'Valutate solo ville di prestigio?',
        answer:
          'No. Valutiamo ville, schiere e case indipendenti residenziali nella zona di Monza e Brianza, con lo stesso approccio sul posto.',
      },
      {
        question: 'I tempi di vendita sono più lunghi delle unità in condominio?',
        answer:
          'Spesso sì, soprattutto se prezzo e stato non sono allineati alla domanda locale. Una stima realistica aiuta a non partire troppo alti.',
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
