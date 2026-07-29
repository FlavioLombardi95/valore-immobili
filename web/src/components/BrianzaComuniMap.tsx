/* Hallmark · design-system: DESIGN.md · component: BrianzaComuniMap
 * Schematic map of Monza + nearby comuni linked to valuation pages
 */
import Link from 'next/link'
import { localityPath } from '@/lib/localities'

type Place = {
  id: string
  name: string
  href: string
  path: string
  labelX: number
  labelY: number
  labelLines?: string[]
  primary?: boolean
}

/** Orientamento nord↑, posizioni relative tipiche attorno a Monza. */
const PLACES: Place[] = [
  {
    id: 'desio',
    name: 'Desio',
    href: localityPath('desio'),
    path: 'M210 28 H350 L360 95 H200 Z',
    labelX: 280,
    labelY: 68,
  },
  {
    id: 'lissone',
    name: 'Lissone',
    href: localityPath('lissone'),
    path: 'M70 90 H200 L210 180 H80 Z',
    labelX: 140,
    labelY: 140,
  },
  {
    id: 'villasanta',
    name: 'Villasanta',
    href: localityPath('villasanta'),
    path: 'M360 90 H490 L500 180 H370 Z',
    labelX: 430,
    labelY: 140,
  },
  {
    id: 'muggio',
    name: 'Muggiò',
    href: localityPath('muggio'),
    path: 'M40 180 H150 L160 270 H50 Z',
    labelX: 100,
    labelY: 230,
  },
  {
    id: 'monza',
    name: 'Monza',
    href: '/monza',
    path: 'M160 160 H400 L410 300 H150 Z',
    labelX: 280,
    labelY: 235,
    primary: true,
  },
  {
    id: 'concorezzo',
    name: 'Concorezzo',
    href: localityPath('concorezzo'),
    path: 'M410 180 H520 L530 270 H420 Z',
    labelX: 470,
    labelY: 230,
  },
  {
    id: 'cologno-monzese',
    name: 'Cologno Monzese',
    href: localityPath('cologno-monzese'),
    path: 'M120 300 H260 L270 400 H130 Z',
    labelX: 195,
    labelY: 350,
    labelLines: ['Cologno', 'Monzese'],
  },
  {
    id: 'brugherio',
    name: 'Brugherio',
    href: localityPath('brugherio'),
    path: 'M300 300 H450 L460 400 H310 Z',
    labelX: 380,
    labelY: 355,
  },
  {
    id: 'vimodrone',
    name: 'Vimodrone',
    href: localityPath('vimodrone'),
    path: 'M200 400 H380 L370 470 H210 Z',
    labelX: 290,
    labelY: 440,
  },
]

const FILL_NEAR = 'color-mix(in srgb, var(--consultative-blue) 14%, white)'
const FILL_MONZA = 'color-mix(in srgb, var(--brand-orange) 22%, white)'

export function BrianzaComuniMap() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-line bg-surface">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-headline text-base font-bold text-ink">Mappa dei comuni a ridosso di Monza</p>
        <p className="mt-1 text-sm text-slate">
          Schema orientativo (nord in alto). Clicca un comune per la pagina di valutazione dedicata.
        </p>
      </figcaption>

      <div className="bg-[var(--surface)] px-2 py-4 sm:px-4">
        <svg
          viewBox="0 0 560 500"
          role="img"
          aria-labelledby="brianza-map-title brianza-map-desc"
          className="mx-auto h-auto w-full max-w-xl"
        >
          <title id="brianza-map-title">Mappa schematica di Monza e comuni vicini</title>
          <desc id="brianza-map-desc">
            Monza al centro, Desio a nord, Lissone e Muggiò a ovest, Villasanta e Concorezzo a est, Brugherio,
            Cologno Monzese e Vimodrone a sud.
          </desc>

          <text
            x="28"
            y="22"
            className="fill-[var(--slate)] font-[family-name:var(--font-source-sans)] text-[11px]"
          >
            N
          </text>
          <path
            d="M28 28 L28 48 M22 34 L28 28 L34 34"
            fill="none"
            stroke="var(--slate)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {PLACES.map((place) => {
            const lines = place.labelLines ?? [place.name]
            return (
              <a
                key={place.id}
                href={place.href}
                className="group outline-none"
                aria-label={`Valutazione immobiliare a ${place.name}`}
              >
                <path
                  d={place.path}
                  fill={place.primary ? FILL_MONZA : FILL_NEAR}
                  stroke="var(--ink)"
                  strokeWidth={place.primary ? 2 : 1.25}
                  strokeLinejoin="round"
                  className="transition-[stroke-width] duration-150 group-hover:stroke-[var(--brand-orange)] group-hover:stroke-[2.5] group-focus-visible:stroke-[var(--brand-orange)] group-focus-visible:stroke-[2.5]"
                />
                <text
                  x={place.labelX}
                  y={place.labelY - ((lines.length - 1) * 7) / 2}
                  textAnchor="middle"
                  className={`pointer-events-none fill-[var(--ink)] font-[family-name:var(--font-bricolage)] font-bold ${
                    place.primary ? 'text-[13px] sm:text-[14px]' : 'text-[11px] sm:text-[12px]'
                  }`}
                >
                  {lines.map((line, i) => (
                    <tspan key={line} x={place.labelX} dy={i === 0 ? 0 : 13}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </a>
            )
          })}
        </svg>
      </div>

      <ul className="flex flex-wrap gap-x-3 gap-y-1 border-t border-line px-4 py-3 text-sm">
        {PLACES.map((place) => (
          <li key={place.id}>
            <Link
              href={place.href}
              className={`underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                place.primary ? 'font-bold text-brand-rust' : 'font-semibold text-secondary'
              }`}
            >
              {place.name}
            </Link>
          </li>
        ))}
      </ul>
    </figure>
  )
}
