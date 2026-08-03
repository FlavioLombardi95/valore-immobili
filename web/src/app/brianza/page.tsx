/* Hallmark · design-system: DESIGN.md · page: brianza-hub */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BrianzaComuniMap } from '@/components/BrianzaComuniMap'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { NEAR_MONZA_LOCALITIES, localityPath } from '@/lib/localities'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare in Brianza: comuni e zone',
  description:
    'Valutazione immobiliare in Brianza con sopralluogo gratuito. Stima locale per Lissone, Brugherio, Desio e altri comuni: non medie provinciali. Senza impegno.',
  alternates: { canonical: 'https://valore-immobili.it/brianza' },
}

export default function BrianzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare in Brianza"
      intro="Ogni comune della Brianza ha un mercato a sé. Valutiamo l’immobile **di persona** e lo confrontiamo con vendite reali nella sua zona, non con medie provinciali."
      sourcePage="/brianza"
      breadcrumb="Brianza"
      relatedTitle="Approfondimenti utili"
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Se l’immobile è nel comune di Monza.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville',
          description: 'Ville e case indipendenti in Brianza.',
        },
        {
          href: propertyTypePath('appartamenti-monza'),
          label: 'Valutazione appartamenti',
          description: 'Focus condominio a Monza e dintorni.',
        },
        {
          href: '/comprare-casa-brianza',
          label: 'Comprare casa in Brianza',
          description: 'Quando ha senso ampliare il raggio da Monza.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Percorso vendita e prezzo di partenza.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Dalla richiesta alla stima sul posto.',
        },
      ]}
    >
      <h2>Un mercato diverso in ogni comune</h2>
      <p>
        La provincia di Monza e Brianza mette insieme centri storici, quartieri residenziali, ville con
        giardino e case indipendenti. Il valore cambia tra un comune e l’altro, e spesso anche tra zone dello
        stesso comune: per questo la stima parte dal contesto specifico e dalla via, non da una media
        provinciale.
      </p>
      <p>
        La mappa sotto aiuta a collocare i comuni su cui lavoriamo più di frequente. Se l’immobile è a Monza
        città, la pagina dedicata è <Link href="/monza">valutazione a Monza</Link>.
      </p>

      <BrianzaComuniMap />

      <h2>Comuni vicini a Monza</h2>
      <p>
        Abbiamo pagine dedicate per i comuni a ridosso di Monza. Apri quella della tua zona per una
        valutazione locale:
      </p>
      <ul>
        {NEAR_MONZA_LOCALITIES.map((item) => (
          <li key={item.slug}>
            <Link href={localityPath(item.slug)}>Valutazione immobiliare a {item.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Per tipologia</h2>
      <p>
        Oltre al comune, puoi partire dalla tipologica:{' '}
        <Link href={propertyTypePath('appartamenti-monza')}>appartamenti a Monza</Link> oppure{' '}
        <Link href={propertyTypePath('ville-brianza')}>ville in Brianza</Link>. Il modulo è lo stesso: cambia
        cosa si osserva di più in sopralluogo (condominio e spese, oppure esterni, lotto e privacy).
      </p>
      <p>
        Sul lato annunci e ricerca, le guide{' '}
        <Link href="/appartamenti-in-vendita-monza">appartamenti in vendita a Monza</Link> e{' '}
        <Link href="/ville-in-vendita-brianza">ville in vendita in Brianza</Link> aiutano a leggere l’offerta
        senza confondere tipologiche diverse.
      </p>

      <h2>Cosa consideriamo durante il sopralluogo</h2>
      <ul>
        <li>Comune, quartiere e distanza da servizi, scuole e stazioni</li>
        <li>Tipologia dell’immobile: appartamento, villa a schiera o casa indipendente</li>
        <li>Stato di manutenzione, finiture e lavori recenti</li>
        <li>Esposizione, spazi esterni (giardino, terrazzo) e box o posto auto</li>
        <li>Classe energetica e impianti</li>
        <li>Collegamenti verso Monza e Milano</li>
      </ul>
      <p>
        Questi elementi, più il confronto con vendite recenti di zona, sono ciò che le stime automatiche non
        vedono. Per questo il sopralluogo resta il pezzo centrale del percorso.
      </p>

      <h2>Per chi vende e per chi compra</h2>
      <p>
        Il servizio di valutazione è pensato soprattutto se stai valutando la vendita nei prossimi mesi e
        vuoi una stima concreta prima di decidere prezzo, tempistiche e strategia. Il sopralluogo è{' '}
        <strong>gratuito e senza impegno</strong>.
      </p>
      <p>
        Se invece stai cercando casa in provincia, parti da{' '}
        <Link href="/comprare-casa-brianza">comprare casa in Brianza</Link> o da{' '}
        <Link href="/comprare-casa-monza">comprare casa a Monza</Link>: puoi anche richiedere una consulenza
        gratuita sull’acquisto, senza impegno di acquisto. Dettagli su costi e tempi nelle{' '}
        <Link href="/faq">domande frequenti</Link> e in{' '}
        <Link href="/come-funziona">come funziona</Link>.
      </p>
    </SeoPageLayout>
  )
}
