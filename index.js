const express = require("express");
const app = express();

// Digo para o express que quero usar o ejs como view engine
app.set("view engine", "ejs");

app.get("/:nome/:linguagem", (request, response) => {
  var nome = "Daniel Goldacker";
  var linguagem = "Javascript";
  var exibirMsg = false;

  response.render("index", {
    nome: request.params.nome,
    linguagem: request.params.linguagem,
    empresa: "Software SA",
    inscritos: 250,
    exibirMsg: exibirMsg
  });
});

app.listen(8080, () => {
  console.log("APP Rodando!");
});