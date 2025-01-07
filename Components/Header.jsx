import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Graphic features";
import { Ionicons } from "@expo/vector-icons";

export default Header = ({
  leftIcon,
  leftFun = () => {}, // Valore di default per leftFun
  headerTxt = "",     // Valore di default per headerTxt
  isRight = false,    // Valore di default per isRight
  rightIcon,
  rightFun = () => {}, // Valore di default per rightFun
}) =>  {
return(
    <View style={styles.headerBackground}>
    <TouchableOpacity onPress={leftFun} style={styles.iconAreaHeaderRight}>
      <Ionicons name={leftIcon} style={styles.iconHeader} onPress={leftFun} />
    </TouchableOpacity>
    <Text style={styles.textHeader}>{String(headerTxt)}</Text>
    {isRight ?
      <TouchableOpacity onPress={rightFun} style={styles.iconAreaHeaderRight}>
      <Ionicons name={rightIcon} style={styles.iconHeader} onPress={rightFun} />
    </TouchableOpacity>
    :  <View style={styles.placeholder} />}
  </View>
);
};