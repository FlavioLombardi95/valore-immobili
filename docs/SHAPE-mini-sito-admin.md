# Design brief — Mini-sito SEO + admin lead

Confermato il 2026-07-02.

## Feature summary

Valore Immobili evolve from a single landing into a local SEO mini-site for Monza/Brianza, with one conversion path (on-site valuation request) and an internal admin to manage leads in Postgres. Organic search is the primary acquisition channel for the next months.

## Primary user action

Public: submit the valuation request form.  
Admin: review and update lead status after follow-up.

## Design direction

- North star: **Lo Sportello Locale**
- Color strategy: **Committed** (evolve current orange + consultative blue)
- References: local service counter, clear municipal info pages, practical lead forms (not luxury agency, not instant-estimate portals)

## Scope

- Fidelity: production-ready foundation (MVP)
- Breadth: 6 public SEO pages + thank-you + admin
- Interactivity: shipped form, phone verify, admin CRUD-lite
- Stack: Next.js on Vercel, Neon Postgres, Google OAuth allowlist

## Layout strategy

- Mobile: form first on conversion pages
- Desktop: content left, sticky form right on SEO pages
- Admin: dense list, filters, inline status and notes

## Key states

- Form: default, validating phone, submitting, error, success → `/grazie`
- Admin: loading, empty, unauthorized, list, update error
- SEO pages: always crawlable content + CTA proximity

## Sitemap v1

Indexable: `/`, `/monza`, `/brianza`, `/come-funziona`, `/faq`, `/vendere-casa-monza`  
Noindex: `/grazie`, `/admin/*`

## Next commands

- `/impeccable craft` — polish UI and migrate remaining copy/assets from legacy LP
- `/impeccable audit` — a11y/perf after deploy
- `/impeccable critique` — UX review homepage + SEO pages
