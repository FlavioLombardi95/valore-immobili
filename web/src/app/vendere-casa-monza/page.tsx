/* Hallmark · design-system: DESIGN.md · page: vendere-casa-monza */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Vendere casa a Monza: guida pratica',
  description:
    'Vendere casa a Monza: da dove iniziare, quali documenti servono, come fissare un prezzo realistico e perché partire da una valutazione sul posto gratuita.',
  alternates: { canonical: 'https://valore-immobili.it/vendere-casa-monza' },
}

export default function VendereCasaMonzaPage() {
  return (
    <SeoPageLayout
      title="Vendere casa a Monza: da dove iniziare"
      intro="Prima di fissare un prezzo o scegliere una strategia, serve una valutazione reale basata sul mercato locale. Ecco i passaggi che contano davvero."
      sourcePage="/vendere-casa-monza"
      defaultCity="Monza"
      breadcrumb="Vendere casa a Monza"
      showForm={false}
      related={[
        {
          href: '/comprare-casa-monza',
          label: 'Comprare casa a Monza',
          description: 'Come leggere il mercato se stai acquistando.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Come cambia il valore tra i quartieri.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso dalla richiesta alla stima.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi e dubbi più comuni.',
        },
      ]}
    >
      <h2>Parti dal valore reale, non da una stima online</h2>
      <p>
        Molti proprietari iniziano da stime automatiche o da pareri generici e rischiano di partire con un
        prezzo troppo alto o troppo basso. Per vendere casa a Monza con serenità conviene capire il{' '}
        <strong>valore reale</strong> dell’immobile considerando zona, stato, metratura, esposizione e domanda
        attuale. È il punto di partenza per tutto il resto.
      </p>

      <h2>Perché il prezzo giusto conta</h2>
      <p>
        Un prezzo troppo alto allunga i tempi e porta trattative al ribasso; uno troppo basso lascia valore sul
        tavolo. Una valutazione sul posto aiuta a posizionare l’immobile in modo credibile rispetto a quello
        che, nella tua zona, si sta davvero vendendo.
      </p>

      <h2>Documenti utili per la vendita</h2>
      <p>Nel corso del percorso di vendita, in genere servono:</p>
      <ul>
        <li>Visura e planimetria catastale aggiornate</li>
        <li>Atto di provenienza (rogito) dell’immobile</li>
        <li>Attestato di prestazione energetica (APE)</li>
        <li>Per gli appartamenti: regolamento e ultime spese condominiali</li>
        <li>Documentazione di eventuali lavori o ristrutturazioni</li>
      </ul>

      <h2>Cosa succede dopo la richiesta</h2>
      <p>
        Dopo il modulo ti contattiamo per organizzare un <strong>sopralluogo gratuito</strong>. Non c’è obbligo
        di affidare l’incarico: l’obiettivo è darti un punto di partenza concreto per decidere. Vuoi vedere il
        percorso completo? Leggi <Link href="/come-funziona">come funziona la valutazione</Link>.
      </p>
    </SeoPageLayout>
  )
}
