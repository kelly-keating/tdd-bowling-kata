var clear = require ('clear')

function displayBoard(board){
  //clear terminal
  clear()
  var size = board.length
  //for every row
  for(var row = 0; row < size; row++){
      var line = ""
    //for each in column
    for(var col = 0; col < size; col++){
      var isAlive = board[row][col]
      isAlive ? line += "0" : line += "_"
    }
    console.log(line)
  }
}

module.exports = displayBoard
