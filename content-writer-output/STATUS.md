# Stato SEO — valore-immobili.it

**Aggiornato:** 2026-08-24  
**Canvas GSC:** aggiornato in-place  

---

## GSC pull — 2026-08-24 (fine freeze 10gg)

| Finestra | Impressioni | Clic | Pos. media |
|----------|------------:|-----:|-----------:|
| **28gg** `07-27 → 08-23` | **1.262** | 0 | **35.3** |
| 7gg `08-17 → 08-23` | **319** | 0 | **37.7** |
| Freeze `08-14 → 08-23` | **478** | 0 | **38.5** |
| Pre-freeze `08-04 → 08-13` | **430** | 0 | **34.8** |
| Check 14/08 (28gg) | 1.099 | 0 | 32.0 |

### Lettura

1. **0 clic** nel freeze e nei 28gg. Unico clic storico: **2 luglio**, home, query `valutazione immobile monza`.
2. Volume su: 7gg **319** (era 280), freeze **478** vs pre **430**. Posizione media peggiora perché cresce la coda long-tail.
3. **Ville ok:** `valutazione ville in brianza` **132** @**7.2** (era 6.9). Cannibal 7gg invertito e stabile: `/ville-brianza` **29** @**5.2** vs `/brianza` **26** @**31.7**.
4. **Gratuita in caduta:** `valutazione gratuita immobile monza` da **11.0** (14/08) a **26.5** (28gg) / **54.3** (7gg). Winner `/monza` perso: sui 7gg FAQ 22 @57.6, home 21 @72.4, `/monza` 19 @74.5.
5. Leaf già live raccolgono: Seregno 53, Giussano 21, Cesano/Desio/Cologno ~9–10.

### Decisione 24/08

- **Ship 24/08 (intervento concreta):**
  - Winner `/monza` rinforzato (title/H1/intro).
  - FAQ/home/vendere/come-funziona: meno competizione su “valutazione gratuita”; CTA form-less → `/monza`.
  - Appartamenti: tolto “gratis” dal title.
  - Ville: title/meta CTR (`gratuita, senza mandato`).
  - Home form H2: “sopralluogo sul posto” (non “valutazione gratuita”).
- **Non fare:** scala nuovi comuni (0 clic). Non toccare cannibal ville/Lighthouse.
- **Misura:** mid-check tra **7–10 giorni** su pos. “gratuita” + share `/monza` vs FAQ/home.

### Non indicizzate (ispezione API 9/08)

**Rilevata, non indicizzata (8):**  
`/comprare-casa-monza`, `/valutazione/brugherio`, `/comprare-casa-brianza`, `/annunci-casa-monza`, `/spese-acquisto-casa`, `/mutuo-prima-casa`, `/offerta-acquisto-casa`, `/casa-nuova-o-usata`

**Sconosciuta (8):**  
`/valutazione-online-o-sopralluogo`, `/quartieri-monza`, `/documenti-acquisto-casa`, `/checklist-visita-immobile`, `/appartamenti-in-vendita-monza`, `/ville-in-vendita-brianza`, `/tempi-acquisto-casa`, `/agevolazioni-prima-casa`

**Indicizzate (21):** hub + tipologiche + quasi tutte le leaf comuni (incluse le 6 nuove).

Priorità link interni: pilastro, comprare-casa-monza, brugherio.

### Link interni shippati (2026-08-09)

Footer sitewide + related hub (`/`, `/monza`, `/brianza`, `/vendere-casa-monza`, `/faq`):

- Aggiunti: `/valutazione-online-o-sopralluogo`, `/valutazione/brugherio`
- Rinforzato: `/comprare-casa-monza`
- Rimosso dal footer: `/annunci-casa-monza` (bassa priorità)

Riesaminare coverage URL Inspection tra **7–10 giorni** (~16–19 ago).

### Mid-check formale

**24 agosto (fine freeze):** Ville ≥ Brianza **sì** e tenuto. Clic **no**. **No-go scala comuni.** Prossimo intervento: cannibal “gratuita” su `/monza`, non nuove pagine.

---

## Lighthouse mobile — 2026-08-09

Audit CLI su **37 URL** sitemap (lab). Canvas: `lighthouse-mobile-2026-08-09`.

| Area | Risultato |
|------|-----------|
| A11y / Best Practices | **100** su tutte |
| SEO | **100** (eccezione intermittente robots su `/come-funziona`) |
| Perf media | **~94** |
| Outlier | `/monza` **71** (TBT ~800 ms in quel run) |
| Perf &lt; 90 | monza, seregno, villasanta, muggio, annunci, comprare-brianza, documenti |

Non chaseare Perf sulle guide: KPI = GSC.
