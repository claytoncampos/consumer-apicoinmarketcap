//My api key
var apikey = {
  key: 'key'
}

//GET Fect requisition



function requestFromAPI() {
  fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`)
    .then(response => {
      if (!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
      return response.json();
    })
    .then(api => {
      let cardSection = document.getElementById('card-section');
      cardSection.innerHTML = '';
      for (i = 0; i < 10; i++) {
        let obj = api.data[i];
        cardSection.innerHTML += `
        <div class="card">
          <h1>${obj.name}</h1>
          <h2>${obj.symbol}</h2>
          <p>${obj.first_historical_data}</p>
        </div>
      `
      }
    })
    .catch(error => console.log(error.message));
}

requestFromAPI();