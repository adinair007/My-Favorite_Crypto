var marketListEl = document.getElementById("current-price");


var liveMarket = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL,).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
    console.log(data);
    currentMarket(data);
    });
  });
};
liveMarket();

var currentMarket = function(market) {
  marketListEl.textContent = "";
  var dataListEL = market.Data;
  for(var i = 0; i < dataListEL.length; i++) {
    var cryptoList = dataListEL[i];
    var cryptoName = document.getElementById ("coin-name")
    cryptoName.textContent= cryptoList.coinInfo.FullName
    marketListEl.appendChild(cryptoName) 
    
  }
}

// var currentMarket = function(market) {
//   marketListEl.textContent = "";
//   var bitcoinEl = document.createElement("span");
//   bitcoinEl.textContent = "Bitcoin: " + market.Data[0].DISPLAY.USD.PRICE;
//   bitcoinEl.classList = "list-group-item";
//   marketListEl.appendChild(bitcoinEl);

//   var ethereumEl = document.createElement("span");
//   ethereumEl.textContent = " Ethereum:" + market.Data[1].DISPLAY.USD.PRICE;
//   ethereumEl.classList = "list-group-item";
//   marketListEl.appendChild(ethereumEl);
// }



