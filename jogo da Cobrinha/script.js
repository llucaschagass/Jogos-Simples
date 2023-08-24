const gameArea = document.querySelector('.game-area');
const snake = document.querySelector('.snake');
const food = document.querySelector('.food');

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let snakeSpeed = 20; // Pixels per move
let directionX = 1;
let directionY = 0;
let snakeLength = 1; // Inicialmente, o comprimento da cobra é 1

function updateSnakePosition() {
    snakeX += directionX * snakeSpeed;
    snakeY += directionY * snakeSpeed;

    if (snakeX < 0) snakeX = gameArea.clientWidth - snakeSpeed;
    if (snakeX >= gameArea.clientWidth) snakeX = 0;
    if (snakeY < 0) snakeY = gameArea.clientHeight - snakeSpeed;
    if (snakeY >= gameArea.clientHeight) snakeY = 0;

    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
}

function generateFoodPosition() {
    foodX = Math.floor(Math.random() * (gameArea.clientWidth / snakeSpeed)) * snakeSpeed;
    foodY = Math.floor(Math.random() * (gameArea.clientHeight / snakeSpeed)) * snakeSpeed;

    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

generateFoodPosition();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        directionX = 0;
        directionY = -1;
    } else if (event.key === 'ArrowDown') {
        directionX = 0;
        directionY = 1;
    } else if (event.key === 'ArrowLeft') {
        directionX = -1;
        directionY = 0;
    } else if (event.key === 'ArrowRight') {
        directionX = 1;
        directionY = 0;
    }
});

setInterval(() => {
    updateSnakePosition();

    if (snakeX === foodX && snakeY === foodY) {
        snakeLength++; // Incrementa o comprimento da cobra
        generateFoodPosition();
    }
}, 200); // Intervalo ajustado para 200 milissegundos (movimento mais lento)

