# Frontend & UI — valore-immobili.it

**Documento unico** per layout, conversione, anti-slop e decisioni UI del mini-sito Next.js in `web/`.  
Ultimo aggiornamento: **22 luglio 2026**.

> Per SEO / GSC / roadmap URL → [`SEO.md`](SEO.md)  
> Per brand, colori, tipografia → [`DESIGN.md`](../DESIGN.md) (root)  
> Per prodotto e scope → [`PRODUCT.md`](../PRODUCT.md) (root)

---

## 1. Mappa documenti (cosa leggere)

| Documento | Ruolo | Quando aprirlo |
|-----------|--------|----------------|
| **Questo file (`FRONTEND.md`)** | Decisioni UI, form, nav, home, comuni, skill Impeccable/Hallmark | Qualsiasi modifica a pagine pubbliche / componenti shell |
| `SEO.md` | Keyword, GSC, inventario URL, roadmap contenuti | Nuove URL, title/meta, indicizzazione |
| `DESIGN.md` | Token brand (colori, font, bottoni) | Cambi visuali che devono restare di sistema |
| `PRODUCT.md` | Cosa è il prodotto e cosa non è | Scope, tono, vincoli di business |

**Non creare** altri file `REDESIGN-*` / backlog UI sparsi: aggiorna **questo** documento.

---

## 2. Stack e skill di review

| Tool | Uso nel progetto |
|------|------------------|
| **Impeccable** (`.claude/skills/impeccable`) | Critique / adapt / clarify / typeset sul codice esistente |
| **Hallmark** (`.agents/skills/hallmark`) | Audit anti-slop; eventuali redesign **solo** se allineati a `DESIGN.md` |

Regola: su un sito già in produzione con brand lockato, preferire **audit + fix chirurgici**; evitare `hallmark redesign` full-site che importa temi catalogo.

Audit Hallmark (22 lug 2026) → fix critical/major chirurgici + piccolo redesign (home + varianti comuni) documentati sotto.

---

## 3. Shell del sito (nav, footer, form)

### Navigazione

- Link primari: **Monza · Brianza · Come funziona · FAQ**
- CTA header: **Valutazione** → `/#richiesta`
- **Vendere / Comprare** solo in footer (meno rumore “SaaS nav”)

File: `web/src/components/SiteHeader.tsx`

### Footer

- Statement tipografico + riga di link (niente colonne Product/Company/Legal)
- Privacy + copyright in coda

File: `web/src/components/SiteFooter.tsx`

### Dove sta il form

| Pagine | Form |
|--------|------|
| `/`, `/monza`, `/brianza`, `/valutazione/*` | Sì |
| `/faq`, `/come-funziona`, `/vendere-casa-monza`, `/comprare-casa-monza` | No → CTA a `/#richiesta` |

Implementazione: `showForm` in `SeoPageLayout`.  
Ordine mobile: **contenuto prima, form dopo** (niente `order` che inverte).

CTA: solid brand orange (niente gradient arancio→rust sui bottoni). Stati: `focus-visible`, `active`, `disabled`.

---

## 4. Home — ritmo di pagina

**Obiettivo:** conversione vicino all’hero, prosa SEO sotto (meno fingerprint “hero → 4 check → 3 H2 → form”).

| Blocco | Contenuto |
|--------|-----------|
| 1. Hero | Foto Villa Reale, H1, lede, CTA anchor `#richiesta` |
| 2. Conversione | Colonna sinistra: trust breve (lista tipografica) + un paragrafo; destra: **form sticky** |
| 3. Approfondimento | Prosa SEO (perché / come funziona / zone) + related links a tutta larghezza |

File: `web/src/app/page.tsx`

---

## 5. Pagine comuni (`/valutazione/{slug}`)

Dati: `web/src/lib/localities.ts`  
Route: `web/src/app/valutazione/[slug]/page.tsx`

Ogni comune ha **copy propria** e un **`layoutVariant`** per variare l’ordine dei blocchi (anti near-duplicate strutturale):

| Variant | Ordine blocchi | Usato da (es.) |
|---------|----------------|----------------|
| `compare-monza` | Angolo (vs Monza) → look list → richiesta → sibling | Lissone, Muggiò |
| `look-first` | Look list → angolo → richiesta → sibling | Vimodrone, Desio |
| `angle-first` | Angolo → look → richiesta → sibling | Brugherio, Cologno Monzese |
| `faq-led` | FAQ locali → look → richiesta → sibling | Villasanta, Concorezzo |

Nuovi comuni: obbligatorio scegliere un `layoutVariant` e copy non clonata. Non aggiungere comuni in massa solo per SEO.

---

## 6. Pattern UI da mantenere / evitare

**Mantenere**

- Font: Bricolage Grotesque (titoli) + Source Sans 3 (corpo) — vedi `DESIGN.md`
- Hero fotografico locale (Villa Reale), testo left-biased
- Related links come **lista tipografica**, non card grid
- Liste trust senza glyph/emoji (`✓`, ✨, …)

**Evitare**

- Pill/eyebrow “Monza e Brianza” su ogni SEO leaf
- Footer a 3–4 colonne stile SaaS
- Nav con 6+ link + nessun CTA
- Gradient purple / aurora / Inter-everywhere
- Stesso scheletro H2 su tutte le leaf geo

---

## 7. Checklist collega (PR UI)

1. Legge questo file + `DESIGN.md` se tocca colori/font/CTA  
2. Se nuova URL SEO: aggiorna anche `SEO.md` + sitemap  
3. Form: rispetta tabella §3  
4. Leaf comune: `layoutVariant` + copy unica  
5. Mobile: contenuto prima del form; niente scroll orizzontale (`overflow-x: clip`)  
6. Non introdurre skill/theme Hallmark catalog senza allineo a `DESIGN.md`

---

## 8. Changelog UI (sintesi)

| Data | Cosa |
|------|------|
| lug 2026 | Mini-sito Next, hub SEO, form, admin |
| 21–22 lug | 8 comuni, comprare-casa, form off guide, accenti/copy |
| 22 lug | Tipografia Bricolage/Source Sans; audit Hallmark |
| 22 lug | Fix chrome (nav/footer/related/CTA); **home ritmo + layoutVariant comuni**; doc unificato qui |

---

## 9. Riferimenti codice

| Area | Path |
|------|------|
| Home | `web/src/app/page.tsx` |
| Layout SEO | `web/src/components/SeoPageLayout.tsx` |
| Form | `web/src/components/LeadForm.tsx` |
| Header / Footer | `web/src/components/SiteHeader.tsx`, `SiteFooter.tsx` |
| Related | `web/src/components/RelatedLinks.tsx` |
| Comuni | `web/src/lib/localities.ts`, `web/src/app/valutazione/[slug]/page.tsx` |
| Token CSS | `web/src/app/globals.css`, `web/src/app/layout.tsx` |
