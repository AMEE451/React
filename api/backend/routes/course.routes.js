import Router from "express"
// const {createcourse,getcourse}=require ("../controller/course.controller")
import {createcourse,deletecourse,getcourse,updatecourse} from "../controller/course.controller.js"
const courseRouter=Router()

courseRouter.post("/create",createcourse)
courseRouter.get("/courses",getcourse)
courseRouter.patch("/update/:id",updatecourse)
courseRouter.delete("/delete/:id",deletecourse)

export default courseRouter
