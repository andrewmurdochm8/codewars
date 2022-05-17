// Codewars 8kyu Sum all positive integers from an array

function positiveSum(arr) {
    if (arr === null || arr.length === 0 ) {
        return 0
      }
      var counter = 0
      arr.forEach(function(a) {
            if (a > 0)
          counter += a
      })
      return counter
  }