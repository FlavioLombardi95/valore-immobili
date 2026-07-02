import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Valutazione immobiliare in Brianza',
  description:
    'Valutazione immobiliare gratuita in provincia di Monza e Brianza con sopralluogo sul posto.',
  alternates: { canonical: 'https://valore-immobili.it/brianza' },
}

export default function BrianzaPage() {
  return (
    <SeoPageLayout
      title="Valutazione immobiliare in Brianza"
      intro="Servizio dedicato ai proprietari che vogliono capire il valore reale del proprio immobile in provincia di Monza e Brianza."
      sourcePage="/brianza"
    >
      <h2>Valutazione sul posto in Brianza</h2>
      <p>
        Ogni comune della Brianza ha dinamiche di mercato diverse. Per questo la valutazione non si limita a
        dati statistici: analizziamo l’immobile di persona e lo confrontiamo con vendite reali nella zona.
      </p>
      <h2>Per chi è pensato il servizio</h2>
      <p>
        Il servizio è utile se stai pensando di vendere entro i prossimi mesi e vuoi una stima concreta prima
        di decidere prezzo, tempistiche e strategia.
      </p>
    </SeoPageLayout>
  )
}
