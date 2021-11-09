let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//1
console.log("1 - " + numbers);
//2
console.log(
  "2 - " +
    numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]
);
//3
const media =
  (numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]) /
  numbers.length;
console.log("3 - " + media);
//4
if (media > 20) {
  console.log("4 - " + "valor maior que 20");
} else {
  console.log("4 - " + "valor menor ou igual a 20");
}
//5

let maiorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log("5 - " + maiorNumero);
//6
let valoresImpares = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    valoresImpares++;
  }
}
console.log("6 - " + valoresImpares);
//7
let menorNumero = numbers[0];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
console.log("7 - " + menorNumero);
//8
let arrayDeNumeros = [];
for (let index = 0; index <= 25; index++) {
  arrayDeNumeros.push(index);
}
console.log("8 - " + arrayDeNumeros);
//9
for (let index = 0; index < arrayDeNumeros.length; index++) {
  console.log("9 - " + arrayDeNumeros[index] / 2);
}
