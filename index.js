
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");
  const playerOptions = [rockBtn, paperBtn, scissorsBtn];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach(option => {
    option.addEventListener("click", playGame)
  })

function playGame() {
    const randomNum = Math.floor(Math.random() * computerOptions.length )
    const computerChoice = computerOptions[randomNum]
    
    

}

// const rps = (p1, p2) => {
//   if (p1 === "rock" && p2 === "scissors") {
//     return "Player 1 won!";
//   } else if (p1 === "rock" && p2 === "paper") {
//     return "Player 2 won!";
//   } else if (p1 === "rock" && p2 === "rock") {
//     return "Draw!";
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!";
//   } else if (p1 === "scissors" && p2 === "scissors") {
//     return "Draw!";
//   } else if (p1 === "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   } else if (p1 === "paper" && p2 === "paper") {
//     return "Draw!";
//   } else if (p1 === "paper" && p2 === "scissors") {
//     return "Player 2 won!";
//   } else if (p1 === "paper" && p2 === "rock") {
//     return "Player 1 won!";
//   }
// };
