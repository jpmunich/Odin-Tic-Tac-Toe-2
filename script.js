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
        updateBoard(e);
        UIController.updateBoard(e);
        updateTurn();
    })})

    const updateBoard = (e) => {
        if (playerOne.isTurn === true) GameBoard.board[e.target.getAttribute('data-index')] = playerOne.mark;
        else if (playerTwo.isTurn === true) GameBoard.board[e.target.getAttribute('data-index')] = playerTwo.mark;
    }

    const updateTurn = () => {
        if (playerOne.isTurn === true) {playerOne.isTurn = false; playerTwo.isTurn = true}
        else if (playerTwo.isTurn === true) {playerOne.isTurn = true; playerTwo.isTurn = false}
    }

    return { createPlayer };
})()

const UIController = (() => {
    const updateBoard = (e) => {
        if (playerOne.isTurn === true) e.target.innerText = playerOne.mark;
        else if (playerTwo.isTurn === true) e.target.innerText = playerTwo.mark;
    }

    return { updateBoard };
})()

const playerOne = GameController.createPlayer('Player X', 'X', true);
const playerTwo = GameController.createPlayer('Player O', 'O', false);



