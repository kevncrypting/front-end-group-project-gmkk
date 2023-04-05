
import API_TOKEN from "./config.js"

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=london&language=en&key=F8DA931BD63A4BAB806A9289206AA076`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

