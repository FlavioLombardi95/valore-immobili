import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Come funziona la valutazione immobiliare',
  description:
    'Come funziona la valutazione immobiliare gratuita con sopralluogo a Monza e Brianza: richiesta, contatto, sopralluogo, stima. Tempi, documenti utili e cosa aspettarsi.',
  alternates: { canonical: 'https://valore-immobili.it/come-funziona' },
}

export default function ComeFunzionaPage() {
  return (
    <SeoPageLayout
      title="Come funziona la valutazione sul posto"
      intro="Un percorso semplice e senza impegno: richiesta online, contatto telefonico, sopralluogo gratuito e una stima basata sul mercato reale della tua zona."
      sourcePage="/come-funziona"
      breadcrumb="Come funziona"
      showForm={false}
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Come cambia il valore tra i quartieri.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Il servizio nei comuni della provincia.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'La guida per partire nel modo giusto.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi e dubbi più comuni.',
        },
      ]}
    >
      <h2>I quattro passaggi</h2>
      <ol>
        <li>Compili il modulo con i dati principali dell’immobile e i tuoi contatti.</li>
        <li>Ti richiamiamo entro 1 o 2 giorni lavorativi per organizzare giorno e orario del sopralluogo.</li>
        <li>Un consulente visita l’immobile e raccoglie le informazioni utili alla stima.</li>
        <li>Ricevi una valutazione motivata sul mercato reale della zona, senza impegno.</li>
      </ol>

      <h2>Perché il sopralluogo fa la differenza</h2>
      <p>
        Non usiamo stime automatiche come unico riferimento. Il sopralluogo serve a capire cosa rende unico il
        tuo immobile: stato reale, luminosità, esposizione, piano, contesto condominiale e spazi accessori.
        Sono proprio questi elementi a spostare il valore, e un algoritmo non può vederli.
      </p>

      <h2>Cosa può essere utile avere a portata di mano</h2>
      <p>Non è obbligatorio, ma se li hai velocizzano la stima:</p>
      <ul>
        <li>Planimetria e visura catastale dell’immobile</li>
        <li>Attestato di prestazione energetica (APE), se disponibile</li>
        <li>Informazioni su lavori di ristrutturazione recenti</li>
        <li>Ultime spese condominiali e regolamento, per gli appartamenti</li>
      </ul>

      <h2>Quanto costa e cosa succede dopo</h2>
      <p>
        La valutazione con sopralluogo è <strong>gratuita</strong> e non comporta alcun obbligo di affidare la
        vendita. L’obiettivo è darti un punto di partenza concreto. Se dopo la stima vuoi procedere, ne
        parliamo con calma. Trovi altri dettagli nelle <Link href="/faq">domande frequenti</Link>.
      </p>
    </SeoPageLayout>
  )
}
