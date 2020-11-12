const api = {
    key: "f1b4b044f3737e6e4ece2b7c7fda44e4",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

let openWeatherMapData = {}
let xhr = new XMLHttpRequest();
xhr.open('GET', `${api.baseurl}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`);
xhr.responseType = 'text';

xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
        openWeatherMapData = JSON.parse(xhr.responseText);
        weatherInfo()
    } else {
        alert('Error loading OpenWeatherMap!');
    }
}, false);


function weatherInfo() {
    const city = openWeatherMapData.name;
    const temperature = openWeatherMapData.main.temp;
    const theTime = new Date(openWeatherMapData.dt * 1000);
    const hours = theTime.getHours();
    const minutes = theTime.getMinutes();
    const icon = openWeatherMapData.weather[0].id;
    console.log(`${icon}`)

    const location = document.querySelector(".city");
    const temp = document.querySelector(".temp");
    const time = document.querySelector(".time");
    const condition = document.querySelector(".condition");
    time.innerHTML = `<p>${hours}:${minutes}</p>`;
    location.innerHTML = `<h2>${city}</h2>`;
    temp.innerHTML = `<p>${Math.round(temperature)}<span>°c</span></p>`;
    condition.innerHTML = `<img src="assets/icons/OpenWeatherMap/${icon}.svg">`;
}

xhr.send()