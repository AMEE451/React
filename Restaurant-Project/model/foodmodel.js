import mongoose from "mongoose";
import validator from "validator"

const foodSchema=new mongoose.Schema({
    firstname:{
        type:String,
        minlength:[3,"atleast 3 characters required"],
        maxlength:[20,"atleast 20 characters required"]
    },
    lastname:{
        type:String,
        minlength:[3,"atleast 3 characters required"],
        maxlength:[20,"atleast 20 characters required"]
    },
    email:{
        type:String,
        validate:[validator.isEmail,"provide valid email"]
    },
    phone:{
        type:String,
        minlength:[10,"atleast 10 characters required"],
        maxlength:[10,"atleast 10 characters required"]
    },
    time:{
        type:String
    },
    date:{
        type:String
    }
})

const Food=mongoose.model("Food",foodSchema)
export default Food