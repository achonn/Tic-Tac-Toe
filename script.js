const Gameboard = (function() {
    let board = ["", "", "", "", "", "", "", "", "",];

    const getBoard = () => board;

    const resetBoard = function() {
        board = ["", "", "", "", "", "", "", "", "",];
    }

    return {getBoard, resetBoard};
})();


const Player = function(name,marker) {
    return {name,marker};
}


const GameController = function() {
    const players = [Player('player 1', 'x'), Player('player 2', 'circle')];
    let currentPlayerIndex = 0;
    let isGameOver = false;

    const getCurrentPlayer = players[currentPlayerIndex];
    const switchPlayer = currentPlayerIndex ? 1 : 0;

    const checkWin = function() {
        const board = Gameboard.getBoard();
        const winningCondition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

       winningCondition.some(condition => {
        return condition.every(index => {
            cells[index].classList.contains(currentClass);
        })
       })
        
    }
}


const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
let isXTurn = true;
const currentClass = isXTurn ? 'x' : 'circle';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('circle')) {
            cell.classList.add(isXTurn ? 'x' : 'circle');
            isXTurn = !isXTurn;
        }
    })


    cell.addEventListener('mouseenter', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('circle')) {
            cell.classList.add(isXTurn ? 'hover-x' : 'hover-circle');
        }
    })


    cell.addEventListener('mouseleave', () => {
        cell.classList.remove('hover-x');
        cell.classList.remove('hover-circle');
    })
});

function checkWin(currentClass) {
    return a.winningCondition.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    })
}