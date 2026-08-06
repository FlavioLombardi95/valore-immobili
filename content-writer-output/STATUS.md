# Stato SEO — valore-immobili.it

**Aggiornato:** 2026-08-06  
**Piano vivo:** [plans/MIGLIORAMENTO-ORGANICO.md](plans/MIGLIORAMENTO-ORGANICO.md) · inventario URL: [docs/SEO.md](../docs/SEO.md)  
**Canvas GSC:** aggiornato in-place (nessun canvas nuovo)

Unico report consolidato (sostituisce ACTION-PLAN, PHASE-A/B, SPRINT, SMOKE, LIGHTHOUSE e JSON grezzi).

---

## Dove siamo

| Area | Stato |
|------|--------|
| Fase A (GSC + audit) | Fatto |
| Fase B (anti-cannibal + title/H1/anti-AVM) | Ship `42db1dc` |
| Sprint accel (deepen + Fase C + 6 comuni) | Ship `04b4b62` |
| Lighthouse ~100 | Ship `78e85a9`…`554862a` |
| Mid-check GSC | **Aggiornato 2026-08-06** (dati fino al 2026-08-05; lag GSC ~1–2 gg) |

**KPI primario:** posizione media organica (non score lab).

---

## GSC mid-check — 2026-08-06

Property: `sc-domain:valore-immobili.it` · type `web` · aggregazione **byProperty** (non somma pagine).

| Finestra | Impressioni | Clic | CTR | Pos. media |
|----------|------------:|-----:|----:|-----------:|
| **28gg attuali** `2026-07-09 → 08-05` | **1024** | 0 | 0% | **30.6** |
| 28gg precedenti `2026-06-11 → 07-08` | 700 | 2 | 0.29% | 27.3 |
| 7gg `2026-07-30 → 08-05` | 258 | 0 | 0% | 32.1 |
| Check 5/08 `07-08→08-04` | 1004 | 0 | 0% | 30.3 |
| Baseline corretta `07-04→07-31` | **1066** | 0 | 0% | 29.8 |

Nota: il **2441** della baseline del 3/08 era la **somma impressioni per URL** (sovraconta). Il totale property reale era ~**1066**. Confrontare sempre byProperty.

### Lettura sintetica (6/08 vs 5/08)

1. **Flat vs ieri:** 1024 impr / pos 30.6 vs 1004 / 30.3 — nessun salto né crollo.
2. **Ville + gratuita stabili in striking distance:** ville ~pos **7**, gratuita ~pos **10**.
3. **Cannibal ville ancora aperto:** 28gg `/brianza` **117** vs `/ville-brianza` **45**; 7gg **27 vs 20** (lenta chiusura, non invertito).
4. **Nuovo:** su “gratuita” Google sparpaglia su `/monza`, home, FAQ — snippet confuso.
5. **0 clic** resta il collo di bottiglia.
6. **Leaf comuni:** ancora ≤7 impr.

### Top query 28gg

| Query | Impr | Pos |
|-------|-----:|----:|
| valutazione ville in brianza | 122 | **6.9** |
| valutazione ville monza brianza | 116 | 16.9 |
| valutazione gratuita immobile monza | 101 | **9.9** |
| valutazione immobile monza | 86 | 25.5 |
| valutazione immobili monza | 85 | 46.8 |
| valutazione immobiliare monza | 85 | 54.4 |
| valutazione appartamenti monza brianza | 83 | 36.3 |
| stima immobiliare monza | 82 | 62.8 |
| valutazione appartamenti monza | 76 | 61.6 |
| valutazione villa brianza | 16 | 10.8 |

### Top pagine 28gg (per URL; somma ≠ property)

| URL | Impr | Pos |
|-----|-----:|----:|
| `/monza` | 716 | 50.3 |
| `/` | 452 | 46.8 |
| `/vendere-casa-monza` | 376 | 73.0 |
| `/faq` | 344 | 55.1 |
| `/valutazione/appartamenti-monza` | 260 | 60.1 |
| `/brianza` | 220 | **14.1** |
| `/valutazione/ville-brianza` | 98 | 18.8 |
| leaf comuni | ≤7 | ~3–12 |

### Cannibal “valutazione ville in brianza” (query×page)

| Finestra | `/brianza` | `/ville-brianza` |
|----------|-----------:|-----------------:|
| 28gg | 117 @ 6.6 | 45 @ 18.2 |
| 7gg | 27 @ 6.1 | 20 @ 18.8 |

### Priorità immediate (dal dato)

1. **Chiudere cannibal ville** — tipologica ancora dietro; monitorare altri ~7gg.
2. **Snippet “gratuita”** — evitare sparpaglio su Monza/home/FAQ.
3. **Non inseguire head Monza pos 40+** finché ville/gratuita non convertono clic.
4. **Richiedi indicizzazione** leaf nuove + pilastro se non già fatto.

---

## Cosa è andato online

1. **Disambiguazione:** `/brianza` = hub comuni; tipologiche = winner ville/appartamenti  
2. **Title/meta/H1** nicchia sopralluogo/senza mandato (anche leaf)  
3. **Anti-AVM** su hub + leaf; FAQ tipologiche + schema  
4. **Pilastro** `/valutazione-online-o-sopralluogo`  
5. **6 comuni** unici: Seregno, Cesano Maderno, Limbiate, Vimercate, Giussano, Meda (Jaccard max ~0.33)  
6. **Lighthouse:** CTA contrasto AA, mappe al click, analytics differito  

Smoke post-B (title/H1/canonical/FAQ): **5/5 PASS**.

---

## Lighthouse mobile (CLI, post-fix)

| Pagina | Perf | A11y | BP | SEO |
|--------|-----:|-----:|---:|----:|
| Home | 98 | 100 | 100 | 100 |
| Seregno | 96 | 100 | 100 | 100 |
| Brianza | 93 | 100 | 100 | 100 |
| FAQ | 93 | 100 | 100 | 100 |

Non spingere Perf 93→98: poco impatto sul ranking vs effort.

---

## Prossimi check

1. **GSC** tra ~7gg: share `/ville-brianza` vs `/brianza` su query ville; primi clic su gratuita/ville  
2. Indicizzazione leaf nuove + pilastro  
3. Solo dopo segnale clic: altri comuni GSC-driven  

---

## Cosa non rifare

- Nuove guide acquisto / pagine €/mq vs portali  
- Audit PDF / DataForSEO senza bisogno  
- Commit di dump Lighthouse grezzi (ignorati in `.gitignore`)
- Confrontare “somma pagine” con totali property
