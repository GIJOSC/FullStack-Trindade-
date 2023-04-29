const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

// Ordena as listas
usuarios.sort();
frutas.sort((a, b) => b.localeCompare(a)); // comparação decrescente usando o método 'localeCompare'

// Agrupa os elementos em um novo array
const resultado = [];
for (let i = 0; i < usuarios.length; i++) {
  resultado.push(`${usuarios[i]} - ${frutas[i]}`);
}

// Imprime o resultado
console.log(resultado);
