import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import { styles } from './Graphic features';

const SideMenu = ({ isOpen, onClose, onLogout, setChangePwd }) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isOnMenu, setIsOnMenu] = useState(false); 
  const { width: screenWidth } = Dimensions.get('window');
  const menuWidth = screenWidth * 0.7;

  useEffect(() => {
    // Se isOpen è true, esegui l'animazione di apertura
    if (isOpen) {
     Animated.timing(slideAnim, {
       toValue: 1,
       duration: 300,
       useNativeDriver: true,
     }).start();
     setIsOnMenu(true);
   } 
   // Altrimenti, esegui l'animazione di chiusura PRIMA di nascondere il menu
   else{
     Animated.timing(slideAnim, {
       toValue: 0,
       duration: 300,
       useNativeDriver: true,
     }).start(() => {
       // Questa callback viene eseguita al termine dell'animazione.
       setIsOnMenu(false);
     });
   }
 }, [isOpen]);

  const menuTranslateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-menuWidth, 0],
  });

  const overlayOpacity = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  if(!isOnMenu){
    return null;
  }

  return (
    <View style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    }}>
      <Animated.View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: overlayOpacity,
        }}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
          }}
          onPress={onClose}
        />
      </Animated.View>

      <Animated.View 
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: menuWidth,
          backgroundColor: '#202134',
          transform: [{ translateX: menuTranslateX }],
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          justifyContent: 'flex-star',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity 
          onPress={() => {
            onClose();
            setChangePwd(true);
          }} 
          style={styles.buttonFirstSideMenu}
        >
          <Text style={styles.textSideMenu}>Cambia password</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            onClose();
            onLogout();
          }} 
          style={styles.buttonLastSideMenu}
        >
          <Text style={styles.textSideMenu}>Log Out</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SideMenu;