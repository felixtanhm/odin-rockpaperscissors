const playReverseMode = (p1, p2) => {
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

export { playReverseMode };
