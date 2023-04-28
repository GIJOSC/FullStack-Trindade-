class Person {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  apresentar() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`
    );
  }
}

class PersonProfissional extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  apresentar() {
    console.log(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}.`
    );
  }
}

const person = new Person("João", 25, 1.8);
person.apresentar(); // Olá me chamo João tenho 25 anos e tenho 1.8 de altura.

const personProfissional = new PersonProfissional(
  "Maria",
  30,
  1.7,
  "engenheira"
);
personProfissional.apresentar(); // Olá me chamo Maria tenho 30 anos e tenho 1.7 de altura e sou engenheira.
