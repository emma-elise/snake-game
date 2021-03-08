import { snakeBody } from "./snake.js";

export let gameScore = 0;
let highScore = localStorage.getItem("userHighScore") || 0; // if nothing in localStorage, then 0

document.getElementById("high-score").innerHTML = "High Score: " + highScore; // show highScore on load

// increments gameScore and sets to localStorage if highScore
export function findScore() {
  gameScore = gameScore + 1;
  document.getElementById("current-score").innerHTML =
    "Current Score: " + gameScore;
  if (highScore === 0 || highScore <= gameScore) {
    highScore = gameScore;
    document.getElementById("high-score").innerHTML =
      "High Score: " + highScore;
    localStorage.setItem("userHighScore", highScore);
  }
}

// if snake goes "out of bounds," then game over
export function findOutsideGrid() {
  const gameOver = () => {
    window.alert("Game over! Hit 'okay' to restart the game.");
    location.reload();
  };
  if (
    snakeBody[0].row < 0 ||
    snakeBody[0].row > 20 ||
    snakeBody[0].column < 0 ||
    snakeBody[0].column > 20
  ) {
    gameOver();
  }
}
