// DOM Targeting
const titleTar = document.querySelector('title');

// Title Update
function init () {
    let city = localStorage.getItem('lastSearch');

    titleTar.innerText = `Today's Weather in ${city}`;
}

init();