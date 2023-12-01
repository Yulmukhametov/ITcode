document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Create cells dynamically
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
    }

    function handleCellClick(event) {
        const index = event.target.dataset.index;

        if (gameBoard[index] === "") {
            gameBoard[index] = currentPlayer;
            event.target.textContent = currentPlayer;

            if (checkWinner()) {
                alert(`${currentPlayer} wins!`);
                resetGame();
            } else if (gameBoard.every(cell => cell !== "")) {
                alert("It's a draw!");
                resetGame();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";

                if (currentPlayer === "O") {
                    makeComputerMove();
                }
            }
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }

    function resetGame() {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";

        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.textContent = "";
        });
    }

    function makeComputerMove() {
        const bestMove = getOptimalMove();
        gameBoard[bestMove] = currentPlayer;
    
        const cell = document.querySelector(`.cell[data-index="${bestMove}"]`);
        cell.textContent = currentPlayer;
    
        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (gameBoard.every(cell => cell !== "")) {
            alert("It's a draw!");
            resetGame();
        } else {
            currentPlayer = "X";
        }
    }

    function getRandomMove() {
        const availableMoves = gameBoard.reduce((acc, cell, index) => {
            if (cell === "") {
                acc.push(index);
            }
            return acc;
        }, []);

        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    function getOptimalMove() {
        // Проверка, есть ли выигрышный ход
        for (let i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i] === "") {
                gameBoard[i] = "O";
                if (checkWinner()) {
                    gameBoard[i] = ""; // Отмена хода
                    return i;
                }
                gameBoard[i] = ""; // Отмена хода
            }
        }
    
        // Проверка, есть ли необходимость блокировать ход игрока
        for (let i = 0; i < gameBoard.length; i++) {
            if (gameBoard[i] === "") {
                gameBoard[i] = "X";
                if (checkWinner()) {
                    gameBoard[i] = "O"; // Заблокировать ход игрока
                    return i;
                }
                gameBoard[i] = ""; // Отмена хода
            }
        }
    
        // Если нет выигрышных или блокирующих ходов, выбираем случайный ход
        return getRandomMove();
    }
});
