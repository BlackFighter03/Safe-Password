import { StyleSheet } from 'react-native';
import SideMenu from './SideMenu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202134',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  modalContent: {
    backgroundColor: 'white', 
    padding: 1.5,
    borderRadius: 5, 
    width: '90%', 
    elevation: 5, 
  },

  tableBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  tableContent: {
    backgroundColor: '#202134', 
    paddingTop: '2%',
    paddingBottom: '3%',
    paddingHorizontal: '0.75%',
    borderRadius: 5, 
    width: '75%', 
    elevation: 5, 
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    marginLeft: '1.5%', 
    marginRight: '5%',
    marginBottom: '5%', 
  }, 
  
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: '#ffff',
    paddingTop: '30%',
    fontWeight: 'bold',
  },

  textHeader: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffff',
    
  },

  textHeaderTable: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffff',
    
  },

  text: {
    marginLeft: '5%',
    fontSize: 17,
    color: '#ffff',
    
  },

  textSideMenu: {
    textAlign: 'center',
    fontSize: 17,
    color: '#ffff',
    flexWrap: 'nowrap',    
  },

  textTable: {
    marginLeft: '5%',
    fontSize: 20,
    color: '#ffff',
    
  },

  textInput: {
    fontSize: 17,
    padding: '1%',
    marginTop: '5%',
    backgroundColor: '#ffff',
    marginLeft: '5%',
    marginRight: '5%',
  },

textFinishTable : {
    textAlign: 'right',
    fontSize: 17,
    color: '#ffffff',
    marginTop: '5%',
    fontWeight: 'bold',
    marginRight: '5%',
  },

  pwdInput: {
    position: 'relative',
    fontSize: 17,
    padding: '1%',
    marginTop: '5%',
    backgroundColor: '#ffff',
    marginLeft: '5%',
    marginRight: '5%',
  },

  textWebsite: {
    fontSize: 24,
    padding: '1%',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '25%',
    marginBottom: '5%',
    color: '#ffff',
    fontWeight: 'bold',
  },

  textPwd: {
    marginLeft: '5%',
    marginRight:"3%",
    fontSize: 20,
    color: '#ffff',
    
  },

  textReturn: {
    marginTop: '3%',
    marginLeft: '85%',
    marginRight: '2%',
    fontSize: 17,
    color: '#ffff',
  },

  subtext: {
    textAlign: 'center',
    fontSize: 14,
    color: '#ffff',
  },

  link: {
    textAlign: 'center',
    fontSize: 14,
    color: '#ffff',
    textDecorationLine: 'underline',
  },

  textWarning: {
    textAlign: "center",
    marginLeft: '5%',
    fontSize: 17,
    color: "#ff0000",
  },

  button: {
    itemAlign: 'center',
    marginLeft: '25%',
    marginRight: '25%',
    fontSize: 17,
  },

  buttonFirstSideMenu: {
      paddingVertical:'1.1%',
      paddingStart: '35.05%',
      paddingEnd: '35.05%',
      backgroundColor: '#01df81',
      borderColor: "white",
      borderWidth: 0.8
  },

  buttonSideMenu: {
    paddingVertical:'1.1%',
    paddingLeft:"37.9%",
    paddingRight:"37.9%",
    backgroundColor: '#01df81',
    borderColor: "white",
    borderLeftWidth: 0.8,
    borderRightWidth:0.8,
    borderBottomWidth:0.8
},

  materialIconsAdd: {
    padding: '0.85%',
    position: 'absolute',
    fontSize: 30,
    marginLeft: '85%',
  },

  fontAwesomeEye: {
    position: 'absolute',
    color: 'grey',
    fontSize: 27.5,
    marginTop: '5%',
    backgroundColor: '#ffff',
    marginLeft: '87%',
  },

  fontAwesomeEyeItem: {
    color: '#ffff',
    fontSize: 27.5,
    marginTop: '5%',
    backgroundColor: '#202134',
    marginLeft: '5%',
    marginBottom: '1%',
  },

  iconDots: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: 27.5,
    marginTop: '7%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: '5%',
    backgroundColor: '#202134',
    marginLeft: '85%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    itemAlign: 'center',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: "15%",
    fontSize: 25,
  },

  separator: {
    height: 1,
    backgroundColor: '#ffffff', // Colore della sbarra
    marginHorizontal: 10,   // Margini orizzontali (opzionale)
  },
  
});

export { styles }