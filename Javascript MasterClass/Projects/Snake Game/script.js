// ===============================
// Selecting Elements
// ===============================

const board = document.getElementById("board");

const score = document.getElementById("score");
const highScore = document.getElementById("high-score");
const timer = document.getElementById("timer");

let bestScore = Number(localStorage.getItem("highScore")) || 0;
let seconds = 0;
let speed = 200;

highScore.textContent = bestScore;

// ===============================
// Constants
// ===============================

const CELL_SIZE = 30;

// ===============================
// Calculate Rows and Columns
// ===============================

const rows = Math.floor(board.clientHeight / CELL_SIZE);
const cols = Math.floor(board.clientWidth / CELL_SIZE);

// ===============================
// Create Cells
// ===============================

const cells = [];

for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

        const cell = document.createElement("div");

        cell.classList.add("cell");

        board.appendChild(cell);

        cells.push(cell);

    }

}

// ===============================
// Game Variables
// ===============================

let snake = [

    "10,10",
    "10,9",
    "10,8"

];

let direction = "RIGHT";

let currentScore = 0;

let food = "";

// ===============================
// Helper Functions
// ===============================

function getPosition(position){

    const [row,col] = position.split(",");

    return{

        row:Number(row),
        col:Number(col)

    };

}

function getIndex(row,col){

    return row * cols + col;

}

// ===============================
// Drawing Functions
// ===============================

function clearBoard(){

    for(const cell of cells){

        cell.style.background="";

        cell.style.borderRadius="0";

    }

}

setInterval(function(){

    seconds++;

    timer.textContent = seconds;

},1000);

function drawFood(){

    if(food === "") return;

    const {row,col} = getPosition(food);

    const index = getIndex(row,col);

    cells[index].style.background = "crimson";

    cells[index].style.borderRadius = "50%";

}

function render(){

    clearBoard();

    drawSnake();

    drawFood();

}

function drawSnake(){

    for(let i=0;i<snake.length;i++){

        const {row,col}=getPosition(snake[i]);

        const index=getIndex(row,col);

        if(i===0){

            cells[index].style.background="darkgreen";

        }
        else{

            cells[index].style.background="lime";

        }

    }

}

// ===============================
// Food
// ===============================

function generateFood(){

    let row;
    let col;

    do{

        row = Math.floor(Math.random() * rows);

        col = Math.floor(Math.random() * cols);

        food = `${row},${col}`;

    }while(snake.includes(food));

}

// ===============================
// Controls
// ===============================

document.addEventListener("keydown", changeDirection);

function changeDirection(event){

    if(event.key === "ArrowUp" && direction !== "DOWN"){

        direction = "UP";

    }

    else if(event.key === "ArrowDown" && direction !== "UP"){

        direction = "DOWN";

    }

    else if(event.key === "ArrowLeft" && direction !== "RIGHT"){

        direction = "LEFT";

    }

    else if(event.key === "ArrowRight" && direction !== "LEFT"){

        direction = "RIGHT";

    }

}

// ===============================
// Snake Movement
// ===============================

function moveSnake(){

    const head = snake[0];

    let {row,col} = getPosition(head);

    if(direction === "UP"){

        row--;

    }

    else if(direction === "DOWN"){

        row++;

    }

    else if(direction === "LEFT"){

        col--;

    }

    else if(direction === "RIGHT"){

        col++;

    }

    // Wall Collision

    if(row < 0 || row >= rows || col < 0 || col >= cols){

        clearInterval(game);

        alert("Game Over");

        return false;

    }

    const newHead = `${row},${col}`;

    if(snake.slice(0,-1).includes(newHead)){

        clearInterval(game);

        alert("Game Over");

        return;

    }  

    snake.unshift(newHead);

    // Food Check

    if(newHead === food){

        currentScore++;

        if(speed > 60){

            speed -= 5;

            clearInterval(game);

            game = setInterval(gameLoop,speed);

        }

        if(currentScore > bestScore){

            bestScore = currentScore;

            highScore.textContent = bestScore;

            localStorage.setItem("highScore",bestScore);

        }

        score.textContent = currentScore;

        generateFood();

    }

    else{

        snake.pop();

    }

    return true;

}

// ===============================
// Game Loop
// ===============================

function gameLoop(){

    if(moveSnake()){

        render();

    }

}

// ===============================
// Debug
// ===============================

console.log("Rows :", rows);
console.log("Cols :", cols);
console.log("Total Cells :", cells.length);

// ===============================
// Start Game
// ===============================

generateFood();

render();

let game = setInterval(gameLoop,speed);

window.focus();
