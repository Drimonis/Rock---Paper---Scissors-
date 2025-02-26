let humanScore = 0;
let computerScore = 0;


// COMPUTER CHOICE
function getComputerChoice() {
 
  
 const randomNumber = Math.floor(Math.random() * 3);
 
  if (randomNumber === 0) {
    return 'Rock';
  } else if (randomNumber === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

const computerChoice = getComputerChoice();
console.log(computerChoice);


// HUMAN CHOICE

function getHumanChoice() {
  
  const humanChoice = prompt('Choose between Rock, Paper, Scissors').toLocaleLowerCase();  //PROMPT FOR HUMAN CHOICE and toLowerCase
 
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return `${humanChoice}`;
  } else {
    alert('This is not an option')
    return humanChoice;
  }
}

const humanChoice = getHumanChoice();
console.log(humanChoice);



//SINGLE ROUND 

function playRound(humanChoice, computerChoice) {
 
  if (humanChoice === 'rock' && computerChoice === 'scissors'||
     humanChoice === 'paper' && computerChoice === 'rock' ||
     humanChoice === 'scissors' && computerChoice === 'paper') {
      return `You win ${humanChoice} beats ${computerChoice}`; 
     }  else if (humanChoice === 'scissors' && computerChoice === 'rock'||
      humanChoice === 'rock' && computerChoice === 'paper' ||
      humanChoice === 'paper' && computerChoice === 'scissors' ) {
        return `You lose ${computerChoice} beats ${humanChoice}`;
     } else {
      return "it's a tie";
     }
}

const humanSelection = getHumanChoice; 
const computerSelection = getComputerChoice;

playRound(humanSelection, computerSelection);






















































































































































































































































































































































































