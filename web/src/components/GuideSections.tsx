/* Hallmark · design-system: DESIGN.md · component: GuideSections
 * Long-form guide body: H2 + prose + optional outbound typographic links
 * Inline emphasis: wrap phrases in **like this** → <strong>
 */
import type { ReactNode } from 'react'
import type { GuideSection } from '@/lib/guides'

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function GuideSections({ sections }: { sections: GuideSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{renderInline(paragraph)}</p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          ) : null}
          {section.internalLinks && section.internalLinks.length > 0 ? (
            <p>
              {section.internalLinksLead ? `${section.internalLinksLead} ` : null}
              {section.internalLinks.map((link, index) => {
                const sep =
                  index === 0 ? null : index === section.internalLinks!.length - 1 ? ' e ' : ', '
                return (
                  <span key={link.href}>
                    {sep}
                    <a href={link.href}>{link.label}</a>
                  </span>
                )
              })}
              .
            </p>
          ) : null}
          {section.externalLinks && section.externalLinks.length > 0 ? (
            <p>
              {section.externalLinksLead ? `${section.externalLinksLead} ` : null}
              {section.externalLinks.map((link, index) => {
                const sep =
                  index === 0 ? null : index === section.externalLinks!.length - 1 ? ' e ' : ', '
                return (
                  <span key={link.href}>
                    {sep}
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </span>
                )
              })}
              .
            </p>
          ) : null}
        </section>
      ))}
    </>
  )
}
