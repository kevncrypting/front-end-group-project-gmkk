// Creates a variable called questionSection that targets the area on the HTML page that we want our questions to appear
let questionSection = document.getElementById("questions")
let btn2 = document.getElementById('btn2')

let locations = [
    {
        location: "Snake Island, Brazil",
        description: "Considered as one of the deadliest places, Snake Island in Brazil is definitely one of the most dangerous places on Earth. 90 miles from the city of Sao Paulo, this super deadly island is home to the largest concentrated population of snakes in the world. According to research, Snake Island aka Ilha da Queimada Grande has about five snakes per square meter. It is said that snakes on this Brazilian island are so venomous that they can melt human flesh. This island is the only place in the world where the golden lancehead viper is found and the most venomous snake in the world, the Bothrops thrives. Due to the extremely high risk for tourists and black market demand for lancehead venom, the Brazilian government has strictly prohibited visits to Ilha da Queimada Grande.",
        hotels: ["Serpiente Motel", "Hilton Head"],
        attractions: ["Serp Swimming", "Cave Diving"],
        food: ["Local Fisherman Fish of the day", "Snake Soup"]
    },
    {
        location: "Danakil Desert, Ethiopia",
        description: "The hottest place on earth, the Danakil Desert in Ethiopia is one of the driest and lowest places on the planet that looks like an alien land. One can witness volcanoes oozing out lava, multiple hues of hydrothermal fields, and massive salt pans that leave you stupefied. Covered with more than 10 lakh tonnes of salt, this deadly desert lies at the northern end of the Great Rift Valley that is separated by live volcanoes from the Red Sea. Exploring this hair-raising region requires driving for hours on bumpy, dusty dirt roads that begin starting from Mekele. The barren land is home to many active volcanoes that spew toxic gases.",
        hotels: ["Doho Lodge & Hot Springs", "Kuriftu Resort & Spa Awash Falls"],
        attractions: ["3 Days Danakil Depression Tour", "Dalol tours"],
        food: ["Kategna Restaurant", "The Kitchen"],
    },
    {
        location: "Lionsmane Village, Lionmania",
        description: "The Utopia",
        hotels: ["Mushroom Hotel", "Luigi Mansion"],
        attractions: ["Road to Nueroplasticity", "My affiliate link"],
        food: ["Lionsmane Burger", "Lionsmane Chicken Nuggets"],
    },
    {
        location: "27.486786, -175.930167",
        description: "Are you ready, kids. Aye aye Captain. I can't hear you. Aye aye Captain. Ohhhh Who lives in a pineapple under the sea. SpongeBob SquarePants. Absorbant and yellow and porous is he. SpongeBob SquarePants. If nautical nonsense be something you wish. SpongeBob SquarePants. Then drop on the deck and flop like a fish. SpongeBob SquarePants. Ready. SpongeBob SquarePants. SpongeBob SquarePants SpongeBob SquarePants SpongeBob SquarePants Aha ha  haha ha",
        hotels: ["Fancy Hotel", "Rock Bottom Motel"],
        attractions: ["Jellyfish Fields", "Goo Lagoon"],
        food: ["Krusty Krab", "Chum Bucket"],
    }
]


console.log(locations)
let continent = document.getElementById('continent')
let country = document.getElementById('country')
let weather = document.getElementById('weather')
let geography = document.getElementById('geography')
let lionsmane = document.getElementById('lionsmane')
let btn1 = document.getElementById('btn1')

btn1.addEventListener("click", function () {
    locations.Math.floor(location => {
        let locationHolder = document.createElement('div')
        locationHolder.setAttribute('class', 'location')
        questionSection.appendChild(locationHolder)
        locationHolder.innerHTML = location.location
        });
    }
    )

// click button, takes to locations page

btn1.addEventListener("click", () => {
    
})

// locations page should be populated with a random location's information












// let question1answer = ``;
// let question2answer = ``;
// let question3answer = ``;
// let question4answer = ``;
// let question5answer = ``;


// // Creates an array of questions with choices to pick from - this will be replaced later by API if we have enough time to integrate it
// let arrayOfQuestions = [
//     {
//         question: "Do you have a particular continent you'd like to visit, or no preference?",
//         choices: ["Yes", "No"],
//     },
//     {
//         question: "What continent interests you the most?",
//         choices: ["North America", "South America", "Europe", "Africa", "Asia", "Antarctica", "Australia"],
//     },
//     {
//         question: "Pick a climate",
//         choices: ["Warm", "Cold"],
//     },
//     {
//         question: "What interests you the most?",
//         choices: ["City", "Nature"]
//     },
// ];


// let displayQuestions = () => {
//     // Using the array, we want to push the question and choices into the page
//     arrayOfQuestions.forEach(question => { // for each question in the arrayOfQuestions, do the following
//         let questionHolder = document.createElement('div'); // create a div and assign it to a variable called questionHolder

//         // assigns the class question to each questionHolder
//         questionHolder.setAttribute('class', 'question');
//         questionHolder.setAttribute('value', '');

//         // change the innerHTML of that div to the question value using an object literal
//         questionHolder.innerHTML = ` 
//         <h3>${question.question}</h3>
//         `

//         question.choices.forEach(choice => {
//             let choiceHolder = document.createElement('div');
//             choiceHolder.innerHTML = choice;
//             choiceHolder.setAttribute('class', 'choice');
//             questionHolder.appendChild(choiceHolder);

//             choiceHolder.addEventListener('click', (event) => {
//                 let userChoice = event.target.innerText
//                 choiceHolder.parentElement.setAttribute('value', `${userChoice}`)
//             })

//             questionSection.appendChild(questionHolder);
//         })
//     }
// )}

// displayQuestions()