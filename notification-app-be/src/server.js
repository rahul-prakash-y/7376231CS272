const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const { connectDB } = require("./config/db.js")
const NotificationsRoute = require("./route/notifications.route.js");


const app = express()
const PORT = process.env.PORT || 5000
dotenv.config()

app.use(cors({
    origin: "*"
}))

app.use(express.json())


app.use("/api", NotificationsRoute);

app.listen(PORT,()=>{
    console.log("Server working on Port ", PORT)
    connectDB();
})