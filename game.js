import { updateSnake } from "./snake.js";
import { updateFood } from "./food.js";
import { gameSpeed } from "./rules.js";

function createGrid() {
  for (var rows = 0; rows < 21; rows++) {
    for (var columns = 0; columns < 21; columns++) {
      $("#container").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(840 / 21);
  $(".grid").height(840 / 21);
}

createGrid();

function update() {
  updateFood();
  updateSnake();
}

setInterval(update, gameSpeed);
