// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)

function isPalindrome(word) {
  let length = word.length;
  let result = false;
  let j = length - 1;
  for (let i = 0; i < length; i++) {
    if (word[i] === word[j]) {
      result = true;
    }
    else {
      result = false;
      break
    }
    j = j - 1;
  }
  return result
}

const userWord = prompt("Inserisci una parola è ti dirò se è palindroma");
console.log(userWord);
const answer = isPalindrome(userWord);
if (answer === true) {
  console.log("La parola è palindroma");
}
else {
  console.log("La parola non è palindroma");
}


