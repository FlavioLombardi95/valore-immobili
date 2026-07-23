import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { PRIVACY_POLICY_URL } from '@/lib/seo'

const links = [
  { href: '/monza', label: 'Monza' },
  { href: '/brianza', label: 'Brianza' },
  { href: '/valutazione/appartamenti-monza', label: 'Appartamenti' },
  { href: '/valutazione/ville-brianza', label: 'Ville' },
  { href: '/come-funziona', label: 'Come funziona' },
  { href: '/vendere-casa-monza', label: 'Vendere casa' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink px-4 py-10 text-cloud">
      <div className="mx-auto max-w-6xl space-y-6">
        <Logo variant="light" />
        <p className="max-w-xl font-headline text-xl font-bold tracking-tight text-cloud md:text-2xl">
          Una stima sul posto, per Monza e Brianza, senza impegno.
        </p>
        <p className="max-w-lg text-sm text-slate-300">
          Valutazione immobiliare gratuita con sopralluogo. Nessun obbligo di mandato.
        </p>
        <nav aria-label="Collegamenti utili" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-200">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cloud">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Valore Immobili · Monza e Brianza</p>
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cloud">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
