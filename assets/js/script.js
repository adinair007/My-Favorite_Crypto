var marketList = document.getElementById("current-market");

// const CoinGecko = require("coingecko-api");
// const coinGeckoClient = new CoinGecko();

// export async function getList(context) {
//   const params = {
//     order: CoinGecko.ORDER.MARKET_CAP_DESC,
//   };

//   const result = await coinGeckoClient.coins.markets({ params });
// }

var liveMarket = {
  async: true,
  scroosDomain: true,
  url:"https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=5cce2c9f-ec33-4178-81dc-c4295870dc99",
  method: "GET",
  headers: {},
};

$.ajaxStart(liveMarket).done(function (response) {
  console.log(response);
  marketList.innerHTML = response.bitcoin;
  marketList.innerHTML = response.ethereum;
});

// var liveMarket = function (event) {
//   var apiURL =
//     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=5cce2c9f-ec33-4178-81dc-c4295870dc99";
//   fetch(apiURL).then(function (response) {
//     console.log(response);
//     response.json().then(function (data) {
//       marketList(data, event);
//     });
//   });
// };
