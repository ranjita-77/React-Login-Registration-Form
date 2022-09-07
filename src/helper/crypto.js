const CryptoJS = require("crypto-js"); 

export const CryptoHandlertoEncrypt = (data) => {
    const encriptedData = CryptoJS.AES.encrypt(JSON.stringify(data), data.password).toString();
    return encriptedData;
}

export const CryptoHandlertoDecrypt = (encryptedPassword,password) => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, password);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}