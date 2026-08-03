# Fase B — summary (CTR + anti-cannibal)

**Data:** 2026-08-03  
**Skills:** `content-writer`, `humanizer`, verify on-page (`seo` principles; CLI `claude-seo` non richiesto)

## Perché niente CLI Python

La skill `seo` dice di eseguire `claude-seo setup` **solo** su `/seo setup` o riparazione esplicita. Fase B è copy/on-page su URL esistenti: non serve il runtime Chromium/Python.

## Cosa è cambiato

| ID | Cambio |
|----|--------|
| B1 | Title/meta `absolute` su home, `/monza`, `/brianza`, tipologiche, 8 leaf (evita taglio template `\| Valore Immobili`) + nicchia “sopralluogo gratis / senza mandato” |
| B2 | `/brianza` = hub **comuni**; title/intro non competono su “ville”; H2 esplicito → `/valutazione/ville-brianza`; tipologica con title/H1/intro answer-first “valutazione ville in Brianza” |
| B3 | Home + `/monza` spingono `/valutazione/appartamenti-monza`; related tipologiche in evidenza |
| B4 | H1 home: “Valutazione immobiliare a Monza con sopralluogo gratuito” |
| B5 | Blocco anti-AVM su `/monza`, `/brianza`, template leaf locali + tipologiche |
| B6 | FAQ tipologiche ampliate + `FAQPage` JSON-LD nel `FaqBlock` leaf |
| B7 | Related `/brianza` → Lissone/Brugherio + tipologiche; lista comuni invariata come indice |

## File toccati

- `web/src/app/page.tsx`
- `web/src/app/monza/page.tsx`
- `web/src/app/brianza/page.tsx`
- `web/src/app/valutazione/[slug]/page.tsx`
- `web/src/lib/property-types.ts`
- `content-writer-output/plans/MIGLIORAMENTO-ORGANICO.md`

## Done when (restante)

1. Commit + push (deploy)  
2. Mid-check GSC 2–4 sett.: winner URL su “valutazione ville in brianza”; CTR su striking distance  
3. Poi Fase C
