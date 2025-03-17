import express from "express"
// import cors from "cors"
import dotenv from "dotenv"
import dbconnection from "./config/db.js"
import reservationRouter from "./routes/foodroute.js"

const app=express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/food",reservationRouter)

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server started");
    dbconnection()
})