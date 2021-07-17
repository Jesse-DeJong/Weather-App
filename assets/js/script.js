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

// Local Storage Import
if (localStorage.getItem('lastSearch') == null) {
    userLocQuery.innerText = "";
} else {
    userLocQuery.innerText = localStorage.getItem('lastSearch');
}

// Local Storage - Save Last User Search
function lastSearch () {
    localStorage.setItem('lastSearch', userLocQuery.innerText);
}

// User Search Call
goBtn.addEventListener("click", function(event) {
    event.preventDefault();

    lastSearch(userLocQuery.innerText);
    coordinatesLookup(nominatimUrl, userLocQuery.innerText);
})