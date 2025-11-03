// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)

// posso fare due for che scorrono contemporaneamente in direzioni opposte e controllano
// che le lettere siano uguali  => NOPE

const word = "anna";
console.log(word);

let length = word.length;
// for (let i = 0; i < length; i++) {
//   const left = word[i];
//   console.log(left);
// }
// for (let j = length; j >= 0; j--) {
//     const right = word[j];
//     console.log(right);
//   }
let isPalindrome = false;
for (let i = 0; i <= length; i++) {
if (word[i] === word[length]) {
  isPalindrome = true;
}
  length--;
}
if (isPalindrome === true) {
  console.log("è palindroma");
}
else {
  console.log("non è palindroma");
}

