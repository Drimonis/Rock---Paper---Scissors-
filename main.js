



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

//const computerChoice = getComputerChoice();
//console.log(computerChoice);

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

//const humanChoice = getHumanChoice();
//console.log(humanChoice);

//SINGLE ROUND

// Play 5 Rounds



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors")
    ) {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      console.log("It's a tie!");
    }
  }

  // Round 1
  console.log("Round 1:");
  const humanChoice1 = getHumanChoice();
  const computerChoice1 = getComputerChoice();
  playRound(humanChoice1, computerChoice1);

  // Round 2
  console.log("Round 2:");
  const humanChoice2 = getHumanChoice();
  const computerChoice2 = getComputerChoice();
  playRound(humanChoice2, computerChoice2);

  // Round 3
  console.log("Round 3:");
  const humanChoice3 = getHumanChoice();
  const computerChoice3 = getComputerChoice();
  playRound(humanChoice3, computerChoice3);

  // Round 4
  console.log("Round 4:");
  const humanChoice4 = getHumanChoice();
  const computerChoice4 = getComputerChoice();
  playRound(humanChoice4, computerChoice4);

  // Round 5
  console.log("Round 5:");
  const humanChoice5 = getHumanChoice();
  const computerChoice5 = getComputerChoice();
  playRound(humanChoice5, computerChoice5);

  // Final Scores
  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();