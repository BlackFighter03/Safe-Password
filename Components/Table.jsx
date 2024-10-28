import { Modal, Pressable, View, Text } from "react-native";
import { styles } from "./Graphic features";


const Table = ({title, msg, visible, setVisible}) => {
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        >
        <View style={styles.tableBackground}>
            <View style={styles.tableContent}>
            <Text style={styles.textHeaderTable}>{title}</Text>
            <Text marginTop='2%' style={styles.textTable}>{msg}</Text>
            <View marginTop='2%'>
                <Pressable onPress={setVisible}>
                <Text style={styles.textReturn}>OK</Text>
                </Pressable>
            </View>
            </View>
        </View>
        </Modal>
    );
}

export default Table;