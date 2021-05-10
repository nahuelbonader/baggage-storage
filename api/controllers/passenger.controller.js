const { badRequest, created, ok, notFound } = require("../helpers/responses");
const PassengerService = require("../services/passenger.service");

module.exports = {
  createPassenger: async (req, res, next) => {
    try {
      const { name, flight_code } = req.body;
      if (!name || !flight_code)
        return res.status(400).json(
          badRequest({
            message: "required parameters are missing or wrong type",
          })
        );

      const exist = await PassengerService.checkPassenger(name, flight_code);

      if (exist)
        return res.status(400).json(
          badRequest({
            message: "Passenger is already using the service",
          })
        );

      const passenger = await PassengerService.createPassenger(req.body);

      res.status(210).json(
        created({
          data: passenger,
          message: "Passenger created successfully",
        })
      );
    } catch (err) {
      next(err);
    }
  },

  getPassenger: async (req, res, next) => {
    try {
      const { id } = req.params;
      const passenger = await PassengerService.getPassenger(id);

      if (!passenger)
        return res
          .status(404)
          .json(notFound({ message: "Passenger not found" }));

      return res.status(200).json(ok({ data: passenger }));
    } catch (err) {
      next(err);
    }
  },

  deletePassenger: async (req, res, next) => {
    try {
      const { id } = req.params;
      // chequear si existe
      // si no existe se le envia un not found
      await PassengerService.deletePassenger(id);
      res.status(200).json(ok({ message: "Passenger deleted successfully" }));
    } catch (err) {
      next(err);
    }
  },

  getPassengers: async (req, res, next) => {
    try {
      const passengers = await PassengerService.getPassengers();
      res.status(200).json(ok({ data: passengers }));
    } catch (err) {
      next(err);
    }
  },
};
