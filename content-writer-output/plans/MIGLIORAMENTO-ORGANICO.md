# Piano miglioramento organico — valore-immobili.it

**Data:** 2026-08-03 (rev. post-audit approfondito)  
**Premessa:** il sito è già solido. Non si ricostruisce: si **migliora CTR, disambigua URL, poi scala i comuni**.

**Angolo competitivo:** sopralluogo **gratuito**, **senza mandato**, mercato **locale** — non “numero in 60 secondi”.

**Stato Fase A:** completa → `content-writer-output/audit/ACTION-PLAN.md` + `gsc/BASELINE.md`

---

## 0. Stack skill (obbligatorio citarle in ogni fase)

| Skill | Uso |
|-------|-----|
| `seo-audit` | Audit, health score, action plan, verify post-deploy |
| `seo` | On-page/schema/sintesi; verify pezzi |
| `seo-cluster` | Cluster keyword prima di ondate comuni |
| `seo-content-brief` | Brief pilastro + ogni nuova leaf |
| `programmatic-seo` | Playbook location pages / template / linking |
| `seo-programmatic` | Quality gates thin content / index bloat |
| `programmatic-seo-expert` | Destination/bookmark test, SSR/AI bots, rollout a stadi |
| `content-writer` | Copy pagine |
| `humanizer` | Pass anti-AI su ogni pezzo pubblicato |
| GSC (`search-console-mcp`) | Baseline, cannibal, striking distance, mid-check |

**Pipeline pezzo:**  
`seo-content-brief` → `content-writer` → `humanizer` → verify (`seo` / `seo-audit`) → ship → GSC mid-check.

---

## 1. Insight Fase A (non negoziabili)

Da GSC + audit (`seo-audit` / `seo`):

1. **~2441 impr. / 0 clic** (28gg) → priorità snippet/CTR, non nuove guide.  
2. **Cannibal tipologiche:** `/brianza` ruba “valutazione ville in brianza” (128 impr., pos ~7) a `/valutazione/ville-brianza`.  
3. **Home/Monza** dominano le head “valutazione * monza”; tipologiche restano dietro.  
4. **Leaf comuni** uniche (Jaccard ~0.26–0.35) e SSR ok per Googlebot/GPTBot/ClaudeBot (`programmatic-seo-expert`).  
5. **Scalare comuni solo dopo** aver sistemato cannibal + striking distance (staged rollout expert).

Dettaglio: `audit/ACTION-PLAN.md`, `gsc/cannibalization-striking.json`.

---

## 2. Obiettivo e KPI

| Orizzonte | KPI | Target |
|-----------|-----|--------|
| 2–4 sett. post-B | CTR su query striking + tipologiche | >0 clic; CTR in crescita |
| 4–6 sett. | Share impr. ville su `/valutazione/ville-brianza` vs `/brianza` | tipologica recupera quota |
| 8–12 sett. | Clic organici /28gg | doppia cifra |
| Post-D | Lead `sourcePage=/valutazione/…` | quota rilevante |

---

## 3. Fasi

### Fase A — Misura e audit ✅

**Skills:** GSC + `seo-audit` + `seo` (+ check SSR `programmatic-seo-expert`)

- [x] A1 GSC baseline → `gsc/BASELINE.md`, aggiornato `docs/SEO.md`  
- [x] A2 Audit approfondito → `audit/ACTION-PLAN.md` (health ~76)

---

### Fase B — CTR + anti-cannibal su URL esistenti  ← **in review / ship**

**Skills:** `content-writer` · `humanizer` · verify `seo` / `seo-audit`  
**Niente URL nuove.**

| ID | Task | Skill |
|----|------|-------|
| B1 | Title/meta nicchia: `/`, `/monza`, tipologiche, 8 leaf (accorciare per non tagliare col template `\| Valore Immobili`) | writer + `seo` |
| B2 | **Disambiguare ville:** tipologica = winner intent “ville”; `/brianza` rimanda esplicitamente e non compete sullo stesso H2/title | writer + `seo` |
| B3 | **Disambiguare appartamenti:** stesso schema hub → `/valutazione/appartamenti-monza` | writer + `seo` |
| B4 | Home: allineare H1/hero all’intent valutazione+sopralluogo | writer + humanizer |
| B5 | Blocco anti-AVM su hub + template leaf | writer + humanizer |
| B6 | FAQ (+ schema dove utile) su tipologiche | writer + `seo` |
| B7 | Linking `/brianza` → leaf comuni (indice, non keyword ville) | writer |

**Done when:** deploy; GSC richiesti; dopo 2–4 sett. mid-check GSC (cannibal ville + CTR).

Implementato in codice (2026-08-03): vedi `audit/PHASE-B-SUMMARY.md`.

---

### Fase C — Pilastro nicchia (1 URL)

**Skills:** `seo-content-brief` → `content-writer` → `humanizer` → `seo-audit` (page)

- Slug candidato: `/valutazione-online-o-sopralluogo`  
- Intent: post-AVM; CTA form; link Monza/Brianza/tipologiche/comuni esempio  
- In sitemap + link da home/FAQ/come-funziona

---

### Fase D — Comuni (solo post mid-check B)

**Skills:** `programmatic-seo-expert` (D0) → `seo-cluster` (D1) → `seo-content-brief` + writer + humanizer + `programmatic-seo` / `seo-programmatic` (D2)

- D0 Qualify: ≥10 data point/comune; destination + bookmark test  
- D1 Cluster  
- D2 Ondata: Seregno, Cesano Maderno, Limbiate, Vimercate, Giussano, Meda (2/sett.)  
- D3 Altri comuni solo GSC-driven  

**Stop:** indexation/engagement flat → non aggiungere URL (`programmatic-seo-expert`).

---

### Fase E — Manutenzione

**Skills:** `seo-audit` campione; GSC periodico  
Guide acquisto: solo link fix. No GBP finché non in PRODUCT.

---

## 4. Principi (`programmatic-seo-expert`)

1. Migliorare prima di moltiplicare (B/C prima di D).  
2. Unicità per URL (già ok sulle 8 leaf — mantenere).  
3. SSR già ok — non rompere HTML utile.  
4. Answer-first (40–60 parole).  
5. Index discipline.  
6. Misura: GSC + lead `sourcePage`.

---

## 5. Checklist

- [x] A1 GSC + `docs/SEO.md`  
- [x] A2 `seo-audit` / `seo` approfondito  
- [x] **B1** Title/meta (`writer`, `seo`, `humanizer`)  
- [x] **B2** Disambiguare ville (`writer`, `seo`)  
- [x] **B3** Disambiguare appartamenti (`writer`, `seo`)  
- [x] **B4** H1/hero home  
- [x] **B5** Blocco anti-AVM  
- [x] **B6** FAQ tipologiche  
- [x] **B7** Linking Brianza → comuni  
- [ ] Mid-check GSC post-B (2–4 sett. post-deploy) — anche check giorno 7  
- [x] **C1** Pilastro `/valutazione-online-o-sopralluogo`  
- [x] **D2** 6 leaf: Seregno, Cesano Maderno, Limbiate, Vimercate, Giussano, Meda  
- [ ] **Lighthouse** su tutte le pagine indicizzabili (post-ship)  
- [ ] **D0–D3** ulteriori comuni solo GSC-driven

---

## 6. Cosa non fare

- Rebuild hub/guide.  
- 20 leaf prima del mid-check B.  
- Pagine prezzi €/mq vs portali.  
- GBP / local pack skill finché fuori prodotto.

---

## 7. Prossimo passo

**Ship Fase B** (commit + push `main`), poi mid-check GSC tra 2–4 settimane (cannibal “ville” + CTR striking distance). Poi **Fase C** (pilastro online vs sopralluogo).
