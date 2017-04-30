
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

test('can calculate the number of neighbours correctly', function(t){
  var board1 = [[false,true,false],[false,false,false],[false,false,false]]
  var board2 = [[false,true,false],[true,true,false],[false,true,true]]

  var calc1 = calculateNeighbours(1, 1, board1)
  var calc2 = calculateNeighbours(1, 1, board2)

  t.equal(calc1, 1, 'can count one neighbour of a central spot')
  t.equal(calc2, 4, 'can count multiple neighbours of a central spot')
  t.end()
})

test('can calculate the number of neighbours at an edge correctly', function(t){
  var board = [[false,true,false],[true,true,false],[false,true,true]]

  var calc1 = calculateNeighbours(0, 0, board)
  var calc2 = calculateNeighbours(2, 2, board)
  var calc3 = calculateNeighbours(1, 2, board)

  t.equal(calc1, 3, 'can count neighbours of top left coord')
  t.equal(calc2, 2, 'can count neighbours of bottom right coord')
  t.equal(calc2, 4, 'can count neighbours of middle right coord')
  t.end()
})
