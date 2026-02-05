// Game variables
let score = 0;
let timeLeft = 60;
let gameInterval;
let wordToTypeElement = document.getElementById("word-to-type");
let typedWordElement = document.getElementById("typed-word");
let scoreElement = document.getElementById("score");
let timeLeftElement = document.getElementById("time-left");

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

function startGame() {
  score = 0;
  timeLeft = 60;
  updateScore();
  updateTime();
  
  gameInterval = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(gameInterval);
      alert("Game Over! Final score: " + score);
      resetGame();
    } else {
      timeLeft--;
      updateTime();
    }
  }, 1000);
  
  setNewWord();
}

// Set a new word to type
function setNewWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordToTypeElement.textContent = randomWord;
}

// Update score display
function updateScore() {
  scoreElement.textContent = "Score: " + score;
}

// Update time display
function updateTime() {
  timeLeftElement.textContent = "Time: " + timeLeft + "s";
}

// Check user input and update score
typedWordElement.addEventListener("input", function () {
  if (typedWordElement.value === wordToTypeElement.textContent) {
    score++;
    updateScore();
    setNewWord();
    typedWordElement.value = "";  // Clear input field
  }
});

// Reset the game
function resetGame() {
  typedWordElement.value = "";
  wordToTypeElement.textContent = "Start Typing!";
  score = 0;
  timeLeft = 60;
  updateScore();
  updateTime();
}

startGame();  // Start the game when page loads

