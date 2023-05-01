const express = require("express");

const app = express();

const port = 5554;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/tarefas", (request, response) => {
  console.log(request.body);
  response.json({ messagem: "tudo bem" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
