## Valore Immobili – Landing Page

Landing page React/Vite per il progetto **valore-immobili.it**, pensata per raccogliere lead di proprietari che stanno valutando la vendita di un immobile e desiderano una **valutazione reale sul posto**, non automatica.

### Stack

- **Framework**: React + Vite
- **Styling**: CSS modules globali (`index.css`, `App.css`) con palette arancione + verde scuro
- **Build/Dev**: Vite (`npm run dev`, `npm run build`, `npm run preview`)

### Struttura

- `src/App.jsx`: layout principale con:
  - pannello sinistro (hero con logo principale in alto, testo, punti chiave del servizio)
  - pannello destro (form di richiesta + thank-you state dopo l’invio)
- `src/App.css`: layout e componenti visivi (card centrale, form, badge, pulsanti, thank-you; copy hero ottimizzato con testo nero per la leggibilità)
- `src/index.css`: reset + variabili di tema globali e tipografia
- `index.html`: imposta il titolo della pagina mostrato nella tab del browser (`valore immobili`)
- `logos/Logo_Valore_Immobili_orrizontale_piccolo-removebg-preview.png`: logo brand ufficiale usato nella hero.
- In desktop viene mostrata un'immagine dell'immobile sotto il testo hero.
- `public/favicon.png`: favicon aggiornata dal nuovo logo brand.
- `api/`: endpoint serverless usati dalla landing (`/api/contact-verify`, `/api/lead`, `/api/sheet`).

La cartella `valore-immobili-landing` è l'unica sorgente deployabile su Vercel (Root Directory del progetto).

### Flusso utente

1. L’utente atterra sulla landing e legge:
   - chi è Valore Immobili
   - spaziatura hero migliorata sotto il logo per leggibilità
   - cosa offre (valutazione sul posto, gratuita e senza impegno)
   - copy hero aggiornata per chiarire che la stima non è automatica: è un’analisi concreta fatta sul posto
   - come funziona il servizio (su appuntamento, con sopralluogo)
2. Compila il form con:
   - nome e cognome
   - città dell’immobile
   - telefono
   - email
   - tempistica indicativa di vendita (entro 3/6/12 mesi)
   - consenso obbligatorio alla Privacy Policy (checkbox)
3. Durante la compilazione:
   - telefono e email vengono verificati in tempo reale su `POST /api/contact-verify`
   - il form mostra solo stato **verde/rosso**:
     - verde: dato valido
     - rosso: dato invalido
4. Al submit:
   - vengono effettuate le validazioni lato client
   - `POST /api/lead` rifà la verifica server-side in modalità **strict**
   - se email/telefono non sono validi, la lead viene rifiutata
   - se validi, la lead viene accettata e:
     - inoltrata al backend esterno via `LEAD_FORWARD_URL` (se presente), oppure
     - salvata direttamente su Google Sheet con `GOOGLE_SHEET_ID` + `GOOGLE_SERVICE_ACCOUNT_JSON`
   - al termine viene mostrata la **thank-you view** nel pannello destro.

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

Per le verifiche realtime e il blocco strict aggiungi anche:

```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
KICKBOX_API_KEY=live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

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

### Privacy Policy con Iubenda

La pagina della privacy è gestita con **Iubenda**. Il link nel form (checkbox consenso) punta al **Direct link** della policy ospitata su Iubenda.

1. Crea o accedi al [dashboard Iubenda](https://www.iubenda.com).
2. Crea/compila la **Privacy and Cookie Policy** per il sito.
3. Vai su **Embed** e copia il **Direct link** (es. `https://www.iubenda.com/privacy-policy/12345678`).
4. Imposta la variabile d’ambiente `VITE_IUBENDA_PRIVACY_URL` con quell’URL (in locale in `.env`, in produzione in Vercel).

### Note su integrazioni future

- Invio email di conferma/benvenuto
- Tracciamento Meta Pixel e/o Google Analytics

Ogni volta che si introduce un cambiamento significativo alla landing, alla logica del form o al flusso lead/thank-you, **aggiorna questo README** con:
- breve descrizione della modifica
- eventuali nuovi comandi o dipendenze
- note sulle integrazioni (es. dove finiscono i lead, come funziona l’email, ecc.)
