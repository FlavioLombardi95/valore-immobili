# CTAs — Valore Immobili

## Primarie (conversione)

| ID | Tipo | Testo | Contesto | Link |
|----|------|-------|----------|------|
| hero_modulo | diretta | Vai al modulo | Home hero | `#richiesta` / form |
| richiedi_valutazione | diretta | Richiedi la valutazione gratuita | Fine sezione, guide, FAQ | form / `#richiesta` |
| richiedi_sopralluogo | diretta | Richiedi sopralluogo gratuito | Submit form (vendita) | form submit |
| richiedi_consulenza_acquisto | diretta | Richiedi la consulenza gratuita | Form intent acquisto | form submit |

## Soft / supporto

| ID | Tipo | Testo | Contesto | Link |
|----|------|-------|----------|------|
| soft_come_funziona | soft | Dettagli su come funziona | Prose home / trust | `/come-funziona` |
| soft_faq | soft | Domande frequenti su costi e tempi | Dopo process | `/faq` |
| soft_vendere | soft | Guida per vendere casa a Monza | Hub locali | `/vendere-casa-monza` |
| soft_comprare | soft | Guida per comprare casa a Monza | Hub locali | `/comprare-casa-monza` |

## Microcopy di supporto (sempre vicino alle CTA hard)

- “Gratuito e senza impegno.”
- “Ti richiamiamo entro 1 o 2 giorni lavorativi.”
- “Sopralluogo gratuito a Monza e in Brianza, senza impegno.”
- “Consulenza gratuita, senza impegno di acquisto.” (solo intent acquisto)

## Regole

1. Su pagine valutazione/vendere: CTA hard = richiesta sopralluogo.
2. Su pagine comprare / guide acquisto: CTA hard = consulenza acquisto (`ctaVariant: purchase`).
3. Non usare urgenza artificiale.
4. Soft CTA solo come approfondimento, non come sostituto della conversione.

---

```
[Content Writer CTA] richiedi_valutazione | diretta | Richiedi la valutazione gratuita | web | /#richiesta
[Content Writer CTA] richiedi_sopralluogo | diretta | Richiedi sopralluogo gratuito | form | submit
[Content Writer CTA] soft_come_funziona | soft | Dettagli su come funziona | web | /come-funziona
[Content Writer CTA] soft_faq | soft | Domande frequenti | web | /faq
```
