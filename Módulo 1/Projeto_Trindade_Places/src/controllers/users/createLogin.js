const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/user");

async function createLogin(req, res) {
  try {
    const userInDatabase = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userInDatabase) {
      return res.status(404).json({ message: "Usuario não encontrado" });
    }

    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      userInDatabase.password
    );

    if (!passwordIsValid) {
      return res.status(400).json({ message: "Credenciais incorretas" });
    }

    const token = jwt.sign(
      {
        id: userInDatabase.id,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ name: userInDatabase.name, token: token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}
module.exports = createLogin;
