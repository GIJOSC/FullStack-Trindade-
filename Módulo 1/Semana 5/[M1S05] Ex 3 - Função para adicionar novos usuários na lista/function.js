const nomes = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

function adicionarNomes(...novosNomes) {
  const nomesInvalidos = novosNomes.filter((nome) => {
    return typeof nome !== "string" || nomes.includes(nome);
  });

  if (nomesInvalidos.length > 0) {
    console.log(
      `Erro: Os seguintes nomes são inválidos ou já existem na lista: ${nomesInvalidos.join(
        ", "
      )}`
    );
    return nomes;
  }

  const novaLista = [...nomes, ...novosNomes];
  console.log(`Nova lista com os nomes adicionados: ${novaLista.join(", ")}`);
  return novaLista;
}

adicionarNomes("Maria", "Lucas", "Aderbal"); // Erro: Os seguintes nomes são inválidos ou já existem na lista: Aderbal
adicionarNomes("Maria", "Lucas", 123); // Erro: Os seguintes nomes são inválidos ou já existem na lista: 123
adicionarNomes("Maria", "Lucas", "Carla"); // Nova lista com os nomes adicionados: Pedro, José, Aderbal, Danilo, Luisa, Vitoria, Maria, Lucas, Carla
