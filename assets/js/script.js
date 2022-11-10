var marketListEl = document.getElementById("market-table");

var liveMarket = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      currentMarket(data);
    });
  });
};
liveMarket();

var currentMarket = function (market) {
  marketListEl.textContent = "";
  let headers = ["#", "Coin", "Price", "Market Cap", "24h Change", "24h High"];
  var table = document.createElement("table");
  var headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  marketListEl.appendChild(table);

  var dataListEL = market.Data;
  for (var i = 0; i < dataListEL.length; i++) {
    var cryptoList = dataListEL[i];
    var cryptoData = document.createElement("tr");
    cryptoData.classList = "table bg=white color=black";

    var cryptoSymbol = document.createElement("td");
    cryptoSymbol.textContent = cryptoList.CoinInfo.ImageUrl;
    cryptoData.appendChild(cryptoSymbol);
    
    var cryptoName = document.createElement("td");
    cryptoName.textContent =
      cryptoList.CoinInfo.FullName + "\n" + cryptoList.CoinInfo.Name;
    cryptoData.appendChild(cryptoName);

  
    var cryptoPrice = document.createElement("td");
    cryptoPrice.textContent = cryptoList.DISPLAY.USD.PRICE;
    cryptoData.appendChild(cryptoPrice);

    var marketCap = document.createElement("td");
    marketCap.textContent = cryptoList.DISPLAY.USD.CIRCULATINGSUPPLYMKTCAP;
    cryptoData.appendChild(marketCap);

    var dayChange = document.createElement("td");
    dayChange.textContent = cryptoList.DISPLAY.USD.CHANGE24HOUR;
    cryptoData.appendChild(dayChange);

    var dayHigh = document.createElement("td");
    dayHigh.textContent = cryptoList.DISPLAY.USD.HIGH24HOUR;
    cryptoData.appendChild(dayHigh);

    table.appendChild(cryptoData);

    marketListEl.appendChild(table);
  }
};
