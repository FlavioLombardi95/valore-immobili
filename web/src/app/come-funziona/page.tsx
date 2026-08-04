/* Hallmark · design-system: DESIGN.md · page: come-funziona */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: 'Come funziona la valutazione immobiliare',
  description:
    'Come funziona la valutazione immobiliare gratuita con sopralluogo a Monza e Brianza: richiesta, contatto, visita sul posto e stima motivata. Tempi, documenti e cosa succede dopo.',
  alternates: { canonical: 'https://valore-immobili.it/come-funziona' },
}

export default function ComeFunzionaPage() {
  return (
    <SeoPageLayout
      title="Come funziona la valutazione sul posto"
      intro="Un percorso chiaro e **senza impegno**: richiesta online, richiamo entro pochi giorni, sopralluogo gratuito e una stima basata sul mercato reale della tua zona a Monza o in Brianza."
      sourcePage="/come-funziona"
      breadcrumb="Come funziona"
      showForm={false}
      relatedTitle="Dove andare dopo"
      related={[
        {
          href: '/valutazione-online-o-sopralluogo',
          label: 'Online o sopralluogo',
          description: 'Cosa cambia rispetto a un calcolatore.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi, documenti e obblighi.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Contesto cittadino e quartieri.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Il servizio nei comuni della provincia.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Prezzo, tempi e da dove partire.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Se confronti con indipendenti.',
        },
      ]}
    >
      <h2>Cosa aspettarti (in breve)</h2>
      <p>
        Non ricevi un numero istantaneo da portale. Ricevi un percorso umano: prima i dati dell’immobile,
        poi una chiamata per fissare la visita, poi il sopralluogo e una stima motivata sul mercato locale.
        L’obiettivo è darti un punto di partenza concreto prima di pubblicare un annuncio, fissare un prezzo
        o decidere se e come vendere.
      </p>
      <p>
        La valutazione con sopralluogo è <strong>gratuita</strong>. Non c’è obbligo di affidare la vendita
        dopo la stima.
      </p>

      <h2>I quattro passaggi</h2>
      <ol>
        <li>
          <strong>Richiesta online.</strong> Compili il modulo con i dati principali dell’immobile (zona,
          tipologia, contatti) e indichi da dove arriva la richiesta. Bastano pochi minuti.
        </li>
        <li>
          <strong>Contatto telefonico.</strong> Ti richiamiamo entro <strong>1 o 2 giorni lavorativi</strong>{' '}
          per capire il contesto e organizzare giorno e orario del sopralluogo.
        </li>
        <li>
          <strong>Sopralluogo sul posto.</strong> Un consulente visita l’immobile: stato reale, esposizione,
          piano, contesto condominiale, spazi accessori e tutto ciò che un algoritmo non vede.
        </li>
        <li>
          <strong>Stima motivata.</strong> Ricevi una valutazione collegata al mercato reale della zona,
          utile come riferimento. Poi decidi tu, senza pressione.
        </li>
      </ol>

      <h2>Perché il sopralluogo fa la differenza</h2>
      <p>
        Le stime automatiche partono da medie e metrature. Non vedono luminosità, lavori fatti, vista,
        rumore, qualità del condominio o lo stato reale degli interni. A Monza e in Brianza due appartamenti
        con gli stessi metri quadri possono valere in modo molto diverso a seconda della via e della
        manutenzione.
      </p>
      <p>
        Per questo la stima nasce da un <strong>sopralluogo reale</strong> e dal confronto con vendite e
        domande locali, non da un unico numero generico di città.
      </p>

      <h2>Cosa può essere utile avere a portata di mano</h2>
      <p>Non è obbligatorio portare documenti al primo contatto. Se li hai, velocizzano la stima:</p>
      <ul>
        <li>Planimetria e visura catastale dell’immobile</li>
        <li>Attestato di prestazione energetica (APE), se disponibile</li>
        <li>Informazioni su lavori di ristrutturazione recenti</li>
        <li>Ultime spese condominiali e regolamento, per gli appartamenti</li>
      </ul>
      <p>
        Se manca qualcosa, si può comunque procedere: si integra in seguito quando serve.
      </p>

      <h2>Dove operiamo</h2>
      <p>
        Lavoriamo su <Link href="/monza">Monza</Link> e sui comuni della{' '}
        <Link href="/brianza">provincia di Monza e Brianza</Link>, con lo stesso approccio: visita sul posto
        e lettura del mercato di quella micro-zona. Per orientarti tra le zone cittadine puoi anche partire
        dai <Link href="/quartieri-monza">quartieri di Monza</Link>.
      </p>

      <h2>Quanto costa e cosa succede dopo</h2>
      <p>
        La valutazione con sopralluogo è gratuita e non comporta alcun obbligo di mandato. Se dopo la stima
        vuoi procedere con la vendita, ne parliamo con calma. Se preferisci fermarti al parere, va bene
        lo stesso.
      </p>
      <p>
        Dubbi su costi, tempi o documenti: le risposte rapide sono nelle{' '}
        <Link href="/faq">domande frequenti</Link>. Per il percorso commerciale, la guida{' '}
        <Link href="/vendere-casa-monza">vendere casa a Monza</Link> aiuta a mettere in ordine prezzo e
        tempistiche.
      </p>

      <h2>Se invece stai cercando casa</h2>
      <p>
        Questa pagina descrive il percorso di valutazione per chi vende o vuole capire il valore del proprio
        immobile. Se stai comprando a Monza o in Brianza, puoi partire dalla guida{' '}
        <Link href="/comprare-casa-monza">comprare casa a Monza</Link> oppure richiedere una{' '}
        <Link href="/?from=come-funziona&intent=acquisto#richiesta">consulenza gratuita sull’acquisto</Link>,
        senza impegno.
      </p>
    </SeoPageLayout>
  )
}
