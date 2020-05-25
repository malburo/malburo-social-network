const express = require("express");
var router = express.Router();

const controller = require("../controllers/account.controller");
const validateLogin = require("../validation/validateLogin");
const validateRegister = require("../validation/validateRegister");
const validateReset = require("../validation/validateResetPassword");
const Auth = require("../middlewares/auth.middlewares");

router.get("/auth", Auth.ensureAuthMiddleware, controller.auth);
router.post("/login", validateLogin, controller.login);
router.post("/register", validateRegister, controller.register);
router.post("/password/reset", validateReset, controller.resetPassword);
module.exports = router;
