// Codewars 7kyu Complementary DNA (replacing all letters within a string with their complementary (pair) letter)

function DNAStrand(dna){
    // Create list of replacement letters    
    let letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    // Create array to return complementary results to
    let arr = [];
    // Loop through original string letter by letter, then replace using the replacement letters list. Finally return the joined replacement letters.
    for (let i=0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }
    return arr.join('');
}