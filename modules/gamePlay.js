import {
  loadResultAnnouncement,
  loadWinnerAnnouncement,
  options,
} from "./elementRendering.js";

let playerScore = 0,
  comScore = 0;
const computerPlay = () => {
  let int = Math.floor(Math.random() * 3);
  let optionsArr = Object.keys(options);
  return optionsArr[int];
};

const playReverseMode = (playerChoice) => {
  let result;
  let comChoice = computerPlay(options);
  if (playerChoice == comChoice) {
    result = evaluateGamePlay("Draw");
  } else {
    if (options[playerChoice] == comChoice) {
      result = evaluateGamePlay("Com");
    } else {
      result = evaluateGamePlay("Player");
    }
  }
  return result;
};

const playNormalMode = (playerChoice) => {
  let comChoice = computerPlay(options);
  if (playerChoice == comChoice) {
    loadResultAnnouncement(
      "Draw",
      playerChoice,
      comChoice,
      playerScore,
      comScore
    );
  } else {
    if (options[playerChoice] == comChoice) {
      playerScore++;
      loadResultAnnouncement(
        "Player",
        playerChoice,
        comChoice,
        playerScore,
        comScore
      );
    } else {
      comScore++;
      loadResultAnnouncement(
        "Com",
        playerChoice,
        comChoice,
        playerScore,
        comScore
      );
    }
  }
};

const evaluateWinner = () => {
  if (playerScore == comScore) {
    loadWinnerAnnouncement("Draw");
  } else {
    playerScore > comScore
      ? loadWinnerAnnouncement("Player")
      : loadWinnerAnnouncement("Com");
  }
};

export { playReverseMode, playNormalMode, evaluateWinner };
