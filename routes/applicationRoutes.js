const express = require("express");
const router = express.Router();
const controller = require("../controllers/applicationController");

router.post("/new", controller.newApplication);

module.exports = router;
