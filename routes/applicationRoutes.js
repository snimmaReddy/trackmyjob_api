const express = require("express");
const router = express.Router();
const controller = require("../controllers/applicationController");
const jwtValidation = require("../Middleware");

router.post("/new", jwtValidation, controller.newApplication);
//router.post("/new", controller.newApplication);
module.exports = router;
