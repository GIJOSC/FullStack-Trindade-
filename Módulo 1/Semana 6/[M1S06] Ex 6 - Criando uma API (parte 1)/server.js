const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  // Código para criar um novo usuário no banco de dados
});

app.delete("/users/:id", (req, res) => {
  // Código para deletar o usuário com o ID especificado do banco de dados
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
