import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'FAQ valutazione immobiliare Monza',
  description:
    'Domande frequenti sulla valutazione immobiliare gratuita a Monza e Brianza.',
  alternates: { canonical: 'https://valore-immobili.it/faq' },
}

const faqs = [
  {
    q: 'Quanto costa una valutazione immobiliare a Monza?',
    a: 'La valutazione con sopralluogo è gratuita: nessun costo iniziale, nessun obbligo di mandato e nessuna pubblicità.',
  },
  {
    q: 'Come funziona la valutazione del mio immobile?',
    a: 'Compili il modulo con i dati del tuo immobile; ti contattiamo per fissare un sopralluogo gratuito sul posto con un consulente immobiliare.',
  },
  {
    q: 'Valutazione online o sul posto?',
    a: 'Per un immobile a Monza e in Brianza la valutazione sul posto è più attendibile: valutiamo di persona caratteristiche e zona, oltre ai dati di mercato.',
  },
]

export default function FaqPage() {
  return (
    <SeoPageLayout
      title="Domande frequenti"
      intro="Risposte chiare su costi, tempi e modalità del servizio di valutazione immobiliare locale."
      sourcePage="/faq"
    >
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="rounded-2xl border border-line bg-white p-4">
            <summary className="cursor-pointer font-headline font-bold text-secondary">{faq.q}</summary>
            <p className="mt-2 text-sm text-slate">{faq.a}</p>
          </details>
        ))}
      </div>
    </SeoPageLayout>
  )
}
