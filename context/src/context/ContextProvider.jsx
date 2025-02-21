import React, { createContext } from 'react'
import { useState } from 'react'

export const context=createContext()
const ContextProvider = ({children}) => {
    const [count,setCount]=useState(0)
    const Increase=(val)=>setCount(count+val)
    const Decrease=(val)=>setCount(count-val)
  return (
    <context.Provider value={{count,Increase,Decrease}}>{children}</context.Provider>
  )
}

export default ContextProvider