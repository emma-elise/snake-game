import { snakeFood } from "./food.js";
import { findScore, findOutsideGrid } from "./rules.js";

export const snakeBody = [
  {
    row: Math.floor(Math.random() * 21),
    column: Math.floor(Math.random() * 21),
  },
];

let snakeDirection = { row: 0, column: 0 };

export function drawSnake() {
  $(".snake").removeClass("snake"); // removes left over "color" from snake moving
  snakeBody.forEach((segment) => {
    const snakeElement = document.querySelector(
      `.grid:nth-child(${segment.row * 21 + segment.column + 1}`
    );
    snakeElement.classList.add("snake");
  });
}

// moves snake once an arrow key or WASD is clicked
function updateSnakeBody() {
  const currentSnakeHead = snakeBody[0];
  const newSnakeHead = {
    row: currentSnakeHead.row + snakeDirection.row,
    column: currentSnakeHead.column + snakeDirection.column,
  };
  snakeBody.unshift(newSnakeHead);
  snakeBody.pop(currentSnakeHead);
  // verifies whether snake hit food - if so, update score and expand snake
  if (
    snakeBody[0].row == snakeFood[0].row &&
    snakeBody[0].column == snakeFood[0].column
  ) {
    snakeBody.push(currentSnakeHead);
    findScore();
  }
  findOutsideGrid();
}

// use arrow keys or WASD to move snake; also prevents moving backwards
window.addEventListener("keydown", (event) => {
  if (
    (snakeDirection.row !== 1 && event.keyCode == 38) ||
    event.keyCode == 87
  ) {
    snakeDirection = { row: -1, column: 0 };
  } else if (
    (snakeDirection.column !== 1 && event.keyCode == 37) ||
    event.keyCode == 65
  ) {
    snakeDirection = { row: 0, column: -1 };
  } else if (
    (snakeDirection.row !== -1 && event.keyCode == 40) ||
    event.keyCode == 83
  ) {
    snakeDirection = { row: 1, column: 0 };
  } else if (
    (snakeDirection.column !== -1 && event.keyCode == 39) ||
    event.keyCode == 68
  ) {
    snakeDirection = { row: 0, column: 1 };
  }
});

export function updateSnake() {
  drawSnake();
  updateSnakeBody();
}
