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
- `src/App.css`: layout e componenti visivi (card centrale, form, badge, pulsanti, thank-you)
- `src/index.css`: reset + variabili di tema globali e tipografia
- `logos/Logo_Valore_Immobili_orrizontale_piccolo-removebg-preview.png`: logo brand ufficiale usato nella hero.
- `public/favicon.png`: favicon aggiornata dal nuovo logo brand.

### Flusso utente

1. L’utente atterra sulla landing e legge:
   - chi è Valore Immobili
   - cosa offre (valutazione sul posto, gratuita e senza impegno)
   - come funziona il servizio (su appuntamento, con sopralluogo)
2. Compila il form con:
   - nome e cognome
   - città dell’immobile
   - telefono
   - email
   - tempistica indicativa di vendita (entro 3/6/12 mesi)
   - consenso obbligatorio alla Privacy Policy (checkbox)
3. Al submit:
   - vengono effettuate le **validazioni lato client**
   - il frontend invia i dati a `POST /api/lead`
   - l'API salva la lead su Google Sheet includendo anche il consenso privacy (`accepted`)
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
VITE_IUBENDA_PRIVACY_URL=https://www.iubenda.com/privacy-policy/TUO_ID
```

In produzione (Vercel) aggiungi la stessa variabile nelle **Environment Variables** del progetto.

### Privacy Policy con Iubenda

La pagina della privacy è gestita con **Iubenda**. Il link nel form (checkbox consenso) punta al **Direct link** della policy ospitata su Iubenda.

1. Crea o accedi al [dashboard Iubenda](https://www.iubenda.com).
2. Crea/compila la **Privacy and Cookie Policy** per il sito.
3. Vai su **Embed** e copia il **Direct link** (es. `https://www.iubenda.com/privacy-policy/12345678`).
4. Imposta la variabile d’ambiente `VITE_IUBENDA_PRIVACY_URL` con quell’URL (in locale in `.env`, in produzione in Vercel).

Se `VITE_IUBENDA_PRIVACY_URL` non è impostata, il link resta `#` (da configurare prima del go-live).

### Note su integrazioni future

- Invio email di conferma/benvenuto
- Tracciamento Meta Pixel e/o Google Analytics

Ogni volta che si introduce un cambiamento significativo alla landing, alla logica del form o al flusso lead/thank-you, **aggiorna questo README** con:
- breve descrizione della modifica
- eventuali nuovi comandi o dipendenze
- note sulle integrazioni (es. dove finiscono i lead, come funziona l’email, ecc.)
