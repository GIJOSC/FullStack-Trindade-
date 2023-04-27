while (true) {
  let total = 0;
  let precoProduto = parseFloat(
    prompt("Digite o preço do produto (ou 0 para encerrar a compra):")
  );

  while (precoProduto !== 0) {
    total += precoProduto;
    precoProduto = parseFloat(
      prompt("Digite o preço do próximo produto (ou 0 para encerrar a compra):")
    );
  }

  let dinheiroRecebido = parseFloat(
    prompt(
      "Total: R$" +
        total.toFixed(2) +
        "\nDigite o valor em dinheiro fornecido pelo cliente:"
    )
  );
  let troco = dinheiroRecebido - total;

  console.log("Lojas Tabajara");
  console.log("Total: R$" + total.toFixed(2));
  console.log("Dinheiro: R$" + dinheiroRecebido.toFixed(2));
  console.log("Troco: R$" + troco.toFixed(2));

  let continuar = prompt("Deseja registrar outra compra? (S/N)");

  if (continuar.toUpperCase() === "N") {
    break;
  }
}
