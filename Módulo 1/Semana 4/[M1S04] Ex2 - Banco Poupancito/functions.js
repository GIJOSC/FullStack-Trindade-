class Conta {
  #saldo = 0; // saldo é privado, usando o # na frente

  constructor(senha) {
    this.#senha = senha;
  }

  deposito(valor, senha) {
    if (senha === this.#senha) {
      this.#saldo += valor;
      console.log(
        `Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${
          this.#saldo
        }`
      );
    } else {
      console.log("Senha incorreta. Depósito não realizado.");
    }
  }

  retirada(valor, senha) {
    if (senha === this.#senha) {
      if (valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(
          `Retirada de R$${valor} realizada com sucesso! Saldo atual: R$${
            this.#saldo
          }`
        );
      } else {
        console.log("Saldo insuficiente para realizar a retirada.");
      }
    } else {
      console.log("Senha incorreta. Retirada não realizada.");
    }
  }
}

const contaCorrente = new Conta("minhasenha");

contaCorrente.deposito(1000, "minhasenha"); // Depósito de R$1000 realizado com sucesso! Saldo atual: R$1000
contaCorrente.retirada(500, "senhaerrada"); // Senha incorreta. Retirada não realizada.
contaCorrente.retirada(1500, "minhasenha"); // Saldo insuficiente para realizar a retirada.
contaCorrente.retirada(500, "minhasenha"); // Retirada de R$500 realizada com sucesso! Saldo atual: R$500
