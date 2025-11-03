// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)

// posso fare due for che scorrono contemporaneamente in direzioni opposte e controllano
// che le lettere siano uguali  => NOPE

function isPalindrome(word) {
let length = word.length;
let result = false;
for (let i = 0; i <= length; i++) {
if (word[i] === word[length]) {
  result = true;
}
  length--;
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


