//Define variables
let options = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

let playerScore = 0;
let comScore = 0;
let gameRounds = 3;

//Define player choices
let computerPlay = () => {
  let int = Math.floor(Math.random() * 3);
  return Object.keys(options)[int];
};

let playerPlay = () => {
  return prompt("What's your choice?").toLowerCase();
};

//Evaluate gameplay
let gamePlay = (p1, p2) => {
  if (p1 == p2) {
    return "It's a draw!";
  } else {
    let winner = options[p1] == p2 ? "Player" : "Computer";
    winner == "Player" ? playerScore++ : comScore++;
    return `${winner} has won!`;
  }
};

//Execute gameplay
for (let round = 0; round < gameRounds; round++) {
  alert(gamePlay(playerPlay(), computerPlay()));
  alert(`Player Score ${playerScore} | Computer Score ${comScore}`);
}
