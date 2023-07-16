const tiles = document.querySelectorAll('.tile');


const Player = (name, mark) => {
    return { name, mark };
}


const GameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    return { board };
})()

const GameController = (() => {
    const createPlayer = (name, mark) => {return Player(name, mark)}

    tiles.forEach(element => {element.addEventListener('click', (e) => {
        updateBoard(e);
    })})

    const updateBoard = (e) => {
        GameBoard.board[e.target.getAttribute('data-index')] = playerOne.mark;
        console.log(GameBoard.board)
    }

    return { createPlayer };
})()
const playerOne = GameController.createPlayer("Player X", "X");


