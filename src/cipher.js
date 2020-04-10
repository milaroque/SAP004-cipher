const cipher = {
    encode: function (desloc, getMsg) {
        if (typeof getMsg !== "string") {
            throw new TypeError();
        }

        let msgBox = "";
        let resCipher = "";
        let deslocNumber;

        for (let a = 0; a < getMsg.length; a++) {
            msgBox = getMsg[a];

            if (msgBox.charCodeAt(0) > 64 && msgBox.charCodeAt(0) < 91) {
                deslocNumber = (((msgBox.charCodeAt(0) - 65 + desloc) % 26) + 65);
                resCipher += String.fromCharCode(deslocNumber);
            } else if (msgBox.charCodeAt(0) > 96 && msgBox.charCodeAt(0) < 123) {
                deslocNumber = (((msgBox.charCodeAt(0) - 97 + desloc) % 26) + 97);
                resCipher += String.fromCharCode(deslocNumber);
            } else {
                deslocNumber = (msgBox.charCodeAt(0));
                resCipher += String.fromCharCode(deslocNumber);
            }
        }
        return resCipher;

    },
    decode: function (desloc, getMsg) {
       
        let msgBox = "";
        let resDecipher = "";
        let deslocNumber;

        for (let a = 0; a < getMsg.length; a++) {
            msgBox = getMsg[a];
            if (msgBox.charCodeAt(0) > 64 && msgBox.charCodeAt(0) < 91) {
                deslocNumber = (((msgBox.charCodeAt(0) - 90 - desloc) % 26) + 90);
                resDecipher += String.fromCharCode(deslocNumber);
            } else if (msgBox.charCodeAt(0) > 96 && msgBox.charCodeAt(0) < 123) {
                deslocNumber = (((msgBox.charCodeAt(0) - 122 - desloc) % 26) + 122);
                resDecipher += String.fromCharCode(deslocNumber);
            } else {
                deslocNumber = (msgBox.charCodeAt(0));
                resDecipher += String.fromCharCode(deslocNumber);
            }
        }
        return resDecipher;
    }
};

export default cipher;