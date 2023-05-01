const User = require("../../models/user");

async function createUser(request, response) {
  // organizar os dados a serem cadastrados

  try {
    const data = {
      nome: request.body.nome,
      idade: request.body.idade,
      cargo: request.body.cargo,
      senha: request.body.senha,
    };

    // Verificar se a idade do usuário é maior ou igual a 21 anos
    if (data.idade < 21) {
      return response
        .status(400)
        .json({ mensagem: "Usuário não possui idade suficiente" });
    }

    // Verificar se a requisição contém todos os dados necessários
    if (!data.nome || !data.idade || !data.cargo || !data.senha) {
      return response
        .status(406)
        .json({ mensagem: "Está faltando dados para concluir a operação" });
    }

    const userExiste = await User.findOne({
      where: { nome: request.body.nome },
    });

    if (userExiste) {
      return response.status(409).json({ message: "Usuário já cadastrado" });
    }

    const user = await User.create(data);

    response.status(200).json({ mensagem: "Criado com sucesso" });

    response.status(201).json(user);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = createUser;
