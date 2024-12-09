// Funzione che verifica se un numero è pari o dispari
function checkEvenOdd(num: number): string {
  if (num % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

console.log(checkEvenOdd(4)); // "pari"
console.log(checkEvenOdd(7)); // "dispari"
