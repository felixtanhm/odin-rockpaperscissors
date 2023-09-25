let gameMode;

// Mode Selection click handler
const handleModeClick = (e) => {
  gameMode = e.target.textContent.toLowerCase();
  console.log(gameMode);
};

const loadModeSelection = () => {
  // Generate helper text for Game Mode selection
  let title = document
    .querySelector("#choice-selection")
    .appendChild(document.createElement("h3"));
  title.innerText = 'Select a mode of "Scissors Paper Stone" to play!';

  // Generate buttons to select Game Modes
  let normalBtn = document
    .querySelector("#choice-selection")
    .appendChild(document.createElement("button"));
  normalBtn.innerText = "Normal";
  let reverseBtn = document
    .querySelector("#choice-selection")
    .appendChild(document.createElement("button"));
  reverseBtn.innerText = "Reverse";

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", handleModeClick);
  });
};

const loadGameMode = (mode) => {
  mode == "normal" ? console.log("normal mode") : console.log("reverse mode");
};

export { loadModeSelection, loadGameMode, gameMode };
