// Codewars 7kyu Categorize new members (Using data pairs from an array to determine senior or open membership)

function openOrSenior(data){
    function memberLevel(member) {
      return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open'
    }
    return data.map(memberLevel)
}