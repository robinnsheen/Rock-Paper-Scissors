const hands = new Map();
hands[0] = "rock";
hands[1] = "paper";
hands[2] = "scissors";

let playerWins = 0;
let computerWins = 0;
let playerSelection = "";
let computerSelection = "";

// rows = computer, column = player
const rules = [["tied", "win", "lose"],
               ["lose", "tied", "win"],
               ["win", "win", "tied"]];


game();


function computerPlay() {
  return Math.floor(Math.random() * 3);
}


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    playerSelection = 0;
  }

  else if (playerSelection === "paper") {
    playerSelection = 1;
  }

  else if (playerSelection === "scissors" || playerSelection === "scissor") {
    playerSelection = 2;
  }

  else {
    playerSelection = -1;
  }


  determineWin(computerSelection, playerSelection);

  function determineWin(computerSelection, playerSelection) {

    if (rules[computerSelection][playerSelection] === "tied") {
      console.log("You tied! " + hands[playerSelection] + " ties with " + hands[computerSelection]);
      return -1;
    }

    else if (rules[computerSelection][playerSelection] === "win") {
      console.log("You win! " + hands[playerSelection] + " beats " + hands[computerSelection]);
      return playerWins += 1;
    }

    else if (rules[computerSelection][playerSelection] === "lose") {
      console.log("You lose! " + hands[computerSelection] + " beats " + hands[playerSelection]);
      return computerWins += 1;
    }

    else {
      console.log("You're a troll you lose a point");
      return playerWins -= 1;
    }
  }

}

function game() {
  playerWins = 0;
  computerWins = 0;

  for (let i=0; i<5; i++){
    playerSelection = prompt("What is your move?");
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (computerWins > playerWins) {
    console.log("Computer wins the game with " + computerWins + " points vs " + playerWins + " points!");
  }
  if (playerWins > computerWins) {
    console.log("Player wins the game with " + playerWins + " points vs " + computerWins + " points!");
  }

  if (playerWins === computerWins) {
    console.log("Tie game! Player points: " + playerWins + " Computer points: " + computerWins);
  }
}


