# SEO — valore-immobili.it

Documento operativo. Ultimo aggiornamento: **29 luglio 2026**.

Fonte codice: mini-sito Next.js in `web/`.  
Fonte dati: Google Search Console (Web, ultimi 28 giorni ≈ 22 giu – 18 lug 2026).

---

## 1. Contesto e obiettivi

| Voce | Scelta |
|------|--------|
| Obiettivo primario | Lead organici compra-vendita (valutazione / sopralluogo + consulenza acquisto) |
| Geo | **Monza e Brianza** (tutti i comuni/quartieri della zona operativa) |
| Paid | Google Ads limitato; organico = canale principale |
| Modello | Lead gen, no brand agenzia, no Google Business Profile, no NAP directory |
| Fuori scope | Blog generico, competitor benchmarking strutturato, Milano come focus |

Successo = più **clic qualificati** sulle query di valutazione, poi lead. Le impressioni da sole non bastano.

---

## 2. Stato attuale (GSC)

**Baseline aggiornata:** 2026-08-03 → vedi `content-writer-output/gsc/BASELINE.md` (raw: `baseline-raw.json`).  
Property: `sc-domain:valore-immobili.it`. Finestre: 28gg `2026-07-04→07-31`, ~90gg `2026-05-03→07-31`.

### Metriche aggregate (28 giorni, luglio 2026)

| Metrica | Valore | Lettura |
|---------|--------|---------|
| Impressioni | **~2.441** (somma pagine) | Google mostra il sito su più URL |
| Clic | **0** | Collo di bottiglia = posizione + CTR/snippet |
| Pagine con impr. | 13 | Hub + tipologiche + poche leaf |

### Query top (28gg) — ancora tutto “valutazione/stima”

| Query | Impr. | Pos. media |
|-------|------:|----------:|
| valutazione ville in brianza | 128 | **7.1** (striking distance) |
| valutazione ville monza brianza | 118 | 16.6 |
| valutazione gratuita immobile monza | 104 | **9.9** |
| valutazione immobili / immobiliare / immobile monza | ~90 ciascuna | 22–55 |
| stima immobiliare monza | 82 | 59.7 |
| valutazione appartamenti monza (+ brianza) | ~82–85 | 39–61 |

### Pagine top (28gg)

| URL | Impr. | Pos. media |
|-----|------:|----------:|
| `/monza` | 757 | 47.8 |
| `/` | 474 | 42.1 |
| `/vendere-casa-monza` | 376 | 71.9 |
| `/faq` | 358 | 54.2 |
| `/brianza` | 217 | **14.0** (miglior hub) |
| `/valutazione/appartamenti-monza` | 172 | 58.5 |
| `/valutazione/ville-brianza` | 72 | 18.2 |
| Leaf comuni (Desio, Lissone, …) | 1–4 ciascuna | spesso **3–10** ma volume minimo |

**Insight:** priorità = CTR/snippet + spingere query già in pos. ~7–15 (ville Brianza, valutazione gratuita). I comuni rankano meglio in assoluto ma con pochissime impr.: servono più domanda aggregata + linking, non solo nuove URL.

### Cannibalizzazione (GSC ~90gg, audit A2 approfondito)

**Skills:** GSC + `seo-audit` / `seo` — dettaglio in `content-writer-output/gsc/cannibalization-striking.json`.

| Query | URL dominante (impr.) | URL dedicata dietro |
|-------|----------------------|---------------------|
| valutazione ville in brianza | `/brianza` (~128, pos ~7) | `/valutazione/ville-brianza` |
| valutazione * monza (head) | `/` e `/monza` | tipologiche / FAQ |
| valutazione appartamenti monza | `/` / `/monza` | `/valutazione/appartamenti-monza` |

**Implicazione Fase B:** disambiguare tipologiche (soprattutto ville) prima di nuove leaf comuni.

**Fase B (codice, 2026-08-03):** title/meta nicchia + H1 home; `/brianza` = hub comuni (non intent ville); hub→tipologiche; blocco anti-AVM; FAQ+schema tipologiche. Dettaglio: `content-writer-output/audit/PHASE-B-SUMMARY.md`. Mid-check GSC 2–4 sett. post-deploy.

### Storico (riferimento precedente)

Fonte precedente in questo doc: GSC Web ≈ 22 giu – 18 lug 2026 (1 clic, stesse dinamiche). Sostituito dalla baseline agosto sopra. Audit on-page: `content-writer-output/audit/ACTION-PLAN.md` (health ~76).
---

## 3. Inventario URL pubblico (codice)

### Indicizzabili (sitemap)

| Path | Ruolo | Form |
|------|--------|------|
| `/` | Hub conversione | Si |
| `/monza` | Hub geo Monza | Si |
| `/brianza` | Hub geo Brianza + indice comuni | Si |
| `/valutazione/{comune}` | Leaf geo (8 comuni vicini a Monza) | Si |
| `/valutazione/appartamenti-monza` | Tipologica appartamenti | Si |
| `/valutazione/ville-brianza` | Tipologica ville / indipendenti | Si |
| `/come-funziona` | Processo | No (solo CTA) |
| `/faq` | FAQ + FAQPage schema | No (solo CTA) |
| `/vendere-casa-monza` | Guida vendita | No (solo CTA) |
| `/comprare-casa-monza` | Hub guida acquisto | No (solo CTA) |
| `/{slug}` guide acquisto | 13 guide (annunci, spese, mutuo, …) | No (solo CTA) |

**Totale sitemap target:** ≥ 30 URL (7 core + 8 comuni + 2 tipologiche + 13 guide = **30**).
Con sprint accelerazione: +1 pilastro C + 6 comuni → **≥ 37** URL indicizzabili.

Dati guide: `web/src/lib/guides.ts`. Route: `web/src/app/[slug]/page.tsx`.

### Guide acquisto (`/{slug}`)

| Slug | Focus |
|------|--------|
| `comprare-casa-brianza` | Acquisto nei comuni della Brianza |
| `annunci-casa-monza` | Come leggere i portali + link Immobiliare/Idealista/Casa.it |
| `quartieri-monza` | Zone di Monza per chi compra |
| `spese-acquisto-casa` | Imposte, notaio, costi accessori |
| `mutuo-prima-casa` | Finanziamento e tempi |
| `offerta-acquisto-casa` | Proposta e valori locali |
| `documenti-acquisto-casa` | Visure, APE, conformità |
| `checklist-visita-immobile` | Controlli in visita |
| `appartamenti-in-vendita-monza` | Focus condominio + annunci |
| `ville-in-vendita-brianza` | Focus indipendenti + annunci |
| `casa-nuova-o-usata` | Trade-off nuovo vs usato |
| `tempi-acquisto-casa` | Dalla visita al rogito |
| `agevolazioni-prima-casa` | Requisiti + link Agenzia Entrate / Notariato |

Link esterni: portali annunci (coerenti col pezzo) + fonti istituzionali (Agenzia Entrate, Notariato, Comune, Banca d’Italia). Non sostituiscono la CTA valutazione.

### Prima ondata comuni (`/valutazione/...`)

Lissone, Vimodrone, Brugherio, Villasanta, Muggio, Desio, Concorezzo, Cologno Monzese.

Dati in `web/src/lib/localities.ts`.

### Tipologiche (`/valutazione/...`)

| Slug | Focus |
|------|--------|
| `appartamenti-monza` | Condominio / piano / spese a Monza |
| `ville-brianza` | Ville e case indipendenti in Brianza |

Dati in `web/src/lib/property-types.ts`. Stessa route dinamica dei comuni.

### Non indicizzate / private

| Path | Note |
|------|------|
| `/grazie` | `noindex` |
| `/admin`, `/api/*` | disallow in robots |

---

## 4. Decisioni di prodotto / SEO (luglio 2026)

### 4.1 Form sulle pagine

| Tipo pagina | Form |
|-------------|------|
| Hub: `/`, `/monza`, `/brianza` | **Si** (sticky) |
| Leaf geo: `/valutazione/{comune}` | **Si** (intent valutazione) |
| Tipologiche: `/valutazione/appartamenti-monza`, `/valutazione/ville-brianza` | **Si** |
| Guide e supporto: `/faq`, `/come-funziona`, `/vendere-casa-monza`, `/comprare-casa-monza`, guide `/{slug}` | **No** — CTA verso `/#richiesta` |

Implementato via `showForm` in `SeoPageLayout`.

### 4.2 Cluster “comprare casa”

Hub: `/comprare-casa-monza` (+ related alle guide).  
13 guide flat in `guides.ts` (sitemap ≥ 30 URL).  
Tono: utile a chi compra; conversione verso consulenza acquisto sul hub, in parallelo alla valutazione per chi vende.

### 4.3 Comuni e quartieri

Prima ondata live (8 comuni vicini a Monza): vedi §3.  
Ogni leaf include blocco **contesto locale** (zone, collegamenti, errori tipici) + max 1–2 link istituzionali/trasporto.  
Prossime ondate: altri comuni MB + quartieri Monza, sempre con copy specifico.

---

## 5. Diagnosi (perché quasi 0 clic)

1. **Posizione SERP tipicamente bassa** (storicamente ~pagina 2): anche con title buoni, CTR naturale è bassissimo.
2. **Snippet non differenziano** abbastanza da portali stima automatica / agenzie (stesse query, competitor più noti).
3. **Inventory tipologiche** (appartamenti, ville) live sotto `/valutazione/…` — da misurare CTR/posizioni 2–4 settimane post-indicizzazione.
4. Aggiungere solo “comprare casa” **non** sblocca i 1.5k impressioni di valutazione: serve lavoro su title/description + pagine allineate a quelle query.

---

## 6. Roadmap ordinata

### Fase A — Quick win CTR (senza nuove URL)

1. [x] Revisione **title + meta description** di `/`, `/monza` e `/brianza` (lug 2026): keyword query GSC + differenziatore “sopralluogo / non algoritmo”.
2. [x] JSON-LD **Service + Organization** in `web/src/lib/structured-data.ts` (layout globale).
3. In GSC: richiedere indicizzazione dopo deploy; monitorare CTR 2–4 settimane.

### Fase B — Layout conversione vs contenuto

1. [x] Rimuovere form sticky da `/faq` e `/come-funziona` (CTA link)
2. [x] Form off su guide vendere/comprare
3. [x] Form on hub valutazione (`/`, `/monza`, `/brianza`) e leaf `/valutazione/*`

### Fase C — Nuove URL (priorità domanda)

1. [x] Prima ondata: 8 comuni vicini a Monza
2. [x] `/comprare-casa-monza`
3. [x] Title/description CTR su home e `/monza` (+ `/brianza`)
4. [x] JSON-LD Service + Organization
5. [x] Tipologiche: `/valutazione/appartamenti-monza`, `/valutazione/ville-brianza`
6. [x] Cluster guide acquisto (13 URL) + hub comprare rafforzato
7. [ ] Seconda ondata comuni / quartieri Monza

### Fase D — Misura

- GSC Query + Pagine ogni 14 giorni
- Aggiornare **§2** di questo file a ogni revisione
- Dopo deploy: richiedere indicizzazione delle nuove URL in GSC

---

## 7. Checklist tecnica (repo)

- [x] Mini-sito multi-pagina + sitemap `/sitemap.xml`
- [x] robots: disallow `/admin`, `/grazie`, `/api/`
- [x] Redirect www → apex (`vercel.json`)
- [x] Canonical per pagina SEO
- [x] FAQPage JSON-LD su `/faq`
- [x] Form non sticky su pagine informative
- [x] `/comprare-casa-monza`
- [x] Prima ondata comuni `/valutazione/*`
- [x] Service + Organization JSON-LD globale
- [x] Title/description ottimizzati CTR (home, monza, brianza)
- [x] Tipologiche appartamenti + ville sotto `/valutazione/`
- [x] Cluster 13 guide acquisto + sitemap ≥ 30
- [ ] Seconda ondata comuni / quartieri Monza
- [ ] Richiedere indicizzazione GSC post-deploy (incl. tipologiche + guide)

---

## 8. Azioni manuali GSC (ricorrenti)

1. Sitemap inviata: `https://valore-immobili.it/sitemap.xml`
2. Dopo ogni release SEO: Controllo URL sulle pagine touchate
3. Esportare Query + Pagine (28g) e aggiornare §2 di questo file
4. Non giudicare una release prima di **14–28 giorni** di dati

---

## 9. Domande aperte

Già deciso:
1. Prima leaf geo: **8 comuni** a ridosso di Monza (Lissone, Vimodrone, Brugherio, Villasanta, Muggiò, Desio, Concorezzo, Cologno Monzese) — copy specifico per comune, non template clone.
2. Tone “comprare casa”: guida mercato + CTA al form home (nessun form dedicato).

Aperte (non bloccanti):
1. Lead solo residenziale o anche box/commerciali?
2. Ordine della **seconda ondata** (altri comuni / quartieri Monza)?

---

## 10. Riferimenti codice e documenti

Indice docs: [`README.md`](README.md).

| Area | Path |
|------|------|
| **UI / layout / form / Hallmark** | [`FRONTEND.md`](FRONTEND.md) |
| Pagine SEO | `web/src/app/*/page.tsx`, `web/src/app/[slug]/page.tsx` |
| Layout SEO + form | `web/src/components/SeoPageLayout.tsx` |
| Comuni + layoutVariant | `web/src/lib/localities.ts` |
| Tipologiche | `web/src/lib/property-types.ts` |
| Guide acquisto | `web/src/lib/guides.ts` |
| Sitemap routes | `web/src/lib/seo.ts`, `web/src/app/sitemap.ts` |
| Product / design tokens | `PRODUCT.md`, `DESIGN.md` (root) |
