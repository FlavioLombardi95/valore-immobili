import Link from 'next/link'
import { Logo } from '@/components/Logo'

const links = [
  { href: '/monza', label: 'Monza' },
  { href: '/brianza', label: 'Brianza' },
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="Valore Immobili, home" className="shrink-0">
          <Logo variant="dark" />
        </Link>
        <nav
          aria-label="Navigazione principale"
          className="hidden items-center gap-x-5 text-sm font-semibold text-secondary md:flex"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="/#richiesta"
          className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-white transition hover:bg-brand-rust focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 active:translate-y-px"
        >
          Valutazione
        </a>
      </div>
      <nav
        aria-label="Navigazione mobile"
        className="flex flex-wrap gap-x-4 gap-y-1 border-t border-line px-4 py-2 text-sm font-semibold text-secondary md:hidden"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
