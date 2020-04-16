const cipher = {
    encode: function (displacement, message) {
        if (typeof message !== "string") {
            throw new TypeError("must be a string");
        }

        let msgBox = "";
        let resCipher = "";
        const lettersAlphabet = 26;
        let displacementNumber;

        for (let a = 0; a < message.length; a++) {
            msgBox = message[a];
            if (msgBox.charCodeAt(0) >= "a".charCodeAt() && msgBox.charCodeAt(0) <= "z".charCodeAt()) {
                displacementNumber = (((msgBox.charCodeAt(0) - "a".charCodeAt() + displacement) % lettersAlphabet) + "a".charCodeAt());
                resCipher += String.fromCharCode(displacementNumber);
            } else if (msgBox.charCodeAt(0) >= "A".charCodeAt() && msgBox.charCodeAt(0) <= "Z".charCodeAt()) {
                displacementNumber = (((msgBox.charCodeAt(0) - "A".charCodeAt() + displacement) % lettersAlphabet) + "A".charCodeAt());
                resCipher += String.fromCharCode(displacementNumber);
            } else {
                displacementNumber = (msgBox.charCodeAt(0));
                resCipher += String.fromCharCode(displacementNumber);
            }
        }
        return resCipher;

    },
    decode: function (displacement, message) {
        if (typeof message !== "string") {
            throw new TypeError("must be a string");
        }
       
        let msgBox = "";
        let resDecipher = "";
        const lettersAlphabet = 26;
        let displacementNumber;

        for (let a = 0; a < message.length; a++) {
            msgBox = message[a];
            if (msgBox.charCodeAt(0) >= "a".charCodeAt() && msgBox.charCodeAt(0) <= "z".charCodeAt()) {
                displacementNumber = (((msgBox.charCodeAt(0) - "z".charCodeAt() - displacement) % lettersAlphabet) + "z".charCodeAt());
                resDecipher += String.fromCharCode(displacementNumber);
            } else if (msgBox.charCodeAt(0) >= "A".charCodeAt() && msgBox.charCodeAt(0) <= "Z".charCodeAt()) {
                displacementNumber = (((msgBox.charCodeAt(0) - "Z".charCodeAt() - displacement) % lettersAlphabet) + "Z".charCodeAt());
                resDecipher += String.fromCharCode(displacementNumber);
            } else {
                displacementNumber = (msgBox.charCodeAt(0));
                resDecipher += String.fromCharCode(displacementNumber);
            }
        }
        return resDecipher;
    }
};

export default cipher;