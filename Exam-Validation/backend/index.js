const express=require("express");
const dbconnection = require("./config/db");
const userRouter = require("./routes/user.route");
const cors=require("cors")
require("dotenv").config()
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use("/users",userRouter)

let PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbconnection
})

