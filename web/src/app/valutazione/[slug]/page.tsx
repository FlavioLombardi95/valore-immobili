import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { SeoPageLayout } from '@/components/SeoPageLayout'
import {
  NEAR_MONZA_LOCALITIES,
  getLocality,
  localityPath,
  type Locality,
} from '@/lib/localities'
import { SITE_URL } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return NEAR_MONZA_LOCALITIES.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const locality = getLocality(slug)
  if (!locality) return {}

  return {
    title: `Valutazione immobiliare a ${locality.name}`,
    description: `Valutazione immobiliare gratuita a ${locality.name}: sopralluogo sul posto e stima basata su vendite reali nella zona, senza impegno.`,
    alternates: { canonical: `${SITE_URL}${localityPath(locality.slug)}` },
  }
}

function AngleBlock({ locality }: { locality: Locality }) {
  return (
    <>
      <h2>{locality.angleHeading}</h2>
      <p>{locality.angleBody}</p>
    </>
  )
}

function LookBlock({ locality }: { locality: Locality }) {
  return (
    <>
      <h2>{locality.lookHeading}</h2>
      <ul>
        {locality.lookItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

function FaqBlock({ locality }: { locality: Locality }) {
  if (!locality.faqs?.length) return null
  return (
    <>
      <h2>Domande frequenti su {locality.name}</h2>
      {locality.faqs.map((faq) => (
        <Fragment key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </Fragment>
      ))}
    </>
  )
}

function RequestBlock({ locality }: { locality: Locality }) {
  return (
    <>
      <h2>Come richiedere la valutazione</h2>
      <p>{locality.requestNote}</p>
      <p>
        Compila il modulo con i dati dell’immobile: ti ricontattiamo entro 1–2 giorni lavorativi per
        organizzare il sopralluogo. Il servizio è <strong>gratuito</strong> e <strong>senza impegno</strong>.
        Per il percorso completo leggi <Link href="/come-funziona">come funziona</Link>.
      </p>
    </>
  )
}

function SiblingBlock({ locality }: { locality: Locality }) {
  const siblings = NEAR_MONZA_LOCALITIES.filter((item) => item.slug !== locality.slug).slice(0, 3)
  return (
    <>
      <h2>Altri comuni vicini</h2>
      <ul>
        {siblings.map((item) => (
          <li key={item.slug}>
            <Link href={localityPath(item.slug)}>Valutazione a {item.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/brianza">Tutte le zone in Brianza</Link>
        </li>
      </ul>
    </>
  )
}

function localityBody(locality: Locality): ReactNode {
  switch (locality.layoutVariant) {
    case 'look-first':
      return (
        <>
          <LookBlock locality={locality} />
          <AngleBlock locality={locality} />
          <RequestBlock locality={locality} />
          <SiblingBlock locality={locality} />
        </>
      )
    case 'faq-led':
      return (
        <>
          <FaqBlock locality={locality} />
          <LookBlock locality={locality} />
          <AngleBlock locality={locality} />
          <RequestBlock locality={locality} />
          <SiblingBlock locality={locality} />
        </>
      )
    case 'compare-monza':
    case 'angle-first':
    default:
      return (
        <>
          <AngleBlock locality={locality} />
          <LookBlock locality={locality} />
          <RequestBlock locality={locality} />
          <SiblingBlock locality={locality} />
        </>
      )
  }
}

export default async function ValutazioneLocalityPage({ params }: PageProps) {
  const { slug } = await params
  const locality = getLocality(slug)
  if (!locality) notFound()

  return (
    <SeoPageLayout
      title={`Valutazione immobiliare a ${locality.name}`}
      intro={locality.intro}
      sourcePage={localityPath(locality.slug)}
      defaultCity={locality.name}
      breadcrumb={locality.name}
      related={[
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Panoramica sui comuni della zona.',
        },
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Se l’immobile è nel comune di Monza.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Dalla richiesta al sopralluogo.',
        },
        {
          href: '/faq',
          label: 'Domande frequenti',
          description: 'Costi, tempi e obblighi.',
        },
      ]}
    >
      {localityBody(locality)}
    </SeoPageLayout>
  )
}
