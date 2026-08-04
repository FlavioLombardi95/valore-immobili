/* Hallmark · design-system: DESIGN.md · page: valutazione-online-o-sopralluogo */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: {
    absolute: 'Valutazione online o sopralluogo: cosa cambia | Valore Immobili',
  },
  description:
    'Stima automatica vs sopralluogo a Monza e Brianza. Perché OMI e calcolatori non bastano, quando serve la visita gratuita senza mandato.',
  alternates: { canonical: 'https://valore-immobili.it/valutazione-online-o-sopralluogo' },
}

export default function OnlineVsSopralluogoPage() {
  return (
    <SeoPageLayout
      title="Valutazione online o sopralluogo?"
      intro="I calcolatori e le quotazioni OMI danno un **orientamento**. A Monza e in Brianza il valore della tua casa lo capisci sul posto: via, stato reale e domanda locale. Il sopralluogo è gratuito e senza mandato."
      sourcePage="/valutazione-online-o-sopralluogo"
      breadcrumb="Online o sopralluogo"
      relatedTitle="Dove andare dopo"
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Hub città e quartieri.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Comuni e mercati locali.',
        },
        {
          href: propertyTypePath('appartamenti-monza'),
          label: 'Valutazione appartamenti',
          description: 'Se l’immobile è in condominio.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Schiere, bifamiliari e indipendenti.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Richiesta, visita e stima passo passo.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi e obblighi.',
        },
      ]}
    >
      <h2>Cosa fa una stima online</h2>
      <p>
        Portali e tool automatici partono da metrature, zone grandi e medie pubbliche. Servono a farsi
        un’idea di fascia, non a fissare un prezzo di vendita. Non vedono piano senza ascensore, lavori fatti
        male, un giardino inutilizzabile, un condominio costoso o una via di passaggio.
      </p>
      <p>
        Le quotazioni OMI sono ancora più grezze: intervalli ampi, aggiornamenti lenti, nessuna visita. Utili
        come contorno, pericolose se diventano “il numero” dell’annuncio.
      </p>

      <h2>Cosa aggiunge il sopralluogo</h2>
      <p>
        Sul posto si legge lo stato reale, l’esposizione, il contesto condominiale o del lotto, e si confronta
        con <strong>vendite chiuse</strong> nella stessa micro-zona, non solo con annunci ancora in vetrina. A
        Monza e in Brianza due immobili con gli stessi mq possono chiudere a livelli molto diversi: è proprio
        il pezzo che l’algoritmo appiattisce.
      </p>
      <ul>
        <li>Via e domanda locale (non “media Monza” o “media Brianza”)</li>
        <li>Stato, impianti, spazi esterni o box davvero utilizzabili</li>
        <li>Tipologica giusta: appartamento vs villa/schiera</li>
        <li>Nessun obbligo di mandato dopo la stima</li>
      </ul>

      <h2>Quando basta l’online (e quando no)</h2>
      <p>
        Se stai solo esplorando “che fascia è la zona?”, un calcolatore può bastare come prima lettura. Se stai
        per pubblicare, negoziare o decidere se vendere nei prossimi mesi, partire da una media online è il modo
        più frequente per restare invenduti o lasciare soldi sul tavolo.
      </p>
      <p>
        Percorso operativo:{' '}
        <Link href="/come-funziona">come funziona la valutazione</Link>. Dubbi su costi e documenti:{' '}
        <Link href="/faq">FAQ</Link>.
      </p>

      <h2>Dopo il calcolatore: i passi successivi</h2>
      <p>
        Se l’immobile è a Monza città, parti da <Link href="/monza">valutazione a Monza</Link>. Se è in
        provincia, dall’hub <Link href="/brianza">Brianza</Link> o dalla pagina del tuo comune. Per tipologica:{' '}
        <Link href={propertyTypePath('appartamenti-monza')}>appartamenti</Link> oppure{' '}
        <Link href={propertyTypePath('ville-brianza')}>ville in Brianza</Link>.
      </p>
      <p>
        Compila il modulo: ti richiamiamo entro 1 o 2 giorni lavorativi per fissare il sopralluogo{' '}
        <strong>gratuito</strong>, senza mandato.
      </p>
    </SeoPageLayout>
  )
}
