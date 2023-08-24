const gameArea = document.querySelector('.game-area');
const numRows = 10;
const numCols = 10;
const numMines = 15;

let minePositions = [];

function generateMines() {
    for (let i = 0; i < numMines; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * numRows);
            col = Math.floor(Math.random() * numCols);
        } while (minePositions.some(pos => pos.row === row && pos.col === col));
        minePositions.push({ row, col });
    }
}

function createCell(row, col) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameArea.appendChild(cell);

    cell.addEventListener('click', () => revealCell(row, col));

    return cell;
}

function revealCell(row, col) {
    const cellIndex = row * numCols + col;
    const cell = gameArea.children[cellIndex];

    if (minePositions.some(pos => pos.row === row && pos.col === col)) {
        cell.textContent = 'X';
        cell.style.backgroundColor = 'red';
        gameOver();
    } else {
        const numNearbyMines = countNearbyMines(row, col);
        cell.textContent = numNearbyMines || '';
        cell.style.backgroundColor = 'lightgray';
        cell.removeEventListener('click', revealCell);
    }
}

function countNearbyMines(row, col) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newRow = row + i;
            const newCol = col + j;
            if (isValidCell(newRow, newCol) && minePositions.some(pos => pos.row === newRow && pos.col === newCol)) {
                count++;
            }
        }
    }
    return count;
}

function isValidCell(row, col) {
    return row >= 0 && row < numRows && col >= 0 && col < numCols;
}

function gameOver() {
    gameArea.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', revealCell));
    alert('Game Over! Clique em Recarregar para jogar novamente.');
}

generateMines();

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        createCell(row, col);
    }
}
