# Product

## Register

brand

## Users

The primary audience is property owners in Monza and Brianza who are seriously considering selling within the next 3-12 months and want a real estimate before deciding what to do.

The secondary audience includes buyers and people researching the local property market in Monza and Brianza. They are not the main conversion target, but mini-site content should help them understand the area, local demand, and valuation context.

Users usually arrive with uncertainty: they may not know the real market value of the property, they may distrust automatic online estimates, and they may fear sales pressure from agencies. The experience should reduce friction quickly and make the next step feel concrete, local, and low risk.

## Product Purpose

Valore Immobili helps people request a free, on-site property valuation in Monza and Brianza. The product exists to generate qualified lead requests for real estate consultations, while building enough trust that users feel comfortable sharing contact details and property information.

The site should evolve from a single landing page into a focused local mini-site: one conversion path for valuation requests, plus supporting pages about Monza, Brianza, property valuation, and local selling context. Organic SEO is the primary acquisition strategy for the next months because there is no meaningful marketing budget; every new public page should justify itself through search intent, local usefulness, and conversion proximity.

Success means a healthy volume of form submissions, strong perceived professionalism, and leads that are relevant enough for a follow-up call and possible on-site visit.

The operational side is a lightweight mini-admin for lead management. Leads are stored in Vercel Postgres (not Google Sheets). Access is protected with Google login and an allowlist of approved admin emails.

## Brand Personality

Local, trustworthy, direct, practical, and conversion-minded.

The voice should be clear and grounded: explain what happens, who contacts the user, why an on-site valuation is more reliable than an automatic estimate, and why there is no obligation. It should sound like a serious local advisor, not a national portal or a pushy real estate ad.

## Anti-references

Do not make the experience feel like an automatic valuation portal that promises an instant number without seeing the property.

Do not use aggressive real estate ad patterns: fake urgency, inflated claims, pressure tactics, countdowns, or copy that makes the user feel trapped once they submit the form.

Do not push a cold luxury-agency tone. Premium is acceptable only when it supports clarity and trust; the brand should stay accessible and local.

Do not drift into generic AI/SaaS landing-page language or visuals: repeated cards, generic badges, gradient-heavy sections, abstract claims, or design patterns that could belong to any unrelated startup.

## Design Principles

Lead with local trust. Monza and Brianza should feel like the reason the service exists, not a keyword inserted for SEO.

Make the next step obvious. Every important page should make it clear that the user can request a free on-site valuation, what information is needed, and what happens after submission.

Qualify without discouraging. The site should attract owners who are realistically considering a sale, while still giving useful context to people who are earlier in the decision.

Prefer proof over persuasion. Use concrete process details, local context, transparent expectations, and helpful answers instead of hype.

Build for organic search without sounding written for search. SEO pages should answer real local questions, use natural Italian, and avoid repetitive keyword stuffing. Prioritize local pages and informational content that can rank without paid traffic.

Keep operations lightweight. The admin surface should solve lead visibility, filtering, status updates, and follow-up notes without introducing a full CRM.

## Accessibility & Inclusion

Use WCAG AA as the practical baseline. Body text and form labels need strong contrast, visible focus states, labels must remain visible after typing, and mobile touch targets should stay comfortable.

The form must be usable on small screens without excessive scrolling or cognitive load. Error messages should be specific, close to the field, and written in plain Italian.

Motion, if used, should be subtle and must respect reduced-motion preferences. The conversion path should not depend on animation, hover-only behavior, or color alone.

## Documentation map

| Doc | Role |
|-----|------|
| `docs/FRONTEND.md` | Single source for public UI / form / Hallmark–Impeccable decisions |
| `docs/SEO.md` | Search Console, URL inventory, SEO roadmap |
| `DESIGN.md` | Visual tokens (colors, type, components) |
| `PRODUCT.md` | This file — product scope and voice |
