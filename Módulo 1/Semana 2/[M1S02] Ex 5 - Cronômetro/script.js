document
  .getElementById("cronometro")
  .addEventListener("click", (cronometro) => {
    let timer = document.getElementById("timer");
    let i = 0;

    function startCronometro() {
      if (i <= 10) {
        timer.innerText = i++;
      } else {
        alert("Seu tempo acabou!! Tente novamente!!");
        clearInterval(cronometro);
      }
    }

    var cronometro = setInterval(startCronometro, 1000);
  });
