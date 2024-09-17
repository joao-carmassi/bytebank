function getIene() {
  return fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL")
    .then((res) => res.json())
    .then((data) => {
      postMessage(data.JPYBRL);
    })
    .catch((error) => {
      console.log(`Erro ao baixar API Iene: ${error}`);
    });
}

addEventListener("message", () => {
  getIene();
  setInterval(getIene, 5000);
});
