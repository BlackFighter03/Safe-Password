import { View, Alert, Button, Modal } from 'react-native';
import { styles } from './Graphic features';

const ManageMenu = ({menuVisible, setMenuVisible, setTableVisible, setModalVisible, removePassword }) => {

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Button title="Visualizza" onPress={() => {
              setTableVisible(true);
              setMenuVisible(false); 
            }}  color="rgb(3, 159, 86)"/>
            <Button title="Modifica" onPress={() => {
              setModalVisible(true);
              setMenuVisible(false);
            }}  color="rgb(3, 159, 86)"/>
            <Button title="Elimina" onPress={() => {
              removePassword();
              setMenuVisible(false);
            }}  color="rgb(194, 8, 8)"/>
            <Button title="Annulla" onPress={() => {
              setMenuVisible(false);
              }} color="rgb(151, 8, 8)" />
          </View>
        </View>
      </Modal>
    );
};

export default ManageMenu;