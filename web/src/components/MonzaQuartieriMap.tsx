/* Hallmark · design-system: DESIGN.md · component: MonzaQuartieriMap
 * Server shell + client Leaflet/OSM canvas
 */
import { MonzaQuartieriMapCanvas } from '@/components/maps/MapCanvas'

const QUARTIERI = [
  'Centro – San Gerardo',
  'Libertà',
  'San Carlo – San Giuseppe',
  'Triante',
  'San Fruttuoso',
  'San Biagio – Cazzaniga',
  'Cederna – Cantalupo',
  'Sant’Albino',
  'Regina Pacis – San Donato',
  'San Rocco',
]

export function MonzaQuartieriMap() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-line bg-surface">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-headline text-base font-bold text-ink">Mappa dei quartieri di Monza</p>
        <p className="mt-1 text-sm text-slate">
          Confine comunale e punti quartiere su OpenStreetMap. Clicca i punti per il nome della zona.
        </p>
      </figcaption>

      <MonzaQuartieriMapCanvas />

      <ol className="grid gap-1.5 border-t border-line px-4 py-4 text-sm sm:grid-cols-2">
        {QUARTIERI.map((name) => (
          <li key={name} className="flex gap-2 text-slate">
            <span
              aria-hidden="true"
              className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand"
            />
            <span className="font-semibold text-ink">{name}</span>
          </li>
        ))}
      </ol>

      <p className="border-t border-line px-4 py-3 text-xs text-slate">
        Dati © collaboratori{' '}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-secondary underline underline-offset-2"
        >
          OpenStreetMap
        </a>
        . Per mappe ufficiali del Comune vedi il{' '}
        <a
          href="https://www.comune.monza.it/it/page/100545"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-secondary underline underline-offset-2"
        >
          Sistema Informativo Territoriale
        </a>
        .
      </p>
    </figure>
  )
}
