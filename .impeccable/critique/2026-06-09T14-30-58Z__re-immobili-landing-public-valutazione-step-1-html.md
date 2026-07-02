---
target: valore-immobili-landing
total_score: 24
p0_count: 0
p1_count: 3
timestamp: 2026-06-09T14-30-58Z
slug: re-immobili-landing-public-valutazione-step-1-html
---
# Critique: valore-immobili-landing (step-1.html + lp.html)

Target: LP live SEO (`step-1.html`) e variante ads (`lp.html`).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Verifica telefono in tempo reale ok; submit senza stato loading/disabled sul bottone |
| 2 | Match System / Real World | 3 | Italiano chiaro; mix lei/tu tra hero e FAQ |
| 3 | User Control and Freedom | 2 | Nessun undo; flusso lineare accettabile per landing |
| 4 | Consistency and Standards | 3 | step-1 e lp allineati; pattern card ripetuto ovunque |
| 5 | Error Prevention | 3 | Validazione client + verifica telefono Twilio |
| 6 | Recognition Rather Than Recall | 2 | Solo placeholder, nessuna label visibile; pagina lunga |
| 7 | Flexibility and Efficiency | 1 | Un solo percorso (normale per lead gen) |
| 8 | Aesthetic and Minimalist Design | 2 | Hero ridondante; 5 sezioni con stessa grammatica visiva |
| 9 | Error Recovery | 3 | Messaggi errore in italiano, focus sul campo |
| 10 | Help and Documentation | 3 | FAQ Monza utile; nessun aiuto contestuale sul form |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment:** Non urla "AI" come un SaaS generico, ma la struttura è template landing 2024-2026: badge uppercase, glass card sul form, griglia 3 card identiche, check_circle ripetuti, stock Unsplash generici. Plus Jakarta Sans è nel reflex-reject di Impeccable ma qui è identità già committata. Il rischio maggiore è **sameness** (tutto uguale) più che slop estremo.

**Deterministic scan:** 2 warning `single-font` su step-1.html e lp.html — **falso positivo**: Inter + Plus Jakarta sono in fonts.css; il detector non vede @font-face.

**Browser visualization:** Script detect.js iniettato su localhost:5173/valutazione; nessun output console catturato. Overlay non affidabile in questa sessione.

## Overall Impression

Base solida per conversione e SEO Monza: CTA chiara, form completo, trust ripetuto, FAQ coerente. Il collo di bottiglia è **above-the-fold su mobile** (troppo hero prima del form) e **ridondanza copy** (H1 generico + H2 SEO + sottotitolo + bullet che ripetono "valutazione"). La pagina funziona; non ancora eccellente.

## What's Working

1. **CTA e form:** "Richiedi sopralluogo gratuito" è verb+oggetto; validazione telefono live riduce lead spazzatura.
2. **Gerarchia colore:** Arancio brand sul CTA, blu secondary su titoli: focus visivo sul submit.
3. **FAQ Monza:** Risponde a obiezioni reali (costo, processo, online vs sul posto) senza nuove pagine.

## Priority Issues

### [P1] Form sotto troppo scroll su mobile (step-1)
- **Why:** Su viewport stretta l'utente vede logo + hero completa prima del modulo; Casey abbandona.
- **Fix:** `order` CSS: form prima dell'hero su mobile (come già fa lp.html con layout diverso). O hero compatta a 2 righe max.
- **Command:** `/impeccable adapt valore-immobili-landing/public/valutazione/step-1.html`

### [P1] Ridondanza hero: H1 generico vs H2 SEO
- **Why:** "Scopri quanto vale..." non dice Monza; H2 ripete intento SEO; 4 occorrenze "valutazione" above the fold affaticano.
- **Fix:** Unire in una gerarchia: H1 con Monza OPPURE H1 emotivo + una sola riga geo sotto (non H2 separato che duplica meta title).
- **Command:** `/impeccable clarify valore-immobili-landing/public/valutazione/step-1.html`

### [P1] Form monolitico (8 campi visibili)
- **Why:** >4 decisioni simultanee; cognitive load alto per Jordan.
- **Fix:** 2 step (immobile → contatto) o raggruppamento visivo con titoli sezione; label visibili oltre ai placeholder.
- **Command:** `/impeccable shape valore-immobili-landing/public/valutazione/step-1.html`

### [P2] Griglie card identiche ripetute
- **Why:** "Perché non online", "Zero pressioni", testimonial, FAQ: stessa grammatica card = template feel.
- **Fix:** Variare layout (una sezione lista, una senza card, FAQ accordion).
- **Command:** `/impeccable layout valore-immobili-landing/public/valutazione/step-1.html`

### [P2] Submit senza feedback di caricamento
- **Why:** Doppia chiamata API (verify + lead) può richiedere secondi; utente clicca di nuovo.
- **Fix:** disabled + spinner/testo "Invio in corso..." sul bottone.
- **Command:** `/impeccable harden valore-immobili-landing/public/valutazione/step-1.html`

## Persona Red Flags

**Jordan (First-Timer):** 8 campi senza progressione; placeholder svaniscono e non restano label; H1 non spiega subito "gratuito a Monza".

**Casey (Mobile):** Su step-1 il form non è in thumb zone al primo paint; deve scrollare oltre hero + 3 bullet.

**Sam (Accessibility):** Placeholder-only inputs; contrasto `text-tertiary` (#595e6f) su #f6fafd borderline su testo piccolo footer; checkbox privacy 11px.

## Minor Observations

- Mix lei ("sua zona") / tu (FAQ "tuo immobile").
- Testimonial Francesco Milano su pagina focalizzata Monza.
- `.glass-card` backdrop-filter: ban decorativo Impeccable, ma leggero.
- WhatsApp FAB compete visivamente con CTA arancione.
- Stock Unsplash non locali (non Monza/Brianza).

## Questions to Consider

- Se l'utente arriva da query "valutazione immobiliare monza", l'H1 deve ancora essere emotivo o può essere più letterale?
- Il form a step 2 aumenterebbe conversione o frizione?
- lp.html (form affiancato su desktop) dovrebbe essere il template unico?
