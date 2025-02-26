let humanScore = 0;
let computerScore = 0;

// COMPUTER CHOICE
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

// HUMAN CHOICE

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose between Rock, Paper, Scissors"
  ).toLocaleLowerCase(); //PROMPT FOR HUMAN CHOICE and toLowerCase

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return `${humanChoice}`;
  } else {
    alert("This is not an option");
    return humanChoice;
  }
}

const humanChoice = getHumanChoice();
console.log(humanChoice);

//SINGLE ROUND

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win ${humanChoice} beats ${computerChoice}`);
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log(`You lose ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log("it's a tie");
  }
}

playRound();

console.log(getHumanChoice());
console.log(getComputerChoice());
