// DOM Targeting
const userLocQuery = document.getElementById('userLocQuery');
const goBtn = document.getElementById('searchBtn');

// One Call API - Open Weather
const apiKey = "83eafbf0136fddba078f207e73c99163"; // Ideally a separate backend would obfuscate this but for use in Github pages it remains
const weatherUrl1 = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const weatherUrl2 = "&lon=";
const weatherUrl3 = "&units=metric&appid=" + apiKey;
const weatherIconUrl1 = "http://openweathermap.org/img/wn/";
const weatherIconUrl2 = "@2x.png";

// Nominatim Geosearch
const nominatimUrl = "https://nominatim.openstreetmap.org/search?format=json&city=";

// User Search Call
goBtn.addEventListener("click", function(event) {
    event.preventDefault();

    coordinatesLookup(nominatimUrl, userLocQuery.innerText);
})