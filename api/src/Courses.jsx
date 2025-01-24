import { useState, useEffect } from "react"
import CourseCard from "./Coursecard"
import axios from "axios"

const Courses = () => {
    let [data, setData] = useState([])
    const getCourses = async () => {
        try {
            let res = await axios.get("http://localhost:8090/courses")
             console.log(res.data);
                setData(res.data.data);
           
        } catch (error) {
            console.log("couldn't get", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8090/delete/${id}`)
        } catch (error) {
            console.log("couldn't delete", error);
        }
    }

    useEffect(() => {
        getCourses()
    }, [])


    return (
        <div>
            {
                data.map((ele) => {
                    return <CourseCard key={ele._id} {...ele} onDelete={handleDelete} />
                })
            }
        </div>
    )
}

export default Courses
