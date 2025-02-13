const Router=require("express")
const { create, getAllTask } = require("../controller/task")
const taskRouter=Router()

taskRouter.post("/",create)
taskRouter.get("/",getAllTask)

module.exports=taskRouter