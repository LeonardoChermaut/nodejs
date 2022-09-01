const Sequelize = require("sequelize");

const sequelize = new Sequelize("postapp", "root", "#abc123#", {
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

module.exports = { Sequelize: Sequelize, sequelize: sequelize };
