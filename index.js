const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const post = require("./src/models/Post");
const bodyParser = require("body-parser");
const PORT = 8081;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));

app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.get("/cadastro", function (req, res) {
  try {
    res.render(__dirname + "/src/views/formulario.handlebars");
  } catch (error) {
    res.send(error);
  }
});

app.post("/insert", (req, res) => {
  post
    .create({
      title: req.body.title,
      content: req.body.content,
    })
    .then(function () {
      res.send("Formulário criado com sucesso!");
    })
    .catch(function (error) {
      res.send("Ocorreu um erro: " + error);
    });
});

app.listen(PORT);
