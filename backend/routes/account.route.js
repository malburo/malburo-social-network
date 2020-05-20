const express = require("express");
var router = express.Router();

const controller = require("../controllers/account.controller");
const validateLogin = require("../validation/validateLogin")
const validateRegister = require("../validation/validateRegister")
// router.get("/login", controller.login);
router.post("/login", validateLogin, controller.postLogin);
// router.get("/register", controller.register);
router.post("/register", validateRegister, controller.postRegister);
// router.get("/password/reset", controller.resetPassword);
// router.post("/password/reset", controller.postResetPassword);
module.exports = router;
