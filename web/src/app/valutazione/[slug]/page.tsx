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
import {
  PROPERTY_TYPE_PAGES,
  getPropertyType,
  propertyTypePath,
  type PropertyTypePage,
} from '@/lib/property-types'
import { SITE_URL } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [
    ...NEAR_MONZA_LOCALITIES.map((item) => ({ slug: item.slug })),
    ...PROPERTY_TYPE_PAGES.map((item) => ({ slug: item.slug })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const locality = getLocality(slug)
  if (locality) {
    return {
      title: `Valutazione immobiliare a ${locality.name}`,
      description: `Valutazione immobiliare gratuita a ${locality.name}: sopralluogo sul posto e stima basata su vendite reali nella zona, senza impegno.`,
      alternates: { canonical: `${SITE_URL}${localityPath(locality.slug)}` },
    }
  }

  const propertyType = getPropertyType(slug)
  if (propertyType) {
    return {
      title: propertyType.metaTitle,
      description: propertyType.metaDescription,
      alternates: { canonical: `${SITE_URL}${propertyTypePath(propertyType.slug)}` },
    }
  }

  return {}
}

function AngleBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <>
      <h2>{heading}</h2>
      <p>{body}</p>
    </>
  )
}

function LookBlock({ heading, items }: { heading: string; items: string[] }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

function FaqBlock({
  title,
  faqs,
}: {
  title: string
  faqs: { question: string; answer: string }[]
}) {
  return (
    <>
      <h2>{title}</h2>
      {faqs.map((faq) => (
        <Fragment key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </Fragment>
      ))}
    </>
  )
}

function RequestBlock({ note }: { note: string }) {
  return (
    <>
      <h2>Come richiedere la valutazione</h2>
      <p>{note}</p>
      <p>
        Compila il modulo con i dati dell’immobile: ti ricontattiamo entro 1–2 giorni lavorativi per
        organizzare il sopralluogo. Il servizio è <strong>gratuito</strong> e <strong>senza impegno</strong>.
        Per il percorso completo leggi <Link href="/come-funziona">come funziona</Link>.
      </p>
    </>
  )
}

function SiblingLocalities({ locality }: { locality: Locality }) {
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

function TipologicheLinks({ currentSlug }: { currentSlug?: string }) {
  return (
    <>
      <h2>Valutazione per tipologia</h2>
      <ul>
        {PROPERTY_TYPE_PAGES.filter((item) => item.slug !== currentSlug).map((item) => (
          <li key={item.slug}>
            <Link href={propertyTypePath(item.slug)}>{item.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/monza">Valutazione a Monza (tutte le tipologiche)</Link>
        </li>
      </ul>
    </>
  )
}

function localityBody(locality: Locality): ReactNode {
  const angle = <AngleBlock heading={locality.angleHeading} body={locality.angleBody} />
  const look = <LookBlock heading={locality.lookHeading} items={locality.lookItems} />
  const request = <RequestBlock note={locality.requestNote} />
  const siblings = <SiblingLocalities locality={locality} />

  switch (locality.layoutVariant) {
    case 'look-first':
      return (
        <>
          {look}
          {angle}
          {request}
          {siblings}
        </>
      )
    case 'faq-led':
      return (
        <>
          {locality.faqs?.length ? (
            <FaqBlock title={`Domande frequenti su ${locality.name}`} faqs={locality.faqs} />
          ) : null}
          {look}
          {angle}
          {request}
          {siblings}
        </>
      )
    case 'compare-monza':
    case 'angle-first':
    default:
      return (
        <>
          {angle}
          {look}
          {request}
          {siblings}
        </>
      )
  }
}

function propertyTypeBody(page: PropertyTypePage): ReactNode {
  return (
    <>
      <AngleBlock heading={page.angleHeading} body={page.angleBody} />
      <LookBlock heading={page.lookHeading} items={page.lookItems} />
      {page.faqs?.length ? (
        <FaqBlock title={`Domande frequenti — ${page.shortLabel.toLowerCase()}`} faqs={page.faqs} />
      ) : null}
      <RequestBlock note={page.requestNote} />
      <TipologicheLinks currentSlug={page.slug} />
      <h2>Zone in cui operiamo</h2>
      <p>
        Il servizio copre <Link href="/monza">Monza</Link> e i{' '}
        <Link href="/brianza">comuni della Brianza</Link>. Se conosci già il comune, apri la pagina
        dedicata (es.{' '}
        <Link href="/valutazione/lissone">Lissone</Link>,{' '}
        <Link href="/valutazione/brugherio">Brugherio</Link>).
      </p>
    </>
  )
}

export default async function ValutazioneSlugPage({ params }: PageProps) {
  const { slug } = await params
  const locality = getLocality(slug)
  if (locality) {
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
            href: propertyTypePath('appartamenti-monza'),
            label: 'Valutazione appartamenti',
            description: 'Cosa pesa su piano, spese e condominio.',
          },
          {
            href: propertyTypePath('ville-brianza'),
            label: 'Valutazione ville',
            description: 'Ville e case indipendenti in Brianza.',
          },
        ]}
      >
        {localityBody(locality)}
      </SeoPageLayout>
    )
  }

  const propertyType = getPropertyType(slug)
  if (!propertyType) notFound()

  return (
    <SeoPageLayout
      title={propertyType.title}
      intro={propertyType.intro}
      sourcePage={propertyTypePath(propertyType.slug)}
      defaultCity={propertyType.defaultCity}
      breadcrumb={propertyType.shortLabel}
      related={[
        {
          href: '/monza',
          label: 'Valutazione a Monza',
          description: 'Quartieri e mercato cittadino.',
        },
        {
          href: '/brianza',
          label: 'Valutazione in Brianza',
          description: 'Comuni e mercati locali.',
        },
        {
          href: '/vendere-casa-monza',
          label: 'Vendere casa a Monza',
          description: 'Da dove partire prima del prezzo.',
        },
        {
          href: '/come-funziona',
          label: 'Come funziona',
          description: 'Dalla richiesta al sopralluogo.',
        },
      ]}
    >
      {propertyTypeBody(propertyType)}
    </SeoPageLayout>
  )
}
