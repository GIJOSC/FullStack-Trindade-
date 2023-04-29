const yup = require("yup");

const placeSchema = yup.object().shape({
  name: yup.string().required("O nome do lugar é obrigatório"),
  contact: yup.string(),
  opening_hours: yup.string(),
  description: yup.string(),
  latitude: yup.number("Latitude deve ser um número"),
  longitude: yup.number("Longitude deve ser um número"),
});

function validateNewPlace(req, res, next) {
  try {
    placeSchema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = validateNewPlace;
