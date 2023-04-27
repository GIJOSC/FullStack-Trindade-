let precoPao = parseFloat(prompt("Digite o preço do pão:"));

console.log("Panificadora Pão de Ontem - Tabela de preços");

for (let i = 1; i <= 50; i++) {
  let precoTotal = precoPao * i;
  console.log(i + " - R$ " + precoTotal.toFixed(2));
}
