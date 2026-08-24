import type { GuidePage } from './guides'

/**
 * Guide vendita / valore (non tipologiche). CTA verso /monza.
 * Tipi da guides.ts; niente import runtime da guides (evita cicli).
 */
const EXT = {
  notariato: {
    href: 'https://www.notariato.it/',
    label: 'Consiglio Nazionale del Notariato',
  },
  agenziaEntrate: {
    href: 'https://www.agenziaentrate.gov.it/portale/',
    label: 'Agenzia delle Entrate',
  },
  apeInfo: {
    href: 'https://www.efficienzaenergetica.enea.it/servizi-per/cittadini/attestato-di-prestazione-energetica-ape.html',
    label: 'APE: attestato di prestazione energetica (ENEA)',
  },
} as const

export const SELLER_GUIDE_PAGES: GuidePage[] = [
  {
    slug: 'costo-vendere-casa-monza',
    shortLabel: 'Costo vendere casa',
    ctaVariant: 'valuation',
    metaTitle: 'Quanto costa vendere casa a Monza: voci e trappole',
    metaDescription:
      'Quanto costa vendere casa a Monza: mediazione, notaio, eventuali lavori e tempi. Cosa calcolare prima di pubblicare, senza confondere con le spese di chi compra.',
    title: 'Quanto costa vendere casa a Monza (davvero)',
    intro:
      'Prima di fissare il prezzo o firmare un incarico, serve capire **cosa paghi tu** quando vendi. Non le spese dell’acquirente: le tue. Qui trovi le voci tipiche a Monza e in Brianza, dove le persone sbagliano i conti, e perché partire da una stima sul posto evita sorprese a metà vendita.',
    breadcrumb: 'Costo vendere casa a Monza',
    relatedTitle: 'Prima di pubblicare',
    sections: [
      {
        heading: 'Il problema: confondere “costo vendita” e “spese di chi compra”',
        paragraphs: [
          'Quando chiedi in giro “quanto costa vendere”, spesso ti rispondono con elenchi pensati per l’acquirente: imposte, mutuo, notaio lato compratore. Utile se stai anche cercando casa. Fuorviante se stai vendendo.',
          'Dal lato venditore il conto è un altro. Contano mediazione (se c’è), eventuali lavori minimi per rendere l’immobile presentabile, documenti e tempi. Conta soprattutto quanto **perdi** se parti da un prezzo sbagliato: giorni di annuncio fermi, ribassi successivi, stress.',
          'A Monza e in Brianza il mercato non è uniforme. Un bilocale in Centro e uno in periferia non hanno gli stessi tempi di visita, anche con metrature simili. Il “costo” reale include quanto tempo resti esposto con un listino fuori zona.',
        ],
        internalLinksLead: 'Per non mischiare i due lati:',
        internalLinks: [
          { href: '/spese-acquisto-casa', label: 'spese di acquisto casa' },
          { href: '/vendere-casa-monza', label: 'vendere casa a Monza' },
        ],
      },
      {
        heading: 'Cosa rischi se sottostimi (o ignori) i costi',
        paragraphs: [
          'Il caso tipico: pubblichi subito, prendi appuntamenti, poi scopri che per chiudere servono aggiornamenti catastali, APE, o piccoli interventi che non avevi messo in budget. La trattativa si allunga. L’acquirente serio se ne va.',
          'L’altro caso: non calcoli la mediazione e tratti il prezzo “netto” come se fosse lordo. Arrivi al rogito con un numero diverso da quello che ti eri immaginato. Non è una truffa: è un conto fatto male all’inizio.',
          'C’è anche il costo nascosto del prezzo troppo alto. Su Monza, se resti mesi online senza visite serie, finisci per ribassare in modo disordinato. Il mercato legge i ribassi. Spesso chi arriva dopo offre ancora meno.',
        ],
      },
      {
        heading: 'Le voci che di solito paghi tu (venditore)',
        paragraphs: [
          'Non esiste un listino unico “per Monza”. Dipende da se vendi con agenzia, da solo, o con un percorso misto. Queste però sono le voci che tornano più spesso.',
        ],
        bullets: [
          '**Mediazione / provvigione** (se c’è un intermediario): percentuale sul prezzo di vendita, spesso negoziabile e da chiarire per iscritto prima',
          '**Documenti e aggiornamenti**: planimetria/visura se non allineate, eventuali pratiche catastali, APE se manca o è scaduto',
          '**Lavori minimi di presentazione**: riparazioni, imbiancatura, sgombero; non una ristrutturazione completa',
          '**Tempo e opportunità**: mesi di annuncio, eventuale doppia casa se stai anche comprando',
          '**Consulenze** (notaio, tecnico, fiscale) se la situazione è particolare: successione, comproprietà, vincoli',
        ],
        internalLinksLead: 'Approfondimenti collegati:',
        internalLinks: [
          { href: '/documenti-acquisto-casa', label: 'documenti (anche utili in vendita)' },
          { href: '/ristrutturare-prima-di-vendere', label: 'ristrutturare prima di vendere' },
          { href: '/classe-energetica-valore-casa', label: 'classe energetica e valore' },
        ],
      },
      {
        heading: 'Cosa di solito non è “il tuo” costo (ma lo confondi lo stesso)',
        paragraphs: [
          'Imposte di registro, IVA dove applicabile, mutuo e perizia banca sono tipicamente sul lato acquirente. Se le metti nel tuo foglio Excel “costo vendita”, gonfi il numero e ti spaventi senza motivo, oppure al contrario pensi di dover “scontare” cose che non paghi tu.',
          'Il notaio del rogito ha voci a carico di chi compra e, in alcuni casi, adempimenti che coinvolgono anche il venditore. La ripartizione va chiesta caso per caso, non inventata da un articolo generico.',
        ],
        externalLinksLead: 'Fonti generali sul percorso di compravendita:',
        externalLinks: [EXT.notariato, EXT.agenziaEntrate],
      },
      {
        heading: 'Monza e Brianza: perché il prezzo di partenza pesa più della “percentuale”',
        paragraphs: [
          'Su un mercato locale, due punti di mediazione in più o in meno contano. Conta di più partire da un prezzo coerente con via, piano, stato e domanda reale. Un listino troppo alto allunga i tempi; uno troppo basso chiude prima ma lascia soldi sul tavolo.',
          'In Centro, vicino alla Villa Reale o su assi ben serviti, la domanda può reggere meglio certi tagli. In zone più residenziali o nei comuni di Brianza, i tempi e il profilo degli acquirenti cambiano. Copiare il prezzo dell’annuncio “due scale più in là” è uno degli errori più costosi.',
          'Se confronti Monza città e un comune limitrofo, non usare lo stesso €/mq come scorciatoia. Conta tipologica (appartamento vs indipendente), box, spese e quanto l’immobile è pronto.',
        ],
        internalLinksLead: 'Contesto di zona:',
        internalLinks: [
          { href: '/quartieri-monza', label: 'quartieri di Monza' },
          { href: '/monza', label: 'valutazione gratuita a Monza' },
          { href: '/brianza', label: 'hub Brianza' },
        ],
      },
      {
        heading: 'Un modo pratico di fare i conti (prima di pubblicare)',
        paragraphs: [
          'Parti dal prezzo che pensi di chiedere. Sottrai mediazione (se prevista) e una stima realistica di documenti/lavori minimi. Quello che resta è il tuo ordine di grandezza “netto”, non una promessa notarile.',
          'Poi chiediti se quel netto regge i tuoi piani: ricompera, mutuo residuo, tempi. Se stai anche comprando, allinea i due percorsi. Un netto ottimistico sulla vendita e un budget stretto sull’acquisto è la ricetta per bloccarti a metà.',
          'Solo dopo ha senso pubblicare o affidare. Prima serve un ancoraggio sul valore reale dell’immobile, non sul “sentimento” o su un calcolatore online.',
          'Se il conto non torna, non “sperare nel mercato”. Abbassa le aspettative di listino, riduci i costi evitabili, o allunga i tempi in modo consapevole. Le tre leve vanno scelte, non negate.',
        ],
        bullets: [
          'Prezzo di listino ipotetico',
          'Meno costi chiari (mediazione, documenti, lavori minimi)',
          'Meno margine di trattativa che sei disposto ad accettare',
          'Confronto con i tempi che puoi reggere',
        ],
        internalLinksLead: 'Per chiudere il cerchio:',
        internalLinks: [
          { href: '/come-funziona', label: 'come funziona il sopralluogo' },
          { href: '/valutazione-online-o-sopralluogo', label: 'online o sopralluogo' },
        ],
      },
      {
        heading: 'Esempi di errori tipici (senza nomi e senza magie)',
        paragraphs: [
          'Pubblicare “un po’ alto per trattare” e poi scoprire che a Monza, su quel taglio e in quella via, le visite serie non arrivano. Dopo due mesi ribassi di colpo: il mercato legge la freccia verso il basso.',
          'Oppure vendere in Brianza usando come riferimento un appartamento monzese “simile di mq”. Tipologica e comune diversi: il confronto non tiene, e il netto che ti eri immaginato non esisteva.',
          'O ancora: dimenticare APE e planimetria non allineata, e scoprirlo quando c’è già un’offerta. I giorni persi costano quanto una piccola pratica fatta per tempo.',
          'Un altro classico: firmare un incarico senza aver chiarito per iscritto percentuale, esclusiva e chi paga cosa se la vendita non si chiude. Il “costo” non è solo la percentuale sul prezzo: è anche la rigidità del contratto se i tempi si allungano.',
        ],
      },
      {
        heading: 'Se stai vendendo per comprare (o il contrario)',
        paragraphs: [
          'Qui il costo della vendita si intreccia al budget di acquisto. Un netto troppo ottimistico sulla casa che vendi ti fa offrire troppo su quella che compri. Poi resti appeso a due trattative.',
          'Allinea date, mutuo residuo e margine di sicurezza. Se serve, tieni un piano B: vendere prima, o comprare con clausole coerenti. Non è pessimismo: è evitare di dover accettare la prima offerta bassa “perché ho già firmato dall’altra parte”.',
        ],
        internalLinksLead: 'Acquisto in parallelo:',
        internalLinks: [
          { href: '/comprare-casa-monza', label: 'comprare casa a Monza' },
          { href: '/tempi-acquisto-casa', label: 'tempi di acquisto' },
        ],
      },
      {
        heading: 'Dove entra la valutazione (e dove no)',
        paragraphs: [
          'Una valutazione con sopralluogo non ti stampa il “netto esatto” dopo note e percentuali. Ti dà un punto di partenza sul mercato locale: quanto è plausibile chiedere, cosa pesa di più sul tuo immobile, dove il listino rischia di essere fuori.',
          'Da lì puoi ragionare su costi e strategia con più lucidità. Senza obbligo di mandato. Se vuoi solo il numero e decidere da solo, va bene lo stesso.',
          'Questa guida non sostituisce notaio o commercialista su casi particolari (successioni, plusvalenze, vincoli). Serve a non partire a caso sul pezzo che controlliamo ogni giorno: prezzo e zona a Monza e in Brianza.',
        ],
        internalLinksLead: 'Prossimi passi:',
        internalLinks: [
          { href: '/monza', label: 'richiedi la valutazione gratuita a Monza' },
          { href: '/faq', label: 'FAQ su costi e tempi' },
        ],
      },
    ],
    related: [
      {
        href: '/vendere-casa-monza',
        label: 'Vendere casa a Monza',
        description: 'Hub vendita: prezzo, documenti, percorso.',
      },
      {
        href: '/monza',
        label: 'Valutazione gratuita a Monza',
        description: 'Sopralluogo senza mandato.',
      },
      {
        href: '/ristrutturare-prima-di-vendere',
        label: 'Ristrutturare prima di vendere',
        description: 'Quando i lavori hanno senso (e quando no).',
      },
      {
        href: '/classe-energetica-valore-casa',
        label: 'Classe energetica e valore',
        description: 'APE e cosa sposta davvero il prezzo.',
      },
      {
        href: '/spese-acquisto-casa',
        label: 'Spese di acquisto',
        description: 'Il lato opposto: costi di chi compra.',
      },
      {
        href: '/come-funziona',
        label: 'Come funziona',
        description: 'Dalla richiesta al sopralluogo.',
      },
    ],
  },
  {
    slug: 'classe-energetica-valore-casa',
    shortLabel: 'Classe energetica',
    ctaVariant: 'valuation',
    metaTitle: 'Classe energetica e valore casa: APE a Monza e Brianza',
    metaDescription:
      'Classe energetica e valore dell’immobile a Monza e Brianza: cosa dice l’APE, cosa guardano gli acquirenti e perché non basta una lettera per fissare il prezzo.',
    title: 'Classe energetica e valore della casa: cosa conta davvero',
    intro:
      'L’**APE** (attestato di prestazione energetica) è obbligatorio in compravendita, ma non è un listino. A Monza e in Brianza la classe energetica sposta domande e trattative in modo diverso a seconda di tipologica, stato e zona. Questa guida spiega cosa leggere, cosa non gonfiare e quando serve vederla insieme al resto dell’immobile.',
    breadcrumb: 'Classe energetica e valore',
    relatedTitle: 'Valore e documenti',
    sections: [
      {
        heading: 'Il problema: trattare la lettera APE come un prezzo',
        paragraphs: [
          'Molti proprietari pensano: “Se passo da G a D, il valore sale di X”. Gli acquirenti, soprattutto con mutuo, guardano i consumi e le spese, ma non comprano una lettera. Comprano via, piano, stato, box, condominio.',
          'Succede anche il contrario: un immobile in classe buona ma con impianti vecchi, muffa o contesto debole non “vince” solo per l’APE. Il certificato è un pezzo del puzzle. Non è il puzzle.',
          'A Monza, su stock di appartamenti degli anni Sessanta e Ottanta, le classi basse sono frequenti. In Brianza, su ville e schiere, pesano involucro, caldaia, serramenti e quanto l’immobile è stato aggiornato. Confrontare due APE senza vedere l’immobile è come confrontare due annunci solo dal titolo.',
        ],
        internalLinksLead: 'Contesto tipologico:',
        internalLinks: [
          { href: '/valutazione/appartamenti-monza', label: 'valutazione appartamenti a Monza' },
          { href: '/valutazione/ville-brianza', label: 'valutazione ville in Brianza' },
        ],
      },
      {
        heading: 'Cosa rischi se lo usi male',
        paragraphs: [
          'Se alzi il prezzo solo perché “adesso siamo in classe migliore”, senza che il mercato locale regga quel listino, resti fermo. Se nascondi o sottovaluti un APE scadente, in trattativa esce dopo e diventa leva di sconto.',
          'Se investi in lavori energetici pesanti aspettandoti un ritorno euro-per-euro sul prezzo di vendita, spesso resti deluso. Alcuni interventi migliorano la vendibilità e i tempi. Rari sono quelli che ripagano interamente in chiusura, soprattutto se la zona non premia quel tipo di prodotto.',
        ],
      },
      {
        heading: 'Cosa guarda davvero chi compra (oltre la lettera)',
        paragraphs: [
          'L’acquirente medio a Monza e Brianza mescola tre cose: bollette e comfort, eventuali obblighi o incentivi legati all’efficienza, e lo stato complessivo. Una classe migliore aiuta il racconto dell’annuncio. Non cancella un piano alto senza ascensore o un condominio con spese alte.',
          'Chi compra con mutuo sente parlare di efficienza anche dal lato banca e perizia, ma il vincolo forte resta la sostenibilità della rata e il valore di mercato. Non inventare numeri “da perito” senza aver visto l’immobile.',
        ],
        bullets: [
          'Consumi stimati e tipo di impianto (non solo la classe)',
          'Serramenti, isolamento, stato di caldaia o pompa di calore',
          'Comfort percepito: freddo, umidità, rumore',
          'Costo di eventuali lavori ancora da fare',
          'Coerenza tra APE, annuncio e sopralluogo',
        ],
      },
      {
        heading: 'APE: a cosa serve (in pratica)',
        paragraphs: [
          'Serve in compravendita e locazione secondo le regole vigenti. Va redatto da un certificatore abilitato. Se manca o è scaduto, bloccati prima di pubblicare “come se niente fosse”: in trattativa diventa un problema tuo.',
          'Non usarlo come unica prova del valore. Usalo come informazione strutturata su involucro e impianti, da leggere insieme a planimetria, spese e stato reale.',
        ],
        externalLinksLead: 'Riferimenti istituzionali:',
        externalLinks: [EXT.apeInfo, EXT.agenziaEntrate, EXT.notariato],
        internalLinksLead: 'Documenti nel percorso:',
        internalLinks: [
          { href: '/documenti-acquisto-casa', label: 'documenti per comprare (e vendere)' },
          { href: '/costo-vendere-casa-monza', label: 'costo di vendere casa a Monza' },
        ],
      },
      {
        heading: 'Quando un intervento energetico ha senso prima di vendere',
        paragraphs: [
          'Ha più senso se sblocca visite o riduce obiezioni evidenti: serramenti che non chiudono, caldaia a fine vita, dispersioni tali da far scappare chi legge le bollette. Ha meno senso se è un cantiere lungo su un immobile che il mercato locale già prezza “da ristrutturare”.',
          'Su una villa in Brianza, un pacchetto mirato (involucro + impianto) può cambiare il profilo degli acquirenti. Su un appartamento in condominio a Monza, i vincoli condominiali e i costi comuni limitano ciò che puoi fare da solo.',
          'Prima di spendere, confronta costo dell’intervento, tempi di cantiere e prezzo di vendita plausibile in zona. Se non tieni questi tre numeri sullo stesso foglio, stai scommettendo.',
        ],
        internalLinksLead: 'Lavori e vendita:',
        internalLinks: [
          { href: '/ristrutturare-prima-di-vendere', label: 'ristrutturare prima di vendere' },
          { href: '/vendere-casa-monza', label: 'vendere casa a Monza' },
        ],
      },
      {
        heading: 'Monza vs Brianza: stesso certificato, mercati diversi',
        paragraphs: [
          'A Monza città la domanda su certi tagli è più liquida: l’APE conta, ma compete con zona, piano e box. In Brianza, specialmente su indipendenti, comfort e costi di gestione pesano di più nel racconto di vendita.',
          'Non copiare argomentazioni da annunci di Milano o da guide nazionali. Resta sul tuo comune e sulla tipologica giusta.',
        ],
        internalLinksLead: 'Mercato locale:',
        internalLinks: [
          { href: '/quartieri-monza', label: 'quartieri di Monza' },
          { href: '/brianza', label: 'comuni in Brianza' },
          { href: '/appartamenti-in-vendita-monza', label: 'appartamenti in vendita a Monza' },
        ],
      },
      {
        heading: 'Come usiamo l’APE in sopralluogo',
        paragraphs: [
          'In visita guardiamo lo stato reale: impianti, serramenti, umidità, interventi già fatti. L’APE, se c’è, aiuta a inquadrare. Se manca, lo segnaliamo come pezzo da mettere a posto prima o durante la vendita.',
          'Non vendiamo “magie di classe”. Vendiamo chiarezza sul punto di partenza. La valutazione gratuita a Monza resta sul mercato locale, non su una tabella nazionale di incremento per lettera.',
          'Se stai confrontando due immobili in shortlist (tuo da vendere e uno da comprare, o due alternative), chiedi APE e stato insieme. Una lettera migliore non vince da sola su una zona più debole o su spese condominiali fuori controllo.',
        ],
        internalLinksLead: 'Prossimi passi:',
        internalLinks: [
          { href: '/monza', label: 'valutazione gratuita a Monza' },
          { href: '/valutazione-online-o-sopralluogo', label: 'online o sopralluogo' },
          { href: '/faq', label: 'FAQ' },
        ],
      },
      {
        heading: 'Cosa non promettere in annuncio',
        paragraphs: [
          'Evita claim tipo “classe alta = valore garantito” o “dopo i lavori vale X in più”. Gli acquirenti a Monza e Brianza sono abituati a verificare in visita. Se il testo dell’annuncio e la realtà divergono, perdi fiducia e margine.',
          'Meglio descrivere impianti, interventi fatti e documenti disponibili. La classe è un dato. Il comfort e lo stato si vedono.',
          'Se hai fatto lavori energetici, elenca cosa è stato sostituito e quando, non solo la nuova lettera. Un acquirente serio chiederà fatture o dettagli in visita: meglio anticiparli con trasparenza.',
        ],
      },
      {
        heading: 'APE scaduto, assente o “non lo trovo”',
        paragraphs: [
          'Non pubblicare fingendo che non serva. Se l’attestato manca, mettilo in agenda subito: tempi di sopralluogo del certificatore, costo, e allineamento con gli altri documenti.',
          'Se è vecchio rispetto alle regole o allo stato attuale (hai cambiato caldaia o serramenti), verifica se va rifatto. Un APE non aggiornato in trattativa diventa un appiglio per rinvii o sconti.',
          'In una vendita ordinata a Monza, APE e coerenza catastale stanno nello stesso cassetto mentale dei documenti “che fanno chiudere”. Non sono burocratici: sono fiducia.',
        ],
        internalLinksLead: 'Pratiche collegate:',
        internalLinks: [
          { href: '/documenti-acquisto-casa', label: 'documenti' },
          { href: '/costo-vendere-casa-monza', label: 'costo vendere casa' },
        ],
      },
    ],
    related: [
      {
        href: '/monza',
        label: 'Valutazione gratuita a Monza',
        description: 'Sopralluogo senza mandato.',
      },
      {
        href: '/ristrutturare-prima-di-vendere',
        label: 'Ristrutturare prima di vendere',
        description: 'Lavori sì/no prima del listino.',
      },
      {
        href: '/costo-vendere-casa-monza',
        label: 'Costo vendere casa',
        description: 'Voci di spesa lato venditore.',
      },
      {
        href: '/vendere-casa-monza',
        label: 'Vendere casa a Monza',
        description: 'Hub vendita.',
      },
      {
        href: '/documenti-acquisto-casa',
        label: 'Documenti',
        description: 'Carta utile in compravendita.',
      },
      {
        href: '/valutazione/appartamenti-monza',
        label: 'Appartamenti a Monza',
        description: 'Focus condominio e piano.',
      },
    ],
  },
  {
    slug: 'ristrutturare-prima-di-vendere',
    shortLabel: 'Ristrutturare o vendere',
    ctaVariant: 'valuation',
    metaTitle: 'Ristrutturare prima di vendere: sì o no a Monza',
    metaDescription:
      'Ristrutturare prima di vendere a Monza e Brianza: quando i lavori aiutano il prezzo e quando solo allungano tempi e costi. Criteri pratici, non slogan.',
    title: 'Ristrutturare prima di vendere: quando ha senso (e quando no)',
    intro:
      'La domanda torna sempre: **sistemo tutto e poi vendo**, o vendo “così com’è”? A Monza e in Brianza la risposta dipende da tipologica, zona, budget e tempi. Non da una regola da social. Questa guida serve a decidere con numeri e rischi concreti, prima di aprire un cantiere.',
    breadcrumb: 'Ristrutturare prima di vendere',
    relatedTitle: 'Vendita e valore',
    sections: [
      {
        heading: 'Il problema: due estremi sbagliati',
        paragraphs: [
          'Un estremo: ristrutturare “da rivista” sperando di scaricare ogni euro sul prezzo. L’altro: non toccare nulla, neanche le cose che fanno scappare le visite (impianto a rischio, umidità evidente, bagno inutilizzabile).',
          'Entrambi bruciano soldi o tempo. Il cantiere pieno ti espone a ritardi, imprevisti e a un gusto che forse non è quello dell’acquirente. L’immobile trascurato ti espone a offerte basse o a visite che non si chiudono.',
          'Serve una via di mezzo: lavori che sbloccano la vendita o riducono obiezioni evidenti, non un restyling completo “perché così vale di più”.',
        ],
        internalLinksLead: 'Contesto vendita:',
        internalLinks: [
          { href: '/vendere-casa-monza', label: 'vendere casa a Monza' },
          { href: '/costo-vendere-casa-monza', label: 'costo di vendere casa' },
        ],
      },
      {
        heading: 'Cosa rischi se sbagli strada',
        paragraphs: [
          'Se ristrutturi troppo, immobilizzi capitale e mesi. Intanto il mercato della tua zona può muoversi. Se poi il gusto scelto (pavimenti, cucina, colori) non convince, hai speso per te, non per il compratore.',
          'Se non fai nulla su problemi gravi, l’annuncio raccoglie curiosi e pochi seri. In trattativa ogni difetto diventa sconto. A volte lo sconto complessivo supera ciò che avresti speso per un intervento mirato.',
          'C’è anche il rischio “mezzo cantiere”: lavori lasciati a metà, permessi in sospeso, finiture incomplete. Peggio del non aver iniziato.',
        ],
      },
      {
        heading: 'Quando i lavori minimi di solito aiutano',
        paragraphs: [
          'Aiutano quando rimuovono ostacoli evidenti alla visita o alla fiducia: perdite, muffa visibile, impianti pericolosi, porte che non chiudono, elettrico da rifare in punti critici, bagno o cucina fuori uso.',
          'Aiutano anche la presentazione: sgombero, pulizia profonda, piccole riparazioni, imbiancatura neutra. Non è glam. È ciò che fa sembrare l’immobile abitabile e curato nelle foto e in sopralluogo.',
          'Su appartamenti a Monza, spesso conta più un impianto affidabile e un condominio leggibile che una cucina nuova di design. Su ville in Brianza, tetto, umidità e esterni utilizzabili pesano più di un arredo di tendenza.',
        ],
        bullets: [
          'Sicurezza e salubrità (umidità, impianti a rischio)',
          'Funzionalità base (bagno, cucina, riscaldamento)',
          'Presentazione (sgombero, pittura, piccole finiture)',
          'Documenti e conformità se emergono criticità evidenti',
        ],
        internalLinksLead: 'Energia e documenti:',
        internalLinks: [
          { href: '/classe-energetica-valore-casa', label: 'classe energetica e valore' },
          { href: '/documenti-acquisto-casa', label: 'documenti' },
        ],
      },
      {
        heading: 'Quando conviene vendere “da ristrutturare”',
        paragraphs: [
          'Conviene quando il mercato locale ha domanda per immobili da personalizzare, e il costo di un cantiere pieno non rientrerebbe nel prezzo di chiusura. Conviene anche se non hai tempo, liquidità o stomaco per gestire imprese e imprevisti.',
          'In quel caso il prezzo deve essere coerente con lo stato. Non puoi chiedere “come ristrutturato” e consegnare un cantiere. La trasparenza nelle foto e in visita riduce le trattative al ribasso dell’ultimo minuto.',
          'Chi compra da ristrutturare a Monza e Brianza spesso ha già un budget lavori in testa. Se il tuo listino ignora quel budget, non chiudi.',
        ],
      },
      {
        heading: 'Come decidere: tre numeri sullo stesso foglio',
        paragraphs: [
          'Stima il costo dei lavori (con un margine per imprevisti). Stima il prezzo di vendita plausibile **dopo** i lavori, in quella via e tipologica. Stima il prezzo plausibile **senza** lavori. La differenza, meno costo e meno mesi di ritardo, ti dice se il cantiere ha senso.',
          'Se non sai i due prezzi di mercato, stai decidendo al buio. Un calcolatore online non sostituisce una lettura locale. Un preventivo dell’impresa da solo non basta: ti dice quanto spendi, non quanto recuperi.',
        ],
        bullets: [
          'Costo lavori + imprevisti',
          'Prezzo di vendita atteso post-lavori',
          'Prezzo di vendita atteso as-is',
          'Mesi di cantiere e costi di tenere ferma la vendita',
        ],
        internalLinksLead: 'Ancoraggio sul valore:',
        internalLinks: [
          { href: '/monza', label: 'valutazione gratuita a Monza' },
          { href: '/valutazione-online-o-sopralluogo', label: 'online o sopralluogo' },
          { href: '/come-funziona', label: 'come funziona' },
        ],
      },
      {
        heading: 'Appartamento a Monza vs villa in Brianza',
        paragraphs: [
          'In condominio a Monza i lavori sulle parti private hanno limiti e i lavori sulle parti comuni richiedono delibere. Un bagno rifatto può aiutare. Una ristrutturazione globale in un contesto con spese alte e piano scomodo può non ripagarsi.',
          'Su una casa indipendente in Brianza, tetto, impianti e involucro possono cambiare il profilo di chi visita. Sono anche i pezzi più cari e più lunghi. Meglio interventi mirati legati a obiezioni reali, non un “pacchetto chiavi in mano” se poi vendi a chi vuole comunque rifare a modo suo.',
        ],
        internalLinksLead: 'Tipologiche:',
        internalLinks: [
          { href: '/valutazione/appartamenti-monza', label: 'appartamenti Monza' },
          { href: '/valutazione/ville-brianza', label: 'ville Brianza' },
          { href: '/casa-nuova-o-usata', label: 'nuova o usata' },
        ],
      },
      {
        heading: 'Una regola pratica prima di chiamare l’impresa',
        paragraphs: [
          'Se il lavoro serve a far entrare gente in casa e a togliere paure ovvie, valutalo. Se serve a “fare il prezzo che vorrei io”, fermati e verifica prima il mercato.',
          'La valutazione con sopralluogo serve proprio a questo: capire se lo stato attuale regge un certo listino, o se pochi interventi mirati cambiano la partita. Senza obbligo di ristrutturare e senza obbligo di mandato.',
          'Se dopo il sopralluogo emergono solo interventi cosmetici, puoi anche vendere as-is e lasciare il gusto all’acquirente. Non è una sconfitta: è spesso la scelta più economica.',
        ],
        internalLinksLead: 'Continua:',
        internalLinks: [
          { href: '/monza', label: 'pagina valutazione gratuita a Monza' },
          { href: '/faq', label: 'FAQ' },
          { href: '/vendere-casa-monza', label: 'hub vendere casa' },
        ],
      },
      {
        heading: 'Checklist rapida prima di firmare un preventivo',
        paragraphs: [
          'Chiediti se l’intervento toglie un “no” in visita. Se sì, quantifica costo e settimane. Se no, è probabilmente gusto personale mascherato da investimento.',
          'Verifica permessi, vincoli condominiali e chi paga cosa. Un preventivo incompleto oggi diventa un contenzioso o un ritardo domani.',
          'Allinea foto e testo dell’annuncio allo stato reale dopo i lavori (o alla decisione di non farli). La coerenza vende più del rendering.',
          'Se stai anche comprando, non aprire un cantiere lungo sulla casa in vendita senza un piano sui tempi dell’acquisto. Due percorsi disallineati ti costringono a scelte di fretta.',
        ],
      },
      {
        heading: 'Cosa possiamo dirti noi (e cosa no)',
        paragraphs: [
          'Possiamo aiutarti a capire se lo stato attuale regge un certo listino a Monza o in Brianza, e se pochi interventi mirati cambierebbero le visite. Non facciamo preventivi edili al posto dell’impresa e non promettiamo “ritorno garantito” sui lavori.',
          'Se dopo il sopralluogo emerge che il mercato locale compra volentieri “da ristrutturare” al prezzo giusto, te lo diciamo. A volte è la notizia migliore: risparmi mesi e capitale.',
        ],
        internalLinksLead: 'Ancoraggio:',
        internalLinks: [
          { href: '/monza', label: 'valutazione gratuita a Monza' },
          { href: '/come-funziona', label: 'come funziona' },
        ],
      },
    ],
    related: [
      {
        href: '/vendere-casa-monza',
        label: 'Vendere casa a Monza',
        description: 'Prezzo, documenti, percorso.',
      },
      {
        href: '/monza',
        label: 'Valutazione gratuita a Monza',
        description: 'Ancoraggio sul valore reale.',
      },
      {
        href: '/classe-energetica-valore-casa',
        label: 'Classe energetica e valore',
        description: 'APE e interventi energetici.',
      },
      {
        href: '/costo-vendere-casa-monza',
        label: 'Costo vendere casa',
        description: 'Voci di spesa lato venditore.',
      },
      {
        href: '/valutazione/appartamenti-monza',
        label: 'Appartamenti a Monza',
        description: 'Focus condominio.',
      },
      {
        href: '/valutazione/ville-brianza',
        label: 'Ville in Brianza',
        description: 'Indipendenti e schiere.',
      },
    ],
  },
]
