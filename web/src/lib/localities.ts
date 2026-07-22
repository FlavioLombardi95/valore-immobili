export type Locality = {
  slug: string
  name: string
  provinceHint: string
  /** Intro sotto l’H1 */
  intro: string
  /** Primo H2 + corpo: angolo locale unico */
  angleHeading: string
  angleBody: string
  /** Secondo H2 + elenco specifico */
  lookHeading: string
  lookItems: string[]
  /** Nota breve sul modulo (terzo blocco) */
  requestNote: string
}

/** Comuni operativi a ridosso di Monza. */
export const NEAR_MONZA_LOCALITIES: Locality[] = [
  {
    slug: 'lissone',
    name: 'Lissone',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Lissone: stimiamo l’immobile di persona e lo confrontiamo con le vendite reali del comune, non con medie di Monza o della provincia.',
    angleHeading: 'Lissone non è Monza: il mercato ha una voce propria',
    angleBody:
      'Lissone è un centro residenziale e produttivo a pochi minuti da Monza, storicamente legato al design e al mobile. Domanda e prezzi cambiano tra il centro, le zone più residenziali e le fasce più vicine ai collegamenti verso Milano. Usare una media monzese per una casa a Lissone è uno degli errori più comuni: la stima deve partire dal comune e dalla via.',
    lookHeading: 'Cosa pesa di più in una stima a Lissone',
    lookItems: [
      'Posizione rispetto al centro e ai collegamenti verso Monza e Milano',
      'Tipologia: appartamento in condominio, villetta a schiera o casa indipendente',
      'Stato di manutenzione e lavori recenti (cucina, bagni, impianti)',
      'Presenza di box, posto auto o spazi esterni utilizzabili',
      'Confronto con vendite chiuse nella stessa zona di Lissone',
    ],
    requestNote:
      'Indica “Lissone” come comune nel modulo: così organizziamo il sopralluogo nella zona giusta fin dal primo contatto.',
  },
  {
    slug: 'vimodrone',
    name: 'Vimodrone',
    provinceHint: 'area Monza–Milano',
    intro:
      'Sopralluogo gratuito a Vimodrone: valutiamo l’immobile sul posto e lo confrontiamo con le vendite reali tra Monza e l’hinterland milanese.',
    angleHeading: 'A Vimodrone conta l’asse verso Milano (e non solo i metri quadri)',
    angleBody:
      'Vimodrone sta a cavallo tra Monza e Milano Est: molti acquirenti guardano i collegamenti (anche verso la linea MM2) quanto lo stato interno. Due appartamenti simili possono divergere molto se uno è più comodo verso Milano e l’altro è più quieto ma meno connesso. Una stima seria qui parte da posizione e accessibilità, non solo dalla metratura.',
    lookHeading: 'Elementi che spostano il valore a Vimodrone',
    lookItems: [
      'Prossimità ai collegamenti verso Milano e Monza',
      'Rumore e qualità della via (asse di passaggio vs residenziale)',
      'Piano, ascensore ed esposizione',
      'Spese condominiali e stato delle parti comuni',
      'Vendite recenti nello stesso micro-contesto di Vimodrone',
    ],
    requestNote:
      'Nel modulo indica indirizzo e piano: a Vimodrone questi dettagli cambiano spesso la lettura del mercato.',
  },
  {
    slug: 'brugherio',
    name: 'Brugherio',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Brugherio: stimiamo l’immobile di persona e lo confrontiamo con le vendite reali del comune, verso Monza e Milano Est.',
    angleHeading: 'Brugherio: tra Monza e Milano Est, zona per zona',
    angleBody:
      'Brugherio ha un tessuto misto: residenziale consolidato, aree più vicine a Monza e fasce orientate verso Milano Est. Il prezzo “medio” del comune nasconde differenze importanti tra via e via. Per vendere senza allungare i tempi serve una stima che riconosca il micro-contesto, non un numero generico di Brianza.',
    lookHeading: 'Cosa osserviamo sul posto a Brugherio',
    lookItems: [
      'Vicinanza a Monza oppure orientamento verso Milano Est',
      'Mix tipologico: appartamenti, case a schiera, indipendenti',
      'Stato interno vs annunci simili ancora in vendita',
      'Box, cantina, giardino o terrazzo realmente usufruibili',
      'Domanda locale e tempi medi di trattativa nella zona',
    ],
    requestNote:
      'Se conosci già la zona (centro, Cascina Gatti o altre), segnalalo nei dati: aiuta a preparare il confronto giusto.',
  },
  {
    slug: 'villasanta',
    name: 'Villasanta',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Villasanta: valutazione sul posto a nord di Monza, confrontata con le vendite reali del comune.',
    angleHeading: 'Villasanta: residenziale quieto, valore legato al contesto di via',
    angleBody:
      'Villasanta è soprattutto residenziale, a nord di Monza. Qui lo stato dell’immobile, la quiete della via e la distanza dal centro monzese pesano quanto i metri quadri. Confrontare una casa a Villasanta con un appartamento in una zona vivace di Monza spesso porta a prezzi fuori mercato: meglio una stima locale e concreta.',
    lookHeading: 'Cosa fa la differenza a Villasanta',
    lookItems: [
      'Contesto di via: quiete, servizi a piedi, traffico',
      'Distanza pratica dal centro di Monza e dai collegamenti',
      'Spazi esterni (giardino, terrazzo) e box',
      'Stato di finiture e impianti rispetto alle aspettative locali',
      'Vendite chiuse nello stesso comune, non medie provinciali',
    ],
    requestNote:
      'Compila il modulo indicando Villasanta: ti richiamiamo per fissare un sopralluogo gratuito senza impegno.',
  },
  {
    slug: 'muggio',
    name: 'Muggiò',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Muggiò: stimiamo l’immobile di persona, tenendo conto del confine con Monza e della domanda locale.',
    angleHeading: 'Muggiò confina con Monza: attenzione a non “prezzare” come Monza',
    angleBody:
      'Muggiò è a ridosso di Monza (lato San Fruttuoso / San Giuseppe): molti proprietari confrontano i prezzi con quartieri monzesi vicini. È utile come riferimento, ma non come copia-incolla. Domanda, spese e profilo degli acquirenti restano quelli di Muggiò. Una stima sul posto evita di partire troppo alti o troppo bassi solo perché “è praticamente Monza”.',
    lookHeading: 'Cosa valutiamo a Muggiò',
    lookItems: [
      'Quanto sei vicino al confine con Monza e ai servizi di quartiere',
      'Tipologia prevalente: appartamenti e villette consolidate',
      'Stato reale vs annunci “ristrutturati” nella stessa fascia',
      'Posto auto / box (spesso decisivi nella domanda locale)',
      'Confronto con vendite a Muggiò, non solo con Monza limitrofa',
    ],
    requestNote:
      'Nel campo comune scrivi “Muggiò”: organizziamo il sopralluogo sul posto, gratuito e senza impegno.',
  },
  {
    slug: 'desio',
    name: 'Desio',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Desio: uno dei comuni più ampi della Brianza nord, con valori che cambiano molto tra zone e tipologiche.',
    angleHeading: 'Desio è grande: la zona conta più della “media comunale”',
    angleBody:
      'Desio è tra i comuni più popolosi della Brianza nord: centro, residenziale consolidato e fasce più periferiche non si equivalgono. Pesano anche i collegamenti ferroviari e la tipologia (appartamento vs casa). Una stima automatica “Desio” appiattisce queste differenze; il sopralluogo le riporta sul tavolo.',
    lookHeading: 'Cosa guardiamo in una valutazione a Desio',
    lookItems: [
      'Micro-zona rispetto al centro e alla stazione',
      'Ampiezza tipologica: dal bilocale alla casa indipendente',
      'Stato energetico e costi di gestione previsti',
      'Spazi esterni e box, particolarmente rilevanti fuori dal centro',
      'Vendite recenti nella stessa fascia di Desio',
    ],
    requestNote:
      'Indica indirizzo completo: a Desio la via (e non solo il comune) orienta subito il confronto di mercato.',
  },
  {
    slug: 'concorezzo',
    name: 'Concorezzo',
    provinceHint: 'Monza e Brianza',
    intro:
      'Sopralluogo gratuito a Concorezzo: valutazione sul posto in Brianza orientale, vicino a Vimercate e Agrate.',
    angleHeading: 'Concorezzo: Brianza orientale, meno “Monza centro” e più contesto locale',
    angleBody:
      'Concorezzo guarda verso Vimercate e Agrate più che verso il centro storico di Monza. La domanda è tipicamente residenziale: contano quiete, servizi quotidiani e accessibilità in auto. Confrontare prezzi di Monza centro o di comuni sulla MM2 può fuorviare. Qui la stima deve restare ancorata alle vendite di Concorezzo e dei comuni immediatamente vicini.',
    lookHeading: 'Fattori tipici sul mercato di Concorezzo',
    lookItems: [
      'Contesto abitativo e qualità della via',
      'Accessibilità verso Vimercate, Agrate e gli assi verso Milano',
      'Giardino, cortile o box (spesso richiesti in zona)',
      'Stato interno e necessità di lavori nei prossimi anni',
      'Tempi di vendita osservati su immobili simili a Concorezzo',
    ],
    requestNote:
      'Compila il modulo con i dati principali: ti contattiamo per un sopralluogo gratuito a Concorezzo.',
  },
  {
    slug: 'cologno-monzese',
    name: 'Cologno Monzese',
    provinceHint: 'area Monza–Milano',
    intro:
      'Sopralluogo gratuito a Cologno Monzese: a sud di Monza verso Milano, dove zona e collegamenti (anche MM2) pesano sul valore.',
    angleHeading: 'Cologno Monzese: densità urbana e metro, non lo stesso mercato di Monza',
    angleBody:
      'Cologno Monzese è più denso e orientato verso Milano (MM2 Cologno Nord/Sud) rispetto a molti comuni della Brianza “verde”. Domanda e prezzi reagiscono forte a stazione, piano e contesto condominiale. Una stima “alla monzese” o una media di Brianza non cattura questo profilo: serve un confronto con vendite reali a Cologno.',
    lookHeading: 'Cosa incide di più a Cologno Monzese',
    lookItems: [
      'Distanza dalla MM2 e qualità dei collegamenti verso Milano',
      'Piano, ascensore e spese condominiali',
      'Stato delle parti comuni e del condominio',
      'Rumore, esposizione e luminosità (spesso critici in tessuto denso)',
      'Vendite chiuse nella stessa zona di Cologno, non medie di Monza',
    ],
    requestNote:
      'Nel modulo indica “Cologno Monzese” e, se possibile, la zona rispetto alla metro: aiuta a preparare il sopralluogo.',
  },
]

export function getLocality(slug: string) {
  return NEAR_MONZA_LOCALITIES.find((item) => item.slug === slug)
}

export function localityPath(slug: string) {
  return `/valutazione/${slug}`
}
