
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

// 000   000
// 000   000
// 000   000

test('can get next for empty board', function(t){
  var board = [[false,false,false],[false,false,false],[false,false,false]]
  var expected = [[false,false,false],[false,false,false],[false,false,false]]

  var result = getNext(board)

  t.deepEqual(result, expected, 'can deal with empty board')
  t.end()
})

// 111   101   000
// 111   000   000
// 111   101   000

test('can get next for full board', function(t){
  var board = [[true,true,true],[true,true,true],[true,true,true]]
  var stepExpected = [[true, false, true],[false, false, false],[true, false, true]]
  var endExpected = [[false,false,false],[false,false,false],[false,false,false]]

  var stepResult = getNext(board)
  var endResult = getNext(stepResult)

  t.deepEqual(stepResult, stepExpected, 'full board dies a bit')
  t.deepEqual(endResult, endExpected, 'full becomes empty')
  t.end()
})

// 010   010
// 101   101
// 010   010

test('can get next for static board', function(t){
  var board = [[false,true,false],[true,false,true],[false,true,false]]
  var expected = board

  var result = getNext(board)

  t.deepEqual(result, expected, 'board locked in pattern')
  t.end()
})

// 010   010   000
// 101   010   000
// 000   000   000

test('can get next for some board', function(t){
  var board = [[false,true,false],[true,false,true],[false,false,false]]
  var stepExpected = [[false,true,false],[false,true,false],[false, false, false]]
  var endExpected = [[false,false,false],[false,false,false],[false,false,false]]

  var stepResult = getNext(board)
  var endResult = getNext(stepResult)

  t.deepEqual(stepResult, stepExpected, 'board changes some')
  t.deepEqual(endResult, endExpected, 'all die as result')
  t.end()
})

// 010   000   010
// 010   111   010
// 010   000   010

test('can get next for spin pattern board', function(t){
  var board = [[false,true,false],[false,true,false],[false,true,false]]
  var stepExpected = [[false,false,false],[true,true,true],[false, false, false]]
  var endExpected = board

  var stepResult = getNext(board)
  var endResult = getNext(stepResult)

  t.deepEqual(stepResult, stepExpected, 'spins onto side')
  t.deepEqual(endResult, endExpected, 'returns to orig after spin')
  t.end()
})

// 000   000
// 011   011
// 011   011

test('can get next for square pattern board', function(t){
  var board = [[false,false,false],[false,true,true],[false,true,true]]
  var expected = board

  var result = getNext(board)

  t.deepEqual(result, expected, '2x2 square doesn\'t change')
  t.end()
})
