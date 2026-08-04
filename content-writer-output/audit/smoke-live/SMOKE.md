# Smoke live post Fase B (claude-seo)

**Data:** 2026-08-03  
**Tool:** `~/.claude/skills/seo/bin/claude-seo run render_page.py` + check HTML raw  
**Esito:** **5/5 PASS**

| URL | Title (live) | H1 | FAQ schema |
|-----|--------------|----|------------|
| `/` | Valutazione immobiliare Monza: sopralluogo gratis \| … | Valutazione immobiliare a Monza con sopralluogo gratuito | no (ok) |
| `/monza` | Valutazione immobiliare Monza: sopralluogo gratis \| … | Valutazione immobiliare a Monza | no (ok) |
| `/brianza` | Valutazione immobiliare in Brianza: **comuni** \| … | Valutazione immobiliare in Brianza | no (ok) |
| `/valutazione/ville-brianza` | Valutazione ville in Brianza: sopralluogo gratis \| … | Valutazione ville in Brianza | sì |
| `/valutazione/appartamenti-monza` | Valutazione appartamenti Monza: sopralluogo gratis \| … | Valutazione appartamenti a Monza | sì |

Segnali anti-cannibal: `/brianza` non usa title “ville”; tipologica ville ha exact-ish query; hub Monza/home puntano alle tipologiche (link in HTML).  
SSR: pagine servite con HTML pieno (non SPA shell).

Artefatti grezzi: `*.json`, `*.jsonld.json`, `SMOKE-SUMMARY.json`.
