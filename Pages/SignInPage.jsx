import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import { styles } from '../Components/Graphic features';
import { auth } from '../Components/Firebase';
import { FontAwesome } from '@expo/vector-icons';
import RecoveryPassword from './RecoveryPassword';
import SignUpPage from './SignUpPage';


/**
 * 
 * @param {*} user
 * @param {*} isLogin 
 * @param {*} setIsLogin
 * @param {*} email
 * @param {*} setEmail
 * @param {*} password
 * @param {*} setPassword
 * @param {*} confirmPassword
 * @param {*} setConfirmPassword
 * @param {*} handleAuthentication
 * @returns Pagina per eseguire l'accesso, l'iscrizione o il recupero password
 */
const SignInPage = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleAuthentication,
  showSignUp,
  setShowSignUp
  }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

  const handleForgotPassword = () => {
    setForgotPasswordEmail('');
    setShowForgotPasswordForm(true);
  };

  const handleSignInPage = async () => {
    setShowForgotPasswordForm(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safe Password</Text>
      <View marginTop='20%'>
        <Text style={styles.text}>Inserisci indirizzo email </Text>
        <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder="example@email.com" autoCapitalize="none" />
        <Text style={styles.text} marginTop='10%'>Inserisci password</Text>
        <View>
          <TextInput
            style={styles.pwdInput}
            secureTextEntry={showPassword}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          {showPassword ? (
            <FontAwesome name="eye" style={styles.fontAwesomeEye} onPress={() => setShowPassword(!showPassword)} />
          ) : (
            <FontAwesome style={styles.fontAwesomeEye} name="eye-slash" onPress={() => setShowPassword(!showPassword)} />
          )}
        </View>
        <View style={styles.button} marginTop='20%'>
          <Button title="Esegui l'accesso" onPress={handleAuthentication} color='#00e480' />
        </View>
        <View marginTop='15%'>
          <Text style={styles.subtext}>Hai dimenticato la password? </Text>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.link}>Recupera password</Text>
          </TouchableOpacity>
        </View>
        <View marginTop='12%'>
          <Text style={styles.subtext}>Non sei ancora iscritto? </Text>
          <View>
            <Pressable style={styles.button}>
              <Text style={styles.link} onPress={() => {
                setShowSignUp(true);
                setEmail();
                setPassword();
                setConfirmPassword();
                setShowPassword(true);
              }}>{"Crea un account"}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <RecoveryPassword
        auth={auth}
        visible={showForgotPasswordForm}
        forgotPasswordEmail={forgotPasswordEmail}
        setForgotPasswordEmail={setForgotPasswordEmail}
        handleSignInPage={handleSignInPage}
      />
      <SignUpPage
        handleAuthentication={handleAuthentication}
        visible={showSignUp}
        setVisible={setShowSignUp}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        showSignUp={showSignUp}
        setShowSignUp={setShowSignUp}
      />
    </View>
  );
};

export default SignInPage;