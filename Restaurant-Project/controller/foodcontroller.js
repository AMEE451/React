import Food from "../model/foodmodel.js"

export const createFood=async(req,res)=>{
    const{firstname,lastname,email,phone,time,date}=req.body
    if(!firstname || !lastname ||!email || !phone || !date || !time){
        res.status(400).send({msg:"all fields required"})
    }

    try {
        let user=await Food.create(req.body)
        return res.send({msg:user})
    } catch (error) {
        return res.status(404).send({msg:error.message})
    }
}

export const getFood=async(req,res)=>{
    try {
        let foods=await Food.find()
        res.status(200).send({msg:"fetched successfully",foods})
    } catch (error) {
        return res.status(404).send({msg:error.message})
    }
}