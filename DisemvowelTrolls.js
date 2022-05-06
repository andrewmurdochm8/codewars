// Codewars 7kyu Disemvowel the Trolls - return a string with all vowels removed

function disemvowel(str) {
    const noVowels = str.replace(/[aeiou]/gi, '')
    return noVowels;
  }