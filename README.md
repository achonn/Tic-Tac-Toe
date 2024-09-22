# Tic-Tac-Toe

A tic tac toe game made using HTML, CSS, and Javascript. The app uses a clean and simple UI, and has support for two players.

<h2> Outcome </h2>

<img width="1680" alt="Screenshot 2024-07-01 at 4 28 20 PM" src="https://github.com/achonn/Tic-Tac-Toe/assets/169646964/655d33f6-6c5b-4b6a-9a6d-0c33f578a806">

<h2> Links </h2>

<li> Link to live demo: https://achonn.github.io/Tic-Tac-Toe/ </li>

<h2> Concepts Applied </h2>

<li> Utilized keyframes to create unique animations </li>
<li> Applied Closures to this project </li>
<li> Applied Module Patterns to this project </li>
<li> Applied Factory Functions to this project  </li>
<li> Applied IIFEs to this project </li>

<h2> How did I complete this project? </h2>

This project implements a simple Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game is split into three main modules for managing different aspects:

### 1. Game Board (`gameBoard.js`)

The **Game Board** module handles the creation and management of the game board HTML structure (`board`) and individual cells (`cells`). Here's what it does:

- **Initialization**: Sets up the game board and initializes event listeners for cell clicks and hover effects.
- **Cell Operations**: Provides functions to mark cells with X or O, clear the board, and manage hover effects.
- **Event Binding**: Binds click and hover events to the cells.

### 2. Display Controller (`displayController.js`)

The **Display Controller** module manages the user interface and display elements of the game. Here's what it does:

- **Winning Messages**: Displays winning messages (`showWinningMessage`, `hideWinningMessage`) with animations.
- **Game Visibility**: Controls the visibility of the game board and start menu (`showBoard`).
- **Button Binding**: Binds actions to play and restart buttons (`bindPlayGameButton`, `bindRestartButton`).

### 3. Game Controller (`gameController.js`)

The **Game Controller** module handles the game logic and state management. Here's what it does:

- **Game Initialization**: Starts the game, binds buttons to display actions, and initializes the game board.
- **Game Logic**: Manages turns, checks for wins (`checkWin`), determines draws (`isDraw`), and handles click and hover events.
- **State Management**: Tracks whose turn it is (`isXTurn`) and resets the game state.

### How to Use

1. **Setup**: Include `gameBoard.js`, `displayController.js`, and `gameController.js` in your HTML file. Ensure CSS styles from `styles.css` are applied.
2. **Start Game**: Click "Play Game" to begin.
3. **Gameplay**: Click on cells to place your mark (X or O). The game will display winning messages or declare a draw when appropriate.
4. **Restart**: Click "Restart" to reset the game and start again.











