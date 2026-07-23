/* Hallmark · design-system: DESIGN.md · page: brianza-hub */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { NEAR_MONZA_LOCALITIES, localityPath } from '@/lib/localities'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare in Brianza: comuni e zone',
  description:
    'Sopralluogo gratuito nei comuni di Monza e Brianza. Stima locale per Lissone, Brugherio, Desio e altri: non medie provinciali. Senza impegno.',
  alternates: { canonical: 'https://valore-immobili.it/brianza' },
}

export default function BrianzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare in Brianza"
      intro="Ogni comune della Brianza ha un mercato a sé. Valutiamo l’immobile di persona e lo confrontiamo con vendite reali nella sua zona, non con medie provinciali."
      sourcePage="/brianza"
      breadcrumb="Brianza"
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Se il tuo immobile è nel comune di Monza.',
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
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso dalla richiesta alla stima.',
        },
      ]}
    >
      <h2>Un mercato diverso in ogni comune</h2>
      <p>
        La provincia di Monza e Brianza mette insieme centri storici, quartieri residenziali, ville con
        giardino e case indipendenti. Il valore di un immobile cambia tra un comune e l’altro: per
        questo la stima parte dal contesto specifico e dalla via, non da una media provinciale.
      </p>

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
        <Link href={propertyTypePath('ville-brianza')}>ville in Brianza</Link>.
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

      <h2>Per chi è pensato il servizio</h2>
      <p>
        È utile se stai valutando la vendita nei prossimi mesi e vuoi una stima concreta prima di decidere
        prezzo, tempistiche e strategia. Il sopralluogo è gratuito e senza impegno. Se il tuo immobile è nel
        comune di Monza, guarda la pagina dedicata alla{' '}
        <Link href="/monza">valutazione a Monza</Link>.
      </p>
    </SeoPageLayout>
  )
}
