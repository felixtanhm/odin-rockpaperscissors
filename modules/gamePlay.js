const playReverseMode = (playerChoice, comChoice) => {
  if (playerChoice == comChoice) {
    return "Draw";
  } else {
    if (options[playerChoice] == comChoice) {
      return "Com";
    } else {
      return "Player";
    }
  }
};

const playNormalMode = (playerChoice, comChoice) => {
  if (playerChoice == comChoice) {
    return "Draw";
  } else {
    if (options[playerChoice] == comChoice) {
      return "Player";
    } else {
      return "Com";
    }
  }
};

export { playReverseMode, playNormalMode };
