import API_TOKEN from "./config.js"

// const options = { method: 'GET', headers: { accept: 'application/json' } };

let form = document.querySelector('form'); // targets form on page
let inputCity = document.getElementById('input-city'); // targets input box on page
let cityName = document.getElementById('city-name');

let cityInput = ``; // defines empty variable that will be populated after user inputs a city
let cityPlaceID = ``; // defines empty variable that will be populated after user inputs a city

form.addEventListener('submit', (event) => { // listens for submission of form
    event.preventDefault(); // prevents page refresh
    cityInput = inputCity.value; // sets cityInput equal to the value of the input box
    getCityData(cityInput, API_TOKEN)
        .then(() => {
            getCategory('accommodation');
            getCategory('entertainment');
            getCategory('catering');
        });
    console.log(cityInput); // displays input to console to verify
    inputCity.value = ``; // clears the input box after submit
})

function getCityData(city, apiKey) { // found this function in a tutorial on the Geoapify website - purpose is to create an object based on the city entered which contains the placeID. From this, we can plug the placeID into another fetch for the categories we are looking for.
    return fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&format=json&apiKey=${apiKey}`)
        .then(data => data.json())
        .then(results => {
            const cityData = results.results.length ? results.results[0] : null;
            cityPlaceID = cityData.place_id // grabs the place_ID property's value inside the cityData object and changes the global variable to reflect the current location's placeID for subsequent functionality
            return cityData;
        });
}

let categoryContainer = document.getElementById('category-container')

let entertainmentSection = document.getElementById('entertainment')
let accommodationSection = document.getElementById('accommodation')
let cateringSection = document.getElementById('catering')

let getCategory = (category) => { // created this function and substituted areas in fetch URL with variables that accomplish what we are looking to populate on the page
    fetch(`https://api.geoapify.com/v2/places?categories=${category}&filter=place:${cityPlaceID}&limit=5&apiKey=${API_TOKEN}`)
        .then(data => data.json())
        .then(result => {
            let categorySection = document.createElement('div'); // creates a variable called categorySection that references a new div element
            let categoryUnorderedList = document.createElement('ul'); // creates a variable called categoryUnorderedList that references a new ul element

            let namesArray = []; // creates an empty array that will be populated with the names of the following forEach
            
            result.features.forEach(result => { // accessing the features property of each result, then pushing the name property into the namesArray
                namesArray.push(result.properties.name) // pushing the name of each place into the empty namesArray
            })

            namesArray.forEach(name => { // iterates through the namesArray and:
                let nameListItem = document.createElement('li'); // creates a list item
                nameListItem.innerHTML = name; // changes the innerHTML of the list item to the value of the name property
                categoryUnorderedList.appendChild(nameListItem);
            })

            categorySection.appendChild(categoryUnorderedList); // appends the unordered list to the categorySection

            if (category == 'accommodation') { // conditional block to append the categorySection to the correct section
                accommodationSection.appendChild(categorySection);
            } else if (category == 'entertainment') {
                entertainmentSection.appendChild(categorySection);
            } else if (category == 'catering') {
                cateringSection.appendChild(categorySection);
            }
        })
}