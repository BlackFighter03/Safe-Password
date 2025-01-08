import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from '@firebase/auth';
import { styles } from '../Components/Graphic features';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import Table from '../Components/Table';
import Header from '../Components/Header';

const ChangePasswordPage = ({ auth, email, password, setPassword, visible, onClose }) => {


  const [oldPwd, setOldPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [info, setInfo] = useState(false);
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const user = auth.currentUser;

  const handleChangePassword = async () => {

    if (newPwd.length < 6) {
      setTitle("Attenzione");
      setMsg("La lunghezza della nuova password non è sufficiente. (Min 6 caratteri)");
      setInfo(true);
    } else if (password != oldPwd) {
      setTitle("Attenzione");
      setMsg("La vecchia password non coincide con quella attuale");
      setInfo(true);
    } else if (password == newPwd) {
      setTitle("Attenzione");
      setMsg("La nuova password coincide con quella attuale");
      setInfo(true);
    } else {


      try {

        if (!user) {
          // Gestisci il caso in cui l'utente non è loggato
          setTitle("Errore");
          setMsg("Utente non loggato");
          setInfo(true);
          onClose(); // Chiudi il modale 
          return;
        }
        // Crea le credenziali con la vecchia password
        const credential = EmailAuthProvider.credential(email, oldPwd);
        // Riautentica l'utente
        await reauthenticateWithCredential(user, credential);
        // Aggiorna la password
        await updatePassword(user, newPwd);
        setPassword(newPwd);
        setTitle("Avviso");
        setMsg("Password aggiornata correttamente!");
        setInfo(true);

        setNewPwd('');
        setOldPwd('');
        // Chiudi il modale dopo il cambio password
        onClose();
      } catch (error) {
        setTitle("Attenzione");
        setMsg("Si è verificato un errore nell'impostazione della nuova password. Controlla di aver inserito i dati corretti");
        setInfo(true);

        console.error("Errore durante il cambio password:", error);

      }
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <KeyboardAwareScrollView
                style={styles.container} // Imposta lo stile desiderato per la ScrollView. Assicurati che "flex: 1" sia presente.
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
      <View style={styles.container}>
        <Header
          leftIcon={"return-up-back-outline"}
          leftFun={onClose}
          headerTxt={"Cambia password"}
          rightIcon={""}
        />
        <View style={styles.container} marginTop='20%'>

          <Text style={styles.text}>Inserisci la tua vecchia password</Text>
          <View>
            <TextInput
              style={styles.pwdInput}
              secureTextEntry={showPassword}
              placeholder='Vecchia password'
              onChangeText={setOldPwd}
              value={oldPwd}
            />
            {showPassword ? (
              <FontAwesome name="eye" style={styles.fontAwesomeEye} onPress={() => setShowPassword(!showPassword)} />
            ) : (
              <FontAwesome name="eye-slash" style={styles.fontAwesomeEye} onPress={() => setShowPassword(!showPassword)} />
            )}
          </View>
          <Text style={styles.text} marginTop='5%'>Inserisci la tua password</Text>
          <View>
            <TextInput
              style={styles.pwdInput}
              secureTextEntry={showConfirmPassword}
              placeholder='Nuova password'
              onChangeText={setNewPwd}
              value={newPwd}
            />
            {showConfirmPassword ? (
              <FontAwesome name="eye" style={styles.fontAwesomeEye} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
            ) : (
              <FontAwesome name="eye-slash" style={styles.fontAwesomeEye} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
            )}
          </View>
          <View style={styles.button} marginTop='15%'>
            <Button title="Richiedi password" onPress={handleChangePassword} color='rgb(3, 159, 86)' />
          </View>
        </View>
        <Table
          visible={info}
          setVisible={() => setInfo(false)}
          title={title}
          msg={msg}
        />
      </View>
      </KeyboardAwareScrollView>
    </Modal >
  );
};

export default ChangePasswordPage;