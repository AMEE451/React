import mongoose from "mongoose"
import dotenv from "dotenv"

const dbconnection=async()=>{
    await mongoose.connect(process.env.URL)
    console.log("connected");
    
}

export default dbconnection