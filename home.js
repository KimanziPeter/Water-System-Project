function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("latitude").value = "Geolocation is not supported by this browser.";
        document.getElementById("longitude").value = "Geolocation is not supported by this browser.";
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("latitude").value = "User denied the request for Geolocation.";
            document.getElementById("longitude").value = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("latitude").value = "Location information is unavailable.";
            document.getElementById("longitude").value = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("latitude").value = "The request to get user location timed out.";
            document.getElementById("longitude").value = "The request to get user location timed out.";
            break;
        default:
            document.getElementById("latitude").value = "An unknown error occurred.";
            document.getElementById("longitude").value = "An unknown error occurred.";
            break;
    }
}

function showPosition(position) {
    document.getElementById("latitude").value = position.coords.latitude;
    document.getElementById("longitude").value = position.coords.longitude;
}