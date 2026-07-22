import Link from 'next/link'

export type RelatedLink = {
  href: string
  label: string
  description: string
}

export function RelatedLinks({ items, title = 'Continua a leggere' }: { items: RelatedLink[]; title?: string }) {
  if (items.length === 0) return null
  return (
    <section aria-labelledby="related-title" className="mt-10 border-t border-line pt-6">
      <h2 id="related-title" className="font-headline text-lg font-bold text-ink">
        {title}
      </h2>
      <ul className="mt-4 divide-y divide-line">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex flex-col gap-0.5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <span className="font-headline text-sm font-bold text-secondary group-hover:text-brand-rust">
                {item.label}
              </span>
              <span className="text-sm text-slate">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
