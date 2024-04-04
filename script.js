// Define variables
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Define functions
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  const userDifference = Math.abs(targetNumber - userGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);
  
  if (userDifference <= computerDifference) {
    return true; // Human wins
  } else {
    return false; // Computer wins
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

// Test the functions
const targetNumber = generateTarget();
const userGuess = 4;
const computerGuess = 6;

console.log("Target Number: " + targetNumber);
console.log("User Guess: " + userGuess);
console.log("Computer Guess: " + computerGuess);

const userWins = compareGuesses(userGuess, computerGuess, targetNumber);
console.log("User wins:", userWins);

updateScore(userWins ? 'human' : 'computer');
console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

advanceRound();
console.log("Current Round Number:", currentRoundNumber);
