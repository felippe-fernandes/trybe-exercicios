// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
let soma = 0;
for (let i = 1; i <= 1000; i++) soma += i;
console.log("A soma de de 1 a 1000 é:  ", +soma);
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let fim = 150;
let contador = 0;
for (let i = 2; i <= fim; i += 1) {
  if (i % 3 == 0) {
    contador++;
  }
}
if (contador === 50) {
  console.log("Sport ficoou na primeira divisão");
}
console.log(contador);
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let jogador1 = "pedra";
let jogador2 = "tesoura";

if (jogador1 === jogador2) {
  console.log("A Ties");
} else if (jogador1 === "pedra" && jogador2 === "tesoura") {
  console.log("Player 1 won");
} else if (jogador1 === "pedra" && jogador2 === "papel")
  console.log("Player 2 won");
else if (jogador1 === "papel" && jogador2 === "pedra")
  console.log("Player 1 won");
else if (jogador1 === "papel" && jogador2 === "tesoura")
  console.log("Player 2 won");
else if (jogador1 === "tesoura" && jogador2 === "papel")
  console.log("Player 1 won");
else {
  console.log("Player 2 won");
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
const idade = 19;
if (idade >= 18) {
  console.log("A pessoa é maior de idade");
} else if (idade >= 0 && idade < 18) {
  console.log("A pessoa é menor de idade");
}
//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let idadeCarol = 20;
let idadeBaeta = 35;
let idadeMurilo = 34;
if (idadeCarol < idadeBaeta && idadeCarol < idadeMurilo) {
  console.log("Carol é a mais nova da gangue");
} else if (idadeBaeta < idadeCarol && idadeBaeta < idadeMurilo) {
  console.log("Baêta é o mais novo da gangue");
} else {
  console.log("Murilo é o mais novo da gangue");
}
