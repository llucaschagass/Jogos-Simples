const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameOver = false;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
];

function checkWinner(player) {
    for (let combo of winningCombos) {
        if (
            cells[combo[0]].textContent === player &&
            cells[combo[1]].textContent === player &&
            cells[combo[2]].textContent === player
        ) {
            return true;
        }
    }
    return false;
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = currentPlayer;

            if (checkWinner(currentPlayer)) {
                gameOver = true;
                alert(`Parabéns! O jogador de ${currentPlayer} ganhou!`);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

