let express = require("express");
let { logcont, showlogcont, showregcont } = require("./controller");
const { model } = require("mongoose");
let router = express.Router();
let auth = require("./auth");
router.get("/showlogin", showlogcont);
router.get("/login", logcont);
router.get("/showregister", auth, showregcont);
module.exports = router;
