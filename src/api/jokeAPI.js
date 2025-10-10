// IIFE

(function () {


    // Constants and Variables (State)
    const BASE_URL = 'https://sv443.net/jokeapi/v2/joke/';
    const selectEl = document.getElementById('select');
    const buttonEl = document.getElementById('jokeButton');
    const divEl = document.getElementById('div');
    const pickEl = document.getElementById('pick');
    const jokeEl = document.getElementById('joke');

    let jokeData;
    //Cached Element Refenerces

    //Event Listeners
    buttonEl.addEventListener("click", myFunction);
    selectEl.addEventListener('change', (event) => {
        const result = document.getElementById('pick');
        jokeSelection = event.target.value;
        result.textContent = `You like ${jokeSelection}`;
    });
    
    
    // Functions
    
    function myFunction() {
        document.getElementById("div").innerHTML = "YOU CLICKED ME!";
        getJokeData()
    }
    function render(jokeData) {
        if (!jokeData) {
            divEl.innerHTML = '<h1>Loading...</h1>'
        } else if (jokeData.joke) {

            document.getElementById("Joke").innerHTML = "<div id='generatedJoke'>" + jokeData.joke + "</div>"

        } else if (jokeData.delivery) {
            
            document.getElementById("pick").innerHTML = "<div> <p id='orinial'>" + jokeData.setup + "</p></div>"
            document.getElementById("Joke").innerHTML = "<div id='generatedJoke'>" + jokeData.delivery + "</div>"

        }
    }

    // Browser API to get user location

    // AJAX -> Asynchronous JavaScript and XML

    function getJokeData() {
        const selectJoke = selectEl.value
        console.log(selectJoke);
        // myFunction();
        fetch(`${BASE_URL}${selectJoke}`)
            .then(response => response.json())
            .then(data => {
                console.log('Request succeeded with JSON response', data);
                jokeData = data;
                render(jokeData);
            }).catch(function (error) {
                console.log(error.message)
            });
    }


})();