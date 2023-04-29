const Place = require("../../models/place");

async function findPlace(req, res) {
  try {
    const places = await Place.findAll({ where: { userId: req.body.userId } });
    res.json(places);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Não foi possível processar sua solicitação!" });
  }
}
module.exports = findPlace;
