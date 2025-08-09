function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const numberIndex = Math.floor(Math.random() * 3)
  return options[numberIndex]
  
}