import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import { styles } from '../Components/Graphic features';
import { auth } from '../Components/Firebase';
import { FontAwesome } from '@expo/vector-icons';
import RecoveryPassword from './RecoveryPassword';
import SingnUpPage from './SignUpPage';


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
 
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default SignInPage;