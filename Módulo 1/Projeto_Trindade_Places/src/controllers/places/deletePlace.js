const Place = require("../../models/place");

async function deletePlace(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "Lugar não encontrado! " });
    }

    await Place.destroy({ where: { id: id } });

    res.status(200).json({ message: "Lugar apagado com sucesso!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Não foi possível processar sua solicitação" });
  }
}

module.exports = deletePlace;
