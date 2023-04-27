var user = {
  username: "admin",
  password: "123456",
};

function clicou() {
  const login = document.getElementById("login");
  const username = document.getElementById("user");
  const password = document.getElementById("senha");

  if (username.value == user.username && password.value == user.password) {
    localStorage.setItem("userLocal", username.value);
    localStorage.setItem("senhaLocal", password.value);
    localStorage.estaLogado = true;
    alert("Usuário logado e dados salvos no LocalStorage!");

    location.href = "./logout.html";
  } else {
    alert("Usuário não existe!");
  }
}

function isLogged() {
  if (localStorage.estaLogado) {
    alert("Efetuado Logoff com sucesso!");
    localStorage.removeItem("userLocal", "senhaLocal");
    localStorage.setItem("estaLogado", false);
    location.href = "./index.html";
  } else {
    alert("Usuário não existe! Faça o login novamente!");

    location.href = "./login.html";
  }
}
