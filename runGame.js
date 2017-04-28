var generateBoard = require('./generateBoard.js')
var getNext = require('./getNextGeneration.js')

function runGame(size){
  var board = generateBoard(size)

  var interval = setInterval(getNext, 200)

  setTimeout(function() {
    clearInterval(interval)
  }, 30000)
}


runGame(20)

module.exports = runGame
