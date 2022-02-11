let inputValue = document.getElementById("#symbols");
let wipeHistory = document.getElementById("clearHistory");
let stopStarter = document.getElementById("#startStop");
let upToDate = document.getElementById("#updateNow");
let refresher = document.getElementById("#refreshInterval");

let stockLine = "http://candidateservices.allegient.com/randomQuote/swagger-ui.html#!/quote-controller/quoteUsingGET"


upToDate.addEventListener("submit", () => {
    inputValue.addEventListener("submit", () =>{
        if (inputValue = "GOOG") {
            fetch (stockLine) 
                .then(response => response.json())
                .then(data => console.log(data));
        }
    })
})