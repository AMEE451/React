const Task=require("../model/task")

const create=async(req,res)=>{
    req.body.assignedBy=req.user.id
    let task=await Task.create(req.body)
    res.send(task)
}

const getAllTask=async(req,res)=>{
    let tasks=await Task.find()
    res.send(tasks)
}

module.exports={create,getAllTask}