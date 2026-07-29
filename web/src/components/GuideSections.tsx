/* Hallmark · design-system: DESIGN.md · component: GuideSections
 * Long-form guide body: H2 + prose + optional outbound typographic links
 */
import type { GuideSection } from '@/lib/guides'

export function GuideSections({ sections }: { sections: GuideSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
