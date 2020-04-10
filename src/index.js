import cipher from './cipher.js';
document.getElementById("btCipher").disabled = true;
document.getElementById("btDecipher").disabled = true;

document.getElementById("inputMsg", "offset").addEventListener("input", enableButtons);

function enableButtons() {
  if (document.getElementById("inputMsg").value !== "" || document.getElementById("offset").value !== "") {
    document.getElementById("btCipher").disabled = false;
    document.getElementById("btDecipher").disabled = false;
  } else {
    document.getElementById('btCipher').disabled = true;
    document.getElementById('btDecipher').disabled = true;
  }
}

document.getElementById("btCipher").addEventListener("click", cifrar);
document.getElementById("btDecipher").addEventListener("click", decifrar);
document.getElementById("clear").addEventListener("click", limpar);

function cifrar() {
  let getMsg = document.getElementById("inputMsg").value;
  let desloc = parseInt(document.getElementById('offset').value);
  let encodeMsg = cipher.encode(desloc, getMsg);

  document.getElementById("result").innerHTML = `Esta é a sua senha Criptografada: <br><br><strong>${encodeMsg}</strong>`
}

function decifrar() {
  let getMsg = document.getElementById("inputMsg").value;
  let desloc = parseInt(document.getElementById('offset').value);
  let decodeMsg = cipher.decode(desloc, getMsg);

  document.getElementById("result").innerHTML = `Esta é a sua senha Descriptografada: <br><br><strong>${decodeMsg}</strong>`
}

function limpar() {
  if (document.getElementById("inputMsg").value !== "" || document.getElementById("offset").value !== "" || document.getElementById("result").innerHTML.value !== "") {
    document.getElementById("inputMsg").value = "";
    document.getElementById("offset").value = "";
    document.getElementById("result").innerHTML = "";
    enableButtons();
  }
}