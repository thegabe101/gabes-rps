const compChoiceDisplay = document.getElementById('oppChoice')
const playerChoiceDisplay = document.getElementById('playerChoice')
const resultDisplay = document.getElementById('outcome')
const possChoices = document.querySelectorAll('button')
let playerChoice;
let compChoice;
let result;

possChoices.forEach(possChoices => possChoices.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('clicked')
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    createCompChoice();
    determineResult();
}));

function createCompChoice() {
    const randomNum = Math.floor(Math.random() * possChoices.length) + 1;
    console.log(randomNum)
    if (randomNum === 1) {
        compChoiceDisplay.innerHTML = 'rock'
        compChoice = 'rock'
    } else if (randomNum === 2) {
        compChoiceDisplay.innerHTML = 'paper'
        compChoice = 'paper'
    } else if (randomNum === 3) {
        compChoiceDisplay.innerHTML = 'scissors'
        compChoice = 'scissors'
    }
};


function determineResult() {
    if (compChoice === playerChoice) {
        result = 'Draw!'
        console.log(result)
    } if (compChoice === 'rock' && playerChoice === 'paper') {
        result = 'You won!'
        console.log(result)
    } if (compChoice === 'scissors' && playerChoice === 'rock') {
        result = 'You won!'
        console.log(result)
    } if (compChoice === 'paper' && playerChoice === 'scissors') {
        result = 'You won!'
        console.log(result)
    } if (compChoice === 'rock' && playerChoice === 'scissors') {
        result = 'You lost!'
        console.log(result)
    } if (compChoice === 'scissors' && playerChoice === 'paper') {
        result = 'You lost!'
        console.log(result)
    } if (compChoice === 'paper' && playerChoice === 'rock') {
        result = 'You lost!'
        console.log(result)
    } resultDisplay.innerHTML = result
}


