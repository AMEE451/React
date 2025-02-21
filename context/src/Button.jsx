import React, { useContext } from 'react'
import { context } from './context/ContextProvider'

const Button = () => {
    const {Increase,Decrease}=useContext(context)

  return (
    <div>
        <button onClick={()=>Increase(1)}>+</button>
        <button onClick={()=>Decrease(1)}>-</button>
    </div>
  )
}

export default Button