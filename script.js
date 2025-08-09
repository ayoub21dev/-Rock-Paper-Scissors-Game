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