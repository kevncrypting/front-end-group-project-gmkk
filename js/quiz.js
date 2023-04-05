// Creates a variable called questionSection that targets the area on the HTML page that we want our questions to appear
let questionSection = document.getElementById("questions")

let question1answer = ``;
let question2answer = ``;
let question3answer = ``;
let question4answer = ``;
let question5answer = ``;


// Creates an array of questions with choices to pick from - this will be replaced later by API if we have enough time to integrate it
let arrayOfQuestions = [
    {
        question: "Do you have a particular continent you'd like to visit, or no preference?",
        choices: ["Yes", "No"],
    },
    {
        question: "What continent interests you the most?",
        choices: ["North America", "South America", "Europe", "Africa", "Asia", "Antarctica", "Australia"],
    },
    {
        question: "Pick a climate",
        choices: ["Warm", "Cold"],
    },
    {
        question: "What interests you the most?",
        choices: ["City", "Nature"]
    },
];


let displayQuestions = () => {
    // Using the array, we want to push the question and choices into the page
    arrayOfQuestions.forEach(question => { // for each question in the arrayOfQuestions, do the following
        let questionHolder = document.createElement('div'); // create a div and assign it to a variable called questionHolder

        // assigns the class question to each questionHolder
        questionHolder.setAttribute('class', 'question');
        questionHolder.setAttribute('value', '');

        // change the innerHTML of that div to the question value using an object literal
        questionHolder.innerHTML = ` 
        <h3>${question.question}</h3>
        `

        question.choices.forEach(choice => {
            let choiceHolder = document.createElement('div');
            choiceHolder.innerHTML = choice;
            choiceHolder.setAttribute('class', 'choice');
            questionHolder.appendChild(choiceHolder);

            choiceHolder.addEventListener('click', (event) => {
                let userChoice = event.target.innerText
                choiceHolder.parentElement.setAttribute('value', `${userChoice}`)
            })

            questionSection.appendChild(questionHolder);
        })
    }
)}

displayQuestions()