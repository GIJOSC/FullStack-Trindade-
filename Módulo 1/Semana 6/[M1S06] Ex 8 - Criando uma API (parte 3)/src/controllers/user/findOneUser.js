const User = require("../../models/user");

async function updateUser(request, response) {
  try {
    const user = await User.findOne({
      where: { nome: request.params.nome },
    });

    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    const newData = {
      nome: request.body.nome || user.nome,
      idade: request.body.idade || user.idade,
      cargo: request.body.cargo || user.cargo,
      senha: request.body.senha || user.senha,
    };

    const updatedUser = await user.update(newData);

    response.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = updateUser;
