const mongoose = require("mongoose");
const config = require("config");

const dgbr = require("Debug")("Development:MOngoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/stach", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    dgbr("connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
