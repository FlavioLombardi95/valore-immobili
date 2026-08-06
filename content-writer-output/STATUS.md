# Stato SEO — valore-immobili.it

**Aggiornato:** 2026-08-06 (sera, post sprint URL winner)  
**Piano vivo:** [plans/MIGLIORAMENTO-ORGANICO.md](plans/MIGLIORAMENTO-ORGANICO.md) · inventario URL: [docs/SEO.md](../docs/SEO.md)  
**Canvas GSC:** [gsc-midcheck-2026-08-05](../../.cursor/projects/Users-flavio-lombardi-Desktop-valore-immobili/canvases/gsc-midcheck-2026-08-05.canvas.tsx) (unico, aggiornato in-place)

---

## Dove siamo

| Area | Stato |
|------|--------|
| Fase A (GSC + audit) | Fatto |
| Fase B (anti-cannibal + title/H1/anti-AVM) | Ship `42db1dc` |
| Sprint accel (deepen + Fase C + 6 comuni) | Ship `04b4b62` |
| Lighthouse ~100 | Ship `78e85a9`…`554862a` |
| **Sprint organico CTR (URL winner)** | **Ship `fc6fd86`** (2026-08-06) |
| Mid-check GSC post-sprint | **Target 2026-08-13 → 08-16** |

**KPI primario:** posizione media organica + primi clic (non score lab).

---

## Sprint organico CTR — ship `fc6fd86`

Zero URL nuove. Winner sulle esistenti:

1. **Ville:** `/brianza` ripulita da H2/copy che competevano; tipologica `/valutazione/ville-brianza` rinforzata (deepen anti-online + link interni con anchor esatto).
2. **Gratuita Monza:** `/monza` = winner (title/H1 orientati a “valutazione gratuita immobile Monza”); home title disambiguata; FAQ/pilastro puntano a `/monza`.

Smoke live title/H1/canonical (5/5 PASS):

| URL | Title live |
|-----|------------|
| `/` | Sopralluogo immobiliare Monza e Brianza \| Valore Immobili |
| `/monza` | Valutazione gratuita immobile Monza: sopralluogo \| … |
| `/brianza` | Valutazione immobiliare in Brianza: comuni \| … |
| `/valutazione/ville-brianza` | Valutazione ville in Brianza: sopralluogo gratis \| … |
| `/valutazione/appartamenti-monza` | Valutazione appartamenti Monza: sopralluogo gratis \| … |

---

## GSC — indicizzazione (2026-08-06)

Sitemap: tutte le URL sprint **presenti** in `/sitemap.xml`.

Ispezione API URL Inspection:

| URL | Coverage |
|-----|----------|
| `/valutazione/ville-brianza` | Submitted and indexed (last crawl ~23/07) |
| `/brianza` | Submitted and indexed |
| `/monza` | Submitted and indexed |
| `/valutazione-online-o-sopralluogo` | **URL is unknown to Google** |
| `/valutazione/seregno` | **unknown** |
| `/valutazione/cesano-maderno` | **unknown** |
| `/valutazione/limbiate` | **unknown** |
| `/valutazione/vimercate` | **unknown** |
| `/valutazione/giussano` | **unknown** |
| `/valutazione/meda` | **unknown** |

Indexing API (`urlNotifications:publish`) = 403 (non abilitata sul progetto OAuth).  
**Azione manuale richiesta:** in GSC → Controllo URL → **Richiedi indicizzazione** sulle 7 URL “unknown” (+ opzionale ricrawl di `/monza` e `/ville-brianza` dopo lo ship title).

Checklist:

- [ ] Richiedi: pilastro + 6 leaf nuove  
- [ ] Richiedi ricrawl: `/monza`, `/valutazione/ville-brianza`  
- [x] Ispezione API eseguita  
- [x] Sitemap verificata  

---

## GSC mid-check — 2026-08-06 (pre-sprint, dati fino al 5/08)

Property: `sc-domain:valore-immobili.it` · byProperty.

| Finestra | Impressioni | Clic | Pos. media |
|----------|------------:|-----:|-----------:|
| 28gg `07-09 → 08-05` | **1024** | 0 | **30.6** |
| 28gg prec. | 700 | 2 | 27.3 |
| 7gg | 258 | 0 | 32.1 |

Cannibal ville 7gg: `/brianza` 27 vs `/ville-brianza` 20. Gratuita sparpagliata su Monza/home/FAQ (motivo dello sprint).

---

## Prossimo mid-check (Fase 3) — **13–16 agosto 2026**

Aggiornare lo **stesso** canvas + questa sezione.

**Go / no-go scala comuni:**

| Segnale | Azione |
|---------|--------|
| ≥1 clic su ville o gratuita **oppure** share 7gg Ville ≥ Brianza sulla query ville | OK ondata comuni successiva |
| Ancora 0 clic e cannibal invariato | Solo altro giro snippet/link; **niente** nuovi comuni |

---

## Cosa è andato online (storico)

1. Disambiguazione hub vs tipologiche (Fase B)  
2. Title/meta/H1 nicchia; anti-AVM; FAQ tipologiche  
3. Pilastro `/valutazione-online-o-sopralluogo`  
4. 6 comuni: Seregno, Cesano Maderno, Limbiate, Vimercate, Giussano, Meda  
5. Lighthouse: CTA AA, mappe al click, analytics differito  
6. **Sprint CTR 06/08:** winner `/monza` + tipologica ville  

---

## Cosa non rifare

- Nuove guide €/mq / blog generico  
- Inseguire head Monza pos 40+  
- Nuova URL `/valutazione-gratuita-*`  
- Chase Lighthouse / somma pagine vs property  
- Nuovi comuni prima del go Fase 3  
