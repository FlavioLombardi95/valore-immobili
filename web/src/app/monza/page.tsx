/* Hallmark · design-system: DESIGN.md · page: monza-hub */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: {
    absolute: 'Valutazione gratuita immobile Monza: sopralluogo | Valore Immobili',
  },
  description:
    'Valutazione gratuita dell’immobile a Monza con sopralluogo, senza mandato. Stima sul quartiere reale (Centro, San Fruttuoso, Cederna…), non su un algoritmo. Richiedi in pochi minuti.',
  alternates: { canonical: 'https://valore-immobili.it/monza' },
}

export default function MonzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione gratuita dell’immobile a Monza"
      intro="**Valutazione gratuita** a Monza con sopralluogo, senza mandato: stima sul quartiere reale, non su una media cittadina o un algoritmo."
      sourcePage="/monza"
      defaultCity="Monza"
      breadcrumb="Monza"
      relatedTitle="Approfondimenti utili"
      related={[
        {
          href: propertyTypePath('appartamenti-monza'),
          label: 'Valutazione appartamenti a Monza',
          description: 'Pagina dedicata: piano, spese e condominio.',
        },
        {
          href: '/quartieri-monza',
          label: 'Quartieri di Monza',
          description: 'Orientarsi tra le zone prima della stima.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville in Brianza',
          description: 'Se confronti con indipendenti fuori città.',
        },
        {
          href: '/brianza',
          label: 'Comuni in Brianza',
          description: 'Hub comuni fuori Monza città.',
        },
        {
          href: '/valutazione-online-o-sopralluogo',
          label: 'Online o sopralluogo',
          description: 'Dopo un calcolatore: cosa cambia.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Prezzo, documenti e da dove partire.',
        },
      ]}
    >
      <h2>Valutazione gratuita a Monza: sul posto, non online</h2>
      <p>
        Se cerchi una <strong>valutazione gratuita dell’immobile a Monza</strong>, questa è la pagina
        giusta. Non ricevi un numero da algoritmo: il percorso è gratuito e senza mandato — sopralluogo,
        lettura di via e quartiere, confronto con vendite reali. Differenza rispetto ai calcolatori:{' '}
        <Link href="/valutazione-online-o-sopralluogo">valutazione online o sopralluogo</Link>.
      </p>

      <h2>Perché il valore a Monza dipende dalla zona</h2>
      <p>
        Monza non è un mercato unico. Il valore di una casa in <strong>Centro</strong> o vicino alla Villa
        Reale e al Parco è diverso da quello di zone residenziali come{' '}
        <strong>San Fruttuoso</strong>, <strong>San Giuseppe</strong>, <strong>San Rocco</strong>,{' '}
        <strong>Triante</strong>, <strong>Cederna</strong> o <strong>Sant’Albino</strong>. Cambiano domanda,
        servizi, collegamenti e tipologiche prevalenti.
      </p>
      <p>
        Una stima seria parte dalla via e dal contesto, non da una media cittadina. Per collocare i nomi che
        trovi negli annunci, usa la guida ai <Link href="/quartieri-monza">quartieri di Monza</Link>.
      </p>

      <h2>Cosa incide davvero sul prezzo</h2>
      <p>
        Durante il sopralluogo guardiamo gli elementi che spostano concretamente il valore in trattativa, non
        solo i metri quadri:
      </p>
      <ul>
        <li>Zona e via, vicinanza a centro, stazione, scuole e servizi</li>
        <li>Piano, presenza di ascensore ed esposizione (luce e affaccio)</li>
        <li>Stato di manutenzione, lavori recenti e finiture</li>
        <li>Classe energetica (APE) e tipo di riscaldamento</li>
        <li>Spazi accessori: box, cantina, terrazzo o giardino</li>
        <li>Contesto condominiale e spese ordinarie</li>
      </ul>
      <p>
        Due appartamenti “simili” sulla carta possono chiudere a livelli diversi se cambiano anche solo piano,
        box o qualità del condominio. Per questo non usiamo una stima automatica come unico riferimento.
      </p>

      <h2>Dopo una stima online a Monza</h2>
      <p>
        I calcolatori danno un orientamento, non il valore della tua casa. A Monza contano via, piano, stato e
        domanda di quartiere: elementi che si vedono in sopralluogo. La visita è <strong>gratuita</strong> e{' '}
        <strong>senza mandato</strong>. Altri dubbi nelle <Link href="/faq">FAQ</Link>.
      </p>

      <h2>Appartamenti: pagina dedicata</h2>
      <p>
        Se stai valutando un’unità in condominio, non restare solo su questo hub: vai a{' '}
        <Link href={propertyTypePath('appartamenti-monza')}>valutazione appartamenti a Monza</Link>. Per ville
        e case indipendenti in provincia:{' '}
        <Link href={propertyTypePath('ville-brianza')}>valutazione ville in Brianza</Link>. Il modulo è lo
        stesso; cambia il focus in sopralluogo.
      </p>

      <h2>Come funziona la richiesta</h2>
      <p>
        Compili il modulo con i dati dell’immobile e i tuoi contatti. Ti richiamiamo entro{' '}
        <strong>1 o 2 giorni lavorativi</strong> per concordare giorno e orario del sopralluogo gratuito. Al
        termine ricevi una valutazione motivata, senza alcun obbligo di affidarci la vendita.
      </p>
      <p>
        Dettaglio del percorso: <Link href="/come-funziona">come funziona la valutazione</Link>. Dubbi su
        costi e documenti: <Link href="/faq">domande frequenti</Link>.
      </p>

      <h2>Vendere o cercare casa a Monza</h2>
      <p>
        Se stai valutando la vendita, la guida <Link href="/vendere-casa-monza">vendere casa a Monza</Link>{' '}
        aiuta a mettere in ordine prezzo, tempi e documenti. Se invece stai cercando casa (anche dopo una
        vendita), parti da <Link href="/comprare-casa-monza">comprare casa a Monza</Link> o, se allarghi il
        raggio, da <Link href="/brianza">valutazione e mercato in Brianza</Link>.
      </p>
    </SeoPageLayout>
  )
}
