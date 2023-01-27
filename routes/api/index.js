const router = require("express").Router();
const travelerRoutes = require("./travelerRoutes.js");
const locationRoutes = require("./locationRoutes.js");

router.use("/travelers", travelerRoutes);
router.use("/locations", locationRoutes);

module.exports = router;
