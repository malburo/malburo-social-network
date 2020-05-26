const express = require("express");
var router = express.Router();

const controller = require("../controllers/comment.controller");
const Auth = require("../middlewares/auth.middlewares");

router.post("/", Auth.ensureAuthMiddleware, controller.comment);
module.exports = router;
