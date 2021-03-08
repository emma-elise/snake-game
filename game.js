import { updateSnake } from "./snake.js";
import { updateFood } from "./food.js";
import { gameScore } from "./rules.js";

let gameSpeed = 250; // default speed of game for setInterval

function createGrid() {
  for (var rows = 0; rows < 21; rows++) {
    for (var columns = 0; columns < 21; columns++) {
      $("#container").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(840 / 21);
  $(".grid").height(840 / 21);
}

// gameSpeed increases per gameScore; setInterval =/= real time due to game lag, so it's more there to simply speed up
if (gameScore >= 5 && gameScore <= 9) {
  gameSpeed = 200;
} else if (gameScore >= 10 && gameScore <= 19) {
  gameSpeed = 125;
} else if (gameScore >= 20 && gameScore <= 29) {
  gameSpeed = 50;
} else if (gameScore >= 30 && gameScore <= 39) {
  gameSpeed = 25;
} else if (gameScore >= 40) gameSpeed = 15;

createGrid();

function update() {
  updateFood();
  updateSnake();
}

setInterval(update, gameSpeed);
