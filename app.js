const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 5000;
const hostname = "localhost";
const authRoutes = require("./routes/authRoute");
const mongoose = require("mongoose");

app.use(express.json());

const mongoDB = "mongodb://127.0.0.1:27017/Trackmyjob";

const connectDB = async () => app.use(express.json());
app.use(express.text());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, hostname, async () => {
  try {
    await mongoose.connect(mongoDB);
  } catch (error) {
    console.log("Failed to connect to DB");
    console.log(error);
  }

  console.log("Listening to localhost:5000");
});

app.use("/api/auth", authRoutes);

// app.post("/api/auth/login", (req, res) => {
//   console.log(req.body);
//   res.status(200).send();
// });
