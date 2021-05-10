const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const regex = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";

const Passenger = sequelize.define(
  "Passenger",
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter the name of the passenger",
        },
      },
    },
    flight_code: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/i,
          msg: "The flight code must be alphanumeric ",
        },
        len: {
          args: [5, 5],
          msg: "The flight code must have five digits",
        },
        notNull: {
          msg: "Please enter the flight alphanumeric code",
        },
      },
      allowNull: false,
    },
  },
  {
    tableName: "passengers",
    timestamps: false,
    sequelize,
  }
);

module.exports = Passenger;
