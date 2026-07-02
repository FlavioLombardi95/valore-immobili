import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare a Monza',
  description:
    'Richiedi una valutazione immobiliare gratuita a Monza con sopralluogo sul posto. Servizio locale, senza impegno.',
  alternates: { canonical: 'https://valore-immobili.it/monza' },
}

export default function MonzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare a Monza"
      intro="Se stai valutando la vendita di un immobile a Monza, una stima sul posto è più attendibile di una valutazione automatica online."
      sourcePage="/monza"
      defaultCity="Monza"
    >
      <h2>Perché scegliere una valutazione locale a Monza</h2>
      <p>
        Il valore di un immobile a Monza dipende da zona, stato, esposizione, servizi e confronto con vendite
        recenti. Un consulente che conosce il mercato locale può valutare questi elementi solo con un
        sopralluogo.
      </p>
      <h2>Come funziona la richiesta</h2>
      <p>
        Compili il modulo con i dati dell’immobile e i tuoi contatti. Ti richiamiamo entro 1-2 giorni
        lavorativi per concordare data e orario del sopralluogo gratuito.
      </p>
    </SeoPageLayout>
  )
}
