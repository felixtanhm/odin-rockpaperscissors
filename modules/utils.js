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

export { computerPlay, evaluateWinner };
