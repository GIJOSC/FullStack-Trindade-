const express = require("express");
const connection = require("./src/database");
const User = require("./src/models/user");

const createUser = require("./src/controllers/user/createUser");
const findAllUser = require("./src/controllers/user/findAllUser");
const findOneUser = require("./src/controllers/user/findOneUser");
const deleteUser = require("./src/controllers/user/deleteUser");
const updateUser = require("./src/controllers/user/updateUser");

const app = express();
app.use(express.json()); // obrigatório

app.post("/api/user", createUser);
app.get("/api/user", findAllUser);
app.get("/api/user/:id", findOneUser);
app.delete("/api/user/:id", deleteUser);
app.put("/api/user/:id/status", updateUser);

connection.sync({ alter: true });

app.listen(6665, () => {
  console.log("Projeto online");
});
