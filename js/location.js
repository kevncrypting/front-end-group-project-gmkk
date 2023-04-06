import API_TOKEN from "./config.js"

// const options = { method: 'GET', headers: { accept: 'application/json' } };

let form = document.querySelector('form'); // targets form on page
let inputCity = document.getElementById('input-city'); // targets input box on page
let cityName = document.getElementById('city-name');

let cityInput = ``;
let cityPlaceID = ``;

form.addEventListener('submit', (event) => { // listens for submission of form
    event.preventDefault(); // prevents page refresh
    cityInput = inputCity.value; // sets cityInput equal to the value of the input box
    console.log(getCityData(cityInput, API_TOKEN)); // shows object in console to access properties
    console.log(cityInput); // displays input to console to verify
    inputCity.value = ``; // clears the input box after submit
})

function getCityData(city, apiKey) { // found this function in a tutorial on the Geoapify website - purpose is to create an object based on the city entered which contains the placeID. From this, we can plug the placeID into another fetch for the categories we are looking for.
    return fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&format=json&apiKey=${apiKey}`)
    .then(data => data.json())
    .then(results => {
        const cityData = results.results.length ? results.results[0] : null;
        cityPlaceID = cityData.place_id
        console.log(cityPlaceID);
        return cityData;
    });
}

let getHotels = placeID => {

}

// https://api.geoapify.com/v2/places?categories=${category}&filter=place:${cityId}&limit=${limit}&apiKey=${apiKey}&offset=${offset}

// Goal is to have user able to input a location and display 5 hotels, restaurants, and attractions.

