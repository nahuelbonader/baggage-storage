const router = require("express").Router();
const {
  createPassenger,
  deletePassenger,
  getPassengers,
  getPassenger,
} = require("../controllers/passenger.controller");

router.route("/").get(getPassengers).post(createPassenger);

router.route("/:id").get(getPassenger).delete(deletePassenger);

module.exports = router;
