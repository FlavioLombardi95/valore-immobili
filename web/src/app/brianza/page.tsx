/* Hallmark · design-system: DESIGN.md · page: brianza-hub */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BrianzaComuniMap } from '@/components/BrianzaComuniMap'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { NEAR_MONZA_LOCALITIES, localityPath } from '@/lib/localities'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: {
    absolute: 'Valutazione immobiliare in Brianza: comuni | Valore Immobili',
  },
  description:
    'Hub comuni Brianza: Lissone, Brugherio, Desio e altri. Sopralluogo gratuito sul mercato locale, senza mandato. Per le ville usa la pagina tipologica dedicata.',
  alternates: { canonical: 'https://valore-immobili.it/brianza' },
}

export default function BrianzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare in Brianza"
      intro="Questa pagina è l’hub dei **comuni** della Brianza. Ogni zona ha un mercato a sé: valutiamo l’immobile **di persona** e lo confrontiamo con vendite reali lì, non con medie provinciali."
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
          href: localityPath('lissone'),
          label: 'Valutazione a Lissone',
          description: 'Esempio di stima sul comune, non sulla provincia.',
        },
        {
          href: localityPath('brugherio'),
          label: 'Valutazione a Brugherio',
          description: 'Mercato locale a ridosso di Monza.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Pagina dedicata a ville, schiere e indipendenti.',
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
      ]}
    >
      <h2>Comuni, non medie provinciali</h2>
      <p>
        La provincia di Monza e Brianza mette insieme centri, quartieri residenziali e case indipendenti. Il
        valore cambia tra un comune e l’altro, e spesso anche tra zone dello stesso comune. Per questo la stima
        parte dal contesto specifico e dalla via, non da una media provinciale.
      </p>
      <p>
        La mappa sotto colloca i comuni su cui lavoriamo più di frequente. Se l’immobile è a Monza città, la
        pagina dedicata è <Link href="/monza">valutazione a Monza</Link>.
      </p>

      <BrianzaComuniMap />

      <h2>Comuni vicini a Monza</h2>
      <p>
        Apri la pagina del tuo comune per una valutazione locale con sopralluogo gratuito, senza mandato:
      </p>
      <ul>
        {NEAR_MONZA_LOCALITIES.map((item) => (
          <li key={item.slug}>
            <Link href={localityPath(item.slug)}>Valutazione immobiliare a {item.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Dopo una stima online in Brianza</h2>
      <p>
        Calcolatori e quotazioni OMI danno un orientamento, non il valore della tua casa. Qui contano comune,
        via, stato reale e domanda locale: elementi che si vedono in sopralluogo. La visita è{' '}
        <strong>gratuita</strong> e <strong>senza mandato</strong>. Altri dubbi nelle{' '}
        <Link href="/faq">FAQ</Link>.
      </p>

      <h2>Ville o appartamenti? Usa la tipologica</h2>
      <p>
        Se cerchi una stima su <strong>ville, schiere o case indipendenti</strong>, non restare su questo hub:
        vai alla pagina dedicata{' '}
        <Link href={propertyTypePath('ville-brianza')}>valutazione ville in Brianza</Link>. Per unità in
        condominio: <Link href={propertyTypePath('appartamenti-monza')}>valutazione appartamenti a Monza</Link>
        . Il modulo è lo stesso; cambia cosa si osserva di più in sopralluogo.
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
        <li>Tipologia dell’immobile e stato di manutenzione</li>
        <li>Esposizione, spazi esterni e box o posto auto</li>
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
