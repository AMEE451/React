const Router=require("express")
const userRouter = require("./user.route")
const taskRouter = require("./task.route")
const routes=Router()

routes.use("/users",userRouter)
routes.use("/task",taskRouter)
module.exports=routes