import React, { useState } from "react";
import axios from "axios"
import API from "./config/Api";

const Form = ({ initialData = {} }) => {
    console.log(initialData);

    const [course, setcourse] = useState({
        title: initialData.title ? initialData.title : "",
        fee: initialData.fee ? initialData.fee : "",
        duration: initialData.duration ? initialData.duration : ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setcourse({
            ...course, [name]: value
        })
    }

    const createCourse = async (course) => {
        if (initialData?._id) {
            await API.patch(`/update/${initialData._id}`, course)
        }
        else {
            let res = await API.post("/create", course)
            console.log(res.data);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCourse(course)
        console.log(course);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={course.title} onChange={handleInput} />
                <input type="number" name="fee" value={course.fee} onChange={handleInput} />
                <input type="text" name="duration" value={course.duration} onChange={handleInput} />
                <input type="submit" value={"Add"} />
            </form>
        </div>
    )
}
export default Form