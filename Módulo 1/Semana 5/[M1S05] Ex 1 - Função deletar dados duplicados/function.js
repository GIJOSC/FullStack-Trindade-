const nomes = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];

const nomesUnicos = [...new Set(nomes)];

const nomesDuplicados = nomes.filter(
  (nome, indice) => nomes.indexOf(nome) !== indice
);

console.log(`Duplicados: ${[...new Set(nomesDuplicados)]}`);
console.log(`Lista sem duplicados: ${nomesUnicos}`);
