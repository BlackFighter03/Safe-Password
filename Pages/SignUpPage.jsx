import { View, Text, TextInput, Button, Modal, Pressable } from 'react-native';
import { styles } from '../Components/Graphic features';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const SingnUpPage = ({ handleAuthentication, visible, setVisible, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword }) => {

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.container}>
              
            </View>
        </Modal>
    );
};

export default SingnUpPage;