const Place = require("../../models/place");

async function updatePlace(req, res) {
  try {
    const { id } = req.params;

    const placeInDatabase = await Place.findByPk(id);

    if (!placeInDatabase) {
      return res.status(404).json({ message: "Instituição não encontrada." });
    }

    placeInDatabase.name = req.body.name || placeInDatabase.name;
    placeInDatabase.contact = req.body.contact || placeInDatabase.contact;
    placeInDatabase.opening_hours =
      req.body.opening_hours || placeInDatabase.opening_hours;
    placeInDatabase.description =
      req.body.description || placeInDatabase.description;
    placeInDatabase.latitude = req.body.latitude || placeInDatabase.latitude;
    placeInDatabase.longitude = req.body.longitude || placeInDatabase.longitude;

    await placeInDatabase.save();

    res.json(placeInDatabase);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Não foi possível processar sua soliciação" });
  }
}

module.exports = updatePlace;
