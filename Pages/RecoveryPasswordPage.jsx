import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, Alert } from 'react-native';
import { sendPasswordResetEmail } from '@firebase/auth';
import { styles } from '../Components/Graphic features';
import { useState } from 'react';
import Table from '../Components/Table';

const RecoveryPasswordPage = ({ auth, visible, forgotPasswordEmail, setForgotPasswordEmail, handleSignInPage }) => {

  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [info, setInfo] = useState(false);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      setTitle("Avviso");
      setMsg("Email di recupero password inviata!");
      setInfo(true);
    } catch (error) {
      console.error(error);
      setTitle("Attenzione");
      setMsg("Si è verificato un errore durante l'invio dell'email di recupero");
      setInfo(true);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <HeaderRNE
          backgroundColor='#00e480'
          leftComponent={
            <View>
              <TouchableOpacity onPress={handleSignInPage}>
                <Icon type="ionicon" name="return-up-back-outline" color="white" />
              </TouchableOpacity>
            </View>
          }
          centerComponent={{ text: 'Recupera password', style: styles.textHeader, onPress: handleSignInPage }}
        />
        <View style={styles.container} marginTop='20%'>
          <Text style={styles.text}>Inserisci la tua email:</Text>
          <TextInput style={styles.textInput} placeholder="example@email.com" autoCapitalize="none" onChangeText={setForgotPasswordEmail} value={forgotPasswordEmail} />
          <View style={styles.button} marginTop='15%'>
            <Button title="Richiedi password" onPress={handleResetPassword} color='#00e480' />
          </View>
        </View>
        <Table
          visible={info}
          setVisible={() => {
            setInfo(false);
            handleSignInPage();}}
          title={title}
          msg={msg}
        />
      </View>
    </Modal>
  );
};

export default RecoveryPasswordPage;