// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// param: numero massimo 
function genRandom(n) {
  const randomNumber = Math.floor(Math.random() * n) + 1;
  return randomNumber;
}


const oddOrEven = prompt("scegli pari o dispari");
const userNumber = prompt("scegli un numero tra 1 e 5")
// poi aggiungere conrtrolli
const comuputerNumber = genRandom(5);
