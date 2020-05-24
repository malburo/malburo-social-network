const express = require("express");
var router = express.Router();

const controller = require("../controllers/home.controller");

router.get("/", controller.index);
// router.get("/:username", controller.profile);
module.exports = router;
