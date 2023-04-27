const tasks = [
  "Fazer a cama",
  "Tomar café da manhã",
  "Escovar os dentes",
  "Ir para o trabalho",
  "Almoçar",
  "Fazer exercícios físicos",
  "Jantar",
  "Ler um livro",
  "Ir dormir",
];

function buscaTarefa(tarefa) {
  return tasks.includes(tarefa);
}

function alteraTarefa(index, novaTarefa) {
  tasks[index] = novaTarefa;
}

function deletaTarefa(index) {
  tasks.splice(index, 1);
}

function adicionaTarefa(novaTarefa) {
  tasks.push(novaTarefa);
}
