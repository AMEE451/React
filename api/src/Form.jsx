import React, { useState } from "react";
import axios from "axios"

const Form = () => {
    const [course, setcourse] = useState({
        title: "",
        fee: "",
        duration: "",
    })

const handleInput = (e) => {
    const { name, value } = e.target
    setcourse({
        ...course, [name]: value
    })
}

const createCourse = async (course) => {
    let res = await axios.post("http://localhost:8090/create", course)
    console.log(res.data);
}

const handleSubmit = (e) => {
    e.preventDefault()
    createCourse(course)
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