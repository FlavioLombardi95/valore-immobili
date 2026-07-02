## Valore Immobili – Landing Page

Landing page React/Vite per il progetto **valore-immobili.it**, pensata per raccogliere lead di proprietari che stanno valutando la vendita di un immobile e desiderano una **valutazione reale sul posto**, non automatica.

### Stack

- **Framework**: React + Vite
- **Styling**: CSS modules globali (`index.css`, `App.css`) con palette arancione + verde scuro
- **Build/Dev**: Vite (`npm run dev`, `npm run build`, `npm run preview`)

### Struttura

- `src/App.jsx`: layout principale con:
  - pannello sinistro (hero con logo principale in alto, copy sintetica e trust bullets)
  - pannello destro (form di richiesta a 2 step + thank-you state dopo l’invio)
- `src/App.css`: layout e componenti visivi (card centrale, form, badge, pulsanti, thank-you; copy hero ottimizzato con testo nero per la leggibilità)
- `src/index.css`: reset + variabili di tema globali e tipografia
- `index.html`: imposta il titolo della pagina mostrato nella tab del browser (`valore immobili`)
- `logos/Logo_Valore_Immobili_orrizontale_piccolo-removebg-preview.png`: logo brand ufficiale usato nella hero.
- In desktop viene mostrata un'immagine dell'immobile sotto il testo hero.
- `public/favicon.png`: favicon (da `public/valutazione/assets/favicon-new.png`).
- `public/valutazione/assets/logo-dark.png`: logo su sfondi chiari (`step-1.html`, `step-3.html`).
- `public/valutazione/assets/logo-white.png`: logo su sfondi scuri (`lp.html`, `lp-thank-you.html`).
- `api/`: endpoint serverless usati dalla landing (`/api/contact-verify`, `/api/lead`, `/api/sheet`).

La cartella `valore-immobili-landing` è l'unica sorgente deployabile su Vercel (Root Directory del progetto).

### Flusso utente

1. L’utente atterra sulla landing e vede subito:
   - proposta di valore sintetica ("valutazione reale, gratuita, senza impegno")
   - trust bullets ad alta leggibilità
   - form di acquisizione
2. Su mobile il layout è ottimizzato per conversione:
   - il pannello form viene mostrato prima della hero lunga
   - il passaggio al form avviene senza dover scorrere molto
3. Compila il form in **2 step**:
   - **Passo 1**: città immobile + tempistica indicativa (3/6/12 mesi)
   - **Passo 2**: nome e cognome + telefono + email + consenso Privacy Policy
4. Durante la compilazione:
   - il **telefono** viene verificato in tempo reale su `POST /api/contact-verify` (Twilio/Telesign)
   - l’**email** non viene più verificata via API: solo controllo di formato (regex) in interfaccia e sul submit
5. Al submit:
   - vengono effettuate le validazioni lato client
   - `POST /api/lead` verifica il telefono in modalità **strict**; l’email solo **sintassi** e filtri anti-finti lato server (nessun Kickbox)
   - se il telefono non è valido, la lead viene rifiutata
   - se validi, la lead viene accettata e:
     - inoltrata al backend esterno via `LEAD_FORWARD_URL` (se presente), oppure
     - salvata direttamente su Google Sheet con `GOOGLE_SHEET_ID` + `GOOGLE_SERVICE_ACCOUNT_JSON`
   - al termine viene mostrata la **thank-you view** nel pannello destro.
   - il tracciamento `window.dataLayer.push({ event: 'lead_submit_success', timeframe })` resta invariato.

### Sviluppo locale

```bash
cd valore-immobili-landing
npm install
npm run dev
```

Apri poi il browser su `http://localhost:5173`.

Per far aprire il link «Privacy Policy» alla tua policy Iubenda, crea un file `.env` (copia da `.env.example`) e imposta:

```bash
VITE_IUBENDA_PRIVACY_URL=https://www.iubenda.com/privacy-policy/69451858
```

In produzione (Vercel) aggiungi la stessa variabile nelle **Environment Variables** del progetto.

Per la verifica **telefono** in tempo reale e al salvataggio lead aggiungi:

```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

L’**email** non richiede chiavi esterne: in `POST /api/lead` e `POST /api/contact-verify` (solo se richiesta esplicitamente) si applicano regex e filtri anti-indirizzi finti (`api/_lib/contact-verify.js`), senza Kickbox.

Se vuoi mantenere un salvataggio su sistema esterno (Google Sheet, CRM, webhook), configura anche:

```bash
LEAD_FORWARD_URL=https://example.com/api/lead
```

In assenza di `LEAD_FORWARD_URL`, l'API `POST /api/lead` valida i contatti ma non inoltra la lead.

Per il salvataggio diretto su Google Sheet (alternativa a `LEAD_FORWARD_URL`) configura:

```bash
GOOGLE_SHEET_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account", ...}
# opzionale
GOOGLE_SHEET_NAME=Foglio 1
```

Con queste variabili viene esposta anche `POST /api/sheet` nello stesso progetto.

### Variante landing ad alta conversione (`/public/valutazione/lp.html`)

E' stata aggiunta una nuova variante della landing per lead generation immobiliare in parallelo al flusso esistente, senza sostituire `step-1.html` e `step-3.html`.

- Nuova landing: `public/valutazione/lp.html`
- Nuova thank-you: `public/valutazione/lp-thank-you.html`
- Alias URL senza estensione:
  - `public/valutazione/lp/index.html` -> redirect a `/valutazione/lp.html`
  - `public/valutazione/lp-thank-you/index.html` -> redirect a `/valutazione/lp-thank-you.html`

Dettagli principali della variante LP:

- **Copy** allineata a `step-1.html` / pagina live (titolo, hero, bullet con Material Symbols, card Luca, form, sezioni “Perché non una valutazione online?”, “Zero pressioni, zero vincoli”, “Dicono di noi”, stesse citazioni e firme)
- **Look dark premium**: hero/shell scuro con vetri e accenti brand arancio/marrone; form in card chiara (`form-shell`) per leggibilità e conversione; blocchi sotto hero su fondi scuri (non replica la palette chiara di step-1); footer scuro; logo in box bianco per contrasto
- Griglia responsive (colonna sinistra: messaggio + Luca; destra: form sticky su desktop); su mobile ordine verticale hero → Luca → form → sezioni; touch target ≥ ~48px sui campi
- Submit su `POST /api/lead`; prima del submit il **telefono** passa da `POST /api/contact-verify` (nessuna verifica esterna sull’email)
- Form con **Nome** e **Cognome** separati in UI; il payload verso l’API concatena in `fullName` come atteso dal backend (`fullName`, `city`, `propertyType`, `squareMeters`, `phone`, `email`, `timeframe`, `privacyAccepted`)
- Push tracking al successo:
  - `window.dataLayer.push({ event: 'lead_submit_success', lead_type: 'form', timeframe })`
- Redirect success a:
  - `/valutazione/lp-thank-you.html?lead=ok`
- **WhatsApp**: solo su `lp.html` (link e FAB via `tracking.js` / `.js-whatsapp-link`). La thank-you `lp-thank-you.html` **non** include WhatsApp; copy e blocchi informativi sono allineati a `step-3.html`, con CTA «Torni al modulo» verso `/valutazione/lp.html`.

### Privacy Policy con Iubenda

La pagina della privacy è gestita con **Iubenda**. Il link nel form (checkbox consenso) punta al **Direct link** della policy ospitata su Iubenda.

1. Crea o accedi al [dashboard Iubenda](https://www.iubenda.com).
2. Crea/compila la **Privacy and Cookie Policy** per il sito.
3. Vai su **Embed** e copia il **Direct link** (es. `https://www.iubenda.com/privacy-policy/12345678`).
4. Imposta la variabile d’ambiente `VITE_IUBENDA_PRIVACY_URL` con quell’URL (in locale in `.env`, in produzione in Vercel).

### SEO (LP live `public/valutazione/step-1.html`)

Strategia: **una sola URL indicizzabile** (`https://valore-immobili.it/`), focus query locali Monza e Brianza. Dettaglio analisi e checklist GSC in `docs/SEO.md` (repo root).

- **Head:** title/description su query «valutazione immobiliare monza»; canonical, Open Graph, JSON-LD `Service` + `FAQPage`.
- **Hero:** badge «Monza e Brianza»; H1 emotivo + riga «Sopralluogo gratuito a Monza e in Brianza…»; su mobile il form compare prima dell’hero (`step-1` e `lp`).
- **Form:** due blocchi («Il tuo immobile» / «I tuoi contatti») con label visibili; submit con stato «Invio in corso…».
- **Layout (giu 2026):** sezione split immagine+lista al posto delle 3 card; «Zero pressioni» come lista; testimonial in blockquote; FAQ con `<details>` (testo sempre in HTML per SEO).
- **FAQ:** 3 domande Monza in pagina su `step-1.html` e `lp.html` (stesso testo dello schema).
- **Footer:** riga geo Monza/Brianza + link esterni istituzionali (Comune, Provincia) oltre a Privacy Iubenda.
- **`public/robots.txt`:** consente `/`; esclude step-3, lp ads e thank-you.
- **`public/sitemap.xml`:** solo homepage — da inviare in Search Console dopo il deploy.
- **Pagine secondarie** (`step-3`, `lp.html`, thank-you): `noindex` + canonical verso `/`.
- **www:** redirect 301 verso apex in `vercel.json` (se il deploy Vercel serve anche `www`).

### Note su integrazioni future

- Invio email di conferma/benvenuto
- Tracciamento Meta Pixel e/o Google Analytics

Ogni volta che si introduce un cambiamento significativo alla landing, alla logica del form o al flusso lead/thank-you, **aggiorna questo README** con:
- breve descrizione della modifica
- eventuali nuovi comandi o dipendenze
- note sulle integrazioni (es. dove finiscono i lead, come funziona l’email, ecc.)
