import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, Alert } from 'react-native';
import { sendPasswordResetEmail } from '@firebase/auth';
import { styles } from '../Components/Graphic features';

const RecoveryPassword = ({auth, visible, forgotPasswordEmail, setForgotPasswordEmail, handleSignInPage}) => {

    const handleResetPassword = async () => {
        try {
          await sendPasswordResetEmail(auth, forgotPasswordEmail);
          Alert.alert('Avviso', 'Email di recupero password inviata!');
          handleSignInPage();
        } catch (error) {
          console.error(error);
          Alert.alert("Attenzione", "Si è verificato un errore durante l'invio dell'email di recupero.");
        }
      };

    };

    export default RecoveryPassword;