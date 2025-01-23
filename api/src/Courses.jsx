import { useState, useEffect } from "react"
import CourseCard from "./Coursecard"
import axios from "axios"

const Courses = () => {
    let [data, setData] = useState([])
    const getCourses = async () => {
        try {
            let res = await axios.get("http://localhost:8090/")
            // console.log(res.data);
            if (res.data && Array.isArray(res.data.data)) {
                setData(res.data.data);  // Access the 'data' property
            } else {
                console.error("Expected an array inside 'data' but got:", res.data);
            }
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
    }, [handleDelete])


    return (
        <div>
            {
                data.map((ele) => {
                    return <CourseCard key={ele.id} {...ele} onDelete={handleDelete} />
                })
            }
        </div>
    )
}

export default Courses