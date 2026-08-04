# Stato SEO — valore-immobili.it

**Aggiornato:** 2026-08-04  
**Piano vivo:** [plans/MIGLIORAMENTO-ORGANICO.md](plans/MIGLIORAMENTO-ORGANICO.md) · inventario URL: [docs/SEO.md](../docs/SEO.md)

Unico report consolidato (sostituisce ACTION-PLAN, PHASE-A/B, SPRINT, SMOKE, LIGHTHOUSE e JSON grezzi).

---

## Dove siamo

| Area | Stato |
|------|--------|
| Fase A (GSC + audit) | Fatto |
| Fase B (anti-cannibal + title/H1/anti-AVM) | Ship `42db1dc` |
| Sprint accel (deepen + Fase C + 6 comuni) | Ship `04b4b62` |
| Lighthouse ~100 | Ship `78e85a9`…`554862a` |
| Mid-check GSC posizione media | Da fare tra ~7–14 gg dal deploy B/C/D |

**KPI primario:** posizione media organica (non score lab).

---

## Baseline GSC (2026-08-03, ~28gg)

- ~**2441** impressioni, **0** clic
- Striking distance: `valutazione ville in brianza` ~pos **7**; `valutazione gratuita immobile monza` ~pos **10–12**
- Cannibal critico: `/brianza` batteva `/valutazione/ville-brianza` su “ville”
- Health audit iniziale ~**76**/100 (on-page/CTR deboli; tecnico ok)

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

1. **GSC** giorno 7–14: winner URL su “ville”; posizione media su gratuita/ville  
2. Richiedi indicizzazione (se non fatto) su hub, tipologiche, pilastro, leaf nuove  
3. Solo dopo segnale: altri comuni GSC-driven  

---

## Cosa non rifare

- Nuove guide acquisto / pagine €/mq vs portali  
- Audit PDF / DataForSEO senza bisogno  
- Commit di dump Lighthouse grezzi (ignorati in `.gitignore`)
