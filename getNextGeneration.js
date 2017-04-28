var numOfNeighbours = require('./calculateNeighbours.js')

function getNextGeneration(board){
  var size = board.length
  //get current board
  //make new board
  var nextBoard = []
  //run through
  for(var row = 0; row < size; row++){
    nextBoard.push([])
    for(col = 0; col < size; col++){
      //see how many neighbours
      var neighbours = numOfNeighbours(row, col, board)
      //push true/false as result
      if (neighbours > 3 || neighbours <2) nextBoard[row].push(false)
      else if (neighbours == 3) nextBoard[row].push(true)
      else nextBoard.push(board[row][col])
    }
  }
  //return result
  return nextBoard
}

function isAlive(num){
  if(num > 3 || num < 2) return
}

module.exports = getNextGeneration
