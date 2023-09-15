//Define variables
let options = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};
let optionsArr = Object.keys(options);

let playerScore = 0;
let comScore = 0;
let gameRounds = 3;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener(
    "click",
    gamePlay(button.textContent.toLowerCase(), computerPlay())
  );
});

// Determine who wins
// Update DOM to reflect new score
// Update rounds to reflect that a round has been played
// When rounds reach 0, declare winner or draw

//Define player choices
let computerPlay = () => {
  let int = Math.floor(Math.random() * 3);
  return optionsArr[int];
};

//Evaluate gameplay
const gamePlay = (p1, p2) => {
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
