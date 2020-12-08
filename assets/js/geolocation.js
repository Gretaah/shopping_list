var currentLocation = {};

function success(position) {
    currentLocation.lng = position.coords.longitude;
    currentLocation.lat = position.coords.latitude;

    try {
        initMap();
    } catch (error) {
        console.error(error);
    }

    try {
        getWeatherDataFromCurrentLocation();
    } catch (error) {
        console.error(error);
    }
}

function error(err) {
    alert("This app needs location to be enabled to work.");
}


$(document).ready(function () {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                success, error, {
                    timeout: 10000
                });
        } else {
            alert("This app needs location to be enabled to work.");
        }
    }
    getLocation();
});
