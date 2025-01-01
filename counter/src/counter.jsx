import React, { useState } from "react";

const Counter=({initial})=>{
    let [count,setCount]=useState(initial)

    // const remove=()=>{
    //     setCount(count-1)
    // }
    // const add=()=>{    
    //     setCount(count+1)
    // }

    const handlecounter=(opr,value)=>{
        if(opr=="+"){
            setCount(count+value)
        }
        else{
            setCount(count-value)
        }
    }

    return (
        <div>
            <button onClick={()=>handlecounter("+",5)}>-</button>
            <button>{count}</button>
            <button onClick={()=>handlecounter("-",5)}>+</button>
        </div>
    )
}

export default Counter