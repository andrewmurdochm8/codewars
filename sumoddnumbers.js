// Codewars 7kyu Sum of odd numbers (from a triangle of consequitive odd numbers)

function rowSumOddNumbers(n) {
	//  1 == 1, 2 == 8, 3 == 27, 4 == 64, 5 == 125, 
  
  let numbersBefore = (n - 1) * n / 2;        // So 1 == 0, 2 == 1, 3 == 3, 4 == 6, 5 == 10 etc

  let firstNumber = numbersBefore * 2 + 1;
  let lastNumber = firstNumber + 2 * (n - 1);

  return n * (firstNumber + lastNumber) / 2;
}