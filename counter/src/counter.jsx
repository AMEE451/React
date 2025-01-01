
import React, { useState } from "react";

const Counter = ({ initial }) => {
    let [count, setCount] = useState(initial)

    const handlecounter = (opr, value) => {
        if (opr === "+") {
            setCount(count + value)
        }
        else {
            setCount(count - value)
        }
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => handlecounter("-", 5)}>-</button>
            <button>{count}</button>
            <button onClick={() => handlecounter("+", 5)}>+</button>
        </div>
    )
}

export default Counter