
let div = document.querySelectorAll('div')

div.forEach(a => a.addEventListener('click', placeIcon)) 

let turn = 'player1'

let board = new Array(9)

function placeIcon(event) {

    if ((turn == 'player1') && (event.currentTarget.innerHTML == '') ){
      event.currentTarget.innerHTML = 'X'
      board[Number(event.currentTarget.id)] = 'X'
      turn = 'player2'
    } else if (turn == 'player2' && event.currentTarget.innerHTML == '' ) {
      event.currentTarget.innerHTML = 'O'
      board[Number(event.currentTarget.id)] = 'O'
      turn = 'player1'
    }
    checkWin(board)
}

function checkWin(array) {
    if(array[0] == 'X' && array[1] == 'X' && array[2] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[0] == 'O' && array[1] == 'O' && array[2] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[3] == 'X' && array[4] == 'X' && array[5] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[3] == 'O' && array[4] == 'O' && array[5] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[6] == 'X' && array[7] == 'X' && array[8] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[6] == 'O' && array[7] == 'O' && array[8] == 'O')) {
        alert('Player 2 Wins!')
    }  else if(array[0] == 'X' && array[3] == 'X' && array[6] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[0] == 'O' && array[3] == 'O' && array[6] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[1] == 'X' && array[4] == 'X' && array[7] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[1] == 'O' && array[4] == 'O' && array[7] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[2] == 'X' && array[5] == 'X' && array[8] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[2] == 'O' && array[5] == 'O' && array[8] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[0] == 'X' && array[4] == 'X' && array[8] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[0] == 'O' && array[4] == 'O' && array[8] == 'O')) {
        alert('Player 2 Wins!')
    } else if(array[2] == 'X' && array[4] == 'X' && array[6] == 'X'  ) {
        alert('Player 1 Wins!')
    } else if ((array[2] == 'O' && array[4] == 'O' && array[6] == 'O')) {
        alert('Player 2 Wins!')
    }
}



