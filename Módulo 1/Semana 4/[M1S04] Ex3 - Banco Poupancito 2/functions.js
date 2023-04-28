class ContaPoupanca extends Conta {
  atualizaJuros() {
    const juros = this.#saldo * 0.007; // juros de 0.7%
    this.#saldo += juros;
    console.log(
      `Juros de R$${juros.toFixed(
        2
      )} adicionados. Saldo atual: R$${this.#saldo.toFixed(2)}`
    );
  }
}

const contaPoupanca = new ContaPoupanca("minhasenha");
contaPoupanca.deposito(1000, "minhasenha"); // Depósito de R$1000 realizado com sucesso! Saldo atual: R$1000
contaPoupanca.atualizaJuros(); // Juros de R$7.00 adicionados. Saldo atual: R$1007.00
contaPoupanca.retirada(500, "minhasenha"); // Retirada de R$500 realizada com sucesso! Saldo atual: R$507.00
