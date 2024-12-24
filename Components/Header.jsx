import { View, Text } from "react-native";
import { styles } from "./Graphic features";


export default Header = ({leftIcon, headerTxt, isRight, rightIcon}) => {
return(
    <View style={styles.headerBackground}>
    <TouchableOpacity onPress={handleSignInPage} style={styles.iconAreaHeaderRight}>
      <Ionicons name={String(leftIcon)} style={styles.iconHeader} onPress={handleSignInPage} />
    </TouchableOpacity>
    <Text style={styles.textHeader}>{String(headerTxt)}</Text>
    {isRight ?
      <TouchableOpacity onPress={handleSignInPage} style={styles.iconAreaHeaderRight}>
      <Ionicons name={String(rightIcon)} style={styles.iconHeader} onPress={handleSignInPage} />
    </TouchableOpacity>
    : null}
  </View>
);
};