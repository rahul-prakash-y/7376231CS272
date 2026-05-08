const mongoose = require("mongoose");

async function connectDB(){
    try {
        const MONGODB_URL = process.env.MONGODB_URL;
        if(MONGODB_URL){
            await mongoose.connect(MONGODB_URL)
            console.log("DB connected successfully.")
        }
        else{
            console.log("MONGODB_URL not found.")
        }
    } catch (error) {
        console.log("Error while connecting DB: ", error)
    }
}

module.exports = {
    connectDB
}