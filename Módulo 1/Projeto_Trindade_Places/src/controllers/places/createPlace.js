const Place = require("../../models/place");

async function createPlace(req, res) {
  try {
    const data = {
      name: req.body.name,
      contact: req.body.contact,
      opening_hours: req.body.opening_hours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      userId: req.body.userId,
    };

    const placeAlreadyExists = await Place.findOne({
      where: { name: data.name },
    });

    if (placeAlreadyExists) {
      return res.status(400).json({ message: "Este lugar já foi cadastrado!" });
    }

    const place = await Place.create(data);

    res.status(201).json(place);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível processar a solicitação" });
  }
}

module.exports = createPlace;
