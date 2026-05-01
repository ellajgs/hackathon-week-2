const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playerOptions = [rockBtn, paperBtn, scissorsBtn];
const computerOptions = ["rock", "paper", "scissors"];
const choices = document.querySelector("#choices");

playerOptions.forEach((option) => {
  option.addEventListener("click", playGame);
});

function playGame(e) {
  const randomNum = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomNum];
  const writeComputerChoice = document.querySelector("#computer-choice");

  const playerChoice = e.target.id;
  const writePlayerChoice = document.querySelector("#play-choice");
  const writeResult = document.querySelector("#resultDisplay");

  // resultDisplay.textContent = result
  writePlayerChoice.textContent = `PLAYER: ${playerChoice}`;
  writeComputerChoice.textContent = `COMPUTER: ${computerChoice}`;

  const result = score(playerChoice, computerChoice);

  writeResult.textContent = `RESULT: ${result}`;
}
function score(playerChoice, computerChoice) {
  let result = "";
  if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "You won!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result = "You lost!";
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    result = "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "You won!";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    result = "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result = "You lost!";
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    result = "Draw!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result = "You lost!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You won!";
  }
  return result;
}
