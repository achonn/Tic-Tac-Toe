const GameBoard = (() => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');

    const getBoard = () => board;

    const clear = () => {
        cells.forEach(cell => {
            cell.classList.remove('x', 'circle', 'hover-x', 'hover-circle');
        });
    };

    const markCell = (cell, currentClass) => {
        cell.classList.add(currentClass);
        cell.style.animation = 'fadeIn .5s ease-in';
    };

    const addHoverEffect = (cell, isXTurn) => {
        if (!cell.classList.contains('x') && !cell.classList.contains('circle')) {
            cell.classList.add(isXTurn ? 'hover-x' : 'hover-circle');
        }
    };

    const removeHoverEffect = (cell) => {
        cell.classList.remove('hover-x', 'hover-circle');
    };

    const bindCellClick = (handleClick) => {
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
            cell.addEventListener('click', handleClick, { once: true });
        });
    };

    const bindCellHover = (handleMouseEnter, handleMouseLeave) => {
        cells.forEach(cell => {
            cell.addEventListener('mouseenter', handleMouseEnter);
            cell.addEventListener('mouseleave', handleMouseLeave);
        });
    };

    return {
        getBoard,
        clear,
        markCell,
        addHoverEffect,
        removeHoverEffect,
        bindCellClick,
        bindCellHover
    };
})();



const DisplayController = (() => {
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
    const winningMessageElement = document.getElementById('winningMessage');
    const playGameButton = document.getElementById('playGame');
    const startMenu = document.querySelector('.start-menu');
    const overlay = document.querySelector('.overlay');
    const restartButton = document.getElementById('restartButton');

    const showWinningMessage = (message) => {
        winningMessageTextElement.innerText = message;
        winningMessageElement.classList.add('show');
        overlay.classList.add('overlay-show');
        winningMessageElement.style.animation = 'fadeIn .5s ease-in';
    };

    const hideWinningMessage = () => {
        winningMessageElement.classList.remove('show');
        overlay.classList.remove('overlay-show');
    };

    const showBoard = () => {
        const board = GameBoard.board();
        board.classList.add('visible');
        startMenu.style.display = 'none';
    };

    const bindPlayGameButton = (callback) => {
        playGameButton.addEventListener('click', callback);
    };

    const bindRestartButton = (callback) => {
        restartButton.addEventListener('click', callback);
    };

    return {
        showWinningMessage,
        hideWinningMessage,
        showBoard,
        bindPlayGameButton,
        bindRestartButton
    };
})();



const GameController = (() => {
    let isXTurn = true;

    const start = () => {
        DisplayController.bindPlayGameButton(DisplayController.showBoard);
        DisplayController.bindRestartButton(reset);
        reset();
    };

    const reset = () => {
        isXTurn = true;
        DisplayController.hideWinningMessage();
        GameBoard.clear();
        GameBoard.bindCellClick(handleClick);
        GameBoard.bindCellHover(handleMouseEnter, handleMouseLeave);
    };

    const handleClick = (e) => {
        const cell = e.target;
        const currentClass = isXTurn ? 'x' : 'circle';
        
        GameBoard.markCell(cell, currentClass);
        
        if (checkWin(currentClass)) {
            DisplayController.showWinningMessage(`${isXTurn ? "X's" : "O's"} Wins`);
        } else if (isDraw()) {
            DisplayController.showWinningMessage('DRAW!');
        } else {
            swapTurns();
        }
    };

    const handleMouseEnter = (e) => {
        GameBoard.addHoverEffect(e.target, isXTurn);
    };

    const handleMouseLeave = (e) => {
        GameBoard.removeHoverEffect(e.target);
    };

    const swapTurns = () => {
        isXTurn = !isXTurn;
    };

    const checkWin = (currentClass) => {
        const cells = document.querySelectorAll('.cell');
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5], 
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winConditions.some(condition => {
            return condition.every(index => {
                return cells[index].classList.contains(currentClass);
            });
        });
    };

    const isDraw = () => {
        const cells = document.querySelectorAll('.cell');
        return Array.from(cells).every(cell => {
            return cell.classList.contains('x') || cell.classList.contains('circle');
        });
    };

    return {
        start
    };
})();



// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    GameController.start();
})