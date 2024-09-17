async function getDolar() {
  return fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then((res) => res.json())
    .then((data) => {
      postMessage(data.USDBRL);
    })
    .catch((error) => {
      console.error(`Erro ao baixar API Dolar: ${error}`);
    });
}

addEventListener("message", () => {
  getDolar();
  setInterval(getDolar, 5000);
});
