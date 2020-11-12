let lat = 0;
let lon = 0;

function locationSuccess(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log(lat, lon)
    });
}