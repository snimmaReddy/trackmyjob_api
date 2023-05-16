const applicationModel = require("../model/applicationModel");

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

  // appData
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.status(200).send("Added application");
  //   })
  //   .catch((err) => console.log(err));
};
