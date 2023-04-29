const express = require("express");
const app = express();

app.get("/api/:nome", (req, res) => {
  const nome = req.params.nome;
  console.log(`Rota de API criada pelo(a): ${nome}`);
  res.send("Nome recebido com sucesso!");
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
