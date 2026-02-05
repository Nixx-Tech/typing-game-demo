* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

#game-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

#word-container {
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

#typed-word {
  width: 80%;
  padding: 10px;
  font-size: 20px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
}

#score-timer {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

#score {
  color: #4caf50;
}

#time-left {
  color: #ff5722;
}
