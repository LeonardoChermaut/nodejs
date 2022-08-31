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

const post = sequelize.define("postagens", {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
});

post.create({
  title: "Hello World",
  content: "Node JS",
});

//post.sync({ force: true });

const user = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

user.create({
  name: "Leonardo",
  lastname: "Chermaut",
  age: 25,
  email: "chermauts@hotmail.com",
});

//user.sync({ force: true });
