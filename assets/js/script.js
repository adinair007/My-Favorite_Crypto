var marketListEl = document.getElementById("market-table");
var topFiveEl = document.getElementById("topFive-list");
var currentDate = moment().format("LLLL");
var first = document.getElementById("1");
var second = document.getElementById("2");
var third = document.getElementById("3");
var fourth = document.getElementById("4");
var userInputEl = document.getElementById("userInput")


//search bar
var crypto = [];

var cryptoFormEl = document.querySelector("#crypto-search-form");
var cryptoInputEl = document.querySelector("#crypto");
var cryptoContainerEl = document.querySelector("#current-crypto-container");
var cryptoSearchInputEl = document.querySelector("#searched-crypto");



var formSubmitHandler = function(event){
  event.preventDefault();
  var crypto = cryptoInputEl.value.trim();
  if (crypto) {
    getCrypto (crypto);
    cryptos.unshift({cryptos});
    cryptoInputEl.value = "";
  } else{
    alert("Please enter a Crypto");
}
saveSearch();
pastSearch(crypto);
}

var saveSearch = function(){
  localStorage.setItem("cryptos", JSON.stringify(cryptos));
};

var getCrypto = function(crypto){
  var apiURL =
  "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";

  fetch(apiURL)
  .then(function(response){
      response.json().then(function(data){
          displayCrypto(data, crypto);
      });
  });
};


var displayCrypto = function(crypto, searchCrypto){
  //clear old content
  cryptoContainerEl.textContent= "";  
  cryptoSearchInputEl.textContent=searchCrypto;

  //console.log(crypto);

}


///


$("#today").html(currentDate);

var liveMarket = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      top5Market(data);
      currentMarket(data);
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

//--Adding overview button to cards--
  var crypto1Link = document.createElement("card-section")
  crypto1Link.classList.add("card-section");
  var crypto1btn = document.createElement("button")
  crypto1btn.classList.add("button");
  crypto1btn.textContent = "Overview";
  crypto1btn.addEventListener("click", gotoUrl1);
  function gotoUrl1 (){
    window.location.assign(`https://www.cryptocompare.com${dataListEl[0].CoinInfo.Url}`);
  }
  crypto1Link.appendChild(crypto1btn);
  crypto1.appendChild(crypto1Link);

  var crypto2Link = document.createElement("card-section")
  crypto2Link.classList.add("card-section");
  var crypto2btn = document.createElement("button")
  crypto2btn.classList.add("button");
  crypto2btn.textContent = "Overview";
  crypto2btn.addEventListener("click", gotoUrl2);
  function gotoUrl2 (){
    window.location.assign(`https://www.cryptocompare.com${dataListEl[1].CoinInfo.Url}`);
  }
  crypto2Link.appendChild(crypto2btn);
  crypto2.appendChild(crypto2Link);

  var crypto3Link = document.createElement("card-section")
  crypto3Link.classList.add("card-section");
  var crypto3btn = document.createElement("button")
  crypto3btn.classList.add("button");
  crypto3btn.textContent = "Overview";
  crypto3btn.addEventListener("click", gotoUrl3);
  function gotoUrl3 (){
    window.location.assign(`https://www.cryptocompare.com${dataListEl[2].CoinInfo.Url}`);
  }
  crypto3Link.appendChild(crypto3btn);
  crypto3.appendChild(crypto3Link);

  var crypto4Link = document.createElement("card-section")
  crypto4Link.classList.add("card-section");
  var crypto4btn = document.createElement("button")
  crypto4btn.classList.add("button");
  crypto4btn.textContent = "Overview";
  crypto4btn.addEventListener("click", gotoUrl4);
  function gotoUrl4 (){
    window.location.assign(`https://www.cryptocompare.com${dataListEl[3].CoinInfo.Url}`);
  }
  crypto4Link.appendChild(crypto4btn);
  crypto4.appendChild(crypto4Link);

  first.appendChild(crypto1);
  second.appendChild(crypto2);
  third.appendChild(crypto3);
  fourth.appendChild(crypto4);
  
  topFiveEl.appendChild(first);
  topFiveEl.appendChild(second);
  topFiveEl.appendChild(third);
  topFiveEl.appendChild(fourth);

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
    ButtonPlus.classList.add("button");
    ButtonPlus.textContent = "+";
    ButtonPlus.addEventListener("click", gotoUrl);
    function gotoUrl (){
    window.location.assign(`https://www.cryptocompare.com${cryptoList.CoinInfo.Url}`);
    }
    cryptoBtns.appendChild(ButtonPlus);
    cryptoData.appendChild(cryptoBtns);

    cryptoTable.appendChild(cryptoData);
    marketListEl.appendChild(cryptoTable);
  }
};
liveMarket();

var formSubmission = function (event) {
  event.preventDefault();
  var crypto = userInputEl.value.trim();

  if (crypto) {
    myPortfolio(crypto);
    cryptos.unshift({ crypto });
    userInputEl.value = "";
  } else {
    alert("Please enter a valid cryptocurrency");
  }
  saveSearch();
  pastSearch(crypto);
};

var myPortfolio = function(crypto){
  var apiURL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      addPortfolio(data, crypto);
    });
  });
}

var pastSearch = function (pastSearch) {
  var pastSearchEl = document.createElement("button");
  pastSearchEl.textContent = pastSearch;
  pastSearchEl.classList.add("button");
  pastSearchEl.setAttribute("crypto", pastSearch);
  pastSearchEl.setAttribute("type", "submit");

  pastSearchBtnEl.append(pastSearchEl);
};

var saveSearch = function () {
  localStorage.setItem("cryptos", JSON.stringify(cryptos));
};

var pastSearchHandler = function (event) {
  var crypto = event.target.getAttribute("crypto");

  if (crypto) {
    currentMarket(crypto);
  }
};
