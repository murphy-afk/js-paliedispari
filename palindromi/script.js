// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)

// OTTIMIZZAZIONE:
// (fatta con Sam)
function isPalindrome(word) {
  let nonPalindromo = false;
  for (let i = 0; i < (word.length / 2); i++){
    if (word[i] !== word[word.length - 1 - i]) { 
      nonPalindromo = true;
    }
  }

  return !nonPalindromo;
  /*
  let length = word.length;
  let result = false;
  for (let i = 0, j = length - 1; i < length; i++, j--) {
    if (word[i] === word[j]) {
      result = true;
    }
    else {
      result = false;
      break
    }
  }
  return result
  */
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
