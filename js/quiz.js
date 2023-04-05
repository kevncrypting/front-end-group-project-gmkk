// let questionsArrayPlaceholder = document.body.appendChild(document.createElement("div"));

let questionSection = document.getElementById("questions")

// let questionArray = []
// let climate = document.getElementById('climate').value
// let continent = document.getElementById('continent').value;
// let geography = document.getElementById('geography').value;
// let btn1 = document.getElementById("btn1")

// Creates an array of questions with choices to pick from
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

// Using the array, we want to push the question and choices into the page

arrayOfQuestions.forEach(question => {
    let questionHolder = document.createElement('div');

    questionHolder.innerHTML = `
    <h3>${question.question}</h3>
    `

    question.choices.forEach(choice => {
        let choiceHolder = document.createElement('div')
    choiceHolder.innerHTML = choice
    questionHolder.append(choiceHolder);
    })


    questionSection.append(questionHolder)
})

// function data() {
//     btn1.addEventListener("click", function () {
//         // questionsArray.innerHTML = climate + " " + continent + " " + geography;
//         console.log(questionsArray.innerHTML)
//     })
// }

