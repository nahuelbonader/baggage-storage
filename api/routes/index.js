const router = require("express").Router();
const passengerRoutes = require("./passenger");
const packageRoutes = require("./package");

router.use("/passengers", passengerRoutes);
router.use("/packages", packageRoutes);

module.exports = router;
