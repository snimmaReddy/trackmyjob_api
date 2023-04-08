const express = require("express");
const userModel = require("../model/userModel");
const authUtils = require("../Utils/authUtils");

exports.login = (req, res) => {
  const userData = req.body;
  userModel
    .findOne(userData)
    .then((user) => {
      if (user && user != undefined) {
        console.log(user);
        const token = authUtils.generateAccessToken(user);
        console.log(token);
        res.status(200).send(token);
      } else {
        res.status(404).send("User Not found");
      }
    })
    .catch((err) => console.log(err));
};

exports.register = (req, res) => {};
