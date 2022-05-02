// Codewars 8kyu DNA to RNA conversion

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = dna.replace(/T/g, "U")
    return rna
  }