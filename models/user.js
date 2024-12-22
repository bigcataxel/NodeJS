const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const connection = require('./db');

class User extends Model {}

User.init(
  {
    activated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      defaultValue: "USER",
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = User;
