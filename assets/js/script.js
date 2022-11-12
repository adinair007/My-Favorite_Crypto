var marketListEl = document.getElementById("market-table");
var topFiveEl = document.getElementById("topFive-list");
var currentDate = moment().format('LLLL');
var first = document.getElementById("1");
var second = document.getElementById("2");
var third = document.getElementById("3");
var fourth = document.getElementById("4");
var fifth = document.getElementById("5");



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

var live5Market = function(){
  var apiURL = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=5&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function(response){
    response.json().then(function(data){
      console.log(data);
      top5Market(data);
    });
  });
};

var top5Market = function(top5){
  var dataListEl = top5.Data


  var crypto1  = document.createElement("card");
  crypto1.classList.add("card");
  
  var crypto1Header = document.createElement("card-divider")
  crypto1Header.classList.add("card-divider");
  crypto1Header.textContent = dataListEl[0].CoinInfo.FullName + "\n" +  dataListEl[0].CoinInfo.Name;
  crypto1.appendChild(crypto1Header);
  
  var crypto1Price = document.createElement("card-section");
  crypto1Price.classList.add("card-section");
  crypto1Price.textContent = "Price: " + dataListEl[0].DISPLAY.USD.PRICE;
  crypto1.appendChild(crypto1Price);

  var crypto1last24 = document.createElement("card-section");
  crypto1last24.classList.add("card-section");
  crypto1last24.textContent = "24 Hour Change: " + dataListEl[0].DISPLAY.USD.CHANGE24HOUR;
  crypto1.appendChild(crypto1last24);
  
  first.appendChild(crypto1);
  topFiveEl.appendChild(first);


  // first.textContent = dataListEl[0].CoinInfo.FullName + "\n" +  dataListEl[0].CoinInfo.Name;
  // second.textContent = dataListEl[1].CoinInfo.FullName + "\n" +  dataListEl[1].CoinInfo.Name;
  // third.textContent = dataListEl[2].CoinInfo.FullName + "\n" +  dataListEl[2].CoinInfo.Name;
  // fourth.textContent = dataListEl[3].CoinInfo.FullName + "\n" +  dataListEl[3].CoinInfo.Name;
  // fifth.textContent = dataListEl[4].CoinInfo.FullName + "\n" +  dataListEl[4].CoinInfo.Name;
  // topFiveEl.appendChild(first);
  // topFiveEl.appendChild(second);
  // topFiveEl.appendChild(third);
  // topFiveEl.appendChild(fourth);
  // topFiveEl.appendChild(fifth);
  // topFiveEl.textContent = ""
//   var top5Card = document.createElement("card");
//   top5Card.classList.add("card");
//   var dataListEl = top5.Data
//   for (var i = 0; i < dataListEl.length; i++)
//   var top5ListEL = dataListEl[i];

//   var cryptoHead = document.createElement("h4")
//   cryptoHead.textContent = top5ListEL.CoinInfo.FullName + top5ListEL.CoinInfo.Name;
//   top5Card.appendChild(cryptoHead);
//   topFiveEl.appendChild(top5Card);

  
}

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

    // var cryptoIndex = document.createElement("td");
    // cryptoIndex.textContent= Array.indexOf(cryptoList,0);
    // cryptoData.appendChild(cryptoIndex);


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
    marketCap.textContent = cryptoList.DISPLAY.USD.CIRCULATINGSUPPLYMKTCAP;
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
    // ButtonPlus.style.width = "20px";
    // ButtonPlus.style.height = "20px";
    // ButtonPlus.style.textAlign ="center"
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
