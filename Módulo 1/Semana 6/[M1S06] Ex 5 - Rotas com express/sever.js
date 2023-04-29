const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configurando o body-parser para tratar requisições com corpo em JSON
app.use(bodyParser.json());

// Rota para receber um objeto pelo corpo da requisição e retorná-lo em formato JSON
app.post("/enviar-objeto", (req, res) => {
  const objetoRecebido = req.body;
  res.json(objetoRecebido);
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
