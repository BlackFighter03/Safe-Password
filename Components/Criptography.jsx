const CryptoJS = require("crypto-js");

export const criptaTesto = (email, str) => {
    const chiaveSegreta = CryptoJS.SHA256(email).toString();
    const testoCifrato = CryptoJS.AES.encrypt(str, chiaveSegreta).toString();
    return testoCifrato;
  };

export const decriptaTesto = (email, str) => {
    const chiaveSegreta = CryptoJS.SHA256(email).toString();
    const bytes  = CryptoJS.AES.decrypt(str, chiaveSegreta);
    const testoDecodificato = bytes.toString(CryptoJS.enc.Utf8);
    return testoDecodificato;
  };