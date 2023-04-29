const users = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

let usersUnder18 = [];
let usersOver18 = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].idade < 18) {
    usersUnder18.push(users[i]);
  } else {
    usersOver18.push(users[i]);
  }
}

console.log("Usuários com idade inferior a 18: ", usersUnder18);
console.log("Usuários com idade igual ou superior a 18: ", usersOver18);
