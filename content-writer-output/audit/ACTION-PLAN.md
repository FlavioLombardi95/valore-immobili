# SEO Audit — valore-immobili.it (Fase A2, approfondito)

**Data:** 2026-08-03  
**Skills usate:**
- `seo-audit` — framework scoring, categorie, action plan, health score  
- `seo` — sintesi PERCEIVE→ANALYZE→VALIDATE→ACT; lettura on-page/schema/sitemap  
- GSC via token `search-console-mcp` (login locale; tool MCP Cursor da ricaricare in Settings)  
- Check rendering AI allineato a `programmatic-seo-expert` (Googlebot / GPTBot / ClaudeBot)  
- Quality leaf vs playbook `programmatic-seo` + `seo-programmatic` + `programmatic-seo-expert` (unicità, anti-doorway)

**Non eseguito in questo giro:** CLI `claude-seo run` (runtime Python skill non bootstrapato), PDF report, DataForSEO/Ahrefs, GBP (`seo-local` fuori scope PRODUCT).

**Business type:** local lead-gen / service immobiliare (Monza–Brianza)

---

## Executive summary

| Voce | Valore |
|------|--------|
| **Health score** | **76 / 100** (leggermente più severo del primo passaggio) |
| Tecnico + SSR | Forte |
| Contenuto leaf | Buona unicità (Jaccard ~0.25–0.35) |
| On-page / CTR | Debole (0 clic / ~2.4k impr. 28gg) |
| **Cannibalizzazione interna** | **Critica sulle query head** |

Il sito resta **ben costruito**. Il vincolo principale non è “mancano pagine”, è: **Google mostra spesso l’URL sbagliato** (home/Brianza al posto di tipologiche) + snippet poco competitivi vs AVM.

---

## Skills → findings (PERCEIVE)

### GSC (`search-console-mcp` / API readonly)
- Baseline: `content-writer-output/gsc/BASELINE.md`
- Cannibalizzazione: `content-writer-output/gsc/cannibalization-striking.json` (**16 query** con 2+ URL)

**Striking distance (pos. 5–15, ~90gg):**
| Query | Impr. | Pos. |
|-------|------:|-----:|
| valutazione gratuita immobile monza | 208 | 12.5 |
| valutazione ville in brianza | 133 | **7.0** |
| valutazione villa brianza | 18 | 10.2 |

**Cannibal top (esempio):**
| Query | URL che “vince” impr. | URL che dovrebbe vincere |
|-------|----------------------|---------------------------|
| valutazione ville in brianza | **`/brianza`** (128 impr., pos 6.8) | `/valutazione/ville-brianza` (33 impr., pos 18) |
| valutazione gratuita immobile monza | `/` e `/monza` | home ok come brand; `/monza` già forte su “gratuita” |
| valutazione appartamenti monza | `/` e `/monza` dominano | `/valutazione/appartamenti-monza` resta dietro |

### Rendering AI (`programmatic-seo-expert` pillar SSR)
Home fetch identico per Googlebot / GPTBot / ClaudeBot: **~48KB HTML, ~595 parole, H1+form presenti**. Nessun blocco CSR evidente.  
→ Pillar “server-rendered HTML” **OK**.

### Leaf uniqueness (`programmatic-seo` / expert anti mad-libs)
Campione Lissone, Desio, Brugherio, Muggiò, Concorezzo:
- ~385–458 parole visibili (un po’ snelle, ma H2 locali distinti)
- Jaccard token **0.26–0.35** (sotto soglia ~0.40 “clone”) → **pass destination test soft**
- Title misti: alcuni senza “sopralluogo” (Lissone, Concorezzo)

### On-page live (`seo` / `seo-audit`)
Vedi `audit/onpage-live.json` + `audit/deep-signals.json`.  
Sitemap **30 URL**, robots ok, schema Organization+Service globale, FAQPage solo `/faq`.

---

## ANALYZE — cause principali

1. **Authority dilution:** home e hub geo competono sulle stesse head query “valutazione * monza”.  
2. **Wrong winner tipologica:** `/brianza` è troppo generica e ranka su “ville” meglio della leaf dedicata.  
3. **CTR:** anche in pos. 7–12, 0 clic → snippet non battono AVM (“gratis in 60s”).  
4. **Leaf comuni:** posizioni buone, volume minimo → aggregazione futura sì, ma **dopo** fix cannibal + CTR (expert: non scalare se pattern non convertito).

---

## VALIDATE — cosa non fare

- Non aggiungere subito 6 comuni nuovi (viola staged rollout `programmatic-seo-expert` finché striking distance non è sfruttata).  
- Non creare pagine “€/mq {comune}” vs Immobiliare.it.  
- Non forzare GBP / `seo-local` (fuori PRODUCT).

---

## ACT — action plan (input Fase B)

### Critical / High (Settimana 1) — skill: `seo-audit` + `content-writer` + `humanizer`

| # | Azione | Perché | Owner skill |
|---|--------|--------|-------------|
| B1 | Title/meta nicchia su `/`, `/monza`, tipologiche, 8 leaf | CTR + differenziatore vs AVM | writer + humanizer; verify `seo` |
| B2 | **Disambiguare ville:** rafforzare `/valutazione/ville-brianza` (title exact-ish “valutazione ville in Brianza”, H1, intro answer-first); da `/brianza` link ancora più esplicito “ville → tipologica” e testo che non rubi l’intent | Cannibal `/brianza` vs tipologica | `seo` + writer |
| B3 | Stesso schema **appartamenti** (home/monza → tipologica) | Cannibal head | idem |
| B4 | Home: H1 o linea hero più vicina a “valutazione…sopralluogo gratuito” | Mismatch title/H1 | writer |
| B5 | Blocco anti-AVM su hub + template leaf | Intent post-calcolatore | writer |

### Medium (Settimane 2–3)

| # | Azione | Skill |
|---|--------|-------|
| B6 | FAQ + FAQPage su tipologiche (e leaf top) | `seo` schema + writer |
| C1 | Pagina pilastro online vs sopralluogo | `seo-content-brief` → writer → humanizer → `seo-audit` page |
| B7 | Accorciare title page (template `\| Valore Immobili` taglia keyword) | on-page |

### Later (Fase D) — solo dopo mid-check GSC

| # | Azione | Skill |
|---|--------|-------|
| D0 | Qualify ondata comuni (≥10 data point, destination/bookmark test) | `programmatic-seo-expert` |
| D1 | Cluster keyword comuni | `seo-cluster` |
| D2 | 6 leaf (Seregno…) 2/sett. | `programmatic-seo` + `seo-programmatic` + writer + humanizer |

---

## Health score (pesato, `seo-audit`)

| Categoria | Peso | Score | Note |
|-----------|------|------:|------|
| Technical SEO | 22% | 90 | robots, sitemap, SSR |
| Content Quality | 23% | 80 | leaf uniche; un po’ snelle |
| On-Page SEO | 20% | **58** | cannibal + CTR 0 + H1 home |
| Schema | 10% | 72 | Service ok; FAQ limitata |
| Performance | 10% | 70 | non PSI; HTML ok |
| AI Search readiness | 10% | 78 | SSR ok per bot |
| Images | 5% | 80 | hero home |
| **Totale** | | **~76** | |

---

## Fix / Improve / Leave

| | |
|--|--|
| **Fix** | Cannibal ville/appartamenti; title/meta; H1 home; linking hub→tipologica |
| **Improve** | FAQ schema; pilastro anti-AVM; deepness leaf (~400→600+ parole utili) |
| **Leave** | Guide acquisto (0 impr.); GBP; esplosione comuni prima del mid-check |

---

## Artefatti

| File | Contenuto |
|------|-----------|
| `gsc/BASELINE.md` | Metriche 28/90gg |
| `gsc/cannibalization-striking.json` | Query multi-URL + striking |
| `audit/onpage-live.json` | Extract live hub/leaf |
| `audit/deep-signals.json` | Bot render, Jaccard leaf, snap extra URL |
| `plans/MIGLIORAMENTO-ORGANICO.md` | Piano master (skill-cited) |

**Fase A = completa.** Prossima: **Fase B** con le skill sopra.
