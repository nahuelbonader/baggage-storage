const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Package = sequelize.define(
  "Package",
  {
    category: {
      type: DataTypes.ENUM(["big", "small", "clothing"]),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter the type of the package",
        },
      },
    },
    description: {
      type: DataTypes.STRING(30),
    },
  },
  {
    tableName: "packages",
    updatedAt: false,
    sequelize,
  }
);

module.exports = Package;
