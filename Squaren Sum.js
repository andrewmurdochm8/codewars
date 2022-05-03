// Codewars 8kyu Square(n) Sum

function squareSum(numbers){
    return numbers.reduce((acc,c) => acc + c **2, 0)
}