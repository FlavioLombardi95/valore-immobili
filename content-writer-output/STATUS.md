# Stato SEO — valore-immobili.it

**Aggiornato:** 2026-08-25  
**Canvas GSC:** aggiornato in-place  

---

## GSC pull — 2026-08-25 (post-ship 24/08)

| Finestra | Impressioni | Clic | Pos. media |
|----------|------------:|-----:|-----------:|
| **28gg** `07-28 → 08-24` | **1.226** | 0 | **35.5** |
| 7gg `08-18 → 08-24` | **251** | 0 | **37.0** |
| Check 24/08 (28gg) | 1.262 | 0 | 35.3 |
| Check 24/08 (7gg) | 319 | 0 | 37.7 |

### Lettura

1. **0 clic** su tutte le finestre. Unico clic storico: **2 luglio**, home, query `valutazione immobile monza`.
2. Volume 7gg **251** (era 319): la finestra scorre via i picchi 16–17 ago. Non è un crollo reale.
3. **Ville ok e in miglioramento:** `valutazione ville in brianza` **126** @**7.2** (28gg); sui 7gg pos **6.2**. Cannibal: `/ville-brianza` **24** @**5.1** vs `/brianza` **22** @**31.4**.
4. **Gratuita — dati ancora pre-ship:** sui 7gg FAQ **18** @**56.8**, home **17** @**73.6**, `/monza` **15** @**74.7** (5ª). Su 28gg `/monza` resta leader (**93** @**33**). Intervento 24/08 non misurabile (lag 7–10 gg).
5. **3 guide vendita nuove:** 0 impressioni (non indicizzate o lag).
6. **Opportunità secondaria:** `vendere casa a monza` **52** @**28.7** (28gg) → `/vendere-casa-monza`.

### Decisione 25/08

- **Ship 25/08 (seconda ondata + leve traffico):**
  - De-ottimizzazione aggressiva “gratuita” su FAQ, home, appartamenti, come-funziona, vendere (anchor neutri → `/monza`).
  - `/monza` rinforzata su secondarie: H2 **stima immobiliare a Monza** (86 impr @66.5).
  - `/vendere-casa-monza` H1/intro più esatti su query `vendere casa a monza` (52 @28.7).
  - **Nuova guida** `/valore-al-metro-quadro-monza` (query GSC 51 impr @53.9).
  - Ville: meta CTR più diretta (“Quanto vale la tua villa…”).
  - Footer + related: link a guide vendita / €/mq per crawl.
- **Fare subito (GSC manuale):** indicizzazione
  - `/valore-al-metro-quadro-monza`
  - `/costo-vendere-casa-monza`, `/classe-energetica-valore-casa`, `/ristrutturare-prima-di-vendere`
  - `/comprare-casa-monza`, `/valutazione-online-o-sopralluogo`
- **Non fare:** scala comuni, rollback ville.
- **Misura:** mid-check ~**1–3 settembre** su pos. “gratuita”, share `/monza`, impr su €/mq + vendere + stima.

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
- **Ship 24/08 (3 guide vendita nuove):**
  - `/costo-vendere-casa-monza`
  - `/classe-energetica-valore-casa`
  - `/ristrutturare-prima-di-vendere`
  - Link da `/vendere-casa-monza` e `/monza`; CTA valuation → `/monza`.
- **Non fare:** scala nuovi comuni (0 clic). Non toccare cannibal ville/Lighthouse.
- **Misura:** mid-check tra **7–10 giorni** su pos. “gratuita” + share `/monza` vs FAQ/home; coverage delle 3 guide nuove.

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
