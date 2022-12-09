const container = document.querySelector('#container');
const button = document.querySelector('button');


//creates the grid in a square format, based on the boardSize argument
const createGridBlock = (boardSize) => {
    container.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`; 
    for (i = 0; i < boardSize * boardSize; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('block');
        container.append(gridBlock);
    }
}


//initial board, sized 16x16
createGridBlock(16);


//changes the color of blocks that have been hovered
const changeColor = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => (block.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })))
}

changeColor();


//asks user for a new board size, deletes the old board, and generates the new one
button.addEventListener('click', () => {
    const newBoardSize = prompt('Enter number of blocks per side, max 100');
    if (newBoardSize < 100 && newBoardSize > 0) {
        const gridBlock = document.querySelectorAll('.block');
        gridBlock.forEach(block => (container.removeChild(block)))
        createGridBlock(newBoardSize);
        changeColor();
    } else {
        alert('not a valid answer, try again');
    }
})