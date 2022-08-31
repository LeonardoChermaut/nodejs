const Sequelize = require("sequelize");

const sequelize = new Sequelize("sistemadecadastro", "root", "#abc123#", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("CONNECTION SUCCESSFULY");
  })
  .catch(function (error) {
    console.log("CONNECTION FAILED: " + error);
  });
