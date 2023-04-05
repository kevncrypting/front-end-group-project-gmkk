// this is how you import the API token into the .js file - from here on, ONLY use the API key as a variable! DO NOT copy and paste API key directly
import API_TOKEN from "./config"

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.content.tripadvisor.com/api/v1/location/search?key=${API_TOKEN}&searchQuery=%27london%27&language=en`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

