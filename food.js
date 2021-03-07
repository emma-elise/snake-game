import { snakeBody } from "./snake.js";

export let snakeFood = [
  {
    row: Math.floor(Math.random() * 21),
    column: Math.floor(Math.random() * 21),
  },
];

function drawFood() {
  // first time food rendered on page load
  function newFood() {
    snakeFood.forEach((segment) => {
      const foodElement = document.querySelector(
        `.grid:nth-child(${segment.row * 21 + segment.column + 1}`
      );
      foodElement.classList.add("food");
    });
  }
  // remove food as its eaten and render new food
  function replaceFood() {
    $(".food").removeClass("food");
    snakeFood.pop();
    let newSnakeFood = [
      {
        row: Math.floor(Math.random() * 21),
        column: Math.floor(Math.random() * 21),
      },
    ];
    snakeFood = newSnakeFood;
    newFood();
  }
  if (
    snakeBody[0].row == snakeFood[0].row &&
    snakeBody[0].column == snakeFood[0].column
  ) {
    replaceFood();
  } else {
    newFood();
  }
}

export function updateFood() {
  drawFood();
}
