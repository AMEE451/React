const Router=require("express")
const userRouter = require("./user.route")
const routes=Router()

routes.use("/users",userRouter)
module.exports=routes