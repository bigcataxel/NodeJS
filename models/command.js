const { Model, DataTypes } = require('sequelize');
const connection = require('./db');

class Command extends Model {}

Command.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'SHIPPED', 'DELIVERED'),
      defaultValue: 'PENDING',
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Command;
