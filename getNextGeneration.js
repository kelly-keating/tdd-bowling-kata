var numOfNeighboursAlive = require('./calculateNeighbours.js')

function getNextGeneration(board){
  var size = board.length
  var nextBoard = [...board] //new is copy of board

  for(var row = 0; row < size; row++){
    for(col = 0; col < size; col++){

      var neighbours = numOfNeighboursAlive(row, col, board)

      if (neighbours > 3 || neighbours <2) nextBoard[row][col] = false
      else if (neighbours == 3) nextBoard[row][col] = true
      else nextBoard[row][col] = board[row][col]
    }
  }
  return nextBoard
}

// function isAlive(num){
//   if(num > 3 || num < 2) return
// }

module.exports = getNextGeneration
