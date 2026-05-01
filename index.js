
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
  const playerOptions = [rockBtn, paperBtn, scissorsBtn];
  const computerOptions = ["rock", "paper", "scissors"];
  const choices = document.querySelector("#choices")


  playerOptions.forEach(option => {
    option.addEventListener("click", playGame)
  })

function playGame(e) {
    const randomNum = Math.floor(Math.random() * computerOptions.length )
    const computerChoice = computerOptions[randomNum] 
    const writeComputerChoice = document.querySelector("#computer-choice")
    
    const playerChoice =e.target.id
    const writePlayerChoice = document.querySelector("#play-choice")
    const writeResult = document.querySelector('#resultDisplay')

    
    
    // resultDisplay.textContent = result
    writePlayerChoice.textContent = `PLAYER: ${playerChoice}`
    writeComputerChoice.textContent = `COMPUTER: ${computerChoice}`
    writeResult.textContent = `RESULT: ${result}`
    
    

    const result = (playerChoice, computerChoice) => {
    
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Player 1 won!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "Player 2 won!";
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    return "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Player 1 won!";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    return "Draw!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "Player 2 won!";
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    return "Draw!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "Player 2 won!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player 1 won!";
  }
};

}



  
