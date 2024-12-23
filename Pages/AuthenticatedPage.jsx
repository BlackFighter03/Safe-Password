import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';
import AddPasswordModal from './AddPasswordModal';
import Item from '../Components/Item';
import { styles } from '../Components/Graphic features';
import * as FileSystem from 'expo-file-system';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { auth, storage } from '../Components/Firebase';
import { criptaTesto, decriptaTesto } from '../Components/Criptography';
import sortedStrings from '../Components/PasswordSorting';
import SideMenu from '../Components/SideMenu';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ChangePasswordPage from './ChangePasswordPage';
/**
 * Componente: AuthenticatedScreen
 * Descrizione: Questa schermata viene mostrata dopo l'accesso dell'utente.
 * Gestisce la visualizzazione, l'aggiunta, la modifica e l'eliminazione delle password,
 * salvando i dati sia in Firebase Storage che nel file system del dispositivo.
 */
const AuthenticatedPage = ({ user, email, password, setPassword, handleAuthentication }) => {
  // --- Definizione delle costanti ---

  // Costanti per la gestione del file delle password
  const fileName = `passwords_${email}.json`;  // Nome del file JSON
  const pathFirestore = `accounts/${fileName}`; // Percorso del file in Firebase Storage
  const storageRef = ref(storage, pathFirestore); // Riferimento al file in Firebase Storage
  const localFilePath = FileSystem.documentDirectory + fileName; // Percorso del file nel file system del dispositivo

  // --- Definizione dello stato del componente ---

  // Array di oggetti che contiene le password dell'utente
  const [decryptedPasswords, setDecryptedPasswords] = useState([]);

  // Indice dell'elemento correntemente selezionato nell'array 'passwords'
  const [index, setIndex] = useState(-1);

  // Flag per gestire la visibilità del modale di aggiunta password
  const [modalVisible, setModalVisible] = useState(false);

  // Flag per gestire la visibilità del modale di modifica password
  const [modalVisibleForChange, setModalVisibleForChange] = useState(false);

  // Booleana per apertura della tendina
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

  // Booleana per apertura pagina cambio password
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  // Variabili di stato per i campi di input del modale 
  const [websiteTemp, setWebsiteTemp] = useState('');
  const [usernameTemp, setUsernameTemp] = useState('');
  const [passwordTemp, setPasswordTemp] = useState('');

  // Flag per indicare se è in corso il caricamento del file
  const [isLoading, setIsLoading] = useState(true); // isLoading è ora gestito come stato

  // --- Effetto collaterale per il download iniziale delle password ---

  useEffect(() => {
    // Listener per lo stato di autenticazione di Firebase
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && email) {
        // Se l'utente è autenticato, scarica le password da Firebase
        await downloadFile();
      }
    });

    // Rimuove il listener quando il componente viene smontato
    return () => unsubscribe();
  }, []); // Esegue l'effetto solo quando il componente viene montato o smontato

  // --- Effetto collaterale per aggiornare il file locale quando 'passwords' cambia ---

  useEffect(() => {
    const updateLocalFile = async () => {
      if (isLoading) return; // Esci se il file è in caricamento
      try {
        const encryptedPasswords = decryptedPasswords.map((item) => ({
          website: criptaTesto(user.uid, item.website),
          username: criptaTesto(user.uid, item.username),
          password: criptaTesto(user.uid, item.password),
        }));

        await FileSystem.writeAsStringAsync(
          localFilePath,
          JSON.stringify(encryptedPasswords)
        );
        console.log('File locale aggiornato con successo!');
        uploadFile();
      } catch (error) {
        console.error('Errore durante l\'aggiornamento del file locale:', error);
      }
    };

    updateLocalFile(); // Chiama la funzione per aggiornare il file all'avvio
  }, [decryptedPasswords]); // Esegui l'effetto ogni volta che 'passwords' cambia

  /**
   * downloadFile: Scarica il file delle password da Firebase Storage.
   */
  const downloadFile = async () => {
    setIsLoading(true); // Inizia il caricamento
    try {
      console.log('Provando a scaricare il file...');
      // Ottiene l'URL di download del file da Firebase Storage
      const downloadURL = await getDownloadURL(storageRef);
      console.log('URL di download:', downloadURL);
      // Scarica il file da Firebase Storage e lo salva nel file system del dispositivo
      const { uri: downloadedFileUri } = await FileSystem.downloadAsync(downloadURL, localFilePath);
      console.log('File scaricato in:', downloadedFileUri);
      // Sposta il file scaricato nella posizione finale nel file system
      await FileSystem.moveAsync({
        from: downloadedFileUri,
        to: localFilePath,
      });
      console.log('File spostato con successo!');
      // Legge il contenuto del file come stringa
      const fileContent = await FileSystem.readAsStringAsync(localFilePath);
      console.log('Contenuto del file:\n', fileContent);
      // Converte il contenuto del file (JSON) in un array di oggetti JavaScript
      const passwordsData = JSON.parse(fileContent);
      if (passwordsData.length > 0) {
        const decryptedData = passwordsData.map((item) => ({
          website: decriptaTesto(user.uid, item.website),
          username: decriptaTesto(user.uid, item.username),
          password: decriptaTesto(user.uid, item.password),
        }));
        setDecryptedPasswords(decryptedData);
      } else {
        setDecryptedPasswords([]);
      }
      setIsLoading(false); // Fine caricamento
    } catch (error) {
      // Gestione degli errori durante il download
      console.log(error);
      createEmptyFileOnDevice();
      // Imposta 'passwords' come un array vuoto
      setDecryptedPasswords([]);
      setIsLoading(false); // Fine caricamento
    }
  };

  /**
   * createEmptyFileOnDevice: Crea un nuovo file vuoto sul file system del dispositivo.
   */
  const createEmptyFileOnDevice = async () => {
    try {
      // Scrive un array JSON vuoto nel file specificato
      await FileSystem.writeAsStringAsync(localFilePath, JSON.stringify([]));
      console.log('File creato con successo:', localFilePath.uri);
      // Carica il file vuoto su Firebase Storage
      uploadFile();
    } catch (error) {
      console.error('Errore durante la creazione del file:', error);
    }
  };

  /**
   * uploadFile: Carica il file delle password su Firebase Storage.
   */
  const uploadFile = async () => {
    try {
      console.log('Inizio caricamento del file...');
      // Legge il contenuto del file come stringa
      const fileContent = await FileSystem.readAsStringAsync(localFilePath);
      console.log('Contenuto del file:\n', fileContent);
      // Crea un nuovo oggetto Blob dal contenuto del file
      const blob = new Blob([fileContent], { type: 'application/json' });
      // Carica il blob su Firebase Storage
      uploadBytes(storageRef, blob);
      console.log('File caricato con successo!');
    } catch (error) {
      console.error('Errore durante il caricamento del file:', error);
    }
  };
  
  return (  
    <View style={styles.container}>
      <HeaderRNE
        backgroundColor="#00e480"
        leftComponent={
          <View>
            <TouchableOpacity onPress={() => setIsOpenSideMenu(true)}>
               {/**handleAuthentication usata per il logout*/}
               <MaterialCommunityIcons name="menu" size={24} color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: 'Safe Password', style: styles.textHeader }}
        rightComponent={
          <View>
            <TouchableOpacity onPress={handleAddPassword}>
              <Icon type="materialicons" name="add-circle" color="white" />
            </TouchableOpacity>
          </View>
        }
      />
      <SideMenu
        isOpen={isOpenSideMenu}
        onClose={() => setIsOpenSideMenu(false)}
        onLogout={handleAuthentication}
        setChangePwd={() => setChangePasswordVisible(true)}
      />
      <FlatList
        data={decryptedPasswords}
        extraData={decryptedPasswords.length}
        renderItem={({ item }) => (
          <Item
            item={item}
            passwords={decryptedPasswords}
            configureOpenMenu={configureOpenMenu}
            setModalVisible={setModalVisibleForChange}
            removePassword={removePassword}
          />
        )}
      />
      {/* Modale per aggiungere una nuova password */}
      <AddPasswordModal
        visible={modalVisible}
        usernameTemp={usernameTemp}
        websiteTemp={websiteTemp}
        passwordTemp={passwordTemp}
        onCancel={() => setModalVisible(false)}
        onSave={handleSavePassword}
        setWebsiteTemp={setWebsiteTemp}
        setUsernameTemp={setUsernameTemp}
        setPasswordTemp={setPasswordTemp}
      />
      {/* Modale per modificare una password esistente */}
      <AddPasswordModal
        visible={modalVisibleForChange}
        usernameTemp={usernameTemp}
        websiteTemp={websiteTemp}
        passwordTemp={passwordTemp}
        onCancel={() => setModalVisibleForChange(false)}
        onSave={changePassword}
        setWebsiteTemp={setWebsiteTemp}
        setUsernameTemp={setUsernameTemp}
        setPasswordTemp={setPasswordTemp}
      />
      <ChangePasswordPage
        auth={auth}
        email={email}
        password={password}
        visible={changePasswordVisible}
        onClose={() => setChangePasswordVisible(false)}
        setPassword={setPassword}
      />
    </View>
  );
};

export default AuthenticatedPage;