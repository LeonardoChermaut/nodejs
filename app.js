const express = require("express");
const app = express();
const PORT = 8081;

var bar = "/";
var about = "/sobre";
var blog = "/blog";
var param = "/custom/:cargo/:nome";

app.get(bar, function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get(about, function (req, res) {
  res.sendFile(__dirname + "/html/about.html");
});

app.get(blog, function (req, res) {
  res.send("Bem-vindo ao meu blog!");
});

app.get(param, function (req, res) {
  res.send("<h1>Ola " + req.params + "</h1>");
});

app.listen(PORT, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});
