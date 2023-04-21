import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import allRoutes from "./routes/index.js"

const app = express()
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


const PORT = process.env.PORT || 5000


app.use("/api", allRoutes)

const connectionDb = async ()=>{
    try {
    await mongoose.connect(process.env.CONNECTION_URL)
    console.log("MONGO connected")
    } catch (error) {
    console.log(error)
    }
}
app.listen(PORT, ()=>{
    connectionDb()
    console.log(`Server running on PORT: ${PORT}`)
})