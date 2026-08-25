/* Hallmark · design-system: DESIGN.md · page: faq */
import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoPageLayout } from '@/components/SeoPageLayout'

export const metadata: Metadata = {
  title: {
    absolute: 'FAQ: costi, tempi e documenti del sopralluogo | Valore Immobili',
  },
  description:
    'Risposte su costi, tempi, documenti e differenza tra stima online e visita sul posto. Per aprire una richiesta a Monza usa la pagina città dedicata.',
  alternates: { canonical: 'https://valore-immobili.it/faq' },
}

const faqs = [
  {
    q: 'Quanto costa una valutazione immobiliare a Monza?',
    a: 'Il sopralluogo non ha costo iniziale, né obbligo di mandato né pubblicità obbligatoria. Per aprire la richiesta a Monza usa la pagina città dedicata; qui trovi solo i dettagli su costi e tempi.',
  },
  {
    q: 'Come funziona la valutazione del mio immobile?',
    a: 'Dalla pagina Monza compili il modulo con i dati principali. Ti richiamiamo entro 1 o 2 giorni lavorativi per fissare la visita sul posto. Dopo ricevi una stima motivata su stato reale e mercato locale.',
  },
  {
    q: 'Meglio una valutazione online o sul posto?',
    a: 'A Monza e in Brianza la visita sul posto è più affidabile. Le stime automatiche partono da medie e metrature; in sopralluogo si vedono stato, esposizione, piano e contesto condominiale. Il confronto dettagliato è nella guida online vs sopralluogo.',
  },
  {
    q: 'In quanto tempo vengo ricontattato?',
    a: 'In genere entro 1 o 2 giorni lavorativi dalla richiesta, per concordare giorno e orario del sopralluogo.',
  },
  {
    q: 'Sono obbligato ad affidarvi la vendita dopo la stima?',
    a: 'No. Il sopralluogo serve a darti un punto di partenza concreto. Non c’è obbligo di incarico: puoi fermarti al parere o decidere dopo con calma.',
  },
  {
    q: 'Devo aver già deciso di vendere per richiedere una stima?',
    a: 'No. Molte richieste servono a capire se e quando ha senso vendere, o a che prezzo partire. Puoi chiedere il sopralluogo anche in fase di riflessione, dalla pagina Monza o dall’hub Brianza.',
  },
  {
    q: 'Quali documenti servono per il sopralluogo?',
    a: 'Non sono obbligatori, ma velocizzano la stima: planimetria e visura catastale, APE se disponibile e, per gli appartamenti, ultime spese condominiali. Se manca qualcosa, si può partire e integrare dopo.',
  },
  {
    q: 'Operate anche fuori Monza, in Brianza?',
    a: 'Sì. Copriamo Monza e i comuni della provincia con lo stesso approccio: visita sul posto e lettura del mercato di zona. L’elenco comuni è nell’hub Brianza.',
  },
  {
    q: 'Quali immobili trattate?',
    a: 'Appartamenti, ville, case indipendenti, box e altre tipologie residenziali a Monza e in Brianza. Per le tipologiche ci sono pagine dedicate (appartamenti Monza, ville Brianza).',
  },
  {
    q: 'Offrite anche supporto a chi vuole comprare casa?',
    a: 'Sì. Oltre al sopralluogo per chi vende, puoi richiedere una consulenza sull’acquisto a Monza e in Brianza, senza impegno. È un percorso separato dalla stima di vendita.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FaqPage() {
  return (
    <SeoPageLayout
      title="Domande frequenti"
      intro="Risposte su **costi, tempi e documenti** del sopralluogo. Per aprire una richiesta a Monza non restare qui: usa la **pagina città**."
      sourcePage="/faq"
      breadcrumb="FAQ"
      showForm={false}
      relatedTitle="Approfondisci"
      related={[
        {
          href: '/monza',
          label: 'Sopralluogo a Monza',
          description: 'Pagina città: modulo e stima sul posto.',
        },
        {
          href: '/valutazione-online-o-sopralluogo',
          label: 'Online o sopralluogo',
          description: 'Dopo una stima automatica: cosa fare.',
        },
        {
          href: '/valore-al-metro-quadro-monza',
          label: 'Valore al metro quadro a Monza',
          description: 'Perché le medie €/mq ingannano.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Da dove iniziare prima di vendere.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Il percorso completo, passo per passo.',
        },
        {
          href: '/comprare-casa-monza',
          label: 'Comprare casa a Monza',
          description: 'Hub acquisto, non solo valutazione.',
        },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p>
        Qui trovi i dubbi più frequenti su costi, tempi di richiamo e obblighi. Per aprire la richiesta a Monza
        usa la <Link href="/monza">pagina città</Link>. Percorso completo:{' '}
        <Link href="/come-funziona">come funziona la valutazione</Link>.
      </p>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.q} className="group rounded-2xl border border-line bg-white p-4">
            <summary className="flex cursor-pointer items-center justify-between gap-3 font-headline font-bold text-secondary">
              {faq.q}
              <span
                aria-hidden="true"
                className="text-slate transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-slate">{faq.a}</p>
          </details>
        ))}
      </div>

      <h2>Non trovi la tua domanda?</h2>
      <p>
        Se stai valutando di vendere a Monza, parti dalla <Link href="/monza">pagina Monza</Link> o dalla guida{' '}
        <Link href="/vendere-casa-monza">vendere casa a Monza</Link>. Se invece stai cercando casa,{' '}
        <Link href="/comprare-casa-monza">comprare casa a Monza</Link> e la{' '}
        <Link href="/?from=faq&intent=acquisto#richiesta">consulenza sull’acquisto</Link> sono il percorso
        giusto.
      </p>
    </SeoPageLayout>
  )
}
