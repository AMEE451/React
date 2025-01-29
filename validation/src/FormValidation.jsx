
import React from "react";
import z from"zod"

const validation=z.object({
    name:z.string().min(2,"min 2 character").max(25,"max 25 characters"),
    email:z.string().email(),
    password:z.string().min(6,"min 6 charaters").regex(/[a-z]/,"small characters required")
    .regex(/[A-Z]/,"large characters required")
  t ad  .regex(/[@$%*_]/, "single special character required"),
    number:z.string().min(10,"min 10 letters required")

})

const userForm=()=>{
    const register,handle



const onsubmit=(data)=>{
    console.log("sumitted",data);
    
}

return(
    <div>
    <form onSubmit={handlesubmit(onsubmit)}>
        <input type="text" />
    </form>
    </div>
)

}