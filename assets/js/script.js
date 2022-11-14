var marketListEl = document.getElementById("market-table");
var topFiveEl = document.getElementById("topFive-list");
var currentDate = moment().format("LLLL");
var first = document.getElementById("1");
var second = document.getElementById("2");
var third = document.getElementById("3");
var fourth = document.getElementById("4");

$("#today").html(currentDate);

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

var live5Market = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=5&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      top5Market(data);
    });
  });
};

var top5Market = function (top5) {
  var dataListEl = top5.Data;

  var crypto1 = document.createElement("card");
  crypto1.classList.add("card");
  var crypto2 = document.createElement("card");
  crypto2.classList.add("card");
  var crypto3 = document.createElement("card");
  crypto3.classList.add("card");
  var crypto4 = document.createElement("card");
  crypto4.classList.add("card");

  // top 4 crypto headers
  var crypto1Header = document.createElement("card-divider");
  crypto1Header.classList.add("card-divider");
  crypto1Header.textContent =
    dataListEl[0].CoinInfo.FullName + "\n" + dataListEl[0].CoinInfo.Name;
  crypto1.appendChild(crypto1Header);

  var crypto2Header = document.createElement("card-divider");
  crypto2Header.classList.add("card-divider");
  crypto2Header.textContent =
    dataListEl[1].CoinInfo.FullName + "\n" + dataListEl[1].CoinInfo.Name;
  crypto2.appendChild(crypto2Header);

  var crypto3Header = document.createElement("card-divider");
  crypto3Header.classList.add("card-divider");
  crypto3Header.textContent =
    dataListEl[2].CoinInfo.FullName + "\n" + dataListEl[2].CoinInfo.Name;
  crypto3.appendChild(crypto3Header);

  var crypto4Header = document.createElement("card-divider");
  crypto4Header.classList.add("card-divider");
  crypto4Header.textContent =
    dataListEl[3].CoinInfo.FullName + "\n" + dataListEl[3].CoinInfo.Name;
  crypto4.appendChild(crypto4Header);

  var top4symbol = document.createElement("card-section");
  var crypto4list = document.createElement("img");
  crypto4list.setAttribute(
    "src",
    `https://www.cryptocompare.com/${dataListEl[0].CoinInfo.ImageUrl}`
  );
  crypto4list.style.width = "35px";
  crypto4list.style.height = "auto";
  top4symbol.appendChild(crypto4list);
  crypto1.appendChild(top4symbol);
  topFiveEl.appendChild(crypto1);

  var top4symbol = document.createElement("card-section");
  var crypto4list1 = document.createElement("img");
  crypto4list1.setAttribute(
    "src",
    `https://www.cryptocompare.com/${dataListEl[1].CoinInfo.ImageUrl}`
  );
  crypto4list1.style.width = "35px";
  crypto4list1.style.height = "auto";
  top4symbol.appendChild(crypto4list1);
  crypto2.appendChild(top4symbol);
  topFiveEl.appendChild(crypto2);

  var top4symbol = document.createElement("card-section");
  var crypto4list2 = document.createElement("img");
  crypto4list2.setAttribute(
    "src",
    `https://www.cryptocompare.com/${dataListEl[2].CoinInfo.ImageUrl}`
  );
  crypto4list2.style.width = "35px";
  crypto4list2.style.height = "auto";
  top4symbol.appendChild(crypto4list2);
  crypto3.appendChild(top4symbol);
  topFiveEl.appendChild(crypto3);

  var top4symbol = document.createElement("card-section");
  var crypto4list3 = document.createElement("img");
  crypto4list3.setAttribute(
    "src",
    `https://www.cryptocompare.com/${dataListEl[3].CoinInfo.ImageUrl}`
  );
  crypto4list3.style.width = "35px";
  crypto4list3.style.height = "auto";
  top4symbol.appendChild(crypto4list3);
  crypto4.appendChild(top4symbol);
  topFiveEl.appendChild(crypto4);

  // top 4 crypto prices
  var crypto1Price = document.createElement("card-section");
  crypto1Price.classList.add("card-section");
  crypto1Price.textContent = "Price: " + dataListEl[0].DISPLAY.USD.PRICE;
  crypto1.appendChild(crypto1Price);

  var crypto2Price = document.createElement("card-section");
  crypto2Price.classList.add("card-section");
  crypto2Price.textContent = "Price: " + dataListEl[1].DISPLAY.USD.PRICE;
  crypto2.appendChild(crypto2Price);

  var crypto3Price = document.createElement("card-section");
  crypto3Price.classList.add("card-section");
  crypto3Price.textContent = "Price: " + dataListEl[2].DISPLAY.USD.PRICE;
  crypto3.appendChild(crypto3Price);

  var crypto4Price = document.createElement("card-section");
  crypto4Price.classList.add("card-section");
  crypto4Price.textContent = "Price: " + dataListEl[3].DISPLAY.USD.PRICE;
  crypto4.appendChild(crypto4Price);
  // top 4 crypto last 24 hours
  var crypto1last24 = document.createElement("card-section");
  crypto1last24.classList.add("card-section");
  crypto1last24.textContent =
    "24 Hour Change: " + dataListEl[0].DISPLAY.USD.CHANGE24HOUR;
  crypto1.appendChild(crypto1last24);

  var crypto2last24 = document.createElement("card-section");
  crypto2last24.classList.add("card-section");
  crypto2last24.textContent =
    "24 Hour Change: " + dataListEl[1].DISPLAY.USD.CHANGE24HOUR;
  crypto2.appendChild(crypto2last24);

  var crypto3last24 = document.createElement("card-section");
  crypto3last24.classList.add("card-section");
  crypto3last24.textContent =
    "24 Hour Change: " + dataListEl[2].DISPLAY.USD.CHANGE24HOUR;
  crypto3.appendChild(crypto3last24);

  var crypto4last24 = document.createElement("card-section");
  crypto4last24.classList.add("card-section");
  crypto4last24.textContent =
    "24 Hour Change: " + dataListEl[3].DISPLAY.USD.CHANGE24HOUR;
  crypto4.appendChild(crypto4last24);

  fourth.appendChild(crypto4);
  third.appendChild(crypto3);
  second.appendChild(crypto2);
  first.appendChild(crypto1);
  topFiveEl.appendChild(first);
};

var currentMarket = function (market) {
  marketListEl.textContent = "";
  let headers = [
    "Symbol",
    "Coin Name",
    "Price",
    "Market Cap",
    "24h Change",
    "24h High",
  ];

  var cryptoTable = document.createElement("Table");
  cryptoTable.classList.add("hover");
  cryptoTable.style.background = "white";
  cryptoTable.style.textAlign = "center";

  var headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  cryptoTable.appendChild(headerRow);
  marketListEl.appendChild(cryptoTable);

  var dataListEL = market.Data;

  for (var i = 0; i < dataListEL.length; i++) {
    var cryptoList = dataListEL[i];

    var cryptoData = document.createElement("tr");

    var cryptoSymbol = document.createElement("td");
    var cryptoIcon = document.createElement("img");
    cryptoIcon.setAttribute(
      "src",
      `https://www.cryptocompare.com/${cryptoList.CoinInfo.ImageUrl}`
    );
    cryptoIcon.style.width = "35px";
    cryptoIcon.style.height = "auto";
    cryptoSymbol.appendChild(cryptoIcon);
    cryptoData.appendChild(cryptoSymbol);

    var cryptoName = document.createElement("td");
    cryptoName.textContent =
      cryptoList.CoinInfo.FullName + "\n" + cryptoList.CoinInfo.Name;
    cryptoData.appendChild(cryptoName);

    var cryptoPrice = document.createElement("td");
    cryptoPrice.textContent = cryptoList.DISPLAY.USD.PRICE;
    cryptoData.appendChild(cryptoPrice);

    var marketCap = document.createElement("td");
    marketCap.textContent = cryptoList.DISPLAY.USD.MKTCAP;
    cryptoData.appendChild(marketCap);

    var dayChange = document.createElement("td");
    dayChange.textContent = cryptoList.DISPLAY.USD.CHANGE24HOUR;
    cryptoData.appendChild(dayChange);

    var dayHigh = document.createElement("td");
    dayHigh.textContent = cryptoList.DISPLAY.USD.HIGH24HOUR;
    cryptoData.appendChild(dayHigh);

    var cryptoBtns = document.createElement("td");
    var ButtonPlus = document.createElement("button");
    ButtonPlus.setAttribute("click", "submit");
    ButtonPlus.textContent = "+";
    ButtonPlus.classList.add("button");
    cryptoBtns.appendChild(ButtonPlus);
    cryptoData.appendChild(cryptoBtns);

    cryptoTable.appendChild(cryptoData);
    marketListEl.appendChild(cryptoTable);
  }
};

var topFive = function () {
  cryptoBtns.addEventListener("click", topFive);
  localStorage.setItem("currentMarket", JSON.stringify(currentMarket));
};

live5Market();
liveMarket();
