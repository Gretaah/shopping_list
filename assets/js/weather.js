const api = {
    key: "f1b4b044f3737e6e4ece2b7c7fda44e4",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const weatherForm = document.querySelector('#weather-form')
const submitBtn = document.querySelector('#weather-button');
const weatherInput = document.getElementById("userWeatherInput");

// Get weather data from geolocation 
let openWeatherMapData = {}

function getWeatherDataFromCurrentLocation() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${api.baseurl}weather?lat=${currentLocation.lat}&lon=${currentLocation.lng}&appid=${api.key}&units=metric`);
    xhr.responseType = 'text';

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            openWeatherMapData = JSON.parse(xhr.responseText);
            updateWeatherInfo();
        } else {
            alert('Error loading OpenWeatherMap!');
        }
    }, false);
    
    xhr.send();
}

function getWeatherDataForCity(e) {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `${api.baseurl}weather?q=${weatherInput.value}&appid=${api.key}&units=metric`);

    xhr.responseType = 'text';

    xhr.onload = () => {
        openWeatherMapData = JSON.parse(xhr.responseText);
        updateWeatherInfo();
        weatherInput.value = '';
    }
    xhr.send();
}


/* Update inner html with weather data */
function updateWeatherInfo() {
    const city = openWeatherMapData.name;
    const temperature = openWeatherMapData.main.temp;
    const icon = openWeatherMapData.weather[0].id;
    const location = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const condition = document.querySelector(".condition");
    location.innerHTML = `<h2>${city}</h2>`;
    temp.innerHTML = `<p>${Math.round(temperature)}<span>°c</span></p>`;
    condition.innerHTML = `<img src="assets/icons/OpenWeatherMap/${icon}.svg">`;
}

weatherForm.addEventListener('submit', getWeatherDataForCity);
