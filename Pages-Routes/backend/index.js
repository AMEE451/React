const express=require("express")
const dbconnection = require("./config/db")
const cors=require("cors")

const userrouter=require("../backend/routes/index")

require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/v1",userrouter)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server started");
    dbconnection()
})
