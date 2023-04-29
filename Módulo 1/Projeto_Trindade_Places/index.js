const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

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

// Exercício 5 - Criado rota delete
app.delete("/places/:id", async (req, res) => {
  try {
    const { placeId } = req.params;

    if (!placeId) {
      return res.status(404).json({
        message: "Lugar não encontrado no sistema!",
      });
    }

    await Place.destroy({ where: { id: placeId } });

    res.status(200).json({ message: "Lugar apagado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Não foi possivel concluir a operação" });
  }
});

// Exercício 6 - Criado a rota update
app.put("/places/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contact, opening_hours, description, latitude, longitude } =
      req.body;

    const place = await Place.findByPk(id);

    if (!place) {
      return res.status(404).json({ message: "Instituição não encontrada." });
    }

    place.name = name;
    place.contact = contact;
    place.opening_hours = opening_hours;
    place.description = description;
    place.latitude = latitude;
    place.longitude = longitude;

    if (typeof place.name !== "string" || place.name.trim() === "") {
      return res.status(400).json({ message: "Nome é obrigatório" });
    }

    if (typeof place.contact !== "string" || place.contact.trim() === "") {
      return res.status(400).json({ message: "Contato é obrigatório" });
    }

    if (
      typeof place.opening_hours !== "string" ||
      place.opening_hours.trim() === ""
    ) {
      return res.status(400).json({ message: "Horário é obrigatório" });
    }

    if (
      typeof place.description !== "string" ||
      place.description.trim() === ""
    ) {
      return res.status(400).json({ message: "Descrição é obrigatório" });
    }

    if (typeof place.latitude !== "number" || isNaN(place.latitude)) {
      return res.status(400).json({ message: "Latitude deve ser um número" });
    }

    if (typeof place.longitude !== "number" || isNaN(place.longitude)) {
      return res.status(400).json({ message: "Longitude deve ser um número" });
    }

    const placeAlreadyExists = await Place.findOne({
      where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("lower", Sequelize.col("name")),
            Sequelize.fn("lower", place.name)
          ),
          {
            id: {
              [Op.ne]: id,
            },
          },
        ],
      },
    });

    if (placeAlreadyExists) {
      return res.status(409).json({
        message: "Informações duplicadas no banco de dados.",
      });
    }

    const updatedPlace = await place.save();

    res.json(updatedPlace);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Não foi possivel processar a solicitação!" });
  }
});

//Exercício 1 - Iniciar o Servidor
app.listen(3333, () => console.log("Aplicação online na porta 3333!"));
