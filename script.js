const tiles = document.querySelectorAll('.tile');


const Player = (name, mark, isTurn) => {
    return { name, mark, isTurn };
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
        console.log(GameBoard.board)
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
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[1] && GameBoard.board[1] === GameBoard.board[2]) endGame();
        if (GameBoard.board[3] !== '' && GameBoard.board[3] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[5]) endGame();
        if (GameBoard.board[6] !== '' && GameBoard.board[6] === GameBoard.board[7] && GameBoard.board[7] === GameBoard.board[8]) endGame();
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[3] && GameBoard.board[3] === GameBoard.board[6]) endGame();
        if (GameBoard.board[1] !== '' && GameBoard.board[1] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[7]) endGame();
        if (GameBoard.board[2] !== '' && GameBoard.board[2] === GameBoard.board[5] && GameBoard.board[5] === GameBoard.board[8]) endGame();
        if (GameBoard.board[0] !== '' && GameBoard.board[0] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[8]) endGame();
        if (GameBoard.board[2] !== '' && GameBoard.board[2] === GameBoard.board[4] && GameBoard.board[4] === GameBoard.board[6]) endGame();
    }

    const endGame = () => {
        GameBoard.board = ['', '', '', '', '', '', '', '', '']
        UIController.preventFurtherUpdates();
    }

    return { createPlayer };
})()

const UIController = (() => {
    const updateBoard = (e) => {
        if (playerOne.isTurn === true) e.target.innerText = playerOne.mark;
        else if (playerTwo.isTurn === true) e.target.innerText = playerTwo.mark;
    }

    const clearBoard = () => {
        tiles.forEach(tile => {tile.innerText = ''})
    }

    const preventFurtherUpdates = () => {
        playerOne.isTurn = false;
        playerTwo.isTurn = false;
    }
    return { updateBoard, clearBoard, preventFurtherUpdates };
})()

const playerOne = GameController.createPlayer('Player X', 'X', true);
const playerTwo = GameController.createPlayer('Player O', 'O', false);



