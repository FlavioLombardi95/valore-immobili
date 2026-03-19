## Valore Immobili – Landing Page

Landing page React/Vite per il progetto **valore-immobili.it**, pensata per raccogliere lead di proprietari che stanno valutando la vendita di un immobile a Monza e comuni limitrofi e desiderano una **valutazione reale sul posto**, non automatica.

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
   - dove opera (Monza + comuni limitrofi)
2. Compila il form con:
   - nome e cognome
   - città dell’immobile
   - telefono
   - email
   - tempistica indicativa di vendita (entro 3/6/12 mesi)
3. Al submit:
   - vengono effettuate le **validazioni lato client**
   - in questa fase di sviluppo il submit è simulato; al termine viene mostrata la **thank-you view** nel pannello destro.

### Sviluppo locale

```bash
cd valore-immobili-landing
npm install
npm run dev
```

Apri poi il browser su `http://localhost:5173`.

### Note su integrazioni future

- Salvataggio lead (es. Google Sheet o database)
- Invio email di conferma/benvenuto
- Tracciamento Meta Pixel e/o Google Analytics

Ogni volta che si introduce un cambiamento significativo alla landing, alla logica del form o al flusso lead/thank-you, **aggiorna questo README** con:
- breve descrizione della modifica
- eventuali nuovi comandi o dipendenze
- note sulle integrazioni (es. dove finiscono i lead, come funziona l’email, ecc.)
