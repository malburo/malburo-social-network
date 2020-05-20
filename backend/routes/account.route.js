const express = require("express");
var router = express.Router();

const controller = require("../controllers/account.controller");
const validateLogin = require("../validation/validateLogin");
const validateRegister = require("../validation/validateRegister");
const validateReset = require("../validation/validateResetPassword");

router.post("/login", validateLogin, controller.postLogin);
router.post("/register", validateRegister, controller.postRegister);
router.post("/password/reset", validateReset, controller.postResetPassword);
module.exports = router;
