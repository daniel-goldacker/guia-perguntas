const express = require("express");
const app = express();

// Digo para o express que quero usar o ejs como view engine
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/perguntar", (request, response) => {
  response.render("perguntar");
});

app.listen(8080, () => {
  console.log("APP Rodando!");
});
