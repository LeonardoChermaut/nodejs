const Sequelize = require("sequelize");

const sequelize = new Sequelize("articles", "root", "#abc123#", {
  host: "localhost",
  dialect: "mysql",
});
const db = {};

sequelize
  .authenticate()
  .then(function () {
    console.log("CONNECTION SUCCESSFULY");
  })
  .catch(function (error) {
    console.log("CONNECTION FAILED: " + error);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
