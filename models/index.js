const { Sequelize, DataTypes } = require("sequelize");
const connection = require("./db");

const User = require("./user");
const Product = require("./product");
const Category = require("./category");
const Command = require("./command");

const models = { User, Product, Category, Command };

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

Object.keys(models).forEach((modelName) => {
  if (models[modelName].sequelize) {
    models[modelName].sequelize = connection;
  }
});

module.exports = { connection, ...models };
