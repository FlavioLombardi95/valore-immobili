import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Comprare casa a Monza: guida pratica',
  description:
    'Comprare casa a Monza e in Brianza: come leggere il mercato locale, capire i valori reali di zona e partire da un confronto concreto prima di decidere.',
  alternates: { canonical: 'https://valore-immobili.it/comprare-casa-monza' },
}

export default function ComprareCasaMonzaPage() {
  return (
    <SeoPageLayout
      title="Comprare casa a Monza: cosa sapere prima"
      intro="Prima di fare un’offerta serve capire i valori reali della zona. Ecco come orientarsi a Monza e nei comuni vicini, senza basarsi solo su annunci o medie generiche."
      sourcePage="/comprare-casa-monza"
      defaultCity="Monza"
      breadcrumb="Comprare casa a Monza"
      showForm={false}
      related={[
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'La guida per chi valuta la vendita.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Come cambia il valore tra i quartieri.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Comuni vicini e mercati locali.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi e modalità del servizio.',
        },
      ]}
    >
      <h2>Il prezzo dell’annuncio non è il valore di mercato</h2>
      <p>
        A Monza e in Brianza due appartamenti simili possono avere richieste molto diverse a seconda di via,
        piano, stato e domanda reale. Per chi compra, partire solo dagli annunci online rischia di far
        sembrare “di mercato” prezzi che in zona non si chiudono.
      </p>

      <h2>Cosa confrontare prima di un’offerta</h2>
      <ul>
        <li>Zona e micro-contesto (servizi, rumore, collegamenti)</li>
        <li>Stato dell’immobile e lavori da fare nei prossimi anni</li>
        <li>Spese condominiali, box, giardino o terrazzo</li>
        <li>Classe energetica e impianti</li>
        <li>Tempi medi di trattativa nella stessa zona</li>
      </ul>

      <h2>Perché i valori locali contano</h2>
      <p>
        Capire quanto vale davvero un immobile nella tua zona di interesse aiuta a fare offerte più
        credibili e a evitare di pagare un premio senza motivo. Il nostro servizio principale è la{' '}
        <strong>valutazione con sopralluogo</strong> per proprietari; se stai comprando, le stesse logiche
        di mercato locale ti aiutano a leggere meglio Monza e i comuni vicini.
      </p>

      <h2>Monza e comuni limitrofi</h2>
      <p>
        Se stai cercando fuori dal solo comune di Monza, confronta anche i mercati di{' '}
        <Link href="/valutazione/lissone">Lissone</Link>,{' '}
        <Link href="/valutazione/brugherio">Brugherio</Link>,{' '}
        <Link href="/valutazione/villasanta">Villasanta</Link> e degli altri comuni a ridosso della città.
        Ogni zona ha una domanda diversa.
      </p>

      <h2>Se stai anche valutando di vendere</h2>
      <p>
        Molte persone comprano dopo aver venduto. In quel caso conviene partire da una stima concreta del
        tuo immobile: guarda la guida per <Link href="/vendere-casa-monza">vendere casa a Monza</Link> oppure
        richiedi direttamente una <Link href="/#richiesta">valutazione gratuita</Link>.
      </p>
    </SeoPageLayout>
  )
}
