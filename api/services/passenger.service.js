const { Passenger } = require("../models");

module.exports = {
  createPassenger: (body) => {
    return Passenger.create(body);
  },

  checkPassenger: async (name, flight_code) => {
    try {
      const passenger = await Passenger.findOne({
        where: {
          name,
          flight_code,
        },
      });

      return passenger != null;
    } catch (err) {
      throw err;
    }
  },

  getPassenger: (id) => {
    return Passenger.findByPk(id, {
      include: [
        {
          association: Passenger.associations.packages,
          attributes: ["id", "category", "description", "createdAt"],
        },
      ],
    });
  },

  deletePassenger: (id) => {
    return Passenger.destroy({ where: { id } });
  },

  getPassengers: () => {
    return Passenger.findAll();
  },
};
