import type { Metadata } from 'next'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: 'Come funziona la valutazione immobiliare',
  description:
    'Scopri come funziona la valutazione immobiliare gratuita con sopralluogo a Monza e Brianza.',
  alternates: { canonical: 'https://valore-immobili.it/come-funziona' },
}

export default function ComeFunzionaPage() {
  return (
    <SeoPageLayout
      title="Come funziona la valutazione sul posto"
      intro="Un percorso semplice: richiesta online, contatto telefonico, sopralluogo gratuito e analisi di mercato locale."
      sourcePage="/come-funziona"
    >
      <ol>
        <li>Compili il modulo con i dati dell’immobile e i tuoi contatti.</li>
        <li>Ti richiamiamo per organizzare giorno e orario del sopralluogo.</li>
        <li>Un consulente visita l’immobile e raccoglie le informazioni utili alla stima.</li>
        <li>Ricevi una valutazione basata sul mercato reale della zona, senza impegno.</li>
      </ol>
      <p>
        Non utilizziamo stime automatiche come unico riferimento. Il sopralluogo serve a capire cosa rende
        unico il tuo immobile.
      </p>
    </SeoPageLayout>
  )
}
