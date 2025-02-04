const User = require("../model/user.model")

const createUser=async(req,res)=>{
    try {
        const user= await User.create(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json({msg:"fetched successfully",users:users})
    } catch (error) {
        res.ststus(500).json({error:error.message})
    }
}


module.exports={createUser,getUsers}
