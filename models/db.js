const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "mysql",
  logging: false,
});

connection
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = connection;
