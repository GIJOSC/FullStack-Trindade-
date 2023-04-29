function contarVogais(str) {
  // Verifica se o argumento passado é uma string
  if (typeof str !== "string") {
    return "Erro: o argumento não é uma string";
  }

  // Converte todas as letras para minúsculas para facilitar a contagem
  str = str.toLowerCase();

  // Cria um array com todas as vogais
  const vogais = ["a", "e", "i", "o", "u"];

  // Inicializa a contagem de vogais em 0
  let count = 0;

  // Percorre a string verificando se cada letra é uma vogal
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      count++;
    }
  }

  // Verifica se pelo menos 1 vogal foi encontrada e retorna o resultado
  if (count > 0) {
    return count;
  } else {
    return "Não há vogais na string";
  }
}

console.log(contarVogais("Olá, mundo!")); // Saída: 4
console.log(contarVogais("Hello World")); // Saída: 3
console.log(contarVogais("")); // Saída: Não há vogais na string
console.log(contarVogais(123)); // Saída: Erro: o argumento não é uma string
