import { View, Text, TextInput, Button, Modal, Pressable } from 'react-native';
import { styles } from '../Components/Graphic features';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const SignUpPage = ({ handleAuthentication, visible, setVisible, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) => {

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.title} paddingTop={padTop}>Safe Password</Text>
                <View marginTop='15%'>
                    <Text style={styles.text}>Inserisci indirizzo email</Text>
                    <TextInput style={styles.textInput} placeholder='example@email.com' autoCapitalize="none" onChangeText={setEmail} value={email} />
                    <Text style={styles.text} marginTop='5%'>Inserisci password</Text>
                    <View>
                        <TextInput
                            style={styles.pwdInput}
                            secureTextEntry={showPassword}
                            placeholder='Password'
                            onChangeText={setPassword}
                            value={password}
                        />
                        {showPassword ? (
                            <FontAwesome name="eye" style={styles.fontAwesomeEye} onPress={() => setShowPassword(!showPassword)} />
                        ) : (
                            <FontAwesome name="eye-slash" style={styles.fontAwesomeEye} onPress={() => setShowPassword(!showPassword)} />
                        )}
                    </View>
                </View>
                <Text style={styles.text} marginTop='5%'>Ripeti password</Text>
                <View>
                    <TextInput
                        style={styles.pwdInput}
                        secureTextEntry={showConfirmPassword}
                        placeholder='Conferma password'
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                    {showConfirmPassword ? (
                        <FontAwesome name="eye" style={styles.fontAwesomeEye} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
                    ) : (
                        <FontAwesome name="eye-slash" style={styles.fontAwesomeEye} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />
                    )}
                </View>
                <View marginTop='20%' marginLeft='30%' marginRight='30%'>
                    <Button title='Iscriviti' style={styles.button} onPress={subscribe} color='#00e480' />
                </View>
                {error ?
                    <View marginTop='10%'>
                        <Text style={styles.textWarning}>La password deve essere almeno di 6 caratteri</Text>
                    </View>
                    :
                    null}
                <View marginTop='12%'>
                    <Text style={styles.subtext}>Sei già iscritto?</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.link} onPress={() => {
                            setEmail("");
                            setVisible(false);
                            setPassword();
                            setShowPassword(true);
                        }}>{"Esegui l'accesso"}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default SignUpPage;