import Link from 'next/link'
import { Logo } from '@/components/Logo'

const links = [
  { href: '/monza', label: 'Monza' },
  { href: '/brianza', label: 'Brianza' },
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/faq', label: 'FAQ' },
  { href: '/vendere-casa-monza', label: 'Vendere casa' },
  { href: '/comprare-casa-monza', label: 'Comprare casa' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="Valore Immobili — home" className="flex items-center justify-center md:justify-start">
          <Logo variant="dark" />
        </Link>
        <nav
          aria-label="Navigazione principale"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-secondary"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
