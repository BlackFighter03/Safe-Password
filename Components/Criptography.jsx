const CryptoJS = require("crypto-js");

export const criptaTesto = (key, str) => {
    const chiaveSegreta = CryptoJS.SHA256(key).toString();
    const testoCifrato = CryptoJS.AES.encrypt(str, chiaveSegreta).toString();
    return testoCifrato;
  };

export const decriptaTesto = (key, str) => {
    const chiaveSegreta = CryptoJS.SHA256(key).toString();
    const bytes  = CryptoJS.AES.decrypt(str, chiaveSegreta);
    const testoDecodificato = bytes.toString(CryptoJS.enc.Utf8);
    return testoDecodificato;
  };