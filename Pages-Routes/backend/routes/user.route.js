const Router=require("express")
const { signup, login, getAllUsers } = require("../controller/user.controller")
const userRouter=Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/",getAllUsers)

module.exports=userRouter