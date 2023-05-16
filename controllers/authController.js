const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const authUtils = require("../Utils/authUtils");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).send("All input is required");
  }
  // Validate if user exist in our database
  const user = await userModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = authUtils.generateAccessToken({ user_id: user._id, email });

    // save user token
    user.token = token;
    res.status(200).json(user);
  } else res.status(400).send("Invalid Credentials");
};

exports.register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!(email && password && first_name && last_name)) {
    res.status(400).send("All input is required");
  }
  // check if user already exist
  const oldUser = await userModel.findOne({ email });
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);
  // Create user in our database
  const user = await userModel.create({
    first_name,
    last_name,
    email: email.toLowerCase(),
    password: encryptedPassword,
  });
  const token = authUtils.generateAccessToken({ user_id: user._id, email });
  // Create token
  user.token = token;
  return res.status(200).json(user);
};
