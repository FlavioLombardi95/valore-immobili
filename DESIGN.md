---
name: "Valore Immobili"
description: "Mini-sito locale per richieste di valutazione immobiliare reale a Monza e Brianza."
colors:
  brand-orange: "#f26522"
  brand-rust: "#a63b00"
  consultative-blue: "#005fac"
  ink: "#0f172a"
  body-ink: "#171c1f"
  slate: "#475569"
  muted: "#595e6f"
  cloud: "#f8fafc"
  surface: "#f6fafd"
  surface-container: "#eaeef2"
  line: "#dbe4ef"
  outline-warm: "#e1bfb3"
  success: "#34d399"
  error: "#ba1a1a"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.5rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(2rem, 5vw, 3.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.brand-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.25rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.brand-rust}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.consultative-blue}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1rem"
  form-field:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
    height: "48px"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
---

# Design System: Valore Immobili

## 1. Overview: Lo Sportello Locale

**Creative North Star: "Lo Sportello Locale"**

Valore Immobili should feel like a clear local counter where a person can ask, "Quanto vale davvero casa mia?" and understand the next step without pressure. The design is practical, direct, and territorial: it supports conversion, but it earns the form submission through clarity, local context, and human reassurance.

The current identity uses a strong orange CTA, a sober blue for consultancy signals, light surfaces for the indexed page, and a darker premium shell for the ads/thank-you variant. Keep this recognizability, but sharpen it. The system should evolve away from generic real-estate landing patterns and toward a more ownable Monza/Brianza mini-site, with room for local content pages, neighborhood guides, a future logo refresh, and a lightweight internal lead admin.

Organic traffic is the main growth constraint. Public pages must be designed as useful local content first and conversion surfaces second: readable, crawlable, internally linked, and specific to Monza/Brianza search intent.

It explicitly rejects automatic-estimate portals, pushy ads, cold luxury-agency styling, and generic AI/SaaS landing-page patterns. Premium is allowed only when it makes the service feel more credible, not more distant.

**Key Characteristics:**

- Local and human before decorative.
- Organic-first: each public page earns its place through local search intent.
- Conversion-focused without fake urgency.
- Strong visible form affordances, never placeholder-only.
- One primary action per viewport.
- SEO content that reads like guidance, not keyword stuffing.

## 2. Colors: The Local Signal Palette

The palette pairs a decisive valuation orange with a calmer consultative blue and cool, readable surfaces. Future redesign work should evolve these colors into a more distinctive system, not replace them with generic real-estate green or luxury black-and-gold.

### Primary

- **Valuation Orange** (`#f26522`): Primary CTA, key action states, selected highlights, and the strongest brand signal. Use it sparingly enough that every orange element feels clickable or important.
- **Grounded Rust** (`#a63b00`): Deeper companion for gradients, hover states, active states, and moments that need more weight than bright orange.

### Secondary

- **Consultative Blue** (`#005fac`): Headings, trust details, FAQ open states, and informational emphasis. It should feel like the advisor voice: stable, legible, and specific.
- **Human Success Green** (`#34d399`): Confirmation, verified states, and reassurance. Avoid using it as a broad brand color.

### Neutral

- **Ink Navy** (`#0f172a`): Dark shell, footer, and high-contrast text on light sections.
- **Body Ink** (`#171c1f`): Primary text on light backgrounds.
- **Slate** (`#475569`): Secondary text when contrast remains comfortably above WCAG AA.
- **Muted Steel** (`#595e6f`): Low-emphasis text; use carefully on small text.
- **Cloud** (`#f8fafc`): Soft cards and quiet page backgrounds.
- **Surface** (`#f6fafd`): Main indexed-page background.
- **Line Blue** (`#dbe4ef`): Borders and dividers.
- **Warm Outline** (`#e1bfb3`): Subtle relationship to the orange family for warm borders.

### Named Rules

**The Orange Means Action Rule.** Orange should usually mean "do this now": submit, continue, select, confirm. Do not scatter orange icons across decorative cards.

**The Local Contrast Rule.** Text on tinted surfaces must remain plainly readable. Do not use pale gray body copy to create elegance.

**The No Luxury Costume Rule.** Do not turn the palette into black/gold, champagne neutrals, or cold luxury real-estate styling unless the business strategy changes.

## 3. Typography

**Display Font:** Plus Jakarta Sans, with system sans fallback.  
**Body Font:** Inter, with system sans fallback.  
**Label Font:** Inter.

**Character:** The pairing is practical and digital, with enough weight to make the form feel reliable. Plus Jakarta Sans is already committed in the shipping pages; keep it for continuity, but avoid using it as a generic startup voice. Let hierarchy, local copy, imagery, and layout make the system distinctive.

### Hierarchy

- **Display** (800, `clamp(2rem, 4vw, 3.5rem)`, `1.05`): Hero headlines and major SEO page headers. Keep lines short and balanced; avoid repeating "valutazione" in every line.
- **Headline** (800, `clamp(1.5rem, 2vw, 2.25rem)`, `1.12`): Form title, section leads, and page-level content blocks.
- **Title** (700, `1rem`, `1.25`): Form groups, cards, FAQ summaries, and compact section headings.
- **Body** (400, `1rem`, `1.55`): Explanatory copy, SEO prose, and trust details. Keep long prose at 65-75ch.
- **Label** (600, `0.75rem`, `1.25`): Form labels and compact metadata. Labels must stay visible after the user types.

### Named Rules

**The One Voice Rule.** Use natural Italian with one register. Do not mix "tu" and "lei" on the same surface unless there is a deliberate reason.

**The Literal Beats Clever Rule.** For conversion-critical text, prefer "Richiedi sopralluogo gratuito" over clever slogans.

## 4. Elevation

The system uses a hybrid of tonal layering and soft elevation. Light pages should rely first on surface contrast, borders, and spacing; shadows are for important conversion containers. Dark LP variants may use stronger ambient shadows, but decorative glass should be rare and purposeful.

### Shadow Vocabulary

- **Form Lift** (`box-shadow: 0 12px 40px rgba(23, 28, 31, 0.08)`): Main form container on light pages.
- **Premium Card** (`box-shadow: 0 24px 60px -28px rgba(15, 23, 42, 0.42)`): Thank-you and dark-shell cards where the card must rise from a dramatic background.
- **Soft Shell** (`box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12)`): React app shell and large page panels.

### Named Rules

**The Form Gets the Depth Rule.** If only one thing is elevated on a viewport, it should be the form or the next action, not a decorative testimonial card.

**The Glass Is Not the Brand Rule.** Backdrop blur can support a dark hero, but it must not become the default surface language.

## 5. Components

### Buttons

- **Shape:** Pill-shaped for primary conversion actions (`9999px`), medium rounded only for smaller secondary controls.
- **Primary:** Orange/rust gradient or solid orange, white text, minimum height `52px`, strong font weight, full-width on mobile forms.
- **Hover / Focus:** Hover may deepen toward `#a63b00`; focus must keep a visible 2px outline or ring with strong contrast.
- **Secondary:** White or transparent surface with consultative-blue text. It should never compete visually with the primary action.

### Chips

- **Style:** Small rounded pills for local or trust markers such as "Monza e Brianza". Use surface tint plus blue or orange text, not all-caps generic eyebrows.
- **State:** Selected chips should have a clear filled background and visible text; do not rely on color alone.

### Cards / Containers

- **Corner Style:** Large rounded corners (`1.5rem`) for form shells and major cards; smaller radii for fields.
- **Background:** White on light pages, dark navy shells for premium confirmation or ads variants.
- **Shadow Strategy:** Elevate the form and important confirmation cards; keep supporting SEO content flatter.
- **Border:** Use `#dbe4ef` or warm outline tints. Avoid thick colored side borders.
- **Internal Padding:** `1rem` on dense mobile forms, `1.5rem` to `2rem` on larger cards.

### Inputs / Fields

- **Style:** Visible label, soft filled field, rounded `0.75rem`, minimum height `48px`, readable placeholder.
- **Focus:** Blue or orange focus ring with visible outline offset. The user should always know which field is active.
- **Error / Disabled:** Error text near the field, in plain Italian. Disabled submit states need opacity and cursor changes, plus loading copy when calls are pending.

### Navigation

- **Style:** The mini-site should use simple, local navigation: valuation request, how it works, Monza/Brianza guides, FAQ, contacts/privacy. Navigation should not hide the primary CTA.
- **Mobile:** Keep navigation compact and keep the valuation CTA reachable without burying the form.

### Admin Surfaces

- **Style:** Functional and quiet. Use the same typography and trust palette, but reduce decorative brand treatment. The admin exists for lead follow-up, not persuasion.
- **Components:** Prioritize tables or lead lists, filters, status chips, notes, and clear empty/error states.
- **Access:** Login and permission screens should feel secure and plain: Google sign-in, approved users only, no public marketing language.

### Signature Component: Local Valuation Path

Use a recurring pattern that explains the process in human steps: property context, contact details, local advisor follow-up, on-site valuation. This is more ownable than generic "features" cards and should anchor both the landing and future SEO pages.

### Future Logo Direction

If the logo is redesigned, avoid generic roof icons, abstract home outlines, and luxury monograms. A stronger direction would combine a local mark with valuation clarity: a restrained map-pin/threshold shape, a measuring line, or a civic Monza/Brianza cue. The mark should work in one color, on light and dark backgrounds, and fit beside the wordmark without needing crop hacks.

## 6. Do's and Don'ts

### Do:

- **Do** make Monza and Brianza feel native to the experience: page structure, local copy, FAQs, footer, and future guide pages should carry the territory naturally.
- **Do** design public pages for organic search first: useful headings, crawlable content, internal links, and clear local intent before decorative sections.
- **Do** use `#f26522` for primary actions and `#005fac` for consultative emphasis.
- **Do** keep form labels visible, touch targets at least about `48px`, and the primary CTA reachable on mobile.
- **Do** prefer one strong local proof element over several generic cards.
- **Do** write SEO pages as useful local explanations, not as repeated keyword blocks.
- **Do** keep future admin screens dense, legible, and task-oriented.
- **Do** consider a future logo refresh if it can make the brand feel more territorial, human, and memorable.

### Don't:

- **Don't** make the product feel like an automatic valuation portal that promises an instant price without seeing the property.
- **Don't** use aggressive real-estate ad patterns: fake urgency, pressure tactics, countdowns, or "limited slots" language without a real operational reason.
- **Don't** use cold luxury-agency styling as the default. Avoid black/gold, champagne neutrals, marble-premium cues, and distant copy.
- **Don't** drift into generic AI/SaaS landing patterns: repeated card grids, decorative gradient text, abstract badges, or template-like hero metrics.
- **Don't** hide form meaning in placeholders. Labels must remain visible.
- **Don't** use thick colored side borders, repeated uppercase eyebrows, or decorative glassmorphism as default surface language.
- **Don't** make admin screens look like marketing pages. Internal tools should favor clarity, speed, and trust over brand drama.
