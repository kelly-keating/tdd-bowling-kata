var generateBoard = require('./generateBoard.js')
var getNext = require('./getNextGeneration.js')

function runGame(size){
  //board = make first board
  var board = generateBoard(size)
  // loop through:
  for(var generations = 0; generations < 100; generations++){
    //board = get next board
    board = getNext(board)
    //display result
  }
}

runGame(20)

module.exports = runGame
