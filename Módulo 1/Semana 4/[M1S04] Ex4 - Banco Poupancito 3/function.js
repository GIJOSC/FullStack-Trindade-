class PoupancaPremium extends ContaPoupanca {
  atualizaJuros() {
    const juros = this.#saldo * 0.012; // juros de 1.2%
    this.#saldo += juros;
    console.log(
      `Juros de R$${juros.toFixed(
        2
      )} adicionados. Saldo atual: R$${this.#saldo.toFixed(2)}`
    );
  }
}

const poupancaPremium = new PoupancaPremium("minhasenha");
poupancaPremium.deposito(10000, "minhasenha"); // Depósito de R$10000 realizado com sucesso! Saldo atual: R$10000
poupancaPremium.atualizaJuros(); // Juros de R$120.00 adicionados. Saldo atual: R$10120.00
poupancaPremium.retirada(5000, "minhasenha"); // Retirada de R$5000 realizada com sucesso! Saldo atual: R$5120.00
