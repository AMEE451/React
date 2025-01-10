import React, { useState } from "react";
import TodoItem from "./Todolist";

const Task = () => {
    let [data, setData] = useState({
        task: "",
        date: "",
        isCompleted: false
    })

    let [list, setList] = useState([])
    let [id, setId] = useState(-1)

    const handleInput = (e) => {
        let { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        if (data.task.length > 0 && data.date.length > 0) {
            if (id == -1) {
                setList([...list, { ...data, id: Date.now() }])

                setData({
                    task: "",
                    date: "",
                    isCompleted: false
                })
            }
            else {
                let temp = list.map((ele) =>
                    ele.id == id ? { ...data, id: id } : ele)
                setList(temp)
            }
            setId(-1)
        }

    }

    const handleDelete = (id) => {
        // console.log("delete", id);
        let temp = list.filter((ele) => ele.id != id)
        setList(temp)
        // console.log(temp);
    }

    const handleStatusChange = (id) => {
        let temp = list.map((ele) =>
            ele.id == id ? { ...ele, isCompleted: !ele.isCompleted } : ele)
        setList(temp)
    }

    const onUpdate = (prevData) => {
        console.log(prevData);
        setData({
          task: prevData.task,
          date: prevData.date,
          isCompleted: prevData.isCompleted,
        });
        setId(prevData.id);
      };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="task" onChange={handleInput} value={data.task} />
                <input type="date" name="date" onChange={handleInput} value={data.task} />
                <input type="submit" />
            </form>
            <hr />

            {list.length > 0 &&
                list.map((ele) => (
                    <TodoItem {...ele} key={ele.id} onDelete={handleDelete} onStatusUpdate={handleStatusChange} onUpdate={onUpdate} />
                ))
            }

        </div>
    )
}
export default Task 