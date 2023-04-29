const createUser = (req, res) => {
  const { nome, idade, cargo, senha } = req.body;

  if (!nome || !idade || !cargo || !senha) {
    return res
      .status(406)
      .json({ mensagem: "Está faltando dados para concluir a operação" });
  }

  if (idade < 21) {
    return res
      .status(400)
      .json({ mensagem: "Usuário não possui idade suficiente" });
  }

  // código para criar um novo usuário no banco de dados

  return res.status(200).json({ mensagem: "Criado com sucesso" });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res
      .status(406)
      .json({ mensagem: "Está faltando dados para concluir a operação" });
  }

  // código para deletar o usuário com o ID especificado do banco de dados

  return res.status(200).json({ mensagem: "Deletado com sucesso" });
};

module.exports = { createUser, deleteUser };
