Installazione ambiente per la programmazione:

1. Scaricare visual studio code, npm e node-js
2. Scaricare da questo github il contenuto presente in main
3. Inserire all'interno della cartella del codice il pacchetto presente nel link del cloud google allegato
4. Scaricare nel terminale expo con il comando "npm install expo"
5. Far partire la simulazione dell'app, trovandosi nella cartella in cui è presente tutto il progetto, scrivendo "npx expo start". Inizialmentete si potrebbero riscontrare degli errori che chiedono l'istallazione di altre librerie. Installare le librerie richieste dal terminale. 

****************************************************************************************************************************************************************************************************************

Attività da completare nell'app:

1. Modificare la schermata un AuthenticatedScreen.jsx in modo tale da avere una barra dove è presente: a sinistra un menu a tendina, al centro il logo, a destra un pulsante per l'aggiunta delle password. Nel menu a tendina è presente un tasto per le impostazioni dell'account, il logout, informazioni a come funziona l'app (facoltativo), e di nuovo l'aggiunta delle password;
2. Aggiungere della pagina e della funzione per poter inserire nuove password e visualizzarle nel file del punto 1. Inoltre la possibilità di salvare le password il locale (per ora)
3. Scrivere una pagina dedicata alla spiegazione di come funziona l'app (facoltativo)

CONSIGLIO: UTILiZZA GOOGLE AI STUDIO PER SCRIVERE IL CODICE PIU' VELOcemenTE E TI OCCuPI SOLO DI COLLEGARE LE VARIE PARTI TRA LORO PER RENDERLO FUNZIONANTE

****************************************************************************************************************************************************************************************************************

Ecco una panoramica del progetto:

Scopo: L'applicazione è un gestore di password che consente agli utenti di memorizzare in modo sicuro le proprie credenziali di accesso.
Tecnologia:

+ Expo: Framework per lo sviluppo di applicazioni mobile cross-platform con React Native.
+ React Native: Framework JavaScript per la creazione di applicazioni native per iOS e Android.
+ React JS: Libreria JavaScript per la creazione di interfacce utente.
+ TypeScript: Superset di JavaScript che aggiunge tipizzazione statica.

Caratteristiche:

+ Memorizzazione delle password: L'app consente agli utenti di aggiungere, modificare ed eliminare password.
+ Crittografia: Le password vengono crittografate per proteggerle dall'accesso non autorizzato.
+ Autenticazione: L'app potrebbe includere un sistema di autenticazione per proteggere l'accesso ai dati degli utenti.

Punti di forza:

+ Utilizzo di tecnologie moderne: Expo, React Native e TypeScript sono tecnologie popolari e ben supportate per lo sviluppo di applicazioni mobile.
+ Crittografia: La crittografia delle password è fondamentale per la sicurezza dell'applicazione.

Punti da migliorare:

+ Documentazione: La repository GitHub potrebbe beneficiare di una migliore documentazione, come un README completo che descrive l'applicazione, le sue funzionalità e le istruzioni per l'utilizzo e il contributo.
+ Test: L'inclusione di test unitari e di integrazione aiuterebbe a garantire la qualità del codice e a prevenire bug.
+ Sicurezza: È importante valutare attentamente le misure di sicurezza implementate nell'applicazione, come il metodo di crittografia utilizzato e la gestione delle chiavi.

Suggerimenti:

+ Aggiungere un sistema di backup e ripristino per i dati degli utenti.
+ Implementare funzionalità di sincronizzazione cloud per accedere alle password da più dispositivi.
+ Integrare l'autenticazione biometrica (ad esempio, impronta digitale o riconoscimento facciale) per un accesso più sicuro.

Conclusione:

Il progetto SafePassword è un buon punto di partenza per un gestore di password. Con alcune migliorie, potrebbe diventare un'applicazione robusta e affidabile.

****************************************************************************************************************************************************************************************************************

Comandi git da usare

1. git pull "link"
2. git add -A
3. git commit ( -> i modifica effettuata -> schiacciare esc -> scrivere :x e premere invio)
4. git push "link"
