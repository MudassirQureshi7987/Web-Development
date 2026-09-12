const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://shadow:fUS1gxla4jxqmDAA@cluster0.r9jdv9o.mongodb.net/halley?tls=true"
  );

  console.log("Connected to DB");
}

module.exports = connectDB;