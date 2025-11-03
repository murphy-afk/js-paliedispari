
// Bonus:
// Creare una funzione che data una frase restituisce questa frase, capitalizzano tutte le parole
// "pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web" 

const userSring = "pippo studia sviluppo web";

const splitString = userSring.split(" ");
console.log(splitString);
for (i = 0; i < splitString.length; i++) {
  const curWord = splitString[i];
  console.log(curWord);
  const initial = curWord[0];
  console.log(initial);
}