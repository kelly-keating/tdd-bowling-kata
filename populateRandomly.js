function populateRandomly(size){
  var row = []
  while(size > 0){
    row.push(Math.random() < 0.4 ? true : false)
    size--
  }
  return row
}

module.exports = populateRandomly
