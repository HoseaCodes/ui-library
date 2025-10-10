//IPO Pattern  -> Input - Process - Output

//Weather Variables
const apiKey = config.API_KEY;
// const API_KEY = '88723180e3c19e3235dfaf41df75b619';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

//Source: https://openweathermap.org/

let weatherData;

const titleEl = document.getElementById('title');
const iconEl = document.getElementById('icon');
const tempEl = document.getElementById('temperature');
const windEl = document.getElementById('wind');

init();
function init() {
    navigator.geolocation.getCurrentPosition(data => getWeatherData(data));
    render();
}

function getWeatherData({ coords }) {
    const { latitude, longitude } = coords;
    fetch(`${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            weatherData = data;
            render();
        });
}

function render() {
    if (!weatherData) {
        titleEl.innerHTML = '<p>Loading...</p>'
    } else {
        const { weather, name, wind, main } = weatherData;
        iconEl.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
        iconEl.setAttribute('alt', weather[0].description)
        titleEl.textContent = `${name}`;
        tempEl.innerHTML = `${Math.floor(main.temp)} &deg; F`;
    }
}