import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { propertyTypePath } from '@/lib/property-types'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare a Monza: stima sul posto',
  description:
    'Quanto vale casa a Monza? Sopralluogo gratuito e stima sul mercato reale del quartiere (Centro, San Fruttuoso, Cederna…). Senza impegno.',
  alternates: { canonical: 'https://valore-immobili.it/monza' },
}

export default function MonzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare a Monza"
      intro="Se stai pensando di vendere un immobile a Monza, una stima sul posto è più affidabile di una valutazione automatica online: tiene conto della zona reale e dello stato dell’immobile."
      sourcePage="/monza"
      defaultCity="Monza"
      breadcrumb="Monza"
      related={[
        {
          href: propertyTypePath('appartamenti-monza'),
          label: 'Valutazione appartamenti',
          description: 'Piano, spese e condominio a Monza.',
        },
        {
          href: propertyTypePath('ville-brianza'),
          label: 'Valutazione ville',
          description: 'Ville e case indipendenti in Brianza.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Se il tuo immobile è fuori Monza città.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'La guida pratica per partire con il piede giusto.',
        },
      ]}
    >
      <h2>Perché il valore a Monza dipende dalla zona</h2>
      <p>
        Monza non è un mercato unico. Il valore di una casa in <strong>Centro</strong> o vicino alla Villa
        Reale e al Parco è diverso da quello di zone residenziali come{' '}
        <strong>San Fruttuoso</strong>, <strong>San Giuseppe</strong>, <strong>San Rocco</strong>,{' '}
        <strong>Triante</strong>, <strong>Cederna</strong> o <strong>Sant’Albino</strong>. Cambiano la domanda,
        i servizi, i collegamenti e la tipologia di immobili prevalente. Per questo una stima seria parte dalla
        via e dal contesto, non da una media cittadina.
      </p>

      <h2>Cosa incide davvero sul prezzo</h2>
      <p>Durante il sopralluogo valutiamo gli elementi che spostano concretamente il valore:</p>
      <ul>
        <li>Zona e via, vicinanza a centro, stazione, scuole e servizi</li>
        <li>Piano, presenza di ascensore ed esposizione (luce e affaccio)</li>
        <li>Stato di manutenzione, lavori recenti e finiture</li>
        <li>Classe energetica (APE) e tipo di riscaldamento</li>
        <li>Spazi accessori: box, cantina, terrazzo o giardino</li>
        <li>Contesto condominiale e spese ordinarie</li>
      </ul>

      <h2>Appartamenti e ville</h2>
      <p>
        Se sai già la tipologia, parti dalla pagina dedicata:{' '}
        <Link href={propertyTypePath('appartamenti-monza')}>valutazione appartamenti a Monza</Link> oppure{' '}
        <Link href={propertyTypePath('ville-brianza')}>valutazione ville in Brianza</Link>. Il modulo è lo
        stesso: cambia il focus su cosa pesa davvero nella stima.
      </p>

      <h2>Come funziona la richiesta</h2>
      <p>
        Compili il modulo con i dati dell’immobile e i tuoi contatti. Ti richiamiamo entro 1 o 2 giorni
        lavorativi per concordare giorno e orario del sopralluogo gratuito. Al termine ricevi una valutazione
        motivata, senza alcun obbligo di affidarci la vendita. Se vuoi capire prima ogni passaggio, leggi{' '}
        <Link href="/come-funziona">come funziona la valutazione</Link>.
      </p>
    </SeoPageLayout>
  )
}
