let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const numberIndex = Math.floor(Math.random() * 3)
  return options[numberIndex]
  
}

function hasPlayerWonTheRound(player, computer) {
   return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

