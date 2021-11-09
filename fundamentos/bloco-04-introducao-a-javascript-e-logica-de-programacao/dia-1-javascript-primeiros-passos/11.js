const salarioBruto = 11000;
let salarioBase;
let salarioLiquido;
let aliquiotaIR;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto * (1 - 0.08);
} else if (salarioBruto <= 2594.92) {
  salarioBase = salarioBruto * (1 - 0.09);
} else if (salarioBruto <= 5189.82) {
  salarioBase = salarioBruto * (1 - 0.11);
} else {
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase <= 2826.65) {
  aliquiotaIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase <= 3751.05) {
  aliquiotaIR = salarioBase * 0.155 - 354.8;
} else if (salarioBase <= 4664.68) {
  aliquiotaIR = salarioBase * 0.225 - 636.13;
} else {
  aliquiotaIR = salarioBase * 0.275 - 896.36;
}

let salarioFinal = salarioBase - aliquiotaIR;
const resultado = salarioFinal.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(salarioFinal);
console.log("O salario sera " + resultado);
