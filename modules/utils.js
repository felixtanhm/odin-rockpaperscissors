const gameModeSelect = () => {};

const initGamePlay = (optionsArr) => {
  optionsArr.forEach((option) => {
    let button = document
      .querySelector("#choice-selection")
      .appendChild(document.createElement("button"));
    button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
  });

  let playerScoreDisplay = document
    .querySelector("#score-container")
    .appendChild(document.createElement("h3"));
  let comScoreDisplay = document
    .querySelector("#score-container")
    .appendChild(document.createElement("h3"));
  let resultAnnouncement = document
    .querySelector("#result-container")
    .appendChild(document.createElement("h3"));
  let winnerAnnouncement = document
    .querySelector("#result-container")
    .appendChild(document.createElement("h3"));

  playerScoreDisplay.innerText = `Player: 0`;
  comScoreDisplay.innerText = `Computer: 0`;

  return [
    playerScoreDisplay,
    comScoreDisplay,
    resultAnnouncement,
    winnerAnnouncement,
  ];
};

const computerPlay = (optionsArr) => {
  let int = Math.floor(Math.random() * 3);
  return optionsArr[int];
};

const evaluateWinner = (playerScore, comScore, winnerAnnouncement) => {
  if (playerScore == comScore) {
    winnerAnnouncement.innerText = `Game is over! It's a draw! Refresh the page to play again.`;
  } else {
    playerScore > comScore
      ? (winnerAnnouncement.innerText = `Game is over! Player has won! Refresh the page to play again.`)
      : (winnerAnnouncement.innerText = `Game is over! Computer has won! Refresh the page to play again.`);
  }
};

export { initGamePlay, computerPlay, evaluateWinner };
