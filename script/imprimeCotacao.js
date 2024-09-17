const lista = document.querySelectorAll("[data-lista]");

export function selecionaCotacao(nome, valor) {
  lista.forEach((listaEscolhida) => {
    if (listaEscolhida.id == nome) {
      imprimeCotacao(listaEscolhida, nome, valor);
    }
  });
}

function imprimeCotacao(lista, nome, valor) {
  lista.innerHTML = "";
  const plurais = {
    dolar: "dolars",
    iene: "ienes",
  };

  for (let index = 1; index <= 1000; index *= 10) {
    const listaItem = document.createElement("li");
    listaItem.innerHTML = `${index} ${index == 1 ? nome : plurais[nome]}: R${(
      valor * index
    ).toFixed(2)}`;
    lista.appendChild(listaItem);
  }
}
