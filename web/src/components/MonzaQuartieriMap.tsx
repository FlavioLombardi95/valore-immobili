/* Hallmark · design-system: DESIGN.md · component: MonzaQuartieriMap
 * Schematic neighbourhood map for /quartieri-monza (orientative, not cadastral)
 */

type Quartiere = {
  id: string
  name: string
  hint: string
  path: string
  labelX: number
  labelY: number
  labelLines?: string[]
}

/**
 * Layout orientativo nord→sud (Parco in alto), ispirato alla suddivisione
 * statistica del Comune di Monza (10 quartieri / 5 circoscrizioni).
 */
const QUARTIERI: Quartiere[] = [
  {
    id: 'parco',
    name: 'Parco di Monza',
    hint: 'Area verde a nord del centro (non residenziale).',
    path: 'M140 28 H460 L500 78 H100 Z',
    labelX: 300,
    labelY: 58,
  },
  {
    id: 'san-biagio-cazzaniga',
    name: 'San Biagio – Cazzaniga',
    hint: 'Nord-ovest, verso Lissone e Muggiò, vicino al Parco.',
    path: 'M70 78 H220 L240 150 H90 L70 120 Z',
    labelX: 155,
    labelY: 112,
    labelLines: ['San Biagio', 'Cazzaniga'],
  },
  {
    id: 'centro-san-gerardo',
    name: 'Centro – San Gerardo',
    hint: 'Cuore storico e semicentro nord, verso il Parco.',
    path: 'M220 78 H380 L400 170 H240 L220 150 Z',
    labelX: 310,
    labelY: 128,
    labelLines: ['Centro', 'San Gerardo'],
  },
  {
    id: 'liberta',
    name: 'Libertà',
    hint: 'Est del centro, oltre la ferrovia verso Villasanta.',
    path: 'M380 78 H500 L520 160 H400 L380 150 Z',
    labelX: 450,
    labelY: 118,
  },
  {
    id: 'san-carlo-san-giuseppe',
    name: 'San Carlo – San Giuseppe',
    hint: 'Ovest del centro, verso Triante e Viale Lombardia.',
    path: 'M90 150 H240 L250 250 H100 L90 210 Z',
    labelX: 170,
    labelY: 200,
    labelLines: ['San Carlo', 'San Giuseppe'],
  },
  {
    id: 'cederna-cantalupo',
    name: 'Cederna – Cantalupo',
    hint: 'Est cittadino, fascia residenziale ampia.',
    path: 'M400 160 H520 L530 260 H410 L400 230 Z',
    labelX: 465,
    labelY: 210,
    labelLines: ['Cederna', 'Cantalupo'],
  },
  {
    id: 'triante',
    name: 'Triante',
    hint: 'Ovest, tra San Giuseppe e San Fruttuoso.',
    path: 'M40 210 H100 L110 320 H50 L40 280 Z',
    labelX: 75,
    labelY: 268,
  },
  {
    id: 'regina-pacis-san-donato',
    name: 'Regina Pacis – San Donato',
    hint: 'Sud-est, verso Brugherio e i collegamenti.',
    path: 'M250 170 H410 L420 300 H260 L250 250 Z',
    labelX: 335,
    labelY: 235,
    labelLines: ['Regina Pacis', 'San Donato'],
  },
  {
    id: 'sant-albino',
    name: 'Sant’Albino',
    hint: 'Est, quartiere più contenuto per abitanti.',
    path: 'M410 230 H530 L535 320 H420 L410 300 Z',
    labelX: 472,
    labelY: 278,
  },
  {
    id: 'san-fruttuoso',
    name: 'San Fruttuoso',
    hint: 'Estremo ovest, oltre Viale Lombardia.',
    path: 'M20 280 H50 L60 400 H30 L20 350 Z',
    labelX: 40,
    labelY: 345,
    labelLines: ['San', 'Fruttuoso'],
  },
  {
    id: 'san-rocco',
    name: 'San Rocco',
    hint: 'Sud della città, verso Sesto e Cinisello.',
    path: 'M110 300 H420 L400 430 H140 L110 380 Z',
    labelX: 265,
    labelY: 370,
  },
]

const FILLS = [
  'color-mix(in srgb, var(--consultative-blue) 18%, white)',
  'color-mix(in srgb, var(--brand-orange) 16%, white)',
  'color-mix(in srgb, var(--consultative-blue) 12%, var(--surface-container))',
  'color-mix(in srgb, var(--brand-rust) 12%, white)',
  'color-mix(in srgb, var(--consultative-blue) 22%, white)',
]

export function MonzaQuartieriMap() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-line bg-surface">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-headline text-base font-bold text-ink">Mappa orientativa dei quartieri</p>
        <p className="mt-1 text-sm text-slate">
          Suddivisione statistica usata dal Comune (nord in alto). Non è una mappa catastale: serve a
          orientarti tra le zone quando confronti gli annunci.
        </p>
      </figcaption>

      <div className="bg-[var(--surface)] px-2 py-4 sm:px-4">
        <svg
          viewBox="0 0 560 460"
          role="img"
          aria-labelledby="monza-quartieri-title monza-quartieri-desc"
          className="mx-auto h-auto w-full max-w-xl"
        >
          <title id="monza-quartieri-title">Mappa schematica dei quartieri di Monza</title>
          <desc id="monza-quartieri-desc">
            Schema con Parco a nord, Centro e San Gerardo al centro, Libertà e Cederna a est, Triante e San
            Fruttuoso a ovest, San Rocco a sud.
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

          {QUARTIERI.map((q, index) => {
            const isParco = q.id === 'parco'
            const fill = isParco
              ? 'color-mix(in srgb, #34d399 22%, white)'
              : FILLS[index % FILLS.length]
            const lines = q.labelLines ?? [q.name]
            return (
              <g key={q.id} className="group">
                <path
                  d={q.path}
                  fill={fill}
                  stroke="var(--ink)"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                  className="transition-[stroke-width] duration-150 group-hover:stroke-[2.25] group-hover:stroke-[var(--brand-orange)]"
                >
                  <title>{`${q.name} — ${q.hint}`}</title>
                </path>
                <text
                  x={q.labelX}
                  y={q.labelY - ((lines.length - 1) * 7) / 2}
                  textAnchor="middle"
                  className="pointer-events-none fill-[var(--ink)] font-[family-name:var(--font-bricolage)] text-[10px] font-bold sm:text-[11px]"
                >
                  {lines.map((line, i) => (
                    <tspan key={line} x={q.labelX} dy={i === 0 ? 0 : 12}>
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <ol className="grid gap-2 border-t border-line px-4 py-4 text-sm sm:grid-cols-2">
        {QUARTIERI.filter((q) => q.id !== 'parco').map((q, index) => (
          <li key={q.id} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-sm"
              style={{ background: FILLS[(index + 1) % FILLS.length], border: '1px solid var(--ink)' }}
            />
            <span>
              <span className="font-semibold text-ink">{q.name}</span>
              <span className="text-slate"> — {q.hint}</span>
            </span>
          </li>
        ))}
      </ol>

      <p className="border-t border-line px-4 py-3 text-xs text-slate">
        Fonte orientativa: suddivisione per quartieri del Comune di Monza. Per mappe ufficiali e
        toponomastica vedi il{' '}
        <a
          href="https://www.comune.monza.it/it/page/100545"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-secondary underline underline-offset-2"
        >
          Sistema Informativo Territoriale del Comune
        </a>
        .
      </p>
    </figure>
  )
}
