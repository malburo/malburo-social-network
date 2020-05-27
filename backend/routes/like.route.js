const express = require("express");
var router = express.Router();

const controller = require("../controllers/like.controller");
const Auth = require("../middlewares/auth.middlewares");

router.post("/", Auth.ensureAuthMiddleware, controller.like);
module.exports = router;
