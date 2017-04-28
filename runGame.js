var generateBoard = require('./generateBoard.js')
var getNext = require('./getNextGeneration.js')

function runGame(size){
  generateBoard(size)

  var interval = setInterval(function (){
    generateBoard(size)
  }, 200)

  setTimeout(function() {
    clearInterval(interval)
  }, 30000)
}

runGame(20)

module.exports = runGame
