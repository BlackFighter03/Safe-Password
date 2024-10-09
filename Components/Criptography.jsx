import 'react-native-get-random-values';

const CryptoJS = require("crypto-js");

export const criptaTesto = (email, str) => {
    const chiaveSegreta = email;
    const testoCifrato = CryptoJS.AES.encrypt(str, chiaveSegreta).toString();
    return testoCifrato;
  };

export const decriptaTesto = (email, str) => {
    const chiaveSegreta = email;
    const bytes  = CryptoJS.AES.decrypt(str, chiaveSegreta);
    const testoDecodificato = bytes.toString(CryptoJS.enc.Utf8);
    return testoDecodificato;
  };