/* Hallmark · design-system: DESIGN.md · page: comprare-casa-monza */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import { EXTERNAL } from '@/lib/guides'

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
      relatedTitle="Guide per chi compra"
      related={[
        {
          href: '/annunci-casa-monza',
          label: 'Annunci casa a Monza',
          description: 'Come leggere i portali senza farsi fuorviare.',
        },
        {
          href: '/quartieri-monza',
          label: 'Quartieri di Monza',
          description: 'Dove cercare e cosa cambia tra le zone.',
        },
        {
          href: '/spese-acquisto-casa',
          label: 'Spese di acquisto',
          description: 'Imposte, notaio e costi oltre il prezzo.',
        },
        {
          href: '/offerta-acquisto-casa',
          label: 'Offerta di acquisto',
          description: 'Come impostare una proposta credibile.',
        },
        {
          href: '/comprare-casa-brianza',
          label: 'Comprare in Brianza',
          description: 'Quando conviene ampliare il raggio ai comuni vicini.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Se stai vendendo per poi comprare.',
        },
      ]}
    >
      <h2>Il prezzo dell’annuncio non è il valore di mercato</h2>
      <p>
        A Monza e in Brianza due appartamenti simili possono avere richieste molto diverse a seconda di via,
        piano, stato e domanda reale. Per chi compra, partire solo dagli annunci online rischia di far
        sembrare “di mercato” prezzi che in zona non si chiudono.
      </p>

      <h2>Se cerchi casa, consulta anche i portali</h2>
      <p>
        Per capire cosa c’è in vendita oggi, attraversa più vetrine e confronta richieste nella stessa zona —
        non un solo annuncio isolato. Puoi partire da{' '}
        <a href={EXTERNAL.immobiliareMonza.href} target="_blank" rel="noopener noreferrer">
          {EXTERNAL.immobiliareMonza.label}
        </a>
        ,{' '}
        <a href={EXTERNAL.idealistaMonza.href} target="_blank" rel="noopener noreferrer">
          {EXTERNAL.idealistaMonza.label}
        </a>{' '}
        e{' '}
        <a href={EXTERNAL.casaMonza.href} target="_blank" rel="noopener noreferrer">
          {EXTERNAL.casaMonza.label}
        </a>
        . Poi approfondisci con la guida agli{' '}
        <Link href="/annunci-casa-monza">annunci casa a Monza</Link>.
      </p>

      <h2>Cosa confrontare prima di un’offerta</h2>
      <ul>
        <li>Zona e contesto locale (servizi, rumore, collegamenti)</li>
        <li>Stato dell’immobile e lavori da fare nei prossimi anni</li>
        <li>Spese condominiali, box, giardino o terrazzo</li>
        <li>Classe energetica e impianti</li>
        <li>Tempi medi di trattativa nella stessa zona</li>
      </ul>
      <p>
        Porta una <Link href="/checklist-visita-immobile">checklist in visita</Link> e, quando sei pronto,
        struttura un’<Link href="/offerta-acquisto-casa">offerta di acquisto</Link> coerente con i valori
        locali — non solo con il prezzo pubblicato.
      </p>

      <h2>Budget: spese, mutuo e agevolazioni</h2>
      <p>
        Il prezzo concordato non è il costo totale. Metti in conto{' '}
        <Link href="/spese-acquisto-casa">spese di acquisto</Link>, tempi del{' '}
        <Link href="/mutuo-prima-casa">mutuo</Link> e, se ti spettano, le{' '}
        <Link href="/agevolazioni-prima-casa">agevolazioni prima casa</Link>. Per le regole fiscali aggiornate
        consulta anche l’
        <a href={EXTERNAL.agenziaEntrate.href} target="_blank" rel="noopener noreferrer">
          Agenzia delle Entrate
        </a>
        .
      </p>

      <h2>Perché i valori locali contano</h2>
      <p>
        Capire quanto vale davvero un immobile nella tua zona di interesse aiuta a fare offerte più
        credibili e a evitare di pagare un premio senza motivo. Il nostro servizio principale è la{' '}
        <strong>valutazione con sopralluogo</strong> per proprietari; se stai comprando, le stesse logiche
        di mercato locale ti aiutano a leggere meglio Monza e i comuni vicini.
      </p>

      <h2>Monza, quartieri e comuni limitrofi</h2>
      <p>
        Se stai scegliendo la zona, parti dai <Link href="/quartieri-monza">quartieri di Monza</Link>. Fuori
        dal solo comune, confronta anche i mercati di <Link href="/valutazione/lissone">Lissone</Link>,{' '}
        <Link href="/valutazione/brugherio">Brugherio</Link>,{' '}
        <Link href="/valutazione/villasanta">Villasanta</Link> e degli altri comuni a ridosso della città —
        oppure leggi la guida per <Link href="/comprare-casa-brianza">comprare casa in Brianza</Link>.
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
