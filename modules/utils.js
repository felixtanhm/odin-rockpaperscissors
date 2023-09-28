const computerPlay = (optionsArr) => {
  let int = Math.floor(Math.random() * 3);
  return optionsArr[int];
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
  if (result == "Draw") {
    winnerAnnouncement.innerText = `Game is over! It's a draw! Refresh the page to play again.`;
  } else {
    result == "Player"
      ? (winnerAnnouncement.innerText = `Game is over! Player has won! Refresh the page to play again.`)
      : (winnerAnnouncement.innerText = `Game is over! Computer has won! Refresh the page to play again.`);
  }
};

const resetGame = () => {
  console.log(`game reset`);
};

export {
  computerPlay,
  loadResultAnnouncement,
  loadWinnerAnnouncement,
  resetGame,
};
