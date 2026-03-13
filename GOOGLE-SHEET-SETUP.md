# Collegare il Google Sheet

**Il tuo foglio:**  
ID = `1A_dUamBw9zeOmQ5cCLYn_dEMBZ2dtVXRKi-SuMR190w`  
(da usare come `GOOGLE_SHEET_ID` su Vercel)

## 1. Crea il foglio e la struttura

1. Vai su [Google Sheet](https://sheets.google.com) e crea un nuovo foglio.
2. Nella **prima riga** inserisci le intestazioni (es.):  
   `Data,Nome e cognome,Città,Telefono,Email,Tempistica`
3. Copia l’**ID del foglio** dall’URL:  
   `https://docs.google.com/spreadsheets/d/ **QUESTO_È_LO_SHEET_ID** /edit`

## 2. Lettura (GET /api/sheet)

- In Google Sheet: **File → Condividi → Pubblica sul web**.
- Scegli **Foglio 1** (o il foglio che usi), formato **Valori separati da virgola (.csv)**.
- Clicca **Pubblica**.
- In Vercel (e in locale) imposta la variabile:
  - `GOOGLE_SHEET_ID` = l’ID del foglio (solo l’ID, senza URL).

## 3. Scrittura lead (POST /api/lead)

1. Vai su [Google Cloud Console](https://console.cloud.google.com).
2. Crea un progetto (o usane uno esistente).
3. **API e servizi → Libreria** → cerca “Google Sheets API” → **Abilita**.
4. **API e servizi → Credenziali → Crea credenziali → Account di servizio**.
5. Nome (es. `valore-immobili-sheet`) → **Crea e continua** → **Fine**.
6. Clicca sull’account di servizio creato → **Chiavi** → **Aggiungi chiave → Crea nuova chiave** → **JSON** → Scarica.
7. Apri il file JSON scaricato. In **Vercel**:  
   **Project → Settings → Environment Variables**  
   - Nome: `GOOGLE_SERVICE_ACCOUNT_JSON`  
   - Valore: incolla **l’intero contenuto** del file JSON (una riga sola, senza modifiche).
8. Condividi il **Google Sheet** con l’email dell’account di servizio (nel JSON è `client_email`):  
   nel foglio **Condividi** → aggiungi quell’email con permesso **Editor**.

## 4. Variabili su Vercel (Environment Variables)

Sì: devi aggiungere **esattamente quelle due variabili** (e solo quelle, se usi i default) nelle **Environment Variables** del progetto su Vercel. Senza non funzionano né la lettura del foglio né il salvataggio dei lead dal form.

**Dove si aggiungono**

1. Vai su [vercel.com](https://vercel.com) → il tuo progetto **valore-immobili**.
2. In alto: **Settings** → nella colonna sinistra **Environment Variables**.

**Cosa aggiungere**

| Variabile | Obbligatoria | Cosa mettere |
|-----------|--------------|--------------|
| **`GOOGLE_SHEET_ID`** | Sì | L’ID del foglio: `1A_dUamBw9zeOmQ5cCLYn_dEMBZ2dtVXRKi-SuMR190w` (quello del tuo link). Serve sia per leggere il foglio (GET /api/sheet) sia per scriverci i lead (POST /api/lead). |
| **`GOOGLE_SERVICE_ACCOUNT_JSON`** | Sì per il form | L’**intero contenuto** del file JSON della chiave dell’account di servizio (quello scaricato da Google Cloud). Copia tutto, dall’`{` iniziale alla `}` finale, e incollalo nel valore della variabile. Su Vercel puoi incollare anche su più righe; va bene sia su una riga sola sia con gli a capo. |

- **Name** = esattamente `GOOGLE_SHEET_ID` e `GOOGLE_SERVICE_ACCOUNT_JSON` (niente spazi, stesso nome).
- **Value** = il valore come sopra.
- **Environment** = seleziona almeno **Production** (e, se vuoi, anche Preview).

**Opzionali** (solo se il tuo foglio ha un nome diverso o usi un altro foglio):  
`GOOGLE_SHEET_NAME` (es. `Foglio 1`), `GOOGLE_SHEET_GID` (es. `0`). Se non li aggiungi, si usano questi default.

## 5. Redeploy

Dopo aver impostato le variabili su Vercel, fai un **redeploy** (Deployments → ⋮ sul deployment più recente → Redeploy) così le API usano le nuove variabili.

## 6. Test in autonomia

Dalla root del repo:

```bash
# Test unitari (parser CSV)
npm install && npm run test

# Smoke test API (contro l’app deployata)
BASE_URL=https://valore-immobili-az2m.vercel.app npm run test:api
```

Dalla cartella landing:

```bash
cd valore-immobili-landing && npm install && npm run test
```
