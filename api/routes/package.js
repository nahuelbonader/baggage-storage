const router = require("express").Router();
const { createPackage } = require("../controllers/package.controller");

router.post("/", createPackage);

module.exports = router;
