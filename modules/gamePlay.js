import { loadResultAnnouncement, loadWinnerAnnouncement } from "./utils.js";

let playerScore,
  comScore = 0;

const playReverseMode = (playerChoice, comChoice, options) => {
  let result;
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

const playNormalMode = (playerChoice, comChoice, options) => {
  let result;
  if (playerChoice == comChoice) {
    result = evaluateGamePlay("Draw");
  } else {
    if (options[playerChoice] == comChoice) {
      result = evaluateGamePlay("Player");
    } else {
      result = evaluateGamePlay("Com");
    }
  }
  return result;
};

const evaluateGamePlay = (result) => {
  if (result == "Player") {
    playerScore++;
  } else if (result == "Com") {
    comScore++;
  }
  loadResultAnnouncement(
    result,
    playerChoice,
    comChoice,
    playerScore,
    comScore
  );
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
