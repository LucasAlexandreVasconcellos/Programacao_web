let valor = 0;

const numero = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const texto = document.getElementById("texto");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const btnCriarLista = document.getElementById("btnCriarLista");
const tipoLista = document.getElementById("tipoLista");
const resultadoLista = document.getElementById("resultadoLista");
const btnResetar = document.getElementById("btnResetar");

btnIncrementar.addEventListener("click", () => {
  valor++;
  numero.innerText = valor;
});

btnDecrementar.addEventListener("click", () => {
  valor--;
  numero.innerText = valor;
});

texto.addEventListener("input", () => {
  contadorCaracteres.innerText = texto.value.length + " caracteres";
});

btnCriarLista.addEventListener("click", () => {
  resultadoLista.innerHTML = "";

  let lista = document.createElement(tipoLista.value);

  for (let i = 1; i <= 3; i++) {
    let item = document.createElement("li");
    item.innerText = "Item " + i;
    lista.appendChild(item);
  }

  resultadoLista.appendChild(lista);
});

btnResetar.addEventListener("click", () => {
  // reset contador
  valor = 0;
  numero.innerText = valor;

  // reset input
  texto.value = "";
  contadorCaracteres.innerText = "0 caracteres";

  // reset lista
  resultadoLista.innerHTML = "";
});