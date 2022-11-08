var marketListEl = document.getElementById("current-market");

var liveMarket = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key={7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272}";
  fetch(apiURL).then(function (response) {
    console.log(response);
    response.json().then(function (data) {
    currentMarket(data);
    });
  });
};
liveMarket();

var currentMarket = function(market) {
  marketListEl.textContent = "";

  var cryptoIconEl = document.createElement("span");
  var cryptoIcon = document.createElement("img");
  cryptoIcon.setAttribute("src",`/media/37746251/btc.png`)


  var bitcoinEl = document.createElement("span");
  bitcoinEl.textContent = "Bitcoin: $" + market.overview;
  bitcoinEl.classList = "list-group-item";

}
