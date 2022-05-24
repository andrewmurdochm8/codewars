// Codewars 8kyu Counting Sheep (sum number of 'true' values in an array)

function countSheeps(arrayOfSheep) {
    if (arrayOfSheep === null || arrayOfSheep.length === 0 ) {
        return [];
        }
      var counter = 0
      arrayOfSheep.forEach(function(a) {
            if (a === true)
          counter += a
  })
        return counter
  }