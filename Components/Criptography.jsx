import 'react-native-get-random-values';

const CryptoJS = require("crypto-js");

export const criptaTesto = (key, str) => {
  const testoCifrato = CryptoJS.AES.encrypt(str, key).toString();
  return testoCifrato;
};

export const decriptaTesto = (key, str) => {
  const bytes = CryptoJS.AES.decrypt(str, key);
  const testoDecodificato = bytes.toString(CryptoJS.enc.Utf8);
  return testoDecodificato;
};