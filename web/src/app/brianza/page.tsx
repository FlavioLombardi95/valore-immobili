import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare in Brianza',
  description:
    'Valutazione immobiliare gratuita nei comuni della provincia di Monza e Brianza, con sopralluogo sul posto e confronto con le vendite reali della zona.',
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
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso dalla richiesta alla stima.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa',
          description: 'Da dove iniziare prima di fissare il prezzo.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Risposte su costi, tempi e modalità.',
        },
      ]}
    >
      <h2>Un mercato diverso in ogni comune</h2>
      <p>
        La provincia di Monza e Brianza mette insieme centri storici, quartieri residenziali, ville con
        giardino e case indipendenti. Il valore di un immobile a <strong>Lissone</strong>,{' '}
        <strong>Desio</strong>, <strong>Seregno</strong>, <strong>Brugherio</strong>,{' '}
        <strong>Villasanta</strong>, <strong>Vimercate</strong>, <strong>Concorezzo</strong> o{' '}
        <strong>Arcore</strong> risente della domanda locale, dei collegamenti con Monza e Milano e della
        tipologia prevalente in zona. Per questo la stima parte dal contesto specifico del comune e della via.
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
