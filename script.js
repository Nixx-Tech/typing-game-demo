// Game variables
let score = 0; // Start with score 0
let timeLeft = 60; // Start with 60 seconds
let gameInterval; // Store the timer interval

// Get the HTML elements by their ID
let wordToTypeElement = document.getElementById("word-to-type");
let typedWordElement = document.getElementById("typed-word");
let scoreElement = document.getElementById("score");
let timeLeftElement = document.getElementById("time-left");

// List of words to type
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

// Function to start the game
function startGame() {
  score = 0; // Reset score to 0
  timeLeft = 60; // Reset time to 60 seconds
  updateScore(); // Update the score display
  updateTime(); // Update the time display

  // Set the game interval (decrease time every second)
  gameInterval = setInterval(function () {
    if (timeLeft === 0) { // If time is over
      clearInterval(gameInterval); // Stop the timer
      alert("Game Over! Final score: " + score); // Show final score
      resetGame(); // Reset the game for next play
    } else {
      timeLeft--; // Decrease the time by 1
      updateTime(); // Update the time display
    }
  }, 1000);

  setNewWord(); // Set the first word to type
}

// Function to set a new word
function setNewWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordToTypeElement.textContent = randomWord; // Display the random word
}

// Function to update the score display
function updateScore() {
  scoreElement.textContent = "Score: " + score;
}

// Function to update the time display
function updateTime() {
  timeLeftElement.textContent = "Time: " + timeLeft + "s";
}

// Check if the typed word matches the displayed word
typedWordElement.addEventListener("input", function () {
  if (typedWordElement.value === wordToTypeElement.textContent) {
    score++; // Increment score
    updateScore(); // Update the score display
    setNewWord(); // Set a new word to type
    typedWordElement.value = ""; // Clear the input field
  }
});

// Function to reset the game
function resetGame() {
  typedWordElement.value = ""; // Clear the input
  wordToTypeElement.textContent = "Start Typing!"; // Reset the word display
  score = 0; // Reset the score
  timeLeft = 60; // Reset the time
  updateScore(); // Update the score display
  updateTime(); // Update the time display
}

// Start the game when the page loads
startGame();
