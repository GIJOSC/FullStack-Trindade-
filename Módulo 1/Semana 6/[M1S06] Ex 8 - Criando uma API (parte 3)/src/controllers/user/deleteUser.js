const User = require("../../models/user");

async function deleteUser(request, response) {
  try {
    const id = request.params.id; // pegando o id enviado
    const userInDatabase = await User.findByPk(id);

    if (!userInDatabase) {
      return response.status(404).json({ message: "Usuario não encontrado" });
    }

    await userInDatabase.destroy();

    response.status(200).json({ message: "Usuário excluído com sucesso" });

    return response.status(204).json();
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = deleteUser;
