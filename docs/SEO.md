# SEO — valore-immobili.it

Documento di riferimento per strategia e interventi (aggiornato maggio 2026).

## Contesto e obiettivi

- **Obiettivo:** lead organici (volume potenzialmente alto, fase iniziale).
- **Paid:** Google Ads, budget limitato, corrispondenza esatta → traffico verso il form (LP unica).
- **Geo:** focus **Monza e Brianza**; Milano secondaria.
- **Modello:** lead gen, nessun brand agenzia, nessun Google Business Profile, nessuna citazione NAP su portali.
- **Sito:** singola LP indicizzabile (`/` → `/valutazione`); varianti ads/thank-you in `noindex`.

## Stato Search Console (ultimi 28 gg, indicativo)


| Metrica         | Valore        | Lettura                                                           |
| --------------- | ------------- | ----------------------------------------------------------------- |
| Impressioni     | ~59           | Google testa query locali                                         |
| Clic            | 0             | CTR da migliorare (snippet / posizione)                           |
| Posizione media | ~18,7         | Pagina 2 — margine di salita                                      |
| Paese           | Italia (~98%) | Coerente                                                          |
| Dispositivo     | Desktop ~98%  | Normale in fase early per query “da scrivania”; monitorare mobile |


### Query con più impressioni

1. `valutazione gratuita immobile monza` (~37)
2. `valutazione immobiliare monza`
3. `valutazione ville monza brianza`
4. `stima immobiliare monza`
5. `valutazione immobile monza`

### Indicizzazione

- **1 URL indicizzato:** `https://valore-immobili.it/` (ultima scansione fine maggio 2026).
- Indicizzazione attiva da ~metà aprile 2026.

## Interventi tecnici nel repo

1. **Title + meta description** sulla LP live (`step-1.html`) allineati alle query Monza/Brianza (solo `<head>`, copy hero invariato).
2. **Canonical** su `https://valore-immobili.it/`.
3. **Open Graph** base per condivisione.
4. **JSON-LD** `Service` + `Organization` con `areaServed` Monza / Monza e Brianza (senza indirizzo fisico agenzia).
5. `**robots.txt`** + `**sitemap.xml**` (un solo URL).
6. `**noindex**` su step-3, lp ads, thank-you (evita duplicati).
7. **Footer:** riga geo + link esterni istituzionali (Monza / provincia).
8. **Redirect www → apex** in `vercel.json` (quando il deploy Vercel gestisce anche `www`).

## Azioni manuali (GSC)

1. **Proprietà:** `https://valore-immobili.it/` (preferenza dominio senza www).
2. **Sitemap:** inviare `https://valore-immobili.it/sitemap.xml` (Indicizzazione → Sitemap).
3. **Controllo URL:** richiedere indicizzazione di `/` dopo ogni deploy SEO rilevante.
4. Monitorare **Rendimento → Query** e **CTR** dopo meta description (2–4 settimane).

## Copy da approvare (solo meta, non hero)

- **Title:** `Valutazione gratuita immobile Monza e Brianza | Valore Immobili`
- **Description:** `Richiedi una valutazione immobiliare gratuita a Monza e in Brianza: sopralluogo sul posto, senza impegno. Scopri il valore reale del tuo immobile.`
- **Footer (riga):** `Valutazione immobiliare gratuita con sopralluogo a Monza e nella provincia di Monza e Brianza.`

Modifiche al **H1** o al testo hero richiedono approvazione esplicita.

## Prossimi passi (senza nuove pagine)

- Dopo 4–6 settimane: rivalutare CTR; se impressioni salgono ma clic restano 0, test A/B solo su **title/description** (non hero).
- Valutare **link footer** aggiuntivi (guide consumer, dati mercato) solo se utili all’utente.
- **www:** se resta “under construction”, verificare DNS/hosting del sottodominio oltre a Vercel.

## Fuori scope (per scelta progetto)

- Google Business Profile, directory, blog multi-pagina, competitor benchmarking.

