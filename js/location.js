
import API_TOKEN from "./config.js"

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.geoapify.com/v2/place-details?lat=33.755288239726966&lon=-84.39215801604593&apiKey=${API_TOKEN}`)
.then(response => response.json())
.then(result => console.log(result))

.catch(error => console.log('error', error));
