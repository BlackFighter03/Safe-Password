import { View, Text, TextInput, Button, Modal, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from '../Components/Graphic features';
import { FontAwesome } from '@expo/vector-icons';
import Table from '../Components/Table';
import { useState } from 'react';

const SignUpPage = ({ handleAuthentication, visible, setVisible, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, warningSignUp, setWarningSignUp }) => {
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [error, setError] = useState(false);
    const [padTop, setPadTop] = useState("20%");

    const subscribe = () => {
        if (password.length < 5) {
            setError(true);
            setPadTop("20%");
        }else if (password != confirmPassword) {
            setWarningSignUp(true); 
        }else{
            setError(false);
            setPadTop("20%");
            handleAuthentication();
        }

    }

    return (
        <Modal visible={visible} animationType='fade'>
            <KeyboardAwareScrollView
                style={styles.container}
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
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
                        <Button title='Iscriviti' style={styles.button} onPress={subscribe} color='rgb(3, 159, 86)' />
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
                    <Table
                        visible={warningSignUp}
                        setVisible={() => setWarningSignUp(false)}
                        title={(password != confirmPassword) ? "Attenzione" : "Avviso"}
                        msg={(password != confirmPassword) ? "Le password non sono uguali!" : "L'account esiste già"}
                    />
                </View>
            </KeyboardAwareScrollView>
        </Modal>
    );
};

export default SignUpPage;