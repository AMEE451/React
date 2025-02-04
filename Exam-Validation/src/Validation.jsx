import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import z from "zod"
import { useForm } from "react-hook-form";

const formvalidation = z.object({
    name: z.string().min(2, "minimum 2 characters").max(15, "maximum 15 characters"),
    number: z.string().min(10, "minimum 10 letters requires").max(10, "maximum 10 letters requires"),
    age: z.number().min(18, "minimum age:18 is required").max(30, "maximum age is 30 to signup"),
    dob : z.string().refine(value => {
        const birthDate = new Date(value);
        console.log(birthDate);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        let current=new Date().getFullYear()
        console.log(current);
        let birth=birthDate.getFullYear()
        console.log(bb);
        console.log(birth);
        
        return age >= 18;
      }, { message: "You must be at least 18 years old" }),
    gender : z.enum(['male', 'female', 'other'], { message: "Please select a valid gender" })
      
})

const Validation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(formvalidation),
        mode: "onChange"
    })
    let value = watch()
    console.log(value);

    const onsubmit = (data) => {
        console.log("submitted", data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type="text" {...register("name")} placeholder="name" /> <br />
                {errors.name && <p>{errors.name.message}</p>}
                <input type="number"  {...register("number")} placeholder="number" /> <br />
                {errors.number && <p>{errors.number.message}</p>}
                <input type="number"  {...register("age", { valueAsNumber: true })} placeholder="age" /> <br />
                {errors.age && <p>{errors.age.message}</p>}
                <input type="date" {...register("dob")} placeholder="date" /> <br />
                {errors.dob && <p>{errors.dob.message}</p>}
                <select name="" id="" {...register("gender")}> <br />
                    <option value="select gender">gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                {errors.gender && <p>{errors.gender.message}</p>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Validation
