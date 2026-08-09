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
    'Hub dei comuni in Brianza: Seregno, Cesano Maderno, Limbiate, Vimercate, Lissone, Desio e altri. Sopralluogo gratuito sul mercato del tuo comune. Tipologiche (ville, appartamenti): pagine dedicate.',
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
          href: localityPath('brugherio'),
          label: 'Valutazione a Brugherio',
          description: 'Verso Monza e Milano Est — mercato locale.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Se l’immobile è nel comune di Monza.',
        },
        {
          href: localityPath('seregno'),
          label: 'Valutazione a Seregno',
          description: 'Hub Brianza Ovest e nodo S9/S11.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Pagina dedicata (non questo hub).',
        },
        {
          href: '/valutazione-online-o-sopralluogo',
          label: 'Online o sopralluogo',
          description: 'Dopo un calcolatore: cosa cambia.',
        },
        {
          href: propertyTypePath('appartamenti-monza'),
          label: 'Valutazione appartamenti',
          description: 'Focus condominio a Monza e dintorni.',
        },
      ]}
    >
      <h2>Comuni, non medie provinciali</h2>
      <p>
        Questa pagina serve a scegliere il <strong>comune</strong>. La provincia di Monza e Brianza mette
        insieme centri e zone residenziali diverse: il valore cambia tra un comune e l’altro, e spesso anche
        tra zone dello stesso comune. La stima parte dal contesto specifico e dalla via, non da una media
        provinciale.
      </p>
      <p>
        La mappa sotto colloca i comuni su cui lavoriamo più di frequente. Se l’immobile è a Monza città, la
        pagina dedicata è <Link href="/monza">valutazione gratuita a Monza</Link>. Tra i comuni limitrofi, un
        esempio tipico è <Link href={localityPath('brugherio')}>valutazione a Brugherio</Link>.
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

      <h2>Per tipologica specifica (non questo hub)</h2>
      <p>
        Qui resti sui comuni. Per una stima dedicata alle case indipendenti usa{' '}
        <Link href={propertyTypePath('ville-brianza')}>valutazione ville in Brianza</Link>. Per unità in
        condominio: <Link href={propertyTypePath('appartamenti-monza')}>valutazione appartamenti a Monza</Link>
        . Il modulo è lo stesso; cambia il focus in sopralluogo.
      </p>

      <h2>Cosa consideriamo durante il sopralluogo</h2>
      <ul>
        <li>Comune, quartiere e distanza da servizi, scuole e stazioni</li>
        <li>Stato di manutenzione e contesto della via</li>
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
