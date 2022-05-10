// Codewars 8kyu Friend or Foe (return all 4 letter strings from array)

function friend(friends){
    const result = friends.filter(word => word.length === 4)
    return result
  }