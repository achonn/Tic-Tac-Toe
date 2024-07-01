const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let isXTurn = true;
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winConditions = [
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


function resetGame() {
    winningMessageElement.classList.remove('show');
    overlay.classList.remove('overlay-show');
    isXTurn = true;
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('circle');
    })
    startGame();
}

function startGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true});

        cell.addEventListener('mouseenter', function() {
            if (!cell.classList.contains('x') && !cell.classList.contains('circle')) {
                cell.classList.add(isXTurn ? 'hover-x' : 'hover-circle');
            }
        });

        cell.addEventListener('mouseleave', () => {
            cell.classList.remove('hover-x');
            cell.classList.remove('hover-circle');
        })
    })
}

function handleClick(e) {
    const cell = e.target;
    let currentClass = isXTurn ? 'x' : 'circle';

    placeMark(cell, currentClass);

    if (checkwin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true);
    } else swapTurns();
    
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
    cell.style.animation = 'fadeIn .5s ease-in';
}

function swapTurns() {
    isXTurn = !isXTurn;
}

function checkwin(currentClass) {
    return winConditions.some(condition => {
        return condition.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'DRAW!';
    } else {
        winningMessageTextElement.innerText = `${isXTurn ? "X's" : "O's"} Wins`;
    }
    winningMessageElement.classList.add('show');
    overlay.classList.add('overlay-show');
    winningMessageElement.style.animation = 'fadeIn .5s ease-in';
}

function isDraw() {
    return Array.from(cells).every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('circle');
    })
}

document.addEventListener('DOMContentLoaded', resetGame);


const playGame = document.getElementById('playGame');
const startMenu = document.querySelector('.start-menu');
const overlay = document.querySelector('.overlay')

playGame.addEventListener('click', function() {
    board.classList.add('visible');
    startMenu.style.display = 'none';
});

restartButton.addEventListener('click', resetGame);