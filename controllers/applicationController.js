const applicationModel = require("../model/applicationModel");
const mongoose = require("mongoose");

exports.newApplication = async (req, res) => {
  const appData = req.body;
  appData.createdBy = req.data.user_id;
  appData.createdAt = new Date();
  console.log(appData);
  if (!(appData.companyName && appData.jobRole && appData.jobLink))
    return res.status(400).send("Company Name and Job details are required");
  else {
    try {
      result = await new applicationModel(appData).save();
      return res.status(200).send("Application Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getStats = async (req, res) => {
  const match = { createdBy: new mongoose.Types.ObjectId(req.data.user_id) };
  const group = {
    _id: {
      $dateToString: {
        format: "%m/%d/%Y",
        date: "$createdAt",
        timezone: "America/New_York",
      },
    },
    count: { $sum: 1 },
  };

  try {
    let data = await applicationModel
      .aggregate([{ $match: match }, { $group: group }])
      .exec();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
