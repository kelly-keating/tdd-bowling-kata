var clear = require ('clear')
var displayBoard = require ('./displayBoard')
var fill = require ('./populateRandomly.js')

function generateBoard(size){
  //create array of defined size
  var board = []
  //for size
  for(var i = size; i > 0; i--){
    //create array
    var row = fill(size)
    //alive/dead using math.random
    board.push(row)
  }
  displayBoard(board)
  return board
}

generateBoard(4)

module.exports = generateBoard
