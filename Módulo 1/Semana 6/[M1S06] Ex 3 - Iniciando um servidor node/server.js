const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Olá, mundo!</h1>");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});
