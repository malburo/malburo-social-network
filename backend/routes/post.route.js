const express = require("express");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var router = express.Router();

const controller = require("../controllers/post.controller");
const Auth = require("../middlewares/auth.middlewares");

router.get("/", Auth.ensureAuthMiddleware, controller.getPost);
router.post("/", Auth.ensureAuthMiddleware, upload.single("image"), controller.post);
module.exports = router;
