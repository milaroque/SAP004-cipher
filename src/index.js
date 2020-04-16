import cipher from './cipher.js';
document.getElementById("bt-cipher").disabled = true;
document.getElementById("bt-decipher").disabled = true;

document.getElementById("input-msg", "offset").addEventListener("input", enableButtons);

function enableButtons() {
  if (document.getElementById("input-msg").value !== "" || document.getElementById("offset").value !== "") {
    document.getElementById("bt-cipher").disabled = false;
    document.getElementById("bt-decipher").disabled = false;
  } else {
    document.getElementById('bt-cipher').disabled = true;
    document.getElementById('bt-decipher').disabled = true;
  }
}

document.getElementById("bt-cipher").addEventListener("click", crypto);
document.getElementById("bt-decipher").addEventListener("click", decrypto);
document.getElementById("clear").addEventListener("click", clear);

function crypto() {
  let message = document.getElementById("input-msg").value;
  let displacement = parseInt(document.getElementById('offset').value);
  let encodeMsg = cipher.encode(displacement, message);

  document.getElementById("result").innerHTML = `Esta é a sua senha Criptografada: <br><br><strong>${encodeMsg}</strong>`
}

function decrypto() {
  let message = document.getElementById("input-msg").value;
  let displacement = parseInt(document.getElementById('offset').value);
  let decodeMsg = cipher.decode(displacement, message);

  document.getElementById("result").innerHTML = `Esta é a sua senha Descriptografada: <br><br><strong>${decodeMsg}</strong>`
}

function clear() {
  if (document.getElementById("input-msg").value !== "" || document.getElementById("offset").value !== "" || document.getElementById("result").innerHTML.value !== "") {
    document.getElementById("input-msg").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("result").innerHTML = "";
    enableButtons();
  }
}