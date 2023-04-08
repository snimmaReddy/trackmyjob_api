const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Schema = mongoose.Schema;

const userModelSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", userModelSchema);

// exports.findUser = async (email) => {
//   console.log(`finding user with email ${email}`);
//   userModel
//     .findOne({ email: email })
//     .then((user) => {
//       return user;
//     })
//     .catch((err) => {
//       console.log(error);
//     });
// };

// const users = [
//   {
//     id: 1,
//     name: "testuser",
//     email: "test@gmail.com",
//     password: "test123",
//   },
// ];

// exports.findUser = (email) => {
//   return users.find((user) => user.email === email);
// };
