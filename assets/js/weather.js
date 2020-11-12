const api = {
    key: "46cde08553a51ea8064a49fc7d02ca5d",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

let lat = 0;
let lon = 0;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat, lon)
    });
}

function locationSuccess(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
}