# Content Plan — Comprare casa in Brianza

**Phase:** plan  
**URL target:** `/comprare-casa-brianza` (rewrite in `web/src/lib/guides.ts`)  
**Framework:** PAS + pillar (internal linking)  
**Updated:** 2026-08-03

---

## Research notes (sito + prodotto)

**Gap attuale:** 3 sezioni corte; poco confronto comune-per-comune; pochi deep link al cluster acquisto; meta ancora ok ma content thin per ranking.

**Asset riusabili (non duplicare, linkare):**
- Hub: `/comprare-casa-monza`
- Process/costi: `/spese-acquisto-casa`, `/mutuo-prima-casa`, `/offerta-acquisto-casa`, `/documenti-acquisto-casa`, `/checklist-visita-immobile`, `/tempi-acquisto-casa`, `/agevolazioni-prima-casa`
- Tipologiche: `/appartamenti-in-vendita-monza`, `/ville-in-vendita-brianza`, `/casa-nuova-o-usata`
- Annunci / zone: `/annunci-casa-monza`, `/quartieri-monza`
- Contesto geo vendita (utile anche a chi compra): `/brianza`, `/valutazione/{lissone|brugherio|…}`
- Tipologica valutazione: `/valutazione/ville-brianza`

**Contesto comuni (da `localities.ts`, tono acquirente):**
- Lissone — non = Monza; design/produttivo; centro vs residenziale vs assi
- Brugherio — tensione Monza vs Milano Est
- Vimodrone — asse Milano / MM2
- Muggiò — “quasi Monza” ma acquirenti/tempi diversi
- Desio, Villasanta, Concorezzo, Cologno — ciascuno con profilo distinto (collegamenti, stock, indipendenti)

**Vincoli copy:** niente prezzi inventati, niente case study finti, niente urgenza; italiano naturale; keyword senza stuffing.

**Nuove URL in questo pezzo:** **no** (prima ondata). Pillar forte + link. Valutare leaf `comprare-casa-{comune}` solo dopo GSC se l’intent acquisto per comune cresce senza cannibalizzare `/valutazione/{comune}`.

---

## PAS mapping

| Fase | Ruolo nella guida |
|------|-------------------|
| **Problem** | Chi compra usa medie di “Brianza” / listini Monza / un solo annuncio |
| **Agitate** | Offerta sbagliata, tempi lunghi, confronto mq-a-mq tra comuni diversi, delusione post-visita |
| **Solution** | Metodo: confrontare comune+tipologia+domanda; checklist pratica; deep link guide; CTA consulenza acquisto |

---

## Outline (H2 / punti / ~parole)

### Meta & hero
- **metaTitle:** Comprare casa in Brianza: comuni, prezzi e cosa confrontare  
- **metaDescription:** Guida per comprare casa in Brianza: differenze tra comuni vicino a Monza, come leggere gli annunci e quando chiedere una consulenza locale.  
- **title (H1):** Comprare casa in Brianza: come scegliere il comune giusto  
- **intro (~60–80 parole):** Ampliare da Monza ha senso, ma ogni comune ha domanda e stock diversi. Guida pratica senza medie provinciali.

### 1. Il problema: “Brianza” non è un listino (~220)
- Partire da Monza e allargare il raggio è normale  
- Errore: media provincia o “prezzo da Monza” su comune vicino  
- Confronto solo per mq/foto = falsa sicurezza  
- Link soft → `/comprare-casa-monza`

### 2. Cosa rischi se confronti male (~200) *[Agitate]*
- Offerta sopra/sotto domanda reale del comune  
- Tempi di trattativa diversi tra comuni  
- Tipologie mescolate (condominio vs schiera)  
- Annuncio “vicino a Monza” che nasconde un altro prodotto  
- Nessun numero inventato: solo meccanismi

### 3. Un metodo in 5 passi prima dell’offerta (~280) *[Solution start]*
1. Fissare vincoli (budget, tempi, mutuo, tipologica) → link `/mutuo-prima-casa`, `/spese-acquisto-casa`  
2. Scegliere 2–3 comuni, non “tutta la Brianza”  
3. Filtrare portali **per comune** → `/annunci-casa-monza`  
4. Confrontare immobili nella stessa fascia di domanda  
5. Visita con checklist → `/checklist-visita-immobile`  
Poi offerta → `/offerta-acquisto-casa`

### 4. Come leggere i comuni a ridosso di Monza (~450)
Mini-profili **da acquirente** (4–6 frasi ciascuno, riuso fatti da localities senza clonare le page vendita):
- Lissone  
- Brugherio  
- Vimodrone  
- Muggiò  
- Desio  
- Villasanta / Concorezzo / Cologno (blocco più corto o 1 paragrafo “altri comuni” + link leaf)

Per ciascuno: 1 link a `/valutazione/{slug}` come “contesto di zona” (non CTA vendita aggressiva).

### 5. Appartamento o villa/indipendente (~220)
- Stock e costi diversi  
- Link `/appartamenti-in-vendita-monza`, `/ville-in-vendita-brianza`, `/valutazione/ville-brianza`, `/casa-nuova-o-usata`

### 6. Annunci: da dove partire (e cosa non sono) (~200)
- Portali = richieste, non chiusure  
- External: Immobiliare Brianza, Idealista, Casa.it  
- Link `/annunci-casa-monza`  
- Cenni a stock non in vetrina → ponte a consulenza

### 7. Dopo la visita: documenti, tempi, agevolazioni (~220)
- Link cluster: documenti, tempi, agevolazioni prima casa, spese  
- Non ripetere le guide intere

### 8. Quando ha senso una consulenza locale (~180) *[Solution + Trigger]*
- Criteri precisi / poco tempo / confronto tra comuni / immobili non online  
- Trasparenza: gratuita, senza impegno di acquisto  
- CTA implicita verso fine pagina (SeoPageLayout già mette bottone purchase)

### Related (aggiornare)
- `/comprare-casa-monza`  
- `/ville-in-vendita-brianza`  
- `/spese-acquisto-casa`  
- `/offerta-acquisto-casa`  
- `/annunci-casa-monza`  
- `/brianza` (contesto geo)

**Stima totale:** ~2.000–2.500 parole utili (sezioni dense, non filler).

---

## SEO

| Voce | Scelta |
|------|--------|
| Primary | comprare casa brianza / comprare casa in brianza |
| Secondary | comuni brianza casa, comprare casa vicino monza, annunci casa brianza, villa brianza (ponte) |
| Placement | H1, intro, 1–2 H2; resto semantica naturale |
| Cannibalization | Non competere con hub Monza: Brianza = raggio comuni; Monza hub resta città |
| External | Solo EXTERNAL già in guides + istituzionali se servono |
| Schema | Come le altre guide (nessuno schema Article obbligatorio oggi — non inventare) |

---

## Delivery (execute)

1. Riscrivere entry `comprare-casa-brianza` in `guides.ts` (sections + meta + related)  
2. Verificare CTA purchase già su route `[slug]`  
3. Opzionale: 1 link dalla hub `/comprare-casa-monza` se manca enfasi (già linked)  
4. Pass humanizer in verify  
5. Nessuna nuova route in questo ship

---

## Ready for

`/writer:execute` o `/writer:next`
