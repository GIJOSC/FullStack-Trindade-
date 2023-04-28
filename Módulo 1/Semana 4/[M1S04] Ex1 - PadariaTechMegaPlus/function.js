class CaixaRegistradora {
  constructor() {
    this.estoque = [];
    this.totalConta = 0;
  }

  adicionarProduto(codigoBarra, preco, nome) {
    const produto = { codigoBarra, preco, nome };
    this.estoque.push(produto);
  }

  iniciarAtendimento(nomeCliente) {
    console.log(`Iniciando atendimento para o cliente ${nomeCliente}...`);
  }

  adicionarItem(codigoBarra, quantidade) {
    const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      this.totalConta += produto.preco * quantidade;
      console.log(`${quantidade}x ${produto.nome} adicionado(s) à conta.`);
    } else {
      console.log(`Produto com código de barra ${codigoBarra} não encontrado.`);
    }
  }

  verificarTotalConta() {
    console.log(`Valor total da conta: R$ ${this.totalConta.toFixed(2)}`);
  }

  fecharConta(dinheiro) {
    const troco = dinheiro - this.totalConta;
    if (troco >= 0) {
      console.log(`Conta fechada. Troco: R$ ${troco.toFixed(2)}`);
      this.estoque = [];
      this.totalConta = 0;
    } else {
      console.log("Dinheiro insuficiente.");
    }
  }
}

const caixa = new CaixaRegistradora();
caixa.adicionarProduto(123, 10.99, "Camiseta");
caixa.adicionarProduto(456, 29.99, "Calça");
caixa.iniciarAtendimento("João");
caixa.adicionarItem(123, 2);
caixa.adicionarItem(789, 1); // produto não encontrado
caixa.verificarTotalConta(); // Valor total da conta: R$ 21.98
caixa.fecharConta(30); // Conta fechada. Troco: R$ 8.02
