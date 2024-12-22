const { Model, DataTypes } = require('sequelize');
const connection = require('./db');

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Category;
