const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)

    console.log("Connected to Database")
}

module.exports = connectDB