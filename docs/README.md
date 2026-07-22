# Documentazione — Valore Immobili

Indice unico. Ultimo aggiornamento: **22 luglio 2026**.

Codice live: mini-sito Next.js in **`web/`** → [valore-immobili.it](https://valore-immobili.it).

---

## Documenti attivi

| File | Cosa contiene | Chi lo aggiorna |
|------|----------------|-----------------|
| [`FRONTEND.md`](FRONTEND.md) | UI, form, nav, home, comuni, skill Impeccable/Hallmark | Chi tocca layout/pagine pubbliche |
| [`SEO.md`](SEO.md) | GSC, inventario URL, roadmap SEO | Chi tocca contenuti/indicizzazione |
| [`../PRODUCT.md`](../PRODUCT.md) | Scope prodotto, utenti, voce (root — Impeccable) | Chi cambia strategia prodotto |
| [`../DESIGN.md`](../DESIGN.md) | Token brand: colori, font, componenti (root — Impeccable/Hallmark) | Chi cambia design system |
| [`../web/README.md`](../web/README.md) | Setup locale, env, deploy Vercel (`web/`) | Chi onborda o deploya |

---

## Come orientarsi (collega nuovo)

1. **`PRODUCT.md`** — cosa stiamo costruendo  
2. **`FRONTEND.md`** — come è fatto il sito oggi (form, nav, regole UI)  
3. **`SEO.md`** — cosa fare su Search Console e nuove URL  
4. **`DESIGN.md`** — se cambi colori/font/CTA  
5. **`web/README.md`** — per far partire il progetto in locale  

---

## Eliminati / assorbiti (luglio 2026)

| Ex path / file | Motivo |
|----------------|--------|
| `valore-immobili-landing/` | Vecchia landing Vite/HTML; produzione è solo `web/`. Snapshot git: tag **`legacy-landing`** |
| `GOOGLE-SHEET-SETUP.md` | Lead su Neon Postgres, non più Google Sheet |
| `docs/MIGRAZIONE-NEXT.md` | Migrazione a `web/` completata e in produzione |
| `docs/SHAPE-mini-sito-admin.md` | Brief Impeccable superato; decisioni in FRONTEND + DESIGN |
| `Progetto immobiliare.md` | Brief iniziale obsoleto (+ conteneva credenziali da non versionare) |

Per recuperare la vecchia landing:

```bash
git checkout legacy-landing -- valore-immobili-landing
```

---

## Skill agent (non sono docs di prodotto)

| Path | Ruolo |
|------|--------|
| `.claude/skills/impeccable/` | Skill design Impeccable |
| `.agents/skills/hallmark/` | Skill anti-slop Hallmark |
| `web/AGENTS.md` / `web/CLAUDE.md` | Note Next.js per agent (scaffolding) |

Non spostare `PRODUCT.md` / `DESIGN.md` fuori dalla root: Impeccable e Hallmark li cercano lì.
