const lampadaImg = document.getElementById("lamp");
const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");

function verificarLamp() {
  return lampadaImg.src.indexOf("quebrada") > -1;
  // 🔍 O método .indexOf() em JavaScript é usado para localizar a posição de um valor dentro de uma string ou array.
  //  Ele retorna o índice da primeira ocorrência do valor especificado — ou -1 se o valor não for encontrado.
}

function ligarLamp() {
  if (!verificarLamp()) {
    lampadaImg.src = "img/ligada.jpg";
  }
}
function desligarLamp() {
  if (!verificarLamp()) {
    lampadaImg.src = "img/desligada.jpg";
  }
}
function lampBroken() {
  lampadaImg.src = "img/quebrada.jpg";
}

turnOn.addEventListener("click", ligarLamp);
turnOff.addEventListener("click", desligarLamp);
lampadaImg.addEventListener("mouseover", ligarLamp);
lampadaImg.addEventListener("mouseleave", desligarLamp);
lampadaImg.addEventListener("dblclick", lampBroken);
