const salarioBruto = 3354.12;
let salarioBase;
let salarioLiquido;
if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 8) / 100;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 9) / 100;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 11) / 100;
} else {
  salarioBase = salarioBruto - (salarioBruto + 570.88);
}
return

if (salarioBase <= 1903, 98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - (salarioBase * 0.075) - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - (salarioBase * 0.15) - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - (salarioBase * 0.225) - 636.13;
} else {
  salarioLiquido = salarioBase - (salarioBase * 0.275) - 869.36;
}

console.log(salarioLiquido);
