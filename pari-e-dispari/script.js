// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// param: numero massimo 
// return: numero
function genRandom(n) {
  const randomNumber = Math.floor(Math.random() * n) + 1;
  return randomNumber;
}
// param: numero 
// return: boleano
// function isEven(n) {
//   const even = n % 2 === 0;
//   return even
// }

// param: numero
// return: string (pari o dispari)
function isOddOrEven(n) {
  let result;
  if (n % 2 === 0) {
    result = "pari";
  }
  else {
    result = "dispari";
  }
  return result
}

const oddOrEven = prompt("scegli pari o dispari");
const userNumber = prompt("scegli un numero tra 1 e 5");
// poi aggiungere conrtrolli
const comuputerNumber = genRandom(5);
const sum = parseInt(userNumber) + comuputerNumber;
console.log(oddOrEven, userNumber, comuputerNumber, sum);
const result = isOddOrEven(sum);
let winner;
if (result === oddOrEven) {
  winner = "user";
}
else {
  winner = "computer";
}
console.log(`il vincitore è ${winner}`);

