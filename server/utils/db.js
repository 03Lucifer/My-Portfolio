const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

// pass = c2zIfvfNt2qx13dN

const connectDb = async() => {
    try {
        await mongoose.connect(URL);    
        console.log("Connection to DB successful")
    } catch (error) {
        console.error("Database Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDb;