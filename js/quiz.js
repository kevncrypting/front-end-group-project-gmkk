let questionsArrayPlaceholder = document.body.appendChild(document.createElement("div"));

let questionsArray = [];

let btn1 = document.getElementById("btn1")

let climate = document.getElementById('climate').value
let continent = document.getElementById('continent').value;
let geography = document.getElementById('geography').value;

questionsArray.push(climate.value, continent.value, geography.value)

function getUserInput() {
    btn1.addEventListener("click", function () {
        climate.value
        document.getElementById('questions').innerHTML = climate + " " + continent + " " + geography;
    })
}

function data() {
    btn1.addEventListener("click", function () {
        questions.innerHTML = climate + " " + continent + " " + geography;
        console.log(questions)
    })
}

