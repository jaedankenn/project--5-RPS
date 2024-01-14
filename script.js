// bring elements from doc
const buttons = document.querySelectorAll("button")

const resultEl = document.getElementById("result")

const playerScoreEl = document.getElementById("user-score")

const computerScoreEl = document.getElementById("computer-score")

// Game Functions
let playerScore = 0
let computerScore = 0 // starts computer score as 0

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay())
    resultEl.textContent = result
  })
})

function computerPlay() {
  // Formula for computer gameplay
  const choices = ["rock", "paper", "scissors"] // list of computer choices
  const randomChoices = Math.floor(Math.random() * choices.length) // creates RGN for computer to choose from
  return choices[randomChoices] //returns choices based on RG number
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (
    (playerSelection === "rock" && computerSelection === "scisors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++
    playerScoreEl.textContent = playerScore
    return "You win! " + playerSelection + " beats " + computerSelection
  } else {
    computerScore++
    computerScoreEl.textContent = computerScore
    return "You lose! " + computerSelection + " beats " + playerSelection
  }
}
