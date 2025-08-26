const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("Error connecting to mongodb : ", err)
    }
}

module.exports = connectDB;