export type LocalityLayoutVariant = 'angle-first' | 'look-first' | 'faq-led' | 'compare-monza'

export type LocalityFaq = {
  question: string
  answer: string
}

export type LocalityExternalLink = {
  href: string
  label: string
}

export type Locality = {
  slug: string
  name: string
  provinceHint: string
  /** Ordine dei blocchi sulla pagina — vedi docs/FRONTEND.md §5 */
  layoutVariant: LocalityLayoutVariant
  intro: string
  angleHeading: string
  angleBody: string
  lookHeading: string
  lookItems: string[]
  /** Contesto locale specifico (zone, collegamenti, errori tipici) — anti near-duplicate */
  contextHeading: string
  /** Uno o più paragrafi */
  contextParagraphs: string[]
  /** Link istituzionali / trasporto (max 1 o 2), non competitor */
  contextLinks?: LocalityExternalLink[]
  /** Frase prima dei link contesto (unica per comune; evita lead-in clonata) */
  contextLinksLead?: string
  requestNote: string
  /** H2 blocco richiesta — unico per comune */
  requestHeading: string
  /** Secondo paragrafo dopo requestNote */
  requestFollowUp: string
  /** H2 elenco comuni vicini */
  siblingsHeading: string
  /** Titolo related links in fondo */
  relatedTitle: string
  /** Solo per layoutVariant `faq-led` */
  faqs?: LocalityFaq[]
}

/** Comuni operativi a ridosso di Monza. */
export const NEAR_MONZA_LOCALITIES: Locality[] = [
  {
    slug: 'lissone',
    name: 'Lissone',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'compare-monza',
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
    contextHeading: 'Zone e contesto a Lissone (cosa cambia il valore)',
    contextParagraphs: [
      'Chi vende a Lissone spesso confonde “vicino a Monza” con “prezzo da Monza”. In pratica il centro cittadino, le fasce più residenziali e le aree più vicine agli assi verso Monza/Milano non chiudono allo stesso livello: pesano servizi a piedi, traffico della via e tipologica (condominio vs schiera/indipendente).',
      'Il tessuto produttivo e la tradizione del mobile/design spiegano anche un profilo di acquirenti diverso da un quartiere monzese “dormitorio”: la stima deve restare ancorata alle chiusure di Lissone, non a un listino copiato dal comune vicino.',
    ],
    contextLinks: [
      { href: 'https://www.comune.lissone.mb.it/', label: 'Comune di Lissone' },
    ],
    contextLinksLead: 'Scheda istituzionale del territorio:',
    requestNote:
      'Indica “Lissone” come comune nel modulo: così organizziamo il sopralluogo nella zona giusta fin dal primo contatto.',
    requestHeading: 'Prenota il sopralluogo a Lissone',
    requestFollowUp:
      'Ti ricontattiamo entro 1 o 2 giorni lavorativi. Gratuito e senza impegno. Il percorso passo passo è qui:',
    siblingsHeading: 'Confronta con altri comuni vicini a Monza',
    relatedTitle: 'Dalla Brianza e dalle tipologiche',
  },
  {
    slug: 'vimodrone',
    name: 'Vimodrone',
    provinceHint: 'area Monza e Milano',
    layoutVariant: 'look-first',
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
      'Vendite recenti nello stesso contesto di Vimodrone',
    ],
    contextHeading: 'Vimodrone: pendolari, MM2 e via di passaggio',
    contextParagraphs: [
      'Qui la domanda è spesso “quanto ci metto a Milano?”. Immobili più comodi verso i collegamenti (anche verso la MM2 dell’area est) possono reggere meglio di unità più quiete ma isolate, a parità di mq. L’errore tipico è confrontare solo con Monza città o solo con Milano Est senza guardare il pezzo di Vimodrone in cui si vende.',
      'Anche il rumore conta: una via di scorrimento e una strada residenziale non sono lo stesso prodotto. Piano, ascensore e spese condominiali chiudono il quadro, soprattutto su tipologiche in condominio.',
    ],
    contextLinks: [
      { href: 'https://www.comune.vimodrone.mi.it/', label: 'Comune di Vimodrone' },
      { href: 'https://www.atm.it/', label: 'ATM: linee metropolitane' },
    ],
    contextLinksLead: 'Per orientarti su comune e collegamenti:',
    requestNote:
      'Nel modulo indica indirizzo e piano: a Vimodrone questi dettagli cambiano spesso la lettura del mercato.',
    requestHeading: 'Parti dalla richiesta (poi fissiamo il sopralluogo)',
    requestFollowUp:
      'Rispondiamo entro 1 o 2 giorni lavorativi. Nessun costo e nessun mandato. Dettagli qui:',
    siblingsHeading: 'Altre zone sull’asse Monza e Milano',
    relatedTitle: 'Altre letture utili da Vimodrone',
  },
  {
    slug: 'brugherio',
    name: 'Brugherio',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo gratuito a Brugherio: stimiamo l’immobile di persona e lo confrontiamo con le vendite reali del comune, verso Monza e Milano Est.',
    angleHeading: 'Brugherio: tra Monza e Milano Est, zona per zona',
    angleBody:
      'Brugherio ha un tessuto misto: residenziale consolidato, aree più vicine a Monza e fasce orientate verso Milano Est. Il prezzo “medio” del comune nasconde differenze importanti tra via e via. Per vendere senza allungare i tempi serve una stima che riconosca il contesto, non un numero generico di Brianza.',
    lookHeading: 'Cosa osserviamo sul posto a Brugherio',
    lookItems: [
      'Vicinanza a Monza oppure orientamento verso Milano Est',
      'Mix tipologico: appartamenti, case a schiera, indipendenti',
      'Stato interno vs annunci simili ancora in vendita',
      'Box, cantina, giardino o terrazzo realmente usufruibili',
      'Domanda locale e tempi medi di trattativa nella zona',
    ],
    contextHeading: 'A Brugherio la zona (es. Cascina Gatti) non è un dettaglio',
    contextParagraphs: [
      'Tra chi vende a Brugherio torna spesso la domanda: “vale di più perché è verso Monza o perché guarda Milano Est?”. Non c’è una risposta unica: centro, fasce residenziali consolidate e aree come Cascina Gatti hanno acquirenti e tempi diversi. Una media comunale nasconde queste differenze.',
      'Se conosci già la zona, segnalala nella richiesta: prepariamo il confronto sulle vendite di quel pezzo di Brugherio, non su un listino generico “Brianza”.',
    ],
    contextLinks: [
      { href: 'https://www.comune.brugherio.mb.it/', label: 'Comune di Brugherio' },
    ],
    contextLinksLead: 'Sito del Comune (servizi e territorio):',
    requestNote:
      'Se conosci già la zona (centro, Cascina Gatti o altre), segnalalo nei dati: aiuta a preparare il confronto giusto.',
    requestHeading: 'Come attivare la valutazione a Brugherio',
    requestFollowUp:
      'Compila il modulo a fianco: richiamata in 1 o 2 giorni lavorativi, sopralluogo gratuito. Il processo completo:',
    siblingsHeading: 'Valutazioni in comuni limitrofi',
    relatedTitle: 'Continua su hub e tipologiche',
  },
  {
    slug: 'villasanta',
    name: 'Villasanta',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
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
    contextHeading: 'Villasanta non è “Monza nord con altro CAP”',
    contextParagraphs: [
      'Il comune è piccolo e prevalentemente residenziale: chi compra cerca spesso quiete, servizi quotidiani e una distanza comoda da Monza, non lo stesso ritmo di un quartiere cittadino. Due case con mq simili possono divergere molto se una è su una via di passaggio e l’altra in un contesto più raccolto.',
      'L’errore classico è allineare il prezzo a un pezzo di Monza nord “perché siamo attaccati”. Domanda e chiusure restano di Villasanta: il sopralluogo serve proprio a non partire da un confronto sbagliato.',
    ],
    contextLinks: [
      { href: 'https://www.comune.villasanta.mb.it/', label: 'Comune di Villasanta' },
    ],
    contextLinksLead: 'Informazioni ufficiali sul comune:',
    requestNote:
      'Compila il modulo indicando Villasanta: ti richiamiamo per fissare un sopralluogo gratuito senza impegno.',
    requestHeading: 'Pronto per il sopralluogo a Villasanta?',
    requestFollowUp:
      'Il servizio è gratuito e senza impegno. Tempi di richiamo: 1 o 2 giorni lavorativi. Flusso completo:',
    siblingsHeading: 'Se l’immobile è in un comune vicino',
    relatedTitle: 'Pagine collegate a Villasanta',
    faqs: [
      {
        question: 'Villasanta vale come Monza nord?',
        answer:
          'No: è un comune a sé. Può essere comodo rispetto a Monza, ma domanda e prezzi chiudono sul mercato di Villasanta, non su una media monzese.',
      },
      {
        question: 'Cosa conta di più in una stima qui?',
        answer:
          'Contesto di via, spazi esterni e stato reale dell’immobile. Due case con metratura simile possono divergere molto se una è su una via di passaggio.',
      },
      {
        question: 'Il sopralluogo è obbligatorio per avere un numero?',
        answer:
          'Per una stima seria sì: senza vedere l’immobile restano solo medie e annunci. Il sopralluogo è gratuito e senza impegno.',
      },
    ],
  },
  {
    slug: 'muggio',
    name: 'Muggiò',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'compare-monza',
    intro:
      'Sopralluogo gratuito a Muggiò: stimiamo l’immobile di persona, tenendo conto del confine con Monza e della domanda locale.',
    angleHeading: 'Muggiò confina con Monza: attenzione a non “prezzare” come Monza',
    angleBody:
      'Muggiò è a ridosso di Monza (lato San Fruttuoso e San Giuseppe): molti proprietari confrontano i prezzi con quartieri monzesi vicini. È utile come riferimento, ma non come copia-incolla. Domanda, spese e profilo degli acquirenti restano quelli di Muggiò. Una stima sul posto evita di partire troppo alti o troppo bassi solo perché “è praticamente Monza”.',
    lookHeading: 'Cosa valutiamo a Muggiò',
    lookItems: [
      'Quanto sei vicino al confine con Monza e ai servizi di quartiere',
      'Tipologia prevalente: appartamenti e villette consolidate',
      'Stato reale vs annunci “ristrutturati” nella stessa fascia',
      'Posto auto o box (spesso decisivi nella domanda locale)',
      'Confronto con vendite a Muggiò, non solo con Monza limitrofa',
    ],
    contextHeading: 'Confine con Monza: riferimento utile, non prezzo da copiare',
    contextParagraphs: [
      'Dal lato San Fruttuoso e San Giuseppe il confine è percepito come continuo: molti annunci “guardano” i prezzi monzesi. Come orientamento va bene; come prezzo di listino no. Spese, profilo acquirenti e tempi di trattativa restano quelli di Muggiò.',
      'Box e posto auto qui pesano spesso più di quanto ci si aspetti da una media online. Stato reale vs annunci “ristrutturati” nella stessa fascia è il secondo controllo che facciamo sul posto.',
    ],
    contextLinks: [
      { href: 'https://www.comune.muggio.mb.it/', label: 'Comune di Muggiò' },
      { href: '/monza', label: 'Valutazione a Monza' },
    ],
    contextLinksLead: 'Per il confine con Monza e il contesto comunale:',
    requestNote:
      'Nel campo comune scrivi “Muggiò”: organizziamo il sopralluogo sul posto, gratuito e senza impegno.',
    requestHeading: 'Richiedi la stima sul posto a Muggiò',
    requestFollowUp:
      'Nessun obbligo di mandato. Ti contattiamo in 1 o 2 giorni lavorativi; i passaggi sono spiegati qui:',
    siblingsHeading: 'Comuni lungo il confine monzese',
    relatedTitle: 'Da Muggiò verso Monza e le tipologiche',
  },
  {
    slug: 'desio',
    name: 'Desio',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'look-first',
    intro:
      'Sopralluogo gratuito a Desio: uno dei comuni più ampi della Brianza nord, con valori che cambiano molto tra zone e tipologiche.',
    angleHeading: 'Desio è grande: la zona conta più della “media comunale”',
    angleBody:
      'Desio è tra i comuni più popolosi della Brianza nord: centro, residenziale consolidato e fasce più periferiche non si equivalgono. Pesano anche i collegamenti ferroviari e la tipologia (appartamento vs casa). Una stima automatica “Desio” appiattisce queste differenze; il sopralluogo le riporta sul tavolo.',
    lookHeading: 'Cosa guardiamo in una valutazione a Desio',
    lookItems: [
      'Zona rispetto al centro e alla stazione',
      'Ampiezza tipologica: dal bilocale alla casa indipendente',
      'Stato energetico e costi di gestione previsti',
      'Spazi esterni e box, particolarmente rilevanti fuori dal centro',
      'Vendite recenti nella stessa fascia di Desio',
    ],
    contextHeading: 'Desio: centro, stazione e “un altro Desio” a pochi minuti',
    contextParagraphs: [
      'Essendo un comune ampio, la media “Desio” è poco utile: centro, residenziale consolidato e fasce più lontane non chiudono allo stesso modo. La distanza pratica dalla stazione e dai servizi quotidiani sposta la domanda quanto lo stato interno.',
      'Fuori dal centro aumentano tipologiche con giardino o box; in condominio restano decisivi piano, spese e parti comuni. Indica l’indirizzo completo nella richiesta: a Desio la via orienta subito il confronto giusto.',
    ],
    contextLinks: [
      { href: 'https://www.comune.desio.mb.it/', label: 'Comune di Desio' },
      { href: 'https://www.trenord.it/', label: 'Trenord: orari e linee' },
    ],
    contextLinksLead: 'Comune e collegamenti ferroviari:',
    requestNote:
      'Indica indirizzo completo: a Desio la via (e non solo il comune) orienta subito il confronto di mercato.',
    requestHeading: 'Invia i dati per Desio',
    requestFollowUp:
      'Con l’indirizzo prepariamo già il confronto di zona. Richiamo in 1 o 2 giorni; gratis e senza impegno. Vedi:',
    siblingsHeading: 'Altri comuni della Brianza nord',
    relatedTitle: 'Dopo Desio, cosa leggere',
  },
  {
    slug: 'concorezzo',
    name: 'Concorezzo',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
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
    contextHeading: 'Orientamento Vimercate e Agrate (non Monza centro)',
    contextParagraphs: [
      'Geograficamente e di domanda, Concorezzo vive più la Brianza orientale (Vimercate, Agrate) che il centro storico monzese. Chi arriva da listini di Monza o da comuni sulla MM2 spesso sovrastima: acquirenti e tempi di chiusura sono diversi.',
      'Qui contano molto quiete della via, spazi esterni e box. Una stima sul posto serve a restare su vendite di Concorezzo e dei comuni immediatamente vicini, non su un’aspettativa “da città”.',
    ],
    contextLinks: [
      { href: 'https://www.comune.concorezzo.mb.it/', label: 'Comune di Concorezzo' },
    ],
    contextLinksLead: 'Pagina ufficiale del Comune:',
    requestNote:
      'Compila il modulo con i dati principali: ti contattiamo per un sopralluogo gratuito a Concorezzo.',
    requestHeading: 'Fissa il sopralluogo a Concorezzo',
    requestFollowUp:
      'Gratuito, senza mandato. Ti richiamiamo entro 1 o 2 giorni lavorativi. Il percorso:',
    siblingsHeading: 'Vicino a Concorezzo',
    relatedTitle: 'Brianza orientale e dintorni',
    faqs: [
      {
        question: 'Concorezzo è lo stesso mercato di Monza?',
        answer:
          'No. L’orientamento è verso Vimercate e Agrate. Usare listini di Monza centro spesso porta a aspettative sbagliate.',
      },
      {
        question: 'Meglio un’offerta basata sugli annunci online?',
        answer:
          'Gli annunci mostrano richieste, non chiusure. Una stima sul posto confronta con vendite reali nella stessa fascia di Concorezzo.',
      },
      {
        question: 'Quanto tempo serve per il sopralluogo?',
        answer:
          'In genere fissiamo un appuntamento entro 1 o 2 giorni lavorativi dalla richiesta. Il servizio è gratuito e senza mandato.',
      },
    ],
  },
  {
    slug: 'cologno-monzese',
    name: 'Cologno Monzese',
    provinceHint: 'area Monza e Milano',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo gratuito a Cologno Monzese: a sud di Monza verso Milano, dove zona e collegamenti (anche MM2) pesano sul valore.',
    angleHeading: 'Cologno Monzese: densità urbana e metro, non lo stesso mercato di Monza',
    angleBody:
      'Cologno Monzese è più denso e orientato verso Milano (MM2 Cologno Nord e Sud) rispetto a molti comuni della Brianza “verde”. Domanda e prezzi reagiscono forte a stazione, piano e contesto condominiale. Una stima “alla monzese” o una media di Brianza non cattura questo profilo: serve un confronto con vendite reali a Cologno.',
    lookHeading: 'Cosa incide di più a Cologno Monzese',
    lookItems: [
      'Distanza dalla MM2 e qualità dei collegamenti verso Milano',
      'Piano, ascensore e spese condominiali',
      'Stato delle parti comuni e del condominio',
      'Rumore, esposizione e luminosità (spesso critici in tessuto denso)',
      'Vendite chiuse nella stessa zona di Cologno, non medie di Monza',
    ],
    contextHeading: 'MM2 Cologno Nord e Sud: densità e domanda verso Milano',
    contextParagraphs: [
      'Rispetto a molti comuni brianzoli più “verdi”, Cologno è densa e fortemente legata alla MM2 (Cologno Nord e Cologno Sud). La distanza dalla stazione, il piano e le spese condominiali spostano il valore più di una media €/mq di Brianza.',
      'Rumore, esposizione e luminosità sono critici in tessuto urbano compatto. Confrontare con Monza città o con una villetta in Brianza orientale spesso fuorvia: il mercato di riferimento è quello di Cologno e dell’asse verso Milano.',
    ],
    contextLinks: [
      { href: 'https://www.comune.colognomonzese.mi.it/', label: 'Comune di Cologno Monzese' },
      { href: 'https://www.atm.it/', label: 'ATM: MM2 e linee' },
    ],
    contextLinksLead: 'Comune e rete MM2:',
    requestNote:
      'Nel modulo indica “Cologno Monzese” e, se possibile, la zona rispetto alla metro: aiuta a preparare il sopralluogo.',
    requestHeading: 'Valutazione a Cologno: invia la richiesta',
    requestFollowUp:
      'Segnala la zona rispetto alla metro se la conosci. Richiamo in 1 o 2 giorni, senza costi. Dettaglio:',
    siblingsHeading: 'Zone vicine sull’asse verso Milano',
    relatedTitle: 'Da Cologno verso Monza e le guide',
  },
]

export function getLocality(slug: string) {
  return NEAR_MONZA_LOCALITIES.find((item) => item.slug === slug)
}

export function localityPath(slug: string) {
  return `/valutazione/${slug}`
}
