import { reverseMode } from "./modules/reverseMode.js";
import { initGamePlay, computerPlay, evaluateWinner } from "./modules/utils.js";

//Define variables
let options = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let optionsArr = Object.keys(options);
console.log(optionsArr);

let playerScore = 0;
let comScore = 0;
let gameRounds = 3;
let [
  playerScoreDisplay,
  comScoreDisplay,
  resultAnnouncement,
  winnerAnnouncement,
] = initGamePlay(optionsArr);

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

const handleClick = (e) => {
  if (gameRounds > 0)
    gamePlay(e.target.textContent.toLowerCase(), computerPlay(optionsArr));
  if (gameRounds == 0)
    evaluateWinner(playerScore, comScore, winnerAnnouncement);
};

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleClick);
});

console.log(reverseMode());
