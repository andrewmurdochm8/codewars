// Codewars 7kyu Get middle character(s)

function getMiddle(s){
  
    let position;
    let length;
  
    if(s.length % 2 == 1) {
      position = s.length / 2;
      length = 1;
    } else {
      position = s.length / 2 - 1;
      length = 2;
  }
  
  result = s.substring(position, position + length)
      return result
  }
  