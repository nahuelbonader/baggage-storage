const { Package } = require("../models");
const PassengerService = require("./passenger.service");
const PACKET_LIMIT = 3;

module.exports = {
  createPackage: (body) => {
    return Package.create(body);
  },

  checkPackagesByPassenger: async (passengerId) => {
    const passenger = await PassengerService.getPassenger(passengerId);
    return passenger.packages.length < PACKET_LIMIT;
  },
};
