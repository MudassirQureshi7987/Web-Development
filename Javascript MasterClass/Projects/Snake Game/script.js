// ===============================
// Selecting Elements
// ===============================

const board = document.getElementById("board");

const score = document.getElementById("score");
const highScore = document.getElementById("high-score");
const timer = document.getElementById("timer");


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
// 1D Array to Store Cells
// ===============================

const cells = [];


// ===============================
// Create Board
// ===============================

for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {

        const cell = document.createElement("div");

        cell.classList.add("cell");

        board.appendChild(cell);

        cells.push(cell);

    }

}


// ===============================
// Snake
// ===============================

let snake = [

    "10,10",
    "10,9",
    "10,8"

];


// ===============================
// Helper Functions
// ===============================

// Convert "row,col" into row and col

function getPosition(position) {

    const [row, col] = position.split(",");

    return {

        row: Number(row),
        col: Number(col)

    };

}


// Convert row,col into index of cells[]

function getIndex(row, col) {

    return row * cols + col;

}


// ===============================
// Drawing Functions
// ===============================

// Remove all colors from board

function clearBoard() {

    for (const cell of cells) {

        cell.style.background = "";

    }

}


// Draw Snake

function drawSnake() {

    clearBoard();

    for (const part of snake) {

        const { row, col } = getPosition(part);

        const index = getIndex(row, col);

        cells[index].style.background = "lime";

    }

}


// ===============================
// Start Game
// ===============================

drawSnake();


// ===============================
// Debug
// ===============================

console.log("Rows :", rows);
console.log("Cols :", cols);
console.log("Total Cells :", cells.length);