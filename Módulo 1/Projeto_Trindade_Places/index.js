const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");
const { Sequelize } = require("sequelize");

// Exercício 1  - Iniciar o servidor
const app = express();
app.use(express.json()); //obrigatório

connection.authenticate();
connection.sync({ alter: true });
console.log("Connection has been established successfully.");

// Exercício 3 - Criado a rota POST
app.post("/places", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      contact: req.body.contact,
      opening_hours: req.body.opening_hours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    if (typeof data.name !== "string" || data.name.trim() === "") {
      return res.status(400).json({ message: "Nome é obrigatório" });
    }

    if (typeof data.contact !== "string" || data.contact.trim() === "") {
      return res.status(400).json({ message: "Contato é obrigatório" });
    }

    if (
      typeof data.opening_hours !== "string" ||
      data.opening_hours.trim() === ""
    ) {
      return res
        .status(400)
        .json({ message: "Horário de funcionamento é obrigatório" });
    }

    if (
      typeof data.description !== "string" ||
      data.description.trim() === ""
    ) {
      return res.status(400).json({ message: "Descrição é obrigatório" });
    }

    if (typeof data.latitude !== "number" || isNaN(data.latitude)) {
      return res.status(400).json({ message: "Latitude deve ser um número!" });
    }

    if (typeof data.longitude !== "number" || isNaN(data.longitude)) {
      return res.status(400).json({ message: "Longitude deve ser um número!" });
    }

    const placeAlreadyExists = await Place.findOne({
      where: Sequelize.where(
        Sequelize.fn("lower", Sequelize.col("name")),
        Sequelize.fn("lower", data.name)
      ),
    });

    if (placeAlreadyExists) {
      return res.status(400).json({
        message: "Esta informação já foi cadastrada no banco de dados!",
      });
    }

    const place = await Place.create(data);

    resp.status(201).json(place);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Não foi possível processar a operação!" });
  }
});

//Exercício 4 - Criado rota Get
app.get("/places", async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json(places);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Não foi possível processar a operação!" });
  }
});

//Exercício 1 - Iniciar o Servidor
app.listen(3333, () => console.log("Aplicação online na porta 3333!"));
