const { badRequest, created, ok, notFound } = require("../helpers/responses");
const PackageService = require("../services/package.service");
const PassengerService = require("../services/passenger.service");

module.exports = {
  createPackage: async (req, res, next) => {
    try {
      const { category, passengerId } = req.body;
      if (!category || !passengerId)
        return res.status(400).json(
          badRequest({
            message: "Required parameters are missing or wrong type",
          })
        );

      // chequear si existe el usuario
      const user = await PassengerService.getPassenger(passengerId);

      if (!user)
        return res.status(400).json(
          badRequest({
            message: "Non-existent passenger",
          })
        );

      const allow = await PackageService.checkPackagesByPassenger(passengerId);

      if (!allow)
        return res.status(400).json(
          badRequest({
            message: "You have reached the limit of packages per passenger",
          })
        );

      const package = await PackageService.createPackage(req.body);

      res.status(210).json(
        created({
          data: package,
          message: "Passenger created successfully",
        })
      );
    } catch (err) {
      next(err);
    }
  },
};
