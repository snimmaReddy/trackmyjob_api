const express = require("express");
const router = express.Router();
const controller = require("../controllers/applicationController");
const jwtValidation = require("../Middleware");

router.post("/new", jwtValidation, controller.newApplication);

router.get("/", jwtValidation, controller.getApplications);

router.put("/updateStatus", jwtValidation, controller.updateStatus);

router.post(
  "/deleteApplications",
  jwtValidation,
  controller.deleteApplications
);

module.exports = router;
