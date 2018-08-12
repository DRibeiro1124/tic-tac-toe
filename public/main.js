const positionX = []
const positionO = []
winningCombos = [[1, 2, 3][4, 5, 6][7, 8, 9][1, 4, 7][2, 5, 8][3, 6, 9][1, 5, 9][3, 5, 7]]




function startGame() {
  document.turn = 'X'
  setMessage(document.turn + ' gets to start')
}

function setMessage(msg) {
  document.getElementById('message').innerText = msg
}

function nextMove(square) {
  if (square.innerText == '') {
    square.innerText = document.turn
    switchTurn()
  } else {
    setMessage('Select another square')
  }
}

function switchTurn() {
  if(document.turn == 'X') {
    document.turn = 'O'
  } else {
    document.turn = 'X'
  }
  setMessage("It's " + document.turn + "'s turn" )
}

const winFunction = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    if ((positionX.includes(winningCombos[i][0])) && 
        (positionX.includes(winningCombos[i][1])) && 
        (positionX.includes(winningCombos[i][2]))) {
      console.log('Player X wins!')
      break
    }
    else {
      console.log('nope')
    }
  }
  for (let j = 0; j < winningCombos.length; j++) {
    if ((positionO.includes(winningCombos[j][0])) && 
        (positionO.includes(winningCombos[j][1])) && 
        (positionO.includes(winningCombos[j][2]))) {
      console.log('Player O wins!')
      break
    }
    else {
      console.log('nope')
    }
  }
}

winFunction()