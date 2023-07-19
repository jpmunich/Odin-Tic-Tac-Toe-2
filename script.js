const tiles = document.querySelectorAll('.tile');
const gameInfo = document.querySelector('#game-info');
const restartButton = document.querySelector('#restart');

const Player = (name, mark, isTurn, hasWon = false) => {
    return { name, mark, isTurn, hasWon };
}


const GameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    return { board };
})()

const GameController = (() => {
    const createPlayer = (name, mark, isTurn) => {return Player(name, mark, isTurn)}

    tiles.forEach(element => {element.addEventListener('click', (e) => {
        if (e.target.innerText !== '') return;
        UIController.updateBoard(e);
        updateBoard(e);
        updateTurn();
        checkWinner();
    })})

    const updateBoard = (e) => {
        if (playerOne.isTurn === true) GameBoard.board[e.target.getAttribute('data-index')] = playerOne.mark;
        else if (playerTwo.isTurn === true) GameBoard.board[e.target.getAttribute('data-index')] = playerTwo.mark;
    }

    const updateTurn = () => {
        if (playerOne.isTurn === true) {playerOne.isTurn = false; playerTwo.isTurn = true}
        else if (playerTwo.isTurn === true) {playerOne.isTurn = true; playerTwo.isTurn = false}
    }

    const checkWinner = () => {
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[1] && GameBoard.board[1] === GameBoard.board[2]) {
            if(GameBoard.board[0] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[0] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[3] !== '' && GameBoard.board[3] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[5]) {
            if(GameBoard.board[3] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[3] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[6] !== '' && GameBoard.board[6] === GameBoard.board[7] && GameBoard.board[7] === GameBoard.board[8]) {
            if(GameBoard.board[6] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[6] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[3] && GameBoard.board[3] === GameBoard.board[6]) {
            if(GameBoard.board[0] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[0] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[1] !== '' && GameBoard.board[1] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[7]) {
            if(GameBoard.board[1] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[1] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[2] !== '' && GameBoard.board[2] === GameBoard.board[5] && GameBoard.board[5] === GameBoard.board[8]) {
            if(GameBoard.board[2] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[2] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[8]) {
            if(GameBoard.board[0] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[0] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[2] !== '' && GameBoard.board[2] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[6]) {
            if(GameBoard.board[2] === playerOne.mark) {playerOne.hasWon = true; endGame();} 
            else if (GameBoard.board[2] === playerTwo.mark) {playerTwo.hasWon = true; endGame();}
        }
        if (GameBoard.board[0] !== '' && GameBoard.board[1] !== '' && GameBoard.board[2] !== '' && GameBoard.board[3] !== '' && GameBoard.board[4] !== '' && GameBoard.board[5] !== '' && GameBoard.board[6] !== '' && GameBoard.board[7] !== '' && GameBoard.board[8] !== '') {
            if (playerTwo.hasWon === false && playerOne.hasWon === false) {
                endGame();
            }
        }
    }

    const endGame = () => {
        UIController.preventFurtherUpdates();
        if (playerOne.hasWon) gameInfo.innerText = `${playerOne.name} Wins!`;
        if (playerTwo.hasWon) gameInfo.innerText = `${playerTwo.name} Wins!`;
        if (!playerOne.hasWon && !playerTwo.hasWon) gameInfo.innerText = `It's a tie!`;
        restartButton.addEventListener('click', restartGame);
    }

    const restartGame = () => {
        playerOne.hasWon = false;
        playerTwo.hasWon = false;
        gameInfo.innerText = 'Welcome to Tic Tac Toe!';
        GameBoard.board = ['', '', '', '', '', '', '', '', ''];
        UIController.clearBoard();
        UIController.allowUpdates();
        restartButton.removeEventListener('click', restartGame);
    }



    return { createPlayer };
})()

const UIController = (() => {
    const updateBoard = (e) => {
        if (playerOne.isTurn === true) {
            e.target.innerText = playerOne.mark;
            gameInfo.innerText = `${playerTwo.name}'s Turn`;
        } else if (playerTwo.isTurn === true) 
        {
            e.target.innerText = playerTwo.mark;
            gameInfo.innerText = `${playerOne.name}'s Turn`;
        }
    }

    const clearBoard = () => {
        tiles.forEach(tile => {tile.innerText = ''})
    }

    const preventFurtherUpdates = () => {
        playerOne.isTurn = false;
        playerTwo.isTurn = false;
    }

    const allowUpdates = () => {
        playerOne.isTurn = true;
        playerTwo.isTurn = false;
    }
    return { updateBoard, clearBoard, preventFurtherUpdates, allowUpdates };
})()

const playerOne = GameController.createPlayer('Player X', 'X', true);
const playerTwo = GameController.createPlayer('Player O', 'O', false);


