// Codewars 8kyu Count positives and sum negatives

function countPositivesSumNegatives(input) {
  
    if (input === null || input.length === 0 ) {
      return [];
      }
    var counter = [0, 0]
    input.forEach(function(a) {
          if (a > 0)
        counter[0]++
      else if (a < 0)
        counter[1] += a
        })
    return counter
}