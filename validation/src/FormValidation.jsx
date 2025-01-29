
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const validation = z.object({
    name: z.string().min(2, "min 2 character").max(25, "max 25 characters"),
    number: z.string().min(10, "minimum 10 letters required").max(10, "should not excced 10 letters"),
    email: z.string().email(),
    password: z.string().min(6, "min 6 charaters").regex(/[a-z]/, "Small characters required")
        .regex(/[A-Z]/, "Capital characters required")
        .regex(/[@$%*_]/, "Special character required")
})

const FormValidation = () => {
    const { register,handleSubmit,watch,formState: { errors },} = useForm({
        resolver: zodResolver(validation),
        mode:"onChange"
    })

    let value=watch()
    console.log(value);
    

    const onsubmit = (data) => {
        console.log("sumitted", data);
    }

    const stylecss=(para)=>{
        if(errors[para]){
            return "1px solid red"
        }
        else if(value[para] && !errors[para]){
            return "1px solid green"
        }
        else{
            return "1px solid black"
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" {...register("name")} placeholder="name" style={{border:stylecss("name")}}/> <br />
                {errors.name && <p>{errors.name.message}</p>}
                <input type="number" {...register("number")} placeholder="contact" style={{border:stylecss("number")}}/> <br />
                {errors.number && <p>{errors.number.message}</p>}
                <input type="email" {...register("email")} placeholder="email"  style={{border:stylecss("email")}}/> <br />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="text" {...register("password")} placeholder="password"  style={{border:stylecss("password")}}/> <br />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" />

            </form>
        </div>
    )

}

export default FormValidation