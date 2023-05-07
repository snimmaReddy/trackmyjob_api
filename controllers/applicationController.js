const applicationModel = require("../model/applicationModel");

exports.newApplication = (req, res) => {
  const appData = new applicationModel(req.body);
  console.log(appData);
  appData
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
};
