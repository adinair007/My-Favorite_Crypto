var userInputEl = document.getElementById("userInput");
var portfolioList = document.getElementById("portfolio-list");
var cryptoInput = document.getElementById("cryptoSearch-form");
var portfolioContainerEl = document.getElementById("portfolio-container");
var portfolioDisplay = document.getElementById("portfolio-display")
var cryptos = [];

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
  addPortfolio(crypto);
  pastSearch(crypto);
};

var myPortfolio = function () {
  var apiURL =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD&api_key=7a0dd8d530d2272b9577a48c3a0653fe13dea219bd9210b461767355f5c12272";
  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      addPortfolio(data);
    });
  });
};

var addPortfolio = function (info, searchCrypto) {
  var myCryptos = info.Data;
  portfolioContainerEl.textContent = "";
  portfolioList.textContent = searchCrypto;

  var myCrypto = document.createElement("card");
  myCrypto.classList.add("card");

  var myCryptoHead = document.createElement("card-divider");
  myCryptoHead.classList.add("card-divider");
  myCryptoHead.textContent =
    myCryptos.CoinInfo.value + "\n" + myCryptos.CoinInfo.Name;
  myCrypto.appendChild(myCryptoHead);

  var myCryptoSymbol = document.createElement("card-section");
  myCryptoSymbol.classList.add("card-secction");
  var symbol = document.createElement("img");
  symbol.setAttribute(
    "src",
    `https://www.cryptocompare.com/${myCryptos.CoinInfo.ImageUrl}`
  );
  symbol.style.width = "35px";
  symbol.style.height = "auto";
  myCryptoSymbol.appendChild(symbol);
  myCrypto.appendChild(myCryptoSymbol);

  var myCryptoPrice = document.createElement("card-section");
  myCryptoPrice.classList.add("card-section");
  myCryptoPrice.textContent = "Price: " + myCryptos.DISPLAY.USD.PRICE;
  myCrypto.appendChild(myCryptoPrice);

  var myCryptoLast24 = document.createElement("card-section");
  myCryptoLast24.classList.add("card-section");
  myCryptoLast24.textContent =
    "24 Hour Change: " + myCryptos.DISPLAY.USD.CHANGE24HOUR;
  myCrypto.appendChild(myCryptoLast24);

  portfolioContainerEl.appendChild(myCrypto);
  // portfolioDisplay.appendChild(portfolioContainerEl);
};

var pastSearch = function (pastSearch) {
  var pastSearchEl = document.createElement("button");
  pastSearchEl.textContent = pastSearch;
  pastSearchEl.classList.add("button");
  pastSearchEl.setAttribute("data-crypto", pastSearch);
  pastSearchEl.setAttribute("type", "submit");

  portfolioDisplay.appendChild(pastSearchEl);
};

var saveSearch = function () {
  localStorage.setItem("cryptos", JSON.stringify(cryptos));
};

var pastSearchHandler = function (event) {
  var dataCrypto = event.target.getAttribute("data-crypto");

  if (dataCrypto) {
    myPortfolio(dataCrypto);
  }
};
cryptoInput.addEventListener("submit", formSubmission);
portfolioDisplay.addEventListener("click", pastSearchHandler);
myPortfolio();
