import { playReverseMode, playNormalMode, evaluateWinner } from "./gamePlay.js";
import { loadNewGame } from "./elementRendering.js";

let gameRounds = 3;
let gameMode;

// Mode Selection click handler
const handleModeClick = (e) => {
  gameMode = e.target.textContent.toLowerCase();
  loadNewGame();
};

// Gameplay Option click handler
const handleOptionClick = (e) => {
  if (gameRounds > 0) {
    gameMode == "normal"
      ? playNormalMode(e.target.textContent.toLowerCase())
      : playReverseMode(e.target.textContent.toLowerCase());
    gameRounds--;
  }
  if (gameRounds == 0) {
    evaluateWinner();
  }
};

export { handleModeClick, handleOptionClick };
