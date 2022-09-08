const CryptoJS = require("crypto-js"); 

export const CryptoHandlertoEncrypt = (userData) => {
    const encriptedData = CryptoJS.AES.encrypt(JSON.stringify(userData), userData.password).toString();
    return encriptedData;
}

export const CryptoHandlertoDecrypt = (encryptedPassword,enteredPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, enteredPassword);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}