const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationModelSchema = new Schema(
  {
    companyName: { type: String, required: true },
    jobRole: { type: String, required: true },
    jobDesc: { type: String, required: true },
    jobPortal: { type: String, required: true },
    jobLink: { type: String, required: true },
    refDetails: { type: String, required: true },
    notes: { type: String },
  },
  { collection: "applications" }
);

module.exports = mongoose.model("Application", applicationModelSchema);
