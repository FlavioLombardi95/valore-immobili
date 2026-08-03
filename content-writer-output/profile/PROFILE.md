# Writer Profile — Valore Immobili

Creato: 2026-08-03  
Fonti analizzate: https://valore-immobili.it , /come-funziona , /faq , PRODUCT.md , docs/SEO.md  
Lingua contenuti: **italiano**

---

## Brand Identity

| Campo | Valore |
|-------|--------|
| Nome / byline | Valore Immobili (brand; non un singolo autore personale) |
| Azienda / brand | Valore Immobili |
| Dominio | https://valore-immobili.it |
| Tagline / missione | Scoprire quanto vale davvero casa, con un parere concreto prima di decidere se e come vendere |
| Cosa fa | Mini-sito locale per richiedere una valutazione immobiliare **gratuita con sopralluogo** o una **consulenza acquisto** a Monza e Brianza, basata sul mercato reale della zona (non su stime automatiche) |

---

## Industry & Market

| Campo | Valore |
|-------|--------|
| Settore | Real estate / lead gen locale — valutazione immobiliare residenziale |
| Geo | Monza e provincia di Monza e Brianza |
| Positioning | Consulente locale serio, non portale nazionale né agenzia aggressiva |
| Differenza vs competitor | Sopralluogo reale; confronto con vendite recenti di quartiere; gratis e senza obbligo di mandato; tono pratico e trasparente |
| Anti-riferimenti | Portali di stima automatica “numero istantaneo”; annunci immobiliari urgenti/pressanti; tono luxury-agenzia freddo; linguaggio SaaS/AI generico |

---

## Target Audience

**Primaria (unica):** persone a Monza/Brianza che stanno valutando una **compra-vendita** entro 3–12 mesi — sia **vendita** sia **acquisto** — e vogliono un parere locale concreto prima di decidere.

Include:
- **Chi vende / proprietari** — stima reale con sopralluogo prima di fissare prezzo o affidare
- **Chi compra / acquirenti** — orientamento sul mercato locale e supporto alla ricerca (anche immobili non sempre online)

Chi ricerca il mercato in fase molto precoce resta utile per SEO, ma i lead di conversione sono entrambi i lati della transazione.

**Pain points**
- Non sanno il valore reale dell’immobile (in vendita o come riferimento d’acquisto)
- Diffidano delle stime online automatiche
- Temono pressione commerciale dopo aver lasciato i contatti
- Non sanno da dove partire (prezzo, tempi, documenti, zone, budget)

**Obiettivi**
- Capire un valore / un percorso realistico prima di pubblicare, affidare o fare offerte
- Decidere con calma se/come vendere o comprare
- Sentirsi accompagnati da qualcuno che conosce la zona

**Obiezioni tipiche**
- “Poi mi chiamano per forzarmi a firmare”
- “Le stime online bastano”
- “Costa qualcosa / c’è la fregatura”
- “Non ho ancora deciso di vendere / di comprare”

---

## Voice & Tone (da scan URL)

**Tono rilevato sul sito**
- Diretto, concreto, locale, rassicurante senza soft-sell
- Frasi spesso brevi o medie; paragrafi corti; elenchi e passaggi numerati
- Lessico quotidiano (“casa”, “zona”, “sopralluogo”) + termini tecnici solo quando servono (APE, planimetria, visura)
- “Tu” al lettore; “noi” per il servizio
- Prove concrete (tempi di richiamo, cosa si guarda in sopralluogo) al posto di claim astratti

**Aggettivi guida (3–5)**  
Direct · Conversational · Professional · Empathetic · Educational

**Stile frasi**
- Mix di frasi corte (“Gratuito e senza impegno.”) e spiegazioni di 2–3 linee
- Preferire “perché / come / cosa succede dopo” rispetto a slogan
- Italiano naturale: niente keyword stuffing, niente ripetizioni forzate di “valutazione immobiliare Monza”

**Evitare**
- Jargon da portale / SaaS (“soluzione end-to-end”, “esperienza seamless”)
- Urgenza finta, countdown, “posti limitati”, claim gonfiati
- Emoji, punti esclamativi a raffica, tono da brochure luxury
- Promesse di prezzo esatto senza vedere l’immobile
- Pattern AI tipici: “In today’s world”, “delve into”, “it’s important to note”, simmetria forzata a tre, em dash a ripetizione (vedi skill humanizer)

**Campioni di voce (dal sito live)**
> Valutazione gratuita con sopralluogo a Monza e in Brianza, basata su vendite reali nella tua zona. Un parere concreto prima di decidere se e come vendere.

> Le stime automatiche partono da medie e metrature: non vedono lo stato reale dell’immobile…

> La valutazione serve a darti un punto di partenza concreto. Non c’è alcun obbligo di affidare l’incarico.

---

## Content Strategy

**Tipi di contenuto**
- Pagine web SEO (hub geo, tipologiche, guide vendere/comprare)
- Landing / sezioni conversione
- FAQ e guide informative
- (Opzionale) LinkedIn / email solo se esplicitamente richiesto

**Pilastri**
1. Valutazione con sopralluogo vs stima automatica  
2. Mercato locale Monza (quartieri, tipologiche)  
3. Mercato Brianza (comuni)  
4. Vendere casa: prezzo, tempi, documenti, percorsi  
5. Comprare casa: zone, costi, annunci, consulenza locale  

**Obiettivo primario**  
Lead generation compra-vendita (valutazione / sopralluogo **e** consulenza acquisto) via SEO organico

**Lunghezza preferita**
- Pagine hub / leaf: medie, utili, scannabili (non romanzi)
- Guide: 800–1.800 parole tipiche; varia per intent
- Mai gonfiare solo per SEO

**Output**  
Markdown (pronto da portare in componenti Next.js / copy del sito)

**Workflow publishing**  
Self-review → merge in `web/` → deploy Vercel. Nessun blog CMS separato.

---

## SEO Strategy

**Priorità:** Alta (organico = canale principale)

**Keyword / cluster (da GSC + intent)**
- valutazione immobiliare monza
- valutazione immobile monza / gratuita
- stima immobiliare monza
- valutazione appartamenti monza / brianza
- valutazione ville monza / brianza
- vendere casa a monza
- comprare casa monza, guide locali / annunci / spese

**Vincoli**
- Geo sempre Monza / Brianza / comune specifico — non “Milano” come focus
- Intent valutazione e comprare/vendere vanno trattati come cluster paralleli (non “acquisto di serie B”)
- Copy naturale; keyword nel title/H1/meta senza ripetizioni meccaniche
- Ogni pagina pubblica deve avvicinare alla CTA giusta: valutazione (vendita) o consulenza (acquisto)
- No blog generico fuori zona

---

## Memory keys (Content Writer)

```
[Content Writer] Name: Valore Immobili, Title: Brand locale, Company: Valore Immobili
[Content Writer] Business: Valutazione immobiliare gratuita con sopralluogo a Monza e Brianza, basata su vendite reali della zona.
[Content Writer] Audience: Persone a Monza/Brianza in compra-vendita (vendita e acquisto) entro 3–12 mesi; SEO early-stage ok ma conversione su entrambi i lati
[Content Writer] Industry: Real estate locale, lead gen valutazione e consulenza immobiliare
[Content Writer] Voice: Diretto, concreto, locale, professionale-accessibile, empatico senza soft-sell. Usa tu/noi. Evita: urgenza finta, stima automatica come promessa, jargon SaaS, luxury freddo, pattern AI
[Content Writer] Voice notes: Prove di processo (tempi, cosa si guarda). Paragrafi corti, liste, step. Italiano naturale. Keyword locali senza stuffing.
[Content Writer] Content types: Web pages, landing, FAQ, guide SEO locali
[Content Writer] Content pillars: Sopralluogo vs algoritmo; Monza; Brianza; vendere; comprare
[Content Writer] Content goals: Lead generation organica compra-vendita
[Content Writer] Blog URL: https://valore-immobili.it
[Content Writer] Article length: 800-1800 (varia); hub più corti se basta
[Content Writer] Output format: Markdown
[Content Writer] Publishing workflow: Self-review, commit in web/, deploy Vercel
```
