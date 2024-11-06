import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import StartPage from './Pages/StartPage';
import { auth, createUser, signInUser, onAuthStateChange, signOutUser } from './Components/Firebase';
import { removeFinalSpaces } from './Components/removeFinalSpaces';


/**
 * Struttura per l'inizializzazione dell'app
 * (Da non modificare)
 * @returns Inizio dell'intera app che ritorna la pagina per il login
 */
const App = () => {
  /**
   * Costanti e funzioni per modificare i valori delle costanti
   * (email, password, conferma password, utente, se ha effettuato il login)
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningSignUp, setWarningSignUp] = useState(false);

  /**
   * Funzione che si occupa di effettuare il cambio automatico dell'autenticazione e dell'utente
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  /**
   * Funzione asincrona che è sempre attiva per capire se è stato effettuato un accesso, un'iscrizione o un'uscita da un account.
   * Ciò è utile per l'app per stare nella schermata apposita
   * @returns stato di autenticazione
   */
  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOutUser(auth);
        console.log('User logged out successfully!');
      } else {
        if (showSignUp) {
          setEmail(removeFinalSpaces(email));
          setPassword(removeFinalSpaces(password));
          setConfirmPassword(removeFinalSpaces(confirmPassword));
          if (password !== confirmPassword) {
            setWarningSignUp(true);
            return;
          } else {
            try {
              await createUser(auth, email, password);
              console.log('User created successfully!');
            } catch (error) {
              setWarningSignUp(true);
            }
          }
        } else {
          setEmail(removeFinalSpaces(email));
          setPassword(removeFinalSpaces(password));
          await signInUser(auth, email, password);
          console.log('User signed in successfully!');
        }
      }
    } catch (error) {
      setWarning(true);
    }
  };

  return (
    <StartPage
      user={user}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      handleAuthentication={handleAuthentication}
      showSignUp={showSignUp}
      setShowSignUp={setShowSignUp}
      warning={warning}
      setWarning={setWarning}
      warningSignUp={warningSignUp}
      setWarningSignUp={setWarningSignUp}
    />
  );
};

export default App;