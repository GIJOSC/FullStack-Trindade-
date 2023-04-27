function checkBirthday() {
  const birthday = "2023-06-01"; // Data de aniversário
  const today = new Date(); // Data atual
  const diffInMs = new Date(birthday) - today;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24)); // Cálculo de dias restantes

  if (diffInDays === 0) {
    console.log("Feliz aniversário!");
  } else {
    console.log(`Faltam ${diffInDays} dias para o seu aniversário.`);
  }
}

setInterval(checkBirthday, 1000 * 60 * 60 * 24); // Chamada da função a cada 24 horas
