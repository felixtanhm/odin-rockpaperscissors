import { computerPlay, evaluateWinner } from "./modules/utils.js";

let gameMode;
let options = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
let optionsArr = Object.keys(options);

let playerScoreDisplay, comScoreDisplay, resultAnnouncement, winnerAnnouncement;
let playerScore,
  comScore = 0;
let gameRounds = 3;

// Mode Selection click handler
const handleModeClick = (e) => {
  gameMode = e.target.textContent.toLowerCase();
  loadGameMode(gameMode);
};

// Gameplay Option click handler
const handleOptionClick = (e) => {
  if (gameRounds > 0) {
    gamePlay(e.target.textContent.toLowerCase(), computerPlay(optionsArr));
    gameRounds--;
  }
  if (gameRounds == 0)
    evaluateWinner(playerScore, comScore, winnerAnnouncement);
};

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

const loadGameMode = (mode) => {
  // Set the Game Mode state
  gameMode = mode;

  // Create buttons for each of the options
  optionsArr.forEach((option) => {
    let button = document
      .querySelector("#gameplay-selection")
      .appendChild(document.createElement("button"));
    button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
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

  // Attach click handlers to each of the option buttons
  document.querySelectorAll("#score-container > button").forEach((button) => {
    button.addEventListener("click", handleOptionClick);
  });
};

// Load the respective page depending on current state
const loadPages = () => {
  gameMode ? loadGameMode(gameMode) : loadModeSelection();
};

loadPages();
