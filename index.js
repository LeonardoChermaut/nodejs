const Express = require("express");
const app = Express();
const Handlebars = require("express-handlebars");
const Publication = require("./src/models/Post");
const bodyParser = require("body-parser");
const PORT = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.engine("handlebars", Handlebars.engine({ defaultLayout: "main" }));

app.get("/", function (req, res) {
  Publication.findAll().then(function (props) {
    res.render(__dirname + "/src/views/page/home.handlebars", {
      props: publications,
    });
  });
});

app.get("/cadastro", function (req, res) {
  try {
    res.render(__dirname + "/src/views/form/formulario.handlebars");
  } catch (error) {
    res.send(error);
  }
});

app.post("/result", (req, res) => {
  Publication.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (error) {
      res.send("Ocorreu um erro: " + error);
    });
});

app.listen(PORT);
