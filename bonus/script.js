
// Bonus:
// Creare una funzione che data una frase restituisce questa frase, capitalizzano tutte le parole
// "pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web" 

// const userSring = "pippo studia sviluppo web";
function capitalizeEach(userSring) {
  const splitString = userSring.split(" ");
  // console.log(splitString);
  const capitalizedArray = [];
  for (i = 0; i < splitString.length; i++) {
    const curWord = splitString[i];
    // console.log(curWord);
    const initial = curWord[0];
    // console.log(initial);
    const capitalizedInitial = initial.toUpperCase();
    const restOfWord = curWord.slice(1).toLowerCase();
    const capitalizedWord = capitalizedInitial + restOfWord;
    // console.log(capitalizedWord);
    capitalizedArray.push(capitalizedWord);
  }
  // console.log(capitalizedArray);
  const result = capitalizedArray.join(" ");
  return result
}
const sentence = prompt("inserisci una frase")
const capitalizedSentence = capitalizeEach(sentence)
console.log(capitalizedSentence);
