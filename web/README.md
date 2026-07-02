# Valore Immobili — Next.js

Mini-sito SEO + form lead + admin interno.

## Stack

- Next.js App Router
- Neon Postgres (`DATABASE_URL`)
- Auth.js / NextAuth (Google login + allowlist email)
- Twilio per verifica telefono

## Sviluppo locale

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

Apri `http://localhost:3000`.

### Database

1. Crea un database Postgres su Vercel (integrazione Neon) o in Neon direttamente.
2. Imposta `DATABASE_URL` in `.env.local`.
3. Esegui lo schema:

```bash
psql "$DATABASE_URL" -f scripts/init-db.sql
```

Al primo submit lead lo schema viene anche creato automaticamente se mancante.

### Google OAuth admin

1. Crea credenziali OAuth in Google Cloud Console.
2. Authorized redirect URI: `http://localhost:3000/api/auth/callback/google` (e produzione).
3. Imposta `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_SECRET`, `ADMIN_EMAILS`.

## Pagine pubbliche indicizzate

- `/`
- `/monza`
- `/brianza`
- `/come-funziona`
- `/faq`
- `/vendere-casa-monza`

Sitemap dinamica: `/sitemap.xml`  
Robots: `/robots.txt`

## Admin

- `/admin/login` — accesso Google
- `/admin` — lista lead, filtri, stato, note

## Deploy Vercel

Imposta **Root Directory** del progetto Vercel su `web` (non più `valore-immobili-landing`).

Dopo il deploy:

1. Verifica `https://valore-immobili.it/sitemap.xml`
2. In Google Search Console, invia di nuovo la sitemap
3. Richiedi indicizzazione delle nuove URL

## Migrazione dalla landing Vite

Vedi `docs/MIGRAZIONE-NEXT.md` alla root del repo.
