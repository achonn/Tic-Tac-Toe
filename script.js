const GameBoard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = function() {
        return board;
    };

    const updateBoard = function(index, marker) {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        else return false;
    };

    const resetBoard = function() {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return {getBoard, updateBoard, resetBoard};
})();


const Player = function(name,marker) {
    return {name,marker};
};



const board = document.querySelector('#board');
const cells = document.querySelectorAll('.cell');
let isXTurn = true;

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