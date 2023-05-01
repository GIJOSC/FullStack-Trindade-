(async () => {
  const database = require("./db");
  const Produto = require("./produto");

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }

  const novoProduto = await Produto.create({
    nome: "Teclado USB",
    preco: 30,
    descricao: "teclado gamer",
  });
  console.log(novoProduto);

  const produto = await Produto.findByPk(1);
  console.log(produto);

  await produto.destroy();
})();
