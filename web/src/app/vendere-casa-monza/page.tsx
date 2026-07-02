import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Vendere casa a Monza: guida pratica',
  description:
    'Guida per proprietari che vogliono vendere casa a Monza: valutazione, tempistiche e primo passo concreto.',
  alternates: { canonical: 'https://valore-immobili.it/vendere-casa-monza' },
}

export default function VendereCasaMonzaPage() {
  return (
    <SeoPageLayout
      title="Vendere casa a Monza: da dove iniziare"
      intro="Prima di fissare un prezzo o scegliere una strategia di vendita, serve una valutazione reale basata sul mercato locale."
      sourcePage="/vendere-casa-monza"
      defaultCity="Monza"
    >
      <h2>Perché partire dalla valutazione</h2>
      <p>
        Molti proprietari iniziano con stime online o pareri generici. Per vendere casa a Monza con serenità,
        conviene capire il valore reale dell’immobile considerando zona, stato, metratura e domanda attuale.
      </p>
      <h2>Cosa succede dopo la richiesta</h2>
      <p>
        Dopo il modulo online ti contattiamo per organizzare un sopralluogo gratuito. Non c’è obbligo di
        affidare l’incarico: l’obiettivo è darti un punto di partenza concreto.
      </p>
    </SeoPageLayout>
  )
}
