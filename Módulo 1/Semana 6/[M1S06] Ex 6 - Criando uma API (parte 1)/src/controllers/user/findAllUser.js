const User = require("../../models/user");

async function findAllUser(request, response) {
  try {
    const users = await User.findAll();
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    return;
    console.log(error);
    response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = findAllUser;
