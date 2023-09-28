import { handleModeClick, handleOptionClick } from "./eventHandlers.js";
import { resetScore } from "./gamePlay.js";

let options = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let optionsArr = Object.keys(options);
let playerScoreDisplay, comScoreDisplay, resultAnnouncement, winnerAnnouncement;

const loadModeSelection = () => {
  // Generate helper text for Game Mode selection
  let title = document
    .querySelector("#mode-selection")
    .appendChild(document.createElement("h3"));
  title.innerText = 'Select a mode of "Scissors Paper Stone" to play!';

  // Generate buttons to select Game Modes
  let normalBtn = document
    .querySelector("#mode-selection")
    .appendChild(document.createElement("button"));
  normalBtn.innerText = "Normal";
  let reverseBtn = document
    .querySelector("#mode-selection")
    .appendChild(document.createElement("button"));
  reverseBtn.innerText = "Reverse";

  document.querySelectorAll("#mode-selection > button").forEach((button) => {
    button.addEventListener("click", handleModeClick);
  });
};

const loadNewGame = () => {
  // Remove Mode Selection options
  let modeSelection = document.getElementById("mode-selection");
  modeSelection.querySelectorAll("*").forEach((n) => n.remove());

  // Create buttons for each of the options
  optionsArr.forEach((option) => {
    let button = document
      .querySelector("#gameplay-selection")
      .appendChild(document.createElement("button"));
    button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
  });

  // Attach click handlers to each of the option buttons
  document
    .querySelectorAll("#gameplay-selection > button")
    .forEach((button) => {
      button.addEventListener("click", handleOptionClick);
    });

  // Create helper text to display information on the state of gameplay
  let title = document
    .querySelector("#score-container")
    .appendChild(document.createElement("h2"));
  title.innerText = "Score";
  playerScoreDisplay = document
    .querySelector("#score-container")
    .appendChild(document.createElement("h3"));
  comScoreDisplay = document
    .querySelector("#score-container")
    .appendChild(document.createElement("h3"));
  resultAnnouncement = document
    .querySelector("#result-container")
    .appendChild(document.createElement("h3"));
  winnerAnnouncement = document
    .querySelector("#result-container")
    .appendChild(document.createElement("h3"));

  playerScoreDisplay.innerText = `Player: 0`;
  comScoreDisplay.innerText = `Computer: 0`;
};

const loadResultAnnouncement = (
  result,
  playerChoice,
  comChoice,
  playerScore,
  comScore
) => {
  if (result == "Draw") {
    resultAnnouncement.innerText = "It's a draw!";
  } else {
    playerScoreDisplay.innerText = `Player: ${playerScore}`;
    comScoreDisplay.innerText = `Computer: ${comScore}`;
    resultAnnouncement.innerText = `You chose ${playerChoice}, while Computer chose ${comChoice}. ${result} has won!`;
  }
};

const loadWinnerAnnouncement = (result) => {
  // Removes Rock Paper Scissors Option buttons
  let buttons = document.querySelectorAll("#gameplay-selection > button");
  buttons.forEach((n) => n.remove());

  // Evaluate Winner
  let button = document
    .querySelector("#result-container")
    .appendChild(document.createElement("button"));
  button.textContent = "Play Again";
  button.addEventListener("click", resetGame);

  if (result == "Draw") {
    winnerAnnouncement.innerText = `Game is over! It's a draw!`;
  } else {
    result == "Player"
      ? (winnerAnnouncement.innerText = `Game is over! Player has won!`)
      : (winnerAnnouncement.innerText = `Game is over! Computer has won!`);
  }
};

const resetGame = () => {
  // Removes result statements
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.querySelectorAll("*").forEach((n) => n.remove());

  // Removes result statements
  let resultContainer = document.getElementById("result-container");
  resultContainer.querySelectorAll("*").forEach((n) => n.remove());

  resetScore();
  loadModeSelection();
};

export {
  loadModeSelection,
  loadNewGame,
  loadResultAnnouncement,
  loadWinnerAnnouncement,
  resetGame,
  options,
};
