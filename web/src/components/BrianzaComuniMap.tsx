/* Hallmark · design-system: DESIGN.md · component: BrianzaComuniMap
 * Server shell + client Leaflet/OSM canvas
 */
import Link from 'next/link'
import { BrianzaComuniMapCanvas } from '@/components/maps/MapCanvas'
import { localityPath } from '@/lib/localities'

const LINKS = [
  { href: '/monza', label: 'Monza' },
  { href: localityPath('desio'), label: 'Desio' },
  { href: localityPath('lissone'), label: 'Lissone' },
  { href: localityPath('seregno'), label: 'Seregno' },
  { href: localityPath('cesano-maderno'), label: 'Cesano Maderno' },
  { href: localityPath('limbiate'), label: 'Limbiate' },
  { href: localityPath('muggio'), label: 'Muggiò' },
  { href: localityPath('villasanta'), label: 'Villasanta' },
  { href: localityPath('concorezzo'), label: 'Concorezzo' },
  { href: localityPath('vimercate'), label: 'Vimercate' },
  { href: localityPath('giussano'), label: 'Giussano' },
  { href: localityPath('meda'), label: 'Meda' },
  { href: localityPath('brugherio'), label: 'Brugherio' },
  { href: localityPath('cologno-monzese'), label: 'Cologno Monzese' },
  { href: localityPath('vimodrone'), label: 'Vimodrone' },
]

export function BrianzaComuniMap() {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-line bg-surface">
      <figcaption className="border-b border-line px-4 py-3">
        <p className="font-headline text-base font-bold text-ink">Mappa dei comuni a ridosso di Monza</p>
        <p className="mt-1 text-sm text-slate">
          Confini reali da OpenStreetMap. Clicca un comune sulla mappa per la valutazione dedicata.
        </p>
      </figcaption>

      <BrianzaComuniMapCanvas />

      <ul className="flex flex-wrap gap-x-3 gap-y-1 border-t border-line px-4 py-3 text-sm">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                link.href === '/monza' ? 'text-brand-rust' : 'text-secondary'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="border-t border-line px-4 py-3 text-xs text-slate">
        Dati cartografici © collaboratori{' '}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-secondary underline underline-offset-2"
        >
          OpenStreetMap
        </a>
        .
      </p>
    </figure>
  )
}
