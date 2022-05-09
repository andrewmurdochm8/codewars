// Codewars 8kyu Return sum of array, if array empty return 0

function sum (numbers) {
    if(numbers.length == 0){
      return 0
    }else{  
      return numbers.reduce((acc, c) => acc + c) 
    }
  };