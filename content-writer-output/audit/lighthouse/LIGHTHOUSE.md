# Lighthouse / Unlighthouse sweep — valore-immobili.it

**Data:** 2026-08-04
**Skills:** `core-web-vitals` (Addy), `lighthouse` (onnokh), runtime `claude-seo` (`unlighthouse_run.py` + `pagespeed_check.py`)
**Device:** mobile

## Esito sintetico

| Sorgente | Verdetto |
|----------|----------|
| **Unlighthouse** (29 URL, throttling simulate) | SEO **100**; BP ~100; A11y ~96; Perf media **~81** (home/guide ~56–60) |
| **PSI** (6 URL chiave) | Perf **98–100**, SEO 100, A11y 96–97 |

Nota: Unlighthouse throttla più duro di PSI → Perf più bassa sulla stessa URL. Per Google conta soprattutto il **field CrUX**; il lab serve a prioritizzare fix.

## Cosa piace già

- SEO Lighthouse **100/100** su tutte le 29 route
- Best Practices quasi sempre 100
- Leaf valutazione / pilastro: Perf Unlighthouse spesso 92–100
- PSI sulle URL critiche: Perf 98–100

## Cosa migliorare

1. Performance lab home + guide acquisto (Unlighthouse ~56–60): tipicamente LCP/hero e peso risorse
2. Accessibility ~95–96 (piccoli gap UX)
3. Crawl Unlighthouse: 29 route (dynamic sampling); opzionale riesecuzione con sampling off

### PSI mobile — URL chiave

| Pagina | Perf | A11y | BP | SEO | LCP |
|--------|-----:|-----:|---:|----:|-----|
| brianza | 99 | 97 | 96 | 100 | 2.0 s |
| home | 99 | 97 | 100 | 100 | 2.1 s |
| monza | 99 | 96 | 100 | 100 | 2.1 s |
| valutazione-online-o-sopralluogo | 100 | 96 | 100 | 100 | 1.8 s |
| valutazione-seregno | 99 | 96 | 100 | 100 | 2.1 s |
| valutazione-ville-brianza | 98 | 96 | 100 | 100 | 2.3 s |

### Unlighthouse — peggiori Perf

| URL | Perf | A11y | BP | SEO |
|-----|-----:|-----:|---:|----:|
| `/appartamenti-in-vendita-monza` | 56 | 95 | 100 | 100 |
| `/` | 57 | 96 | 100 | 100 |
| `/annunci-casa-monza` | 57 | 96 | 100 | 100 |
| `/tempi-acquisto-casa` | 57 | 95 | 100 | 100 |
| `/faq` | 58 | 96 | 100 | 100 |
| `/mutuo-prima-casa` | 60 | 95 | 100 | 100 |
| `/comprare-casa-brianza` | 60 | 96 | 100 | 100 |
| `/offerta-acquisto-casa` | 61 | 95 | 100 | 100 |

### Unlighthouse — migliori Perf

| URL | Perf |
|-----|-----:|
| `/vendere-casa-monza` | 99 |
| `/checklist-visita-immobile` | 99 |
| `/come-funziona` | 99 |
| `/valutazione/brugherio` | 99 |
| `/valutazione/villasanta` | 100 |
| `/valutazione/giussano` | 100 |

### Opportunità Perf (home Unlighthouse)

- **Total Blocking Time** — 8,450 ms (score 0, weight 30)
- **Largest Contentful Paint** — 2.5 s (score 0.89, weight 25)
- **Speed Index** — 39.9 s (score 0, weight 10)

### A11y fail (home)

- Background and foreground colors do not have a sufficient contrast ratio.

### Audit deboli più frequenti

- `color-contrast` ×29: Background and foreground colors do not have a sufficient contrast ratio.
- `uses-long-cache-ttl` ×29: Serve static assets with an efficient cache policy
- `render-blocking-resources` ×29: Eliminate render-blocking resources
- `legacy-javascript` ×29: Avoid serving legacy JavaScript to modern browsers
- `legacy-javascript-insight` ×29: Legacy JavaScript
- `network-dependency-tree-insight` ×29: Network dependency tree
- `render-blocking-insight` ×29: Render blocking requests
- `max-potential-fid` ×25: Max Potential First Input Delay
- `forced-reflow-insight` ×23: Forced reflow
- `total-blocking-time` ×21: Total Blocking Time
- `speed-index` ×13: Speed Index
- `mainthread-work-breakdown` ×12: Minimize main-thread work

## Artefatti

- `unlighthouse-mobile/`
- `psi-*.json`
- `_parsed.json`

## Next

- Ottimizzare LCP home/guide se si vuole alzare lab Perf
- Fix A11y minori
- Confrontare con CrUX field quando disponibile (`core-web-vitals`)
