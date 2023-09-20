const apiUrl = "https://api.quotable.io/random"

const quoteContainer = document.querySelector(".quote");
const getQuoteButton = document.querySelector(".get-quote")
 
function getRandomQuotes() {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            return data.content;
        })
        .catch(error => {
            console.log(error);
        });
}

function displayQuote() {
    getRandomQuotes()
    .then(quotecontent => {
        quoteContainer.textContent = `"${quotecontent}"`;
    })
    .catch(error => {
        console.log(error);
    });
}

getQuoteButton.addEventListener("click", displayQuote);

displayQuote();
