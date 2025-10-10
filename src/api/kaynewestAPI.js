const kanyeQuoteBtn = document.getElementById('kanye-quote-btn');
const kanyeQuote = document.getElementById('kanye-quote');

let baseUrl = 'https://api.kanye.rest/';

kanyeQuoteBtn.addEventListener('click', getKanyeData);

function getKanyeData() {
    fetch(baseUrl)
        .then(function (data) {
            return data.json();
        }).then(function (quotes) {
            kanyeQuote.innerHTML = '<span>"</span>' + quotes.quote + '<span>"</span>'
        })
        .catch(function (error) {
        });
}