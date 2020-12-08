var map, service, infowindow, pos, request, place;

// Berlin - Placeholder
var initialLocation = {
    lat: 52.5200,
    lng: 13.4050
};
var locationType = 'grocery';
var searchRadius = 500;

/* 
Creates a new map on the page
Fetches the user's location
Executes search of nearby places
*/
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        minZoom: 12
    }, {
        center: currentLocation,
        zoom: 18,
    });
    infoWindow = new google.maps.InfoWindow;
    updateMapAndGetNearbyLocations();
}

// Get location
function updateMapAndGetNearbyLocations() {
    console.log("getLocation:" + currentLocation.lat + "," + currentLocation.lng);
    let marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        icon: "http://maps.google.com/mapfiles/ms/micons/blue.png"
    });
    // Show the marker location and popup
    infoWindow.setPosition(currentLocation);
    infoWindow.setContent('Your location.');
    infoWindow.open(map);
    map.setCenter(currentLocation);
    getNearByPlaces();
    infowindow = new google.maps.InfoWindow();
}

// Show places nearby 

function getNearByPlaces() {
    console.log("getNearByPlaces:" + currentLocation.lat + "," + currentLocation.lng);
    request = {
        location: currentLocation,
        radius: searchRadius,
        query: locationType
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, searchCallback);
}

function searchCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log("callback received " + results.length + " results");
        let bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < results.length; i++) {
            console.log(JSON.stringify(results[i]));
            place = results[i];
            let mark = createMarker(results[i]);
            bounds.extend(mark.getPosition());
        }
        map.fitBounds(bounds);
    } else console.log("callback.status=" + status);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function createMarker(place) {
    let marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: "http://maps.google.com/mapfiles/ms/micons/red.png"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
    return marker;
}
