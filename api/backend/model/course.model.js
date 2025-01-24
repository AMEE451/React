import mongoose from "mongoose"

const courseSchema=new mongoose.Schema({
    title:{type:String,required:true},
    fee:{type:Number,required:true},
    duration:{type:Number,required:true},
    
})

const Course=mongoose.model('PRODUCT',courseSchema)

export default Course