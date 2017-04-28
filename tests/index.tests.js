
var test = require('tape')
var runGame = require('../runGame')
var generate = require('../generateBoard')
var display = require('../displayBoard')
var getNext = require('../getNextGeneration')
var calculateNeighbours = require('../calculateNeighbours')

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('can generate a board of appropriate size', function(t){
  var expected = 3
  var newBoard = generate(3)
  var firstRow = newBoard[0]
  var secondRow = newBoard[1]
  var thirdRow = newBoard[2]

  t.equal(newBoard.length, expected, 'generates a board of expected height')
  t.equal(firstRow.length, expected, 'generates a board of expected width')
  t.true(secondRow.length == expected && thirdRow.length == expected, 'all rows match')
  t.end()
})
