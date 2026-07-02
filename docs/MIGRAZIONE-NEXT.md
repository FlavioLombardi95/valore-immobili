# Migrazione a Next.js (`web/`)

## Stato

- Nuova app in `web/` con mini-sito SEO, form lead e admin.
- La vecchia landing Vite/HTML in `valore-immobili-landing/` resta nel repo finché il deploy Next.js non è validato in produzione.

## Deploy Vercel

1. Vercel → Project Settings → **Root Directory** → `web`
2. Aggiungi variabili da `web/.env.example`
3. Collega database Neon e copia `DATABASE_URL`
4. Deploy

## SEO / Search Console

La sitemap passa da 1 URL a 6 URL indicizzabili:

- `https://valore-immobili.it/`
- `https://valore-immobili.it/monza`
- `https://valore-immobili.it/brianza`
- `https://valore-immobili.it/come-funziona`
- `https://valore-immobili.it/faq`
- `https://valore-immobili.it/vendere-casa-monza`

Dopo il deploy:

1. Controlla `https://valore-immobili.it/sitemap.xml`
2. GSC → Sitemap → reinserisci `sitemap.xml`
3. Controllo URL sulle pagine nuove

## Cleanup (dopo validazione produzione)

Rimuovere o archiviare:

- `valore-immobili-landing/` (Vite + HTML statici)
- `GOOGLE-SHEET-SETUP.md`
- API Google Sheet (`api/sheet.js`, `api/_lib/google-sheet.js`)
- Redirect legacy in vecchio `vercel.json` (`/valutazione/*`)

Aggiornare:

- `docs/SEO.md` (multi-pagina, non più LP unica)
- README root se presente

## Note lead

Le lead non passano più da Google Sheet. Tutte le nuove richieste vanno in Postgres (`leads`).

Per importare lead storiche dal foglio Google, esporta CSV e prepara uno script di import una tantum (non incluso in v1).
