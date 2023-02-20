const user = {
  username: "",
  password: "",
};
const usuarioCorreto = {
  usuario: "admin",
  senha: "1234",
};

const username = document.getElementById("username");
const password = document.getElementById("password");

const handleChangeUserName = (e) => {
  user.username = e.target.value;
};
const handleChangePassword = (e) => {
  user.password = e.target.value;
};

username.addEventListener("change", handleChangeUserName);
password.addEventListener("change", handleChangePassword);

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clicou();
});

function clicou() {
  const dados = JSON.parse(localStorage.getItem("dados"));

  if (user.username === dados.usuario && user.password === dados.senha) {
    localStorage.setItem("acesso", true);
    alert("Usuario autenticado!");
    window.location.href = "./login.html";
  } else {
    alert("Credenciais Incorretas!");
  }
}

window.onload = () => {
  localStorage.setItem("dados", JSON.stringify(usuarioCorreto));
};
