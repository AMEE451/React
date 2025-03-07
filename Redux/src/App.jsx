import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrease, increase, reset} from "./redux/Action"

const App=()=>{
  let data=useSelector((store)=>store.count)
  const dispatch=useDispatch()

  const add=()=>{
    dispatch(increase(1))
  }

  const sub=()=>{
    dispatch(decrease())
  }

  const Reset=()=>{
    dispatch(reset())
  }
    return(
      <div>
        <h1>Count:{data}</h1>
        <button onClick={add}>Increase</button>
        <button onClick={sub}>Decrease</button>
        <button onClick={Reset}>Reset</button>
      </div>
    )  
}

export default App

