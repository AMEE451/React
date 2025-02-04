const Router=require("express")
const { createUser, getUsers } = require("../controller/user.controller")
const userRouter=Router()

userRouter.post("/create",createUser)
userRouter.get("/",getUsers)

module.exports=userRouter