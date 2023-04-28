// Definindo um objeto que representa um item no estoque
const item = {
  nome: "Produto 1",
  preco: 10.0,
  quantidade: 10,
};

// Salvando o objeto no localStorage
localStorage.setItem("produto_1", JSON.stringify(item));

// Recuperando o objeto do localStorage
const produto1 = JSON.parse(localStorage.getItem("produto_1"));

// Atualizando a quantidade do item no estoque
produto1.quantidade -= 1;

// Salvando a atualização no localStorage
localStorage.setItem("produto_1", JSON.stringify(produto1));
