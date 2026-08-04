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
  /** H1 unico (anti template SERP) */
  pageTitle: string
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
    pageTitle: 'Quanto vale casa a Lissone?',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'compare-monza',
    intro:
      'Sopralluogo **gratuito** a Lissone: stimiamo l’immobile di persona e lo confrontiamo con le vendite reali del comune, non con medie di Monza o della provincia.',
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
    pageTitle: 'Valutazione a Vimodrone: stima sul posto',
    provinceHint: 'area Monza e Milano',
    layoutVariant: 'look-first',
    intro:
      'Sopralluogo **gratuito** a Vimodrone: valutiamo l’immobile sul posto e lo confrontiamo con le vendite reali tra Monza e l’hinterland milanese.',
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
      { href: 'https://www.atm.it/', label: 'ATM: linee metropolitane' },
    ],
    contextLinksLead: 'Per i collegamenti verso Milano:',
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
    pageTitle: 'Valutazione immobiliare a Brugherio',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo **gratuito** a Brugherio: stimiamo l’immobile di persona e lo confrontiamo con le vendite reali del comune, verso Monza e Milano Est.',
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
    pageTitle: 'Stima casa a Villasanta',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
    intro:
      'Sopralluogo **gratuito** a Villasanta: valutazione sul posto a nord di Monza, confrontata con le vendite reali del comune.',
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
    pageTitle: 'Valutazione a Muggiò, al confine con Monza',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'compare-monza',
    intro:
      'Sopralluogo **gratuito** a Muggiò: stimiamo l’immobile di persona, tenendo conto del confine con Monza e della domanda locale.',
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
    pageTitle: 'Valutazione immobiliare a Desio',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'look-first',
    intro:
      'Sopralluogo **gratuito** a Desio: uno dei comuni più ampi della Brianza nord, con valori che cambiano molto tra zone e tipologiche.',
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
    pageTitle: 'Quanto vale un immobile a Concorezzo?',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
    intro:
      'Sopralluogo **gratuito** a Concorezzo: valutazione sul posto in Brianza orientale, vicino a Vimercate e Agrate.',
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
    pageTitle: 'Valutazione a Cologno Monzese',
    provinceHint: 'area Monza e Milano',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo **gratuito** a Cologno Monzese: a sud di Monza verso Milano, dove zona e collegamenti (anche MM2) pesano sul valore.',
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
  {
    slug: 'seregno',
    name: 'Seregno',
    pageTitle: 'Quanto vale casa a Seregno?',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'compare-monza',
    intro:
      'Sopralluogo **gratuito** a Seregno: stima sul posto in un hub della Brianza Ovest, confrontata con vendite reali del comune (non con una media di Monza).',
    angleHeading: 'Seregno non è “Monza più a nord”: è un mercato a sé',
    angleBody:
      'Seregno è un polo urbano della Brianza Ovest, con stazione sulla Milano–Chiasso (S9/S11) e un tessuto misto tra centro, zone residenziali e un’identità ancora legata al distretto del mobile. Domanda e prezzi cambiano tra micro-zone: usare listini monzesi o una media comunale unica è l’errore più frequente. La stima parte dalla via e dal ruolo pendolare reale, non dal CAP “vicino a Monza”.',
    lookHeading: 'Cosa pesa di più in una stima a Seregno',
    lookItems: [
      'Distanza pratica dalla stazione e dai collegamenti verso Milano',
      'Micro-zona: centro consolidato vs fasce residenziali (es. San Rocco)',
      'Tipologia: appartamento in condominio vs casa/schiera',
      'Stato interno, box e spazi esterni utilizzabili',
      'Vendite chiuse a Seregno, non medie di Monza o della provincia',
    ],
    contextHeading: 'Nodo S9/S11 e distretto del mobile: due letture diverse',
    contextParagraphs: [
      'Chi vende a Seregno spesso confronta con Monza “perché siamo sulla stessa fascia”. In pratica il mercato reagisce al nodo ferroviario e alla micro-zona: un appartamento comodo verso la stazione non si valuta come una casa più quieta ma meno connessa, a parità di mq.',
      'Il legame storico col mobile/design di Brianza Ovest spiega anche un profilo di acquirenti diverso da un quartiere monzese. Indica indirizzo e tipologica nella richiesta: prepariamo il confronto sulle chiusure di Seregno.',
    ],
    contextLinks: [
      { href: 'https://www.comune.seregno.mb.it/', label: 'Comune di Seregno' },
      { href: 'https://www.trenord.it/', label: 'Trenord: linee e orari' },
    ],
    contextLinksLead: 'Comune e collegamenti ferroviari:',
    requestNote:
      'Nel modulo indica “Seregno” e, se puoi, la zona rispetto alla stazione: orienta subito il confronto giusto.',
    requestHeading: 'Richiedi il sopralluogo a Seregno',
    requestFollowUp:
      'Ti richiamiamo entro 1 o 2 giorni lavorativi. Gratuito e senza mandato. Percorso completo:',
    siblingsHeading: 'Altri comuni della Brianza Ovest',
    relatedTitle: 'Da Seregno verso hub e tipologiche',
  },
  {
    slug: 'cesano-maderno',
    name: 'Cesano Maderno',
    pageTitle: 'Valutazione a Cesano Maderno: snodo pendolari',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
    intro:
      'Sopralluogo **gratuito** a Cesano Maderno: qui distanza dallo snodo ferroviario e qualità dell’interscambio pesano quanto i metri quadri.',
    angleHeading: 'A Cesano Maderno il valore parla di pendolarismo, non di “media Monza”',
    angleBody:
      'Cesano Maderno è uno snodo forte verso Milano (S2, S4, S9 e linee verso Cadorna). Chi compra guarda spesso i tempi di viaggio e la comodità rispetto alla stazione più dell’aura del capoluogo. Una stima automatica “Cesano” appiattisce Binzago, Cassina Savina e le fasce più lontane dallo snodo: sul posto si riporta la micro-zona reale.',
    lookHeading: 'Elementi che spostano il valore a Cesano Maderno',
    lookItems: [
      'Distanza e comodità rispetto allo snodo ferroviario',
      'Quartiere (es. Binzago, Cassina Savina) e rumore di via',
      'Piano, ascensore e spese in condominio',
      'Box o posto auto (spesso decisivi per pendolari)',
      'Vendite recenti nella stessa fascia di Cesano Maderno',
    ],
    contextHeading: 'Snodo S2/S4/S9: Binzago e Cassina Savina non sono uguali',
    contextParagraphs: [
      'Il comune vive di interscambio: due immobili simili sulla carta possono divergere se uno è pratico verso la stazione e l’altro no. L’errore tipico è partire da una media comunale o da listini monzesi ignorando i tempi reali verso Milano.',
      'Segnala nella richiesta la zona (Binzago, Cassina Savina o altro) e se hai box: a Cesano questi dettagli orientano subito il confronto di mercato.',
    ],
    contextLinks: [
      { href: 'https://www.comune.cesano-maderno.mb.it/', label: 'Comune di Cesano Maderno' },
      { href: 'https://www.trenord.it/', label: 'Trenord' },
    ],
    contextLinksLead: 'Sito comunale e linee suburbane:',
    requestNote:
      'Indica “Cesano Maderno” e la zona rispetto alla stazione: prepariamo il sopralluogo sul pezzo giusto di mercato.',
    requestHeading: 'Fissa la stima sul posto a Cesano Maderno',
    requestFollowUp:
      'Richiamo in 1 o 2 giorni lavorativi, senza costi né mandato. Dettaglio del processo:',
    siblingsHeading: 'Comuni vicini sull’asse ferroviario',
    relatedTitle: 'Dopo Cesano Maderno',
    faqs: [
      {
        question: 'A Cesano Maderno quanto conta la distanza dalla stazione?',
        answer:
          'Molto. Lo snodo verso Milano è un driver di domanda: due immobili con mq simili possono chiudere diversamente se cambia la comodità verso i treni.',
      },
      {
        question: 'Posso usare una stima online come prezzo di listino?',
        answer:
          'Meglio di no. I calcolatori non vedono micro-zona, piano e box. Il sopralluogo è gratuito e senza mandato.',
      },
      {
        question: 'Valutate anche fuori dal centro, tipo Binzago?',
        answer:
          'Sì. Anzi: indicare la zona nella richiesta aiuta a confrontare vendite simili, non una media di tutto il comune.',
      },
    ],
  },
  {
    slug: 'limbiate',
    name: 'Limbiate',
    pageTitle: 'Casa a Limbiate: stima verso Milano',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo **gratuito** a Limbiate: cerniera tra MB e l’area milanese, dove contano bus verso Comasina (M3) e assi stradali più che un confronto diretto con Monza centro.',
    angleHeading: 'Limbiate guarda Milano (Comasina), non solo Monza',
    angleBody:
      'Limbiate non ha stazione ferroviaria in comune: la domanda pesa collegamenti bus verso M3 Comasina, la SS35 e le stazioni vicine (Varedo, Bovisio). Confrontare prezzi “da Monza” o da hub con FS propria spesso fuorvia. La stima deve restare su accessibilità reale e tessuto locale (anche artigianale lungo gli assi), non su una media brianzola generica.',
    lookHeading: 'Cosa osserviamo sul posto a Limbiate',
    lookItems: [
      'Comodità verso Comasina M3 e assi stradali (SS35)',
      'Contesto di via: residenziale vs scorrimento / artigianale',
      'Tipologia prevalente: appartamenti nei villaggi residenziali',
      'Stato condominiale, piano e spese',
      'Vendite chiuse a Limbiate, non listini di comuni con stazione',
    ],
    contextHeading: 'Senza FS in comune: accessibilità e aspettative sul tram',
    contextParagraphs: [
      'Chi vende a Limbiate a volte incorpora già “il futuro” della metrotranvia verso Milano. Per una stima seria contano i collegamenti di oggi (bus verso Comasina, assi stradali) e la via concreta, non solo i progetti.',
      'Tessuto e tipologiche tipiche dei villaggi residenziali non sono quelli di un centro con hub FS. Indica indirizzo e eventuali riferimenti (es. Villaggio dei Giovi): aiuta a non usare confronti sbagliati.',
    ],
    contextLinks: [
      { href: 'https://comune.limbiate.mb.it/', label: 'Comune di Limbiate' },
      { href: 'https://www.atm.it/', label: 'ATM: linee e M3' },
    ],
    contextLinksLead: 'Comune e rete verso Milano:',
    requestNote:
      'Nel modulo scrivi “Limbiate” e, se puoi, come ti muovi verso Milano: orienta la lettura di accessibilità.',
    requestHeading: 'Attiva la valutazione a Limbiate',
    requestFollowUp:
      'Compila a fianco: richiamo in 1 o 2 giorni, sopralluogo gratuito. Il processo:',
    siblingsHeading: 'Zone vicine tra MB e Milano nord',
    relatedTitle: 'Da Limbiate verso hub e guide',
  },
  {
    slug: 'vimercate',
    name: 'Vimercate',
    pageTitle: 'Valutazione a Vimercate: centro, Oreno, Torri',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'look-first',
    intro:
      'Sopralluogo **gratuito** a Vimercate: il valore cambia tra centro, Oreno e Torri Bianche. Stima sul posto, non media unica del comune.',
    angleHeading: 'Vimercate è un mercato a micro-aree',
    angleBody:
      'Senza stazione FS in città, Vimercate reagisce ad autostrada/tangenziale, bus NET verso Monza/Arcore/M2 e a un mix residenziale–direzionale (Torri Bianche) diverso dal tessuto monzese compatto. Centro storico, Oreno e polo Torri Bianche non chiudono allo stesso modo: una media “Vimercate” nasconde queste differenze.',
    lookHeading: 'Cosa fa la differenza a Vimercate',
    lookItems: [
      'Micro-area: centro, Oreno, Torri Bianche o altre frazioni',
      'Accessibilità auto (A51/A4) e bus verso FS o M2',
      'Mix tipologico: appartamenti vs case in frazione',
      'Contesto (residenziale quieto vs asse più traffico)',
      'Vendite nella stessa micro-area, non media comunale',
    ],
    contextHeading: 'Centro, Oreno e Torri Bianche: tre letture',
    contextParagraphs: [
      'Al centro e nelle frazioni residenziali (Oreno in primis) la domanda è spesso abitativa “classica”. Torri Bianche introduce un pezzo più direzionale/commerciale: confrontare annunci tra queste aree senza filtri è il modo più rapido per sbagliare prezzo.',
      'Non c’è ferrovia in comune: pesano auto e bus. Nella richiesta indica la zona (centro, Oreno, Torri Bianche…): è il dato che orienta subito il confronto giusto.',
    ],
    contextLinks: [
      { href: 'https://comune.vimercate.mb.it/', label: 'Comune di Vimercate' },
    ],
    contextLinksLead: 'Informazioni ufficiali sul territorio:',
    requestNote:
      'Segnala “Vimercate” e la micro-area (centro, Oreno, Torri Bianche…): evita confronti tra pezzi di mercato diversi.',
    requestHeading: 'Invia i dati per Vimercate',
    requestFollowUp:
      'Con la zona prepariamo già il confronto. Richiamo in 1 o 2 giorni; gratis e senza impegno. Vedi:',
    siblingsHeading: 'Brianza orientale e comuni vicini',
    relatedTitle: 'Dopo Vimercate',
  },
  {
    slug: 'giussano',
    name: 'Giussano',
    pageTitle: 'Quanto vale un immobile a Giussano?',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'angle-first',
    intro:
      'Sopralluogo **gratuito** a Giussano, nel distretto del mobile: stima sul posto tra frazioni e tessuto produttivo, non listino “da Monza”.',
    angleHeading: 'Giussano: distretto del mobile, frazioni e accessibilità Milano–Asso',
    angleBody:
      'Giussano vive il cuore produttivo del mobile brianzolo (insieme a Meda, Lissone e altri). Il mercato è più disperso su frazioni (Paina, Birone…) che “città centrale” come Seregno. Contano contesto residenziale vs produttivo, stazione Carugo-Giussano sulla Milano–Asso e la tipologica reale. Copiare prezzi monzesi o di hub S9/S11 spesso fuorvia.',
    lookHeading: 'Cosa valutiamo a Giussano',
    lookItems: [
      'Frazione e distanza da servizi / stazione Carugo-Giussano',
      'Contesto: residenziale quieto vs assi più produttivi',
      'Appartamento vs casa/schiera nelle frazioni',
      'Stato, box e spazi esterni',
      'Vendite simili a Giussano, non medie di Monza',
    ],
    contextHeading: 'Paina, Birone e il corridoio Milano–Asso',
    contextParagraphs: [
      'Rispetto a Seregno (nodo Chiasso), Giussano si legge di più sulla Milano–Asso e sul tessuto di frazioni. Due case con mq simili possono divergere se una è in un contesto residenziale raccolto e l’altra più esposta ad assi produttivi.',
      'L’identità distretto del mobile spiega domanda e tempi diversi da Monza città. Indica la frazione nella richiesta: a Giussano è spesso più utile del solo nome del comune.',
    ],
    contextLinks: [
      { href: 'https://www.comune.giussano.mb.it/', label: 'Comune di Giussano' },
      { href: 'https://www.trenord.it/', label: 'Trenord' },
    ],
    contextLinksLead: 'Comune e linea Milano–Asso:',
    requestNote:
      'Scrivi “Giussano” e la frazione (es. Paina, Birone) se la conosci: accelera il confronto locale.',
    requestHeading: 'Prenota il sopralluogo a Giussano',
    requestFollowUp:
      'Gratuito, senza mandato. Ti contattiamo in 1 o 2 giorni lavorativi. I passaggi:',
    siblingsHeading: 'Altri comuni del distretto del mobile',
    relatedTitle: 'Da Giussano verso Meda, Lissone e hub',
  },
  {
    slug: 'meda',
    name: 'Meda',
    pageTitle: 'Valutare casa a Meda (design e stazione)',
    provinceHint: 'Monza e Brianza',
    layoutVariant: 'faq-led',
    intro:
      'Sopralluogo **gratuito** a Meda: storico centro del design/arredo brianzolo con stazione propria. Stima sul posto, non premium “da Monza”.',
    angleHeading: 'Meda: design brianzolo + ferrovia, mercato diverso da Monza',
    angleBody:
      'Meda è uno dei simboli del mobile/design di Brianza e ha stazione sulla Milano–Asso (servizi verso Cadorna e S2 in rafforzamento sul tratto Seveso–Meda). Il valore si gioca su accessibilità ferroviaria, densità produttiva del settore e tipologiche soprattutto in condominio. Non è lo stesso prodotto di un quartiere monzese “premium”: la stima deve restare su chiusure di Meda.',
    lookHeading: 'Fattori tipici sul mercato di Meda',
    lookItems: [
      'Comodità rispetto alla stazione e all’asse Milano–Meda',
      'Contesto residenziale vs tessuto produttivo vicino',
      'Appartamenti (prevalenti) vs case dove presenti',
      'Stato, spese condominiali e box',
      'Vendite a Meda, non listini di Seregno o Monza',
    ],
    contextHeading: 'Capitale brianzola del mobile: stazione e densità produttiva',
    contextParagraphs: [
      'A Meda l’identità economica (arredo/design) e la stazione propria spiegano una domanda diversa da hub solo “residenziali dormitorio”. Confrontare con Monza centro o con Seregno (altro corridoio FS) senza filtri porta spesso a aspettative sbagliate.',
      'Segnala indirizzo e distanza percepita dalla stazione: a Meda è uno dei primi controlli che facciamo sul posto, insieme a stato e condominio.',
    ],
    contextLinks: [
      { href: 'https://www.comune.meda.mb.it/', label: 'Comune di Meda' },
      { href: 'https://www.trenord.it/', label: 'Trenord' },
    ],
    contextLinksLead: 'Comune e collegamenti ferroviari:',
    requestNote:
      'Indica “Meda” nel modulo: organizziamo un sopralluogo gratuito senza impegno sul mercato locale.',
    requestHeading: 'Richiedi la stima a Meda',
    requestFollowUp:
      'Nessun obbligo di mandato. Richiamo in 1 o 2 giorni lavorativi. Flusso completo:',
    siblingsHeading: 'Distretto del mobile e comuni vicini',
    relatedTitle: 'Da Meda verso Giussano, Lissone e tipologiche',
    faqs: [
      {
        question: 'Meda si valuta come Monza?',
        answer:
          'No. Identità produttiva (design/arredo) e stazione sulla Milano–Asso fanno un mercato a sé. Meglio confrontare chiusure di Meda.',
      },
      {
        question: 'Conta la distanza dalla stazione?',
        answer:
          'Sì, insieme a stato e condominio. È uno dei primi elementi che leggiamo in sopralluogo.',
      },
      {
        question: 'Il servizio include anche case indipendenti?',
        answer:
          'Sì, dove presenti. La tipologica cambia il confronto: non usiamo listini da appartamento per una casa.',
      },
    ],
  },
]

export function getLocality(slug: string) {
  return NEAR_MONZA_LOCALITIES.find((item) => item.slug === slug)
}

export function localityPath(slug: string) {
  return `/valutazione/${slug}`
}
