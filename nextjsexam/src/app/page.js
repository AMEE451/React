"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "@/app/styles/Course.css"; 

const Courses = () => {
    const [data, setData] = useState([]); 

   
    const getCourses = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);
            setData(res.data); 
        } catch (error) {
            console.log("Couldn't get", error);
        }
    };

    useEffect(() => {
        getCourses(); 
    }, []);

    return (
        <div>
            {
                    data.map((ele) => (
                        <div key={ele.id} className="course-container "> 
                            <h1>{ele.title}</h1> 
                            <h4>{ele.price}</h4> 
                            <p>{ele.description}</p>
                            <p>{ele.category}</p>
                        </div>
                    ))
            }
        </div>
    );
};

export default Courses;
