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

//Generate Elements
let playerScoreDisplay = document
  .querySelector("#score-container")
  .appendChild(document.createElement("h3"));
let comScoreDisplay = document
  .querySelector("#score-container")
  .appendChild(document.createElement("h3"));
let resultAnnouncement = document
  .querySelector("#choice-selection")
  .appendChild(document.createElement("h3"));
let winnerAnnouncement = document
  .querySelector("#choice-selection")
  .appendChild(document.createElement("h3"));

playerScoreDisplay.innerText = `Player: ${playerScore}`;
comScoreDisplay.innerText = `Computer: ${comScore}`;

//Generate computer choice
const computerPlay = () => {
  let int = Math.floor(Math.random() * 3);
  return optionsArr[int];
};

//Evaluate gameplay
const gamePlay = (p1, p2) => {
  gameRounds--;
  if (p1 == p2) {
    resultAnnouncement.innerText = "It's a draw!";
  } else {
    let winner;
    if (options[p1] == p2) {
      playerScore++;
      playerScoreDisplay.innerText = `Player: ${playerScore}`;
      winner = "Player";
    } else {
      comScore++;
      comScoreDisplay.innerText = `Computer: ${comScore}`;
      winner = "Computer";
    }
    resultAnnouncement.innerText = `${winner} has won!`;
  }
};

const evaluateWinner = () => {
  if (playerScore == comScore) {
    winnerAnnouncement.innerText = `Game is over! It's a draw! Refresh the page to play again.`;
  } else {
    playerScore > comScore
      ? (winnerAnnouncement.innerText = `Game is over! Player has won! Refresh the page to play again.`)
      : (winnerAnnouncement.innerText = `Game is over! Computer has won! Refresh the page to play again.`);
  }
};

const handleClick = (e) => {
  if (gameRounds > 0)
    gamePlay(e.target.textContent.toLowerCase(), computerPlay());
  if (gameRounds == 0) evaluateWinner();
};

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleClick);
});
