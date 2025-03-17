
import express from "express"
import { createFood, getFood } from "../controller/foodcontroller.js"
const foodRouter=express.Router()

foodRouter.post("/post",createFood)
foodRouter.get("/",getFood)

export default foodRouter
