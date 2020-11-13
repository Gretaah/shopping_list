let lat = 0;
let long = 0;
navigator.geolocation.getCurrentPosition(succes, error);

function succes(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    geolocation();
}

function error(err) {
    console.warn(err.code + ': ' + err.message);
}

function geolocation() {
    console.log(lat);
    console.log(long);
}