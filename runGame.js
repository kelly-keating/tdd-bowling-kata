var generateBoard = require('./generateBoard.js')

function runGame(size){
  //board = make first board
  var board = generateBoard(size)
  // loop through:
  for(var generations = 0; generations < 100; generations++){
    //board = generate next board
    board = generateBoard(size)
    //display result
  }
}

runGame(20)

module.exports = runGame
