const valorDeCusto = 98;
const valorDeVenda = 200;
const impostoDeCusto = (valorDeCusto * 20) / 100;
const lucro = valorDeVenda - (valorDeCusto + impostoDeCusto);

if (valorDeCusto < 0 || valorDeVenda < 0) {
  console.log("erro");
} else {
  console.log(lucro);
}
