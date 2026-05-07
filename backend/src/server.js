const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const { connectDB } = require("./config/db.js")


const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()

app.use(cors({
    origin: "*"
}))

app.use(express.json())

app.get("/api", (req,res)=>{
    try {
        return res.status(200).json({message:"Hello World"});
    } catch (error) {
        console.log("Error while sending : ", error)
        return res.json({message: error.message})
    }
})

app.listen(PORT,()=>{
    console.log("Server working on Port ", PORT)
    connectDB();
})