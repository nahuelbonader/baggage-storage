const Passenger = require("./passenger");
const Package = require("./package");

Passenger.hasMany(Package, {
  as: "packages",
  onDelete: "CASCADE",
  foreignKey: { name: "passengerId", allowNull: false },
});
// Package.belongsTo(Passenger);

module.exports = { Passenger, Package };
