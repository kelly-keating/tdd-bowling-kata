function calculateNeighbours(row, col, board){
  var offset = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
  var count = 0
  //using location
  var neighbours = offset.map(function(coord){
    coord[0] += row
    coord[1] += col
    return coord
  })

  for(var i = 0; i < neighbours.length; i++){
    if(doesExist(neighbours[i], board) && isAlive(neighbours[i], board)){ //could filter and return filter length
      count++
    }
  }
  return count
}

function doesExist(coord, board){
  var x = coord[0]
  var y = coord[1]
  var size = board.length

  if (x < 0 || y < 0) return false
  if (x >= size || y >= size) return false
  return true
}

function isAlive(coord, board){
  return board[coord[0]][coord[1]]
}

// console.log(calculateNeighbours(1,1, [[false,true,false],[false,false,false],[false,false,false]]))

module.exports = calculateNeighbours
