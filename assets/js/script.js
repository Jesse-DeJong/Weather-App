// DOM Targeting
const userLocQuery = document.getElementById('userLocQuery');
const goBtn = document.getElementById('searchBtn');

// One Call API - Open Weather
const apiKey = "83eafbf0136fddba078f207e73c99163"; // Ideally a separate backend would obfuscate this but for use in Github pages it remains
/* Template literal for api call url construction housed in coordinatesLookup function */
const weatherIconUrl1 = "http://openweathermap.org/img/wn/";
const weatherIconUrl2 = "@2x.png";

// Nominatim Geosearch
const nominatimUrl = "https://nominatim.openstreetmap.org/search?format=json&city=";

// Local Storage Import
if (localStorage.getItem('lastSearch') == null) {                   // Conditional to check if any localStorage exists from previous use
    userLocQuery.innerText = "";                                    // Where no localStorage exists for previous user search set input field to blank
} else {
    userLocQuery.innerText = localStorage.getItem('lastSearch');    // Set input field to last user searched value
}

// [Open Weather] Weather data for coordinates
function weatherLookup (weatherUrl) {
    fetch(weatherUrl)
    .then(res => res.json())
    .then(data => localStorage.setItem('weather', JSON.stringify(data))); // Store the returned object containing the weather data in localStorage

    window.location.href = "today.html";
}

// [Nominatim] Coordinates for User Input
function coordinatesLookup (url, city) {    // Passed in NominatimUrl and user input
    fetch(url + city)                       // Call the Nominatim Api with the completed url
    .then(res => res.json())                // Return the JSON response
    .then(function (data) {                 // Extract the Latitude and Longitude of the user input city
        let lat = data[0].lat;
        let lon = data[0].lon;

        const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;    // Template Literal for API call construction

        weatherLookup(weatherUrl);            // Call the Open Weather Api with the returned Latitude and Longitude values input into the API call
    })
}

// Local Storage - Save Last User Search
function lastSearch () {
    localStorage.setItem('lastSearch', userLocQuery.innerText); // Save user input in localStorage
}

// User Search Call
goBtn.addEventListener("click", function(event) {
    event.preventDefault();

    lastSearch(userLocQuery.innerText);                         // Pass the user input to be saved in localStorage
    coordinatesLookup(nominatimUrl, userLocQuery.innerText);    // Pass the user input to the coordinate lookup API
})