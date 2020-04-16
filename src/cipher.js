const cipher = {
  encodeOrDecode,
  encode,
  decode
};

function encodeOrDecode(displacement, message, num) {
  if (typeof message !== "string") {
    throw new TypeError("must be a string!");
  }

  const lettersAlphabet = 26;
  const letterAa = "a".charCodeAt();
  const letterZz = "z".charCodeAt();
  const letterA = "A".charCodeAt();
  const letterZ = "Z".charCodeAt();
  let displacementLetters;
  let resCipher = "";

  for (let letter of message) {
    const msgBox = letter.charCodeAt()
    if (msgBox >= letterAa && msgBox <= letterZz) {
      displacementLetters = ((msgBox - (letterAa + num) + displacement) % lettersAlphabet) + letterAa + num;
      resCipher += String.fromCharCode(displacementLetters);
    } else if (msgBox >= letterA && msgBox <= letterZ) {
      displacementLetters = ((msgBox - (letterA + num) + displacement) % lettersAlphabet) + letterA + num;
      resCipher += String.fromCharCode(displacementLetters);
    } else {
      displacementLetters = (msgBox);
      resCipher += String.fromCharCode(displacementLetters);
    }
  }
  return resCipher;

}

function encode(displacement, message) {
  return encodeOrDecode(displacement, message, 0)
}

function decode(displacement, message) {
  return encodeOrDecode(-displacement, message, 25)
}

export default cipher;