import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbconnection= async()=>{
    await mongoose.connect(process.env.URL)
    console.log("connected");
    
}

export default dbconnection
